/*global describe, it */
'use strict';

import TestHmac from "../TestHmac";
import Sha512 from "../../src/hasher/sha512";

// The HMAC-SHA512 test suite
// https://tools.ietf.org/html/rfc4231

class HmacSha512Test extends TestHmac {
  test() {
    let t = this;
    /**
     * @test {Hmac}
     * @test {Sha512}
     */
    describe('Hmac sha512 tests', function () {
      it("hmac-sha512('Hi There', 0x0b x 20)", function () {
        t.testHmac({
          message: 'Hi There',
          key: new Array(21).join("\x0b"),
          hash: '87aa7cdea5ef619d4ff0b4241a1d6cb02379f4e2ce4ec2787ad0b30545e17cdedaa833b7d6b8a702038b274eaea3f4e4be9d914eeb61f1702e696c203a126854'
        });
      });

      it("hmac-sha512('what do ya want for nothing?', 'Jefe')", function () {
        t.testHmac({
          message: 'what do ya want for nothing?',
          key: 'Jefe',
          hash: '164b7a7bfcf819e2e395fbe73b56e0a387bd64222e831fd610270cd7ea2505549758bf75c05a994a6d034f65f8f0e6fdcaeab1a34d4a6b4b636e070a38bce737'
        });
      });

      it("hmac-sha512(0xdd x 50, 0xaa x 20)", function () {
        t.testHmac({
          message: new Array(51).join("\xdd"),
          key: new Array(21).join("\xaa"),
          hash: 'fa73b0089d56a284efb0f0756c890be9b1b5dbdd8ee81a3655f83e33b2279d39bf3e848279a722c806b485a47e67c807b946a337bee8942674278859e13292fb'
        });
      });

      it("hmac-sha512(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)", function () {
        t.testHmac({
          message: new Array(51).join("\xcd"),
          key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
          hash: 'b0ba465637458c6990e5a8c5f61d4af7e576d97ff94b872de76f8050361ee3dba91ca5c11aa25eb4d679275cc5788063a5f19741120c4f2de2adebeb10a298dd'
        });
      });

      it("hmac-sha512('Test With Truncation', 0x0c x 20)", function () {
        t.testHmac({
          message: 'Test With Truncation',
          key: new Array(21).join("\x0c"),
          hash: '415fad6271580a531d4179bc891d87a650188707922a4fbb36663a1eb16da008711c5b50ddd0fc235084eb9d3364a1454fb2ef67cd1d29fe6773068ea266e96b'
        });
      });

      it("hmac-sha512('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 131)", function () {
        t.testHmac({
          message: 'Test Using Larger Than Block-Size Key - Hash Key First',
          key: new Array(132).join("\xaa"),
          hash: '80b24263c7c1a3ebb71493c1dd7be8b49b46d1f41b4aeec1121b013783f8f3526b56d037e05f2598bd0fd2215d6a1e5295e64f73f63f0aec8b915a985d786598'
        });
      });

      it("hmac-sha512('This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.', 0xaa x 131)", function () {
        t.testHmac({
          message: 'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.',
          key: new Array(132).join("\xaa"),
          hash: 'e37b6a775dc87dbaa4dfa9f96e5e3ffddebd71f8867289865df5a32d20cdc944b6022cac3c4982b10d5eeb55c3e4de15134676fb6de0446065c97440fa8c6a58'
        });
      });
    });
  }

  getInstance(options) {
    return new Sha512();
  }
}

export default HmacSha512Test;