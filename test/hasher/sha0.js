'use strict';
import Sha0 from "../../src/hasher/sha0";
import TestHasher from "../TestHasher";

// The SHA0 test suite
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/sha/Sha-0-160.test-vectors

class TestSha0 extends TestHasher {
  constructor() {
    super();

    this.data = {
      "sha0('')": {
        message: '',
        hash: 'f96cea198ad1dd5617ac084a3d92c6107708c0ef'
      },
      "sha0('a')": {
        message: 'a',
        hash: '37f297772fae4cb1ba39b6cf9cf0381180bd62f2'
      },
      "sha0('abc')": {
        message: 'abc',
        hash: '0164b8a914cd2a5e74c4f7ff082c4d97f1edf880'
      },
      "sha0('message digest')": {
        message: 'message digest',
        hash: 'c1b0f222d150ebb9aa36a40cafdc8bcbed830b14'
      },
      "sha0('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'b40ce07a430cfd3c033039b9fe9afec95dc1bdcd'
      },
      "sha0('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: 'd2516ee1acfa5baf33dfc1c471e438449ef134c8'
      },
      "sha0('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: '79e966f7a3a990df33e40e3d7f8f18d2caebadfa'
      },
      "sha0('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '4aa29d14d171522ece47bee8957e35a41f3e9cff'
      }
    }
  }

  getInstance(options) {
    return new Sha0();
  }
}

export default TestSha0