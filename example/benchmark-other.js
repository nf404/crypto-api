var CryptoApi =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rotateLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rotateRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return rotateRight64lo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rotateRight64hi; });

/**
 * Rotate x to n bits left
 *
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */

function rotateLeft(x, n) {
  return x << n | x >>> 32 - n | 0;
}
/**
 * Rotate x to n bits right
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */


function rotateRight(x, n) {
  return x >>> n | x << 32 - n | 0;
}
/**
 * Rotate 64bit to n bits right and return hi
 *
 * @param {number} hi
 * @param {number} lo
 * @param {number} n
 * @returns {number}
 */


function rotateRight64hi(hi, lo, n) {
  if (n === 32) {
    return lo;
  }

  if (n > 32) {
    return rotateRight64hi(lo, hi, n - 32);
  }

  return (hi >>> n | lo << 32 - n) & 0xFFFFFFFF;
}
/**
 * Rotate 64bit to n bits right and return lo
 *
 * @param {number} hi
 * @param {number} lo
 * @param {number} n
 * @returns {number}
 */


function rotateRight64lo(hi, lo, n) {
  if (n === 32) {
    return hi;
  }

  if (n > 32) {
    return rotateRight64lo(lo, hi, n - 32);
  }

  return (lo >>> n | hi << 32 - n) & 0xFFFFFFFF;
}



/***/ }),

/***/ 1:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromUtf; });

/**
 * Convert UTF8/UTF16 string to binary input for hasher
 *
 * @param {string} message
 * @returns {string}
 */

function fromUtf(message) {
  var raw = '';

  for (var i = 0, msgLen = message.length; i < msgLen; i++) {
    var charCode = message.charCodeAt(i);

    if (charCode < 0x80) {
      raw += String.fromCharCode(charCode);
    } else if (charCode < 0x800) {
      raw += String.fromCharCode(0xc0 | charCode >> 6);
      raw += String.fromCharCode(0x80 | charCode & 0x3f);
    } else if (charCode < 0xd800 || charCode >= 0xe000) {
      raw += String.fromCharCode(0xe0 | charCode >> 12);
      raw += String.fromCharCode(0x80 | charCode >> 6 & 0x3f);
      raw += String.fromCharCode(0x80 | charCode & 0x3f);
    } // surrogate pair
    else {
        i++; // UTF-16 encodes 0x10000-0x10FFFF by
        // subtracting 0x10000 and splitting the
        // 20 bits of 0x0-0xFFFFF into two halves

        charCode = 0x10000 + ((charCode & 0x3ff) << 10 | message.charCodeAt(i) & 0x3ff);
        raw += String.fromCharCode(0xf0 | charCode >> 18);
        raw += String.fromCharCode(0x80 | charCode >> 12 & 0x3f);
        raw += String.fromCharCode(0x80 | charCode >> 6 & 0x3f);
        raw += String.fromCharCode(0x80 | charCode & 0x3f);
      }
  }

  return raw;
}

/***/ }),

/***/ 10:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _hasher32le__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Transform constants

/** @type {number[]} */

var S = [[7, 12, 17, 22], [5, 9, 14, 20], [4, 11, 16, 23], [6, 10, 15, 21]];
/** @type {number[]} */

var T = new Array(64);

for (var i = 0; i < 64; i++) {
  T[i] = Math.abs(Math.sin(i + 1)) * 0x100000000 | 0;
}
/**
 * Calculates [MD5](https://tools.ietf.org/html/rfc1321) hash
 *
 * @example <caption>Calculates MD5 hash from string "message" - ES6 style</caption>
 * import Md5 from "crypto-api/src/hasher/md5";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Md5();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates MD5 hash from UTF string "message" - ES6 style</caption>
 * import Md5 from "crypto-api/src/hasher/md5";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Md5();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates MD5 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('md5');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates MD5 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('md5', 'message'));
 * </script>
 */


