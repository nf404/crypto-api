/*global describe, it */
'use strict';
import TestHasher from "../TestHasher";
import Sha512 from "../../src/hasher/sha512";

// The SHA512 test suite
// http://tools.ietf.org/html/rfc4634

class Sha512Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Sha512} */
    describe('Hash sha512 tests', function () {
      it("sha512('')", function () {
        t.testHash({
          message: '',
          hash: 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e'
        });
      });

      it("sha512('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
        });
      });

      it("sha512('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
        t.testHash({
          message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
          hash: '204a8fc6dda82f0a0ced7beb8e08a41657c16ef468b228a8279be331a703c33596fd15c13b1b07f9aa1d3bea57789ca031ad85c7a71dd70354ec631238ca3445'
        });
      });

      it("sha512('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')", function () {
        t.testHash({
          message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
          hash: '8e959b75dae313da8cf4f72814fc143f8f7779c6eb9f7fa17299aeadb6889018501d289e4900f7e4331b99dec4b5433ac7d329eeb6dd26545e96e55b874be909'
        });
      });

      it("sha512('01234567' x 80)", function () {
        t.testHash({
          message: new Array(81).join('01234567'),
          hash: '89d05ba632c699c31231ded4ffc127d5a894dad412c0e024db872d1abd2ba8141a0f85072a9be1e2aa04cf33c765cb510813a39cd5a84c4acaa64d3f3fb7bae9'
        });
      });

      /**
       * @test {Sha512#setState}
       * @test {Sha512#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Sha512(options);
  }
}

export default Sha512Test;