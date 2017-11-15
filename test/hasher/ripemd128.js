'use strict';
import TestHasher from "../TestHasher";
import Ripemd from "../../src/hasher/ripemd";

// The RIPEMD128 test suite
// http://homes.esat.kuleuven.be/~bosselae/ripemd160.html

class TestRipemd128 extends TestHasher {
  constructor() {
    super();

    this.data = {
      "ripemd128('')": {
        options: {length: 128},
        message: '',
        hash: 'cdf26213a150dc3ecb610f18f6b38b46'
      },
      "ripemd128('a')": {
        options: {length: 128},
        message: 'a',
        hash: '86be7afa339d0fc7cfc785e72f578d33'
      },
      "ripemd128('abc')": {
        options: {length: 128},
        message: 'abc',
        hash: 'c14a12199c66e4ba84636b0f69144c77'
      },
      "ripemd128('message digest')": {
        options: {length: 128},
        message: 'message digest',
        hash: '9e327b3d6e523062afc1132d7df9d1b8'
      },
      "ripemd128('a..z')": {
        options: {length: 128},
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'fd2aa607f71dc8f510714922b371834e'
      },
      "ripemd128('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        options: {length: 128},
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: 'a1aa0689d0fafa2ddc22e88b49133a06'
      },
      "ripemd128('A..Za..z0..9')": {
        options: {length: 128},
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'd1e959eb179c911faea4624c60c5c702'
      },
      "ripemd128('1234567890' x 8)": {
        options: {length: 128},
        message: new Array(9).join('1234567890'),
        hash: '3f45ef194732c2dbb2c4a2c769795fa3'
      }
    }
  }

  getInstance(options) {
    return new Ripemd(options || {length: 128});
  }
}

export default TestRipemd128