var Md5 =
/*#__PURE__*/
function (_Hasher32le) {
  _inherits(Md5, _Hasher32le);

  function Md5() {
    _classCallCheck(this, Md5);

    return _possibleConstructorReturn(this, _getPrototypeOf(Md5).apply(this, arguments));
  }

  _createClass(Md5, [{
    key: "reset",

    /**
     * Reset hasher to initial state
     */
    value: function reset() {
      _get(_getPrototypeOf(Md5.prototype), "reset", this).call(this);

      this.state.hash = [0x67452301 | 0, 0xefcdab89 | 0, 0x98badcfe | 0, 0x10325476 | 0];
    }
    /**
     * @protected
     * @ignore
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {number}
     */

  }, {
    key: "processBlock",

    /**
     * Process ready blocks
     *
     * @protected
     * @ignore
     * @param {number[]} block - Block
     */
    value: function processBlock(block) {
      // Working variables
      var a = this.state.hash[0] | 0;
      var b = this.state.hash[1] | 0;
      var c = this.state.hash[2] | 0;
      var d = this.state.hash[3] | 0; // Round 1

      a = Md5.CC(Md5.FF, T[0], a, b, c, d, block[0], S[0][0]);
      d = Md5.CC(Md5.FF, T[1], d, a, b, c, block[1], S[0][1]);
      c = Md5.CC(Md5.FF, T[2], c, d, a, b, block[2], S[0][2]);
      b = Md5.CC(Md5.FF, T[3], b, c, d, a, block[3], S[0][3]);
      a = Md5.CC(Md5.FF, T[4], a, b, c, d, block[4], S[0][0]);
      d = Md5.CC(Md5.FF, T[5], d, a, b, c, block[5], S[0][1]);
      c = Md5.CC(Md5.FF, T[6], c, d, a, b, block[6], S[0][2]);
      b = Md5.CC(Md5.FF, T[7], b, c, d, a, block[7], S[0][3]);
      a = Md5.CC(Md5.FF, T[8], a, b, c, d, block[8], S[0][0]);
      d = Md5.CC(Md5.FF, T[9], d, a, b, c, block[9], S[0][1]);
      c = Md5.CC(Md5.FF, T[10], c, d, a, b, block[10], S[0][2]);
      b = Md5.CC(Md5.FF, T[11], b, c, d, a, block[11], S[0][3]);
      a = Md5.CC(Md5.FF, T[12], a, b, c, d, block[12], S[0][0]);
      d = Md5.CC(Md5.FF, T[13], d, a, b, c, block[13], S[0][1]);
      c = Md5.CC(Md5.FF, T[14], c, d, a, b, block[14], S[0][2]);
      b = Md5.CC(Md5.FF, T[15], b, c, d, a, block[15], S[0][3]); // Round 2

      a = Md5.CC(Md5.GG, T[16], a, b, c, d, block[1], S[1][0]);
      d = Md5.CC(Md5.GG, T[17], d, a, b, c, block[6], S[1][1]);
      c = Md5.CC(Md5.GG, T[18], c, d, a, b, block[11], S[1][2]);
      b = Md5.CC(Md5.GG, T[19], b, c, d, a, block[0], S[1][3]);
      a = Md5.CC(Md5.GG, T[20], a, b, c, d, block[5], S[1][0]);
      d = Md5.CC(Md5.GG, T[21], d, a, b, c, block[10], S[1][1]);
      c = Md5.CC(Md5.GG, T[22], c, d, a, b, block[15], S[1][2]);
      b = Md5.CC(Md5.GG, T[23], b, c, d, a, block[4], S[1][3]);
      a = Md5.CC(Md5.GG, T[24], a, b, c, d, block[9], S[1][0]);
      d = Md5.CC(Md5.GG, T[25], d, a, b, c, block[14], S[1][1]);
      c = Md5.CC(Md5.GG, T[26], c, d, a, b, block[3], S[1][2]);
      b = Md5.CC(Md5.GG, T[27], b, c, d, a, block[8], S[1][3]);
      a = Md5.CC(Md5.GG, T[28], a, b, c, d, block[13], S[1][0]);
      d = Md5.CC(Md5.GG, T[29], d, a, b, c, block[2], S[1][1]);
      c = Md5.CC(Md5.GG, T[30], c, d, a, b, block[7], S[1][2]);
      b = Md5.CC(Md5.GG, T[31], b, c, d, a, block[12], S[1][3]); // Round 3

      a = Md5.CC(Md5.HH, T[32], a, b, c, d, block[5], S[2][0]);
      d = Md5.CC(Md5.HH, T[33], d, a, b, c, block[8], S[2][1]);
      c = Md5.CC(Md5.HH, T[34], c, d, a, b, block[11], S[2][2]);
      b = Md5.CC(Md5.HH, T[35], b, c, d, a, block[14], S[2][3]);
      a = Md5.CC(Md5.HH, T[36], a, b, c, d, block[1], S[2][0]);
      d = Md5.CC(Md5.HH, T[37], d, a, b, c, block[4], S[2][1]);
      c = Md5.CC(Md5.HH, T[38], c, d, a, b, block[7], S[2][2]);
      b = Md5.CC(Md5.HH, T[39], b, c, d, a, block[10], S[2][3]);
      a = Md5.CC(Md5.HH, T[40], a, b, c, d, block[13], S[2][0]);
      d = Md5.CC(Md5.HH, T[41], d, a, b, c, block[0], S[2][1]);
      c = Md5.CC(Md5.HH, T[42], c, d, a, b, block[3], S[2][2]);
      b = Md5.CC(Md5.HH, T[43], b, c, d, a, block[6], S[2][3]);
      a = Md5.CC(Md5.HH, T[44], a, b, c, d, block[9], S[2][0]);
      d = Md5.CC(Md5.HH, T[45], d, a, b, c, block[12], S[2][1]);
      c = Md5.CC(Md5.HH, T[46], c, d, a, b, block[15], S[2][2]);
      b = Md5.CC(Md5.HH, T[47], b, c, d, a, block[2], S[2][3]); // Round 4

      a = Md5.CC(Md5.II, T[48], a, b, c, d, block[0], S[3][0]);
      d = Md5.CC(Md5.II, T[49], d, a, b, c, block[7], S[3][1]);
      c = Md5.CC(Md5.II, T[50], c, d, a, b, block[14], S[3][2]);
      b = Md5.CC(Md5.II, T[51], b, c, d, a, block[5], S[3][3]);
      a = Md5.CC(Md5.II, T[52], a, b, c, d, block[12], S[3][0]);
      d = Md5.CC(Md5.II, T[53], d, a, b, c, block[3], S[3][1]);
      c = Md5.CC(Md5.II, T[54], c, d, a, b, block[10], S[3][2]);
      b = Md5.CC(Md5.II, T[55], b, c, d, a, block[1], S[3][3]);
      a = Md5.CC(Md5.II, T[56], a, b, c, d, block[8], S[3][0]);
      d = Md5.CC(Md5.II, T[57], d, a, b, c, block[15], S[3][1]);
      c = Md5.CC(Md5.II, T[58], c, d, a, b, block[6], S[3][2]);
      b = Md5.CC(Md5.II, T[59], b, c, d, a, block[13], S[3][3]);
      a = Md5.CC(Md5.II, T[60], a, b, c, d, block[4], S[3][0]);
      d = Md5.CC(Md5.II, T[61], d, a, b, c, block[11], S[3][1]);
      c = Md5.CC(Md5.II, T[62], c, d, a, b, block[2], S[3][2]);
      b = Md5.CC(Md5.II, T[63], b, c, d, a, block[9], S[3][3]);
      this.state.hash[0] = this.state.hash[0] + a | 0;
      this.state.hash[1] = this.state.hash[1] + b | 0;
      this.state.hash[2] = this.state.hash[2] + c | 0;
      this.state.hash[3] = this.state.hash[3] + d | 0;
    }
    /**
     * Finalize hash and return result
     *
     * @returns {string}
     */

  }, {
    key: "finalize",
    value: function finalize() {
      this.addPaddingISO7816(this.state.message.length < 56 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0);
      this.addLengthBits();
      this.process();
      return this.getStateHash();
    }
  }], [{
    key: "FF",
    value: function FF(x, y, z) {
      return x & y | ~x & z;
    }
    /**
     * @protected
     * @ignore
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {number}
     */

  }, {
    key: "GG",
    value: function GG(x, y, z) {
      return x & z | y & ~z;
    }
    /**
     * @protected
     * @ignore
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {number}
     */

  }, {
    key: "HH",
    value: function HH(x, y, z) {
      return x ^ y ^ z;
    }
    /**
     * @protected
     * @ignore
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {number}
     */

  }, {
    key: "II",
    value: function II(x, y, z) {
      return y ^ (x | ~z);
    }
    /**
     * @protected
     * @ignore
     * @param {function} f
     * @param {number} k
     * @param {number} a
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @param {number} m
     * @param {number} s
     * @returns {number}
     */

  }, {
    key: "CC",
    value: function CC(f, k, a, x, y, z, m, s) {
      return Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(a + f(x, y, z) + m + k, s) + x | 0;
    }
  }]);

  return Md5;
}(_hasher32le__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Md5);

