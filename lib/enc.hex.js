/*global this, require */
(/**
 * @param {CryptoApi} CryptoApi
 * @returns {Hex}
 */
    function (CryptoApi) {
    'use strict';

    /**
     * @class Hex
     * @extends BaseEncode
     * @implements EncodeInterface
     * @classdesc Hex encode
     * @param {HashArray} hash
     */
    var Hex = function hex(hash) {
        this.constructor(hash);
    };
    Hex.prototype = Object.create(CryptoApi.BaseEncode.prototype);
    /**
     * @memberOf Hex
     * @method stringify
     * @returns {string}
     */
    Hex.prototype.stringify = function stringify() {
        for (var str = '', i = 0; i < this.hash.length; i++) {
            var hex = this.hash[i].toString(16);
            str += (hex.length < 2 ? '0' : '') + hex;
        }
        return str;
    };

    CryptoApi.Encodes.add('hex', Hex);
    return Hex;
})(
    this.CryptoApi || require('./crypto-api')
);