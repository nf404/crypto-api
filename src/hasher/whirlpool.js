'use strict';
import {rotateRight64hi, rotateRight64lo} from "../tools";
import Hasher32be from "../hasher32be";

const SBOX = [
  0x1823, 0xc6e8, 0x87b8, 0x014f, 0x36a6, 0xd2f5, 0x796f, 0x9152,
  0x60bc, 0x9b8e, 0xa30c, 0x7b35, 0x1de0, 0xd7c2, 0x2e4b, 0xfe57,
  0x1577, 0x37e5, 0x9ff0, 0x4ada, 0x58c9, 0x290a, 0xb1a0, 0x6b85,
  0xbd5d, 0x10f4, 0xcb3e, 0x0567, 0xe427, 0x418b, 0xa77d, 0x95d8,
  0xfbee, 0x7c66, 0xdd17, 0x479e, 0xca2d, 0xbf07, 0xad5a, 0x8333,
  0x6302, 0xaa71, 0xc819, 0x49d9, 0xf2e3, 0x5b88, 0x9a26, 0x32b0,
  0xe90f, 0xd580, 0xbecd, 0x3448, 0xff7a, 0x905f, 0x2068, 0x1aae,
  0xb454, 0x9322, 0x64f1, 0x7312, 0x4008, 0xc3ec, 0xdba1, 0x8d3d,
  0x9700, 0xcf2b, 0x7682, 0xd61b, 0xb5af, 0x6a50, 0x45f3, 0x30ef,
  0x3f55, 0xa2ea, 0x65ba, 0x2fc0, 0xde1c, 0xfd4d, 0x9275, 0x068a,
  0xb2e6, 0x0e1f, 0x62d4, 0xa896, 0xf9c5, 0x2559, 0x8472, 0x394c,
  0x5e78, 0x388c, 0xd1a5, 0xe261, 0xb321, 0x9c1e, 0x43c7, 0xfc04,
  0x5199, 0x6d0d, 0xfadf, 0x7e24, 0x3bab, 0xce11, 0x8f4e, 0xb7eb,
  0x3c81, 0x94f7, 0xb913, 0x2cd3, 0xe76e, 0xc403, 0x5644, 0x7fa9,
  0x2abb, 0xc153, 0xdc0b, 0x9d6c, 0x3174, 0xf646, 0xac89, 0x14e1,
  0x163a, 0x6909, 0x70b6, 0xd0ed, 0xcc42, 0x98a4, 0x285c, 0xf886
];
const SBOX0 = [
  0x68d0, 0xeb2b, 0x489d, 0x6ae4, 0xe3a3, 0x5681, 0x7df1, 0x859e,
  0x2c8e, 0x78ca, 0x17a9, 0x61d5, 0x5d0b, 0x8c3c, 0x7751, 0x2242,
  0x3f54, 0x4180, 0xcc86, 0xb318, 0x2e57, 0x0662, 0xf436, 0xd16b,
  0x1b65, 0x7510, 0xda49, 0x26f9, 0xcb66, 0xe7ba, 0xae50, 0x52ab,
  0x05f0, 0x0d73, 0x3b04, 0x20fe, 0xddf5, 0xb45f, 0x0ab5, 0xc0a0,
  0x71a5, 0x2d60, 0x7293, 0x3908, 0x8321, 0x5c87, 0xb1e0, 0x00c3,
  0x1291, 0x8a02, 0x1ce6, 0x45c2, 0xc4fd, 0xbf44, 0xa14c, 0x33c5,
  0x8423, 0x7cb0, 0x2515, 0x3569, 0xff94, 0x4d70, 0xa2af, 0xcdd6,
  0x6cb7, 0xf809, 0xf367, 0xa4ea, 0xecb6, 0xd4d2, 0x141e, 0xe124,
  0x38c6, 0xdb4b, 0x7a3a, 0xde5e, 0xdf95, 0xfcaa, 0xd7ce, 0x070f,
  0x3d58, 0x9a98, 0x9cf2, 0xa711, 0x7e8b, 0x4303, 0xe2dc, 0xe5b2,
  0x4ec7, 0x6de9, 0x2740, 0xd837, 0x928f, 0x011d, 0x533e, 0x59c1,
  0x4f32, 0x16fa, 0x74fb, 0x639f, 0x341a, 0x2a5a, 0x8dc9, 0xcff6,
  0x9028, 0x889b, 0x310e, 0xbd4a, 0xe896, 0xa60c, 0xc879, 0xbcbe,
  0xef6e, 0x4697, 0x5bed, 0x19d9, 0xac99, 0xa829, 0x641f, 0xad55,
  0x13bb, 0xf76f, 0xb947, 0x2fee, 0xb87b, 0x8930, 0xd37f, 0x7682
];
const theta = [1, 1, 4, 1, 8, 5, 2, 9];
const theta0 = [1, 1, 3, 1, 5, 8, 9, 5];
let C = new Array(512);
let RC = new Array(22);
let C0 = new Array(512);
let RC0 = new Array(22);
let CT = new Array(512);
let RCT = new Array(22);