/***/ }),

/***/ 11:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _hasher32be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Transform constants

/** @type {number[]} */

var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
/**
 * Calculates [SHA1](https://tools.ietf.org/html/rfc3174) hash
 *
 * @example <caption>Calculates SHA1 hash from string "message" - ES6 style</caption>
 * import Sha1 from "crypto-api/src/hasher/sha1";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Sha1();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SHA1 hash from UTF string "message" - ES6 style</caption>
 * import Sha1 from "crypto-api/src/hasher/sha1";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Sha1();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SHA1 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('sha1');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates SHA1 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('sha1', 'message'));
 * </script>
 */

var Sha1 =
/*#__PURE__*/
function (_Hasher32be) {
  _inherits(Sha1, _Hasher32be);

  /**
   * @param {Object} [options]
   * @param {number} [options.rounds=80] - Number of rounds (Must be greater than 16)
   */
  function Sha1(options) {
    var _this;

    _classCallCheck(this, Sha1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sha1).call(this, options));
    _this.options.rounds = _this.options.rounds || 80;
    /**
     * Working variable (only for speed optimization)
     * @private
     * @ignore
     * @type {number[]}
     */

    _this.W = new Array(80);
    return _this;
  }
  /**
   * Reset hasher to initial state
   */


  _createClass(Sha1, [{
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(Sha1.prototype), "reset", this).call(this);

      this.state.hash = [0x67452301 | 0, 0xefcdab89 | 0, 0x98badcfe | 0, 0x10325476 | 0, 0xc3d2e1f0 | 0];
    }
    /**
     * Process ready blocks
     *
     * @protected
     * @ignore
     * @param {number[]} block - Block
     */

  }, {
    key: "processBlock",
    value: function processBlock(block) {
      // Working variables
      var a = this.state.hash[0] | 0;
      var b = this.state.hash[1] | 0;
      var c = this.state.hash[2] | 0;
      var d = this.state.hash[3] | 0;
      var e = this.state.hash[4] | 0; // Calculate hash

      for (var i = 0; i < this.options.rounds; i++) {
        if (i < 16) {
          this.W[i] = block[i] | 0;
        } else {
          this.W[i] = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(this.W[i - 3] ^ this.W[i - 8] ^ this.W[i - 14] ^ this.W[i - 16], 1) | 0;
        }

        var t = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(a, 5) + e + this.W[i] + K[i / 20 >> 0] | 0;

        if (i < 20) {
          t = t + (b & c | ~b & d) | 0;
        } else if (i < 40) {
          t = t + (b ^ c ^ d) | 0;
        } else if (i < 60) {
          t = t + (b & c | b & d | c & d) | 0;
        } else {
          t = t + (b ^ c ^ d) | 0;
        }

        e = d;
        d = c;
        c = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(b, 30) | 0;
        b = a;
        a = t;
      }

      this.state.hash[0] = this.state.hash[0] + a | 0;
      this.state.hash[1] = this.state.hash[1] + b | 0;
      this.state.hash[2] = this.state.hash[2] + c | 0;
      this.state.hash[3] = this.state.hash[3] + d | 0;
      this.state.hash[4] = this.state.hash[4] + e | 0;
    }
    /**
     * Finalize hash and return result
     *
     * @returns {string}
     */

  }, {
    key: "finalize",
    value: function finalize() {
      this.addPaddingISO7816(this.state.message.length < 56 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0);
      this.addLengthBits();
      this.process();
      return this.getStateHash();
    }
  }]);

  return Sha1;
}(_hasher32be__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Sha1);

/***/ }),

/***/ 2:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toHex; });

/**
 * Convert binary result of hash to hex
 *
 * @param {string} raw
 * @returns {string}
 */

function toHex(raw) {
  var str = '';

  for (var i = 0, l = raw.length; i < l; i++) {
    str += (raw.charCodeAt(i) < 16 ? '0' : '') + raw.charCodeAt(i).toString(16);
  }

  return str;
}

/***/ }),

/***/ 3:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _hasher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Hasher for 32 bit big endian blocks
 * @interface
 */

