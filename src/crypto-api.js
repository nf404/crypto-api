'use strict';

import {hex} from "./encoder/hex";
import Has160 from "./hasher/has160";
import Md2 from "./hasher/md2";
import Md4 from "./hasher/md4";
import Md5 from "./hasher/md5";
import Ripemd from "./hasher/ripemd";
import Sha0 from "./hasher/sha0";
import Sha1 from "./hasher/sha1";
import Sha256 from "./hasher/sha256";
import Sha512 from "./hasher/sha512";
import Snefru from "./hasher/snefru";
import Whirlpool from "./hasher/whirlpool";

class CryptoApi {
  constructor() {
    this.hasher = {
      'Has160': Has160,
      'Md2': Md2,
      'Md4': Md4,
      'Md5': Md5,
      'Ripemd': Ripemd,
      'Sha0': Sha0,
      'Sha1': Sha1,
      'Sha256': Sha256,
      'Sha512': Sha512,
      'Snefru': Snefru,
      'Whirlpool': Whirlpool
    };
    this.enc = {
      'hex': hex
    }
  }

  /**
   * Get hasher by alias
   *
   * @param {string} name
   * @param {Object} options
   * @returns {Hasher}
   */
  static getHasher(name, options) {
    options = options || {};
    switch (name) {
      case 'has160':
        return new Has160(options);
      case 'md2':
        return new Md2(options);
      case 'md4':
        return new Md4(options);
      case 'md5':
        return new Md5(options);
      case 'ripemd128':
        options = Object.assign({}, {length: 128}, options);
        return new Ripemd(options);
      case 'ripemd':
      case 'ripemd160':
        options = Object.assign({}, {length: 160}, options);
        return new Ripemd(options);
      case 'ripemd256':
        options = Object.assign({}, {length: 256}, options);
        return new Ripemd(options);
      case 'ripemd320':
        options = Object.assign({}, {length: 320}, options);
        return new Ripemd(options);
      case 'sha0':
        return new Sha0(options);
      case 'sha1':
        return new Sha1(options);
      case 'sha224':
        options = Object.assign({}, {length: 224}, options);
        return new Sha256(options);
      case 'sha256':
        options = Object.assign({}, {length: 256}, options);
        return new Sha256(options);
      case 'sha384':
        options = Object.assign({}, {length: 384}, options);
        return new Sha512(options);
      case 'sha512':
        options = Object.assign({}, {length: 512}, options);
        return new Sha512(options);
      case 'snefru':
      case 'snefru128':
        options = Object.assign({}, {length: 128}, options);
        return new Snefru(options);
      case 'snefru256':
        options = Object.assign({}, {length: 256}, options);
        return new Snefru(options);
      case 'whirlpool':
        return new Whirlpool(options);
      case 'whirlpool-0':
        options = Object.assign({}, {type: '0'}, options);
        return new Whirlpool(options);
      case 'whirlpool-t':
        options = Object.assign({}, {type: 't'}, options);
        return new Whirlpool(options);
    }
  }

  /**
   * Hash message and return result in hex
   *
   * @param {string} name
   * @param {string} message
   * @param {Object} options
   * @returns {string}
   */
  static hash(name, message, options) {
    options = options || {};
    let hasher = CryptoApi.getHasher(name, options);
    hasher.update(message);
    return hex(hasher.finalize());
  }
}

export default new CryptoApi()