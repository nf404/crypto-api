/*global describe, it */
'use strict';
import TestHasher from "../TestHasher";
import Whirlpool from "../../src/hasher/whirlpool";

// The WHIRLPOOL-T test suite
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/whirlpool/Whirlpool-Tweak-512.verified.test-vectors

class WhirlpoolTTest extends TestHasher {
  test() {
    let t = this;
    /** @test {Whirlpool} */
    describe('Hash whirlpool-t tests', function () {
      it("whirlpool-t('')", function () {
        t.testHash({
          message: '',
          hash: '470f0409abaa446e49667d4ebe12a14387cedbd10dd17b8243cad550a089dc0feea7aa40f6c2aaab71c6ebd076e43c7cfca0ad32567897dcb5969861049a0f5a'
        });
      });

      it("whirlpool-t('a')", function () {
        t.testHash({
          message: 'a',
          hash: 'b290e0e7931025ed37043ad568f0036b40e6bff8f7455868780f47ef7b5d693e62448029a9351cd85ac29cb0725e4cfeb996a92f2b8da8768483ac58ec0e492c'
        });
      });

      it("whirlpool-t('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: '8afc0527dcc0a19623860ef2369d0e25de8ebe2abaa40f598afaf6b07c002ed73e4fc0fc220fd4f54f74b5d6b07aa57764c3dbdcc2cdd919d89fa8155a34b841'
        });
      });

      it("whirlpool-t('message digest')", function () {
        t.testHash({
          message: 'message digest',
          hash: '817eadf8efca5afbc11f71d0814e03a8d569c90f748c8603597a7a0de3c8d55f528199010218249517b58b14bee523515608754b53a3cca35c0865ba5e361431'
        });
      });

      it("whirlpool-t('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: '4afc2b07bddc8417635fcb43e695e16f45e116c226dd84339eb95c2ccb39e7acbe1af8f7b1f3bd380077e71929498bc968200371f9299015434d1df109a0aa1d'
        });
      });

      it("whirlpool-t('A..Za..z0..9')", function () {
        t.testHash({
          message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          hash: '0f960ec9ab7d0c7e355a423d1ef4911a39797c836a71414276afeb8fa475dba0c348547143162f3212edf1fb8d8c652a11a579a399c2dbd837fe8608f5096131'
        });
      });

      it("whirlpool-t('1234567890' x 8)", function () {
        t.testHash({
          message: new Array(9).join('1234567890'),
          hash: '6ae43784c69d01c273bba40f8411495167909e0c1acc241473d44e27bc8641e646535d38fce20604941988c387c201cff199c8fa2afbedd036d66202892a7eee'
        });
      });

      it("whirlpool-t('The quick brown fox jumps over the lazy dog')", function () {
        t.testHash({
          message: 'The quick brown fox jumps over the lazy dog',
          hash: '3ccf8252d8bbb258460d9aa999c06ee38e67cb546cffcf48e91f700f6fc7c183ac8cc3d3096dd30a35b01f4620a1e3a20d79cd5168544d9e1b7cdf49970e87f1'
        });
      });

      /**
       * @test {Whirlpool#setState}
       * @test {Whirlpool#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Whirlpool(options || {type: 't'});
  }
}

export default WhirlpoolTTest;