# Crypto API for JavaScript

[![Build Status](https://travis-ci.org/nf404/crypto-api.svg?branch=master)](https://travis-ci.org/nf404/crypto-api)
[![Coverage Status](https://coveralls.io/repos/nf404/crypto-api/badge.svg?branch=master&service=github)](https://coveralls.io/github/nf404/crypto-api?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/aaf2b599d7194aeaa9bbb74ec8c6212c)](https://www.codacy.com/app/nf404/crypto-api)
[![Code Climate](https://codeclimate.com/github/nf404/crypto-api/badges/gpa.svg)](https://codeclimate.com/github/nf404/crypto-api)
[![NPM version](https://img.shields.io/npm/v/crypto-api.svg)](https://www.npmjs.com/package/crypto-api)
[![License Type](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

## Demo
* [Basic hasher usage](https://nf404.github.io/crypto-api/example/hasher-basic.html)
([html](https://github.com/nf404/crypto-api/tree/master/example/hasher-basic.html), 
[js](https://github.com/nf404/crypto-api/tree/master/example/hasher-basic.mjs))
* [File hashing on client side](https://nf404.github.io/crypto-api/example/hasher-file.html)
([html](https://github.com/nf404/crypto-api/tree/master/example/hasher-file.html), 
[js](https://github.com/nf404/crypto-api/tree/master/example/hasher-file.mjs))
* [Benchmark](https://nf404.github.io/crypto-api/example/benchmark.html)
([html](https://github.com/nf404/crypto-api/tree/master/example/benchmark.html), 
[js](https://github.com/nf404/crypto-api/tree/master/example/benchmark.mjs))
* [Unit tests](https://nf404.github.io/crypto-api/example/unit-tests.html)
([html](https://github.com/nf404/crypto-api/tree/master/example/unit-tests.html), 
[js](https://github.com/nf404/crypto-api/tree/master/example/unit-tests.mjs))

## [Documentation](https://nf404.github.io/crypto-api/)

## Features

### Hashing algorithms
* [HAS-160](https://nf404.github.io/crypto-api/class/src/hasher/has160.mjs~Has160.html)
* [MD2](https://nf404.github.io/crypto-api/class/src/hasher/md2.mjs~Md2.html)
* [MD4](https://nf404.github.io/crypto-api/class/src/hasher/md4.mjs~Md4.html)
* [MD5](https://nf404.github.io/crypto-api/class/src/hasher/md5.mjs~Md5.html)
* [RIPEMD-160 (RIPEMD-128, RIPEMD-256, RIPEMD-320)](https://nf404.github.io/crypto-api/class/src/hasher/ripemd.mjs~Ripemd.html)
* [SHA0](https://nf404.github.io/crypto-api/class/src/hasher/sha0.mjs~Sha0.html)
* [SHA1](https://nf404.github.io/crypto-api/class/src/hasher/sha1.mjs~Sha1.html)
* [SHA256 (SHA224)](https://nf404.github.io/crypto-api/class/src/hasher/sha256.mjs~Sha256.html)
* [SHA512 (SHA384)](https://nf404.github.io/crypto-api/class/src/hasher/sha512.mjs~Sha512.html)
* [SHA512/t (SHA512/256 SHA512/224)](https://nf404.github.io/crypto-api/class/src/hasher/sha512.mjs~Sha512.html)
* [Snefru v2.0 (2 rounds 128, 4 rounds 256), Snefru v2.5 (8 rounds)](https://nf404.github.io/crypto-api/class/src/hasher/snefru.mjs~Snefru.html)
* [WHIRLPOOL (WHIRLPOOL-0, WHIRLPOOL-T)](https://nf404.github.io/crypto-api/class/src/hasher/whirlpool.mjs~Whirlpool.html)
* [SM3](https://nf404.github.io/crypto-api/class/src/hasher/sm3.mjs~Sm3.html)

### MAC
* [HMAC](https://nf404.github.io/crypto-api/class/src/mac/hmac.mjs~Hmac.html)

### Encodings
* [fromUtf](https://nf404.github.io/crypto-api/function/index.html#static-function-fromUtf)
* [fromArrayBuffer](https://nf404.github.io/crypto-api/function/index.html#static-function-fromArrayBuffer)
* [toHex](https://nf404.github.io/crypto-api/function/index.html#static-function-toHex)
* [toBase64](https://nf404.github.io/crypto-api/function/index.html#static-function-toBase64)

## Examples

### ES6 (recommended)

Calculates SHA256 hash from UTF string "message"
```javascript
import Sha256 from "crypto-api/src/hasher/sha256";
import {toHex} from "crypto-api/src/encoder/hex";
import {fromUtf} from "crypto-api/src/encoder/utf";

let hasher = new Sha256();
hasher.update(fromUtf('message'));
console.log(toHex(hasher.finalize()));
```

Calculates HMAC-MD5 from UTF string "message" with UTF key "key" 
```javascript
import Md5 from "crypto-api/src/hasher/md5";
import Hmac from "crypto-api/src/mac/hmac";
import {toHex} from "crypto-api/src/encoder/hex";
import {fromUtf} from "crypto-api/src/encoder/utf";

let hasher = new Md5();
let hmac = new Hmac(fromUtf('key'), hasher);
hmac.update(fromUtf('message'));
console.log(toHex(hmac.finalize()));
```

### Using in browser (ES5)

Calculates SHA256 hash from string "message"
```html
<script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
<script>
  var hasher = CryptoApi.getHasher('sha256');
  hasher.update('message');
  console.log(CryptoApi.encoder.toHex(hasher.finalize()));
</script>
```

Calculates SHA256 hash from UTF string "message"
```html
<script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
<script>
  console.log(CryptoApi.hash('sha256', 'message'));
</script>
```

Calculates HMAC-MD5 from string "message" with key "key"
```html
<script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
<script>
  var hasher = CryptoApi.getHasher('md5');
  var hmac = CryptoApi.getHmac('key', hasher);
  hmac.update('message');
  console.log(CryptoApi.encoder.toHex(hmac.finalize()));
</script>
```
Calculates HMAC-MD5 from UTF string "message" with UTF key "key"
```html
<script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
<script>
  var hasher = CryptoApi.getHasher('md5');
  console.log(CryptoApi.hmac('key', 'message', hasher));
</script>
```