var Hasher32be =
/*#__PURE__*/
function (_Hasher) {
  _inherits(Hasher32be, _Hasher);

  /**
   * @param {Object} [options]
   */
  function Hasher32be(options) {
    var _this;

    _classCallCheck(this, Hasher32be);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hasher32be).call(this, options));
    /**
     * Reverse order of bytes
     * @type {number}
     */

    _this.unitOrder = 1;
    /**
     * Current block (only for speed optimization)
     * @private
     * @type {number[]}
     */

    _this.blockUnits = [];
    return _this;
  }
  /**
   * Process ready blocks
   *
   * @protected
   */


  _createClass(Hasher32be, [{
    key: "process",
    value: function process() {
      while (this.state.message.length >= this.blockSizeInBytes) {
        this.blockUnits = [];

        for (var b = 0; b < this.blockSizeInBytes; b += 4) {
          this.blockUnits.push(this.state.message.charCodeAt(b) << 24 | this.state.message.charCodeAt(b + 1) << 16 | this.state.message.charCodeAt(b + 2) << 8 | this.state.message.charCodeAt(b + 3));
        }

        this.state.message = this.state.message.substr(this.blockSizeInBytes);
        this.processBlock(this.blockUnits);
      }
    }
    /**
     * Process ready blocks
     *
     * @protected
     * @param {number[]} M
     */

  }, {
    key: "processBlock",
    value: function processBlock(M) {}
    /**
     * Get hash from state
     *
     * @protected
     * @param {number} [size=this.state.hash.length] - Limit hash size (in chunks)
     * @returns {string}
     */

  }, {
    key: "getStateHash",
    value: function getStateHash(size) {
      size = size || this.state.hash.length;
      var hash = '';

      for (var i = 0; i < size; i++) {
        hash += String.fromCharCode(this.state.hash[i] >> 24 & 0xff) + String.fromCharCode(this.state.hash[i] >> 16 & 0xff) + String.fromCharCode(this.state.hash[i] >> 8 & 0xff) + String.fromCharCode(this.state.hash[i] & 0xff);
      }

      return hash;
    }
    /**
     * Add to message cumulative size of message in bits
     *
     * @protected
     */

  }, {
    key: "addLengthBits",
    value: function addLengthBits() {
      // @todo fix length to 64 bit
      this.state.message += "\x00\x00\x00" + String.fromCharCode(this.state.length >> 29 & 0xff) + String.fromCharCode(this.state.length >> 21 & 0xff) + String.fromCharCode(this.state.length >> 13 & 0xff) + String.fromCharCode(this.state.length >> 5 & 0xff) + String.fromCharCode(this.state.length << 3 & 0xff);
    }
  }]);

  return Hasher32be;
}(_hasher__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Hasher32be);

/***/ }),

/***/ 4:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

/**
 * Base hasher class
 * @interface
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hasher =
/*#__PURE__*/
function () {
  /**
   * @param {Object} options
   * @constructor
   */
  function Hasher(options) {
    _classCallCheck(this, Hasher);

    /**
     * Size of unit in bytes (4 = 32 bits)
     * @type {number}
     */
    this.unitSize = 4;
    /**
     * Bytes order in unit
     *   0 - normal
     *   1 - reverse
     * @type {number}
     */

    this.unitOrder = 0;
    /**
     * Size of block in units
     * @type {number}
     */

    this.blockSize = 16;
    /**
     * Size of block in bytes
     * @type {number}
     */

    this.blockSizeInBytes = this.blockSize * this.unitSize;
    this.options = options || {};
    this.reset();
  }
  /**
   * Reset hasher to initial state
   */


  _createClass(Hasher, [{
    key: "reset",
    value: function reset() {
      /**
       * All algorithm variables that changed during process
       * @protected
       * @type {Object}
       * @property {string} state.message - Unprocessed Message
       * @property {number} state.length - Length of message
       */
      this.state = {};
      this.state.message = '';
      this.state.length = 0;
      /**
       * Options from initialization
       * @protected
       * @type {Object}
       */
    }
    /**
     * Return current state
     *
     * @returns {Object}
     */

  }, {
    key: "getState",
    value: function getState() {
      return JSON.parse(JSON.stringify(this.state));
    }
    /**
     * Set current state
     *
     * @param {Object} state
     */

  }, {
    key: "setState",
    value: function setState(state) {
      this.state = state;
    }
    /**
     * Update message from binary string
     *
     * @param {string} message
     */

  }, {
    key: "update",
    value: function update(message) {
      this.state.message += message;
      this.state.length += message.length;
      this.process();
    }
    /**
     * Process ready blocks
     *
     * @protected
     */

  }, {
    key: "process",
    value: function process() {}
    /**
     * Finalize hash and return result
     *
     * @returns {string}
     */

  }, {
    key: "finalize",
    value: function finalize() {
      return '';
    }
    /**
     * Get hash from state
     *
     * @protected
     * @param {number} [size=this.state.hash.length] - Limit hash size (in chunks)
     * @returns {string}
     */

  }, {
    key: "getStateHash",
    value: function getStateHash(size) {
      return '';
    }
    /**
     * Add PKCS7 padding to message
     * Pad with bytes all of the same value as the number of padding bytes
     *
     * @protected
     * @param {number} length
     */

  }, {
    key: "addPaddingPKCS7",
    value: function addPaddingPKCS7(length) {
      this.state.message += new Array(length + 1).join(String.fromCharCode(length));
    }
    /**
     * Add ISO7816-4 padding to message
     * Pad with 0x80 followed by zero bytes
     *
     * @protected
     * @param {number} length
     */

  }, {
    key: "addPaddingISO7816",
    value: function addPaddingISO7816(length) {
      this.state.message += "\x80" + new Array(length).join("\x00");
    }
    /**
     * Add zero padding to message
     * Pad with 0x00 characters
     *
     * @protected
     * @param {number} length
     */

  }, {
    key: "addPaddingZero",
    value: function addPaddingZero(length) {
      this.state.message += new Array(length + 1).join("\x00");
    }
  }]);

  return Hasher;
}();

/* harmony default export */ __webpack_exports__["a"] = (Hasher);

/***/ }),

/***/ 43:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_hasher_md5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _src_hasher_sha1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _src_hasher_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _src_hasher_sha512__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* global asmCrypto */








