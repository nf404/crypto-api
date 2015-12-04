# Crypto API for JavaScript

## Demo
[Basic hasher usage](https://rawgit.com/nf404/crypto-api/master/examples/hasher-basic.html)

[Unit tests](https://rawgit.com/nf404/crypto-api/master/examples/unit-tests.html)

## Features
### Hashing algorithms
* MD2

`var hash = CryptoApi.hasher('md2', {}).update('test message').finalize().stringify('hex');`
