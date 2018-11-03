/*global describe, it */
'use strict';
import TestHasher from "../TestHasher";
import Sha256 from "../../src/hasher/sha256";

// The SHA256 test suite
// http://tools.ietf.org/html/rfc4634

class Sha256Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Sha256} */
    describe('Hash sha256 tests', function () {
      it("sha256('')", function () {
        t.testHash({
          message: '',
          hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
        });
      });

      it("sha256('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'
        });
      });

      it("sha256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
        t.testHash({
          message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
          hash: '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1'
        });
      });

      it("sha256('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')", function () {
        t.testHash({
          message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
          hash: 'cf5b16a778af8380036ce59e7b0492370b249b11e8f07a51afac45037afee9d1'
        });
      });

      it("sha256('01234567' x 80)", function () {
        t.testHash({
          message: new Array(81).join('01234567'),
          hash: '594847328451bdfa85056225462cc1d867d877fb388df0ce35f25ab5562bfbb5'
        });
      });

      /**
       * @test {Sha256#setState}
       * @test {Sha256#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Sha256(options);
  }
}

export default Sha256Test;