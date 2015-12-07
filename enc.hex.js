;(
    function (root, factory) {
        "use strict";
        if (typeof root.CryptoApi === 'undefined') {
            root.CryptoApi = require('./')
        }
        return factory(root.CryptoApi);
    }(this, /**
     *
     * @param {CryptoApi} CryptoApi
     * @returns {Md2}
     */
    function (CryptoApi) {
        'use strict';

        var Hex = function Hex(hash) {
            CryptoApi.EncodeInterface.call(this, hash);
        };
        Hex.prototype = Object.create(CryptoApi.EncodeInterface.prototype);
        Hex.prototype.constructor = Hex;
        Hex.prototype.stringify = function stringify() {
            for (var str = '', i = 0; i < this.hash.length; i++) {
                var hex = this.hash[i].toString(16);
                str += (hex.length < 2 ? '0' : '') + hex;
            }
            return str;
        };

        CryptoApi.Encodes.add('hex', Hex);
        return Hex;
    })
);