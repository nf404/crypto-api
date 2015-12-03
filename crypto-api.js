(/**
 *
 * @param {Object} root
 * @returns {CryptoApi}
 */
    function (root) {
    'use strict';

    var HasherInterface = function HasherInterface(options) {
        this.message = [];
        this.length = 0;
        this.state.options = options;
    };
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
     * @return {number[]} hash
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
        if (typeof message == 'string') {
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
                    if (this.unitOrder == 1) {
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

    var CryptoApi = function CryptoApi () {};
    CryptoApi.prototype.HasherInterface = HasherInterface;
    CryptoApi.prototype.hashers = {};
    /**
     * Get new hasher object
     * @param {string} algo
     * @param {Object} options
     * @returns {HasherInterface}
     */
    CryptoApi.prototype.hasher = function hasher(algo, options) {
        /** @type HasherInterface */
        var hasher = this.hashers[algo];
        if (hasher === undefined || (!hasher instanceof HasherInterface)) {
            throw Error('No hash algorithm ' + algo);
        }
        return new hasher(options);
    };

    root.CryptoApi = new CryptoApi();
    return root.CryptoApi;
})(this);