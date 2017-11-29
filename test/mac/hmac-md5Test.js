/*global describe, it */
'use strict';

import TestHmac from "../TestHmac";
import Md5 from "../../src/hasher/md5";

// The HMAC-MD5 test suite
// https://tools.ietf.org/html/rfc2202

class HmacMd5Test extends TestHmac {
  test() {
    let t = this;
    /**
     * @test {Hmac}
     * @test {Md5}
     */
    describe('Hmac md5 tests', function () {
      it("hmac-md5('Hi There', 0x0b x 16)", function () {
        t.testHmac({
          message: 'Hi There',
          key: new Array(17).join("\x0b"),
          hash: '9294727a3638bb1c13f48ef8158bfc9d'
        });
      });

      it("hmac-md5('what do ya want for nothing?', 'Jefe')", function () {
        t.testHmac({
          message: 'what do ya want for nothing?',
          key: 'Jefe',
          hash: '750c783e6ab0b503eaa86e310a5db738'
        });
      });

      it("hmac-md5(0xdd x 50, 0xaa x 16)", function () {
        t.testHmac({
          message: new Array(51).join("\xdd"),
          key: new Array(17).join("\xaa"),
          hash: '56be34521d144c88dbb8c733f0e8b3f6'
        });
      });

      it("hmac-md5(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)", function () {
        t.testHmac({
          message: new Array(51).join("\xcd"),
          key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
          hash: '697eaf0aca3a3aea3a75164746ffaa79'
        });
      });

      it("hmac-md5('Test With Truncation', 0x0c x 16)", function () {
        t.testHmac({
          message: 'Test With Truncation',
          key: new Array(17).join("\x0c"),
          hash: '56461ef2342edc00f9bab995690efd4c'
        });
      });

      it("hmac-md5('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 80)", function () {
        t.testHmac({
          message: 'Test Using Larger Than Block-Size Key - Hash Key First',
          key: new Array(81).join("\xaa"),
          hash: '6b1ab7fe4bd7bf8f0b62e6ce61b9d0cd'
        });
      });

      it("hmac-md5('Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data', 0xaa x 80)", function () {
        t.testHmac({
          message: 'Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data',
          key: new Array(81).join("\xaa"),
          hash: '6f630fad67cda0ee1fb1f562db3aa53e'
        });
      });
    });
  }

  getInstance(options) {
    return new Md5();
  }
}

export default HmacMd5Test;