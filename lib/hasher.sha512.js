/*global require */
(/**
 *
 * @param {CryptoApi} CryptoApi
 * @returns {Sha512}
 */
  function (CryptoApi) {
  'use strict';

  // Transform constants
  var K = [
      0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
      0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
      0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
      0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
      0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
      0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
      0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
      0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
      0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
      0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
      0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
      0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
      0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
      0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
      0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
      0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
      0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
      0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
      0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
      0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

  /**
   * @class Sha512
   * @desc Sha512 hasher
   * @implements HasherInterface
   * @extends Hasher32be
   * @param {string} name
   * @param {Object} options
   */
  var Sha512 = function sha512(name, options) {
      this.constructor(name, options);
  };
  Sha512.prototype = Object.create(CryptoApi.Hasher32be.prototype);
  Sha512.prototype.blockSize = 32;
  /**
   * @memberOf Sha512
   * @constructor
   * @param {string} name
   * @param {Object} options
   */
  Sha512.prototype.constructor = function (name, options) {
    CryptoApi.Hasher32be.prototype.constructor.call(this, name, options);
    /**
     * @desc Hash state
     * @memberOf! Sha512#
     * @alias state.hash
     * @type {number[]}
     */
    this.state.hash = [];
    this.reduceHash = 0;
    switch (this.name) {
      case 'sha512/224':
        this.state.hash = [
          0x8c3d37c8, 0x19544da2,
          0x73e19966, 0x89dcd4d6,
          0x1dfab7ae, 0x32ff9c82,
          0x679dd514, 0x582f9fcf,
          0x0f6d2b69, 0x7bd44da8,
          0x77e36f73, 0x04c48942,
          0x3f9d85a8, 0x6a1d36c8,
          0x1112e6ad, 0x91d692a1
        ];
        this.reduceHash = 9;
        break;
      case 'sha512/256':
        this.state.hash = [
          0x22312194, 0xfc2bf72c,
          0x9f555fa3, 0xc84c64c2,
          0x2393b86b, 0x6f53b151,
          0x96387719, 0x5940eabd,
          0x96283ee2, 0xa88effe3,
          0xbe5e1e25, 0x53863992,
          0x2b0199fc, 0x2c85b8aa,
          0x0eb72ddc, 0x81c52ca2
        ];
        this.reduceHash = 8;
        break;
      case 'sha384':
        this.state.hash = [
          0xcbbb9d5d, 0xc1059ed8,
          0x629a292a, 0x367cd507,
          0x9159015a, 0x3070dd17,
          0x152fecd8, 0xf70e5939,
          0x67332667, 0xffc00b31,
          0x8eb44a87, 0x68581511,
          0xdb0c2e0d, 0x64f98fa7,
          0x47b5481d, 0xbefa4fa4
        ];
        this.reduceHash = 4;
        break;
      default:
        this.state.hash = [
          0x6a09e667, 0xf3bcc908,
          0xbb67ae85, 0x84caa73b,
          0x3c6ef372, 0xfe94f82b,
          0xa54ff53a, 0x5f1d36f1,
          0x510e527f, 0xade682d1,
          0x9b05688c, 0x2b3e6c1f,
          0x1f83d9ab, 0xfb41bd6b,
          0x5be0cd19, 0x137e2179
        ];
    }
    this.W = new Array(160);
  };

  /**
   * @memberOf Sha512
   * @method processBlock
   * @param {number[]} M
   */
  Sha512.prototype.processBlock = function processBlock(M) {
      // Working variables
      var ah = this.state.hash[0];
      var al = this.state.hash[1];
      var bh = this.state.hash[2];
      var bl = this.state.hash[3];
      var ch = this.state.hash[4];
      var cl = this.state.hash[5];
      var dh = this.state.hash[6];
      var dl = this.state.hash[7];
      var eh = this.state.hash[8];
      var el = this.state.hash[9];
      var fh = this.state.hash[10];
      var fl = this.state.hash[11];
      var gh = this.state.hash[12];
      var gl = this.state.hash[13];
      var hh = this.state.hash[14];
      var hl = this.state.hash[15];
      var s0h, s0l, s1h, s1l;

      // Calculate hash
      for (var i = 0; i < 160; i += 2) {
          if (i < 32) {
              this.W[i] = M[i];
              this.W[i+1] = M[i+1];
          } else {
              s0h = CryptoApi.Tools.rotateRight64hi(this.W[i-30], this.W[i-29], 1) ^
                CryptoApi.Tools.rotateRight64hi(this.W[i-30], this.W[i-29], 8) ^
                  (this.W[i-30] >>> 7);
              s0l = CryptoApi.Tools.rotateRight64lo(this.W[i-30], this.W[i-29], 1) ^
                CryptoApi.Tools.rotateRight64lo(this.W[i-30], this.W[i-29], 8) ^
                  ((this.W[i-29] >>> 7) | (this.W[i-30] << 25));
              s1h = CryptoApi.Tools.rotateRight64hi(this.W[i-4], this.W[i-3], 19) ^
                CryptoApi.Tools.rotateRight64hi(this.W[i-4], this.W[i-3], 61) ^
                  (this.W[i-4] >>> 6);
              s1l = CryptoApi.Tools.rotateRight64lo(this.W[i-4], this.W[i-3], 19) ^
                CryptoApi.Tools.rotateRight64lo(this.W[i-4], this.W[i-3], 61) ^
                  ((this.W[i-3] >>> 6) | (this.W[i-4] << 26));

              var c1 = (this.W[i - 13] & 0xFFFF) + (this.W[i - 31] & 0xFFFF) + (s0l & 0xFFFF) + (s1l & 0xFFFF);
              var c2 = (this.W[i - 13] >>> 16) + (this.W[i - 31] >>> 16) + (s0l >>> 16) + (s1l >>> 16) + (c1 >>> 16);
              var c3 = (this.W[i - 14] & 0xFFFF) + (this.W[i - 32] & 0xFFFF) + (s0h & 0xFFFF) + (s1h & 0xFFFF) + (c2 >>> 16);
              var c4 = (this.W[i - 14] >>> 16) + (this.W[i - 32] >>> 16) + (s0h >>> 16) + (s1h >>> 16) + (c3 >>> 16);

              this.W[i] = ((c4 << 16) | (c3 & 0xFFFF)) & 0xFFFFFFFF;
              this.W[i+1] = ((c2 << 16) | (c1 & 0xFFFF)) & 0xFFFFFFFF;
          }

          s0h = CryptoApi.Tools.rotateRight64hi(ah, al, 28) ^ CryptoApi.Tools.rotateRight64hi(ah, al, 34) ^ CryptoApi.Tools.rotateRight64hi(ah, al, 39);
          s0l = CryptoApi.Tools.rotateRight64lo(ah, al, 28) ^ CryptoApi.Tools.rotateRight64lo(ah, al, 34) ^ CryptoApi.Tools.rotateRight64lo(ah, al, 39);
          s1h = CryptoApi.Tools.rotateRight64hi(eh, el, 14) ^ CryptoApi.Tools.rotateRight64hi(eh, el, 18) ^ CryptoApi.Tools.rotateRight64hi(eh, el, 41);
          s1l = CryptoApi.Tools.rotateRight64lo(eh, el, 14) ^ CryptoApi.Tools.rotateRight64lo(eh, el, 18) ^ CryptoApi.Tools.rotateRight64lo(eh, el, 41);

          var chh  = (eh & fh) ^ (~eh & gh);
          var chl  = (el & fl) ^ (~el & gl);
          var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
          var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

          var t1l = hl + s1l;
          var t1h = hh + s1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
          t1l = t1l + chl;
          t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
          t1l = t1l + K[i+1];
          t1h = t1h + K[i] + ((t1l >>> 0) < (K[i+1] >>> 0) ? 1 : 0);
          t1l = t1l + this.W[i+1];
          t1h = t1h + this.W[i] + ((t1l >>> 0) < (this.W[i+1] >>> 0) ? 1 : 0);

          var t2l = s0l + majl;
          var t2h = s0h + majh + ((t2l >>> 0) < (s0l >>> 0) ? 1 : 0);

          hh = gh;
          hl = gl;
          gh = fh;
          gl = fl;
          fh = eh;
          fl = el;
          el = (dl + t1l) | 0;
          eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
          dh = ch;
          dl = cl;
          ch = bh;
          cl = bl;
          bh = ah;
          bl = al;
          al = (t1l + t2l) | 0;
          ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
      }

      this.state.hash[1] = (this.state.hash[1] + al) | 0;
      this.state.hash[0] = (this.state.hash[0] + ah + ((this.state.hash[1] >>> 0) < (al >>> 0) ? 1 : 0)) | 0;
      this.state.hash[3] = (this.state.hash[3] + bl) | 0;
      this.state.hash[2] = (this.state.hash[2] + bh + ((this.state.hash[3] >>> 0) < (bl >>> 0) ? 1 : 0)) | 0;
      this.state.hash[5] = (this.state.hash[5] + cl) | 0;
      this.state.hash[4] = (this.state.hash[4] + ch + ((this.state.hash[5] >>> 0) < (cl >>> 0) ? 1 : 0)) | 0;
      this.state.hash[7] = (this.state.hash[7] + dl) | 0;
      this.state.hash[6] = (this.state.hash[6] + dh + ((this.state.hash[7] >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
      this.state.hash[9] = (this.state.hash[9] + el) | 0;
      this.state.hash[8] = (this.state.hash[8] + eh + ((this.state.hash[9] >>> 0) < (el >>> 0) ? 1 : 0)) | 0;
      this.state.hash[11] = (this.state.hash[11] + fl) | 0;
      this.state.hash[10] = (this.state.hash[10] + fh + ((this.state.hash[11] >>> 0) < (fl >>> 0) ? 1 : 0)) | 0;
      this.state.hash[13] = (this.state.hash[13] + gl) | 0;
      this.state.hash[12] = (this.state.hash[12] + gh + ((this.state.hash[13] >>> 0) < (gl >>> 0) ? 1 : 0)) | 0;
      this.state.hash[15] = (this.state.hash[15] + hl) | 0;
      this.state.hash[14] = (this.state.hash[14] + hh + ((this.state.hash[15] >>> 0) < (hl >>> 0) ? 1 : 0)) | 0;
  };

  /**
   * @memberOf Sha512
   * @method finalize
   * @return {HashArray} hash
   */
  Sha512.prototype.finalize = function finalize() {
      // Add padding
      var padLen = this.state.message.length < 112 ? 112 - this.state.message.length : 240 - this.state.message.length;
      this.state.message += "\x80";
      this.state.message += new Array(padLen).join("\x00");

      // Add length
      // @todo fix length to 64 bit
      this.state.message += "\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00";
      var lengthBits = this.state.length * 8;
      for (var i = 3; i >= 0; i--) {
        this.state.message += String.fromCharCode(lengthBits >> (8 * i));
      }
      this.process();

      var hash = [];
      for (var k = 0, l = (this.state.hash.length - this.reduceHash) | 0; k < l; k++) {
          for (var j = 3; j >= 0; j--) {
              hash.push((this.state.hash[k] >> 8 * j) & 0xff);
          }
      }

      // Return hash
      return CryptoApi.hashArray(hash);
  };

  CryptoApi.Hashers.add('sha512', Sha512);
  CryptoApi.Hashers.add('sha384', Sha512);
  CryptoApi.Hashers.add('sha512/224', Sha512);
  CryptoApi.Hashers.add('sha512/256', Sha512);
  return Sha512;
})(
    this.CryptoApi || require('./crypto-api')
);