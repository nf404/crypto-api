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
    },
    // The WHIRLPOOL-0 test suite
    // https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/whirlpool/Whirlpool-Orig-512.verified.test-vectors
    'whirlpool-0': {
      "whirlpool-0('')": {
        message: '',
        hash: 'b3e1ab6eaf640a34f784593f2074416accd3b8e62c620175fca0997b1ba2347339aa0d79e754c308209ea36811dfa40c1c32f1a2b9004725d987d3635165d3c8'
      },
      "whirlpool-0('a')": {
        message: 'a',
        hash: 'f4b620445ae62431dbd6dbcec64d2a3031cd2f48df5e755f30b3d069929ed4b4eda0ae65441bc86746021fb7f2167f84d67566efaba003f0abb67a42a2ce5b13'
      },
      "whirlpool-0('abc')": {
        message: 'abc',
        hash: '54ee18b0bbd4dd38a211699f2829793156e5842df502a2a25995c6c541f28cc050ff57d4af772dee7cedcc4c34c3b8ec06446c6657f2f36c2c06464399879b86'
      },
      "whirlpool-0('message digest')": {
        message: 'message digest',
        hash: '29e158ba336ce7f930115178a6c86019f0f413adb283d8f0798af06ca0a06d6d6f295a333b1c24bda2f429ac918a3748aef90f7a2c8bfb084d5f979cf4e7b2b5'
      },
      "whirlpool-0('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: '5ac9757e1407432daf348a972b8ad4a65c1123cf1f9b779c1ae7ee2d540f30b3cefa8f98dca5fbb42084c5c2f161a7b40eb6b4a1fc7f9aaab92a4bb6002edc5e'
      },
      "whirlpool-0('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'cae4175f09753de84974cfa968621092fe41ee9de913919c2b452e6cb424056721d640e563f628f29dd3bd0030837ae4ac14aa17308505a92e5f7a92f112be75'
      },
      "whirlpool-0('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: 'e5965b4565b041a0d459610e5e48e944c4830cd16feba02d9d263e7da8de6a6b88966709bf28a5328d928312e7a172da4cff72fe6de02277dae4b1dba49689a2'
      }
    },
    // The WHIRLPOOL-T test suite
    // https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/whirlpool/Whirlpool-Tweak-512.verified.test-vectors
    'whirlpool-t': {
      "whirlpool-t('')": {
        message: '',
        hash: '470f0409abaa446e49667d4ebe12a14387cedbd10dd17b8243cad550a089dc0feea7aa40f6c2aaab71c6ebd076e43c7cfca0ad32567897dcb5969861049a0f5a'
      },
      "whirlpool-t('a')": {
        message: 'a',
        hash: 'b290e0e7931025ed37043ad568f0036b40e6bff8f7455868780f47ef7b5d693e62448029a9351cd85ac29cb0725e4cfeb996a92f2b8da8768483ac58ec0e492c'
      },
      "whirlpool-t('abc')": {
        message: 'abc',
        hash: '8afc0527dcc0a19623860ef2369d0e25de8ebe2abaa40f598afaf6b07c002ed73e4fc0fc220fd4f54f74b5d6b07aa57764c3dbdcc2cdd919d89fa8155a34b841'
      },
      "whirlpool-t('message digest')": {
        message: 'message digest',
        hash: '817eadf8efca5afbc11f71d0814e03a8d569c90f748c8603597a7a0de3c8d55f528199010218249517b58b14bee523515608754b53a3cca35c0865ba5e361431'
      },
      "whirlpool-t('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: '4afc2b07bddc8417635fcb43e695e16f45e116c226dd84339eb95c2ccb39e7acbe1af8f7b1f3bd380077e71929498bc968200371f9299015434d1df109a0aa1d'
      },
      "whirlpool-t('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: '0f960ec9ab7d0c7e355a423d1ef4911a39797c836a71414276afeb8fa475dba0c348547143162f3212edf1fb8d8c652a11a579a399c2dbd837fe8608f5096131'
      },
      "whirlpool-t('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '6ae43784c69d01c273bba40f8411495167909e0c1acc241473d44e27bc8641e646535d38fce20604941988c387c201cff199c8fa2afbedd036d66202892a7eee'
      }
    },
    // The WHIRLPOOL test suite
    // http://www.larc.usp.br/~pbarreto/WhirlpoolPage.html
    'whirlpool': {
      "whirlpool('')": {
        message: '',
        hash: '19fa61d75522a4669b44e39c1d2e1726c530232130d407f89afee0964997f7a73e83be698b288febcf88e3e03c4f0757ea8964e59b63d93708b138cc42a66eb3'
      },
      "whirlpool('a')": {
        message: 'a',
        hash: '8aca2602792aec6f11a67206531fb7d7f0dff59413145e6973c45001d0087b42d11bc645413aeff63a42391a39145a591a92200d560195e53b478584fdae231a'
      },
      "whirlpool('abc')": {
        message: 'abc',
        hash: '4e2448a4c6f486bb16b6562c73b4020bf3043e3a731bce721ae1b303d97e6d4c7181eebdb6c57e277d0e34957114cbd6c797fc9d95d8b582d225292076d4eef5'
      },
      "whirlpool('message digest')": {
        message: 'message digest',
        hash: '378c84a4126e2dc6e56dcc7458377aac838d00032230f53ce1f5700c0ffb4d3b8421557659ef55c106b4b52ac5a4aaa692ed920052838f3362e86dbd37a8903e'
      },
      "whirlpool('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: 'f1d754662636ffe92c82ebb9212a484a8d38631ead4238f5442ee13b8054e41b08bf2a9251c30b6a0b8aae86177ab4a6f68f673e7207865d5d9819a3dba4eb3b'
      },
      "whirlpool('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'dc37e008cf9ee69bf11f00ed9aba26901dd7c28cdec066cc6af42e40f82f3a1e08eba26629129d8fb7cb57211b9281a65517cc879d7b962142c65f5a7af01467'
      },
      "whirlpool('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '466ef18babb0154d25b9d38a6414f5c08784372bccb204d6549c4afadb6014294d5bd8df2a6c44e538cd047b2681a51a2c60481e88c5a20b2c2a80cf3a9a083b'
      }
    },
    // The Snefru-2-128 test suite
    // From Snefru version 2.0 package
    'snefru-2-128': {
      "snefru-2-128('')": {
        message: '',
        hash: 'b67224738c99d0ef185f2e971eb762ae'
      },
      "snefru-2-128(0x0a)": {
        message: "\n",
        hash: '13af7619ab98d4b5f5e0a9e6b26b5452'
      },
      "snefru-2-128('1' + 0x0a)": {
        message: "1\n",
        hash: '578c83f88fe1f6a8c119d2ba3a9256c2'
      },
      "snefru-2-128('12' + 0x0a)": {
        message: "12\n",
        hash: '255468d4b4bd985b696a73136027fc80'
      },
      "snefru-2-128('123' + 0x0a)": {
        message: "123\n",
        hash: 'f5339a529c4dafc534fe3f0d7a66baf7'
      },
      "snefru-2-128('1234' + 0x0a)": {
        message: "1234\n",
        hash: '2645ff869a6c0ec65c49c20dd9050165'
      },
      "snefru-2-128('12345' + 0x0a)": {
        message: "12345\n",
        hash: '387d29298ed52ece88e64f38fe4fdb11'
      },
      "snefru-2-128('123456' + 0x0a)": {
        message: "123456\n",
        hash: 'f29f8915d23a0e02838cc2e275f5dfe7'
      },
      "snefru-2-128('1234567' + 0x0a)": {
        message: "1234567\n",
        hash: '4fb0f76e9af16a2d61844b9ce833e18f'
      },
      "snefru-2-128('12345678' + 0x0a)": {
        message: "12345678\n",
        hash: 'aacc56fc85910fefe81fc6976b061f4e'
      },
      "snefru-2-128('123456789' + 0x0a)": {
        message: "123456789\n",
        hash: 'e699784944ed68a1c762ea1e90c77967'
      },
      "snefru-2-128('The theory of quantum electrodynamics has now lasted for ....')": {
        message: "The theory of quantum electrodynamics has now lasted for\n" +
        "more than fifty years, and has been tested more and more\n" +
        "accurately over a wider and wider range of conditions.\n" +
        "At the present time I can proudly say that there is no\n" +
        "significant difference between experiment and theory!\n\n" +
        "Just to give you an idea of how the theory has been put\n" +
        "through the wringer, I'll give you some recent numbers:\n" +
        "experiments have Dirac's number at 1.00115965221 (with\n" +
        "an uncertainty of about five times as much). To give you\n" +
        "a feeling for the accuracy of these numbers, it comes\n" +
        "out something like this:  If you were to measure the\n" +
        "distance from Los Angeles to New York to this accuracy,\n" +
        "it would be exact to the thickness of a human hair.\n" +
        "That's how delicately quantum electrodynamics has, in the\n" +
        "past fifty years, been checked -- both theoretically and\n" +
        "experimentally.\n",
        hash: 'ef84019eff25cfb6142452df77180806'
      }
    },
    // The Snefru-256 test suite
    // From Snefru version 2.0 package
    'snefru-4-256': {
      "snefru-4-256('')": {
        message: '',
        hash: '5148516ae7fc7e89ad8e0b0b8d76ac782498615818fb8eeb08cbab9f07c82a73'
      },
      "snefru-4-256(0x0a)": {
        message: "\n",
        hash: '6c504351ce7f4b7a93adb29af9781ff92150f157fee18661eef511a30fc83ddf'
      },
      "snefru-4-256('1' + 0x0a)": {
        message: "1\n",
        hash: '65d657f885ad8b4ab35999cc3ded8b827cf71fa42542475035778910d6c2e320'
      },
      "snefru-4-256('12' + 0x0a)": {
        message: "12\n",
        hash: '7636f3d1af139cf958f46f9966221282a444732a7de59da5d3481c6bbd6e7092'
      },
      "snefru-4-256('123' + 0x0a)": {
        message: "123\n",
        hash: 'cd3c71635b14c7c2c24be8644baab592b8ab5b9991ee5ee5b3cf7a7fc6426ad7'
      },
      "snefru-4-256('1234' + 0x0a)": {
        message: "1234\n",
        hash: '9ba783a1290cb21efe196a023286ece549394c751ddd607e5d67c4dc549c62eb'
      },
      "snefru-4-256('12345' + 0x0a)": {
        message: "12345\n",
        hash: 'c9680da8ef00d2f84459a8e9b50ada71c63cae6fdcb6f774f699878330a4a1f4'
      },
      "snefru-4-256('123456' + 0x0a)": {
        message: "123456\n",
        hash: '7656d389f980bbe894152abec6dc5f16faf21c603b8f5098861acf3cc059467b'
      },
      "snefru-4-256('1234567' + 0x0a)": {
        message: "1234567\n",
        hash: 'd96eb5998377bb1d74a02a2f00ac9a853175250e4796af3636609747372bba80'
      },
      "snefru-4-256('12345678' + 0x0a)": {
        message: "12345678\n",
        hash: 'b7818f092118e98a140af09a6cca4e6f1eba88e752c20174653637c9d628f33f'
      },
      "snefru-4-256('123456789' + 0x0a)": {
        message: "123456789\n",
        hash: 'c22422491187baaa9472540008dffd5b38f015579f3f239050969991fdc1a810'
      },
      "snefru-4-256('The theory of quantum electrodynamics has now lasted for ....')": {
        message: "The theory of quantum electrodynamics has now lasted for\n" +
        "more than fifty years, and has been tested more and more\n" +
        "accurately over a wider and wider range of conditions.\n" +
        "At the present time I can proudly say that there is no\n" +
        "significant difference between experiment and theory!\n\n" +
        "Just to give you an idea of how the theory has been put\n" +
        "through the wringer, I'll give you some recent numbers:\n" +
        "experiments have Dirac's number at 1.00115965221 (with\n" +
        "an uncertainty of about five times as much). To give you\n" +
        "a feeling for the accuracy of these numbers, it comes\n" +
        "out something like this:  If you were to measure the\n" +
        "distance from Los Angeles to New York to this accuracy,\n" +
        "it would be exact to the thickness of a human hair.\n" +
        "That's how delicately quantum electrodynamics has, in the\n" +
        "past fifty years, been checked -- both theoretically and\n" +
        "experimentally.\n",
        hash: 'd4303702d63e71d5e4eacdef868770576563d8c0dec0d7d1cb7ad00f39b6296a'
      }
    },
    // The Snefru-8-128 test suite
    // From Snefru version 2.5a package
    'snefru-8-128': {
      "snefru-8-128('')": {
        message: '',
        hash: '8617f366566a011837f4fb4ba5bedea2'
      },
      "snefru-8-128(0x0a)": {
        message: "\n",
        hash: 'd9fcb3171c097fbba8c8f12aa0906bad'
      },
      "snefru-8-128('1' + 0x0a)": {
        message: "1\n",
        hash: '44ec420ce99c1f62feb66c53c24ae453'
      },
      "snefru-8-128('12' + 0x0a)": {
        message: "12\n",
        hash: '7182051aa852ef6fba4b6c9c9b79b317'
      },
      "snefru-8-128('123' + 0x0a)": {
        message: "123\n",
        hash: 'bc3a50af82bf56d6a64732bc7b050a93'
      },
      "snefru-8-128('1234' + 0x0a)": {
        message: "1234\n",
        hash: 'c5b8a04985a8eadfb4331a8988752b77'
      },
      "snefru-8-128('12345' + 0x0a)": {
        message: "12345\n",
        hash: 'd559a2b62f6f44111324f85208723707'
      },
      "snefru-8-128('123456' + 0x0a)": {
        message: "123456\n",
        hash: '6cfb5e8f1da02bd167b01e4816686c30'
      },
      "snefru-8-128('1234567' + 0x0a)": {
        message: "1234567\n",
        hash: '29aa48325f275a8a7a01ba1543c54ba5'
      },
      "snefru-8-128('12345678' + 0x0a)": {
        message: "12345678\n",
        hash: 'be862a6b68b7df887ebe00319cbc4a47'
      },
      "snefru-8-128('123456789' + 0x0a)": {
        message: "123456789\n",
        hash: '6103721ccd8ad565d68e90b0f8906163'
      },
      "snefru-8-128('The theory of quantum electrodynamics has now lasted for ....')": {
        message: "The theory of quantum electrodynamics has now lasted for\n" +
        "more than fifty years, and has been tested more and more\n" +
        "accurately over a wider and wider range of conditions.\n" +
        "At the present time I can proudly say that there is no\n" +
        "significant difference between experiment and theory!\n\n" +
        "Just to give you an idea of how the theory has been put\n" +
        "through the wringer, I'll give you some recent numbers:\n" +
        "experiments have Dirac's number at 1.00115965221 (with\n" +
        "an uncertainty of about five times as much). To give you\n" +
        "a feeling for the accuracy of these numbers, it comes\n" +
        "out something like this:  If you were to measure the\n" +
        "distance from Los Angeles to New York to this accuracy,\n" +
        "it would be exact to the thickness of a human hair.\n" +
        "That's how delicately quantum electrodynamics has, in the\n" +
        "past fifty years, been checked -- both theoretically and\n" +
        "experimentally.\n",
        hash: '56ab6bb21a7a07892d62cb03c41dde6d'
      }
    },
    // The Snefru-256 test suite
    // From Snefru version 2.5a package
    'snefru-8-256': {
      "snefru-8-256('')": {
        message: '',
        hash: '8617f366566a011837f4fb4ba5bedea2b892f3ed8b894023d16ae344b2be5881'
      },
      "snefru-8-256(0x0a)": {
        message: "\n",
        hash: '2e02687f0d45d5b9b50cb68c3f33e6843d618a1aca2d06893d3eb4e3026b5732'
      },
      "snefru-8-256('1' + 0x0a)": {
        message: "1\n",
        hash: 'bfea4a05a2a2ef15c736d114598a20b9d9bd4d66b661e6b05ecf6a7737bdc58c'
      },
      "snefru-8-256('12' + 0x0a)": {
        message: "12\n",
        hash: 'ac677d69761ade3f189c7aef106d5fe7392d324e19cc76d5db4a2c05f2cc2cc5'
      },
      "snefru-8-256('123' + 0x0a)": {
        message: "123\n",
        hash: '061c76aa1db4a22c0e42945e26c48499b5400162e08c640be05d3c007c44793d'
      },
      "snefru-8-256('1234' + 0x0a)": {
        message: "1234\n",
        hash: '1e87fe1d9c927e9e24be85e3cc73359873541640a6261793ce5a974953113f5e'
      },
      "snefru-8-256('12345' + 0x0a)": {
        message: "12345\n",
        hash: '1b59927d85a9349a87796620fe2ff401a06a7ba48794498ebab978efc3a68912'
      },
      "snefru-8-256('123456' + 0x0a)": {
        message: "123456\n",
        hash: '28e9d9bc35032b68faeda88101ecb2524317e9da111b0e3e7094107212d9cf72'
      },
      "snefru-8-256('1234567' + 0x0a)": {
        message: "1234567\n",
        hash: 'f7fff4ee74fd1b8d6b3267f84e47e007f029d13b8af7e37e34d13b469b8f248f'
      },
      "snefru-8-256('12345678' + 0x0a)": {
        message: "12345678\n",
        hash: 'ee7d64b0102b2205e98926613b200185559d08be6ad787da717c968744e11af3'
      },
      "snefru-8-256('123456789' + 0x0a)": {
        message: "123456789\n",
        hash: '4ca72639e40e9ab9c0c3f523c4449b3911632d374c124d7702192ec2e4e0b7a3'
      },
      "snefru-8-256('The theory of quantum electrodynamics has now lasted for ....')": {
        message: "The theory of quantum electrodynamics has now lasted for\n" +
        "more than fifty years, and has been tested more and more\n" +
        "accurately over a wider and wider range of conditions.\n" +
        "At the present time I can proudly say that there is no\n" +
        "significant difference between experiment and theory!\n\n" +
        "Just to give you an idea of how the theory has been put\n" +
        "through the wringer, I'll give you some recent numbers:\n" +
        "experiments have Dirac's number at 1.00115965221 (with\n" +
        "an uncertainty of about five times as much). To give you\n" +
        "a feeling for the accuracy of these numbers, it comes\n" +
        "out something like this:  If you were to measure the\n" +
        "distance from Los Angeles to New York to this accuracy,\n" +
        "it would be exact to the thickness of a human hair.\n" +
        "That's how delicately quantum electrodynamics has, in the\n" +
        "past fifty years, been checked -- both theoretically and\n" +
        "experimentally.\n",
        hash: '5e8a32ed1998b611f5f096960c65e820da93a9a424d2715130c1e45483f1839c'
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
