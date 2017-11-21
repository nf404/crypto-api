'use strict';

import TestSha0 from "./hasher/sha0";
import TestSha1 from "./hasher/sha1";
import TestSha224 from "./hasher/sha224";
import TestSha256 from "./hasher/sha256";
import TestSha384 from "./hasher/sha384";
import TestSha512 from "./hasher/sha512";
import TestSha512_224 from "./hasher/sha512_224";
import TestSha512_256 from "./hasher/sha512_256";
import Has160Test from "./hasher/has160Test";
import Md2Test from "./hasher/md2Test";
import TestMd4 from "./hasher/md4";
import TestMd5 from "./hasher/md5";
import TestRipemd128 from "./hasher/ripemd128";
import TestRipemd160 from "./hasher/ripemd160";
import TestRipemd256 from "./hasher/ripemd256";
import TestRipemd320 from "./hasher/ripemd320";
import TestSnefru128_2 from "./hasher/snefru128_2";
import TestSnefru128_8 from "./hasher/snefru128_8";
import TestSnefru256_4 from "./hasher/snefru256_4";
import TestSnefru256_8 from "./hasher/snefru256_8";
import TestWhirlpool0 from "./hasher/whirlpool-0";
import TestWhirlpoolT from "./hasher/whirlpool-t";
import TestWhirlpool from "./hasher/whirlpool";
import TestHmacMd5 from "./mac/hmac_md5";
import TestHmacSha1 from "./mac/hmac_sha1";
import TestHmacSha224 from "./mac/hmac_sha224";
import TestHmacSha256 from "./mac/hmac_sha256";
import TestHmacSha384 from "./mac/hmac_sha384";
import TestHmacSha512 from "./mac/hmac_sha512";
import TestHmacHas160 from "./mac/hmac_has160";
import UtfTest from "./encoder/UtfTest";

/** @var {TestHasher[]} */
const hashes = {
  'sha0': new TestSha0(),
  'sha1': new TestSha1(),
  'sha224': new TestSha224(),
  'sha256': new TestSha256(),
  'sha384': new TestSha384(),
  'sha512': new TestSha512(),
  'sha512/224': new TestSha512_224(),
  'sha512/256': new TestSha512_256(),
  'md4': new TestMd4(),
  'md5': new TestMd5(),
  'ripemd128': new TestRipemd128(),
  'ripemd160': new TestRipemd160(),
  'ripemd256': new TestRipemd256(),
  'ripemd320': new TestRipemd320(),
  'snerfu128_2': new TestSnefru128_2(),
  'snerfu128_8': new TestSnefru128_8(),
  'snerfu256_4': new TestSnefru256_4(),
  'snerfu256_8': new TestSnefru256_8(),
  'whirlpool-0': new TestWhirlpool0(),
  'whirlpool-t': new TestWhirlpoolT(),
  'whirlpool': new TestWhirlpool()
};

/** @var {TestHmac[]} */
const hmacs = {
  'md5': new TestHmacMd5(),
  'sha1': new TestHmacSha1(),
  'sha224': new TestHmacSha224(),
  'sha256': new TestHmacSha256(),
  'sha384': new TestHmacSha384(),
  'sha512': new TestHmacSha512(),
  'has160': new TestHmacHas160()
};

// Hash tests
(new Has160Test()).test();
(new Md2Test()).test();
//Object.keys(hashes).forEach(function (hash) {
//  hashes[hash].test();
//});

// HMAC tests
Object.keys(hmacs).forEach(function (hmac) {
  describe('Tests for hmac-' + hmac, function () {
    hmacs[hmac].test();
  });
});

// UTF tests
(new UtfTest()).test();