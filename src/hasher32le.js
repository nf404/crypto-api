'use strict';

import Hasher from "./hasher";

/**
 * Hasher for 32 bit little endian blocks
 */
class Hasher32le extends Hasher {
  /**
   * @param {string} name
   * @param {Object} options
   * @constructor
   */
  constructor(name, options) {
    super(name, options);
  }

  /**
   * Process ready blocks
   */
  process() {
    while (this.state.message.length >= this.blockSizeInBytes) {
      this.blockUnits = [];
      for (let b = 0; b < this.blockSizeInBytes; b += 4) {
        this.blockUnits.push(this.state.message.charCodeAt(b) | this.state.message.charCodeAt(b + 1) << 8 |
          this.state.message.charCodeAt(b + 2) << 16 | this.state.message.charCodeAt(b + 3) << 24);
      }
      this.state.message = this.state.message.substr(this.blockSizeInBytes);
      this.processBlock(this.blockUnits);
    }
  }
}

export default Hasher32le