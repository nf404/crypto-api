/*global describe, it */
'use strict';

import Snefru from "../../src/hasher/snefru";
import TestHasher from "../TestHasher";

// The Snefru-2-128 test suite
// From Snefru version 2.0 package

class Snefru128_2Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Snefru} */
    describe('Hash snefru128/2 tests', function () {
      it("snefru128/2('')", function () {
        t.testHash({
          message: '',
          hash: 'b67224738c99d0ef185f2e971eb762ae'
        });
      });

      it("snefru128/2(0x0a)", function () {
        t.testHash({
          message: "\n",
          hash: '13af7619ab98d4b5f5e0a9e6b26b5452'
        });
      });

      it("snefru128/2('1' + 0x0a)", function () {
        t.testHash({
          message: "1\n",
          hash: '578c83f88fe1f6a8c119d2ba3a9256c2'
        });
      });

      it("snefru128/2('12' + 0x0a)", function () {
        t.testHash({
          message: "12\n",
          hash: '255468d4b4bd985b696a73136027fc80'
        });
      });

      it("snefru128/2('123' + 0x0a)", function () {
        t.testHash({
          message: "123\n",
          hash: 'f5339a529c4dafc534fe3f0d7a66baf7'
        });
      });

      it("snefru128/2('1234' + 0x0a)", function () {
        t.testHash({
          message: "1234\n",
          hash: '2645ff869a6c0ec65c49c20dd9050165'
        });
      });

      it("snefru128/2('12345' + 0x0a)", function () {
        t.testHash({
          message: "12345\n",
          hash: '387d29298ed52ece88e64f38fe4fdb11'
        });
      });

      it("snefru128/2('123456' + 0x0a)", function () {
        t.testHash({
          message: "123456\n",
          hash: 'f29f8915d23a0e02838cc2e275f5dfe7'
        });
      });

      it("snefru128/2('1234567' + 0x0a)", function () {
        t.testHash({
          message: "1234567\n",
          hash: '4fb0f76e9af16a2d61844b9ce833e18f'
        });
      });

      it("snefru128/2('12345678' + 0x0a)", function () {
        t.testHash({
          message: "12345678\n",
          hash: 'aacc56fc85910fefe81fc6976b061f4e'
        });
      });

      it("snefru128/2('123456789' + 0x0a)", function () {
        t.testHash({
          message: "123456789\n",
          hash: 'e699784944ed68a1c762ea1e90c77967'
        });
      });

      it("snefru128/2('The theory of quantum electrodynamics has now lasted for ....')", function () {
        t.testHash({
          message: "The theory of quantum electrodynamics has now lasted for\n" +
          "more than fifty years, and has been tested more and more\n" +
          "accurately over a wider and wider range of conditions.\n" +
          "At the present time I can proudly say that there is no\n" +
          "significant difference between experiment and theory!\n\n" +
          "Just to give you an idea of how the theory has been put\n" +
          "through the wringer, I'll give you some recent numbers:\n" +
          "experiments have Dirac's number at 1.00115965221 (with\n" +
          "an uncertainty of about five times as much). To give you\n" +
          "a feeling for the accuracy of these numbers, it comes\n" +
          "out something like this:  If you were to measure the\n" +
          "distance from Los Angeles to New York to this accuracy,\n" +
          "it would be exact to the thickness of a human hair.\n" +
          "That's how delicately quantum electrodynamics has, in the\n" +
          "past fifty years, been checked -- both theoretically and\n" +
          "experimentally.\n",
          hash: 'ef84019eff25cfb6142452df77180806'
        });
      });

      /**
       * @test {Snefru#setState}
       * @test {Snefru#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Snefru(options || {rounds: 2});
  }
}

export default Snefru128_2Test;