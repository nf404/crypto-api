/*global describe, it */
'use strict';

import TestHasher from "../TestHasher";
import Md2 from "../../src/hasher/md2";

/**
 * The MD2 test suite
 * @link https://tools.ietf.org/html/rfc1319
 */
class Md2Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Md2} */
    describe('Hash md2 tests', function () {
      it("md2('')", function () {
        t.testHash({
          message: '',
          hash: '8350e5a3e24c153df2275c9f80692773'
        });
      });

      it("md2('a')", function () {
        t.testHash({
          message: 'a',
          hash: '32ec01ec4a6dac72c0ab96fb34c0b5d1'
        });
      });

      it("md2('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: 'da853b0d3f88d99b30283a69e6ded6bb'
        });
      });

      it("md2('message digest')", function () {
        t.testHash({
          message: 'message digest',
          hash: 'ab4f496bfb2a530b219ff33031fe06b0'
        });
      });

      it("md2('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: '4e8ddff3650292ab5a4108c3aa47940b'
        });
      });

      it("md2('A..Za..z0..9')", function () {
        t.testHash({
          message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          hash: 'da33def2a42df13975352846c30338cd'
        });
      });

      it("md2('1234567890' x 8)", function () {
        t.testHash({
          message: new Array(9).join('1234567890'),
          hash: 'd5976f79d83d3a0dc9806c3c66f3efd8'
        });
      });

      /**
       * @test {Md2#setState}
       * @test {Md2#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Md2();
  }
}

export default Md2Test;