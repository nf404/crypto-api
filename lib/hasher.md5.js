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
     * @returns {Md5}
     */
    function (CryptoApi) {
        'use strict';

        var Md5 = function md5() {
            CryptoApi.HasherInterface.call(this);
            this.state.hash = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476];
        };
        var Hasher = function () {
        };
        Hasher.prototype = CryptoApi.HasherInterface.prototype;

        Md5.prototype = new Hasher;
        Md5.prototype.constructor = Md5;

        /**
         * Hash state
         * @type {number[]}
         */
        Md5.prototype.state.hash = [];

        // Transform constants
        Md5.prototype.S = [
            [7, 12, 17, 22],
            [5, 9, 14, 20],
            [4, 11, 16, 23],
            [6, 10, 15, 21]
        ];
        Md5.prototype.T = [];
        for (var i = 0; i < 64; i++) {
            Md5.prototype.T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
        }

        // Transform functions
        Md5.prototype.FF = function FF(x, y, z) {
            return (x & y) | (~x & z);
        };
        Md5.prototype.GG = function GG(x, y, z) {
            return (x & z) | (y & ~z);
        };
        Md5.prototype.HH = function HH(x, y, z) {
            return x ^ y ^ z;
        };
        Md5.prototype.II = function II(x, y, z) {
            return y ^ (x | ~z);
        };
        Md5.prototype.CC = function CC(f, k, a, x, y, z, m, s) {
            return CryptoApi.Tools.rotateLeft((a + f(x, y, z) + m + k), s) + x;
        };

        Md5.prototype.processBlock = function processBlock(block) {
            // Working variables
            var a = this.state.hash[0];
            var b = this.state.hash[1];
            var c = this.state.hash[2];
            var d = this.state.hash[3];

            // Round 1
            a = this.CC(this.FF, this.T[0], a, b, c, d, block[0], this.S[0][0]);
            d = this.CC(this.FF, this.T[1], d, a, b, c, block[1], this.S[0][1]);
            c = this.CC(this.FF, this.T[2], c, d, a, b, block[2], this.S[0][2]);
            b = this.CC(this.FF, this.T[3], b, c, d, a, block[3], this.S[0][3]);
            a = this.CC(this.FF, this.T[4], a, b, c, d, block[4], this.S[0][0]);
            d = this.CC(this.FF, this.T[5], d, a, b, c, block[5], this.S[0][1]);
            c = this.CC(this.FF, this.T[6], c, d, a, b, block[6], this.S[0][2]);
            b = this.CC(this.FF, this.T[7], b, c, d, a, block[7], this.S[0][3]);
            a = this.CC(this.FF, this.T[8], a, b, c, d, block[8], this.S[0][0]);
            d = this.CC(this.FF, this.T[9], d, a, b, c, block[9], this.S[0][1]);
            c = this.CC(this.FF, this.T[10], c, d, a, b, block[10], this.S[0][2]);
            b = this.CC(this.FF, this.T[11], b, c, d, a, block[11], this.S[0][3]);
            a = this.CC(this.FF, this.T[12], a, b, c, d, block[12], this.S[0][0]);
            d = this.CC(this.FF, this.T[13], d, a, b, c, block[13], this.S[0][1]);
            c = this.CC(this.FF, this.T[14], c, d, a, b, block[14], this.S[0][2]);
            b = this.CC(this.FF, this.T[15], b, c, d, a, block[15], this.S[0][3]);

            // Round 2
            a = this.CC(this.GG, this.T[16], a, b, c, d, block[1], this.S[1][0]);
            d = this.CC(this.GG, this.T[17], d, a, b, c, block[6], this.S[1][1]);
            c = this.CC(this.GG, this.T[18], c, d, a, b, block[11], this.S[1][2]);
            b = this.CC(this.GG, this.T[19], b, c, d, a, block[0], this.S[1][3]);
            a = this.CC(this.GG, this.T[20], a, b, c, d, block[5], this.S[1][0]);
            d = this.CC(this.GG, this.T[21], d, a, b, c, block[10], this.S[1][1]);
            c = this.CC(this.GG, this.T[22], c, d, a, b, block[15], this.S[1][2]);
            b = this.CC(this.GG, this.T[23], b, c, d, a, block[4], this.S[1][3]);
            a = this.CC(this.GG, this.T[24], a, b, c, d, block[9], this.S[1][0]);
            d = this.CC(this.GG, this.T[25], d, a, b, c, block[14], this.S[1][1]);
            c = this.CC(this.GG, this.T[26], c, d, a, b, block[3], this.S[1][2]);
            b = this.CC(this.GG, this.T[27], b, c, d, a, block[8], this.S[1][3]);
            a = this.CC(this.GG, this.T[28], a, b, c, d, block[13], this.S[1][0]);
            d = this.CC(this.GG, this.T[29], d, a, b, c, block[2], this.S[1][1]);
            c = this.CC(this.GG, this.T[30], c, d, a, b, block[7], this.S[1][2]);
            b = this.CC(this.GG, this.T[31], b, c, d, a, block[12], this.S[1][3]);

            // Round 3
            a = this.CC(this.HH, this.T[32], a, b, c, d, block[5], this.S[2][0]);
            d = this.CC(this.HH, this.T[33], d, a, b, c, block[8], this.S[2][1]);
            c = this.CC(this.HH, this.T[34], c, d, a, b, block[11], this.S[2][2]);
            b = this.CC(this.HH, this.T[35], b, c, d, a, block[14], this.S[2][3]);
            a = this.CC(this.HH, this.T[36], a, b, c, d, block[1], this.S[2][0]);
            d = this.CC(this.HH, this.T[37], d, a, b, c, block[4], this.S[2][1]);
            c = this.CC(this.HH, this.T[38], c, d, a, b, block[7], this.S[2][2]);
            b = this.CC(this.HH, this.T[39], b, c, d, a, block[10], this.S[2][3]);
            a = this.CC(this.HH, this.T[40], a, b, c, d, block[13], this.S[2][0]);
            d = this.CC(this.HH, this.T[41], d, a, b, c, block[0], this.S[2][1]);
            c = this.CC(this.HH, this.T[42], c, d, a, b, block[3], this.S[2][2]);
            b = this.CC(this.HH, this.T[43], b, c, d, a, block[6], this.S[2][3]);
            a = this.CC(this.HH, this.T[44], a, b, c, d, block[9], this.S[2][0]);
            d = this.CC(this.HH, this.T[45], d, a, b, c, block[12], this.S[2][1]);
            c = this.CC(this.HH, this.T[46], c, d, a, b, block[15], this.S[2][2]);
            b = this.CC(this.HH, this.T[47], b, c, d, a, block[2], this.S[2][3]);

            // Round 4
            a = this.CC(this.II, this.T[48], a, b, c, d, block[0], this.S[3][0]);
            d = this.CC(this.II, this.T[49], d, a, b, c, block[7], this.S[3][1]);
            c = this.CC(this.II, this.T[50], c, d, a, b, block[14], this.S[3][2]);
            b = this.CC(this.II, this.T[51], b, c, d, a, block[5], this.S[3][3]);
            a = this.CC(this.II, this.T[52], a, b, c, d, block[12], this.S[3][0]);
            d = this.CC(this.II, this.T[53], d, a, b, c, block[3], this.S[3][1]);
            c = this.CC(this.II, this.T[54], c, d, a, b, block[10], this.S[3][2]);
            b = this.CC(this.II, this.T[55], b, c, d, a, block[1], this.S[3][3]);
            a = this.CC(this.II, this.T[56], a, b, c, d, block[8], this.S[3][0]);
            d = this.CC(this.II, this.T[57], d, a, b, c, block[15], this.S[3][1]);
            c = this.CC(this.II, this.T[58], c, d, a, b, block[6], this.S[3][2]);
            b = this.CC(this.II, this.T[59], b, c, d, a, block[13], this.S[3][3]);
            a = this.CC(this.II, this.T[60], a, b, c, d, block[4], this.S[3][0]);
            d = this.CC(this.II, this.T[61], d, a, b, c, block[11], this.S[3][1]);
            c = this.CC(this.II, this.T[62], c, d, a, b, block[2], this.S[3][2]);
            b = this.CC(this.II, this.T[63], b, c, d, a, block[9], this.S[3][3]);

            this.state.hash = [
                (this.state.hash[0] + a) | 0,
                (this.state.hash[1] + b) | 0,
                (this.state.hash[2] + c) | 0,
                (this.state.hash[3] + d) | 0
            ];
        };

        Md5.prototype.finalize = function finalize() {
            // Add padding
            var padLen = this.message.length < 56 ? 56 - this.message.length : 120 - this.message.length;
            var padding = [];
            for (var i = 0; i < padLen; i++) {
                padding.push(i === 0 ? 0x80 : 0);
            }
            // Add length
            var lengthBits = this.length * 8;
            for (i = 0; i < 4; i++) {
                padding.push((lengthBits >> (8 * i)) & 0xff);
            }
            // @todo fix length to 64 bit
            for (i = 0; i < 4; i++) {
                padding.push(0);
            }

            this.update(padding);

            var hash = [];
            for (i = 0; i < this.state.hash.length; i++) {
                for (var j = 0; j < 4; j++) {
                    hash.push((this.state.hash[i] >> 8 * j) & 0xFF);
                }
            }

            // Return hash
            return CryptoApi.hashArray(hash);
        };

        CryptoApi.Hashers.add('md5', Md5);
        return Md5;
    })
);