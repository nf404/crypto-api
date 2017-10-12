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
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = TestVectors
  } else {
    window.TestVectors = TestVectors;
    return TestVectors
  }
})();
