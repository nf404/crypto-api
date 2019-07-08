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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
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

/***/ 41:
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_hasher_sha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _src_encoder_hex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);




var sliceSize = 4096;
var fileElement = document.getElementById('file');
fileElement.addEventListener("change", function (e) {
  var file = e.target.files[0];
  var hasher = new _src_hasher_sha256__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
  var fReader = new FileReader();
  var i = 0;
  var progress = document.getElementById('hash-progress');
  /**
   * @param {ProgressEvent|Event} evt
   */

  fReader.onloadend = function (evt) {
    if (evt.target.readyState === FileReader.DONE) {
      hasher.update(evt.target.result);
      var state = hasher.getState();
      document.getElementById('hash').innerHTML = Object(_src_encoder_hex__WEBPACK_IMPORTED_MODULE_1__[/* toHex */ "a"])(hasher.finalize());
      progress.setAttribute('aria-valuenow', (Math.round(1000 * Math.min(i + sliceSize, file.size) / file.size) / 10).toString());
      progress.style.width = (Math.round(1000 * Math.min(i + sliceSize, file.size) / file.size) / 10).toString() + '%';
      progress.innerHTML = (Math.round(1000 * Math.min(i + sliceSize, file.size) / file.size) / 10).toString() + '%';
      hasher.setState(state);

      if (i < file.size) {
        i += sliceSize;

        var _blob = file.slice(i, Math.min(i + sliceSize, file.size));

        fReader.readAsBinaryString(_blob);
      } else {
        progress.setAttribute('class', progress.getAttribute('class').replace(/ active/, ''));
      }
    }
  };

  progress.setAttribute('class', progress.getAttribute('class') + ' active');
  var blob = file.slice(i, Math.min(i + sliceSize, file.size));
  fReader.readAsBinaryString(blob);
});

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