suite('MD5 with HEX result', function (suite) {
  setup(function () {
    var md5 = new _src_hasher_md5__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
    md5.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(''));
    suite.hash = Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(md5.finalize());
  });
  bench('CryptoApi', function () {
    suite.tmp = new _src_hasher_md5__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
    suite.tmp.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(suite.hash));
    suite.result = Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(suite.tmp.finalize());
  });
  bench('CryptoJS', function () {
    suite.result = CryptoJS.enc.Hex.stringify(CryptoJS.MD5(suite.hash));
  });
  bench('jsHashes', function () {
    suite.result = new Hashes.MD5().hex(suite.hash);
  });
});
suite('MD5 update', function (suite) {
  setup(function () {
    suite.cryptoApi = new _src_hasher_md5__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
    suite.cryptoApi.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(''));
    suite.hash = Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(suite.cryptoApi.finalize());
    suite.cryptoApi = new _src_hasher_md5__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
    suite.cryptoJS = CryptoJS.algo.MD5.create();
  });
  bench('CryptoApi', function () {
    suite.cryptoApi.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(suite.hash));
  });
  bench('CryptoJS', function () {
    suite.cryptoJS.update(suite.hash);
  });
});
suite('SHA1 with HEX result', function (suite) {
  setup(function () {
    var sha1 = new _src_hasher_sha1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
    sha1.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(''));
    suite.hash = Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(sha1.finalize());
  });
  bench('CryptoApi', function () {
    suite.tmp = new _src_hasher_sha1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
    suite.tmp.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(suite.hash));
    Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(suite.tmp.finalize());
  });
  bench('CryptoJS', function () {
    CryptoJS.enc.Hex.stringify(CryptoJS.SHA1(suite.hash));
  });
  bench('jsHashes', function () {
    new Hashes.SHA1().hex(suite.hash);
  });
  bench('jsSHA', function () {
    suite.tmp = new jsSHA('SHA-1', 'TEXT');
    suite.tmp.update(suite.hash);
    suite.tmp.getHash('HEX');
  });
  bench('asmCrypto', function () {
    asmCrypto.SHA1.hex(suite.hash);
  });
});
suite('SHA1 update', function (suite) {
  setup(function () {
    suite.cryptoApi = new _src_hasher_sha1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
    suite.cryptoApi.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(''));
    suite.hash = Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(suite.cryptoApi.finalize());
    suite.cryptoApi = new _src_hasher_sha1__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
    suite.cryptoJS = CryptoJS.algo.SHA1.create();
    suite.jsSHA = new jsSHA('SHA-1', 'TEXT');
  });
  bench('CryptoApi', function () {
    suite.cryptoApi.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(suite.hash));
  });
  bench('CryptoJS', function () {
    suite.cryptoJS.update(suite.hash);
  });
  bench('jsSHA', function () {
    suite.jsSHA.update(suite.hash);
  });
});
suite('SHA256 with HEX result', function (suite) {
  setup(function () {
    var sha256 = new _src_hasher_sha256__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]();
    sha256.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(''));
    suite.hash = Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(sha256.finalize());
  });
  bench('CryptoApi', function () {
    suite.tmp = new _src_hasher_sha256__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]();
    suite.tmp.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(suite.hash));
    Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(suite.tmp.finalize());
  });
  bench('CryptoJS', function () {
    CryptoJS.enc.Hex.stringify(CryptoJS.SHA256(suite.hash));
  });
  bench('jsHashes', function () {
    new Hashes.SHA256().hex(suite.hash);
  });
  bench('jsSHA', function () {
    suite.tmp = new jsSHA('SHA-256', 'TEXT');
    suite.tmp.update(suite.hash);
    suite.tmp.getHash('HEX');
  });
  bench('asmCrypto', function () {
    asmCrypto.SHA256.hex(suite.hash);
  });
});
suite('SHA256 update', function (suite) {
  setup(function () {
    suite.cryptoApi = new _src_hasher_sha256__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]();
    suite.cryptoApi.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(''));
    suite.hash = Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(suite.cryptoApi.finalize());
    suite.cryptoApi = new _src_hasher_sha256__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]();
    suite.cryptoJS = CryptoJS.algo.SHA256.create();
    suite.jsSHA = new jsSHA('SHA-256', 'TEXT');
  });
  bench('CryptoApi', function () {
    suite.cryptoApi.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(suite.hash));
  });
  bench('CryptoJS', function () {
    suite.cryptoJS.update(suite.hash);
  });
  bench('jsSHA', function () {
    suite.jsSHA.update(suite.hash);
  });
});
suite('SHA512 with HEX result', function (suite) {
  setup(function () {
    var sha512 = new _src_hasher_sha512__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]();
    sha512.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(''));
    suite.hash = Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(sha512.finalize());
  });
  bench('CryptoApi', function () {
    suite.tmp = new _src_hasher_sha512__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]();
    suite.tmp.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(suite.hash));
    Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(suite.tmp.finalize());
  });
  bench('CryptoJS', function () {
    CryptoJS.enc.Hex.stringify(CryptoJS.SHA512(suite.hash));
  });
  bench('jsHashes', function () {
    new Hashes.SHA512().hex(suite.hash);
  });
  bench('jsSHA', function () {
    suite.tmp = new jsSHA('SHA-512', 'TEXT');
    suite.tmp.update(suite.hash);
    suite.tmp.getHash('HEX');
  });
});
suite('SHA512 update', function (suite) {
  setup(function () {
    suite.cryptoApi = new _src_hasher_sha512__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]();
    suite.cryptoApi.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(''));
    suite.hash = Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_5__[/* toHex */ "a"])(suite.cryptoApi.finalize());
    suite.cryptoApi = new _src_hasher_sha512__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]();
    suite.cryptoJS = CryptoJS.algo.SHA512.create();
    suite.jsSHA = new jsSHA('SHA-512', 'TEXT');
  });
  bench('CryptoApi', function () {
    suite.cryptoApi.update(Object(_src_encoder_utf__WEBPACK_IMPORTED_MODULE_4__[/* fromUtf */ "a"])(suite.hash));
  });
  bench('CryptoJS', function () {
    suite.cryptoJS.update(suite.hash);
  });
  bench('jsSHA', function () {
    suite.jsSHA.update(suite.hash);
  });
});

/***/ }),

/***/ 5:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _hasher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Hasher for 32 bit little endian blocks
 * @interface
 */

