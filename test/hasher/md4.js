'use strict';
import TestHasher from "../TestHasher";
import Md4 from "../../src/hasher/md4";

// The MD4 test suite
// https://tools.ietf.org/html/rfc1320
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/md4/Md4-128.unverified.test-vectors

class TestMd4 extends TestHasher {
  constructor() {
    super();

    this.data = {
      "md4('')": {
        message: '',
        hash: '31d6cfe0d16ae931b73c59d7e0c089c0'
      },
      "md4('a')": {
        message: 'a',
        hash: 'bde52cb31de33e46245e05fbdbd6fb24'
      },
      "md4('abc')": {
        message: 'abc',
        hash: 'a448017aaf21d8525fc10ae87aa6729d'
      },
      "md4('message digest')": {
        message: 'message digest',
        hash: 'd9130a8164549fe818874806e1c7014b'
      },
      "md4('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'd79e1c308aa5bbcdeea8ed63df412da9'
      },
      "md4('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: '4691a9ec81b1a6bd1ab8557240b245c5'
      },
      "md4('A..Za..z0..')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: '043f8582f241db351ce627e153e7f0e4'
      },
      "md4('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: 'e33b4ddc9c38f2199c3e7b164fcc0536'
      }
    }
  }

  getInstance(options) {
    return new Md4();
  }
}

export default TestMd4