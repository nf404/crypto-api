/*global describe, it */
'use strict';
import TestHasher from "../TestHasher";
import Sha256 from "../../src/hasher/sha256";

// The SHA224 test suite
// http://tools.ietf.org/html/rfc4634

class Sha224Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Sha256} */
    describe('Hash sha224 tests', function () {
      it("sha224('')", function () {
        t.testHash({
          message: '',
          hash: 'd14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f'
        });
      });

      it("sha224('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: '23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7'
        });
      });

      it("sha224('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
        t.testHash({
          message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
          hash: '75388b16512776cc5dba5da1fd890150b0c6455cb4f58b1952522525'
        });
      });

      it("sha224('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')", function () {
        t.testHash({
          message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
          hash: 'c97ca9a559850ce97a04a96def6d99a9e0e0e2ab14e6b8df265fc0b3'
        });
      });

      it("sha224('01234567' x 80)", function () {
        t.testHash({
          message: new Array(81).join('01234567'),
          hash: '567f69f168cd7844e65259ce658fe7aadfa25216e68eca0eb7ab8262'
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
    return new Sha256(options || {length: 224});
  }
}

export default Sha224Test;