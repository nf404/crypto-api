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
         * @memberOf CryptoApi
         * @member {Hashers} Hashers
         */
        this.Hashers = new Hashers();
        /**
         * @memberOf CryptoApi
         * @member {Encodes} Encodes
         */
        this.Encodes = new Encodes();
        /**
         * @memberOf CryptoApi
         * @member {Tools} Tools
         */
        this.Tools = new Tools();
    };
    /**
     * @memberOf CryptoApi#
     * @member HasherInterface
     * @class HasherInterface
     * @param {string} name
     * @param {Object} options
     */
    CryptoApi.prototype.HasherInterface = function hasherInterface(name, options) {
        this.name = name;
        this.message = [];
        this.length = 0;
        this.state = {};
        this.state.options = options;
    };
    /**
     * Hasher name
     * @memberOf HasherInterface
     * @member {string} name
     */
    CryptoApi.prototype.HasherInterface.prototype.name = '';
    /**
     * Message
     * @memberOf HasherInterface
     * @member {number[]} message
     */
    CryptoApi.prototype.HasherInterface.prototype.message = [];
    /**
     * Length of message
     * @memberOf HasherInterface
     * @member {number} length
     */
    CryptoApi.prototype.HasherInterface.prototype.length = 0;
    /**
     * All algorithm variables that changed during process
     * @memberOf HasherInterface
     * @member {Object} state
     */
    CryptoApi.prototype.HasherInterface.prototype.state = {};
    /**
     *  Size of unit in bytes (4 = 32 bits)
     * @memberOf HasherInterface
     * @member {number} unitSize
     * @static
     */
    CryptoApi.prototype.HasherInterface.prototype.unitSize = 4;
    /**
     * Bytes order in unit
     *   0 - normal
     *   1 - reverse
     * @memberOf HasherInterface
     * @member {number} unitOrder
     * @static
     */
    CryptoApi.prototype.HasherInterface.prototype.unitOrder = 0;
    /**
     * Size of block in units
     * @memberOf HasherInterface
     * @member {number} blockSize
     * @static
     */
    CryptoApi.prototype.HasherInterface.prototype.blockSize = 16;
    /**
     * Process ready block
     * @memberOf HasherInterface
     * @method processBlock
     * @param {number[]} block
     */
    CryptoApi.prototype.HasherInterface.prototype.processBlock = function processBlock(block) {};
    /**
     * Process last block and return hash
     * @memberOf HasherInterface
     * @method finalize
     * @return {HashArray} hash
     */
    CryptoApi.prototype.HasherInterface.prototype.finalize = function finalize() {};
    /**
     * Return current state
     * @memberOf HasherInterface
     * @method getState
     * @returns {Object}
     */
    CryptoApi.prototype.HasherInterface.prototype.getState = function getState() {
        return this.state;
    };
    /**
     * Set state
     * @memberOf HasherInterface
     * @method setState
     * @param {Object} state
     * @return {HasherInterface}
     */
    CryptoApi.prototype.HasherInterface.prototype.setState = function setState(state) {
        this.state = state;
        return this;
    };
    /**
     * Update message
     * @memberOf HasherInterface
     * @method update
     * @param {string|number[]} message
     * @return {HasherInterface}
     */
    CryptoApi.prototype.HasherInterface.prototype.update = function update(message) {
        if (typeof message === 'string') {
            message = unescape(encodeURIComponent(message)); // @todo Change to something fast and not deprecated
            this.length += message.length;
            for (var i = 0, msgLen = message.length; i < msgLen; i++) {
                this.message.push(message.charCodeAt(i));
            }
        } else {
            this.length += message.length;
            this.message = this.message.concat(message);
        }
        this.process();
        return this;
    };
    /**
     * Process ready blocks
     * @memberOf HasherInterface
     * @method process
     */
    CryptoApi.prototype.HasherInterface.prototype.process = function process() {
        while (this.message.length >= this.blockSize * this.unitSize) {
            var j=0, b=0, block = this.message.splice(0, this.blockSize * this.unitSize);
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
     * @class EncodeInterface
     * @classdesc Encode HashArray
     * @param {number[]} hash
     * @private
     */
    var EncodeInterface = function encodeInterface(hash) {
        this.hash = hash;
    };
    /**
     * Stringify hash
     * @memberOf HashArray
     * @method stringify
     * @returns {string}
     */
    EncodeInterface.prototype.stringify = function stringify() {
        return this.hash.join(',');
    };

    /**
     * @class Hashers
     * @classdesc Collection of hashers
     */
    var Hashers = function hashers() {
        /**
         * @memberOf Hashers
         * @member {Object} hashers
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
         * @memberOf Encodes
         * @member {Object} encodes
         */
        this.encodes = {};
    };
    /**
     * @memberOf Encodes
     * @method add
     * @param {string} name
     * @param {EncodeInterface} encode
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
     * @returns {EncodeInterface}
     */
    Encodes.prototype.get = function get(name, hash) {
        var Encode = this.encodes[name];
        if (Encode === undefined) {
            throw Error('No encode type: ' + name);
        }
        return new Encode(hash);
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
     */
    var HashArray = function hashArray(hash, Encodes) {
        Array.prototype.push.apply(this, hash);
        this.Encodes = Encodes;
    };
    HashArray.prototype = Object.create(Array.prototype);
    HashArray.prototype.Encodes = Encodes;
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
     * @memberOf CryptoApi
     * @member {EncodeInterface} EncodeInterface
     */
    CryptoApi.prototype.EncodeInterface = EncodeInterface;
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