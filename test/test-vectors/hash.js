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
    // The RIPEMD128 test suite
    // http://homes.esat.kuleuven.be/~bosselae/ripemd160.html
    'ripemd128': {
      "ripemd128('')": {
        message: '',
        hash: 'cdf26213a150dc3ecb610f18f6b38b46'
      },
      "ripemd128('a')": {
        message: 'a',
        hash: '86be7afa339d0fc7cfc785e72f578d33'
      },
      "ripemd128('abc')": {
        message: 'abc',
        hash: 'c14a12199c66e4ba84636b0f69144c77'
      },
      "ripemd128('message digest')": {
        message: 'message digest',
        hash: '9e327b3d6e523062afc1132d7df9d1b8'
      },
      "ripemd128('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'fd2aa607f71dc8f510714922b371834e'
      },
      "ripemd128('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: 'a1aa0689d0fafa2ddc22e88b49133a06'
      },
      "ripemd128('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'd1e959eb179c911faea4624c60c5c702'
      },
      "ripemd128('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '3f45ef194732c2dbb2c4a2c769795fa3'
      }
    },
    // The RIPEMD160 test suite
    // http://homes.esat.kuleuven.be/~bosselae/ripemd160.html
    'ripemd160': {
      "ripemd160('')": {
        message: '',
        hash: '9c1185a5c5e9fc54612808977ee8f548b2258d31'
      },
      "ripemd160('a')": {
        message: 'a',
        hash: '0bdc9d2d256b3ee9daae347be6f4dc835a467ffe'
      },
      "ripemd160('abc')": {
        message: 'abc',
        hash: '8eb208f7e05d987a9b044a8e98c6b087f15a0bfc'
      },
      "ripemd160('message digest')": {
        message: 'message digest',
        hash: '5d0689ef49d2fae572b881b123a85ffa21595f36'
      },
      "ripemd160('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'f71c27109c692c1b56bbdceb5b9d2865b3708dbc'
      },
      "ripemd160('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: '12a053384a9c0c88e405a06c27dcf49ada62eb2b'
      },
      "ripemd160('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'b0e20b6e3116640286ed3a87a5713079b21f5189'
      },
      "ripemd160('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '9b752e45573d4b39f4dbd3323cab82bf63326bfb'
      }
    },
    // The RIPEMD256 test suite
    // http://homes.esat.kuleuven.be/~bosselae/ripemd160.html
    'ripemd256': {
      "ripemd256('')": {
        message: '',
        hash: '02ba4c4e5f8ecd1877fc52d64d30e37a2d9774fb1e5d026380ae0168e3c5522d'
      },
      "ripemd256('a')": {
        message: 'a',
        hash: 'f9333e45d857f5d90a91bab70a1eba0cfb1be4b0783c9acfcd883a9134692925'
      },
      "ripemd256('abc')": {
        message: 'abc',
        hash: 'afbd6e228b9d8cbbcef5ca2d03e6dba10ac0bc7dcbe4680e1e42d2e975459b65'
      },
      "ripemd256('message digest')": {
        message: 'message digest',
        hash: '87e971759a1ce47a514d5c914c392c9018c7c46bc14465554afcdf54a5070c0e'
      },
      "ripemd256('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: '649d3034751ea216776bf9a18acc81bc7896118a5197968782dd1fd97d8d5133'
      },
      "ripemd256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: '3843045583aac6c8c8d9128573e7a9809afb2a0f34ccc36ea9e72f16f6368e3f'
      },
      "ripemd256('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: '5740a408ac16b720b84424ae931cbb1fe363d1d0bf4017f1a89f7ea6de77a0b8'
      },
      "ripemd256('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '06fdcc7a409548aaf91368c06a6275b553e3f099bf0ea4edfd6778df89a890dd'
      }
    },
    // The RIPEMD320 test suite
    // http://homes.esat.kuleuven.be/~bosselae/ripemd160.html
    'ripemd320': {
      "ripemd320('')": {
        message: '',
        hash: '22d65d5661536cdc75c1fdf5c6de7b41b9f27325ebc61e8557177d705a0ec880151c3a32a00899b8'
      },
      "ripemd320('a')": {
        message: 'a',
        hash: 'ce78850638f92658a5a585097579926dda667a5716562cfcf6fbe77f63542f99b04705d6970dff5d'
      },
      "ripemd320('abc')": {
        message: 'abc',
        hash: 'de4c01b3054f8930a79d09ae738e92301e5a17085beffdc1b8d116713e74f82fa942d64cdbc4682d'
      },
      "ripemd320('message digest')": {
        message: 'message digest',
        hash: '3a8e28502ed45d422f68844f9dd316e7b98533fa3f2a91d29f84d425c88d6b4eff727df66a7c0197'
      },
      "ripemd320('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'cabdb1810b92470a2093aa6bce05952c28348cf43ff60841975166bb40ed234004b8824463e6b009'
      },
      "ripemd320('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: 'd034a7950cf722021ba4b84df769a5de2060e259df4c9bb4a4268c0e935bbc7470a969c9d072a1ac'
      },
      "ripemd320('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'ed544940c86d67f250d232c30b7b3e5770e0c60c8cb9a4cafe3b11388af9920e1b99230b843c86a4'
      },
      "ripemd320('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '557888af5f6d8ed62ab66945c6d2a0a47ecd5341e915eb8fea1d0524955f825dc717e4a008ab2d42'
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
    },
    // The SHA384 test suite
    // http://tools.ietf.org/html/rfc4634
    'sha384': {
      "sha384('')": {
        message: '',
        hash: '38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b'
      },
      "sha384('abc')": {
        message: 'abc',
        hash: 'cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7'
      },
      "sha384('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: '3391fdddfc8dc7393707a65b1b4709397cf8b1d162af05abfe8f450de5f36bc6b0455a8520bc4e6f5fe95b1fe3c8452b'
      },
      "sha384('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')": {
        message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
        hash: '09330c33f71147e83d192fc782cd1b4753111b173b3b05d22fa08086e3b0f712fcc7c71a557e2db966c3e9fa91746039'
      },
      "sha384('01234567' x 80)": {
        message: new Array(81).join('01234567'),
        hash: '2fc64a4f500ddb6828f6a3430b8dd72a368eb7f3a8322a70bc84275b9c0b3ab00d27a5cc3c2d224aa6b61a0d79fb4596'
      }
    },
    // The SHA512 test suite
    // http://tools.ietf.org/html/rfc4634
    'sha512': {
      "sha512('')": {
        message: '',
        hash: 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e'
      },
      "sha512('abc')": {
        message: 'abc',
        hash: 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
      },
      "sha512('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: '204a8fc6dda82f0a0ced7beb8e08a41657c16ef468b228a8279be331a703c33596fd15c13b1b07f9aa1d3bea57789ca031ad85c7a71dd70354ec631238ca3445'
      },
      "sha512('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')": {
        message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
        hash: '8e959b75dae313da8cf4f72814fc143f8f7779c6eb9f7fa17299aeadb6889018501d289e4900f7e4331b99dec4b5433ac7d329eeb6dd26545e96e55b874be909'
      },
      "sha512('01234567' x 80)": {
        message: new Array(81).join('01234567'),
        hash: '89d05ba632c699c31231ded4ffc127d5a894dad412c0e024db872d1abd2ba8141a0f85072a9be1e2aa04cf33c765cb510813a39cd5a84c4acaa64d3f3fb7bae9'
      }
    },
    // The SHA512/224 test suite
    // http://csrc.nist.gov/groups/ST/toolkit/documents/Examples/SHA512_224.pdf
    'sha512/224': {
      "sha512/224('')": {
        message: '',
        hash: '6ed0dd02806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4'
      },
      "sha512/224('abc')": {
        message: 'abc',
        hash: '4634270f707b6a54daae7530460842e20e37ed265ceee9a43e8924aa'
      },
      "sha512/224('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: 'e5302d6d54bb242275d1e7622d68df6eb02dedd13f564c13dbda2174'
      },
      "sha512/224('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')": {
        message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
        hash: '23fec5bb94d60b23308192640b0c453335d664734fe40e7268674af9'
      },
      "sha512/224('01234567' x 80)": {
        message: new Array(81).join('01234567'),
        hash: '406338c163ad81f50d6b4c9bb45240c5d706b498863404bab6b84938'
      }
    },
    // The SHA512/256 test suite
    // http://csrc.nist.gov/groups/ST/toolkit/documents/Examples/SHA512_256.pdf
    'sha512/256': {
      "sha512/256('')": {
        message: '',
        hash: 'c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a'
      },
      "sha512/256('abc')": {
        message: 'abc',
        hash: '53048e2681941ef99b2e29b76b4c7dabe4c2d0c634fc6d46e0e2f13107e7af23'
      },
      "sha512/256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: 'bde8e1f9f19bb9fd3406c90ec6bc47bd36d8ada9f11880dbc8a22a7078b6a461'
      },
      "sha512/256('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')": {
        message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
        hash: '3928e184fb8690f840da3988121d31be65cb9d3ef83ee6146feac861e19b563a'
      },
      "sha512/256('01234567' x 80)": {
        message: new Array(81).join('01234567'),
        hash: 'cf78e4ba935b4d9eb91052aeddf8e2d606c590f708573693ea94be826a666ee4'
      }
    },
    // The HAS-160 test suite
    // https://files.randombit.net/misc/has160.pdf
    'has160': {
      "has160('')": {
        message: '',
        hash: '307964ef34151d37c8047adec7ab50f4ff89762d'
      },
      "has160('a')": {
        message: 'a',
        hash: '4872bcbc4cd0f0a9dc7c2f7045e5b43b6c830db8'
      },
      "has160('abc')": {
        message: 'abc',
        hash: '975e810488cf2a3d49838478124afce4b1c78804'
      },
      "has160('message digest')": {
        message: 'message digest',
        hash: '2338dbc8638d31225f73086246ba529f96710bc6'
      },
      "has160('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: '596185c9ab6703d0d0dbb98702bc0f5729cd1d3c'
      },
      "has160('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'cb5d7efbca2f02e0fb7167cabb123af5795764e5'
      },
      "has160('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '07f05c8c0773c55ca3a5a695ce6aca4c438911b5'
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
