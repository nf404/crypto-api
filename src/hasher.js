'use strict';

class Hasher {
  /**
   * @param {string} name
   * @param {Object} options
   * @constructor
   */
  constructor(name, options) {
    /**
     * @desc Hasher name
     * @type {string}
     */
    this.name = name;
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
     * @memberOf! Hasher#
     * @alias state.message
     * @type {string}
     */
    this.state.message = '';
    /**
     * @desc Length of message
     * @memberOf! Hasher#
     * @alias state.length
     * @type {number}
     */
    this.state.length = 0;
    /**
     * @memberOf! Hasher#
     * @alias state.options
     * @type {Object}
     */
    this.state.options = options;
    this.blockUnits = [];
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
   * @return {Hasher}
   */
  setState(state) {
    this.state = state;
    return this;
  };

  /**
   * Update message
   * @param {string} message
   */
  update(message) {
    let l = 0;
    for (let i = 0, msgLen = message.length; i < msgLen; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode < 0x80) {
        this.state.message += String.fromCharCode(charCode);
        l++;
      }
      else if (charCode < 0x800) {
        this.state.message += String.fromCharCode(0xc0 | (charCode >> 6));
        this.state.message += String.fromCharCode(0x80 | (charCode & 0x3f));
        l += 2;
      }
      else if (charCode < 0xd800 || charCode >= 0xe000) {
        this.state.message += String.fromCharCode(0xe0 | (charCode >> 12));
        this.state.message += String.fromCharCode(0x80 | ((charCode >> 6) & 0x3f));
        this.state.message += String.fromCharCode(0x80 | (charCode & 0x3f));
        l += 3;
      }
      // surrogate pair
      else {
        i++;
        // UTF-16 encodes 0x10000-0x10FFFF by
        // subtracting 0x10000 and splitting the
        // 20 bits of 0x0-0xFFFFF into two halves
        charCode = 0x10000 + (((charCode & 0x3ff) << 10)
          | (message.charCodeAt(i) & 0x3ff));
        this.state.message += String.fromCharCode(0xf0 | (charCode >> 18));
        this.state.message += String.fromCharCode(0x80 | ((charCode >> 12) & 0x3f));
        this.state.message += String.fromCharCode(0x80 | ((charCode >> 6) & 0x3f));
        this.state.message += String.fromCharCode(0x80 | (charCode & 0x3f));
        l += 4;
      }
    }
    this.state.length++;
    this.process();
  }

  /**
   * Update message from array
   * @param {number[]} message
   */
  updateFromArray(message) {
    this.state.length += message.length;
    for (let i = 0; i < message.length; i++) {
      this.state.message += String.fromCharCode(message[i]);
    }
    this.process();
  }

  /**
   * Process ready blocks
   */
  process() {
  }
}

export default Hasher