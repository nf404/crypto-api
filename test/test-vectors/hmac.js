/*global module */
(function () {
  'use strict';

  var TestVectorsHmac = {

    // The HMAC-HAS160 test suite
    // https://files.randombit.net/misc/has160.pdf
    'has160': {
      "hmac-has160('Hi There', 0x0b x 20)": {
        message: 'Hi There',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0b),
        hash: 'f5b44115a53f716b6f488de1098ee7c251418623'
      },
      "hmac-has160('what do ya want for nothing?', 'Jefe')": {
        message: 'what do ya want for nothing?',
        key: 'Jefe',
        hash: 'a74547c1ef0aa147c7428ab7e71664549be2a412'
      },
      'hmac-has160(0xdd x 50, 0xaa x 20)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xdd),
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0xaa),
        hash: 'e4c91bc71782fa44a56be1a34aae167e8ffc9734'
      },
      'hmac-has160(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xcd),
        key: [
          0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
          0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10,
          0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19
        ],
        hash: '14d1055da875222053bf1180bbef8892eba3ac30'
      },
      "hmac-has160('Test With Truncation', 0x0c x 20)": {
        message: 'Test With Truncation',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0c),
        hash: '124131a293f1fdf3d6b11e2b7f7a1f5b12e42d58'
      },
      "hmac-has160('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 80)": {
        message: 'Test Using Larger Than Block-Size Key - Hash Key First',
        key: Array.apply(0, new Array(80)).map(Number.prototype.valueOf, 0xaa),
        hash: '63750d67af40e3fde33526545d300972a1527053'
      },
      "hmac-has160('Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data', 0xaa x 80)": {
        message: 'Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data',
        key: Array.apply(0, new Array(80)).map(Number.prototype.valueOf, 0xaa),
        hash: '1bdb821e399e208352c64f0655f6601e2a8a087c'
      }
    },
    // The HMAC-SHA1 test suite
    // https://tools.ietf.org/html/rfc2202
    'sha1': {
      "hmac-sha1('Hi There', 0x0b x 20)": {
        message: 'Hi There',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0b),
        hash: 'b617318655057264e28bc0b6fb378c8ef146be00'
      },
      "hmac-sha1('what do ya want for nothing?', 'Jefe')": {
        message: 'what do ya want for nothing?',
        key: 'Jefe',
        hash: 'effcdf6ae5eb2fa2d27416d5f184df9c259a7c79'
      },
      'hmac-sha1(0xdd x 50, 0xaa x 20)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xdd),
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0xaa),
        hash: '125d7342b9ac11cd91a39af48aa17b4f63f175d3'
      },
      'hmac-sha1(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xcd),
        key: [
          0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
          0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10,
          0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19
        ],
        hash: '4c9007f4026250c6bc8414f9bf50c86c2d7235da'
      },
      "hmac-sha1('Test With Truncation', 0x0c x 20)": {
        message: 'Test With Truncation',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0c),
        hash: '4c1a03424b55e07fe7f27be1d58bb9324a9a5a04'
      },
      "hmac-sha1('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 80)": {
        message: 'Test Using Larger Than Block-Size Key - Hash Key First',
        key: Array.apply(0, new Array(80)).map(Number.prototype.valueOf, 0xaa),
        hash: 'aa4ae5e15272d00e95705637ce8a3b55ed402112'
      },
      "hmac-sha1('Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data', 0xaa x 80)": {
        message: 'Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data',
        key: Array.apply(0, new Array(80)).map(Number.prototype.valueOf, 0xaa),
        hash: 'e8e99d0f45237d786d6bbaa7965c7808bbff1a91'
      }
    },
    // The HMAC-SHA224 test suite
    // https://tools.ietf.org/html/rfc4231
    'sha224': {
      "hmac-sha224('Hi There', 0x0b x 20)": {
        message: 'Hi There',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0b),
        hash: '896fb1128abbdf196832107cd49df33f47b4b1169912ba4f53684b22'
      },
      "hmac-sha224('what do ya want for nothing?', 'Jefe')": {
        message: 'what do ya want for nothing?',
        key: 'Jefe',
        hash: 'a30e01098bc6dbbf45690f3a7e9e6d0f8bbea2a39e6148008fd05e44'
      },
      'hmac-sha224(0xdd x 50, 0xaa x 20)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xdd),
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0xaa),
        hash: '7fb3cb3588c6c1f6ffa9694d7d6ad2649365b0c1f65d69d1ec8333ea'
      },
      'hmac-sha224(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xcd),
        key: [
          0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
          0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10,
          0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19
        ],
        hash: '6c11506874013cac6a2abc1bb382627cec6a90d86efc012de7afec5a'
      },
      "hmac-sha224('Test With Truncation', 0x0c x 20)": {
        message: 'Test With Truncation',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0c),
        hash: '0e2aea68a90c8d37c988bcdb9fca6fa8099cd857c7ec4a1815cac54c'
      },
      "hmac-sha224('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 131)": {
        message: 'Test Using Larger Than Block-Size Key - Hash Key First',
        key: Array.apply(0, new Array(131)).map(Number.prototype.valueOf, 0xaa),
        hash: '95e9a0db962095adaebe9b2d6f0dbce2d499f112f2d2b7273fa6870e'
      },
      "hmac-sha224('This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.', 0xaa x 131)": {
        message: 'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.',
        key: Array.apply(0, new Array(131)).map(Number.prototype.valueOf, 0xaa),
        hash: '3a854166ac5d9f023f54d517d0b39dbd946770db9c2b95c9f6f565d1'
      }
    },
    // The HMAC-SHA256 test suite
    // https://tools.ietf.org/html/rfc4231
    'sha256': {
      "hmac-sha256('Hi There', 0x0b x 20)": {
        message: 'Hi There',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0b),
        hash: 'b0344c61d8db38535ca8afceaf0bf12b881dc200c9833da726e9376c2e32cff7'
      },
      "hmac-sha256('what do ya want for nothing?', 'Jefe')": {
        message: 'what do ya want for nothing?',
        key: 'Jefe',
        hash: '5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843'
      },
      'hmac-sha256(0xdd x 50, 0xaa x 20)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xdd),
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0xaa),
        hash: '773ea91e36800e46854db8ebd09181a72959098b3ef8c122d9635514ced565fe'
      },
      'hmac-sha256(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xcd),
        key: [
          0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
          0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10,
          0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19
        ],
        hash: '82558a389a443c0ea4cc819899f2083a85f0faa3e578f8077a2e3ff46729665b'
      },
      "hmac-sha256('Test With Truncation', 0x0c x 20)": {
        message: 'Test With Truncation',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0c),
        hash: 'a3b6167473100ee06e0c796c2955552bfa6f7c0a6a8aef8b93f860aab0cd20c5'
      },
      "hmac-sha256('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 131)": {
        message: 'Test Using Larger Than Block-Size Key - Hash Key First',
        key: Array.apply(0, new Array(131)).map(Number.prototype.valueOf, 0xaa),
        hash: '60e431591ee0b67f0d8a26aacbf5b77f8e0bc6213728c5140546040f0ee37f54'
      },
      "hmac-sha256('This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.', 0xaa x 131)": {
        message: 'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.',
        key: Array.apply(0, new Array(131)).map(Number.prototype.valueOf, 0xaa),
        hash: '9b09ffa71b942fcb27635fbcd5b0e944bfdc63644f0713938a7f51535c3a35e2'
      }
    },
    // The HMAC-SHA384 test suite
    // https://tools.ietf.org/html/rfc4231
    'sha384': {
      "hmac-sha384('Hi There', 0x0b x 20)": {
        message: 'Hi There',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0b),
        hash: 'afd03944d84895626b0825f4ab46907f15f9dadbe4101ec682aa034c7cebc59cfaea9ea9076ede7f4af152e8b2fa9cb6'
      },
      "hmac-sha384('what do ya want for nothing?', 'Jefe')": {
        message: 'what do ya want for nothing?',
        key: 'Jefe',
        hash: 'af45d2e376484031617f78d2b58a6b1b9c7ef464f5a01b47e42ec3736322445e8e2240ca5e69e2c78b3239ecfab21649'
      },
      'hmac-sha384(0xdd x 50, 0xaa x 20)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xdd),
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0xaa),
        hash: '88062608d3e6ad8a0aa2ace014c8a86f0aa635d947ac9febe83ef4e55966144b2a5ab39dc13814b94e3ab6e101a34f27'
      },
      'hmac-sha384(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xcd),
        key: [
          0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
          0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10,
          0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19
        ],
        hash: '3e8a69b7783c25851933ab6290af6ca77a9981480850009cc5577c6e1f573b4e6801dd23c4a7d679ccf8a386c674cffb'
      },
      "hmac-sha384('Test With Truncation', 0x0c x 20)": {
        message: 'Test With Truncation',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0c),
        hash: '3abf34c3503b2a23a46efc619baef897f4c8e42c934ce55ccbae9740fcbc1af4ca62269e2a37cd88ba926341efe4aeea'
      },
      "hmac-sha384('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 131)": {
        message: 'Test Using Larger Than Block-Size Key - Hash Key First',
        key: Array.apply(0, new Array(131)).map(Number.prototype.valueOf, 0xaa),
        hash: '4ece084485813e9088d2c63a041bc5b44f9ef1012a2b588f3cd11f05033ac4c60c2ef6ab4030fe8296248df163f44952'
      },
      "hmac-sha384('This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.', 0xaa x 131)": {
        message: 'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.',
        key: Array.apply(0, new Array(131)).map(Number.prototype.valueOf, 0xaa),
        hash: '6617178e941f020d351e2f254e8fd32c602420feb0b8fb9adccebb82461e99c5a678cc31e799176d3860e6110c46523e'
      }
    },
    // The HMAC-SHA384 test suite
    // https://tools.ietf.org/html/rfc4231
    'sha512': {
      "hmac-sha512('Hi There', 0x0b x 20)": {
        message: 'Hi There',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0b),
        hash: '87aa7cdea5ef619d4ff0b4241a1d6cb02379f4e2ce4ec2787ad0b30545e17cdedaa833b7d6b8a702038b274eaea3f4e4be9d914eeb61f1702e696c203a126854'
      },
      "hmac-sha512('what do ya want for nothing?', 'Jefe')": {
        message: 'what do ya want for nothing?',
        key: 'Jefe',
        hash: '164b7a7bfcf819e2e395fbe73b56e0a387bd64222e831fd610270cd7ea2505549758bf75c05a994a6d034f65f8f0e6fdcaeab1a34d4a6b4b636e070a38bce737'
      },
      'hmac-sha512(0xdd x 50, 0xaa x 20)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xdd),
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0xaa),
        hash: 'fa73b0089d56a284efb0f0756c890be9b1b5dbdd8ee81a3655f83e33b2279d39bf3e848279a722c806b485a47e67c807b946a337bee8942674278859e13292fb'
      },
      'hmac-sha512(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)': {
        message: Array.apply(0, new Array(50))
          .map(Number.prototype.valueOf, 0xcd),
        key: [
          0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08,
          0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10,
          0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19
        ],
        hash: 'b0ba465637458c6990e5a8c5f61d4af7e576d97ff94b872de76f8050361ee3dba91ca5c11aa25eb4d679275cc5788063a5f19741120c4f2de2adebeb10a298dd'
      },
      "hmac-sha512('Test With Truncation', 0x0c x 20)": {
        message: 'Test With Truncation',
        key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0x0c),
        hash: '415fad6271580a531d4179bc891d87a650188707922a4fbb36663a1eb16da008711c5b50ddd0fc235084eb9d3364a1454fb2ef67cd1d29fe6773068ea266e96b'
      },
      "hmac-sha512('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 131)": {
        message: 'Test Using Larger Than Block-Size Key - Hash Key First',
        key: Array.apply(0, new Array(131)).map(Number.prototype.valueOf, 0xaa),
        hash: '80b24263c7c1a3ebb71493c1dd7be8b49b46d1f41b4aeec1121b013783f8f3526b56d037e05f2598bd0fd2215d6a1e5295e64f73f63f0aec8b915a985d786598'
      },
      "hmac-sha512('This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.', 0xaa x 131)": {
        message: 'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.',
        key: Array.apply(0, new Array(131)).map(Number.prototype.valueOf, 0xaa),
        hash: 'e37b6a775dc87dbaa4dfa9f96e5e3ffddebd71f8867289865df5a32d20cdc944b6022cac3c4982b10d5eeb55c3e4de15134676fb6de0446065c97440fa8c6a58'
      }
    }
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TestVectorsHmac
  } else {
    window.TestVectorsHmac = TestVectorsHmac;
    return TestVectorsHmac
  }
})();
