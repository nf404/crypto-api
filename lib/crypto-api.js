(/**
 *
 * @param {Object} root
 * @returns {CryptoApi}
 */
    function (root) {
    'use strict';

    var HasherInterface = function hasherInterface(name, options) {
        this.name = name;
        this.message = [];
        this.length = 0;
        this.state.options = options;
    };
    /**
     * Hasher name
     * @type {string}
     */
    HasherInterface.prototype.name = '';
    /**
     * Message
     * @type {number[]}
     */
    HasherInterface.prototype.message = [];
    /**
     * Length of message
     * @type {number}
     */
    HasherInterface.prototype.length = 0;
    /**
     *  Size of unit in bytes (4 = 32 bits)
     * @type {number}
     */
    HasherInterface.prototype.unitSize = 4;
    /**
     * Bytes order in unit
     * 0 - normal
     * @type {number}
     */
    HasherInterface.prototype.unitOrder = 0;
    /**
     * Size of block in units
     * @type {number}
     */
    HasherInterface.prototype.blockSize = 16;
    /**
     * All algorithm variables that changed during process
     * @type {Object}
     */
    HasherInterface.prototype.state = {};
    /**
     * Process ready block
     * @param {number[]} block
     */
    HasherInterface.prototype.processBlock = function processBlock(block) {};
    /**
     * Process last block and return hash
     * @return {HashArray} hash
     */
    HasherInterface.prototype.finalize = function finalize() {};
    /**
     * Return current state
     * @returns {Object}
     */
    HasherInterface.prototype.getState = function getState() {
        return this.state;
    };
    /**
     * Set state
     * @param {Object} state
     */
    HasherInterface.prototype.setState = function setState(state) {
        this.state = state;
    };
    /**
     * Update message
     * @param {string|number[]} message
     * @return {HasherInterface}
     */
    HasherInterface.prototype.update = function update(message) {
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
     */
    HasherInterface.prototype.process = function process() {
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
     * Encode HashArray
     *
     * @param {number[]} hash
     */
    var EncodeInterface = function encodeInterface(hash) {
        this.hash = hash;
    };
    /**
     * Stringify hash
     *
     * @returns {string}
     */
    EncodeInterface.prototype.stringify = function stringify() {
        return this.hash.join(',');
    };

    var Hashers = function hashers() {
        this.hashers = {};
    };
    Hashers.prototype.hashers = {};
    /**
     *
     * @param {string} name
     * @param {HasherInterface} hasher
     */
    Hashers.prototype.add = function add(name, hasher) {
        if (hasher === undefined || (!hasher instanceof HasherInterface)) {
            throw Error('Error adding hasher: ' + name);
        }
        this.hashers[name] = hasher;
    };
    /**
     *
     * @param {string} name
     * @param {Object} options
     * @returns {HasherInterface}
     */
    Hashers.prototype.get = function get(name, options) {
        var hasher = this.hashers[name];
        if (hasher === undefined || (!hasher instanceof HasherInterface)) {
            throw Error('No hash algorithm: ' + name);
        }
        return new hasher(name, options);
    };

    var Encodes = function encodes() {
        this.encodes = {};
    };
    Encodes.prototype.encodes = {};
    /**
     *
     * @param {string} name
     * @param {EncodeInterface} encode
     */
    Encodes.prototype.add = function add(name, encode) {
        if (encode === undefined || (!encode instanceof EncodeInterface)) {
            throw Error('Error adding encode: ' + name);
        }
        this.encodes[name] = encode;
    };
    /**
     *
     * @param {string} name
     * @param {HashArray} hash
     * @returns {EncodeInterface}
     */
    Encodes.prototype.get = function get(name, hash) {
        var encode = this.encodes[name];
        if (encode === undefined || (!encode instanceof EncodeInterface)) {
            throw Error('No encode type: ' + name);
        }
        return new encode(hash);
    };

    var Tools = function tools() {};
    /**
     * Rotate x to n bits left
     * @param {number} x
     * @param {number} n
     * @returns {number}
     */
    Tools.prototype.rotateLeft = function rotateLeft(x, n) {
        return (x << n) | (x >>> (32 - n));
    };
    /**
     * Rotate x to n bits right
     * @param {number} x
     * @param {number} n
     * @returns {number}
     */
    Tools.prototype.rotateRight = function rotateLeft(x, n) {
        return (x >>> n) | (x << (32 - n));
    };
    /**
     * Array of hash bytes
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
     * @class CryptoApi
     * @public
     * @constructor CryptoApi
     */
    var CryptoApi = function cryptoApi () {
        this.Hashers = new Hashers();
        this.Encodes = new Encodes();
        this.Tools = new Tools();
    };
    CryptoApi.prototype.HasherInterface = HasherInterface;
    CryptoApi.prototype.EncodeInterface = EncodeInterface;
    CryptoApi.prototype.Hashers = Hashers;
    CryptoApi.prototype.Encodes = Encodes;
    CryptoApi.prototype.Tools = Tools;
    /**
     * Hash message with algo
     *
     * @memberof CryptoApi
     * @function hash
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
     * @function hasher
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
     * @function hashArray
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