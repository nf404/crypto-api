/*global describe, it */
'use strict';
import Sha0 from "../../src/hasher/sha0";
import TestHasher from "../TestHasher";

// The SHA0 test suite
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/sha/Sha-0-160.test-vectors

class Sha0Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Sha0} */
    describe('Hash sha0 tests', function () {
      it("sha0('')", function () {
        t.testHash({
          message: '',
          hash: 'f96cea198ad1dd5617ac084a3d92c6107708c0ef'
        });
      });

      it("sha0('a')", function () {
        t.testHash({
          message: 'a',
          hash: '37f297772fae4cb1ba39b6cf9cf0381180bd62f2'
        });
      });

      it("sha0('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: '0164b8a914cd2a5e74c4f7ff082c4d97f1edf880'
        });
      });

      it("sha0('message digest')", function () {
        t.testHash({
          message: 'message digest',
          hash: 'c1b0f222d150ebb9aa36a40cafdc8bcbed830b14'
        });
      });

      it("sha0('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: 'b40ce07a430cfd3c033039b9fe9afec95dc1bdcd'
        });
      });

      it("sha0('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
        t.testHash({
          message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
          hash: 'd2516ee1acfa5baf33dfc1c471e438449ef134c8'
        });
      });

      it("sha0('A..Za..z0..9')", function () {
        t.testHash({
          message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          hash: '79e966f7a3a990df33e40e3d7f8f18d2caebadfa'
        });
      });

      it("sha0('1234567890' x 8)", function () {
        t.testHash({
          message: new Array(9).join('1234567890'),
          hash: '4aa29d14d171522ece47bee8957e35a41f3e9cff'
        });
      });

      /**
       * @test {Sha0#setState}
       * @test {Sha0#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Sha0();
  }
}

export default Sha0Test;