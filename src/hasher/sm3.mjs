'use strict';

import Hasher32be from "./hasher32be.mjs";
import {rotateLeft} from "../tools/tools.mjs";


/**
 * Calculates [SM3](https://tools.ietf.org/id/draft-oscca-cfrg-sm3-02.html) hash
 *
 * @example <caption>Calculates SM3 hash from string "message" - ES6 style</caption>
 * import Sm3 from "crypto-api/src/hasher/sm3";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Sm3();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SM3 hash from UTF string "message" - ES6 style</caption>
 * import Sm3 from "crypto-api/src/hasher/sm3";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Sm3();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SM3 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('sm3');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates SM3 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('sm3', 'message'));
 * </script>
 */
class Sm3 extends Hasher32be {
  /**
   * @param {Object} [options]
   * @param {number} [options.rounds=64] - Number of rounds (Must be greater than 16)
   * @param {number} [options.length=256] - Length of hash result
   */
  constructor(options) {
    options = options || {};
    options.length = options.length || 256;
    options.rounds = options.rounds || 64;
    super(options);

    /**
     * Working variable (only for speed optimization)
     * @private
     * @ignore
     * @type {number[]}
     */
    this.W = new Array(132);
  }

  /**
   * Reset hasher to initial state
   */
  reset() {
    super.reset();
    this.state.hash = [
      0x7380166f | 0, 0x4914b2b9 | 0, 0x172442d7 | 0, 0xda8a0600 | 0,
      0xa96f30bc | 0, 0x163138aa | 0, 0xe38dee4d | 0, 0xb0fb0e4e | 0
    ];
  }

  /**
   * @protected
   * @ignore
   * @param {number} x
   * @returns {number}
   */
  static p0 (x) {
    return x ^ rotateLeft(x, 9) ^ rotateLeft(x, 17)
  }

  /**
   * @protected
   * @ignore
   * @param {number} x
   * @returns {number}
   */
  static p1 (x) {
    return x ^ rotateLeft(x, 15) ^ rotateLeft(x, 23)
  }

  /**
   * @protected
   * @ignore
   * @param {number} i
   * @returns {number}
   */
  static tj (i) {
    return i < 16 ? 0x79cc4519 : 0x7a879d8a;
  }

  /**
   * @protected
   * @ignore
   * @param {number} i
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @returns {number}
   */
  static ffj(i, a, b, c) {
    return i < 16 ? a ^ b ^ c : (a & b) | (a & c) | (b & c)
  }

  /**
   * @protected
   * @ignore
   * @param {number} i
   * @param {number} e
   * @param {number} f
   * @param {number} g
   * @returns {number}
   */
  static ggj(i, e, f, g) {
    return i < 16 ? e ^ f ^ g : (e & f) | (~e & g)
  }

  /**
   * Process ready blocks
   *
   * @protected
   * @ignore
   * @param {number[]} block - Block
   */
  processBlock(block) {
    // Working variables
    let a = this.state.hash[0] | 0;
    let b = this.state.hash[1] | 0;
    let c = this.state.hash[2] | 0;
    let d = this.state.hash[3] | 0;
    let e = this.state.hash[4] | 0;
    let f = this.state.hash[5] | 0;
    let g = this.state.hash[6] | 0;
    let h = this.state.hash[7] | 0;
    // Expand message
    for (let i = 0; i < 132; i++) {
      if (i < 16) {
        this.W[i] = block[i] | 0;
      } else if (i < 68) {
        this.W[i] = Sm3.p1(this.W[i - 16] ^ this.W[i - 9] ^ rotateLeft(this.W[i - 3], 15)) ^
          rotateLeft(this.W[i - 13], 7) ^ this.W[i - 6]
      } else {
        this.W[i] = this.W[i - 68] ^ this.W[i - 64]
      }
    }
    // Calculate hash
    for (let i = 0; i < this.options.rounds; i++) {
      let ss1 = rotateLeft((rotateLeft(a, 12) + e +  rotateLeft(Sm3.tj(i), i % 32)) | 0,7)
      let ss2 = ss1 ^ rotateLeft(a, 12)
      let tt1 = (Sm3.ffj(i, a, b, c) + d + ss2 + this.W[i + 68]) | 0
      let tt2 = (Sm3.ggj(i, e, f, g) + h + ss1 + this.W[i]) | 0

      d = c
      c = rotateLeft(b, 9)
      b = a
      a = tt1
      h = g
      g = rotateLeft(f, 19)
      f = e
      e = Sm3.p0(tt2)
    }

    this.state.hash[0] = this.state.hash[0] ^ a;
    this.state.hash[1] = this.state.hash[1] ^ b;
    this.state.hash[2] = this.state.hash[2] ^ c;
    this.state.hash[3] = this.state.hash[3] ^ d;
    this.state.hash[4] = this.state.hash[4] ^ e;
    this.state.hash[5] = this.state.hash[5] ^ f;
    this.state.hash[6] = this.state.hash[6] ^ g;
    this.state.hash[7] = this.state.hash[7] ^ h;
  }

  /**
   * Finalize hash and return result
   *
   * @returns {string}
   */
  finalize() {
    this.addPaddingISO7816(
      this.state.message.length < 56 ?
        56 - this.state.message.length | 0 :
        120 - this.state.message.length | 0);
    this.addLengthBits();
    this.process();
    return this.getStateHash((this.options.length / 32) | 0);
  }
}

export default Sm3;