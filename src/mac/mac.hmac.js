'use strict';

class Hmac {
  /**
   *
   * @param {string} key
   * @param {Hasher} hasher
   */
  constructor(key, hasher) {
    this.hasher = hasher;
    this.key = key;
    this.oPad = '';

    if (key.length > hasher.blockSizeInBytes) {
      this.hasher.update(key);
      this.key = hasher.finalize();
    }
    for (let i = this.key.length; i < hasher.blockSizeInBytes; i++) {
      this.key += "\x00";
    }
    let iPad = '';
    for (let i = 0; i < this.key.length; i++) {
      iPad += String.fromCharCode(0x36 ^ this.key.charCodeAt(i));
      this.oPad += String.fromCharCode(0x56 ^ this.key.charCodeAt(i));
    }
    this.hasher = new hasher(hasher.options);
    this.hasher.update(iPad);
  }

  finalize() {
    let hash = this.hasher.finalize();
    this.hasher = new this.hasher(this.hasher.options);
    this.hasher.update(this.oPad);
    this.hasher.update(hash);
    return this.hasher.finalize();
  }
}

export default Hmac