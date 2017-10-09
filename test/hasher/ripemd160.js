'use strict';
import TestHasher from "../TestHasher";
import Ripemd from "../../src/hasher/ripemd";

// The RIPEMD160 test suite
// http://homes.esat.kuleuven.be/~bosselae/ripemd160.html

class TestRipemd160 extends TestHasher {
  constructor() {
    super();

    this.data = {
      "ripemd160('')": {
        message: '',
        hash: '9c1185a5c5e9fc54612808977ee8f548b2258d31'
      },
      "ripemd160('a')": {
        message: 'a',
        hash: '0bdc9d2d256b3ee9daae347be6f4dc835a467ffe'
      },
      "ripemd160('abc')": {
        message: 'abc',
        hash: '8eb208f7e05d987a9b044a8e98c6b087f15a0bfc'
      },
      "ripemd160('message digest')": {
        message: 'message digest',
        hash: '5d0689ef49d2fae572b881b123a85ffa21595f36'
      },
      "ripemd160('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'f71c27109c692c1b56bbdceb5b9d2865b3708dbc'
      },
      "ripemd160('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: '12a053384a9c0c88e405a06c27dcf49ada62eb2b'
      },
      "ripemd160('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'b0e20b6e3116640286ed3a87a5713079b21f5189'
      },
      "ripemd160('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '9b752e45573d4b39f4dbd3323cab82bf63326bfb'
      }
    }
  }

  getInstance(options) {
    return new Ripemd(options);
  }
}

export default TestRipemd160