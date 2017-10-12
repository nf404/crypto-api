'use strict';

import TestSha0 from "./hasher/sha0";
import TestSha1 from "./hasher/sha1";
import TestSha224 from "./hasher/sha224";
import TestSha256 from "./hasher/sha256";
import TestSha384 from "./hasher/sha384";
import TestSha512 from "./hasher/sha512";
import TestSha512_224 from "./hasher/sha512_224";
import TestSha512_256 from "./hasher/sha512_256";
import TestHas160 from "./hasher/has160";
import TestMd2 from "./hasher/md2";
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

const hashes = {
  'sha0': new TestSha0(),
  'sha1': new TestSha1(),
  'sha224': new TestSha224(),
  'sha256': new TestSha256(),
  'sha384': new TestSha384(),
  'sha512': new TestSha512(),
  'sha512/224': new TestSha512_224(),
  'sha512/256': new TestSha512_256(),
  'has160': new TestHas160(),
  'md2': new TestMd2(),
  'md4': new TestMd4(),
  'md5': new TestMd5(),
  'ripemd128': new TestRipemd128(),
  'ripemd160': new TestRipemd160(),
  'ripemd256': new TestRipemd256(),
  'ripemd320': new TestRipemd320(),
  'snerfu128_2': new TestSnefru128_2(),
  'snerfu128_8': new TestSnefru128_8(),
  'snerfu256_4': new TestSnefru256_4(),
  'snerfu256_8': new TestSnefru256_8()
};

Object.keys(hashes).forEach(function (hash) {
  describe('Tests for hash ' + hash, function () {
    hashes[hash].test();
  });
});