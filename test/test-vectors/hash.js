/*global module */
(function () {
  'use strict';

  var TestVectors = {
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
