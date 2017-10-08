'use strict';

import Hasher from "./hasher";

/**
 * Hasher for 32 bit big endian blocks
 */
class Hasher32be extends Hasher {
  /**
   * @param {Object} options
   * @constructor
   */
  constructor(options) {
    super(options);

    this.unitOrder = 1; // Reverse order of bytes
  }

  /**
   * Process ready blocks
   */
  process() {
    while (this.state.message.length >= this.blockSizeInBytes) {
      this.blockUnits = [];
      for (let b = 0; b < this.blockSizeInBytes; b += 4) {
        this.blockUnits.push(this.state.message.charCodeAt(b) << 24 | this.state.message.charCodeAt(b + 1) << 16 |
          this.state.message.charCodeAt(b + 2) << 8 | this.state.message.charCodeAt(b + 3));
      }
      this.state.message = this.state.message.substr(this.blockSizeInBytes);
      this.processBlock(this.blockUnits);
    }
  }

  getStateHash() {
    let hash = '';
    for (let i = 0; i < this.state.hash.length; i++) {
      hash += String.fromCharCode(this.state.hash[i] >> 24 & 0xff) +
        String.fromCharCode(this.state.hash[i] >> 16 & 0xff) +
        String.fromCharCode(this.state.hash[i] >> 8 & 0xff) +
        String.fromCharCode(this.state.hash[i] & 0xff);
    }
    return hash;
  }
}

export default Hasher32be