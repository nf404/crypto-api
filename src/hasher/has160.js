'use strict';

import Hasher32le from "../hasher32le";
import {rotateLeft} from "../tools";

// Transform constants
const K = [0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc];
const ROT = [
  5, 11, 7, 15, 6, 13, 8, 14, 7, 12,
  9, 11, 8, 15, 6, 12, 9, 14, 5, 13
];
const ROT2 = [10, 17, 25, 30];
const IND = [
  18, 0, 1, 2, 3, 19, 4, 5, 6, 7, 16, 8, 9, 10, 11, 17, 12, 13, 14, 15,
  22, 3, 6, 9, 12, 23, 15, 2, 5, 8, 20, 11, 14, 1, 4, 21, 7, 10, 13, 0,
  26, 12, 5, 14, 7, 27, 0, 9, 2, 11, 24, 4, 13, 6, 15, 25, 8, 1, 10, 3,
  30, 7, 2, 13, 8, 31, 3, 14, 9, 4, 28, 15, 10, 5, 0, 29, 11, 6, 1, 12
];

class Has160 extends Hasher32le {
  constructor(name, options) {
    super(name, options);

    this.state.hash = [
      0x67452301,
      0xefcdab89,
      0x98badcfe,
      0x10325476,
      0xc3d2e1f0
    ];
    this.W = new Array(32);
  }

  /**
   *
   * @param {number[]} M
   */
  processBlock(M) {
// Working variables
    let a = this.state.hash[0] | 0;
    let b = this.state.hash[1] | 0;
    let c = this.state.hash[2] | 0;
    let d = this.state.hash[3] | 0;
    let e = this.state.hash[4] | 0;

    for (let i = 0; i < 16; i++) {
      this.W[i] = M[i] | 0;
    }
    this.W[16] = (this.W[0] ^ this.W[1] ^ this.W[2] ^ this.W[3]) | 0;
    this.W[17] = (this.W[4] ^ this.W[5] ^ this.W[6] ^ this.W[7]) | 0;
    this.W[18] = (this.W[8] ^ this.W[9] ^ this.W[10] ^ this.W[11]) | 0;
    this.W[19] = (this.W[12] ^ this.W[13] ^ this.W[14] ^ this.W[15]) | 0;
    this.W[20] = (this.W[3] ^ this.W[6] ^ this.W[9] ^ this.W[12]) | 0;
    this.W[21] = (this.W[2] ^ this.W[5] ^ this.W[8] ^ this.W[15]) | 0;
    this.W[22] = (this.W[1] ^ this.W[4] ^ this.W[11] ^ this.W[14]) | 0;
    this.W[23] = (this.W[0] ^ this.W[7] ^ this.W[10] ^ this.W[13]) | 0;
    this.W[24] = (this.W[5] ^ this.W[7] ^ this.W[12] ^ this.W[14]) | 0;
    this.W[25] = (this.W[0] ^ this.W[2] ^ this.W[9] ^ this.W[11]) | 0;
    this.W[26] = (this.W[4] ^ this.W[6] ^ this.W[13] ^ this.W[15]) | 0;
    this.W[27] = (this.W[1] ^ this.W[3] ^ this.W[8] ^ this.W[10]) | 0;
    this.W[28] = (this.W[2] ^ this.W[7] ^ this.W[8] ^ this.W[13]) | 0;
    this.W[29] = (this.W[3] ^ this.W[4] ^ this.W[9] ^ this.W[14]) | 0;
    this.W[30] = (this.W[0] ^ this.W[5] ^ this.W[10] ^ this.W[15]) | 0;
    this.W[31] = (this.W[1] ^ this.W[6] ^ this.W[11] ^ this.W[12]) | 0;
    // Calculate hash
    for (i = 0; i < 80; i++) {
      let t = (rotateLeft(a, ROT[i % 20]) + e + this.W[IND[i]] + K[(i / 20) >> 0]) | 0;
      if (i < 20) {
        t = (t + ((b & c) | (~b & d))) | 0;
      } else if (i < 40) {
        t = (t + (b ^ c ^ d)) | 0;
      } else if (i < 60) {
        t = (t + (c ^ (b | ~d))) | 0;
      } else {
        t = (t + (b ^ c ^ d)) | 0;
      }
      e = d;
      d = c;
      c = rotateLeft(b, ROT2[(i / 20) >> 0]) | 0;
      b = a;
      a = t;
    }

    this.state.hash[0] = (this.state.hash[0] + a) | 0;
    this.state.hash[1] = (this.state.hash[1] + b) | 0;
    this.state.hash[2] = (this.state.hash[2] + c) | 0;
    this.state.hash[3] = (this.state.hash[3] + d) | 0;
    this.state.hash[4] = (this.state.hash[4] + e) | 0;
  }

  finalize() {
    // Add padding
    let padLen = this.state.message.length < 56 ? 56 - this.state.message.length : 120 - this.state.message.length;
    this.state.message += "\x80";
    this.state.message += new Array(padLen).join("\x00");

    // Add length
    let lengthBits = this.state.length * 8;
    for (let i = 0; i < 4; i++) {
      this.state.message += String.fromCharCode(lengthBits >> (8 * i));
    }
    // @todo fix length to 64 bit
    this.state.message += "\x00\x00\x00\x00";
    this.process();

    return this.getStateHash();
  }
}

export default Has160