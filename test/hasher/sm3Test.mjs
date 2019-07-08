/*global describe, it */
'use strict';
import Sm3 from "../../src/hasher/sm3";
import TestHasher from "../TestHasher";

// The SM3 test suite
// https://tools.ietf.org/id/draft-oscca-cfrg-sm3-02.html#rfc.appendix.A.1
// https://github.com/adamws/oscca-sm3/blob/master/example/example.c
// https://dev.gnupg.org/source/libgcrypt/browse/master/tests/basic.c;ab57613f10ad57d2fec648017c18d7abb189863b$10642

class Sm3Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Sm3} */
    describe('Hash sm3 tests', function () {
      it("sm3('')", function () {
        t.testHash({
          message: '',
          hash: '1ab21d8355cfa17f8e61194831e81a8f22bec8c728fefb747ed035eb5082aa2b'
        });
      });

      it("sm3('a')", function () {
        t.testHash({
          message: 'a',
          hash: '623476ac18f65a2909e43c7fec61b49c7e764a91a18ccb82f1917a29c86c5e88'
        });
      });

      it("sm3('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: '66c7f0f462eeedd9d1f2d46bdc10e4e24167c4875cf2f7a2297da02b8f4ba8e0'
        });
      });

      it("sm3('abcd' x 16)", function () {
        t.testHash({
          message: new Array(17).join('abcd'),
          hash: 'debe9ff92275b8a138604889c18e5a4d6fdb70e5387e5765293dcba39c0c5732'
        });
      });

      it("sm3('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: 'b80fe97a4da24afc277564f66a359ef440462ad28dcc6d63adb24d5c20a61595'
        });
      });

      it("sm3('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
        t.testHash({
          message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
          hash: '639b6cc5e64d9e37a390b192df4fa1ea0720ab747ff692b9f38c4e66ad7b8c05'
        });
      });

      /**
       * @test {Sm3#setState}
       * @test {Sm3#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Sm3();
  }
}

export default Sm3Test;