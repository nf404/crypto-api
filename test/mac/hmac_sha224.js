'use strict';

import TestHmac from "../TestHmac";
import Sha256 from "../../src/hasher/sha256";

// The HMAC-SHA224 test suite
// https://tools.ietf.org/html/rfc4231

class TestHmacSha224 extends TestHmac {
  constructor() {
    super();

    this.data = {
      "hmac-sha224('Hi There', 0x0b x 20)": {
        message: 'Hi There',
        key: new Array(21).join("\x0b"),
        hash: '896fb1128abbdf196832107cd49df33f47b4b1169912ba4f53684b22'
      },
      "hmac-sha224('what do ya want for nothing?', 'Jefe')": {
        message: 'what do ya want for nothing?',
        key: 'Jefe',
        hash: 'a30e01098bc6dbbf45690f3a7e9e6d0f8bbea2a39e6148008fd05e44'
      },
      'hmac-sha224(0xdd x 50, 0xaa x 20)': {
        message: new Array(51).join("\xdd"),
        key: new Array(21).join("\xaa"),
        hash: '7fb3cb3588c6c1f6ffa9694d7d6ad2649365b0c1f65d69d1ec8333ea'
      },
      'hmac-sha224(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)': {
        message: new Array(51).join("\xcd"),
        key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
        hash: '6c11506874013cac6a2abc1bb382627cec6a90d86efc012de7afec5a'
      },
      "hmac-sha224('Test With Truncation', 0x0c x 20)": {
        message: 'Test With Truncation',
        key: new Array(21).join("\x0c"),
        hash: '0e2aea68a90c8d37c988bcdb9fca6fa8099cd857c7ec4a1815cac54c'
      },
      "hmac-sha224('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 131)": {
        message: 'Test Using Larger Than Block-Size Key - Hash Key First',
        key: new Array(132).join("\xaa"),
        hash: '95e9a0db962095adaebe9b2d6f0dbce2d499f112f2d2b7273fa6870e'
      },
      "hmac-sha224('This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.', 0xaa x 131)": {
        message: 'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.',
        key: new Array(132).join("\xaa"),
        hash: '3a854166ac5d9f023f54d517d0b39dbd946770db9c2b95c9f6f565d1'
      }
    }
  }

  getInstance(options) {
    return new Sha256({length: 224});
  }
}

export default TestHmacSha224