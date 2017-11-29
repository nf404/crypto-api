/*global describe, it */
'use strict';
import TestHasher from "../TestHasher";
import Md4 from "../../src/hasher/md4";

// The MD4 test suite
// https://tools.ietf.org/html/rfc1320
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/md4/Md4-128.unverified.test-vectors

class Md4Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Md4} */
    describe('Hash md4 tests', function () {
      it("md4('')", function () {
        t.testHash({
          message: '',
          hash: '31d6cfe0d16ae931b73c59d7e0c089c0'
        });
      });

      it("md4('a')", function () {
        t.testHash({
          message: 'a',
          hash: 'bde52cb31de33e46245e05fbdbd6fb24'
        });
      });

      it("md4('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: 'a448017aaf21d8525fc10ae87aa6729d'
        });
      });

      it("md4('message digest')", function () {
        t.testHash({
          message: 'message digest',
          hash: 'd9130a8164549fe818874806e1c7014b'
        });
      });

      it("md4('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: 'd79e1c308aa5bbcdeea8ed63df412da9'
        });
      });

      it("md4('A..Za..z0..9')", function () {
        t.testHash({
          message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          hash: '043f8582f241db351ce627e153e7f0e4'
        });
      });

      it("md4('1234567890' x 8)", function () {
        t.testHash({
          message: new Array(9).join('1234567890'),
          hash: 'e33b4ddc9c38f2199c3e7b164fcc0536'
        });
      });

      /**
       * @test {Md4#setState}
       * @test {Md4#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Md4();
  }
}

export default Md4Test;