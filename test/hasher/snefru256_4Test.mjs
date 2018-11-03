/*global describe, it */
'use strict';

import Snefru from "../../src/hasher/snefru";
import TestHasher from "../TestHasher";

// The Snefru-256 test suite
// From Snefru version 2.0 package

class Snefru256_4Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Snefru} */
    describe('Hash snefru256/4 tests', function () {
      it("snefru256/4('')", function () {
        t.testHash({
          message: '',
          hash: '5148516ae7fc7e89ad8e0b0b8d76ac782498615818fb8eeb08cbab9f07c82a73'
        });
      });

      it("snefru256/4(0x0a)", function () {
        t.testHash({
          message: "\n",
          hash: '6c504351ce7f4b7a93adb29af9781ff92150f157fee18661eef511a30fc83ddf'
        });
      });

      it("snefru256/4('1' + 0x0a)", function () {
        t.testHash({
          message: "1\n",
          hash: '65d657f885ad8b4ab35999cc3ded8b827cf71fa42542475035778910d6c2e320'
        });
      });

      it("snefru256/4('12' + 0x0a)", function () {
        t.testHash({
          message: "12\n",
          hash: '7636f3d1af139cf958f46f9966221282a444732a7de59da5d3481c6bbd6e7092'
        });
      });

      it("snefru256/4('123' + 0x0a)", function () {
        t.testHash({
          message: "123\n",
          hash: 'cd3c71635b14c7c2c24be8644baab592b8ab5b9991ee5ee5b3cf7a7fc6426ad7'
        });
      });

      it("snefru256/4('1234' + 0x0a)", function () {
        t.testHash({
          message: "1234\n",
          hash: '9ba783a1290cb21efe196a023286ece549394c751ddd607e5d67c4dc549c62eb'
        });
      });

      it("snefru256/4('12345' + 0x0a)", function () {
        t.testHash({
          message: "12345\n",
          hash: 'c9680da8ef00d2f84459a8e9b50ada71c63cae6fdcb6f774f699878330a4a1f4'
        });
      });

      it("snefru256/4('123456' + 0x0a)", function () {
        t.testHash({
          message: "123456\n",
          hash: '7656d389f980bbe894152abec6dc5f16faf21c603b8f5098861acf3cc059467b'
        });
      });

      it("snefru256/4('1234567' + 0x0a)", function () {
        t.testHash({
          message: "1234567\n",
          hash: 'd96eb5998377bb1d74a02a2f00ac9a853175250e4796af3636609747372bba80'
        });
      });

      it("snefru256/4('12345678' + 0x0a)", function () {
        t.testHash({
          message: "12345678\n",
          hash: 'b7818f092118e98a140af09a6cca4e6f1eba88e752c20174653637c9d628f33f'
        });
      });

      it("snefru256/4('123456789' + 0x0a)", function () {
        t.testHash({
          message: "123456789\n",
          hash: 'c22422491187baaa9472540008dffd5b38f015579f3f239050969991fdc1a810'
        });
      });

      it("snefru256/4('The theory of quantum electrodynamics has now lasted for ....')", function () {
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
          hash: 'd4303702d63e71d5e4eacdef868770576563d8c0dec0d7d1cb7ad00f39b6296a'
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
    return new Snefru(options || {length: 256, rounds: 4});
  }
}

export default Snefru256_4Test;