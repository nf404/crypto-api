(function (root) {
    'use strict';

    var HasherInterface = function HashAlgorithm(options) {};
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
     * @param {number[]} block
     * @return {number[]} hash
     */
    HasherInterface.prototype.finalize = function finalize(block) {};
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

    var Api = function Api () {};
    Api.prototype.HasherInterface = HasherInterface;
    Api.prototype.hashers = {};
    /**
     * Get new hasher object
     * @param {string} algo
     * @param {Object} options
     * @returns {HasherInterface}
     */
    Api.prototype.hasher = function hasher(algo, options) {
        /** @type HasherInterface */
        var hasher = this.hashers[algo];
        if (hasher === undefined || (!hasher instanceof HasherInterface)) {
            throw Error('No hash algorithm ' + algo);
        }
        return new hasher(options);
    };

    return new Api();
})(this);