function calculateRC(SBOX, theta) {
  const C = new Array(512);
  const RC = new Array(22);
  for (let t = 0; t < 8; t++) {
    C[t] = [];
  }
  for (let i = 0; i < 256; i++) {
    let c = SBOX[(i / 2) | 0];
    let V = new Array(10);
    V[1] = ((i & 1) === 0) ? c >>> 8 : c & 0xff;
    V[2] = V[1] << 1;
    if (V[2] >= 0x100) {
      V[2] ^= 0x11d;
    }
    V[3] = V[2] ^ V[1];
    V[4] = V[2] << 1;
    if (V[4] >= 0x100) {
      V[4] ^= 0x11d;
    }
    V[5] = V[4] ^ V[1];
    V[8] = V[4] << 1;
    if (V[8] >= 0x100) {
      V[8] ^= 0x11d;
    }
    V[9] = V[8] ^ V[1];

    // build the circulant table C[0][x] = S[x].[1, 1, 4, 1, 8, 5, 2, 9] | S[x].[1, 1, 3, 1, 5, 8, 9, 5]
    C[0][i * 2] = (V[theta[0]] << 24) | (V[theta[1]] << 16) | (V[theta[2]] << 8) | V[theta[3]];
    C[0][i * 2 + 1] = (V[theta[4]] << 24) | (V[theta[5]] << 16) | (V[theta[6]] << 8) | V[theta[7]];

    // build the remaining circulant tables C[t][x] = C[0][x] rotr t
    for (let t = 1; t < 8; t++) {
      C[t][i * 2] = rotateRight64lo(C[0][i * 2 + 1], C[0][i * 2], t << 3);
      C[t][i * 2 + 1] = rotateRight64hi(C[0][i * 2 + 1], C[0][i * 2], t << 3);
    }
  }
  // build the round constants
  RC[0] = 0;
  RC[1] = 0;
  for (let i = 1; i <= 10; i++) {
    RC[i * 2] = (C[0][16 * i - 16] & 0xff000000) ^
      (C[1][16 * i - 14] & 0x00ff0000) ^
      (C[2][16 * i - 12] & 0x0000ff00) ^
      (C[3][16 * i - 10] & 0x000000ff);
    RC[i * 2 + 1] = (C[4][16 * i - 7] & 0xff000000) ^
      (C[5][16 * i - 5] & 0x00ff0000) ^
      (C[6][16 * i - 3] & 0x0000ff00) ^
      (C[7][16 * i - 1] & 0x000000ff);
  }

  return [C, RC];
}

// Build transform tables
(function () {
  // whirlpool-0
  let x = calculateRC(SBOX0, theta0);
  C0 = x[0];
  RC0 = x[1];
  // whirlpool-t
  x = calculateRC(SBOX, theta0);
  CT = x[0];
  RCT = x[1];
  // whirlpool
  x = calculateRC(SBOX, theta);
  C = x[0];
  RC = x[1];
})();

class Whirlpool extends Hasher32be {
  constructor(options) {
    super(options);

    this.options.type = this.options.type || '';
    this.options.rounds = this.options.rounds || 10;

    this.state.hash = new Array(16);
    for (let i = 0; i < 16; i++) {
      this.state.hash[i] = 0;
    }

    switch (this.options.type) {
      case '0':
      case 0:
        this.C = C0;
        this.RC = RC0;
        break;
      case 't':
        this.C = CT;
        this.RC = RCT;
        break;
      default:
        this.C = C;
        this.RC = RC;
    }
  }

  processBlock(M) {
    // compute and apply K^0 to the cipher state
    let K = new Array(16);
    let state = [];
    for (let i = 0; i < 16; i++) {
      state[i] = M[i] ^ (K[i] = this.state.hash[i]) | 0;
    }

    // iterate over all rounds
    let L = [];
    for (let r = 1; r <= this.options.rounds; r++) {
      // compute K^r from K^{r-1}
      for (let i = 0; i < 8; i++) {
        L[i * 2] = 0;
        L[i * 2 + 1] = 0;
        for (let t = 0, s = 56, j = 0; t < 8; t++, s -= 8, j = s < 32 ? 1 : 0) {
          L[i * 2] ^= this.C[t][((K[((i - t) & 7) * 2 + j] >>> (s % 32)) & 0xff) * 2];
          L[i * 2 + 1] ^= this.C[t][((K[((i - t) & 7) * 2 + j] >>> (s % 32)) & 0xff) * 2 + 1];
        }
      }
      for (let i = 0; i < 16; i++) {
        K[i] = L[i];
      }
      K[0] ^= this.RC[r * 2];
      K[1] ^= this.RC[r * 2 + 1];

      // apply the r-th round transformation
      for (let i = 0; i < 8; i++) {
        L[i * 2] = K[i * 2];
        L[i * 2 + 1] = K[i * 2 + 1];
        for (let t = 0, s = 56, j = 0; t < 8; t++, s -= 8, j = s < 32 ? 1 : 0) {
          L[i * 2] ^= this.C[t][((state[((i - t) & 7) * 2 + j] >>> (s % 32)) & 0xff) * 2];
          L[i * 2 + 1] ^= this.C[t][((state[((i - t) & 7) * 2 + j] >>> (s % 32)) & 0xff) * 2 + 1];
        }
      }
      for (let i = 0; i < 16; i++) {
        state[i] = L[i];
      }
    }
    // apply the Miyaguchi-Preneel compression function
    for (let i = 0; i < 16; i++) {
      this.state.hash[i] ^= state[i] ^ M[i];
    }
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

export default Whirlpool