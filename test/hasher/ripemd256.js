'use strict';
import TestHasher from "../TestHasher";
import Ripemd from "../../src/hasher/ripemd";

// The RIPEMD256 test suite
// http://homes.esat.kuleuven.be/~bosselae/ripemd160.html

class TestRipemd256 extends TestHasher {
  constructor() {
    super();

    this.data = {
      "ripemd256('')": {
        options: {length: 256},
        message: '',
        hash: '02ba4c4e5f8ecd1877fc52d64d30e37a2d9774fb1e5d026380ae0168e3c5522d'
      },
      "ripemd256('a')": {
        options: {length: 256},
        message: 'a',
        hash: 'f9333e45d857f5d90a91bab70a1eba0cfb1be4b0783c9acfcd883a9134692925'
      },
      "ripemd256('abc')": {
        options: {length: 256},
        message: 'abc',
        hash: 'afbd6e228b9d8cbbcef5ca2d03e6dba10ac0bc7dcbe4680e1e42d2e975459b65'
      },
      "ripemd256('message digest')": {
        options: {length: 256},
        message: 'message digest',
        hash: '87e971759a1ce47a514d5c914c392c9018c7c46bc14465554afcdf54a5070c0e'
      },
      "ripemd256('a..z')": {
        options: {length: 256},
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: '649d3034751ea216776bf9a18acc81bc7896118a5197968782dd1fd97d8d5133'
      },
      "ripemd256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        options: {length: 256},
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: '3843045583aac6c8c8d9128573e7a9809afb2a0f34ccc36ea9e72f16f6368e3f'
      },
      "ripemd256('A..Za..z0..9')": {
        options: {length: 256},
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: '5740a408ac16b720b84424ae931cbb1fe363d1d0bf4017f1a89f7ea6de77a0b8'
      },
      "ripemd256('1234567890' x 8)": {
        options: {length: 256},
        message: new Array(9).join('1234567890'),
        hash: '06fdcc7a409548aaf91368c06a6275b553e3f099bf0ea4edfd6778df89a890dd'
      }
    }
  }

  getInstance(options) {
    return new Ripemd(options || {length: 256});
  }
}

export default TestRipemd256