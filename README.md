# Crypto API for JavaScript

[![Build Status](https://travis-ci.org/nf404/crypto-api.svg?branch=master)](https://travis-ci.org/nf404/crypto-api)
[![Coverage Status](https://coveralls.io/repos/nf404/crypto-api/badge.svg?branch=master&service=github)](https://coveralls.io/github/nf404/crypto-api?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/aaf2b599d7194aeaa9bbb74ec8c6212c)](https://www.codacy.com/app/nf404/crypto-api)
[![Code Climate](https://codeclimate.com/github/nf404/crypto-api/badges/gpa.svg)](https://codeclimate.com/github/nf404/crypto-api)
[![bitHound Overalll Score](https://www.bithound.io/github/nf404/crypto-api/badges/score.svg)](https://www.bithound.io/github/nf404/crypto-api)
[![NPM version](https://img.shields.io/npm/v/crypto-api.svg)](https://www.npmjs.com/package/crypto-api)
[![Inline docs](https://inch-ci.org/github/nf404/crypto-api.svg?branch=master&style=shields)](https://inch-ci.org/github/nf404/crypto-api)
[![License Type](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

## Demo
* [Basic hasher usage](https://rawgit.com/nf404/crypto-api/master/example/hasher-basic.html)
* [File hashing on client side](https://rawgit.com/nf404/crypto-api/master/example/hasher-file.html)
* [QUnit tests](https://rawgit.com/nf404/crypto-api/master/example/unit-tests.html)
* [Benchmark](https://rawgit.com/nf404/crypto-api/master/example/benchmark.html)

## Features

### Hashing algorithms
* [MD2](https://tools.ietf.org/html/rfc1319)
* [MD4](https://tools.ietf.org/html/rfc1320)
* [MD5](https://tools.ietf.org/html/rfc1321)
* [RIPEMD-160 (RIPEMD-128, RIPEMD-256, RIPEMD-320)](http://homes.esat.kuleuven.be/~bosselae/ripemd160.html)
* [SHA0](http://pages.saclay.inria.fr/pierre.karpman/fips180.pdf)
* [SHA1](https://tools.ietf.org/html/rfc3174)
* [SHA256 (SHA224)](https://tools.ietf.org/html/rfc4634)
* [SHA512 (SHA384)](https://tools.ietf.org/html/rfc4634)
* [SHA512/256 (SHA512/224)](http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf)
* [HAS-160](https://www.randombit.net/has160.html)
* [WHIRLPOOL (WHIRLPOOL-0, WHIRLPOOL-T)](http://www.larc.usp.br/~pbarreto/WhirlpoolPage.html)
* Snefru v2.0 (2 rounds 128, 4 rounds 256), Snefru v2.5 (8 rounds)

### MAC
* [HMAC](https://tools.ietf.org/html/rfc2104)

### Encodings
* HEX

## Using in browser

```javascript
var hash = CryptoApi.hash('md2', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('md4', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('md5', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('ripemd128', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('ripemd160', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('ripemd256', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('ripemd320', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha0', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha1', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha224', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha256', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha384', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha512', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha512/224', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha512/256', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('has160', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('whirlpool', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('whirlpool-0', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('whirlpool-t', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('snefru-2-128', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('snefru-4-128', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('snefru-8-128', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('snefru-2-256', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('snefru-4-256', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('snefru-8-256', 'test message', {}).stringify('hex');

var hash_hmac = CryptoApi.mac('hmac', 'sha256', '', {}).update('test message')
    .finalize().stringify('hex');
```

## Using with node.js

```javascript
var CryptoApi = require('crypto-api');
CryptoApi.hash('sha256', '', {}).stringify('hex');
```

## Saving state example

```javascript
var CryptoApi = require('crypto-api');
var hasher = CryptoApi.hasher('sha256', {});
hasher.update('1');
var state = hasher.getState();
console.log(hasher.finalize().stringify('hex')); // print sha256('1')
hasher.setState(state).update('2');
console.log(hasher.finalize().stringify('hex')); // print sha256('12')
```