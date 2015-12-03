(function (root) {
    'use strict';
    
    var HashAlgorithmInterface = function HashAlgorithm(options) {};
    /**
     *  Size of unit in bytes (4 = 32 bits)
     * @type {number}
     */
    HashAlgorithmInterface.prototype.unitSize = 4;
    /**
     * Bytes order in unit
     * 0 - normal
     * @type {number}
     */
    HashAlgorithmInterface.prototype.unitOrder = 0;
    /**
     * Size of block in units
     * @type {number}
     */
    HashAlgorithmInterface.prototype.blockSize = 16;
    /**
     * All algorithm variables that changed during process
     * @type {Object}
     */
    HashAlgorithmInterface.prototype.state = {};
    /**
     * Process ready block
     * @param {number[]} block
     */
    HashAlgorithmInterface.prototype.processBlock = function processBlock(block) {};
    /**
     * Process last block and return hash
     * @param {number[]} block
     * @return {number[]} hash
     */
    HashAlgorithmInterface.prototype.finalize = function finalize(block) {};
    /**
     * Return current state
     * @returns {Object}
     */
    HashAlgorithmInterface.prototype.getState = function getState() {
        return this.state;
    };
    /**
     * Set state
     * @param {Object} state
     */
    HashAlgorithmInterface.prototype.setState = function setState(state) {
        this.state = state;
    };

    var Api = {};

})(this);