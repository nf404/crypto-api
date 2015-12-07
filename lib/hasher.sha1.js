;(
    function (root, factory) {
        "use strict";
        if (typeof root.CryptoApi === 'undefined') {
            root.CryptoApi = require('./crypto-api')
        }
        return factory(root.CryptoApi);
    }(this, /**
     *
     * @param {CryptoApi} CryptoApi
     * @returns {Sha1}
     */
    function (CryptoApi) {
        'use strict';

        var Sha1 = function sha1() {
            CryptoApi.HasherInterface.call(this);
            this.state.hash = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]; // Hash state
        };
        var Hasher = function () {
        };
        Hasher.prototype = CryptoApi.HasherInterface.prototype;

        Sha1.prototype = new Hasher;
        Sha1.prototype.constructor = Sha1;

        // Transform constants
        Sha1.prototype.K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

        Sha1.prototype.unitOrder = 1; // Reverse order of bytes

        Sha1.prototype.processBlock = function processBlock(M) {
            // Working variables
            var a = this.state.hash[0];
            var b = this.state.hash[1];
            var c = this.state.hash[2];
            var d = this.state.hash[3];
            var e = this.state.hash[4];
            var W = [];

            // Calculate hash
            for (var i = 0; i < 80; i++) {
                if (i < 16) {
                    W[i] = M[i] | 0;
                } else {
                    W[i] = CryptoApi.Tools.rotateLeft(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
                }

                var t = CryptoApi.Tools.rotateLeft(a, 5) + e + W[i] + this.K[(i / 20) >> 0];
                if (i < 20) {
                    t += ((b & c) | (~b & d));
                } else if (i < 40) {
                    t += (b ^ c ^ d);
                } else if (i < 60) {
                    t += ((b & c) | (b & d) | (c & d));
                } else {
                    t += (b ^ c ^ d);
                }
                e = d;
                d = c;
                c = CryptoApi.Tools.rotateLeft(b, 30);
                b = a;
                a = t;
            }

            this.state.hash[0] = (this.state.hash[0] + a) | 0;
            this.state.hash[1] = (this.state.hash[1] + b) | 0;
            this.state.hash[2] = (this.state.hash[2] + c) | 0;
            this.state.hash[3] = (this.state.hash[3] + d) | 0;
            this.state.hash[4] = (this.state.hash[4] + e) | 0;
        };

        Sha1.prototype.finalize = function finalize() {
            // Add padding
            var padLen = this.message.length < 56 ? 56 - this.message.length : 120 - this.message.length;
            var padding = [];
            for (var i = 0; i < padLen; i++) {
                padding.push(i === 0 ? 0x80 : 0);
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
            for (i = 0; i < this.state.hash.length; i++) {
                for (var j = 3; j >= 0; j--) {
                    hash.push((this.state.hash[i] >> 8 * j) & 0xFF);
                }
            }

            // Return hash
            return CryptoApi.hashArray(hash);
        };

        CryptoApi.Hashers.add('sha1', Sha1);
        return Sha1;
    })
);