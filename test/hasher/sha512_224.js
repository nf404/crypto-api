'use strict';
import TestHasher from "../TestHasher";
import Sha512 from "../../src/hasher/sha512";

// The SHA512/224 test suite
// http://csrc.nist.gov/groups/ST/toolkit/documents/Examples/SHA512_224.pdf

class TestSha512_224 extends TestHasher {
  constructor() {
    super();

    this.data = {
      "sha512/224('')": {
        options: {length: 224},
        message: '',
        hash: '6ed0dd02806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4'
      },
      "sha512/224('abc')": {
        options: {length: 224},
        message: 'abc',
        hash: '4634270f707b6a54daae7530460842e20e37ed265ceee9a43e8924aa'
      },
      "sha512/224('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')": {
        options: {length: 224},
        message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
        hash: 'e5302d6d54bb242275d1e7622d68df6eb02dedd13f564c13dbda2174'
      },
      "sha512/224('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')": {
        options: {length: 224},
        message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
        hash: '23fec5bb94d60b23308192640b0c453335d664734fe40e7268674af9'
      },
      "sha512/224('01234567' x 80)": {
        options: {length: 224},
        message: new Array(81).join('01234567'),
        hash: '406338c163ad81f50d6b4c9bb45240c5d706b498863404bab6b84938'
      }
    }
  }

  getInstance(options) {
    return new Sha512(options || {length: 224});
  }
}

export default TestSha512_224