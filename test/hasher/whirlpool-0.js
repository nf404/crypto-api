'use strict';
import TestHasher from "../TestHasher";
import Whirlpool from "../../src/hasher/whirlpool";

// The WHIRLPOOL-0 test suite
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/whirlpool/Whirlpool-Orig-512.verified.test-vectors

class TestWhirlpool0 extends TestHasher {
  constructor() {
    super();

    this.data = {
      "whirlpool-0('')": {
        options: {type: '0'},
        message: '',
        hash: 'b3e1ab6eaf640a34f784593f2074416accd3b8e62c620175fca0997b1ba2347339aa0d79e754c308209ea36811dfa40c1c32f1a2b9004725d987d3635165d3c8'
      },
      "whirlpool-0('a')": {
        options: {type: '0'},
        message: 'a',
        hash: 'f4b620445ae62431dbd6dbcec64d2a3031cd2f48df5e755f30b3d069929ed4b4eda0ae65441bc86746021fb7f2167f84d67566efaba003f0abb67a42a2ce5b13'
      },
      "whirlpool-0('abc')": {
        options: {type: '0'},
        message: 'abc',
        hash: '54ee18b0bbd4dd38a211699f2829793156e5842df502a2a25995c6c541f28cc050ff57d4af772dee7cedcc4c34c3b8ec06446c6657f2f36c2c06464399879b86'
      },
      "whirlpool-0('message digest')": {
        options: {type: '0'},
        message: 'message digest',
        hash: '29e158ba336ce7f930115178a6c86019f0f413adb283d8f0798af06ca0a06d6d6f295a333b1c24bda2f429ac918a3748aef90f7a2c8bfb084d5f979cf4e7b2b5'
      },
      "whirlpool-0('a..z')": {
        options: {type: '0'},
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: '5ac9757e1407432daf348a972b8ad4a65c1123cf1f9b779c1ae7ee2d540f30b3cefa8f98dca5fbb42084c5c2f161a7b40eb6b4a1fc7f9aaab92a4bb6002edc5e'
      },
      "whirlpool-0('A..Za..z0..9')": {
        options: {type: '0'},
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'cae4175f09753de84974cfa968621092fe41ee9de913919c2b452e6cb424056721d640e563f628f29dd3bd0030837ae4ac14aa17308505a92e5f7a92f112be75'
      },
      "whirlpool-0('1234567890' x 8)": {
        options: {type: '0'},
        message: new Array(9).join('1234567890'),
        hash: 'e5965b4565b041a0d459610e5e48e944c4830cd16feba02d9d263e7da8de6a6b88966709bf28a5328d928312e7a172da4cff72fe6de02277dae4b1dba49689a2'
      }
    }
  }

  getInstance(options) {
    return new Whirlpool(options || {type: '0'});
  }
}

export default TestWhirlpool0