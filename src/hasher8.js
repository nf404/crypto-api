'use strict';

import Hasher from "./hasher";

/**
 * Hasher for 8 bit blocks
 */
class Hasher8 extends Hasher {
  /**
   * @param {string} name
   * @param {Object} options
   * @constructor
   */
  constructor(name, options) {
    super(name, options);

    /**
     * @desc Size of unit = 1 byte
     * @type {number} unitSize
     */
    this.unitSize = 1;

    /**
     * @desc Size of block in bytes
     * @type {number}
     */
    this.blockSizeInBytes = this.blockSize * this.unitSize;
  }

  /**
   * Process ready blocks
   */
  process() {
    while (this.state.message.length >= this.blockSizeInBytes) {
      this.blockUnits = [];
      for (let i = 0; i < this.blockSizeInBytes; i++) {
        this.blockUnits.push(this.state.message.charCodeAt(i) | 0);
      }
      this.state.message = this.state.message.substr(this.blockSizeInBytes);
      this.processBlock(this.blockUnits);
    }
  }
}

export default Hasher8