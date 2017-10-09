'use strict';

import Hasher32le from "../hasher32le";
import {rotateLeft} from "../tools";

const ZL = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
];
const ZR = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
];
const SL = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
];
const SR = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
];

class Ripemd extends Hasher32le {
  constructor(options) {
    super(options);

    this.options.length = this.options.length || 160;
    switch (options.length) {
      case 128:
        this.state.hash = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476];
        this.processBlock = this.processBlock128;
        break;
      case 256:
        this.state.hash = [
          0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476,
          0x76543210, 0xfedcba98, 0x89abcdef, 0x01234567
        ];
        this.processBlock = this.processBlock256;
        break;
      case 320:
        this.state.hash = [
          0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
          0x76543210, 0xfedcba98, 0x89abcdef, 0x01234567, 0x3c2d1e0f
        ];
        this.processBlock = this.processBlock320;
        break;
      default: // 160
        this.state.hash = [
          0x67452301,
          0xefcdab89,
          0x98badcfe,
          0x10325476,
          0xc3d2e1f0
        ];
        this.processBlock = this.processBlock160;
    }
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {number}
   */
  static F(x, y, z) {
    return x ^ y ^ z;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {number}
   */
  static G(x, y, z) {
    return (x & y) | ((~x) & z);
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {number}
   */
  static H(x, y, z) {
    return (x | (~y)) ^ z;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {number}
   */
  static I(x, y, z) {
    return (x & z) | (y & (~z));
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {number}
   */
  static J(x, y, z) {
    return x ^ (y | (~z));
  }

  /**
   *
   * @param {number} i
   * @param {number} bl
   * @param {number} cl
   * @param {number} dl
   * @returns {number}
   */
  static T(i, bl, cl, dl) {
    if (i < 16) {
      return this.F(bl, cl, dl);
    }
    if (i < 32) {
      return (this.G(bl, cl, dl) + 0x5a827999) | 0;
    }
    if (i < 48) {
      return (this.H(bl, cl, dl) + 0x6ed9eba1) | 0;
    }
    if (i < 64) {
      return (this.I(bl, cl, dl) + 0x8f1bbcdc) | 0;
    }
    return (this.J(bl, cl, dl) + 0xa953fd4e) | 0;
  }

  /**
   * @param {number} i
   * @param {number} br
   * @param {number} cr
   * @param {number} dr
   * @returns {number}
   */
  static T64(i, br, cr, dr) {
    if (i < 16) {
      return (this.I(br, cr, dr) + 0x50a28be6) | 0;
    }
    if (i < 32) {
      return (this.H(br, cr, dr) + 0x5c4dd124) | 0;
    }
    if (i < 48) {
      return (this.G(br, cr, dr) + 0x6d703ef3) | 0;
    }
    return this.F(br, cr, dr);
  }

  /**
   * @param {number} i
   * @param {number} br
   * @param {number} cr
   * @param {number} dr
   * @returns {number}
   */
  static T80(i, br, cr, dr) {
    if (i < 16) {
      return (this.J(br, cr, dr) + 0x50a28be6) | 0;
    }
    if (i < 32) {
      return (this.I(br, cr, dr) + 0x5c4dd124) | 0;
    }
    if (i < 48) {
      return (this.H(br, cr, dr) + 0x6d703ef3) | 0;
    }
    if (i < 64) {
      return (this.G(br, cr, dr) + 0x7a6d76e9) | 0;
    }
    return this.F(br, cr, dr);
  }

  processBlock128(block) {
    // Working variables
    let al = this.state.hash[0] | 0;
    let bl = this.state.hash[1] | 0;
    let cl = this.state.hash[2] | 0;
    let dl = this.state.hash[3] | 0;
    let ar = al;
    let br = bl;
    let cr = cl;
    let dr = dl;

    for (let i = 0; i < 64; i++) {
      let t = (al + block[ZL[i]]) | 0;
      t = (t + Ripemd.T(i, bl, cl, dl)) | 0;
      t = rotateLeft(t, SL[i]);
      al = dl;
      dl = cl;
      cl = bl;
      bl = t;

      t = (ar + block[ZR[i]]) | 0;
      t = (t + Ripemd.T64(i, br, cr, dr)) | 0;
      t = rotateLeft(t, SR[i]);
      ar = dr;
      dr = cr;
      cr = br;
      br = t;
    }
    let t = (this.state.hash[1] + cl + dr) | 0;
    this.state.hash[1] = (this.state.hash[2] + dl + ar) | 0;
    this.state.hash[2] = (this.state.hash[3] + al + br) | 0;
    this.state.hash[3] = (this.state.hash[0] + bl + cr) | 0;
    this.state.hash[0] = t;
  }

  processBlock160(block) {
    // Working variables
    let al = this.state.hash[0] | 0;
    let bl = this.state.hash[1] | 0;
    let cl = this.state.hash[2] | 0;
    let dl = this.state.hash[3] | 0;
    let el = this.state.hash[4] | 0;
    let ar = al;
    let br = bl;
    let cr = cl;
    let dr = dl;
    let er = el;

    for (let i = 0; i < 80; i++) {
      let t = (al + block[ZL[i]]) | 0;
      t = (t + Ripemd.T(i, bl, cl, dl)) | 0;
      t = rotateLeft(t, SL[i]);
      t = (t + el) | 0;
      al = el;
      el = dl;
      dl = rotateLeft(cl, 10);
      cl = bl;
      bl = t;

      t = (ar + block[ZR[i]]) | 0;
      t = (t + Ripemd.T80(i, br, cr, dr)) | 0;
      t = rotateLeft(t, SR[i]);
      t = (t + er) | 0;
      ar = er;
      er = dr;
      dr = rotateLeft(cr, 10);
      cr = br;
      br = t;
    }
    let t = (this.state.hash[1] + cl + dr) | 0;
    this.state.hash[1] = (this.state.hash[2] + dl + er) | 0;
    this.state.hash[2] = (this.state.hash[3] + el + ar) | 0;
    this.state.hash[3] = (this.state.hash[4] + al + br) | 0;
    this.state.hash[4] = (this.state.hash[0] + bl + cr) | 0;
    this.state.hash[0] = t;
  }

  processBlock256(block) {
    // Working variables
    let al = this.state.hash[0] | 0;
    let bl = this.state.hash[1] | 0;
    let cl = this.state.hash[2] | 0;
    let dl = this.state.hash[3] | 0;
    let ar = this.state.hash[4] | 0;
    let br = this.state.hash[5] | 0;
    let cr = this.state.hash[6] | 0;
    let dr = this.state.hash[7] | 0;

    for (let i = 0; i < 64; i += 1) {
      let t = (al + block[ZL[i]]) | 0;
      t = (t + Ripemd.T(i, bl, cl, dl)) | 0;
      t = rotateLeft(t, SL[i]);
      al = dl;
      dl = cl;
      cl = bl;
      bl = t;

      t = (ar + block[ZR[i]]) | 0;
      t = (t + Ripemd.T64(i, br, cr, dr)) | 0;
      t = rotateLeft(t, SR[i]);
      ar = dr;
      dr = cr;
      cr = br;
      br = t;
      switch (i) {
        case 15:
          t = al;
          al = ar;
          ar = t;
          break;
        case 31:
          t = bl;
          bl = br;
          br = t;
          break;
        case 47:
          t = cl;
          cl = cr;
          cr = t;
          break;
        case 63:
          t = dl;
          dl = dr;
          dr = t;
          break;
      }
    }
    this.state.hash[0] = (this.state.hash[0] + al) | 0;
    this.state.hash[1] = (this.state.hash[1] + bl) | 0;
    this.state.hash[2] = (this.state.hash[2] + cl) | 0;
    this.state.hash[3] = (this.state.hash[3] + dl) | 0;
    this.state.hash[4] = (this.state.hash[4] + ar) | 0;
    this.state.hash[5] = (this.state.hash[5] + br) | 0;
    this.state.hash[6] = (this.state.hash[6] + cr) | 0;
    this.state.hash[7] = (this.state.hash[7] + dr) | 0;
  }

  processBlock320(block) {
    // Working variables
    let al = this.state.hash[0] | 0;
    let bl = this.state.hash[1] | 0;
    let cl = this.state.hash[2] | 0;
    let dl = this.state.hash[3] | 0;
    let el = this.state.hash[4] | 0;
    let ar = this.state.hash[5] | 0;
    let br = this.state.hash[6] | 0;
    let cr = this.state.hash[7] | 0;
    let dr = this.state.hash[8] | 0;
    let er = this.state.hash[9] | 0;

    for (let i = 0; i < 80; i += 1) {
      let t = (al + block[ZL[i]]) | 0;
      t = (t + Ripemd.T(i, bl, cl, dl)) | 0;
      t = rotateLeft(t, SL[i]);
      t = (t + el) | 0;
      al = el;
      el = dl;
      dl = rotateLeft(cl, 10);
      cl = bl;
      bl = t;

      t = (ar + block[ZR[i]]) | 0;
      t = (t + Ripemd.T80(i, br, cr, dr)) | 0;
      t = rotateLeft(t, SR[i]);
      t = (t + er) | 0;
      ar = er;
      er = dr;
      dr = rotateLeft(cr, 10);
      cr = br;
      br = t;
      switch (i) {
        case 15:
          t = bl;
          bl = br;
          br = t;
          break;
        case 31:
          t = dl;
          dl = dr;
          dr = t;
          break;
        case 47:
          t = al;
          al = ar;
          ar = t;
          break;
        case 63:
          t = cl;
          cl = cr;
          cr = t;
          break;
        case 79:
          t = el;
          el = er;
          er = t;
          break;
      }
    }
    this.state.hash[0] = (this.state.hash[0] + al) | 0;
    this.state.hash[1] = (this.state.hash[1] + bl) | 0;
    this.state.hash[2] = (this.state.hash[2] + cl) | 0;
    this.state.hash[3] = (this.state.hash[3] + dl) | 0;
    this.state.hash[4] = (this.state.hash[4] + el) | 0;
    this.state.hash[5] = (this.state.hash[5] + ar) | 0;
    this.state.hash[6] = (this.state.hash[6] + br) | 0;
    this.state.hash[7] = (this.state.hash[7] + cr) | 0;
    this.state.hash[8] = (this.state.hash[8] + dr) | 0;
    this.state.hash[9] = (this.state.hash[9] + er) | 0;
  }

  finalize(encoder) {
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

    return encoder.encode(this.getStateHash());
  }
}

export default Ripemd