var Hasher32le =
/*#__PURE__*/
function (_Hasher) {
  _inherits(Hasher32le, _Hasher);

  /**
   * @param {Object} [options]
   */
  function Hasher32le(options) {
    var _this;

    _classCallCheck(this, Hasher32le);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hasher32le).call(this, options));
    /**
     * Current block (only for speed optimization)
     * @private
     * @type {number[]}
     */

    _this.blockUnits = [];
    return _this;
  }
  /**
   * Process ready blocks
   *
   * @protected
   */


  _createClass(Hasher32le, [{
    key: "process",
    value: function process() {
      while (this.state.message.length >= this.blockSizeInBytes) {
        this.blockUnits = [];

        for (var b = 0; b < this.blockSizeInBytes; b += 4) {
          this.blockUnits.push(this.state.message.charCodeAt(b) | this.state.message.charCodeAt(b + 1) << 8 | this.state.message.charCodeAt(b + 2) << 16 | this.state.message.charCodeAt(b + 3) << 24);
        }

        this.state.message = this.state.message.substr(this.blockSizeInBytes);
        this.processBlock(this.blockUnits);
      }
    }
    /**
     * Process ready blocks
     *
     * @protected
     * @param {number[]} M
     */

  }, {
    key: "processBlock",
    value: function processBlock(M) {}
    /**
     * Get hash from state
     *
     * @protected
     * @param {number} [size=this.state.hash.length] - Limit hash size (in chunks)
     * @returns {string}
     */

  }, {
    key: "getStateHash",
    value: function getStateHash(size) {
      size = size || this.state.hash.length;
      var hash = '';

      for (var i = 0; i < size; i++) {
        hash += String.fromCharCode(this.state.hash[i] & 0xff) + String.fromCharCode(this.state.hash[i] >> 8 & 0xff) + String.fromCharCode(this.state.hash[i] >> 16 & 0xff) + String.fromCharCode(this.state.hash[i] >> 24 & 0xff);
      }

      return hash;
    }
    /**
     * Add to message cumulative size of message in bits
     *
     * @protected
     */

  }, {
    key: "addLengthBits",
    value: function addLengthBits() {
      // @todo fix length to 64 bit
      this.state.message += String.fromCharCode(this.state.length << 3 & 0xff) + String.fromCharCode(this.state.length >> 5 & 0xff) + String.fromCharCode(this.state.length >> 13 & 0xff) + String.fromCharCode(this.state.length >> 21 & 0xff) + String.fromCharCode(this.state.length >> 29 & 0xff) + "\x00\x00\x00";
    }
  }]);

  return Hasher32le;
}(_hasher__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Hasher32le);

/***/ }),

/***/ 6:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _hasher32be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Transform constants

/** @type {number[]} */

var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];
/**
 * Calculates [SHA512 (SHA384)](https://tools.ietf.org/html/rfc4634) hash
 * [SHA512/t (SHA512/256 SHA512/224)](http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf)
 *
 * @example <caption>Calculates SHA512 hash from string "message" - ES6 style</caption>
 * import Sha512 from "crypto-api/src/hasher/sha512";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Sha512();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SHA512 hash from UTF string "message" - ES6 style</caption>
 * import Sha512 from "crypto-api/src/hasher/sha512";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Sha512();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SHA512 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('sha512');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates SHA512 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('sha512', 'message'));
 * </script>
 */

