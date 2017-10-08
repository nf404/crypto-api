'use strict';
import Sha1 from "../../src/hasher/sha1";
import TestHasher from "../TestHasher";

// The SHA1 test suite
// http://tools.ietf.org/html/rfc3174
// http://csrc.nist.gov/publications/fips/fips180-2/fips180-2.pdf
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/sha/Sha-1-160.test-vectors

class TestSha1 extends TestHasher {
  constructor() {
    super();

    this.data = {
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
    }
  }

  getInstance(options) {
    return new Sha1();
  }
}

export default TestSha1