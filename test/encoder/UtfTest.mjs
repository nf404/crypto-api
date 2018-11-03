/*global describe, it */
'use strict';

import {fromUtf} from "../../src/encoder/utf";
import {toHex} from "../../src/encoder/hex";
import 'chai/register-assert';

class UtfTest {
  test() {
    /** @test fromUtf */
    describe('Encoder UTF tests', function () {
      /** @test fromUtf */
      it("fromUtf('\\0')", function () {
        assert.equal(toHex(fromUtf('\0')), '00');
      });

      /** @test fromUtf */
      it("fromUtf('\\x5c')", function () {
        assert.equal(toHex(fromUtf('\x5c')), '5c');
      });

      /** @test fromUtf */
      it("fromUtf('\\x7f')", function () {
        assert.equal(toHex(fromUtf('\x7f')), '7f');
      });

      /** @test fromUtf */
      it("fromUtf('\\x80')", function () {
        assert.equal(toHex(fromUtf('\x80')), 'c280');
      });

      /** @test fromUtf */
      it("fromUtf('\\u05ca')", function () {
        assert.equal(toHex(fromUtf('\u05ca')), 'd78a');
      });

      /** @test fromUtf */
      it("fromUtf('\\u07ff')", function () {
        assert.equal(toHex(fromUtf('\u07ff')), 'dfbf');
      });

      /** @test fromUtf */
      it("fromUtf('\\u0800')", function () {
        assert.equal(toHex(fromUtf('\u0800')), 'e0a080');
      });

      /** @test fromUtf */
      it("fromUtf('\\u2c3c')", function () {
        assert.equal(toHex(fromUtf('\u2c3c')), 'e2b0bc');
      });

      /** @test fromUtf */
      it("fromUtf('\\uffff')", function () {
        assert.equal(toHex(fromUtf('\uffff')), 'efbfbf');
      });

      /** @test fromUtf */
      it("fromUtf('\\ud800\\udc00')", function () {
        assert.equal(toHex(fromUtf('\ud800\udc00')), 'f0908080');
      });

      /** @test fromUtf */
      it("fromUtf('\\ud834\\udf06')", function () {
        assert.equal(toHex(fromUtf('\ud834\udf06')), 'f09d8c86');
      });

      /** @test fromUtf */
      it("fromUtf('\\udbff\\udfff')", function () {
        assert.equal(toHex(fromUtf('\udbff\udfff')), 'f48fbfbf');
      });
    });
  }
}

export default UtfTest;