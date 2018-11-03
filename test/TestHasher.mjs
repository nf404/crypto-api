'use strict';

import Hasher from "../src/hasher/hasher";
import {toHex} from "../src/encoder/hex";
import {fromUtf} from "../src/encoder/utf";
import 'chai/register-assert';

class TestHasher {
  /**
   * Test hash
   *
   * @param {Object} test
   */
  testHash(test) {
    let hash = this.getInstance(test.options);
    hash.update(fromUtf(test.message));
    assert.equal(toHex(hash.finalize()), test.hash);
  }

  /**
   * Test setState, getState
   *
   * @param {Object} [options] - Hash options
   */
  testSetGetState(options) {
    let hasher = this.getInstance(options);
    hasher.update('1');
    let hash1 = toHex(hasher.finalize());
    hasher.reset();
    hasher.update('12');
    let hash2 = toHex(hasher.finalize());
    hasher.reset();
    hasher.update('1');
    let state = hasher.getState();
    assert.equal(toHex(hasher.finalize()), hash1);
    hasher.setState(state);
    hasher.update('2');
    assert.equal(toHex(hasher.finalize()), hash2);
  }

  /**
   * @param {Object} [options]
   * @returns {Hasher}
   */
  getInstance(options) {
    return new Hasher(options);
  }
}

export default TestHasher;