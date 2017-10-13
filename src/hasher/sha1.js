'use strict';

import Hasher32be from "../hasher32be";
import {rotateLeft} from "../tools";

// Transform constants
const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

class Sha1 extends Hasher32be {
  constructor(options) {
    super(options);

    this.state.hash = [
      0x67452301 | 0,
      0xefcdab89 | 0,
      0x98badcfe | 0,
      0x10325476 | 0,
      0xc3d2e1f0 | 0
    ];
    this.W = new Array(80);
  }

  /**
   * @param {number[]} M
   */
  processBlock(M) {
    // Working variables
    let a = this.state.hash[0] | 0;
    let b = this.state.hash[1] | 0;
    let c = this.state.hash[2] | 0;
    let d = this.state.hash[3] | 0;
    let e = this.state.hash[4] | 0;

    // Calculate hash
    for (let i = 0; i < 80; i++) {
      if (i < 16) {
        this.W[i] = M[i] | 0;
      } else {
        this.W[i] = rotateLeft(this.W[i - 3] ^ this.W[i - 8] ^ this.W[i - 14] ^ this.W[i - 16], 1) | 0;
      }

      let t = (rotateLeft(a, 5) + e + this.W[i] + K[(i / 20) >> 0]) | 0;
      if (i < 20) {
        t = (t + ((b & c) | (~b & d))) | 0;
      } else if (i < 40) {
        t = (t + (b ^ c ^ d)) | 0;
      } else if (i < 60) {
        t = (t + ((b & c) | (b & d) | (c & d))) | 0;
      } else {
        t = (t + (b ^ c ^ d)) | 0;
      }
      e = d;
      d = c;
      c = rotateLeft(b, 30) | 0;
      b = a;
      a = t;
    }

    this.state.hash[0] = (this.state.hash[0] + a) | 0;
    this.state.hash[1] = (this.state.hash[1] + b) | 0;
    this.state.hash[2] = (this.state.hash[2] + c) | 0;
    this.state.hash[3] = (this.state.hash[3] + d) | 0;
    this.state.hash[4] = (this.state.hash[4] + e) | 0;
  }

  finalize(encoder) {
    this.addPaddingISO7816(
      this.state.message.length < 56 ?
        56 - this.state.message.length | 0 :
        120 - this.state.message.length | 0);
    this.addLengthBits();
    this.process();
    return encoder.encode(this.getStateHash());
  }
}

export default Sha1