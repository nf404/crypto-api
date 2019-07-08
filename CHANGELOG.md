* 0.8.5
  - This version for deployment to npm
* 0.8.4
  - Add toBase64
  - Add fromArrayBuffer
  - Add support of SHA512/t hash
  - Optimize hash padding
  - Add SM3 hash
* 0.8.3
  - Fix Whirlpool bug
  - Add compiled es5 version for nodejs
* 0.8.2
  - technical version (fix npm key)
* 0.8.1
  - Add support for nodejs
  - Refactor reset function and fix bug with constructor calling in it
  - Fix es6 usage in documentation
* 0.8.0 **Breakable changes**
  - Rewrite to ES6
  - Refactor all code & invert dependencies
  - Add length option to Ripemd, Sha256, Sha512, Snefru
  - Add rounds option to Has160, Md2, Sha0, Sha1, Sha256, Sha512, Snefru, Whirlpool
  - WHIRLPOOL, WHIRLPOOL-0, WHIRLPOOL-T now selected by option type
  - Rewrite documentation to esdoc
* 0.7.5
  - Add Snefru v2.0, Snefru v2.5  
* 0.7.4
  - Add HAS-160
  - Add WHIRLPOOL, WHIRLPOOL-0, WHIRLPOOL-T
* 0.7.3
  - Add RIPEMD128, RIPEMD160, RIPEMD256, RIPEMD320
* 0.7.2
  - Fix documentation
* 0.7.1
  - Add SHA512/224, SHA512/256
* 0.7.0
  - Add SHA384, SHA512
* 0.6.2
  - Perfomance optimization
  - Add benchmark
* 0.6.1
  - Add file hashing example
* 0.6.0
  - Reorganize & refactor tests
  - Add karma & phantomjs for browser testing
  - Change coverage from jscoverage to istanbul
  - Fix require checking
  - Add autoload hash, mac & enc submodules in nodejs
  - 100% test coverage
* 0.5.1
  - Add support getState() setState() for hashers
  - Add unit test for getState() setState()
  - Add saving state example
* 0.5.0
  - Add MAC Api (not really good but it works)
  - Add HMAC
  - Add HMAC test vectors for MD5, SHA1, SHA224, SHA256
  - Add example for HMAC
* Older experimental versions