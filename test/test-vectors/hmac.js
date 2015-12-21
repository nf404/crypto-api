(function () {
    'use strict';
    var TestVectorsHmac = {
        // The HMAC-MD5 test suite
        // https://tools.ietf.org/html/rfc2202
        'md5': {
            "hmac-md5('Hi There', 0x0b x 16)": {
                message: 'Hi There',
                key: Array.apply(0, new Array(16)).map(Number.prototype.valueOf, 0x0b),
                hash: '9294727a3638bb1c13f48ef8158bfc9d'
            },
            "hmac-md5('what do ya want for nothing?', 'Jefe')": {
                message: 'what do ya want for nothing?',
                key: 'Jefe',
                hash: '750c783e6ab0b503eaa86e310a5db738'
            },
            "hmac-md5(0xdd x 50, 0xaa x 16)": {
                message: Array.apply(0, new Array(50)).map(Number.prototype.valueOf, 0xdd),
                key: Array.apply(0, new Array(16)).map(Number.prototype.valueOf, 0xaa),
                hash: '56be34521d144c88dbb8c733f0e8b3f6'
            },
            "hmac-md5(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)": {
                message: Array.apply(0, new Array(50)).map(Number.prototype.valueOf, 0xcd),
                key: [0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0a,0x0b,0x0c,0x0d,0x0e,0x0f,
                    0x10,0x11,0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19],
                hash: '697eaf0aca3a3aea3a75164746ffaa79'
            },
            "hmac-md5('Test With Truncation', 0x0c x 16)": {
                message: 'Test With Truncation',
                key: Array.apply(0, new Array(16)).map(Number.prototype.valueOf, 0x0c),
                hash: '56461ef2342edc00f9bab995690efd4c'
            },
            "hmac-md5('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 80)": {
                message: 'Test Using Larger Than Block-Size Key - Hash Key First',
                key: Array.apply(0, new Array(80)).map(Number.prototype.valueOf, 0xaa),
                hash: '6b1ab7fe4bd7bf8f0b62e6ce61b9d0cd'
            },
            "hmac-md5('Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data', 0xaa x 80)": {
                message: 'Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data',
                key: Array.apply(0, new Array(80)).map(Number.prototype.valueOf, 0xaa),
                hash: '6f630fad67cda0ee1fb1f562db3aa53e'
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
            "hmac-sha1(0xdd x 50, 0xaa x 20)": {
                message: Array.apply(0, new Array(50)).map(Number.prototype.valueOf, 0xdd),
                key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0xaa),
                hash: '125d7342b9ac11cd91a39af48aa17b4f63f175d3'
            },
            "hmac-sha1(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)": {
                message: Array.apply(0, new Array(50)).map(Number.prototype.valueOf, 0xcd),
                key: [0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0a,0x0b,0x0c,0x0d,0x0e,0x0f,
                    0x10,0x11,0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19],
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
            "hmac-sha224(0xdd x 50, 0xaa x 20)": {
                message: Array.apply(0, new Array(50)).map(Number.prototype.valueOf, 0xdd),
                key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0xaa),
                hash: '7fb3cb3588c6c1f6ffa9694d7d6ad2649365b0c1f65d69d1ec8333ea'
            },
            "hmac-sha224(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)": {
                message: Array.apply(0, new Array(50)).map(Number.prototype.valueOf, 0xcd),
                key: [0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0a,0x0b,0x0c,0x0d,0x0e,0x0f,
                    0x10,0x11,0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19],
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
            "hmac-sha256(0xdd x 50, 0xaa x 20)": {
                message: Array.apply(0, new Array(50)).map(Number.prototype.valueOf, 0xdd),
                key: Array.apply(0, new Array(20)).map(Number.prototype.valueOf, 0xaa),
                hash: '773ea91e36800e46854db8ebd09181a72959098b3ef8c122d9635514ced565fe'
            },
            "hmac-sha256(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)": {
                message: Array.apply(0, new Array(50)).map(Number.prototype.valueOf, 0xcd),
                key: [0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0a,0x0b,0x0c,0x0d,0x0e,0x0f,
                    0x10,0x11,0x12,0x13,0x14,0x15,0x16,0x17,0x18,0x19],
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
        }
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = TestVectorsHmac;
    } else {
        window.TestVectorsHmac = TestVectorsHmac;
        return TestVectorsHmac;
    }
})();