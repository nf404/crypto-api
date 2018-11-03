'use strict';

import Hmac from "../src/mac/hmac";
import Hasher from "../src/hasher/hasher";
import {toHex} from "../src/encoder/hex";
import 'chai/register-assert';

class TestHmac {
  /**
   * Test hmac
   *
   * @param {Object} test
   */
  testHmac(test) {
    let hash = this.getInstance(test.options || {});
    let hmac = new Hmac(test.key, hash);
    hmac.update(test.message);
    assert.equal(toHex(hmac.finalize()), test.hash);
  }

  /**
   * @param {Object|undefined} options
   * @returns {Hasher}
   */
  getInstance(options) {
    return new Hasher(options);
  }
}

export default TestHmac;