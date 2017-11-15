'use strict';
import TestHasher from "../TestHasher";
import Whirlpool from "../../src/hasher/whirlpool";

// The WHIRLPOOL-T test suite
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/whirlpool/Whirlpool-Tweak-512.verified.test-vectors

class TestWhirlpoolT extends TestHasher {
  constructor() {
    super();

    this.data = {
      "whirlpool-t('')": {
        options: {type: 't'},
        message: '',
        hash: '470f0409abaa446e49667d4ebe12a14387cedbd10dd17b8243cad550a089dc0feea7aa40f6c2aaab71c6ebd076e43c7cfca0ad32567897dcb5969861049a0f5a'
      },
      "whirlpool-t('a')": {
        options: {type: 't'},
        message: 'a',
        hash: 'b290e0e7931025ed37043ad568f0036b40e6bff8f7455868780f47ef7b5d693e62448029a9351cd85ac29cb0725e4cfeb996a92f2b8da8768483ac58ec0e492c'
      },
      "whirlpool-t('abc')": {
        options: {type: 't'},
        message: 'abc',
        hash: '8afc0527dcc0a19623860ef2369d0e25de8ebe2abaa40f598afaf6b07c002ed73e4fc0fc220fd4f54f74b5d6b07aa57764c3dbdcc2cdd919d89fa8155a34b841'
      },
      "whirlpool-t('message digest')": {
        options: {type: 't'},
        message: 'message digest',
        hash: '817eadf8efca5afbc11f71d0814e03a8d569c90f748c8603597a7a0de3c8d55f528199010218249517b58b14bee523515608754b53a3cca35c0865ba5e361431'
      },
      "whirlpool-t('a..z')": {
        options: {type: 't'},
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: '4afc2b07bddc8417635fcb43e695e16f45e116c226dd84339eb95c2ccb39e7acbe1af8f7b1f3bd380077e71929498bc968200371f9299015434d1df109a0aa1d'
      },
      "whirlpool-t('A..Za..z0..9')": {
        options: {type: 't'},
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: '0f960ec9ab7d0c7e355a423d1ef4911a39797c836a71414276afeb8fa475dba0c348547143162f3212edf1fb8d8c652a11a579a399c2dbd837fe8608f5096131'
      },
      "whirlpool-t('1234567890' x 8)": {
        options: {type: 't'},
        message: new Array(9).join('1234567890'),
        hash: '6ae43784c69d01c273bba40f8411495167909e0c1acc241473d44e27bc8641e646535d38fce20604941988c387c201cff199c8fa2afbedd036d66202892a7eee'
      }
    }
  }

  getInstance(options) {
    return new Whirlpool(options || {type: 't'});
  }
}

export default TestWhirlpoolT