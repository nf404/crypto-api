'use strict';
import TestHasher from "../TestHasher";
import Md5 from "../../src/hasher/md5";

// The MD5 test suite
// https://tools.ietf.org/html/rfc1321
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/md5/Md5-128.unverified.test-vectors

class TestMd5 extends TestHasher {
  constructor() {
    super();

    this.data = {
      "md5('')": {
        message: '',
        hash: 'd41d8cd98f00b204e9800998ecf8427e'
      },
      "md5('a')": {
        message: 'a',
        hash: '0cc175b9c0f1b6a831c399e269772661'
      },
      "md5('abc')": {
        message: 'abc',
        hash: '900150983cd24fb0d6963f7d28e17f72'
      },
      "md5('message digest')": {
        message: 'message digest',
        hash: 'f96b697d7cb7938d525a2f31aaf161d0'
      },
      "md5('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'c3fcd3d76192e4007dfb496cca67e13b'
      },
      "md5('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: '8215ef0796a20bcaaae116d3876c664a'
      },
      "md5('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'd174ab98d277d9f5a5611c2c9f419d9f'
      },
      "md5('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '57edf4a22be3c955ac49da2e2107b67a'
      }
    }
  }

  getInstance(options) {
    return new Md5();
  }
}

export default TestMd5