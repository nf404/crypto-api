/*global describe, it */
'use strict';

import {toBase64} from "../../src/encoder/base64";
import 'chai/register-assert';

// https://tools.ietf.org/html/rfc4648#section-10
class Base64Test {
  test() {
    /** @test toBase64 */
    describe('Encoder Base64 tests', function () {
      /** @test toBase64 */
      it("toBase64('')", function () {
        assert.equal(toBase64(''), '');
      });

      /** @test toBase64 */
      it("toBase64('f')", function () {
        assert.equal(toBase64('f'), 'Zg==');
      });

      /** @test toBase64 */
      it("toBase64('fo')", function () {
        assert.equal(toBase64('fo'), 'Zm8=');
      });

      /** @test toBase64 */
      it("toBase64('foo')", function () {
        assert.equal(toBase64('foo'), 'Zm9v');
      });

      /** @test toBase64 */
      it("toBase64('foob')", function () {
        assert.equal(toBase64('foob'), 'Zm9vYg==');
      });

      /** @test toBase64 */
      it("toBase64('fooba')", function () {
        assert.equal(toBase64('fooba'), 'Zm9vYmE=');
      });

      /** @test toBase64 */
      it("toBase64('foobar')", function () {
        assert.equal(toBase64('foobar'), 'Zm9vYmFy');
      });
    });
  }
}

export default Base64Test;