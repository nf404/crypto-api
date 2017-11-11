'use strict';

class Hasher {
  /**
   * @param {Object} options
   * @constructor
   */
  constructor(options) {
    /**
     * @desc Size of unit in bytes (4 = 32 bits)
     * @type {number}
     * @static
     */
    this.unitSize = 4;
    /**
     * Bytes order in unit
     *   0 - normal
     *   1 - reverse
     * @type {number}
     * @static
     */
    this.unitOrder = 0;
    /**
     * Size of block in units
     * @type {number}
     * @static
     */
    this.blockSize = 16;
    /**
     * @desc Size of block in bytes
     * @type {number}
     */
    this.blockSizeInBytes = this.blockSize * this.unitSize;
    /**
     * @desc All algorithm variables that changed during process
     * @type {Object}
     */
    this.state = {};
    /**
     * @desc Unprocessed Message
     * @type {string}
     */
    this.state.message = '';
    /**
     * @desc Length of message
     * @type {number}
     */
    this.state.length = 0;
    /**
     * @type {Object}
     */
    this.options = options || {};
    this.blockUnits = [];
  }

  reset() {
    this.state = {};
    this.constructor(this.options)
  }

  /**
   * Return current state
   * @returns {Object}
   */
  getState() {
    return JSON.parse(JSON.stringify(this.state));
  }

  /**
   * Set state
   * @param {Object} state
   */
  setState(state) {
    this.state = state;
  }

  /**
   * Update message from binary string
   * @param {string} message
   */
  update(message) {
    this.state.message += message;
    this.state.length += message.length;
    this.process();
  }

  /**
   * Process ready blocks
   */
  process() {
  }

  /**
   *
   * @returns {string}
   */
  finalize() {
    return '';
  }

  /**
   * @param {number} size
   * @returns {string}
   */
  getStateHash(size) {
    return '';
  }

  addPaddingPKCS7(length) {
    this.state.message += new Array(length + 1).join(String.fromCharCode(length));
  }

  addPaddingISO7816(length) {
    this.state.message += "\x80" + new Array(length).join("\x00");
  }

  addPaddingZero(length) {
    this.state.message += new Array(length + 1).join("\x00");
  }
}

export default Hasher