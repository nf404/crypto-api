'use strict';

import Hasher from "../src/hasher";
import {toHex} from "../src/encoder/hex";
import {fromUtf} from "../src/encoder/utf";
import {assert} from "chai";

class TestHasher {
  constructor() {
    this.data = {};
  }

  test() {
    let tests = this.data;
    let t = this;
    Object.keys(tests).forEach(function (msg) {
      it(msg, function () {
        let hash = t.getInstance(tests[msg].options || {});
        hash.update(fromUtf(tests[msg].message));
        assert.equal(toHex(hash.finalize()), tests[msg].hash)
      })
    })
  }

  /**
   * @param {Object|undefined} options
   * @returns {Hasher}
   */
  getInstance(options) {
    return new Hasher(options);
  }
}

export default TestHasher