(/**
 *
 * @param {CryptoApi} CryptoApi
 * @returns {Sha256}
 */
    function (CryptoApi) {
    'use strict';

    var Sha256 = function Sha256(name) {
        CryptoApi.HasherInterface.call(this, name);
        if (this.name == 'sha224') {
            this.state.hash = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
        } else {
            this.state.hash = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
                0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
        }
    };
    var Hasher = function () {};
    Hasher.prototype = CryptoApi.HasherInterface.prototype;

    Sha256.prototype = new Hasher;
    Sha256.prototype.constructor = Sha256;

    /**
     * Hash state
     * @type {number[]}
     */
    Sha256.prototype.state.hash = [];

    // Transform constants
    Sha256.prototype.K = [
        0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
        0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
        0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
        0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
        0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
        0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
        0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
        0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

    Sha256.prototype.unitOrder = 1; // Reverse order of bytes

    Sha256.prototype.processBlock = function processBlock(M) {
        // Working variables
        var a = this.state.hash[0];
        var b = this.state.hash[1];
        var c = this.state.hash[2];
        var d = this.state.hash[3];
        var e = this.state.hash[4];
        var f = this.state.hash[5];
        var g = this.state.hash[6];
        var h = this.state.hash[7];
        var W = [];

        // Calculate hash
        for (var i = 0; i < 64; i++) {
            if (i < 16) {
                W[i] = M[i] | 0;
            } else {
                W[i] = W[i - 16] + (
                    CryptoApi.Tools.rotateRight(W[i - 15], 7) ^
                    CryptoApi.Tools.rotateRight(W[i - 15], 18) ^
                    (W[i - 15] >>> 3)
                    ) +
                    W[i - 7] + (
                    CryptoApi.Tools.rotateRight(W[i - 2], 17) ^
                    CryptoApi.Tools.rotateRight(W[i - 2], 19) ^
                    (W[i - 2] >>> 10)
                    );
            }

            var t1 = h + (CryptoApi.Tools.rotateRight(e, 6) ^ CryptoApi.Tools.rotateRight(e, 11) ^
                CryptoApi.Tools.rotateRight(e, 25)) + ((e & f) ^ (~e & g)) + this.K[i] + W[i];
            var t2 = (CryptoApi.Tools.rotateRight(a, 2) ^ CryptoApi.Tools.rotateRight(a, 13) ^
                CryptoApi.Tools.rotateRight(a, 22)) + ((a & b) ^ (a & c) ^ (b & c));
            h = g;
            g = f;
            f = e;
            e = (d + t1) | 0;
            d = c;
            c = b;
            b = a;
            a = (t1 + t2) | 0;
        }

        this.state.hash[0] = (this.state.hash[0] + a) | 0;
        this.state.hash[1] = (this.state.hash[1] + b) | 0;
        this.state.hash[2] = (this.state.hash[2] + c) | 0;
        this.state.hash[3] = (this.state.hash[3] + d) | 0;
        this.state.hash[4] = (this.state.hash[4] + e) | 0;
        this.state.hash[5] = (this.state.hash[5] + f) | 0;
        this.state.hash[6] = (this.state.hash[6] + g) | 0;
        this.state.hash[7] = (this.state.hash[7] + h) | 0;
    };

    Sha256.prototype.finalize = function finalize() {
        // Add padding
        var padLen = this.message.length < 56 ? 56 - this.message.length : 120 - this.message.length;
        console.log(padLen);
        var padding = [];
        for (var i = 0; i < padLen; i++) {
            padding.push(i == 0 ? 0x80 : 0);
        }
        // Add length
        var lengthBits = this.length * 8;
        for (i = 0; i < 4; i++) {
            padding.push(0);
        }
        for (i = 3; i >= 0; i--) {
            padding.push((lengthBits >> (8 * i)) & 0xff);
        }
        this.update(padding);

        var hash = [];
        for (i = 0; i < (this.name == 'sha224' ? this.state.hash.length - 1 : this.state.hash.length); i++) {
            for (var j = 3; j >= 0; j--) {
                hash.push((this.state.hash[i] >> 8 * j) & 0xFF);
            }
        }

        // Return hash
        return CryptoApi.hashArray(hash);
    };

    CryptoApi.Hashers.add('sha256', Sha256);
    CryptoApi.Hashers.add('sha224', Sha256);
    return Sha256;
})(CryptoApi);