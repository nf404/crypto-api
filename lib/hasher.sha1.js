/*global require */
(/**
 *
 * @param {CryptoApi} CryptoApi
 * @returns {Sha1}
 */
    function (CryptoApi) {
    'use strict';

    /**
     * @class Sha1
     * @classdesc Sha1 hasher
     * @implements HasherInterface
     * @extends BaseHasher
     */
    var Sha1 = function (name, options) {
        this.constructor(name, options);
    };
    Sha1.prototype = Object.create(CryptoApi.BaseHasher.prototype);
    /**
     * @memberOf Sha1
     * @constructor
     */
    Sha1.prototype.constructor = function (name, options) {
        CryptoApi.BaseHasher.prototype.constructor.call(this, name, options);
        /**
         * @desc Hash state
         * @memberOf! Sha1#
         * @alias state.hash
         * @type {number[]}
         */
        this.state.hash = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
    };

    // Transform constants
    Sha1.prototype.K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

    Sha1.prototype.unitOrder = 1; // Reverse order of bytes

    Sha1.prototype.processBlock = function processBlock(M) {
        // Working variables
        var a = this.state.hash[0] | 0;
        var b = this.state.hash[1] | 0;
        var c = this.state.hash[2] | 0;
        var d = this.state.hash[3] | 0;
        var e = this.state.hash[4] | 0;
        var W = [];

        // Calculate hash
        for (var i = 0; i < 80; i++) {
            if (i < 16) {
                W[i] = M[i] | 0;
            } else {
                W[i] = CryptoApi.Tools.rotateLeft(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1) | 0;
            }

            var t = (CryptoApi.Tools.rotateLeft(a, 5) + e + W[i] + this.K[(i / 20) >> 0]) | 0;
            if (i < 20) {
                t = (t + ((b & c) | (~b & d))) | 0;
            } else if (i < 40) {
                t = (t + (b ^ c ^ d)) | 0;
            } else if (i < 60) {
                t = (t + ((b & c) | (b & d) | (c & d))) | 0;
            } else {
                t = (t + (b ^ c ^ d)) | 0;
            }
            e = d;
            d = c;
            c = CryptoApi.Tools.rotateLeft(b, 30) | 0;
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
        var padLen = this.state.message.length < 56 ? 56 - this.state.message.length : 120 - this.state.message.length;
        padLen += 4; // @todo fix length to 64 bit
        var padding = new Array(padLen);
        padding[0] = 0x80;

        // Add length
        var lengthBits = this.state.length * 8;
        for (var i = 3; i >= 0; i--) {
            padding.push((lengthBits >> (8 * i)) & 0xff);
        }

        this.update(padding);

        var hash = [];
        for (var k = 0, l = this.state.hash.length; k < l; k++) {
            for (var j = 3; j >= 0; j--) {
                hash.push((this.state.hash[k] >> 8 * j) & 0xFF);
            }
        }

        // Return hash
        return CryptoApi.hashArray(hash);
    };

    CryptoApi.Hashers.add('sha1', Sha1);
    return Sha1;
})(
    this.CryptoApi || require('./crypto-api')
);