/*global describe, it */
'use strict';

import Snefru from "../../src/hasher/snefru";
import TestHasher from "../TestHasher";

// The Snefru-8-128 test suite
// From Snefru version 2.5a package

class Snefru128_8Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Snefru} */
    describe('Hash snefru128/8 tests', function () {
      it("snefru128/8('')", function () {
        t.testHash({
          message: '',
          hash: '8617f366566a011837f4fb4ba5bedea2'
        });
      });

      it("snefru128/8(0x0a)", function () {
        t.testHash({
          message: "\n",
          hash: 'd9fcb3171c097fbba8c8f12aa0906bad'
        });
      });

      it("snefru128/8('1' + 0x0a)", function () {
        t.testHash({
          message: "1\n",
          hash: '44ec420ce99c1f62feb66c53c24ae453'
        });
      });

      it("snefru128/8('12' + 0x0a)", function () {
        t.testHash({
          message: "12\n",
          hash: '7182051aa852ef6fba4b6c9c9b79b317'
        });
      });

      it("snefru128/8('123' + 0x0a)", function () {
        t.testHash({
          message: "123\n",
          hash: 'bc3a50af82bf56d6a64732bc7b050a93'
        });
      });

      it("snefru128/8('1234' + 0x0a)", function () {
        t.testHash({
          message: "1234\n",
          hash: 'c5b8a04985a8eadfb4331a8988752b77'
        });
      });

      it("snefru128/8('12345' + 0x0a)", function () {
        t.testHash({
          message: "12345\n",
          hash: 'd559a2b62f6f44111324f85208723707'
        });
      });

      it("snefru128/8('123456' + 0x0a)", function () {
        t.testHash({
          message: "123456\n",
          hash: '6cfb5e8f1da02bd167b01e4816686c30'
        });
      });

      it("snefru128/8('1234567' + 0x0a)", function () {
        t.testHash({
          message: "1234567\n",
          hash: '29aa48325f275a8a7a01ba1543c54ba5'
        });
      });

      it("snefru128/8('12345678' + 0x0a)", function () {
        t.testHash({
          message: "12345678\n",
          hash: 'be862a6b68b7df887ebe00319cbc4a47'
        });
      });

      it("snefru128/8('123456789' + 0x0a)", function () {
        t.testHash({
          message: "123456789\n",
          hash: '6103721ccd8ad565d68e90b0f8906163'
        });
      });

      it("snefru128/8('The theory of quantum electrodynamics has now lasted for ....')", function () {
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
          hash: '56ab6bb21a7a07892d62cb03c41dde6d'
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
    return new Snefru(options);
  }
}

export default Snefru128_8Test;