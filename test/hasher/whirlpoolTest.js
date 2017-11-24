'use strict';
import TestHasher from "../TestHasher";
import Whirlpool from "../../src/hasher/whirlpool";

// The WHIRLPOOL test suite
// http://www.larc.usp.br/~pbarreto/WhirlpoolPage.html

class WhirlpoolTest extends TestHasher {
  test() {
    let t = this;
    /** @test {Whirlpool} */
    describe('Hash whirlpool tests', function () {
      it("whirlpool('')", function () {
        t.testHash({
          message: '',
          hash: '19fa61d75522a4669b44e39c1d2e1726c530232130d407f89afee0964997f7a73e83be698b288febcf88e3e03c4f0757ea8964e59b63d93708b138cc42a66eb3'
        })
      });

      it("whirlpool('a')", function () {
        t.testHash({
          message: 'a',
          hash: '8aca2602792aec6f11a67206531fb7d7f0dff59413145e6973c45001d0087b42d11bc645413aeff63a42391a39145a591a92200d560195e53b478584fdae231a'
        })
      });

      it("whirlpool('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: '4e2448a4c6f486bb16b6562c73b4020bf3043e3a731bce721ae1b303d97e6d4c7181eebdb6c57e277d0e34957114cbd6c797fc9d95d8b582d225292076d4eef5'
        })
      });

      it("whirlpool('message digest')", function () {
        t.testHash({
          message: 'message digest',
          hash: '378c84a4126e2dc6e56dcc7458377aac838d00032230f53ce1f5700c0ffb4d3b8421557659ef55c106b4b52ac5a4aaa692ed920052838f3362e86dbd37a8903e'
        })
      });

      it("whirlpool('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: 'f1d754662636ffe92c82ebb9212a484a8d38631ead4238f5442ee13b8054e41b08bf2a9251c30b6a0b8aae86177ab4a6f68f673e7207865d5d9819a3dba4eb3b'
        })
      });

      it("whirlpool('A..Za..z0..9')", function () {
        t.testHash({
          message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          hash: 'dc37e008cf9ee69bf11f00ed9aba26901dd7c28cdec066cc6af42e40f82f3a1e08eba26629129d8fb7cb57211b9281a65517cc879d7b962142c65f5a7af01467'
        })
      });

      it("whirlpool('1234567890' x 8)", function () {
        t.testHash({
          message: new Array(9).join('1234567890'),
          hash: '466ef18babb0154d25b9d38a6414f5c08784372bccb204d6549c4afadb6014294d5bd8df2a6c44e538cd047b2681a51a2c60481e88c5a20b2c2a80cf3a9a083b'
        })
      });

      /**
       * @test {Whirlpool#setState}
       * @test {Whirlpool#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState()
      });
    });
  }

  getInstance(options) {
    return new Whirlpool(options);
  }
}

export default WhirlpoolTest