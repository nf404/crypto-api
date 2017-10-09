'use strict';

import TestSha0 from "./hasher/sha0";
import TestSha1 from "./hasher/sha1";
import TestHas160 from "./hasher/has160";
import TestMd2 from "./hasher/md2";
import TestMd4 from "./hasher/md4";
import TestMd5 from "./hasher/md5";
import TestRipemd128 from "./hasher/ripemd128";
import TestRipemd160 from "./hasher/ripemd160";
import TestRipemd256 from "./hasher/ripemd256";
import TestRipemd320 from "./hasher/ripemd320";

const hashes = {
  'sha0': new TestSha0(),
  'sha1': new TestSha1(),
  'has160': new TestHas160(),
  'md2': new TestMd2(),
  'md4': new TestMd4(),
  'md5': new TestMd5(),
  'ripemd128': new TestRipemd128(),
  'ripemd160': new TestRipemd160(),
  'ripemd256': new TestRipemd256(),
  'ripemd320': new TestRipemd320()
};

Object.keys(hashes).forEach(function (hash) {
  describe('Tests for hash ' + hash, function () {
    hashes[hash].test();
  });
});