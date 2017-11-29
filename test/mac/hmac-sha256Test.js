/*global describe, it */
'use strict';

import TestHmac from "../TestHmac";
import Sha256 from "../../src/hasher/sha256";

// The HMAC-SHA256 test suite
// https://tools.ietf.org/html/rfc4231

class HmacSha256Test extends TestHmac {
  test() {
    let t = this;
    /**
     * @test {Hmac}
     * @test {Sha256}
     */
    describe('Hmac sha256 tests', function () {
      it("hmac-sha256('Hi There', 0x0b x 20)", function () {
        t.testHmac({
          message: 'Hi There',
          key: new Array(21).join("\x0b"),
          hash: 'b0344c61d8db38535ca8afceaf0bf12b881dc200c9833da726e9376c2e32cff7'
        });
      });

      it("hmac-sha256('what do ya want for nothing?', 'Jefe')", function () {
        t.testHmac({
          message: 'what do ya want for nothing?',
          key: 'Jefe',
          hash: '5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843'
        });
      });

      it("hmac-sha256(0xdd x 50, 0xaa x 20)", function () {
        t.testHmac({
          message: new Array(51).join("\xdd"),
          key: new Array(21).join("\xaa"),
          hash: '773ea91e36800e46854db8ebd09181a72959098b3ef8c122d9635514ced565fe'
        });
      });

      it("hmac-sha256(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)", function () {
        t.testHmac({
          message: new Array(51).join("\xcd"),
          key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
          hash: '82558a389a443c0ea4cc819899f2083a85f0faa3e578f8077a2e3ff46729665b'
        });
      });

      it("hmac-sha256('Test With Truncation', 0x0c x 20)", function () {
        t.testHmac({
          message: 'Test With Truncation',
          key: new Array(21).join("\x0c"),
          hash: 'a3b6167473100ee06e0c796c2955552bfa6f7c0a6a8aef8b93f860aab0cd20c5'
        });
      });

      it("hmac-sha256('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 131)", function () {
        t.testHmac({
          message: 'Test Using Larger Than Block-Size Key - Hash Key First',
          key: new Array(132).join("\xaa"),
          hash: '60e431591ee0b67f0d8a26aacbf5b77f8e0bc6213728c5140546040f0ee37f54'
        });
      });

      it("hmac-sha256('This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.', 0xaa x 131)", function () {
        t.testHmac({
          message: 'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.',
          key: new Array(132).join("\xaa"),
          hash: '9b09ffa71b942fcb27635fbcd5b0e944bfdc63644f0713938a7f51535c3a35e2'
        });
      });
    });
  }

  getInstance(options) {
    return new Sha256();
  }
}

export default HmacSha256Test;