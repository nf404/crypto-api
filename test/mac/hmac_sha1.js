'use strict';

import TestHmac from "../TestHmac";
import Sha1 from "../../src/hasher/sha1";

// The HMAC-SHA1 test suite
// https://tools.ietf.org/html/rfc2202

class TestHmacSha1 extends TestHmac {
  constructor() {
    super();

    this.data = {
      "hmac-sha1('Hi There', 0x0b x 20)": {
        message: 'Hi There',
        key: new Array(21).join("\x0b"),
        hash: 'b617318655057264e28bc0b6fb378c8ef146be00'
      },
      "hmac-sha1('what do ya want for nothing?', 'Jefe')": {
        message: 'what do ya want for nothing?',
        key: 'Jefe',
        hash: 'effcdf6ae5eb2fa2d27416d5f184df9c259a7c79'
      },
      'hmac-sha1(0xdd x 50, 0xaa x 20)': {
        message: new Array(51).join("\xdd"),
        key: new Array(21).join("\xaa"),
        hash: '125d7342b9ac11cd91a39af48aa17b4f63f175d3'
      },
      'hmac-sha1(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)': {
        message: new Array(51).join("\xcd"),
        key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
        hash: '4c9007f4026250c6bc8414f9bf50c86c2d7235da'
      },
      "hmac-sha1('Test With Truncation', 0x0c x 20)": {
        message: 'Test With Truncation',
        key: new Array(21).join("\x0c"),
        hash: '4c1a03424b55e07fe7f27be1d58bb9324a9a5a04'
      },
      "hmac-sha1('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 80)": {
        message: 'Test Using Larger Than Block-Size Key - Hash Key First',
        key: new Array(81).join("\xaa"),
        hash: 'aa4ae5e15272d00e95705637ce8a3b55ed402112'
      },
      "hmac-sha1('Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data', 0xaa x 80)": {
        message: 'Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data',
        key: new Array(81).join("\xaa"),
        hash: 'e8e99d0f45237d786d6bbaa7965c7808bbff1a91'
      }
    }
  }

  getInstance(options) {
    return new Sha1();
  }
}

export default TestHmacSha1