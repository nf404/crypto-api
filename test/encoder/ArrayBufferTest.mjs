/*global describe, it */
'use strict';

import {fromArrayBuffer} from "../../src/encoder/array-buffer";
import {toHex} from "../../src/encoder/hex";
import 'chai/register-assert';

class ArrayBufferTest {
  test() {
    /** @test fromArrayBuffer */
    describe('Encoder ArrayBuffer tests', function () {
      /** @test fromArrayBuffer */
      it("fromArrayBuffer([0x00])", function () {
        assert.equal(toHex(fromArrayBuffer([0x00])), '00');
      });

      /** @test fromArrayBuffer */
      it("fromArrayBuffer([0x5c])", function () {
        assert.equal(toHex(fromArrayBuffer([0x5c])), '5c');
      });

      /** @test fromArrayBuffer */
      it("fromArrayBuffer([0x7f])", function () {
        assert.equal(toHex(fromArrayBuffer([0x7f])), '7f');
      });

      /** @test fromArrayBuffer */
      it("fromArrayBuffer([0x80])", function () {
        assert.equal(toHex(fromArrayBuffer([0x80])), '80');
      });
      
      /** @test fromArrayBuffer */
      it("fromArrayBuffer([0xff, 0xff])", function () {
        assert.equal(toHex(fromArrayBuffer([0xff, 0xff])), 'ffff');
      });
    });
  }
}
export default ArrayBufferTest;