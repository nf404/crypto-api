'use strict';

import Hasher from "./hasher";

/**
 * Hasher for 8 bit blocks
 */
class Hasher8 extends Hasher {
  /**
   * @param {Object} options
   * @constructor
   */
  constructor(options) {
    super(options);

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

  getStateHash(size) {
    size = size || this.state.hash.length;
    let hash = '';
    for (let i = 0; i < size; i++) {
      hash += String.fromCharCode(this.state.hash[i] & 0xff);
    }
    return hash;
  }
}

export default Hasher8