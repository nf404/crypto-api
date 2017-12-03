/*global describe, it */
'use strict';
import TestHasher from "../TestHasher";
import Ripemd from "../../src/hasher/ripemd";

// The RIPEMD160 test suite
// http://homes.esat.kuleuven.be/~bosselae/ripemd160.html

class Ripemd160Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Ripemd} */
    describe('Hash ripemd160 tests', function () {
      it("ripemd160('')", function () {
        t.testHash({
          message: '',
          hash: '9c1185a5c5e9fc54612808977ee8f548b2258d31'
        });
      });

      it("ripemd160('a')", function () {
        t.testHash({
          message: 'a',
          hash: '0bdc9d2d256b3ee9daae347be6f4dc835a467ffe'
        });
      });

      it("ripemd160('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: '8eb208f7e05d987a9b044a8e98c6b087f15a0bfc'
        });
      });

      it("ripemd160('message digest')", function () {
        t.testHash({
          message: 'message digest',
          hash: '5d0689ef49d2fae572b881b123a85ffa21595f36'
        });
      });

      it("ripemd160('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: 'f71c27109c692c1b56bbdceb5b9d2865b3708dbc'
        });
      });

      it("ripemd160('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
        t.testHash({
          message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
          hash: '12a053384a9c0c88e405a06c27dcf49ada62eb2b'
        });
      });

      it("ripemd160('A..Za..z0..9')", function () {
        t.testHash({
          message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          hash: 'b0e20b6e3116640286ed3a87a5713079b21f5189'
        });
      });

      it("ripemd160('1234567890' x 8)", function () {
        t.testHash({
          message: new Array(9).join('1234567890'),
          hash: '9b752e45573d4b39f4dbd3323cab82bf63326bfb'
        });
      });

      /**
       * @test {Ripemd#setState}
       * @test {Ripemd#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Ripemd(options);
  }
}

export default Ripemd160Test;