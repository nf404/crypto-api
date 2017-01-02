/*global require */
(/**
 * @param {CryptoApi} CryptoApi
 * @returns {Hmac}
 */
function (CryptoApi) {
  'use strict';

  /**
   * @class Hmac
   * @extends BaseMac
   * @implements MacInterface
   * @desc HMAC
   */
  var Hmac = function hmac(key, hasher, options) {
    this.constructor(key, hasher, options)
  };
  Hmac.prototype = Object.create(CryptoApi.BaseMac.prototype);
  /**
   * @memberOf Hmac
   * @constructor
   * @param {string|number[]} key
   * @param {string} hasher
   * @param {Object} options
   */
  Hmac.prototype.constructor = function (key, hasher, options) {
    CryptoApi.BaseMac.prototype.constructor.call(this, key, hasher, options);
    /**
     * @desc Hasher instance
     * @property hasher
     * @type {HasherInterface}
     */
    this.hasher = CryptoApi.hasher(hasher, options);
    /**
     * @property key
     * @type {number[]}
     */
    this.key = [];
    if (typeof key === 'string') {
      key = unescape(encodeURIComponent(key));
      for (var i = 0, keyLen = key.length; i < keyLen; i++) {
        this.key.push(key.charCodeAt(i))
      }
    } else {
      this.key = key
    }
    var blockSizeInBytes = this.hasher.blockSize * this.hasher.unitSize;
    if (this.key.length > blockSizeInBytes) {
      var hasherInstance = CryptoApi.hasher(hasher, options);
      hasherInstance.updateFromArray(this.key);
      this.key = hasherInstance.finalize().slice(0)
    }
    if (this.key.length < blockSizeInBytes) {
      this.key.concat(Array.apply(0, new Array(blockSizeInBytes - this.key.length))
        .map(Number.prototype.valueOf, 0x00));
    }
    this.iKeyPad = Array.apply(0, new Array(blockSizeInBytes))
      .map(Number.prototype.valueOf, 0x36);
    this.oKeyPad = Array.apply(0, new Array(blockSizeInBytes))
      .map(Number.prototype.valueOf, 0x5c);
    for (var j = 0; j < this.key.length; j++) {
      this.iKeyPad[j] ^= this.key[j];
      this.oKeyPad[j] ^= this.key[j]
    }
    this.updateFromArray(this.iKeyPad)
  };

  /**
   * Update message
   * @memberOf Hmac
   * @method update
   * @param {string} message
   */
  Hmac.prototype.update = function update (message) {
    this.hasher.update(message);
  };

  /**
   * Update message
   * @memberOf Hmac
   * @method updateFromArray
   * @param {number[]} message
   */
  Hmac.prototype.updateFromArray = function update (message) {
    this.hasher.updateFromArray(message);
  };

  /**
   * @memberOf Hmac
   * @method processBlock
   * @param {number[]} block
   */
  Hmac.prototype.processBlock = function processBlock (block) {
  };

  /**
   * @memberOf Hmac
   * @method finalize
   * @return {HashArray}
   */
  Hmac.prototype.finalize = function finalize () {
    var hash = this.hasher.finalize();
    var hasherInstance = CryptoApi.hasher(this.hasher.name, this.hasher.options);
    hasherInstance.updateFromArray(this.oKeyPad);
    hasherInstance.updateFromArray(hash.slice(0));
    return hasherInstance.finalize();
  };

  CryptoApi.Macs.add('hmac', Hmac);
  return Hmac
})(
  this.CryptoApi || require('./crypto-api')
);
