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
import Sm3Test from './hasher/sm3Test'

import HmacHas160Test from "./mac/hmac-has160Test";
import HmacMd5Test from "./mac/hmac-md5Test";
import HmacSha1Test from "./mac/hmac-sha1Test";
import HmacSha224Test from "./mac/hmac-sha224Test";
import HmacSha256Test from "./mac/hmac-sha256Test";
import HmacSha384Test from "./mac/hmac-sha384Test";
import HmacSha512Test from "./mac/hmac-sha512Test";

import UtfTest from "./encoder/UtfTest";
import Base64Test from "./encoder/Base64Test";
import ArrayBufferTest from "./encoder/ArrayBufferTest";

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
(new Sm3Test()).test();

// HMAC tests
(new HmacHas160Test()).test();
(new HmacMd5Test()).test();
(new HmacSha1Test()).test();
(new HmacSha224Test()).test();
(new HmacSha256Test()).test();
(new HmacSha384Test()).test();
(new HmacSha512Test()).test();

// Encoder tests
(new UtfTest()).test();
(new Base64Test()).test();
(new ArrayBufferTest()).test();