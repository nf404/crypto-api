/*global describe, it */
'use strict';
import TestHasher from "../TestHasher";
import Md5 from "../../src/hasher/md5";

// The MD5 test suite
// https://tools.ietf.org/html/rfc1321
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/md5/Md5-128.unverified.test-vectors

class Md5Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Md5} */
    describe('Hash md5 tests', function () {
      it("md5('')", function () {
        t.testHash({
          message: '',
          hash: 'd41d8cd98f00b204e9800998ecf8427e'
        });
      });

      it("md5('a')", function () {
        t.testHash({
          message: 'a',
          hash: '0cc175b9c0f1b6a831c399e269772661'
        });
      });

      it("md5('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: '900150983cd24fb0d6963f7d28e17f72'
        });
      });

      it("md5('message digest')", function () {
        t.testHash({
          message: 'message digest',
          hash: 'f96b697d7cb7938d525a2f31aaf161d0'
        });
      });

      it("md5('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: 'c3fcd3d76192e4007dfb496cca67e13b'
        });
      });

      it("md5('A..Za..z0..9')", function () {
        t.testHash({
          message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          hash: 'd174ab98d277d9f5a5611c2c9f419d9f'
        });
      });

      it("md5('1234567890' x 8)", function () {
        t.testHash({
          message: new Array(9).join('1234567890'),
          hash: '57edf4a22be3c955ac49da2e2107b67a'
        });
      });

      /**
       * @test {Md5#setState}
       * @test {Md5#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Md5();
  }
}

export default Md5Test;