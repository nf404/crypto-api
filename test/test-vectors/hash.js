/*global module */
(function () {
  'use strict';

  var TestVectors = {
    // The MD2 test suite
    // https://tools.ietf.org/html/rfc1319
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
      "md2('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: '4e8ddff3650292ab5a4108c3aa47940b'
      },
      "md2('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'da33def2a42df13975352846c30338cd'
      },
      "md2('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: 'd5976f79d83d3a0dc9806c3c66f3efd8'
      }
    },
    // The MD4 test suite
    // https://tools.ietf.org/html/rfc1320
    // https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/md4/Md4-128.unverified.test-vectors
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
      "md4('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'd79e1c308aa5bbcdeea8ed63df412da9'
      },
      "md4('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: '4691a9ec81b1a6bd1ab8557240b245c5'
      },
      "md4('A..Za..z0..')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: '043f8582f241db351ce627e153e7f0e4'
      },
      "md4('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: 'e33b4ddc9c38f2199c3e7b164fcc0536'
      }
    },
    // The MD5 test suite
    // https://tools.ietf.org/html/rfc1321
    // https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/md5/Md5-128.unverified.test-vectors
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
      "md5('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'c3fcd3d76192e4007dfb496cca67e13b'
      },
      "md5('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: '8215ef0796a20bcaaae116d3876c664a'
      },
      "md5('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'd174ab98d277d9f5a5611c2c9f419d9f'
      },
      "md5('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '57edf4a22be3c955ac49da2e2107b67a'
      }
    },
    // The SHA0 test suite
    // https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/sha/Sha-0-160.test-vectors
    'sha0': {
      "sha0('')": {
        message: '',
        hash: 'f96cea198ad1dd5617ac084a3d92c6107708c0ef'
      },
      "sha0('a')": {
        message: 'a',
        hash: '37f297772fae4cb1ba39b6cf9cf0381180bd62f2'
      },
      "sha0('abc')": {
        message: 'abc',
        hash: '0164b8a914cd2a5e74c4f7ff082c4d97f1edf880'
      },
      "sha0('message digest')": {
        message: 'message digest',
        hash: 'c1b0f222d150ebb9aa36a40cafdc8bcbed830b14'
      },
      "sha0('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'b40ce07a430cfd3c033039b9fe9afec95dc1bdcd'
      },
      "sha0('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: 'd2516ee1acfa5baf33dfc1c471e438449ef134c8'
      },
      "sha0('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: '79e966f7a3a990df33e40e3d7f8f18d2caebadfa'
      },
      "sha0('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '4aa29d14d171522ece47bee8957e35a41f3e9cff'
      }
    },
    // The SHA1 test suite
    // http://tools.ietf.org/html/rfc3174
    // http://csrc.nist.gov/publications/fips/fips180-2/fips180-2.pdf
    // https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/sha/Sha-1-160.test-vectors
    'sha1': {
      "sha1('')": {
        message: '',
        hash: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
      },
      "sha1('a')": {
        message: 'a',
        hash: '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8'
      },
      "sha1('abc')": {
        message: 'abc',
        hash: 'a9993e364706816aba3e25717850c26c9cd0d89d'
      },
      "sha1('message digest')": {
        message: 'message digest',
        hash: 'c12252ceda8be8994d5fa0290a47231c1d16aae3'
      },
      "sha1('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: '32d10c7b8cf96570ca04ce37f2a19d84240d3a89'
      },
      "sha1('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: '84983e441c3bd26ebaae4aa1f95129e5e54670f1'
      },
      "sha1('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: '761c457bf73b14d27e9e9265c46f4b4dda11f940'
      },
      "sha1('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '50abf5706a150990a08b2c5ea40fa0e585554732'
      },
      "sha1('01234567' x 80)": {
        message: new Array(81).join('01234567'),
        hash: 'dea356a2cddd90c7a7ecedc5ebb563934f460452'
      }
    },
    // The SHA224 test suite
    // http://tools.ietf.org/html/rfc4634
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
      "sha224('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')": {
        message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
        hash: 'c97ca9a559850ce97a04a96def6d99a9e0e0e2ab14e6b8df265fc0b3'
      },
      "sha224('01234567' x 80)": {
        message: new Array(81).join('01234567'),
        hash: '567f69f168cd7844e65259ce658fe7aadfa25216e68eca0eb7ab8262'
      }
    },
    // The SHA256 test suite
    // http://tools.ietf.org/html/rfc4634
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
      "sha256('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')": {
        message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
        hash: 'cf5b16a778af8380036ce59e7b0492370b249b11e8f07a51afac45037afee9d1'
      },
      "sha256('01234567' x 80)": {
        message: new Array(81).join('01234567'),
        hash: '594847328451bdfa85056225462cc1d867d877fb388df0ce35f25ab5562bfbb5'
      }
    }
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TestVectors
  } else {
    window.TestVectors = TestVectors;
    return TestVectors
  }
})();
