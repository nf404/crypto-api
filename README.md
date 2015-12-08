# Crypto API for JavaScript

[![Build Status](https://travis-ci.org/nf404/crypto-api.svg?branch=master)](https://travis-ci.org/nf404/crypto-api)
[![Coverage Status](https://coveralls.io/repos/nf404/crypto-api/badge.svg?branch=master&service=github)](https://coveralls.io/github/nf404/crypto-api?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/aaf2b599d7194aeaa9bbb74ec8c6212c)](https://www.codacy.com/app/nf404-name/crypto-api)
[![NPM version](https://img.shields.io/npm/v/crypto-api.svg)](https://www.npmjs.com/package/crypto-api)
[![License Type](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

## Demo
[Basic hasher usage](https://rawgit.com/nf404/crypto-api/master/example/hasher-basic.html)

[Unit tests](https://rawgit.com/nf404/crypto-api/master/example/unit-tests.html)

## Features

### Hashing algorithms
* [MD2](https://tools.ietf.org/html/rfc1319)
* [MD4](https://tools.ietf.org/html/rfc1320)
* [MD5](https://tools.ietf.org/html/rfc1321)
* SHA0
* [SHA1](https://tools.ietf.org/html/rfc3174)
* [SHA256 (SHA224)](https://tools.ietf.org/html/rfc4634)

### Encodings
* HEX

## Using in browser

```javascript
var hash = CryptoApi.hash('md2', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('md4', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('md5', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha0', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha1', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha224', 'test message', {}).stringify('hex');

var hash = CryptoApi.hash('sha256', 'test message', {}).stringify('hex');
```

## Using with node.js

```javascript
var CryptoApi = require('crypto-api');
require('crypto-api/enc.hex');
require('crypto-api/hasher.md2');
CryptoApi.hash('md2', '', {}).stringify('hex')
```
