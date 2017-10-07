/*global module, require */
(/**
 * @param {Object} root
 * @returns {CryptoApi}
 */
    function (root) {
    'use strict';
    /**
     * @class CryptoApi
     * @classdesc Main class
     * @public
     */
    var CryptoApi = function cryptoApi () {
        /**
         * @property Macs
         * @type {Macs}
         */
        this.Macs = new Macs();
        /**
         * @property Tools
         * @type {Tools}
         */
        this.Tools = new Tools();
    };

    var MacInterface = function () {};
    /**
     * @memberOf MacInterface
     * @param {string|number[]} key
     * @param {string} hasher
     * @param {Object} options
     * @constructor
     */
    MacInterface.prototype.constructor = function constructor(key, hasher, options) {};
    /**
     * @desc Process ready block
     * @memberOf MacInterface
     * @method processBlock
     * @param {number[]} block
     */
    MacInterface.prototype.processBlock = function processBlock(block) {};
    /**
     * Update message
     * @memberOf MacInterface
     * @method update
     * @param {string|number[]} message
     * @return {MacInterface}
     */
    MacInterface.prototype.update = function update(message) {};
    /**
     * @desc Process last block and return hash
     * @memberOf MacInterface
     * @method finalize
     * @return {HashArray} hash
     */
    MacInterface.prototype.finalize = function finalize() {};

    /**
     * @class BaseMac
     * @extends Hasher
     * @param {string|number[]} key
     * @param {string} hasher
     * @param {Object} options
     * @public
     */
    var BaseMac = function(key, hasher, options) {};
    BaseMac.prototype = Object.create(Hasher.prototype);
    BaseMac.prototype.constructor = function (key, hasher, options) {
        Hasher.prototype.constructor.call(this, hasher, options);
    };
    /**
     * @memberOf CryptoApi
     * @member {BaseMac} BaseMac
     */
    CryptoApi.prototype.BaseMac = BaseMac;

    /**
     * @class Hashers
     * @classdesc Collection of hashers
     */
    var Hashers = function hashers() {
        /**
         * @property hashers
         * @type {Object}
         */
        this.hashers = {};
    };
    /**
     * @memberOf Hashers
     * @method add
     * @param {string} name
     * @param {HasherInterface} hasher
     */
    Hashers.prototype.add = function add(name, hasher) {
        if (hasher === undefined) {
            throw Error('Error adding hasher: ' + name);
        }
        this.hashers[name] = hasher;
    };
    /**
     * @memberOf Hashers
     * @method add
     * @param {string} name
     * @param {Object} options
     * @returns {HasherInterface}
     */
    Hashers.prototype.get = function get(name, options) {
        var Hasher = this.hashers[name];
        if ((Hasher === undefined) && (typeof require !== 'undefined')) {
            var filename = name;
            switch (filename) {
              case 'sha224':
                filename = 'sha256';
                break;
              case 'sha384':
                filename = 'sha512';
                break;
              case 'sha512/224':
                filename = 'sha512';
                break;
              case 'sha512/256':
                filename = 'sha512';
                break;
              case 'ripemd128':
                filename = 'ripemd160';
                break;
              case 'ripemd256':
                filename = 'ripemd160';
                break;
              case 'ripemd320':
                filename = 'ripemd160';
                break;
              case 'whirlpool-0':
                filename = 'whirlpool';
                break;
              case 'whirlpool-t':
                filename = 'whirlpool';
                break;
              case 'snefru-2-128':
                filename = 'snefru';
                break;
              case 'snefru-2-256':
                filename = 'snefru';
                break;
              case 'snefru-4-128':
                filename = 'snefru';
                break;
              case 'snefru-4-256':
                filename = 'snefru';
                break;
              case 'snefru-8-128':
                filename = 'snefru';
                break;
              case 'snefru-8-256':
                filename = 'snefru';
                break;
            }
            require('./hasher.' + filename);
            Hasher = this.hashers[name];
        }
        if (Hasher === undefined) {
            throw Error('No hash algorithm: ' + name);
        }
        return new Hasher(name, options);
    };

    /**
     * @class Macs
     * @classdesc Collection of macs
     */
    var Macs = function macs() {
        /**
         * @property macs
         * @type {Object}
         */
        this.macs = {};
    };
    /**
     * @memberOf Macs
     * @method add
     * @param {string} name
     * @param {BaseMac} mac
     */
    Macs.prototype.add = function add(name, mac) {
        if (mac === undefined) {
            throw Error('Error adding mac: ' + name);
        }
        this.macs[name] = mac;
    };
    /**
     * @memberOf Macs
     * @method get
     * @param {string} name
     * @param {string|number[]} key
     * @param {string} hasher
     * @param {Object} options
     * @returns {MacInterface}
     */
    Macs.prototype.get = function get(name, key, hasher, options) {
        var Mac = this.macs[name];
        if ((Mac === undefined) && (typeof require !== 'undefined')) {
            require('./mac.' + name);
            Mac = this.macs[name];
        }
        if (Mac === undefined) {
            throw Error('No mac type: ' + name);
        }
        return new Mac(key, hasher, options);
    };

    /**
     * @class HashArray
     * @classdesc Array of hash bytes
     * @instanceof {Array}
     * @param {number[]} hash
     * @param {Encodes} Encodes
     * @public
     */
    var HashArray = function (hash, Encodes) {
        Array.prototype.push.apply(this, hash);
        /**
         * @property Encodes
         * @type {Encodes}
         */
        this.Encodes = Encodes;
    };
    HashArray.prototype = Object.create(Array.prototype);
    HashArray.prototype.constructor = HashArray;

    /**
     * Get hash as string
     * @param {string} method
     * @returns {string|*}
     */
    HashArray.prototype.stringify = function stringify(method) {
        return this.Encodes.get(method, this).stringify();
    };

    /**
     * Hash message with algo
     *
     * @memberof CryptoApi
     * @method hash
     * @public
     * @param {string} algo
     * @param {string} message
     * @param {Object} options
     * @return {HashArray} hash
     */
    CryptoApi.prototype.hash = function hash(algo, message, options) {
      var hash = this.hasher(algo, options);
      hash.update(message);
        return hash.finalize();
    };
    /**
     * Get new Hasher object
     *
     * @memberof CryptoApi
     * @method hasher
     * @public
     * @param {string} algo
     * @param {Object} options
     * @returns {HasherInterface}
     */
    CryptoApi.prototype.hasher = function hasher(algo, options) {
        return this.Hashers.get(algo, options);
    };
    /**
     * Get new MAC object
     *
     * @memberof CryptoApi
     * @method mac
     * @public
     * @param {string} algo
     * @param {string|number[]} key
     * @param {string} hasher
     * @param {Object} options
     * @returns {MacInterface}
     */
    CryptoApi.prototype.mac = function mac(algo, key, hasher, options) {
        return this.Macs.get(algo, key, hasher, options);
    };
    /**
     * Get new HashArray
     *
     * @memberof CryptoApi
     * @method hashArray
     * @public
     * @param {number[]} hash
     * @returns {HashArray}
     */
    CryptoApi.prototype.hashArray = function hashArray(hash) {
        return new HashArray(hash, this.Encodes);
    };
    root.CryptoApi = new CryptoApi();
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = root.CryptoApi;
    } else {
        return root.CryptoApi;
    }
})(this);