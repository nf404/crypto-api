# Crypto API for JavaScript

## Demo
[Basic hasher usage](https://rawgit.com/nf404/crypto-api/master/examples/hasher-basic.html)

[Unit tests](https://rawgit.com/nf404/crypto-api/master/examples/unit-tests.html)

## Features

### Hashing algorithms
* [MD2](https://tools.ietf.org/html/rfc1319)
* [MD4](https://tools.ietf.org/html/rfc1320)
* [MD5](https://tools.ietf.org/html/rfc1321)
* SHA0
* [SHA1](https://tools.ietf.org/html/rfc3174)

### Encodings
* HEX

## Using

```javascript
var hash = CryptoApi.hash('md5', 'test message', {}).stringify('hex');`
```
