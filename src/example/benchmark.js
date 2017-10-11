'use strict';

import EncoderHex from "../encoder/hex";
import Md2 from "../hasher/md2";
import Md4 from "../hasher/md4";
import Md5 from "../hasher/md5";
import Ripemd from "../hasher/ripemd";
import Has160 from "../hasher/has160";
import Sha0 from "../hasher/sha0";
import Sha1 from "../hasher/sha1";
import Sha256 from "../hasher/sha256";
import Sha512 from "../hasher/sha512";

suite('Hash from simple string with HEX result', function (suite) {
  setup(function () {
    suite.hex = new EncoderHex();
  });
  bench('md2', function () {
    suite.md2 = new Md2();
    suite.md2.update('xxx');
    suite.md2.finalize(suite.hex);
  });
  bench('md4', function () {
    suite.md4 = new Md4();
    suite.md4.update('xxx');
    suite.md4.finalize(suite.hex);
  });
  bench('md5', function () {
    suite.md5 = new Md5();
    suite.md5.update('xxx');
    suite.md5.finalize(suite.hex);
  });
  bench('ripemd128', function () {
    suite.ripemd128 = new Ripemd({length: 128});
    suite.ripemd128.update('xxx');
    suite.ripemd128.finalize(suite.hex);
  });
  bench('ripemd160', function () {
    suite.ripemd160 = new Ripemd({length: 160});
    suite.ripemd160.update('xxx');
    suite.ripemd160.finalize(suite.hex);
  });
  bench('ripemd256', function () {
    suite.ripemd256 = new Ripemd({length: 256});
    suite.ripemd256.update('xxx');
    suite.ripemd256.finalize(suite.hex);
  });
  bench('ripemd320', function () {
    suite.ripemd320 = new Ripemd({length: 320});
    suite.ripemd320.update('xxx');
    suite.ripemd320.finalize(suite.hex);
  });
  bench('has160', function () {
    suite.has160 = new Has160();
    suite.has160.update('xxx');
    suite.has160.finalize(suite.hex);
  });
  bench('sha0', function () {
    suite.sha0 = new Sha0();
    suite.sha0.update('xxx');
    suite.sha0.finalize(suite.hex);
  });
  bench('sha1', function () {
    suite.sha1 = new Sha1();
    suite.sha1.update('xxx');
    suite.sha1.finalize(suite.hex);
  });
  bench('sha224', function () {
    suite.sha224 = new Sha256({length: 224});
    suite.sha224.update('xxx');
    suite.sha224.finalize(suite.hex);
  });
  bench('sha256', function () {
    suite.sha256 = new Sha256();
    suite.sha256.update('xxx');
    suite.sha256.finalize(suite.hex);
  });
  bench('sha512', function () {
    suite.sha512 = new Sha512();
    suite.sha512.update('xxx');
    suite.sha512.finalize(suite.hex);
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
  });
  bench('md2', function () {
    !!suite.md2.update('xxx');
  });
  bench('md4', function () {
    !!suite.md4.update('xxx');
  });
  bench('md5', function () {
    !!suite.md5.update('xxx');
  });
  bench('ripemd128', function () {
    !!suite.ripemd128.update('xxx');
  });
  bench('ripemd160', function () {
    !!suite.ripemd160.update('xxx');
  });
  bench('ripemd256', function () {
    !!suite.ripemd256.update('xxx');
  });
  bench('ripemd320', function () {
    !!suite.ripemd320.update('xxx');
  });
  bench('has160', function () {
    !!suite.has160.update('xxx');
  });
  bench('sha0', function () {
    !!suite.sha0.update('xxx');
  });
  bench('sha1', function () {
    !!suite.sha1.update('xxx');
  });
  bench('sha224', function () {
    !!suite.sha224.update('xxx');
  });
  bench('sha256', function () {
    !!suite.sha256.update('xxx');
  });
  bench('sha512', function () {
    !!suite.sha512.update('xxx');
  });
});