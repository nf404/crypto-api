'use strict';

class Hmac {
  /**
   *
   * @param {string} key
   * @param {Hasher} hasher
   */
  constructor(key, hasher) {
    if (key.length > hasher.blockSizeInBytes) {
      hasher.update(key);
      key =  hasher.finalize();
      hasher.reset();
    }
    for (let i = key.length; i < hasher.blockSizeInBytes; i++) {
      key += "\x00";
    }
    this.oPad = '';
    for (let i = 0; i < key.length; i++) {
      hasher.update(String.fromCharCode(0x36 ^ key.charCodeAt(i)));
      this.oPad += String.fromCharCode(0x5c ^ key.charCodeAt(i));
    }
    this.hasher = hasher;
  }

  /**
   * @param {string} message
   */
  update(message) {
    this.hasher.update(message)
  }

  finalize() {
    let hash = this.hasher.finalize();
    this.hasher.reset();
    this.hasher.update(this.oPad);
    this.hasher.update(hash);
    return this.hasher.finalize();
  }
}

export default Hmac