var Sha512 =
/*#__PURE__*/
function (_Hasher32be) {
  _inherits(Sha512, _Hasher32be);

  /**
   * @param {Object} [options]
   * @param {number} [options.rounds=160] - Number of rounds (Must be greater than 32)
   * @param {number} [options.length=512] - Length of hash result (Can be from 32 to 480 with step 32)
   *
   * | Hash type  | Length |
   * |------------|--------|
   * | sha384     | 384    |
   * | sha512     | 512    |
   * | sha512/224 | 224    |
   * | sha512/256 | 256    |
   */
  function Sha512(options) {
    var _this;

    _classCallCheck(this, Sha512);

    options = options || {};
    options.length = options.length || 512;
    options.rounds = options.rounds || 160;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sha512).call(this, options));
    /**
     * Size of block in units
     * @ignore
     * @type {number}
     */

    _this.blockSize = 32;
    /**
     * Size of block in bytes
     * @ignore
     * @type {number}
     */

    _this.blockSizeInBytes = _this.blockSize * _this.unitSize;
    /**
     * Working variable (only for speed optimization)
     * @private
     * @ignore
     * @type {number[]}
     */

    _this.W = new Array(160);
    return _this;
  }
  /**
   * Reset hasher to initial state
   */


  _createClass(Sha512, [{
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(Sha512.prototype), "reset", this).call(this);

      switch (this.options.length) {
        case 384:
          this.state.hash = [0xcbbb9d5d | 0, 0xc1059ed8 | 0, 0x629a292a | 0, 0x367cd507 | 0, 0x9159015a | 0, 0x3070dd17 | 0, 0x152fecd8 | 0, 0xf70e5939 | 0, 0x67332667 | 0, 0xffc00b31 | 0, 0x8eb44a87 | 0, 0x68581511 | 0, 0xdb0c2e0d | 0, 0x64f98fa7 | 0, 0x47b5481d | 0, 0xbefa4fa4 | 0];
          break;

        case 512:
          this.state.hash = [0x6a09e667 | 0, 0xf3bcc908 | 0, 0xbb67ae85 | 0, 0x84caa73b | 0, 0x3c6ef372 | 0, 0xfe94f82b | 0, 0xa54ff53a | 0, 0x5f1d36f1 | 0, 0x510e527f | 0, 0xade682d1 | 0, 0x9b05688c | 0, 0x2b3e6c1f | 0, 0x1f83d9ab | 0, 0xfb41bd6b | 0, 0x5be0cd19 | 0, 0x137e2179 | 0];
          break;

        default:
          var hasher = new Sha512();

          for (var i = 0; i < 16; i++) {
            hasher.state.hash[i] = hasher.state.hash[i] ^ 0xa5a5a5a5;
          }

          hasher.update('SHA-512/' + this.options.length);
          var hash = hasher.finalize();
          this.state.hash = [];

          for (var b = 0; b < 64; b += 4) {
            this.state.hash.push(hash.charCodeAt(b) << 24 | hash.charCodeAt(b + 1) << 16 | hash.charCodeAt(b + 2) << 8 | hash.charCodeAt(b + 3));
          }

      }
    }
    /**
     * Process ready blocks
     *
     * @protected
     * @ignore
     * @param {number[]} block - Block
     */

  }, {
    key: "processBlock",
    value: function processBlock(block) {
      // Working variables
      var ah = this.state.hash[0];
      var al = this.state.hash[1];
      var bh = this.state.hash[2];
      var bl = this.state.hash[3];
      var ch = this.state.hash[4];
      var cl = this.state.hash[5];
      var dh = this.state.hash[6];
      var dl = this.state.hash[7];
      var eh = this.state.hash[8];
      var el = this.state.hash[9];
      var fh = this.state.hash[10];
      var fl = this.state.hash[11];
      var gh = this.state.hash[12];
      var gl = this.state.hash[13];
      var hh = this.state.hash[14];
      var hl = this.state.hash[15];
      var s0h, s0l, s1h, s1l; // Calculate hash

      for (var i = 0; i < this.options.rounds; i += 2) {
        if (i < 32) {
          this.W[i] = block[i];
          this.W[i + 1] = block[i + 1];
        } else {
          s0h = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64hi */ "c"])(this.W[i - 30], this.W[i - 29], 1) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64hi */ "c"])(this.W[i - 30], this.W[i - 29], 8) ^ this.W[i - 30] >>> 7;
          s0l = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64lo */ "d"])(this.W[i - 30], this.W[i - 29], 1) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64lo */ "d"])(this.W[i - 30], this.W[i - 29], 8) ^ (this.W[i - 29] >>> 7 | this.W[i - 30] << 25);
          s1h = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64hi */ "c"])(this.W[i - 4], this.W[i - 3], 19) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64hi */ "c"])(this.W[i - 4], this.W[i - 3], 61) ^ this.W[i - 4] >>> 6;
          s1l = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64lo */ "d"])(this.W[i - 4], this.W[i - 3], 19) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64lo */ "d"])(this.W[i - 4], this.W[i - 3], 61) ^ (this.W[i - 3] >>> 6 | this.W[i - 4] << 26);
          var c1 = (this.W[i - 13] & 0xFFFF) + (this.W[i - 31] & 0xFFFF) + (s0l & 0xFFFF) + (s1l & 0xFFFF) | 0;
          var c2 = (this.W[i - 13] >>> 16) + (this.W[i - 31] >>> 16) + (s0l >>> 16) + (s1l >>> 16) + (c1 >>> 16) | 0;
          var c3 = (this.W[i - 14] & 0xFFFF) + (this.W[i - 32] & 0xFFFF) + (s0h & 0xFFFF) + (s1h & 0xFFFF) + (c2 >>> 16) | 0;
          var c4 = (this.W[i - 14] >>> 16) + (this.W[i - 32] >>> 16) + (s0h >>> 16) + (s1h >>> 16) + (c3 >>> 16) | 0;
          this.W[i] = (c4 << 16 | c3 & 0xFFFF) & 0xFFFFFFFF;
          this.W[i + 1] = (c2 << 16 | c1 & 0xFFFF) & 0xFFFFFFFF;
        }

        s0h = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64hi */ "c"])(ah, al, 28) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64hi */ "c"])(ah, al, 34) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64hi */ "c"])(ah, al, 39);
        s0l = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64lo */ "d"])(ah, al, 28) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64lo */ "d"])(ah, al, 34) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64lo */ "d"])(ah, al, 39);
        s1h = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64hi */ "c"])(eh, el, 14) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64hi */ "c"])(eh, el, 18) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64hi */ "c"])(eh, el, 41);
        s1l = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64lo */ "d"])(eh, el, 14) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64lo */ "d"])(eh, el, 18) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight64lo */ "d"])(eh, el, 41);
        var chh = eh & fh ^ ~eh & gh;
        var chl = el & fl ^ ~el & gl;
        var majh = ah & bh ^ ah & ch ^ bh & ch;
        var majl = al & bl ^ al & cl ^ bl & cl;
        var t1l = hl + s1l | 0;
        var t1h = hh + s1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0) | 0;
        t1l = t1l + chl | 0;
        t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0) | 0;
        t1l = t1l + K[i + 1] | 0;
        t1h = t1h + K[i] + (t1l >>> 0 < K[i + 1] >>> 0 ? 1 : 0) | 0;
        t1l = t1l + this.W[i + 1] | 0;
        t1h = t1h + this.W[i] + (t1l >>> 0 < this.W[i + 1] >>> 0 ? 1 : 0) | 0;
        var t2l = s0l + majl | 0;
        var t2h = s0h + majh + (t2l >>> 0 < s0l >>> 0 ? 1 : 0) | 0;
        hh = gh;
        hl = gl;
        gh = fh;
        gl = fl;
        fh = eh;
        fl = el;
        el = dl + t1l | 0;
        eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
        dh = ch;
        dl = cl;
        ch = bh;
        cl = bl;
        bh = ah;
        bl = al;
        al = t1l + t2l | 0;
        ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
      }

      this.state.hash[1] = this.state.hash[1] + al | 0;
      this.state.hash[0] = this.state.hash[0] + ah + (this.state.hash[1] >>> 0 < al >>> 0 ? 1 : 0) | 0;
      this.state.hash[3] = this.state.hash[3] + bl | 0;
      this.state.hash[2] = this.state.hash[2] + bh + (this.state.hash[3] >>> 0 < bl >>> 0 ? 1 : 0) | 0;
      this.state.hash[5] = this.state.hash[5] + cl | 0;
      this.state.hash[4] = this.state.hash[4] + ch + (this.state.hash[5] >>> 0 < cl >>> 0 ? 1 : 0) | 0;
      this.state.hash[7] = this.state.hash[7] + dl | 0;
      this.state.hash[6] = this.state.hash[6] + dh + (this.state.hash[7] >>> 0 < dl >>> 0 ? 1 : 0) | 0;
      this.state.hash[9] = this.state.hash[9] + el | 0;
      this.state.hash[8] = this.state.hash[8] + eh + (this.state.hash[9] >>> 0 < el >>> 0 ? 1 : 0) | 0;
      this.state.hash[11] = this.state.hash[11] + fl | 0;
      this.state.hash[10] = this.state.hash[10] + fh + (this.state.hash[11] >>> 0 < fl >>> 0 ? 1 : 0) | 0;
      this.state.hash[13] = this.state.hash[13] + gl | 0;
      this.state.hash[12] = this.state.hash[12] + gh + (this.state.hash[13] >>> 0 < gl >>> 0 ? 1 : 0) | 0;
      this.state.hash[15] = this.state.hash[15] + hl | 0;
      this.state.hash[14] = this.state.hash[14] + hh + (this.state.hash[15] >>> 0 < hl >>> 0 ? 1 : 0) | 0;
    }
    /**
     * Finalize hash and return result
     *
     * @returns {string}
     */

  }, {
    key: "finalize",
    value: function finalize() {
      this.addPaddingISO7816(this.state.message.length < 112 ? 112 - this.state.message.length | 0 : 240 - this.state.message.length | 0); // Real length for SHA512 is 128 bit instead of 64 bit

      this.state.message += "\x00\x00\x00\x00\x00\x00\x00\x00";
      this.addLengthBits();
      this.process();
      return this.getStateHash(this.options.length / 32 | 0);
    }
  }]);

  return Sha512;
}(_hasher32be__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Sha512);

