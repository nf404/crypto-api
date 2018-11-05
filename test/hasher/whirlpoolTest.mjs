/*global describe, it */
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
        });
      });

      it("whirlpool('a')", function () {
        t.testHash({
          message: 'a',
          hash: '8aca2602792aec6f11a67206531fb7d7f0dff59413145e6973c45001d0087b42d11bc645413aeff63a42391a39145a591a92200d560195e53b478584fdae231a'
        });
      });

      it("whirlpool('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: '4e2448a4c6f486bb16b6562c73b4020bf3043e3a731bce721ae1b303d97e6d4c7181eebdb6c57e277d0e34957114cbd6c797fc9d95d8b582d225292076d4eef5'
        });
      });

      it("whirlpool('message digest')", function () {
        t.testHash({
          message: 'message digest',
          hash: '378c84a4126e2dc6e56dcc7458377aac838d00032230f53ce1f5700c0ffb4d3b8421557659ef55c106b4b52ac5a4aaa692ed920052838f3362e86dbd37a8903e'
        });
      });

      it("whirlpool('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: 'f1d754662636ffe92c82ebb9212a484a8d38631ead4238f5442ee13b8054e41b08bf2a9251c30b6a0b8aae86177ab4a6f68f673e7207865d5d9819a3dba4eb3b'
        });
      });

      it("whirlpool('A..Za..z0..9')", function () {
        t.testHash({
          message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          hash: 'dc37e008cf9ee69bf11f00ed9aba26901dd7c28cdec066cc6af42e40f82f3a1e08eba26629129d8fb7cb57211b9281a65517cc879d7b962142c65f5a7af01467'
        });
      });

      it("whirlpool('1234567890' x 8)", function () {
        t.testHash({
          message: new Array(9).join('1234567890'),
          hash: '466ef18babb0154d25b9d38a6414f5c08784372bccb204d6549c4afadb6014294d5bd8df2a6c44e538cd047b2681a51a2c60481e88c5a20b2c2a80cf3a9a083b'
        });
      });

      it("whirlpool('The quick brown fox jumps over the lazy dog')", function () {
        t.testHash({
          message: 'The quick brown fox jumps over the lazy dog',
          hash: 'b97de512e91e3828b40d2b0fdce9ceb3c4a71f9bea8d88e75c4fa854df36725fd2b52eb6544edcacd6f8beddfea403cb55ae31f03ad62a5ef54e42ee82c3fb35'
        });
      });

      it("whirlpool('abcdbcdecdefdefgefghfghighijhijk')", function () {
        t.testHash({
          message: 'abcdbcdecdefdefgefghfghighijhijk',
          hash: '2a987ea40f917061f5d6f0a0e4644f488a7a5a52deee656207c562f988e95c6916bdc8031bc5be1b7b947639fe050b56939baaa0adff9ae6745b7b181c3be3fd'
        });
      });

      it("whirlpool(0x00 x 31)", function () {
        t.testHash({
          message: new Array(32).join("\x00"),
          hash: '3e3f188f8febbeb17a933feaf7fe53a4858d80c915ad6a1418f0318e68d49b4e459223cd414e0fbc8a57578fd755d86e827abef4070fc1503e25d99e382f72ba'
        });
      });

      it("whirlpool(0x00 x 32)", function () {
        t.testHash({
          message: new Array(33).join("\x00"),
          hash: '961b5f299f750f880fca004bdf2882e2fe1b491b0c0ee7e2b514c5dfdd53292dbdbee17e6d3bb5824cdec1867cc7090963be8fff0c1d8ed5864e07cacb50d68a'
        });
      });

      it("whirlpool(0x00 x 33)", function () {
        t.testHash({
          message: new Array(34).join("\x00"),
          hash: '54a9c8784dbf6c2618ca32057b76b9d6733c19f4a377cb7e892d057bf73e83fbaf6ac147a65fef0991dc296955440ad0b793f81c5cf71e29669ce3f19195aaf7'
        });
      });

      /**
       * @test {Whirlpool#setState}
       * @test {Whirlpool#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState();
      });
    });
  }

  getInstance(options) {
    return new Whirlpool(options);
  }
}

export default WhirlpoolTest;