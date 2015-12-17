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
         * @property Hashers
         * @type {Hashers}
         */
        this.Hashers = new Hashers();
        /**
         * @property Encodes
         * @type {Encodes}
         */
        this.Encodes = new Encodes();
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

    /**
     * @interface HasherInterface
     * @classdesc All hashers MUST implement this interface
     * @public
     */
    var HasherInterface = function () {};
    /**
     * @memberOf HasherInterface
     * @constructor
     */
    HasherInterface.prototype.constructor = function constructor() {};
    /**
     * @desc Process ready block
     * @memberOf HasherInterface
     * @method processBlock
     * @param {number[]} block
     */
    HasherInterface.prototype.processBlock = function processBlock(block) {};
    /**
     * Update message
     * @memberOf HasherInterface
     * @method update
     * @param {string|number[]} message
     * @return {HasherInterface}
     */
    HasherInterface.prototype.update = function update(message) {};
    /**
     * @desc Process last block and return hash
     * @memberOf HasherInterface
     * @method finalize
     * @return {HashArray} hash
     */
    HasherInterface.prototype.finalize = function finalize() {};

    /**
     * @class BaseHasher
     * @param {string} name
     * @param {Object} options
     * @public
     */
    var BaseHasher = function(name, options) {};
    BaseHasher.prototype.constructor = function (name, options) {
        /**
         * @desc Hasher name
         * @property name
         * @type {string}
         */
        this.name = name;
        /**
         * @desc All algorithm variables that changed during process
         * @property state
         * @type {Object}
         */
        this.state = {};
        /**
         * @desc Unprocessed Message
         * @memberof! BaseHasher#
         * @alias state.message
         * @type {number[]}
         */
        this.state.message = [];
        /**
         * @desc Length of message
         * @memberof! BaseHasher#
         * @alias state.length
         * @type {number}
         */
        this.state.length = 0;
        /**
         * @memberof! BaseHasher#
         * @alias state.options
         * @type {Object}
         */
        this.state.options = options;
    };

    /**
     *  Size of unit in bytes (4 = 32 bits)
     * @memberOf BaseHasher
     * @member {number} unitSize
     * @static
     */
    BaseHasher.prototype.unitSize = 4;
    /**
     * Bytes order in unit
     *   0 - normal
     *   1 - reverse
     * @memberOf BaseHasher
     * @member {number} unitOrder
     * @static
     */
    BaseHasher.prototype.unitOrder = 0;
    /**
     * Size of block in units
     * @memberOf BaseHasher
     * @member {number} blockSize
     * @static
     */
    BaseHasher.prototype.blockSize = 16;
    /**
     * Return current state
     * @memberOf BaseHasher
     * @method getState
     * @returns {Object}
     */
    BaseHasher.prototype.getState = function getState() {
        return JSON.parse(JSON.stringify(this.state));
    };
    /**
     * Set state
     * @memberOf BaseHasher
     * @method setState
     * @param {Object} state
     * @return {BaseHasher}
     */
    BaseHasher.prototype.setState = function setState(state) {
        this.state = state;
        return this;
    };
    /**
     * Update message
     * @memberOf BaseHasher
     * @method update
     * @param {string|number[]} message
     * @return {BaseHasher}
     */
    BaseHasher.prototype.update = function update(message) {
        if (typeof message === 'string') {
            message = unescape(encodeURIComponent(message)); // @todo Change to something fast and not deprecated
            this.state.length += message.length;
            for (var i = 0, msgLen = message.length; i < msgLen; i++) {
                this.state.message.push(message.charCodeAt(i));
            }
        } else {
            this.state.length += message.length;
            this.state.message = this.state.message.concat(message);
        }
        this.process();
        return this;
    };
    /**
     * Process ready blocks
     * @memberOf BaseHasher
     * @method process
     */
    BaseHasher.prototype.process = function process() {
        while (this.state.message.length >= this.blockSize * this.unitSize) {
            var j=0, b=0, block = this.state.message.splice(0, this.blockSize * this.unitSize);
            if (this.unitSize > 1) {
                var blockUnits = [];
                for (var i = 0, u = 0; i < block.length; i += this.unitSize, u++) {
                    if (this.unitOrder === 1) {
                        for (j = this.unitSize - 1, b = 0; j >= 0; j--, b += 8) {
                            blockUnits[u] |= (block[i + j] << b);
                        }
                    } else {
                        for (j = 0, b = 0; j < this.unitSize; j++, b += 8) {
                            blockUnits[u] |= (block[i + j] << b);
                        }
                    }
                }
                this.processBlock(blockUnits);
            } else {
                this.processBlock(block);
            }
        }
    };
    /**
     * @memberOf CryptoApi
     * @member {BaseHasher} BaseHasher
     */
    CryptoApi.prototype.BaseHasher = BaseHasher;


    /**
     * @interface MacInterface
     * @classdesc All coders MUST implement this interface
     * @public
     */
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
     * @extends BaseHasher
     * @param {string|number[]} key
     * @param {string} hasher
     * @param {Object} options
     * @public
     */
    var BaseMac = function(key, hasher, options) {};
    BaseMac.prototype = Object.create(BaseHasher.prototype);
    BaseMac.prototype.constructor = function (key, hasher, options) {
        BaseHasher.prototype.constructor.call(this, hasher, options);
    };
    /**
     * @memberOf CryptoApi
     * @member {BaseMac} BaseMac
     */
    CryptoApi.prototype.BaseMac = BaseMac;
    /**
     * @interface EncodeInterface
     * @classdesc All encodes MUST implement this interface
     * @public
     */
    var EncodeInterface = function () {};
    /**
     * @memberOf EncodeInterface
     * @constructor
     * @param {HashArray} hash
     */
    EncodeInterface.prototype.constructor = function constructor(hash) {};
    /**
     * @desc Stringify hash
     * @memberOf EncodeInterface
     * @method stringify
     * @returns {string}
     */
    EncodeInterface.prototype.stringify = function encode() {};


    /**
     * @class BaseEncode
     * @classdesc Encode HashArray
     * @param {HashArray} hash
     * @public
     */
    var BaseEncode = function (hash) {};
    /**
     * @memberOf BaseEncode
     * @constructor
     * @param {HashArray} hash
     */
    BaseEncode.prototype.constructor = function constructor(hash) {
        /**
         * @property hash
         * @type {HashArray}
         */
        this.hash = hash;
    };
    /**
     * @memberOf CryptoApi
     * @member {BaseEncode} BaseEncode
     */
    CryptoApi.prototype.BaseEncode = BaseEncode;

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
        if ((Hasher === undefined) && (require !== undefined)) {
            var filename = name;
            if (filename === 'sha224') {
                filename = 'sha256';
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
     * @class Encodes
     * @classdesc Collection of encodes
     */
    var Encodes = function encodes() {
        /**
         * @property encodes
         * @type {Object}
         */
        this.encodes = {};
    };
    /**
     * @memberOf Encodes
     * @method add
     * @param {string} name
     * @param {BaseEncode} encode
     */
    Encodes.prototype.add = function add(name, encode) {
        if (encode === undefined) {
            throw Error('Error adding encode: ' + name);
        }
        this.encodes[name] = encode;
    };
    /**
     * @memberOf Encodes
     * @method get
     * @param {string} name
     * @param {HashArray} hash
     * @returns {BaseEncode}
     */
    Encodes.prototype.get = function get(name, hash) {
        var Encode = this.encodes[name];
        if ((Encode === undefined) && (require !== undefined)) {
            require('./enc.' + name);
            Encode = this.encodes[name];
        }
        if (Encode === undefined) {
            throw Error('No encode type: ' + name);
        }
        return new Encode(hash);
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
        if ((Mac === undefined) && (require !== undefined)) {
            require('./mac.' + name);
            Mac = this.macs[name];
        }
        if (Mac === undefined) {
            throw Error('No mac type: ' + name);
        }
        return new Mac(key, hasher, options);
    };

    /**
     * @class Tools
     * @classdesc Helper with some methods
     */
    var Tools = function tools() {};
    /**
     * Rotate x to n bits left
     * @memberOf Tools
     * @method rotateLeft
     * @param {number} x
     * @param {number} n
     * @returns {number}
     */
    Tools.prototype.rotateLeft = function rotateLeft(x, n) {
        return (x << n) | (x >>> (32 - n));
    };
    /**
     * Rotate x to n bits right
     * @memberOf Tools
     * @method rotateLeft
     * @param {number} x
     * @param {number} n
     * @returns {number}
     */
    Tools.prototype.rotateRight = function rotateLeft(x, n) {
        return (x >>> n) | (x << (32 - n));
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
        return this.hasher(algo, options).update(message).finalize();
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