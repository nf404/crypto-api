/*global describe, it */
'use strict';
import TestHasher from "../TestHasher";
import Ripemd from "../../src/hasher/ripemd";

// The RIPEMD128 test suite
// http://homes.esat.kuleuven.be/~bosselae/ripemd160.html

class Ripemd128Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Ripemd} */
    describe('Hash ripemd128 tests', function () {
      it("ripemd128('')", function () {
        t.testHash({
          message: '',
          hash: 'cdf26213a150dc3ecb610f18f6b38b46'
        });
      });

      it("ripemd128('a')", function () {
        t.testHash({
          message: 'a',
          hash: '86be7afa339d0fc7cfc785e72f578d33'
        });
      });

      it("ripemd128('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: 'c14a12199c66e4ba84636b0f69144c77'
        });
      });

      it("ripemd128('message digest')", function () {
        t.testHash({
          message: 'message digest',
          hash: '9e327b3d6e523062afc1132d7df9d1b8'
        });
      });

      it("ripemd128('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: 'fd2aa607f71dc8f510714922b371834e'
        });
      });

      it("ripemd128('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
        t.testHash({
          message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
          hash: 'a1aa0689d0fafa2ddc22e88b49133a06'
        });
      });

      it("ripemd128('A..Za..z0..9')", function () {
        t.testHash({
          message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          hash: 'd1e959eb179c911faea4624c60c5c702'
        });
      });

      it("ripemd128('1234567890' x 8)", function () {
        t.testHash({
          message: new Array(9).join('1234567890'),
          hash: '3f45ef194732c2dbb2c4a2c769795fa3'
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
    return new Ripemd(options || {length: 128});
  }
}

export default Ripemd128Test;