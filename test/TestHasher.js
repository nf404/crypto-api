'use strict';

import Hasher from "../src/hasher";
import {hex} from "../src/encoder/hex";
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
        hash.update(tests[msg].message);
        assert.equal(hex(hash.finalize()), tests[msg].hash)
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