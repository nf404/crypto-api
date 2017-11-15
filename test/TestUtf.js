'use strict';

import {fromUtf} from "../src/encoder/utf";
import {toHex} from "../src/encoder/hex";
import {assert} from "chai";

class TestUtf {
  constructor() {
    this.data = {
      '00': '\0',
      '5c': '\x5c',
      '7f': '\x7f',
      'c280': '\x80',
      'd78a': '\u05ca',
      'dfbf': '\u07ff',
      'e0a080': '\u0800',
      'e2b0bc': '\u2c3c',
      'efbfbf': '\uffff',
      'f0908080': '\uD800\uDC00',
      'f09d8c86': '\uD834\uDF06',
      'f48fbfbf': '\uDBFF\uDFFF'
    };
  }

  test() {
    let tests = this.data;
    let t = this;
    Object.keys(tests).forEach(function (decoded) {
      it('fromUtf(' + decoded + ')', function () {
        assert.equal(toHex(fromUtf(tests[decoded])), decoded)
      })
    })
  }
}

export default TestUtf