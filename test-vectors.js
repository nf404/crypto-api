(function (root) {
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
        }
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = TestVectors;
    } else {
        return TestVectors;
    }
})(this);