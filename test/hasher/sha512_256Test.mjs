/*global describe, it */
'use strict';
import TestHasher from "../TestHasher";
import Sha512 from "../../src/hasher/sha512";

// The SHA512/256 test suite
// http://csrc.nist.gov/groups/ST/toolkit/documents/Examples/SHA512_256.pdf

class Sha512_256Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Sha512} */
    describe('Hash sha512/256 tests', function () {
      it("sha512/256('')", function () {
        t.testHash({
          message: '',
          hash: 'c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a'
        });
      });

      it("sha512/256('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: '53048e2681941ef99b2e29b76b4c7dabe4c2d0c634fc6d46e0e2f13107e7af23'
        });
      });

      it("sha512/256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
        t.testHash({
          message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
          hash: 'bde8e1f9f19bb9fd3406c90ec6bc47bd36d8ada9f11880dbc8a22a7078b6a461'
        });
      });

      it("sha512/256('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')", function () {
        t.testHash({
          message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
          hash: '3928e184fb8690f840da3988121d31be65cb9d3ef83ee6146feac861e19b563a'
        });
      });

      it("sha512/256('01234567' x 80)", function () {
        t.testHash({
          message: new Array(81).join('01234567'),
          hash: 'cf78e4ba935b4d9eb91052aeddf8e2d606c590f708573693ea94be826a666ee4'
        });
      });

      /**
       * @test {Sha512#setState}
       * @test {Sha512#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Sha512(options || {length: 256});
  }
}

export default Sha512_256Test;