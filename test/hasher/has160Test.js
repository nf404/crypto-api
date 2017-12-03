/*global describe, it */
'use strict';

import TestHasher from "../TestHasher";
import Has160 from "../../src/hasher/has160";

/**
 * The HAS-160 test suite
 * @link https://files.randombit.net/misc/has160.pdf
 */
class Has160Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Has160} */
    describe('Hash has160 tests', function () {
      it("has160('')", function () {
        t.testHash({
          message: '',
          hash: '307964ef34151d37c8047adec7ab50f4ff89762d'
        });
      });

      it("has160('a')", function () {
        t.testHash({
          message: 'a',
          hash: '4872bcbc4cd0f0a9dc7c2f7045e5b43b6c830db8'
        });
      });

      it("has160('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: '975e810488cf2a3d49838478124afce4b1c78804'
        });
      });

      it("has160('message digest')", function () {
        t.testHash({
          message: 'message digest',
          hash: '2338dbc8638d31225f73086246ba529f96710bc6'
        });
      });

      it("has160('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: '596185c9ab6703d0d0dbb98702bc0f5729cd1d3c'
        });
      });

      it("has160('A..Za..z0..9')", function () {
        t.testHash({
          message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          hash: 'cb5d7efbca2f02e0fb7167cabb123af5795764e5'
        });
      });

      it("has160('1234567890' x 8)", function () {
        t.testHash({
          message: new Array(9).join('1234567890'),
          hash: '07f05c8c0773c55ca3a5a695ce6aca4c438911b5'
        });
      });

      /**
       * @test {Has160#setState}
       * @test {Has160#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  /**
   * @param {Object} [options]
   * @returns {Hasher}
   */
  getInstance(options) {
    return new Has160(options || {});
  }
}

export default Has160Test;