(function () {
    'use strict';
    var TestVectors = {
        'md2': {
            "md2('')": {
                message: '',
                hash: '8350e5a3e24c153df2275c9f80692773'
            },
            "md2('a')": {
                message: 'a',
                hash: '32ec01ec4a6dac72c0ab96fb34c0b5d1'
            },
            "md2('abc')": {
                message: 'abc',
                hash: 'da853b0d3f88d99b30283a69e6ded6bb'
            },
            "md2('message digest')": {
                message: 'message digest',
                hash: 'ab4f496bfb2a530b219ff33031fe06b0'
            },
            "md2('abcdefghijklmnopqrstuvwxyz')":{
                message: 'abcdefghijklmnopqrstuvwxyz',
                hash: '4e8ddff3650292ab5a4108c3aa47940b'
            },
            "md2('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')": {
                message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                hash: 'da33def2a42df13975352846c30338cd'
            },
            "md2('12345678901234567890123456789012345678901234567890123456789012345678901234567890')": {
                message: '12345678901234567890123456789012345678901234567890123456789012345678901234567890',
                hash: 'd5976f79d83d3a0dc9806c3c66f3efd8'
            }
        },
        'md4': {
            "md4('')": {
                message: '',
                hash: '31d6cfe0d16ae931b73c59d7e0c089c0'
            },
            "md4('a')": {
                message: 'a',
                hash: 'bde52cb31de33e46245e05fbdbd6fb24'
            },
            "md4('abc')": {
                message: 'abc',
                hash: 'a448017aaf21d8525fc10ae87aa6729d'
            },
            "md4('message digest')": {
                message: 'message digest',
                hash: 'd9130a8164549fe818874806e1c7014b'
            },
            "md4('abcdefghijklmnopqrstuvwxyz')":{
                message: 'abcdefghijklmnopqrstuvwxyz',
                hash: 'd79e1c308aa5bbcdeea8ed63df412da9'
            },
            "md4('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')": {
                message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                hash: '043f8582f241db351ce627e153e7f0e4'
            },
            "md4('12345678901234567890123456789012345678901234567890123456789012345678901234567890')": {
                message: '12345678901234567890123456789012345678901234567890123456789012345678901234567890',
                hash: 'e33b4ddc9c38f2199c3e7b164fcc0536'
            }
        },
        'md5': {
            "md5('')": {
                message: '',
                hash: 'd41d8cd98f00b204e9800998ecf8427e'
            },
            "md5('a')": {
                message: 'a',
                hash: '0cc175b9c0f1b6a831c399e269772661'
            },
            "md5('abc')": {
                message: 'abc',
                hash: '900150983cd24fb0d6963f7d28e17f72'
            },
            "md5('message digest')": {
                message: 'message digest',
                hash: 'f96b697d7cb7938d525a2f31aaf161d0'
            },
            "md5('abcdefghijklmnopqrstuvwxyz')":{
                message: 'abcdefghijklmnopqrstuvwxyz',
                hash: 'c3fcd3d76192e4007dfb496cca67e13b'
            },
            "md5('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')": {
                message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                hash: 'd174ab98d277d9f5a5611c2c9f419d9f'
            },
            "md5('12345678901234567890123456789012345678901234567890123456789012345678901234567890')": {
                message: '12345678901234567890123456789012345678901234567890123456789012345678901234567890',
                hash: '57edf4a22be3c955ac49da2e2107b67a'
            }
        },
        'sha0': {
            "sha0('')": {
                message: '',
                hash: 'f96cea198ad1dd5617ac084a3d92c6107708c0ef'
            },
            "sha0('abc')": {
                message: 'abc',
                hash: '0164b8a914cd2a5e74c4f7ff082c4d97f1edf880'
            },
            "sha0('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
                message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
                hash: 'd2516ee1acfa5baf33dfc1c471e438449ef134c8'
            },
            "sha0('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')": {
                message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                hash: '79e966f7a3a990df33e40e3d7f8f18d2caebadfa'
            }
        },
        'sha1': {
            "sha1('')": {
                message: '',
                hash: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
            },
            "sha1('abc')": {
                message: 'abc',
                hash: 'a9993e364706816aba3e25717850c26c9cd0d89d'
            },
            "sha1('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
                message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
                hash: '84983e441c3bd26ebaae4aa1f95129e5e54670f1'
            },
            "sha1('0123456701234567012345670123456701234567012345670123456701234567..') [10 times]": {
                message: new Array(11).join('0123456701234567012345670123456701234567012345670123456701234567'),
                hash: 'dea356a2cddd90c7a7ecedc5ebb563934f460452'
            }
        },
        'sha224': {
            "sha224('')": {
                message: '',
                hash: 'd14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f'
            },
            "sha224('abc')": {
                message: 'abc',
                hash: '23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7'
            },
            "sha224('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
                message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
                hash: '75388b16512776cc5dba5da1fd890150b0c6455cb4f58b1952522525'
            },
            "sha224('0123456701234567012345670123456701234567012345670123456701234567..') [10 times]": {
                message: new Array(11).join('0123456701234567012345670123456701234567012345670123456701234567'),
                hash: '567f69f168cd7844e65259ce658fe7aadfa25216e68eca0eb7ab8262'
            }
        },
        'sha256': {
            "sha256('')": {
                message: '',
                hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
            },
            "sha256('abc')": {
                message: 'abc',
                hash: 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'
            },
            "sha256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
                message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
                hash: '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1'
            },
            "sha256('0123456701234567012345670123456701234567012345670123456701234567..') [10 times]": {
                message: new Array(11).join('0123456701234567012345670123456701234567012345670123456701234567'),
                hash: '594847328451bdfa85056225462cc1d867d877fb388df0ce35f25ab5562bfbb5'
            }
        }
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = TestVectors;
    } else {
        return TestVectors;
    }
})();