/***/ }),

/***/ 7:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _hasher32be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Transform constants

/** @type {number[]} */

var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
/**
 * Calculates [SHA256 (SHA224)](https://tools.ietf.org/html/rfc4634) hash
 *
 * @example <caption>Calculates SHA256 hash from string "message" - ES6 style</caption>
 * import Sha256 from "crypto-api/src/hasher/sha256";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Sha256();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SHA256 hash from UTF string "message" - ES6 style</caption>
 * import Sha256 from "crypto-api/src/hasher/sha256";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Sha256();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SHA256 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('sha256');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates SHA256 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('sha256', 'message'));
 * </script>
 */

var Sha256 =
/*#__PURE__*/
function (_Hasher32be) {
  _inherits(Sha256, _Hasher32be);

  /**
   * @param {Object} [options]
   * @param {number} [options.rounds=64] - Number of rounds (Must be greater than 16)
   * @param {number} [options.length=256] - Length of hash result
   *
   * | Hash type | Length |
   * |-----------|--------|
   * | sha224    | 224    |
   * | sha256    | 256    |
   */
  function Sha256(options) {
    var _this;

    _classCallCheck(this, Sha256);

    options = options || {};
    options.length = options.length || 256;
    options.rounds = options.rounds || 64;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sha256).call(this, options));
    /**
     * Working variable (only for speed optimization)
     * @private
     * @ignore
     * @type {number[]}
     */

    _this.W = new Array(64);
    return _this;
  }
  /**
   * Reset hasher to initial state
   */


  _createClass(Sha256, [{
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(Sha256.prototype), "reset", this).call(this);

      switch (this.options.length) {
        case 224:
          this.state.hash = [0xc1059ed8 | 0, 0x367cd507 | 0, 0x3070dd17 | 0, 0xf70e5939 | 0, 0xffc00b31 | 0, 0x68581511 | 0, 0x64f98fa7 | 0, 0xbefa4fa4 | 0];
          break;

        default:
          this.state.hash = [0x6a09e667 | 0, 0xbb67ae85 | 0, 0x3c6ef372 | 0, 0xa54ff53a | 0, 0x510e527f | 0, 0x9b05688c | 0, 0x1f83d9ab | 0, 0x5be0cd19 | 0];
      }
    }
    /**
     * Process ready blocks
     *
     * @protected
     * @ignore
     * @param {number[]} block - Block
     */

  }, {
    key: "processBlock",
    value: function processBlock(block) {
      // Working variables
      var a = this.state.hash[0] | 0;
      var b = this.state.hash[1] | 0;
      var c = this.state.hash[2] | 0;
      var d = this.state.hash[3] | 0;
      var e = this.state.hash[4] | 0;
      var f = this.state.hash[5] | 0;
      var g = this.state.hash[6] | 0;
      var h = this.state.hash[7] | 0; // Calculate hash

      for (var i = 0; i < this.options.rounds; i++) {
        if (i < 16) {
          this.W[i] = block[i] | 0;
        } else {
          this.W[i] = this.W[i - 16] + (Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight */ "b"])(this.W[i - 15], 7) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight */ "b"])(this.W[i - 15], 18) ^ this.W[i - 15] >>> 3) + this.W[i - 7] + (Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight */ "b"])(this.W[i - 2], 17) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight */ "b"])(this.W[i - 2], 19) ^ this.W[i - 2] >>> 10) | 0;
        }

        var t1 = h + (Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight */ "b"])(e, 6) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight */ "b"])(e, 11) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight */ "b"])(e, 25)) + (e & f ^ ~e & g) + K[i] + this.W[i] | 0;
        var t2 = (Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight */ "b"])(a, 2) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight */ "b"])(a, 13) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight */ "b"])(a, 22)) + (a & b ^ a & c ^ b & c) | 0;
        h = g;
        g = f;
        f = e;
        e = d + t1 | 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 | 0;
      }

      this.state.hash[0] = this.state.hash[0] + a | 0;
      this.state.hash[1] = this.state.hash[1] + b | 0;
      this.state.hash[2] = this.state.hash[2] + c | 0;
      this.state.hash[3] = this.state.hash[3] + d | 0;
      this.state.hash[4] = this.state.hash[4] + e | 0;
      this.state.hash[5] = this.state.hash[5] + f | 0;
      this.state.hash[6] = this.state.hash[6] + g | 0;
      this.state.hash[7] = this.state.hash[7] + h | 0;
    }
    /**
     * Finalize hash and return result
     *
     * @returns {string}
     */

  }, {
    key: "finalize",
    value: function finalize() {
      this.addPaddingISO7816(this.state.message.length < 56 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0);
      this.addLengthBits();
      this.process();
      return this.getStateHash(this.options.length / 32 | 0);
    }
  }]);

  return Sha256;
}(_hasher32be__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Sha256);

/***/ })

/******/ })["default"];