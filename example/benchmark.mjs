'use strict';

import Md2 from "../src/hasher/md2";
import Md4 from "../src/hasher/md4";
import Md5 from "../src/hasher/md5";
import Ripemd from "../src/hasher/ripemd";
import Has160 from "../src/hasher/has160";
import Sha0 from "../src/hasher/sha0";
import Sha1 from "../src/hasher/sha1";
import Sha256 from "../src/hasher/sha256";
import Sha512 from "../src/hasher/sha512";
import Snefru from "../src/hasher/snefru";
import Whirlpool from "../src/hasher/whirlpool";
import Sm3 from "../src/hasher/sm3";
import {fromUtf} from "../src/encoder/utf";
import {toHex} from "../src/encoder/hex";

suite('Hash from simple string with HEX result', function (suite) {
  bench('md2', function () {
    suite.md2 = new Md2();
    suite.md2.update(fromUtf('xxx'));
    toHex(suite.md2.finalize());
  });
  bench('md4', function () {
    suite.md4 = new Md4();
    suite.md4.update(fromUtf('xxx'));
    toHex(suite.md4.finalize());
  });
  bench('md5', function () {
    suite.md5 = new Md5();
    suite.md5.update(fromUtf('xxx'));
    toHex(suite.md5.finalize());
  });
  bench('ripemd128', function () {
    suite.ripemd128 = new Ripemd({length: 128});
    suite.ripemd128.update(fromUtf('xxx'));
    toHex(suite.ripemd128.finalize());
  });
  bench('ripemd160', function () {
    suite.ripemd160 = new Ripemd({length: 160});
    suite.ripemd160.update(fromUtf('xxx'));
    toHex(suite.ripemd160.finalize());
  });
  bench('ripemd256', function () {
    suite.ripemd256 = new Ripemd({length: 256});
    suite.ripemd256.update(fromUtf('xxx'));
    toHex(suite.ripemd256.finalize());
  });
  bench('ripemd320', function () {
    suite.ripemd320 = new Ripemd({length: 320});
    suite.ripemd320.update(fromUtf('xxx'));
    toHex(suite.ripemd320.finalize());
  });
  bench('has160', function () {
    suite.has160 = new Has160();
    suite.has160.update(fromUtf('xxx'));
    toHex(suite.has160.finalize());
  });
  bench('sha0', function () {
    suite.sha0 = new Sha0();
    suite.sha0.update(fromUtf('xxx'));
    toHex(suite.sha0.finalize());
  });
  bench('sha1', function () {
    suite.sha1 = new Sha1();
    suite.sha1.update(fromUtf('xxx'));
    toHex(suite.sha1.finalize());
  });
  bench('sha224', function () {
    suite.sha224 = new Sha256({length: 224});
    suite.sha224.update(fromUtf('xxx'));
    toHex(suite.sha224.finalize());
  });
  bench('sha256', function () {
    suite.sha256 = new Sha256();
    suite.sha256.update(fromUtf('xxx'));
    toHex(suite.sha256.finalize());
  });
  bench('sha512', function () {
    suite.sha512 = new Sha512();
    suite.sha512.update(fromUtf('xxx'));
    toHex(suite.sha512.finalize());
  });
  bench('snefru', function () {
    suite.snefru = new Snefru();
    suite.snefru.update(fromUtf('xxx'));
    toHex(suite.snefru.finalize());
  });
  bench('whirlpool', function () {
    suite.whirlpool = new Whirlpool();
    suite.whirlpool.update(fromUtf('xxx'));
    toHex(suite.whirlpool.finalize());
  });
  bench('sm3', function () {
    suite.sm3 = new Sm3();
    suite.sm3.update(fromUtf('xxx'));
    toHex(suite.sm3.finalize());
  });
});
suite('Update', function (suite) {
  setup(function () {
    suite.md2 = new Md2();
    suite.md4 = new Md4();
    suite.md5 = new Md5();
    suite.ripemd128 = new Ripemd({length: 128});
    suite.ripemd160 = new Ripemd({length: 160});
    suite.ripemd256 = new Ripemd({length: 256});
    suite.ripemd320 = new Ripemd({length: 320});
    suite.has160 = new Has160();
    suite.sha0 = new Sha0();
    suite.sha1 = new Sha1();
    suite.sha224 = new Sha256({length: 224});
    suite.sha256 = new Sha256();
    suite.sha512 = new Sha512();
    suite.snefru = new Snefru();
    suite.whirlpool = new Whirlpool();
    suite.sm3 = new Sm3();
  });
  bench('md2', function () {
    suite.md2.update(fromUtf('xxx'));
  });
  bench('md4', function () {
    suite.md4.update(fromUtf('xxx'));
  });
  bench('md5', function () {
    suite.md5.update(fromUtf('xxx'));
  });
  bench('ripemd128', function () {
    suite.ripemd128.update(fromUtf('xxx'));
  });
  bench('ripemd160', function () {
    suite.ripemd160.update(fromUtf('xxx'));
  });
  bench('ripemd256', function () {
    suite.ripemd256.update(fromUtf('xxx'));
  });
  bench('ripemd320', function () {
    suite.ripemd320.update(fromUtf('xxx'));
  });
  bench('has160', function () {
    suite.has160.update(fromUtf('xxx'));
  });
  bench('sha0', function () {
    suite.sha0.update(fromUtf('xxx'));
  });
  bench('sha1', function () {
    suite.sha1.update(fromUtf('xxx'));
  });
  bench('sha224', function () {
    suite.sha224.update(fromUtf('xxx'));
  });
  bench('sha256', function () {
    suite.sha256.update(fromUtf('xxx'));
  });
  bench('sha512', function () {
    suite.sha512.update(fromUtf('xxx'));
  });
  bench('snefru', function () {
    suite.snefru.update(fromUtf('xxx'));
  });
  bench('whirlpool', function () {
    suite.whirlpool.update(fromUtf('xxx'));
  });
  bench('sm3', function () {
    suite.sm3.update(fromUtf('xxx'));
  });
});