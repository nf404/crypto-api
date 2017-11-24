'use strict';

import Has160Test from "./hasher/has160Test";
import Md2Test from "./hasher/md2Test";
import Md4Test from "./hasher/md4Test";
import Md5Test from "./hasher/md5Test";
import Ripemd128Test from "./hasher/ripemd128Test";
import Ripemd160Test from "./hasher/ripemd160Test";
import Ripemd256Test from "./hasher/ripemd256Test";
import Ripemd320Test from "./hasher/ripemd320Test";
import Sha0Test from "./hasher/sha0Test";
import Sha1Test from "./hasher/sha1Test";
import Sha224Test from "./hasher/sha224Test";
import Sha256Test from "./hasher/sha256Test";
import Sha384Test from "./hasher/sha384Test";
import Sha512_224Test from "./hasher/sha512_224Test";
import Sha512_256Test from "./hasher/sha512_256Test";
import Sha512Test from "./hasher/sha512Test";
import Snefru128_2Test from "./hasher/snefru128_2Test";
import Snefru128_8Test from "./hasher/snefru128_8Test";
import Snefru256_4Test from "./hasher/snefru256_4Test";
import Snefru256_8Test from "./hasher/snefru256_8Test";
import Whirlpool0Test from "./hasher/whirlpool-0Test";
import WhirlpoolTTest from "./hasher/whirlpool-tTest";
import WhirlpoolTest from "./hasher/whirlpoolTest";

import TestHmacMd5 from "./mac/hmac_md5";
import TestHmacSha1 from "./mac/hmac_sha1";
import TestHmacSha224 from "./mac/hmac_sha224";
import TestHmacSha256 from "./mac/hmac_sha256";
import TestHmacSha384 from "./mac/hmac_sha384";
import TestHmacSha512 from "./mac/hmac_sha512";
import TestHmacHas160 from "./mac/hmac_has160";
import UtfTest from "./encoder/UtfTest";

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
(new Md4Test()).test();
(new Md5Test()).test();
(new Ripemd128Test()).test();
(new Ripemd160Test()).test();
(new Ripemd256Test()).test();
(new Ripemd320Test()).test();
(new Sha0Test()).test();
(new Sha1Test()).test();
(new Sha224Test()).test();
(new Sha256Test()).test();
(new Sha384Test()).test();
(new Sha512_224Test()).test();
(new Sha512_256Test()).test();
(new Sha512Test()).test();
(new Snefru128_2Test()).test();
(new Snefru128_8Test()).test();
(new Snefru256_4Test()).test();
(new Snefru256_8Test()).test();
(new Whirlpool0Test()).test();
(new WhirlpoolTTest()).test();
(new WhirlpoolTest()).test();

// HMAC tests
Object.keys(hmacs).forEach(function (hmac) {
  describe('Tests for hmac-' + hmac, function () {
    hmacs[hmac].test();
  });
});

// UTF tests
(new UtfTest()).test();