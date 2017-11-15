'use strict';

import Hmac from "../src/mac/hmac";
import Hasher from "../src/hasher";
import {toHex} from "../src/encoder/hex";
import {assert} from "chai";

class TestHmac {
  constructor() {
    this.data = {};
  }

  test() {
    let tests = this.data;
    let t = this;
    Object.keys(tests).forEach(function (msg) {
      it(msg, function () {
        let hash = t.getInstance(tests[msg].options || {});
        let hmac = new Hmac(tests[msg].key, hash);
        hmac.update(tests[msg].message);
        assert.equal(toHex(hmac.finalize()), tests[msg].hash)
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

export default TestHmac