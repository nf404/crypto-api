/*global describe, it */
'use strict';

import TestHmac from "../TestHmac";
import Has160 from "../../src/hasher/has160";

// The HMAC-HAS160 test suite
// https://files.randombit.net/misc/has160.pdf

class HmacHas160Test extends TestHmac {
  test() {
    let t = this;
    /**
     * @test {Hmac}
     * @test {Has160}
     */
    describe('Hmac has160 tests', function () {
      it("hmac-has160('Hi There', 0x0b x 20)", function () {
        t.testHmac({
          message: 'Hi There',
          key: new Array(21).join("\x0b"),
          hash: 'f5b44115a53f716b6f488de1098ee7c251418623'
        });
      });

      it("hmac-has160('what do ya want for nothing?', 'Jefe')", function () {
        t.testHmac({
          message: 'what do ya want for nothing?',
          key: 'Jefe',
          hash: 'a74547c1ef0aa147c7428ab7e71664549be2a412'
        });
      });

      it("hmac-has160(0xdd x 50, 0xaa x 20)", function () {
        t.testHmac({
          message: new Array(51).join("\xdd"),
          key: new Array(21).join("\xaa"),
          hash: 'e4c91bc71782fa44a56be1a34aae167e8ffc9734'
        });
      });

      it("hmac-has160(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)", function () {
        t.testHmac({
          message: new Array(51).join("\xcd"),
          key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
          hash: '14d1055da875222053bf1180bbef8892eba3ac30'
        });
      });

      it("hmac-has160('Test With Truncation', 0x0c x 20)", function () {
        t.testHmac({
          message: 'Test With Truncation',
          key: new Array(21).join("\x0c"),
          hash: '124131a293f1fdf3d6b11e2b7f7a1f5b12e42d58'
        });
      });

      it("hmac-has160('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 80)", function () {
        t.testHmac({
          message: 'Test Using Larger Than Block-Size Key - Hash Key First',
          key: new Array(81).join("\xaa"),
          hash: '63750d67af40e3fde33526545d300972a1527053'
        });
      });

      it("hmac-has160('Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data', 0xaa x 80)", function () {
        t.testHmac({
          message: 'Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data',
          key: new Array(81).join("\xaa"),
          hash: '1bdb821e399e208352c64f0655f6601e2a8a087c'
        });
      });
    });
  }

  getInstance(options) {
    return new Has160();
  }
}

export default HmacHas160Test;