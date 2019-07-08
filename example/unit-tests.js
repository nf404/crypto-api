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
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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

/***/ }),
/* 8 */
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



/** @type {number[]} */

var ZL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];
/** @type {number[]} */

var ZR = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];
/** @type {number[]} */

var SL = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];
/** @type {number[]} */

var SR = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
/**
 * Calculates [RIPEMD-160 (RIPEMD-128, RIPEMD-256, RIPEMD-320)](http://homes.esat.kuleuven.be/~bosselae/ripemd160.html) hash
 *
 * @example <caption>Calculates RIPEMD-160 hash from string "message" - ES6 style</caption>
 * import Ripemd from "crypto-api/src/hasher/ripemd";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Ripemd();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates RIPEMD-160 hash from UTF string "message" - ES6 style</caption>
 * import Ripemd from "crypto-api/src/hasher/ripemd";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Ripemd();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates RIPEMD-160 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('ripemd160');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates RIPEMD-160 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('ripemd160', 'message'));
 * </script>
 */

var Ripemd =
/*#__PURE__*/
function (_Hasher32le) {
  _inherits(Ripemd, _Hasher32le);

  /**
   * @param {Object} [options]
   * @param {number} [options.length=160] - Length of hash result
   *
   * | Hash type | Length |
   * |-----------|--------|
   * | ripemd128 | 128    |
   * | ripemd160 | 160    |
   * | ripemd256 | 256    |
   * | ripemd320 | 320    |
   */
  function Ripemd(options) {
    _classCallCheck(this, Ripemd);

    options = options || {};
    options.length = options.length || 160;
    return _possibleConstructorReturn(this, _getPrototypeOf(Ripemd).call(this, options));
  }
  /**
   * Reset hasher to initial state
   */


  _createClass(Ripemd, [{
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(Ripemd.prototype), "reset", this).call(this);

      switch (this.options.length) {
        case 128:
          this.state.hash = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476];
          /**
           * Process ready blocks
           *
           * @protected
           * @ignore
           * @method processBlock
           * @param {number[]} block - Block
           */

          this.processBlock = this.processBlock128;
          break;

        case 256:
          this.state.hash = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0x76543210, 0xfedcba98, 0x89abcdef, 0x01234567];
          this.processBlock = this.processBlock256;
          break;

        case 320:
          this.state.hash = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0, 0x76543210, 0xfedcba98, 0x89abcdef, 0x01234567, 0x3c2d1e0f];
          this.processBlock = this.processBlock320;
          break;

        default:
          // 160
          this.state.hash = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
          this.processBlock = this.processBlock160;
      }
    }
    /**
     * @private
     * @ignore
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {number}
     */

  }, {
    key: "processBlock128",

    /**
     * Process ready blocks
     *
     * @protected
     * @ignore
     * @param {number[]} block - Block
     */
    value: function processBlock128(block) {
      // Working variables
      var al = this.state.hash[0] | 0;
      var bl = this.state.hash[1] | 0;
      var cl = this.state.hash[2] | 0;
      var dl = this.state.hash[3] | 0;
      var ar = al;
      var br = bl;
      var cr = cl;
      var dr = dl;

      for (var i = 0; i < 64; i++) {
        var _t = al + block[ZL[i]] | 0;

        _t = _t + Ripemd.T(i, bl, cl, dl) | 0;
        _t = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(_t, SL[i]);
        al = dl;
        dl = cl;
        cl = bl;
        bl = _t;
        _t = ar + block[ZR[i]] | 0;
        _t = _t + Ripemd.T64(i, br, cr, dr) | 0;
        _t = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(_t, SR[i]);
        ar = dr;
        dr = cr;
        cr = br;
        br = _t;
      }

      var t = this.state.hash[1] + cl + dr | 0;
      this.state.hash[1] = this.state.hash[2] + dl + ar | 0;
      this.state.hash[2] = this.state.hash[3] + al + br | 0;
      this.state.hash[3] = this.state.hash[0] + bl + cr | 0;
      this.state.hash[0] = t;
    }
    /**
     * Process ready blocks
     *
     * @protected
     * @ignore
     * @param {number[]} block - Block
     */

  }, {
    key: "processBlock160",
    value: function processBlock160(block) {
      // Working variables
      var al = this.state.hash[0] | 0;
      var bl = this.state.hash[1] | 0;
      var cl = this.state.hash[2] | 0;
      var dl = this.state.hash[3] | 0;
      var el = this.state.hash[4] | 0;
      var ar = al;
      var br = bl;
      var cr = cl;
      var dr = dl;
      var er = el;

      for (var i = 0; i < 80; i++) {
        var _t2 = al + block[ZL[i]] | 0;

        _t2 = _t2 + Ripemd.T(i, bl, cl, dl) | 0;
        _t2 = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(_t2, SL[i]);
        _t2 = _t2 + el | 0;
        al = el;
        el = dl;
        dl = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(cl, 10);
        cl = bl;
        bl = _t2;
        _t2 = ar + block[ZR[i]] | 0;
        _t2 = _t2 + Ripemd.T80(i, br, cr, dr) | 0;
        _t2 = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(_t2, SR[i]);
        _t2 = _t2 + er | 0;
        ar = er;
        er = dr;
        dr = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(cr, 10);
        cr = br;
        br = _t2;
      }

      var t = this.state.hash[1] + cl + dr | 0;
      this.state.hash[1] = this.state.hash[2] + dl + er | 0;
      this.state.hash[2] = this.state.hash[3] + el + ar | 0;
      this.state.hash[3] = this.state.hash[4] + al + br | 0;
      this.state.hash[4] = this.state.hash[0] + bl + cr | 0;
      this.state.hash[0] = t;
    }
    /**
     * Process ready blocks
     *
     * @protected
     * @ignore
     * @param {number[]} block - Block
     */

  }, {
    key: "processBlock256",
    value: function processBlock256(block) {
      // Working variables
      var al = this.state.hash[0] | 0;
      var bl = this.state.hash[1] | 0;
      var cl = this.state.hash[2] | 0;
      var dl = this.state.hash[3] | 0;
      var ar = this.state.hash[4] | 0;
      var br = this.state.hash[5] | 0;
      var cr = this.state.hash[6] | 0;
      var dr = this.state.hash[7] | 0;

      for (var i = 0; i < 64; i += 1) {
        var t = al + block[ZL[i]] | 0;
        t = t + Ripemd.T(i, bl, cl, dl) | 0;
        t = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(t, SL[i]);
        al = dl;
        dl = cl;
        cl = bl;
        bl = t;
        t = ar + block[ZR[i]] | 0;
        t = t + Ripemd.T64(i, br, cr, dr) | 0;
        t = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(t, SR[i]);
        ar = dr;
        dr = cr;
        cr = br;
        br = t;

        switch (i) {
          case 15:
            t = al;
            al = ar;
            ar = t;
            break;

          case 31:
            t = bl;
            bl = br;
            br = t;
            break;

          case 47:
            t = cl;
            cl = cr;
            cr = t;
            break;

          case 63:
            t = dl;
            dl = dr;
            dr = t;
            break;
        }
      }

      this.state.hash[0] = this.state.hash[0] + al | 0;
      this.state.hash[1] = this.state.hash[1] + bl | 0;
      this.state.hash[2] = this.state.hash[2] + cl | 0;
      this.state.hash[3] = this.state.hash[3] + dl | 0;
      this.state.hash[4] = this.state.hash[4] + ar | 0;
      this.state.hash[5] = this.state.hash[5] + br | 0;
      this.state.hash[6] = this.state.hash[6] + cr | 0;
      this.state.hash[7] = this.state.hash[7] + dr | 0;
    }
    /**
     * Process ready blocks
     *
     * @protected
     * @ignore
     * @param {number[]} block - Block
     */

  }, {
    key: "processBlock320",
    value: function processBlock320(block) {
      // Working variables
      var al = this.state.hash[0] | 0;
      var bl = this.state.hash[1] | 0;
      var cl = this.state.hash[2] | 0;
      var dl = this.state.hash[3] | 0;
      var el = this.state.hash[4] | 0;
      var ar = this.state.hash[5] | 0;
      var br = this.state.hash[6] | 0;
      var cr = this.state.hash[7] | 0;
      var dr = this.state.hash[8] | 0;
      var er = this.state.hash[9] | 0;

      for (var i = 0; i < 80; i += 1) {
        var t = al + block[ZL[i]] | 0;
        t = t + Ripemd.T(i, bl, cl, dl) | 0;
        t = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(t, SL[i]);
        t = t + el | 0;
        al = el;
        el = dl;
        dl = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(cl, 10);
        cl = bl;
        bl = t;
        t = ar + block[ZR[i]] | 0;
        t = t + Ripemd.T80(i, br, cr, dr) | 0;
        t = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(t, SR[i]);
        t = t + er | 0;
        ar = er;
        er = dr;
        dr = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(cr, 10);
        cr = br;
        br = t;

        switch (i) {
          case 15:
            t = bl;
            bl = br;
            br = t;
            break;

          case 31:
            t = dl;
            dl = dr;
            dr = t;
            break;

          case 47:
            t = al;
            al = ar;
            ar = t;
            break;

          case 63:
            t = cl;
            cl = cr;
            cr = t;
            break;

          case 79:
            t = el;
            el = er;
            er = t;
            break;
        }
      }

      this.state.hash[0] = this.state.hash[0] + al | 0;
      this.state.hash[1] = this.state.hash[1] + bl | 0;
      this.state.hash[2] = this.state.hash[2] + cl | 0;
      this.state.hash[3] = this.state.hash[3] + dl | 0;
      this.state.hash[4] = this.state.hash[4] + el | 0;
      this.state.hash[5] = this.state.hash[5] + ar | 0;
      this.state.hash[6] = this.state.hash[6] + br | 0;
      this.state.hash[7] = this.state.hash[7] + cr | 0;
      this.state.hash[8] = this.state.hash[8] + dr | 0;
      this.state.hash[9] = this.state.hash[9] + er | 0;
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
    key: "F",
    value: function F(x, y, z) {
      return x ^ y ^ z;
    }
    /**
     * @private
     * @ignore
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {number}
     */

  }, {
    key: "G",
    value: function G(x, y, z) {
      return x & y | ~x & z;
    }
    /**
     * @private
     * @ignore
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {number}
     */

  }, {
    key: "H",
    value: function H(x, y, z) {
      return (x | ~y) ^ z;
    }
    /**
     * @private
     * @ignore
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {number}
     */

  }, {
    key: "I",
    value: function I(x, y, z) {
      return x & z | y & ~z;
    }
    /**
     * @private
     * @ignore
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {number}
     */

  }, {
    key: "J",
    value: function J(x, y, z) {
      return x ^ (y | ~z);
    }
    /**
     * @private
     * @ignore
     * @param {number} i
     * @param {number} bl
     * @param {number} cl
     * @param {number} dl
     * @returns {number}
     */

  }, {
    key: "T",
    value: function T(i, bl, cl, dl) {
      if (i < 16) {
        return this.F(bl, cl, dl);
      }

      if (i < 32) {
        return this.G(bl, cl, dl) + 0x5a827999 | 0;
      }

      if (i < 48) {
        return this.H(bl, cl, dl) + 0x6ed9eba1 | 0;
      }

      if (i < 64) {
        return this.I(bl, cl, dl) + 0x8f1bbcdc | 0;
      }

      return this.J(bl, cl, dl) + 0xa953fd4e | 0;
    }
    /**
     * @private
     * @ignore
     * @param {number} i
     * @param {number} br
     * @param {number} cr
     * @param {number} dr
     * @returns {number}
     */

  }, {
    key: "T64",
    value: function T64(i, br, cr, dr) {
      if (i < 16) {
        return this.I(br, cr, dr) + 0x50a28be6 | 0;
      }

      if (i < 32) {
        return this.H(br, cr, dr) + 0x5c4dd124 | 0;
      }

      if (i < 48) {
        return this.G(br, cr, dr) + 0x6d703ef3 | 0;
      }

      return this.F(br, cr, dr);
    }
    /**
     * @private
     * @ignore
     * @param {number} i
     * @param {number} br
     * @param {number} cr
     * @param {number} dr
     * @returns {number}
     */

  }, {
    key: "T80",
    value: function T80(i, br, cr, dr) {
      if (i < 16) {
        return this.J(br, cr, dr) + 0x50a28be6 | 0;
      }

      if (i < 32) {
        return this.I(br, cr, dr) + 0x5c4dd124 | 0;
      }

      if (i < 48) {
        return this.H(br, cr, dr) + 0x6d703ef3 | 0;
      }

      if (i < 64) {
        return this.G(br, cr, dr) + 0x7a6d76e9 | 0;
      }

      return this.F(br, cr, dr);
    }
  }]);

  return Ripemd;
}(_hasher32le__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Ripemd);

/***/ }),
/* 9 */
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



/**
 * The random table is the first part of the random digits from the book:
 * "A Million Random Digits with 100,000 Normal Deviates",
 * by the RAND Corporation, published by the Free Press, 1955
 *
 * @type {number[]}
 */

var randTable = [10097, 32533, 76520, 13586, 34673, 54876, 80959, 9117, 39292, 74945, 37542, 4805, 64894, 74296, 24805, 24037, 20636, 10402, 822, 91665, 8422, 68953, 19645, 9303, 23209, 2560, 15953, 34764, 35080, 33606, 99019, 2529, 9376, 70715, 38311, 31165, 88676, 74397, 4436, 27659, 12807, 99970, 80157, 36147, 64032, 36653, 98951, 16877, 12171, 76833, 66065, 74717, 34072, 76850, 36697, 36170, 65813, 39885, 11199, 29170, 31060, 10805, 45571, 82406, 35303, 42614, 86799, 7439, 23403, 9732, 85269, 77602, 2051, 65692, 68665, 74818, 73053, 85247, 18623, 88579, 63573, 32135, 5325, 47048, 90553, 57548, 28468, 28709, 83491, 25624, 73796, 45753, 3529, 64778, 35808, 34282, 60935, 20344, 35273, 88435, 98520, 17767, 14905, 68607, 22109, 40558, 60970, 93433, 50500, 73998, 11805, 5431, 39808, 27732, 50725, 68248, 29405, 24201, 52775, 67851, 83452, 99634, 6288, 98083, 13746, 70078, 18475, 40610, 68711, 77817, 88685, 40200, 86507, 58401, 36766, 67951, 90364, 76493, 29609, 11062, 99594, 67348, 87517, 64969, 91826, 8928, 93785, 61368, 23478, 34113, 65481, 17674, 17468, 50950, 58047, 76974, 73039, 57186, 40218, 16544, 80124, 35635, 17727, 8015, 45318, 22374, 21115, 78253, 14385, 53763, 74350, 99817, 77402, 77214, 43236, 210, 45521, 64237, 96286, 2655, 69916, 26803, 66252, 29148, 36936, 87203, 76621, 13990, 94400, 56418, 9893, 20505, 14225, 68514, 46427, 56788, 96297, 78822, 54382, 14598, 91499, 14523, 68479, 27686, 46162, 83554, 94750, 89923, 37089, 20048, 80336, 94598, 26940, 36858, 70297, 34135, 53140, 33340, 42050, 82341, 44104, 81949, 85157, 47954, 32979, 26575, 57600, 40881, 22222, 6413, 12550, 73742, 11100, 2040, 12860, 74697, 96644, 89439, 28707, 25815, 63606, 49329, 16505, 34484, 40219, 52563, 43651, 77082, 7207, 31790, 61196, 90446, 26457, 47774, 51924, 33729, 65394, 59593, 42582, 60527, 15474, 45266, 95270, 79953, 59367, 83848, 82396, 10118, 33211, 59466, 94557, 28573, 67897, 54387, 54622, 44431, 91190, 42592, 92927, 45973, 42481, 16213, 97344, 8721, 16868, 48767, 3071, 12059, 25701, 46670, 23523, 78317, 73208, 89837, 68935, 91416, 26252, 29663, 5522, 82562, 4493, 52494, 75246, 33824, 45862, 51025, 61962, 79335, 65337, 12472, 549, 97654, 64051, 88159, 96119, 63896, 54692, 82391, 23287, 29529, 35963, 15307, 26898, 9354, 33351, 35462, 77974, 50024, 90103, 39333, 59808, 8391, 45427, 26842, 83609, 49700, 13021, 24892, 78565, 20106, 46058, 85236, 1390, 92286, 77281, 44077, 93910, 83647, 70617, 42941, 32179, 597, 87379, 25241, 5567, 7007, 86743, 17157, 85394, 11838, 69234, 61406, 20117, 45204, 15956, 60000, 18743, 92423, 97118, 96338, 19565, 41430, 1758, 75379, 40419, 21585, 66674, 36806, 84962, 85207, 45155, 14938, 19476, 7246, 43667, 94543, 59047, 90033, 20826, 69541, 94864, 31994, 36168, 10851, 34888, 81553, 1540, 35456, 5014, 51176, 98086, 24826, 45240, 28404, 44999, 8896, 39094, 73407, 35441, 31880, 33185, 16232, 41941, 50949, 89435, 48581, 88695, 41994, 37548, 73043, 80951, 406, 96382, 70774, 20151, 23387, 25016, 25298, 94624, 61171, 79752, 49140, 71961, 28296, 69861, 2591, 74852, 20539, 387, 59579, 18633, 32537, 98145, 6571, 31010, 24674, 5455, 61427, 77938, 91936, 74029, 43902, 77557, 32270, 97790, 17119, 52527, 58021, 80814, 51748, 54178, 45611, 80993, 37143, 5335, 12969, 56127, 19255, 36040, 90324, 11664, 49883, 52079, 84827, 59381, 71539, 9973, 33440, 88461, 23356, 48324, 77928, 31249, 64710, 2295, 36870, 32307, 57546, 15020, 9994, 69074, 94138, 87637, 91976, 35584, 4401, 10518, 21615, 1848, 76938, 9188, 20097, 32825, 39527, 4220, 86304, 83389, 87374, 64278, 58044, 90045, 85497, 51981, 50654, 94938, 81997, 91870, 76150, 68476, 64659, 73189, 50207, 47677, 26269, 62290, 64464, 27124, 67018, 41361, 82760, 75768, 76490, 20971, 87749, 90429, 12272, 95375, 5871, 93823, 43178, 54016, 44056, 66281, 31003, 682, 27398, 20714, 53295, 7706, 17813, 8358, 69910, 78542, 42785, 13661, 58873, 4618, 97553, 31223, 8420, 28306, 3264, 81333, 10591, 40510, 7893, 32604, 60475, 94119, 1840, 53840, 86233, 81594, 13628, 51215, 90290, 28466, 68795, 77762, 20791, 91757, 53741, 61613, 62269, 50263, 90212, 55781, 76514, 83483, 47055, 89415, 92694, 397, 58391, 12607, 17646, 48949, 72306, 94541, 37408, 77513, 3820, 86864, 29901, 68414, 82774, 51908, 13980, 72893, 55507, 19502, 37174, 69979, 20288, 55210, 29773, 74287, 75251, 65344, 67415, 21818, 59313, 93278, 81757, 5686, 73156, 7082, 85046, 31853, 38452, 51474, 66499, 68107, 23621, 94049, 91345, 42836, 9191, 8007, 45449, 99559, 68331, 62535, 24170, 69777, 12830, 74819, 78142, 43860, 72834, 33713, 48007, 93584, 72869, 51926, 64721, 58303, 29822, 93174, 93972, 85274, 86893, 11303, 22970, 28834, 34137, 73515, 90400, 71148, 43643, 84133, 89640, 44035, 52166, 73852, 70091, 61222, 60561, 62327, 18423, 56732, 16234, 17395, 96131, 10123, 91622, 85496, 57560, 81604, 18880, 65138, 56806, 87648, 85261, 34313, 65861, 45875, 21069, 85644, 47277, 38001, 2176, 81719, 11711, 71602, 92937, 74219, 64049, 65584, 49698, 37402, 96397, 1304, 77586, 56271, 10086, 47324, 62605, 40030, 37438, 97125, 40348, 87083, 31417, 21815, 39250, 75237, 62047, 15501, 29578, 21826, 41134, 47143, 34072, 64638, 85902, 49139, 6441, 3856, 54552, 73135, 42742, 95719, 9035, 85794, 74296, 8789, 88156, 64691, 19202, 7638, 77929, 3061, 18072, 96207, 44156, 23821, 99538, 4713, 66994, 60528, 83441, 7954, 19814, 59175, 20695, 5533, 52139, 61212, 6455, 83596, 35655, 6958, 92983, 5128, 9719, 77433, 53783, 92301, 50498, 10850, 62746, 99599, 10507, 13499, 6319, 53075, 71839, 6410, 19362, 39820, 98952, 43622, 63147, 64421, 80814, 43800, 9351, 31024, 73167, 59580, 6478, 75569, 78800, 88835, 54486, 23768, 6156, 4111, 8408, 38508, 7341, 23793, 48763, 90822, 97022, 17719, 4207, 95954, 49953, 30692, 70668, 94688, 16127, 56196, 80091, 82067, 63400, 5462, 69200, 65443, 95659, 18288, 27437, 49632, 24041, 8337, 65676, 96299, 90836, 27267, 50264, 13192, 72294, 7477, 44606, 17985, 48911, 97341, 30358, 91307, 6991, 19072, 24210, 36699, 53728, 28825, 35793, 28976, 66252, 68434, 94688, 84473, 13622, 62126, 98408, 12843, 82590, 9815, 93146, 48908, 15877, 54745, 24591, 35700, 4754, 83824, 52692, 54130, 55160, 6913, 45197, 42672, 78601, 11883, 9528, 63011, 98901, 14974, 40344, 10455, 16019, 14210, 33712, 91342, 37821, 88325, 80851, 43667, 70883, 12883, 97343, 65027, 61184, 4285, 1392, 17974, 15077, 90712, 26769, 21778, 30976, 38807, 36961, 31649, 42096, 63281, 2023, 8816, 47449, 19523, 59515, 65122, 59659, 86283, 68258, 69572, 13798, 16435, 91529, 67245, 52670, 35583, 16563, 79246, 86686, 76463, 34222, 26655, 90802, 60584, 47377, 7500, 37992, 45134, 26529, 26760, 83637, 41326, 44344, 53853, 41377, 36066, 94850, 58838, 73859, 49364, 73331, 96240, 43642, 24637, 38736, 74384, 89342, 52623, 7992, 12369, 18601, 3742, 83873, 83080, 12451, 38992, 22815, 7759, 51777, 97377, 27585, 51972, 37867, 16444, 24334, 36151, 99073, 27493, 70939, 85130, 32552, 54846, 54759, 60790, 18157, 57178, 65762, 11161, 78576, 45819, 52979, 65130, 4860, 3991, 10461, 93716, 16894, 66083, 24653, 84609, 58232, 88618, 19161, 38555, 95554, 32886, 59780, 8355, 60860, 29735, 47762, 71299, 23853, 17546, 73704, 92052, 46215, 55121, 29281, 59076, 7936, 27954, 58909, 32643, 52861, 95819, 6831, 911, 98936, 76355, 93779, 80863, 514, 69572, 68777, 39510, 35905, 14060, 40619, 29549, 69616, 33564, 60780, 24122, 66591, 27699, 6494, 14845, 46672, 61958, 77100, 90899, 75754, 61196, 30231, 92962, 61773, 41839, 55382, 17267, 70943, 78038, 70267, 30532, 21704, 10274, 12202, 39685, 23309, 10061, 68829, 55986, 66485, 3788, 97599, 75867, 20717, 74416, 53166, 35208, 33374, 87539, 8823, 48228, 63379, 85783, 47619, 53152, 67433, 35663, 52972, 16818, 60311, 60365, 94653, 35075, 33949, 42614, 29297, 1918, 28316, 98953, 73231, 83799, 42402, 56623, 34442, 34994, 41374, 70071, 14736, 9958, 18065, 32960, 7405, 36409, 83232, 99385, 41600, 11133, 7586, 15917, 6253, 19322, 53845, 57620, 52606, 66497, 68646, 78138, 66559, 19640, 99413, 11220, 94747, 7399, 37408, 48509, 23929, 27482, 45476, 85244, 35159, 31751, 57260, 68980, 5339, 15470, 48355, 88651, 22596, 3152, 19121, 88492, 99382, 14454, 4504, 20094, 98977, 74843, 93413, 22109, 78508, 30934, 47744, 7481, 83828, 73788, 6533, 28597, 20405, 94205, 20380, 22888, 48893, 27499, 98748, 60530, 45128, 74022, 84617, 82037, 10268, 78212, 16993, 35902, 91386, 44372, 15486, 65741, 14014, 87481, 37220, 41849, 84547, 46850, 52326, 34677, 58300, 74910, 64345, 19325, 81549, 46352, 33049, 69248, 93460, 45305, 7521, 61318, 31855, 14413, 70951, 11087, 96294, 14013, 31792, 59747, 67277, 76503, 34513, 39663, 77544, 52701, 8337, 56303, 87315, 16520, 69676, 11654, 99893, 2181, 68161, 57275, 36898, 81304, 48585, 68652, 27376, 92852, 55866, 88448, 3584, 20857, 73156, 70284, 24326, 79375, 95220, 1159, 63267, 10622, 48391, 15633, 84924, 90415, 93614, 33521, 26665, 55823, 47641, 86225, 31704, 92694, 48297, 39904, 2115, 59589, 49067, 66821, 41575, 49767, 4037, 77613, 19019, 88152, 80, 20554, 91409, 96277, 48257, 50816, 97616, 38688, 32486, 45134, 63545, 59404, 72059, 43947, 51680, 43852, 59693, 25163, 1889, 70014, 15021, 41290, 67312, 71857, 15957, 68971, 11403, 65251, 7629, 37239, 33295, 5870, 1119, 92784, 26340, 18477, 65622, 36815, 43625, 18637, 37509, 82444, 99005, 4921, 73701, 14707, 93997, 64397, 11692, 5327, 82162, 20247, 81759, 45197, 25332, 83745, 22567, 4515, 25624, 95096, 67946, 48460, 85558, 15191, 18782, 16930, 33361, 83761, 60873, 43253, 84145, 60833, 25983, 1291, 41349, 20368, 7126, 14387, 6345, 80854, 9279, 43529, 6318, 38384, 74761, 41196, 37480, 51321, 92246, 80088, 77074, 88722, 56736, 66164, 49431, 66919, 31678, 72472, 8, 80890, 18002, 94813, 31900, 54155, 83436, 35352, 54131, 5466, 55306, 93128, 18464, 74457, 90561, 72848, 11834, 79982, 68416, 39528, 72484, 82474, 25593, 48545, 35247, 18619, 13674, 18611, 19241, 81616, 18711, 53342, 44276, 75122, 11724, 74627, 73707, 58319, 15997, 7586, 16120, 82641, 22820, 92904, 13141, 32392, 19763, 61199, 67940, 90767, 4235, 13574, 17200, 69902, 63742, 78464, 22501, 18627, 90872, 40188, 28193, 29593, 88627, 94972, 11598, 62095, 36787, 441, 58997, 34414, 82157, 86887, 55087, 19152, 23, 12302, 80783, 32624, 68691, 63439, 75363, 44989, 16822, 36024, 867, 76378, 41605, 65961, 73488, 67049, 9070, 93399, 45547, 94458, 74284, 5041, 49807, 20288, 34060, 79495, 4146, 52162, 90286, 54158, 34243, 46978, 35482, 59362, 95938, 91704, 30552, 4737, 21031, 75051, 93029, 47665, 64382, 99782, 93478, 94015, 46874, 32444, 48277, 59820, 96163, 64654, 25843, 41145, 42820, 74108, 88222, 88570, 74015, 25704, 91035, 1755, 14750, 48968, 38603, 62880, 87873, 95160, 59221, 22304, 90314, 72877, 17334, 39283, 4149, 11748, 12102, 80580, 41867, 17710, 59621, 6554, 7850, 73950, 79552, 17944, 5600, 60478, 3343, 25852, 58905, 57216, 39618, 49856, 99326, 66067, 42792, 95043, 52680, 46780, 56487, 9971, 59481, 37006, 22186, 54244, 91030, 45547, 70818, 59849, 96169, 61459, 21647, 87417, 17198, 30945, 57589, 31732, 57260, 47670, 7654, 46376, 25366, 94746, 49580, 69170, 37403, 86995, 90307, 94304, 71803, 26825, 5511, 12459, 91314, 8345, 88975, 35841, 85771, 8105, 59987, 87112, 21476, 14713, 71181, 27767, 43584, 85301, 88977, 29490, 69714, 73035, 41207, 74699, 9310, 13025, 14338, 54066, 15243, 47724, 66733, 47431, 43905, 31048, 56699, 80217, 36292, 98525, 24335, 24432, 24896, 43277, 58874, 11466, 16082, 10875, 62004, 90391, 61105, 57411, 6368, 53856, 30743, 8670, 84741, 54127, 57326, 26629, 19087, 24472, 88779, 30540, 27886, 61732, 75454, 60311, 42824, 37301, 42678, 45990, 43242, 17374, 52003, 70707, 70214, 49739, 71484, 92003, 98086, 76668, 73209, 59202, 11973, 2902, 33250, 78626, 51594, 16453, 94614, 39014, 97066, 83012, 9832, 25571, 77628, 66692, 13986, 99837, 582, 81232, 44987, 9504, 96412, 90193, 79568, 44071, 28091, 7362, 97703, 76447, 42537, 98524, 97831, 65704, 9514, 41468, 85149, 49554, 17994, 14924, 39650, 95294, 556, 70481, 6905, 94559, 37559, 49678, 53119, 70312, 5682, 66986, 34099, 74474, 20740, 41615, 70360, 64114, 58660, 90850, 64618, 80620, 51790, 11436, 38072, 50273, 93113, 41794, 86861, 24781, 89683, 55411, 85667, 77535, 99892, 41396, 80504, 90670, 8289, 40902, 5069, 95083, 6783, 28102, 57816, 25807, 24260, 71529, 78920, 72682, 7385, 90726, 57166, 98884, 8583, 6170, 97965, 88302, 98041, 21443, 41808, 68984, 83620, 89747, 98882, 60808, 54444, 74412, 81105, 1176, 28838, 36421, 16489, 18059, 51061, 80940, 44893, 10408, 36222, 80582, 71944, 92638, 40333, 67054, 16067, 19516, 90120, 46759, 71643, 13177, 55292, 21036, 82808, 77501, 97427, 49386, 54480, 23604, 23554, 21785, 41101, 91178, 10174, 29420, 90438, 6312, 88940, 15995, 69321, 47458, 64809, 98189, 81851, 29651, 84215, 60942, 307, 11897, 92674, 40405, 68032, 96717, 54244, 10701, 41393, 92329, 98932, 78284, 46347, 71209, 92061, 39448, 93136, 25722, 8564, 77936, 63574, 31384, 51924, 85561, 29671, 58137, 17820, 22751, 36518, 38101, 77756, 11657, 13897, 95889, 57067, 47648, 13885, 70669, 93406, 39641, 69457, 91339, 22502, 92613, 89719, 11947, 56203, 19324, 20504, 84054, 40455, 99396, 63680, 67667, 60631, 69181, 96845, 38525, 11600, 47468, 3577, 57649, 63266, 24700, 71594, 14004, 23153, 69249, 5747, 43321, 31370, 28977, 23896, 76479, 68562, 62342, 7589, 8899, 5985, 64281, 61826, 18555, 64937, 13173, 33365, 78851, 16499, 87064, 13075, 66847, 70495, 32350, 2985, 86716, 38746, 26313, 77463, 55387, 72681, 72461, 33230, 21529, 53424, 92581, 2262, 78438, 66276, 18396, 73538, 21032, 91050, 13058, 16218, 12470, 56500, 15292, 76139, 59526, 52113, 95362, 67011, 6651, 16136, 1016, 857, 55018, 56374, 35824, 71708, 49712, 97380, 10404, 55452, 34030, 60726, 75211, 10271, 36633, 68424, 58275, 61764, 97586, 54716, 50259, 46345, 87195, 46092, 26787, 60939, 89514, 11788, 68224, 23417, 73959, 76145, 30342, 40277, 11049, 72049, 15472, 50669, 48139, 36732, 46874, 37088, 73465, 9819, 58869, 35220, 12120, 86124, 51247, 44302, 60883, 52109, 21437, 36786, 49226, 77837, 19612, 78430, 11661, 94770, 77603, 65669, 86868, 12665, 30012, 75989, 39141, 77400, 28000, 64238, 73258, 71794, 31340, 26256, 66453, 37016, 64756, 80457, 8747, 12836, 3469, 50678, 3274, 43423, 66677, 82556, 92901, 51878, 56441, 22998, 29718, 38447, 6453, 25311, 7565, 53771, 3551, 90070, 9483, 94050, 45938, 18135, 36908, 43321, 11073, 51803, 98884, 66209, 6830, 53656, 14663, 56346, 71430, 4909, 19818, 5707, 27369, 86882, 53473, 7541, 53633, 70863, 3748, 12822, 19360, 49088, 59066, 75974, 63335, 20483, 43514, 37481, 58278, 26967, 49325, 43951, 91647, 93783, 64169, 49022, 98588, 9495, 49829, 59068, 38831, 4838, 83605, 92419, 39542, 7772, 71568, 75673, 35185, 89759, 44901, 74291, 24895, 88530, 70774, 35439, 46758, 70472, 70207, 92675, 91623, 61275, 35720, 26556, 95596, 20094, 73750, 85788, 34264, 1703, 46833, 65248, 14141, 53410, 38649, 6343, 57256, 61342, 72709, 75318, 90379, 37562, 27416, 75670, 92176, 72535, 93119, 56077, 6886, 18244, 92344, 31374, 82071, 7429, 81007, 47749, 40744, 56974, 23336, 88821, 53841, 10536, 21445, 82793, 24831, 93241, 14199, 76268, 70883, 68002, 3829, 17443, 72513, 76400, 52225, 92348, 62308, 98481, 29744, 33165, 33141, 61020, 71479, 45027, 76160, 57411, 13780, 13632, 52308, 77762, 88874, 33697, 83210, 51466, 9088, 50395, 26743, 5306, 21706, 70001, 99439, 80767, 68749, 95148, 94897, 78636, 96750, 9024, 94538, 91143, 96693, 61886, 5184, 75763, 47075, 88158, 5313, 53439, 14908, 8830, 60096, 21551, 13651, 62546, 96892, 25240, 47511, 58483, 87342, 78818, 7855, 39269, 566, 21220, 292, 24069, 25072, 29519, 52548, 54091, 21282, 21296, 50958, 17695, 58072, 68990, 60329, 95955, 71586, 63417, 35947, 67807, 57621, 64547, 46850, 37981, 38527, 9037, 64756, 3324, 4986, 83666, 9282, 25844, 79139, 78435, 35428, 43561, 69799, 63314, 12991, 93516, 23394, 94206, 93432, 37836, 94919, 26846, 2555, 74410, 94915, 48199, 5280, 37470, 93622, 4345, 15092, 19510, 18094, 16613, 78234, 50001, 95491, 97976, 38306, 32192, 82639, 54624, 72434, 92606, 23191, 74693, 78521, 104, 18248, 75583, 90326, 50785, 54034, 66251, 35774, 14692, 96345, 44579, 85932, 44053, 75704, 20840, 86583, 83944, 52456, 73766, 77963, 31151, 32364, 91691, 47357, 40338, 23435, 24065, 8458, 95366, 7520, 11294, 23238, 1748, 41690, 67328, 54814, 37777, 10057, 42332, 38423, 2309, 70703, 85736, 46148, 14258, 29236, 12152, 5088, 65825, 2463, 65533, 21199, 60555, 33928, 1817, 7396, 89215, 30722, 22102, 15880, 92261, 17292, 88190, 61781, 48898, 92525, 21283, 88581, 60098, 71926, 819, 59144, 224, 30570, 90194, 18329, 6999, 26857, 19238, 64425, 28108, 16554, 16016, 42, 83229, 10333, 36168, 65617, 94834, 79782, 23924, 49440, 30432, 81077, 31543, 95216, 64865, 13658, 51081, 35337, 74538, 44553, 64672, 90960, 41849, 93865, 44608, 93176, 34851, 5249, 29329, 19715, 94082, 14738, 86667, 43708, 66354, 93692, 25527, 56463, 99380, 38793, 85774, 19056, 13939, 46062, 27647, 66146, 63210, 96296, 33121, 54196, 34108, 75814, 85986, 71171, 15102, 28992, 63165, 98380, 36269, 60014, 7201, 62448, 46385, 42175, 88350, 46182, 49126, 52567, 64350, 16315, 53969, 80395, 81114, 54358, 64578, 47269, 15747, 78498, 90830, 25955, 99236, 43286, 91064, 99969, 95144, 64424, 77377, 49553, 24241, 8150, 89535, 8703, 91041, 77323, 81079, 45127, 93686, 32151, 7075, 83155, 10252, 73100, 88618, 23891, 87418, 45417, 20268, 11314, 50363, 26860, 27799, 49416, 83534, 19187, 8059, 76677, 2110, 12364, 71210, 87052, 50241, 90785, 97889, 81399, 58130, 64439, 5614, 59467, 58309, 87834, 57213, 37510, 33689, 1259, 62486, 56320, 46265, 73452, 17619, 56421, 40725, 23439, 41701, 93223, 41682, 45026, 47505, 27635, 56293, 91700, 4391, 67317, 89604, 73020, 69853, 61517, 51207, 86040, 2596, 1655, 9918, 45161, 222, 54577, 74821, 47335, 8582, 52403, 94255, 26351, 46527, 68224, 90183, 85057, 72310, 34963, 83462, 49465, 46581, 61499, 4844, 94626, 2963, 41482, 83879, 44942, 63915, 94365, 92560, 12363, 30246, 2086, 75036, 88620, 91088, 67691, 67762, 34261, 8769, 91830, 23313, 18256, 28850, 37639, 92748, 57791, 71328, 37110, 66538, 39318, 15626, 44324, 82827, 8782, 65960, 58167, 1305, 83950, 45424, 72453, 19444, 68219, 64733, 94088, 62006, 89985, 36936, 61630, 97966, 76537, 46467, 30942, 7479, 67971, 14558, 22458, 35148, 1929, 17165, 12037, 74558, 16250, 71750, 55546, 29693, 94984, 37782, 41659, 39098, 23982, 29899, 71594, 77979, 54477, 13764, 17315, 72893, 32031, 39608, 75992, 73445, 1317, 50525, 87313, 45191, 30214, 19769, 90043, 93478, 58044, 6949, 31176, 88370, 50274, 83987, 45316, 38551, 79418, 14322, 91065, 7841, 36130, 86602, 10659, 40859, 964, 71577, 85447, 61079, 96910, 72906, 7361, 84338, 34114, 52096, 66715, 51091, 86219, 81115, 49625, 48799, 89485, 24855, 13684, 68433, 70595, 70102, 71712, 88559, 92476, 32903, 68009, 58417, 87962, 11787, 16644, 72964, 29776, 63075, 13270, 84758, 49560, 10317, 28778, 23006, 31036, 84906, 81488, 17340, 74154, 42801, 27917, 89792, 62604, 62234, 13124, 76471, 51667, 37589, 87147, 24743, 48023, 6325, 79794, 35889, 13255, 4925, 99004, 70322, 60832, 76636, 56907, 56534, 72615, 46288, 36788, 93196, 68656, 66492, 35933, 52293, 47953, 95495, 95304, 50009, 83464, 28608, 38074, 74083, 9337, 7965, 65047, 36871, 59015, 21769, 30398, 44855, 1020, 80680, 59328, 8712, 48190, 45332, 27284, 31287, 66011, 9376, 86379, 74508, 33579, 77114, 92955, 23085, 92824, 3054, 25242, 16322, 48498, 9938, 44420, 13484, 52319, 58875, 2012, 88591, 52500, 95795, 41800, 95363, 54142, 17482, 32705, 60564, 12505, 40954, 46174, 64130, 63026, 96712, 79883, 39225, 52653, 69549, 36693, 59822, 22684, 31661, 88298, 15489, 16030, 42480, 15372, 38781, 71995, 77438, 91161, 10192, 7839, 62735, 99218, 25624, 2547, 27445, 69187, 55749, 32322, 15504, 73298, 51108, 48717, 92926, 75705, 89787, 96114, 99902, 37749, 96305, 12829, 70474, 838, 50385, 91711, 80370, 56504, 56857, 80906, 9018, 76569, 61072, 48568, 36491, 22587, 44363, 39592, 61546, 90181, 37348, 41665, 41339, 62106, 44203, 6732, 76111, 79840, 67999, 32231, 76869, 58652, 49983, 1669, 27464, 79553, 52855, 25988, 18087, 38052, 17529, 13607, 657, 76173, 43357, 77334, 24140, 53860, 2906, 89863, 44651, 55715, 26203, 65933, 51087, 98234, 40625, 45545, 63563, 89148, 82581, 4110, 66683, 99001, 9796, 47349, 65003, 66524, 81970, 71262, 14479, 31300, 8681, 58068, 44115, 40064, 77879, 23965, 69019, 73985, 19453, 26225, 97543, 37044, 7494, 85778, 35345, 61115, 92498, 49737, 64599, 7158, 82763, 25072, 38478, 57782, 75291, 62155, 52056, 4786, 11585, 71251, 25572, 79771, 93328, 66927, 54069, 58752, 26624, 50463, 77361, 29991, 96526, 2820, 91659, 12818, 96356, 49499, 1507, 40223, 9171, 83642, 21057, 2677, 9367, 38097, 16100, 19355, 6120, 15378, 56559, 69167, 30235, 6767, 66323, 78294, 14916, 19124, 88044, 16673, 66102, 86018, 29406, 75415, 22038, 27056, 26906, 25867, 14751, 92380, 30434, 44114, 6026, 79553, 55091, 95385, 41212, 37882, 46864, 54717, 97038, 53805, 64150, 70915, 63127, 63695, 41288, 38192, 72437, 75075, 18570, 52065, 8853, 30104, 79937, 66913, 53200, 84570, 78079, 28970, 53859, 37632, 80274, 35240, 32960, 74859, 7359, 55176, 3930, 38984, 35151, 82576, 82805, 94031, 12779, 90879, 24109, 25367, 77861, 9541, 85739, 69023, 64971, 99321, 7521, 95909, 43897, 71724, 92581, 5471, 64337, 98949, 3606, 78236, 78985, 29212, 57369, 34857, 67757, 58019, 58872, 96526, 28749, 56592, 37871, 72905, 70198, 57319, 54116, 47014, 18285, 33692, 72111, 60958, 96848, 17893, 40993, 50445, 14186, 76877, 87867, 50335, 9513, 44346, 26439, 55293, 6449, 44301, 63740, 40158, 72703, 88321, 85062, 57345, 66231, 15409, 3451, 95261, 43561, 15673, 28956, 90303, 62469, 82517, 43035, 36850, 15592, 64098, 59022, 31752, 4370, 50486, 11885, 23085, 41712, 80692, 48492, 16495, 99721, 36912, 28267, 27882, 16269, 64483, 11273, 2680, 1616, 46138, 54606, 14761, 5134, 45144, 63213, 49666, 27441, 86989, 29884, 54334, 6740, 8368, 80051, 81020, 17882, 74973, 74531, 94994, 24927, 64894, 22667, 20466, 82948, 66831, 47427, 76033, 31197, 59817, 20064, 61135, 28556, 29695, 80179, 74058, 18293, 9963, 35278, 13062, 83094, 23373, 90287, 33477, 48865, 30348, 70174, 11468, 25994, 25343, 22317, 1587, 30682, 1, 67814, 59557, 23362, 13746, 82244, 42093, 24671, 79458, 93730, 45488, 60234, 67098, 9899, 25775, 332, 36636, 57594, 19958, 85564, 58977, 12247, 60774, 66371, 69442, 20385, 14486, 91330, 50332, 46023, 75768, 59877, 60081, 92936, 72302, 75064, 85727, 52987, 5750, 19384, 33684, 78859, 80458, 69902, 34870, 88684, 49762, 40801, 86291, 18194, 90366, 82639, 53844, 96326, 65728, 48563, 26027, 52692, 62406, 76294, 41848, 63010, 69841, 29451, 36170, 21529, 16525, 64326, 22086, 24469, 57407, 96033, 37771, 31002, 18311, 93285, 31948, 14331, 58335, 15977, 80336, 81667, 27286, 24361, 61638, 57580, 95270, 46180, 76990, 53031, 94366, 2727, 49944, 19278, 5756, 51875, 53445, 33342, 1965, 7937, 10054, 97712, 87693, 58124, 46064, 39133, 77385, 9605, 65359, 70113, 90563, 86637, 94282, 12025, 31926, 24541, 23854, 58407, 32131, 92845, 20714, 27898, 26917, 50326, 35145, 50859, 72119, 95094, 29441, 42301, 62460, 75252, 94267, 38422, 73047, 24200, 85349, 72049, 91723, 97802, 98496, 12734, 73432, 10371, 57213, 53300, 80847, 46229, 7099, 72961, 13767, 65654, 31102, 82119, 96946, 65919, 81083, 3819, 57888, 57908, 16849, 77111, 41429, 92261, 45263, 1172, 55926, 78835, 27697, 48420, 58865, 41207, 21406, 8582, 10785, 36233, 12237, 7866, 13706, 92551, 11021, 63813, 71512, 65206, 37768, 94325, 14721, 20990, 54235, 71986, 5345, 56239, 52028, 1419, 7215, 55067, 11669, 21738, 66605, 69621, 69827, 8537, 18638, 60982, 28151, 98885, 76431, 25566, 3085, 23639, 30849, 63986, 73287, 26201, 36174, 14106, 54102, 57041, 16141, 64174, 3591, 90024, 73332, 31254, 17288, 59809, 25061, 51612, 47951, 16570, 43330, 79213, 11354, 55585, 19646, 99246, 37564, 32660, 20632, 21124, 60597, 69315, 31312, 57741, 85108, 21615, 24365, 27684, 16124, 33888, 14966, 35303, 69921, 15795, 4020, 67672, 86816, 63027, 84470, 45605, 44887, 26222, 79888, 58982, 22466, 98844, 48353, 60666, 58256, 31140, 93507, 69561, 6256, 88526, 18655, 865, 75247, 264, 65957, 98261, 72706, 36396, 46065, 85700, 32121, 99975, 73627, 78812, 89638, 86602, 96758, 65099, 52777, 46792, 13790, 55240, 52002, 10313, 91933, 71231, 10053, 78416, 54563, 96004, 42215, 30094, 45958, 48437, 49591, 50483, 13422, 69108, 59952, 27896, 40450, 79327, 31962, 46456, 39260, 51479, 61882, 48181, 50691, 64709, 32902, 10676, 12083, 35771, 79656, 56667, 76783, 3937, 99859, 10362, 57411, 40986, 35045, 2838, 29255, 64230, 84418, 34988, 77644, 39892, 77327, 74129, 53444, 35487, 95803, 38640, 20383, 55402, 25793, 14213, 87082, 42837, 95030, 97198, 61608, 97723, 79390, 35290, 34683, 81419, 87133, 70447, 53127, 97146, 28299, 56763, 12868, 1145, 12147, 58158, 92124, 60934, 18414, 97510, 7056, 54488, 20719, 53743, 91037, 44797, 52110, 8512, 18991, 20129, 31441, 51449, 14661, 71126, 23180, 68124, 18807, 70997, 21913, 19594, 70355, 73637, 68266, 60775, 43164, 52643, 96363, 77989, 79332, 39890, 65379, 20405, 52935, 43816, 92740, 95319, 4538, 60660, 28982, 15328, 80475, 34690, 2293, 19646, 46524, 96627, 33159, 42081, 8816, 74931, 20674, 8697, 66169, 46460, 46326, 39923, 60625, 28386, 22919, 19415, 75766, 43668, 31626, 70301, 67053, 3949, 70082, 2303, 48642, 38429, 94053, 38770, 68137, 68441, 52928, 70244, 91954, 17401, 92693, 98342, 21451, 84988, 80487, 33807, 73797, 49494, 41878, 76635, 83227, 76618, 11946, 13451, 87591, 78381, 21407, 90038, 72638, 69692, 51599, 86413, 32019, 64856, 74730, 41531, 11064, 1790, 58817, 86400, 66213, 92599, 70905, 78324, 54326, 43659, 34206, 63132, 38837, 40210, 96346, 16967, 81619, 96503, 14881, 89405, 32205, 49508, 98425, 2451, 35423, 56072, 36810, 30332, 85998, 49358, 92748, 84147, 79835, 94867, 41224, 61794, 35066, 82220, 66684, 20096, 2754, 41731, 37068, 32753, 91059, 13407, 5607, 69384, 53329, 95909, 44968, 11397, 92973, 50014, 92997, 80968, 93761, 57598, 74703, 7768, 37978, 73873, 33475, 9720, 97852, 98449, 48722, 84977, 11271, 11728, 68318, 22312, 78792, 87508, 88466, 72976, 47099, 84126, 38595, 85124, 64405, 90020, 7492, 52413, 95111, 34455, 86311, 68892, 1074, 60274, 28136, 19328, 38161, 57475, 13771, 63562, 84207, 94121, 18901, 52768, 33801, 82087, 86091, 59969, 90398, 56870, 55756, 78841, 98450, 54165, 55106, 50343, 70519, 14567, 36780, 55450, 19606, 83749, 67562, 64765, 38543, 16585, 86841, 73742, 8766, 39252, 75678, 75379, 78760, 37279, 15280, 13558, 95916, 89759, 76686, 76467, 67147, 63110, 94008, 8037, 35263, 53710, 16667, 79008, 11231, 29397, 67136, 18601, 64502, 90228, 89109, 72849, 22711, 65547, 34542, 26686, 81678, 87765, 77654, 23664, 96352, 14106, 32938, 28083, 18633, 80286, 65507, 46197, 52722, 75476, 77816, 47204, 34876, 45963, 79262, 90181, 84041, 3745, 90041, 30780, 27226, 92847, 85572, 15308, 80688, 5761, 82638, 13464, 23683, 81015, 54214, 64175, 43701, 86845, 15569, 50687, 52679, 87696, 8285, 97444, 47599, 94472, 64150, 87753, 68652, 60726, 26213, 17320, 64553, 81285, 98126, 12158, 52095, 64833, 492, 35817, 55571, 91300, 97812, 37507, 4209, 53515, 64342, 21223, 16662, 43265, 68219, 3529, 43636, 68417, 53640, 95326, 93381, 37113, 80751, 76469, 96677, 43054, 22937, 31954, 13266, 34140, 27253, 2734, 99070, 60077, 57988, 93211, 92795, 83795, 57477, 3941, 39007, 14619, 38320, 93449, 31336, 25279, 97030, 26245, 47394, 39475, 90621, 23820, 29344, 94859, 91604, 14033, 41868, 14816, 4075, 66644, 87803, 97815, 99552, 78666, 3942, 8175, 22345, 19983, 76783, 99044, 20851, 84981, 59052, 77178, 72109, 76475, 21619, 73017, 6812, 56633, 50612, 55289, 4671, 84419, 94072, 94446, 80603, 32188, 93415, 23464, 43947, 43728, 74284, 67177, 57105, 31059, 10642, 13803, 69602, 46961, 66567, 19359, 84676, 63918, 40650, 12923, 15974, 79732, 20225, 92525, 71179, 4859, 91208, 60430, 5239, 61458, 24089, 68852, 60171, 29603, 42535, 86365, 93905, 28237, 45317, 60718, 82001, 41679, 20679, 56304, 70043, 87568, 21386, 59049, 78353, 48696, 77379, 55309, 23780, 28391, 5940, 55583, 81256, 59418, 97521, 32846, 70761, 90115, 45325, 5490, 65974, 11186, 15357, 3568, 450, 96644, 58976, 36211, 88240, 92457, 89200, 94696, 11370, 91157, 48487, 59501, 56983, 89795, 42789, 69758, 79701, 29511, 55968, 41472, 89474, 84344, 80517, 7485, 97523, 17264, 82840, 59556, 37119, 30985, 48866, 60605, 95719, 70417, 59083, 95137, 76538, 44155, 67286, 57897, 28262, 4052, 919, 86207, 79932, 44236, 10089, 44373, 65670, 44285, 6903, 20834, 49701, 95735, 21149, 3425, 17594, 31427, 14262, 32252, 68540, 39427, 44026, 47257, 45055, 95091, 8367, 28381, 57375, 41562, 83883, 27715, 10122, 67745, 46497, 28626, 87297, 36568, 39483, 11385, 63292, 92305, 78683, 6146, 81905, 15038, 38338, 51206, 65749, 34119, 71516, 74068, 51094, 6665, 91884, 66762, 11428, 70908, 21506, 480, 94183, 78484, 66507, 75901, 25728, 52539, 86806, 69944, 65036, 27882, 2530, 4918, 74351, 65737, 89178, 8791, 39342, 94963, 22581, 56917, 17541, 83578, 75376, 65202, 30935, 79270, 91986, 99286, 45236, 44720, 81915, 70881, 45886, 43213, 49789, 97081, 16075, 20517, 69980, 25310, 91953, 1759, 67635, 88933, 54558, 18395, 73375, 62251, 58871, 9870, 70538, 48936, 7757, 90374, 56631, 88862, 30487, 38794, 36079, 32712, 11130, 55451, 25137, 38785, 83558, 31960, 69473, 45950, 18225, 9871, 88502, 75179, 11551, 75664, 74321, 67351, 27703, 83717, 18913, 42470, 8816, 37627, 14288, 62831, 44047, 67612, 72738, 26995, 50933, 63758, 50003, 43693, 52661, 55852, 52372, 59042, 37595, 4931, 73622, 68387, 86478, 40997, 5245, 75300, 24902, 59609, 35653, 15970, 37681, 69365, 22236, 86374, 65550, 343, 98377, 35354, 65770, 15365, 41422, 71356, 16630, 40044, 19290, 66449, 53629, 79452, 71674, 30260, 97303, 6487, 62789, 13005, 70152, 22501, 49867, 89294, 59232, 31776, 54919, 99851, 5438, 1096, 72269, 50486, 16719, 6144, 82041, 38332, 64452, 31840, 99287, 59928, 25503, 8407, 46970, 45907, 99238, 74547, 19704, 72035, 26542, 54600, 79172, 58779, 35747, 78956, 11478, 41195, 58135, 63856, 33037, 45753, 60159, 25193, 71838, 7526, 7985, 60714, 88627, 75790, 38454, 96110, 39237, 19792, 34534, 70169, 24805, 63215, 38175, 38784, 38855, 24826, 50917, 25147, 17082, 26997, 32295, 10894, 21805, 65245, 85407, 37926, 69214, 38579, 84721, 23544, 88548, 65626, 75517, 69737, 55626, 52175, 21697, 19453, 16908, 82841, 24060, 40285, 19195, 80281, 89322, 15232, 70043, 60691, 86370, 91949, 19017, 83846, 77869, 14321, 95102, 87073, 71467, 31305, 64677, 80358, 52629, 79419, 22359, 87867, 48296, 50141, 46807, 82184, 95812, 84665, 74511, 59914, 4146, 90417, 58508, 62875, 17630, 21868, 9199, 30322, 33352, 43374, 25473, 4119, 63086, 14147, 14863, 38020, 44757, 98628, 57916, 22199, 11865, 42911, 62651, 78290, 9392, 77294, 63168, 21043, 17409, 13786, 27475, 75979, 89668, 43596, 74316, 84489, 54941, 95992, 45445, 41059, 55142, 15214, 42903, 16799, 88254, 95984, 48575, 77822, 21067, 57238, 35352, 96779, 89564, 23797, 99937, 46379, 27119, 16060, 30302, 95327, 12849, 38111, 97090, 7598, 78473, 63079, 18570, 72803, 70040, 91385, 96436, 96263, 17368, 56188, 85999, 50026, 36050, 73736, 13351, 48321, 28357, 51718, 65636, 72903, 21584, 21060, 39829, 15564, 4716, 14594, 22363, 97639, 65937, 17802, 31535, 42767, 98761, 30987, 57657, 33398, 63053, 25926, 20944, 19306, 81727, 2695, 97479, 79172, 72764, 66446, 78864, 12698, 15812, 97209, 38827, 91016, 91281, 57875, 45228, 49211, 69755, 99224, 43999, 62879, 8879, 80015, 74396, 57146, 64665, 31159, 6980, 79069, 37409, 75037, 69977, 85919, 42826, 6974, 61063, 97640, 13433, 92528, 91311, 8440, 38840, 22362, 93929, 1836, 36590, 75052, 89475, 15437, 65648, 99012, 70236, 12307, 83585, 414, 62851, 48787, 28447, 21702, 57033, 29633, 44760, 34165, 27548, 37516, 24343, 63046, 2081, 20378, 19510, 42226, 97134, 68739, 32982, 56455, 53129, 77693, 25022, 55534, 99375, 30086, 98001, 7432, 67126, 76656, 29347, 28492, 43108, 64736, 32278, 84816, 80440, 30461, 818, 9136, 1952, 48442, 91058, 92590, 10443, 5195, 34009, 32141, 62209, 43740, 54102, 76895, 98172, 31583, 4155, 66492, 58981, 16591, 11331, 6838, 3818, 77063, 12523, 45570, 68970, 70055, 77751, 73743, 71732, 4704, 61384, 57343, 66682, 44500, 89745, 10436, 67202, 36455, 42467, 88801, 91280, 1056, 27534, 81619, 79004, 25824, 66362, 33280, 20706, 31929, 57422, 18730, 96197, 22101, 47592, 2180, 18287, 82310, 60430, 59627, 26471, 7794, 60475, 76713, 45427, 89654, 14370, 81674, 41246, 98416, 8669, 48883, 77154, 9806, 94015, 60347, 20027, 8405, 33150, 27368, 53375, 70171, 59431, 14534, 34018, 85665, 77797, 17944, 49602, 74391, 48830, 55029, 10371, 94261, 16658, 68400, 44148, 28150, 40364, 90913, 73151, 64463, 50058, 78191, 84439, 82478, 62398, 3113, 17578, 12830, 6571, 95934, 9132, 25287, 78731, 80683, 67207, 76597, 42096, 34934, 76609, 52553, 47508, 71561, 8038, 83011, 72577, 95790, 40076, 20292, 32138, 61197, 95476, 23123, 26648, 13611, 48452, 39963, 85857, 4855, 27029, 1542, 72443, 53688, 82635, 56264, 7977, 23090, 93553, 65434, 12124, 91087, 87800, 95675, 99419, 44659, 30382, 55263, 82514, 86800, 16781, 65977, 65946, 13033, 93895, 4056, 75895, 47878, 91309, 51233, 81409, 46773, 69135, 56906, 84493, 34530, 84534, 38312, 54574, 92933, 77341, 20839, 36126, 1143, 35356, 35459, 7959, 98335, 53266, 36146, 78047, 50607, 22486, 63308, 8996, 96056, 39085, 26567, 6779, 62663, 30523, 47881, 41279, 49864, 82248, 78333, 29466, 48151, 41957, 93235, 53308, 22682, 90722, 54478, 7235, 34306, 15827, 20121, 96837, 6283, 80172, 66109, 92592, 48238, 76428, 94546, 45430, 16288, 74839, 740, 25553, 83767, 35900, 5998, 7493, 46755, 11449, 88824, 44906, 33143, 7454, 56652, 34755, 63992, 59674, 65131, 46358, 12799, 96988, 51158, 73176, 1184, 49925, 63519, 11785, 29073, 72850, 47997, 75172, 55187, 15313, 40725, 33225, 56643, 10465, 38583, 86440, 97967, 26401, 17078, 38765, 33454, 19136, 57712, 48446, 98790, 27315, 71074, 10157, 57946, 35582, 49383, 61324, 26572, 84503, 3496, 60449, 17962, 26017, 65651, 40400, 83246, 80056, 75306, 75147, 41863, 25581, 87530, 33193, 43294, 5065, 99644, 62771, 75986, 79005, 44924, 18703, 40889, 4403, 5862, 2571, 82500, 74200, 36170, 46836, 74642, 65471, 26815, 30937, 64946, 10160, 15544, 31962, 54015, 28853, 66533, 14573, 79398, 47391, 73165, 47805, 77589, 16881, 13423, 89452, 76992, 62509, 9796, 57540, 13486, 48855, 25546, 47589, 21012, 47388, 78428, 70196, 84413, 81026, 87597, 22445, 83769, 85937, 38321, 85485, 87359, 9839, 67228, 71179, 94372, 4446, 62801, 50775, 96179, 40646, 44272, 12417, 47199, 39701, 30665, 32775, 66525, 53558, 78882, 31939, 67209, 38906, 34533, 99914, 27719, 216, 99225, 96537, 3843, 90564, 91110, 51838, 30300, 9559, 37795, 94880, 11325, 44979, 89696, 28129, 29931, 89971, 46292, 92710, 11036, 74760, 75307, 12291, 49618, 16293, 92408, 67928, 80823, 32872, 25460, 66819, 35374, 4035, 99087, 61129, 11341, 39118, 10891, 37217, 63638, 75477, 30068, 42334, 57570, 6890, 59353, 89939, 37692, 15232, 20033, 32202, 22348, 2766, 96791, 58448, 92248, 5769, 96684, 67885, 99295, 47271, 38655, 59513, 96960, 31718, 8974, 16122, 20535, 52380, 29769, 70660, 57425, 50891, 75044, 84257, 73315, 38181, 28673, 93140, 26307, 82265, 78382, 19681, 56585, 8975, 76764, 39956, 83450, 84663, 89963, 71584, 57696, 30829, 60527, 64947, 34899, 28805, 28397, 91830, 51842, 99838, 39839, 66971, 67177, 74219, 35637, 35634, 93581, 81746, 29991, 81096, 94279, 2968, 62561, 2479, 82126, 25702, 67953, 88088, 50293, 83423, 86206, 39935, 23253, 43041, 48941, 85787, 8388, 6671, 43574, 84908, 67295, 33623, 55060, 28174, 48415, 2529, 22009, 24524, 5283, 30460, 32399, 80423, 56929, 40852, 69969, 88541, 5979, 91496, 64730, 57198, 83145, 39750, 3568, 54669, 98679, 4297, 51047, 31492, 47734, 31343, 31180, 232, 19707, 24823, 75079, 73943, 17997, 8446, 91252, 39879, 58682, 82972, 18417, 39203, 36681, 42895, 8459, 15618, 17941, 52594, 43277, 16530, 40052, 91100, 87422, 47230, 95699, 49794, 50492, 87439, 86354, 4546, 65333, 11057, 77727, 19748, 38722, 91821, 18107, 42125, 89239, 28847, 54623, 38783, 47803, 31414, 38450, 3697, 89186, 30579, 44188, 26532, 8420, 80723, 48100, 60748, 76330, 45832, 8311, 16051, 4475, 13400, 48527, 46073, 17439, 56498, 94632, 9021, 16871, 83366, 14896, 4219, 38375, 87890, 90217, 42370, 61028, 85101, 76771, 83715, 94737, 69973, 74187, 1958, 59691, 86712, 86570, 60984, 76342, 13648, 85250, 28323, 48379, 45141, 36277, 51845, 29039, 3553, 5128, 59866, 51281, 68124, 17007, 24729, 29710, 41439, 40574, 11774, 86746, 89698, 56020, 37810, 88972, 11361, 95583, 70786, 589, 74473, 87513, 17690, 61427, 72914, 32517, 1804, 97910, 6327, 30246, 33049, 2622, 41026, 80875, 41293, 16752, 84225, 84414, 37137, 68956, 8095, 64981, 28180, 38629, 76962, 23840, 17477, 75268, 48297, 70340, 57888, 13938, 38554, 86836, 2195, 30270, 55484, 53364, 54705, 41380, 56316, 37723, 234, 21424, 26664, 63804, 75139, 36534, 18579, 9833, 98849, 72762, 59767, 52497, 24227, 83152, 71794, 21398, 99456, 89215, 51632, 54799, 27973, 68568, 68465, 98500, 28681, 18369, 24279, 96335, 12874, 82160, 67202, 85199, 27908, 67022, 49810, 77929, 96212, 81153, 77884, 7032, 1671, 53362, 28119, 56786, 30883, 28540, 76029, 3774, 64611, 19736, 25589, 46569, 45206, 48215, 69523, 17423, 91807, 90039, 30393, 58319, 85098, 66519, 57571, 24541, 3562, 14400, 62731, 82534, 61477, 89731, 18421, 29861, 52829, 838, 78040, 43350, 74323, 82892, 84746, 28302, 13264, 7595, 134, 12933, 46831, 24864, 47275, 20527, 9110, 28485, 30326, 99826, 64005, 99308, 65779, 42760, 90066, 3974, 38688, 39968, 32604, 11694, 46262, 73262, 45405, 43923, 67397, 88228, 56405, 17839, 92073, 57622, 93328, 15442, 50186, 7570, 58001, 31000, 8915, 11467, 14793, 82691, 51238, 12485, 51745, 18192, 5985, 36826, 89434, 38669, 91592, 88799, 65621, 67237, 59541, 19657, 93402, 58705, 73553, 78280, 69125, 95591, 81168, 91927, 25976, 89077, 71690, 19404, 64603, 59752, 74698, 44233, 67602, 38615, 31303, 28650, 53700, 89819, 7783, 4351, 77451, 47350, 21234, 16016, 41532, 76508, 23063, 44993, 43983, 33356, 61715, 96485, 22121, 78004, 6316, 87896, 99289, 93981, 37850, 66128, 92735, 45064, 50924, 24204, 58816, 65290, 34392, 55567, 66416, 72353, 45775, 68590, 85685, 72683, 60090, 37149, 85347, 57414, 72336, 12979, 5720, 92754, 76911, 96883, 74420, 5220, 85815, 23557, 80567, 44365, 70254, 50864, 36619, 51479, 23281, 76428, 18580, 34240, 59289, 49076, 18439, 29522, 42541, 4024, 84446, 92434, 90407, 77241, 19690, 78143, 65919, 13699, 91844, 91241, 38361, 67171, 90551, 5709, 3474, 76025, 97043, 33834, 44638, 54040, 82797, 545, 38159, 16089, 35870, 89158, 55864, 98078, 50563, 36492, 10994, 85909, 9018, 19252, 73887, 67928, 60045, 70782, 11937, 4074, 53814, 46621, 52577, 94853, 45968, 73667, 65062, 73306, 76045, 78649, 91654, 53958, 96537, 95542, 67622, 54579, 17279, 67440, 56441, 20681, 64011, 52226, 96618, 32831, 60664, 67547, 39523, 2043, 59748, 1887, 69229, 94653, 99271, 98164, 62155, 9234, 47367, 13047, 6364, 35064, 10073, 6793, 80248, 29009, 44969, 11129, 17139, 79630, 89772, 26921, 56949, 23465, 30036, 17173, 82459, 96218, 60768, 76417, 24405, 18710, 68887, 82394, 69729, 82503, 40873, 41590, 67255, 30757, 9657, 91881, 34578, 9511, 5417, 58953, 18532, 10721, 22029, 48524, 47778, 881, 83489, 3464, 57462, 97459, 86689, 39755, 39547, 740, 36666, 7993, 31671, 86304, 12970, 73402, 52849, 31652, 79655, 11250, 18463, 57518, 20306, 25301, 1374, 51208, 33298, 87662, 61849, 60923, 68685, 69411, 39266, 80320, 34844, 89416, 81569, 83651, 35795, 40168, 33501, 1042, 58931, 3892, 85188, 74740, 85476, 23790, 33842, 89565, 53359, 25579, 59049, 62394, 72435, 12457, 21904, 18370, 97035, 57905, 9581, 91227, 92754, 37760, 1411, 7440, 87175, 88318, 63242, 85960, 56690, 12618, 30493, 11569, 73723, 7448, 58830, 157, 65814, 21118, 22140, 73793, 57855, 81830, 6795, 13183, 12625, 30635, 56429, 73216, 12342, 36722, 83886, 96828, 82870, 90954, 97614, 2370, 42160, 73370, 11944, 49067, 59452, 80495, 43911, 46712, 17033, 68037, 41963, 3874, 44856, 82985, 57453, 84358, 16120, 4454, 76624, 405, 62369, 55080, 61880, 51270, 87807, 10653, 36894, 70850, 35660, 234, 14705, 93418, 94084, 82856, 25384, 71555, 56754, 78315, 18291, 91656, 98079, 52384, 43306, 65205, 75903, 58701, 99496, 50048, 33557, 87793, 90857, 10143, 46726, 84284, 43635, 41213, 83845, 70986, 91408, 80220, 5728, 68890, 46577, 21152, 43759, 43301, 93661, 97252, 50106, 10099, 13722, 18572, 44024, 351, 18173, 23717, 85114, 85998, 57782, 63951, 53723, 86853, 63851, 79430, 49181, 46386, 69666, 55743, 76162, 71724, 40028, 94786, 34457, 16906, 90040, 30789, 40281, 94697, 96584, 81907, 4055, 53990, 66397, 80579, 42517, 78181, 39251, 9467, 67097, 95523, 66568, 63632, 71048, 15581, 39904, 75774, 77495, 75994, 29911, 65690, 41178, 47712, 70355, 16998, 56025, 5230, 10093, 71495, 34784, 70950, 54680, 57811, 53782, 39145, 36829, 85342, 40406, 35883, 45668, 3459, 29870, 78252, 70088, 70621, 67153, 5737, 40933, 91075, 93335, 86853, 15860, 81167, 91259, 16118, 52401, 83593, 84474, 2423, 75608, 39646, 90871, 70284, 82100, 96032, 5115, 63678, 2225, 88087, 58581, 44364, 57468, 21539, 13042, 64150, 63754, 5210, 87644, 54114, 64013, 63562, 41388, 32397, 74152, 23982, 71982, 71700, 33026, 66477, 47838, 46712, 39848, 35083, 65927, 97868, 11067, 76771, 71799, 43836, 41014, 97025, 93225, 8511, 63096, 26628, 73012, 12543, 76269, 99708, 2629, 49845, 73677, 19193, 14924, 57236, 95564, 15010, 59667, 73773, 78515, 2624, 99744, 13585, 33746, 58771, 94785, 62628, 99585, 11363, 80832, 59979, 9444, 78700, 2596, 85984, 69438, 16913, 96475, 93283, 18625, 77086, 45911, 39746, 64722, 39938, 43930, 54619, 302, 50384, 2738, 75714, 75249, 95439, 80714, 52555, 47266, 96190, 78750, 94973, 83669, 16479, 53163, 48071, 28000, 45011, 26733, 67132, 83362, 84162, 43028, 8415, 27236, 52651, 89059, 64844, 80910, 1676, 91752, 57815, 26264, 3415, 57532, 29981, 61200, 96036, 62600, 20068, 56530, 38487, 8432, 89514, 26883, 69165, 97237, 22361, 55276, 39902, 95927, 82190, 49269, 27212, 46095, 37106, 64254, 27460, 49572, 51700, 27679, 12574, 33891, 3867, 9925, 6476, 82018, 45094, 59014, 67113, 44192, 75, 23318, 79895, 70550, 81717, 28833, 30271, 15821, 14999, 88174, 62617, 57517, 55256, 50281, 51583, 96879, 5225, 42272, 5339, 20483, 57596, 41011, 75937, 22767, 50120, 95938, 49753, 63882, 99616, 69083, 38721, 73889, 80236, 99531, 23053, 71237, 48861, 59046, 76283, 60538, 19732, 93877, 30345, 64882, 66660, 17026, 70364, 45676, 8039, 96228, 89936, 59141, 95585, 89552, 97247, 59325, 27848, 80058, 15950, 61481, 90906, 40998, 44137, 16144, 66300, 44091, 50018, 81364, 18211, 60294, 76559, 20279, 27414, 10589, 39860, 23000, 31767, 95618, 56738, 50332, 16936, 70342, 92481, 30702, 76264, 62619, 68678, 62284, 83112, 93032, 55203, 52614, 36950, 41796, 45403, 79262, 2887, 53596, 61308, 20738, 34811, 27099, 90956, 65448, 3080, 75795, 29753, 97699, 80872, 23830, 85882, 74427, 99523, 74904, 28017, 45898, 57232, 48525, 7086, 26805, 74533, 92470, 18840, 76011, 93109, 14344, 55614, 50284, 15865, 19458, 35856, 13464, 53679, 64603, 51571, 56124, 79107, 29596, 89572, 78198, 57121, 73649, 8804, 87977, 87959, 70859, 40909, 77295, 87877, 75158, 62810, 92074, 23244, 59516, 50552, 31602, 41899, 6347, 27821, 68370, 48596, 88577, 30231, 25267, 84622, 31449, 12086, 56461, 22962, 78213, 62483, 93966, 60437, 52239, 58113, 32526, 38708, 81607, 57016, 1695, 90110, 4649, 59990, 23979, 3855, 10297, 46516, 96092, 82305, 30760, 78756, 4967, 82876, 4773, 86651, 16648, 53133, 82439, 78851, 49766, 24553, 15273, 36417, 1901, 33386, 76979, 25920, 33372, 2695, 11982, 40911, 6230, 91696, 43907, 17827, 30332, 89203, 32215, 91806, 23080, 49102, 9174, 11548, 54590, 75803, 66108, 73882, 62324, 26017, 72716, 33887, 1285, 31604, 71039, 24337, 53514, 58964, 89901, 22040, 92751, 12617, 37007, 5523, 61672, 62557, 98540, 26094, 60284, 19621, 96230, 38044, 6545, 9458, 42988, 2913, 86345, 67936, 90174, 40840, 44991, 24256, 34989, 74086, 13652, 68706, 1363, 4294, 88008, 78693, 83068, 94746, 221, 89299, 53186, 5930, 61889, 51341, 45412, 58860, 72568, 11381, 59785, 36887, 10690, 31347, 93326, 96267, 86987, 57565, 86836, 49071, 90331, 41248, 34629, 30240, 27270, 3864, 84308, 3035, 61369, 36902, 51017, 44409, 17120, 23823, 36460, 63359, 8333, 63173, 19134, 6493, 303, 18550, 26191, 19051, 81502, 66343, 6737, 90430, 65478, 58982, 82484, 16483, 47704, 44640, 68322, 44548, 72787, 2335, 28749, 39320, 5436, 98146, 56596, 812, 51445, 35533, 35478, 47573, 38414, 25542, 38032, 13442, 42983, 97207, 77854, 57806, 81616, 52828, 79429, 47389, 96795, 57764, 19605, 24767, 63253, 18809, 65093, 44449, 22952, 76872, 30983, 38948, 9310, 48336, 87651, 27110, 84427, 76209, 56412, 12760, 16747, 14551, 82626, 31224, 98636, 75100, 84882, 79479, 83420, 5347, 6803, 90063, 4617, 40257, 79183, 41766, 71873, 25242, 12275, 336, 40798, 42055, 74066, 69128, 32547, 76508, 32530, 42359, 89207, 49758, 58984, 92732, 15779, 7234, 28884, 28226, 50011, 35883, 99606, 45423, 76224, 75427, 85747, 33879, 97978, 57441, 927, 19164, 74716, 40702, 19715, 70917, 60344, 40236, 9019, 50577, 15598, 53136, 57285, 20536, 7539, 74832, 89184, 41501, 39447, 97422, 97041, 21913, 40581, 76081, 13089, 28776, 54164, 55736, 36263, 71841, 34488, 74988, 55467, 43322, 9214, 36746, 67981, 71877, 81683, 32461, 84091, 19422, 88366, 62054, 85664, 13409, 8003, 88276, 6989, 16607, 33633, 85349, 5784, 25950, 97998, 74110, 16699, 60184, 92818, 79705, 10381, 1474, 18656, 50434, 18232, 92132, 66537, 70141, 42854, 25120, 39581, 28249, 14215, 34810, 19767, 3409, 11807, 6566, 66138, 42997, 41999, 67504, 87117, 28961, 5000, 29673, 77726, 73225, 54753, 69712, 71576, 92337, 17713, 63185, 87923, 91889, 68351, 17712, 75532, 93849, 48280, 62219, 317, 25290, 29209, 90927, 92929, 92762, 60413, 2018, 31793, 76290, 73373, 80777, 60819, 77375, 57886, 47291, 99670, 32605, 29064, 99476, 80999, 31217, 35, 91300, 14892, 73653, 26593, 25305, 56797, 12837, 39560, 27582, 37253, 38531, 76489, 49946, 69108, 58687, 43092, 73807, 96282, 6648, 67431, 87124, 57694, 21660, 64002, 6, 33600, 30245, 60636, 80164, 9285, 61426, 4658, 54130, 14710, 76553, 1904, 93668, 63110, 98618, 5601, 32199, 74923, 98049, 49717, 55539, 35940, 58545, 43295, 35810, 45451, 38735, 42065, 66769, 69825, 45461, 83881, 67372, 67351, 90612, 79502, 69460, 23108, 74421, 82990, 46821, 40683, 71603, 55267, 48192, 50242, 79738, 96417, 6664, 19929, 23644, 41116, 51056, 219, 45086, 32747, 49492, 15399, 24874, 80825, 95928, 61457, 45813, 59037, 16136, 3953, 83583, 5910, 12654, 53630, 92997, 22168, 93491, 71897, 74579, 24022, 6278, 24049, 71670, 43044, 8474, 38572, 77402, 35800, 7455, 96177, 41653, 74493, 20802, 65843, 73050, 73349, 2638, 65813, 96209, 49196, 45007, 32207, 14097, 66059, 46681, 7534, 71263, 20582, 10171, 51514, 52142, 60961, 57951, 25637, 37860, 21683, 86190, 90434, 94481, 85697, 95344, 2606, 74095, 61133, 7472, 64777, 94050, 41482, 975, 23471, 76052, 82021, 87676, 91345, 20196, 2612, 86299, 44996, 40312, 65712, 46079, 88514, 8610, 3685, 63197, 9073, 53105, 86824, 28112, 99306, 40706, 66840, 83003, 51590, 52755, 32285, 68454, 85058, 13645, 23073, 24724, 52989, 71880, 21952, 44144, 74975, 76715, 7844, 46447, 86643, 75579, 29276, 10864, 83179, 36721, 19300, 35066, 29383, 47478, 56644, 33354, 31414, 17643, 92374, 85085, 88458, 87191, 85248, 34963, 76278, 53230, 13953, 76985, 70959, 36663, 5293, 32658, 56767, 56997, 76736, 6558, 64248, 11907, 29123, 78458, 17678, 63805, 89973, 5076, 39263, 54404, 4355, 64957, 74407, 99838, 18836, 78098, 6490, 74888, 73719, 80675, 86178, 56283, 33591, 96957, 38382, 18772, 74773, 71229, 2603, 52673, 44609, 14843, 58418, 18060, 95459, 626, 30914, 13550, 42195, 44863, 8871, 89182, 64446, 78422, 41140, 15312, 98274, 48168, 95651, 35562, 85386, 56252, 72136, 85088, 68761, 78434, 98143, 61330, 2446, 64409, 49406, 99127, 98626, 55095, 44808, 13594, 87370, 89472, 12833, 98932, 68064, 58193, 20225, 5192, 28425, 23978, 24542, 80845, 55858, 4015, 21454, 37346, 51007, 17202, 10242, 12682, 55933, 96922, 22280, 75597, 50227, 70712, 44236, 20470, 36320, 49339, 60536, 80083, 38880, 93327, 49522, 93585, 9918, 55268, 4671, 57526, 11457, 48424, 54610, 7211, 78610, 9473, 72923, 27347, 30057, 76968, 26177, 59367, 46172, 88951, 40229, 34921, 60405, 88959, 16779, 29547, 92231, 61997, 36002, 21080, 39795, 77221, 10012, 49748, 76900, 15964, 3803, 40260, 92351, 92844, 10288, 57483, 10881, 70408, 75688, 16610, 1638, 93082, 44282, 66849, 75702, 69428, 34047, 84968, 71281, 72328, 73143, 88672, 49802, 50639, 18129, 93659, 58389, 49095, 45971, 34196, 84609, 59222, 19332, 17777, 41004, 47057, 30688, 16039, 20906, 41477, 42915, 60877, 33864, 75195, 62294, 3371, 11672, 1370, 2486, 35553, 17907, 90621, 45136, 9722, 67635, 12114, 63055, 16004, 21625, 24321, 20491, 26881, 66259, 94287, 54751, 36242, 36557, 5842, 30687, 65418, 94608, 24741, 45887, 78800, 86912, 42076, 50287, 9284, 68891, 76368, 83094, 96302, 35997, 30761, 97081, 9501, 68887, 32876, 1705, 34260, 95065, 45528, 88241, 30402, 12318, 52430, 40139, 96986, 84900, 72408, 42027, 31676, 54382, 73370, 26184, 14024, 57444, 57660, 52173, 30274, 93448, 63273, 77681, 74946, 2099, 69091, 19372, 66961, 14595, 58642, 75760, 52253, 53148, 26074, 52293, 65359, 63971, 4833, 86492, 1227, 54505, 19515, 89889, 46933, 13364, 33883, 83389, 36952, 52505, 67513, 40071, 31001, 3105, 87912, 29610, 75108, 37363, 28479, 43546, 89992, 19550, 54863, 82633, 19209, 21548, 35022, 21960, 57961, 11815, 95867, 559, 26428, 69386, 57453, 70147, 73538, 49562, 46806, 64550, 36653, 25718, 68792, 31113, 7607, 48037, 71020, 22666, 65957, 11141, 39227, 7990, 19849, 65972, 74528, 40888, 55386, 95918, 92088, 91125, 53648, 66122, 138, 79933, 71058, 34826, 97725, 69513, 22915, 18246, 52244, 91161, 40861, 40374, 13239, 56162, 4703, 95851, 22824, 41271, 28202, 62852, 84238, 46625, 20031, 8524, 20077, 65817, 21174, 29279, 57712, 22401, 67500, 30980, 74485, 26480, 21343, 30031, 61921, 35744, 57308, 71196, 1865, 49234, 62616, 54021, 29008, 83672, 85839, 96836, 45077, 80900, 66906, 63526, 93824, 71820, 11033, 20183, 85704, 4683, 63512, 39144, 56880, 64424, 95979, 17709, 94849, 31771, 5737, 84286, 16757, 46256, 24478, 73180, 59978, 8254, 78963, 95437, 86351, 33824, 32540, 18357, 2668, 99260, 21284, 81351, 70961, 10255, 6911, 47394, 72408, 23827, 59865, 96395, 30665, 43699, 3593, 29165, 23388, 26628, 92402, 16731, 86740, 29493, 9069, 78653, 90094, 42735, 33682, 95041, 89887, 92369, 57949, 81585, 50593, 14698, 4737, 72551, 57271, 59433, 156, 33966, 58773, 59108, 49578, 18100, 59836, 73221, 21110, 1650, 11058, 47770, 66141, 84576, 58388, 40915, 94507, 32209, 17272, 65674, 95552, 25685, 5345, 36995, 36302, 7971, 67001, 62062, 75939, 36005, 26739, 56484, 46885, 66348, 87666, 78055, 44485, 82955, 85936, 9219, 1847, 92687, 72579, 45457, 78252, 98239, 40000, 75563, 92408, 17175, 78845, 32638, 26959, 35406, 59553, 57852, 7506, 9, 93172, 77713, 93880, 40981, 27924, 9678, 24538, 52426, 84852, 83781, 23712, 82490, 77890, 22482, 66668, 55850, 25644, 44972, 62275, 78089, 28894, 98685, 32998, 98766, 89119, 34355, 75127, 69797, 71419, 62067, 57990, 96514, 50603, 79807, 26135, 29207, 43632, 32905, 38513, 18924, 88872, 20758, 70232, 60425, 1116, 24077, 21369, 93541, 75329, 78656, 44251, 42014, 98154, 42552, 14575, 30765, 348, 1134, 71581, 68420, 78141, 21105, 63305, 9718, 54851, 65867, 8595, 47390, 39182, 51174, 41478, 64433, 59628, 31945, 87322, 78667, 95282, 5622, 26224, 19972, 97269, 98376, 14779, 51138, 49658, 45345, 4972, 52794, 15737, 496, 48939, 63485, 42780, 16061, 59631, 37171, 13483, 56058, 51093, 62290, 88227, 17400, 88433, 67363, 89507, 26482, 85964, 71336, 67799, 28342, 37747, 61722, 27180, 78755, 18603, 42953, 6606, 23875, 56766, 1932, 36113, 62807, 84012, 21103, 9685, 69662, 76755, 13701, 95168, 13169, 44726, 15284, 16702, 89617, 54397, 52052, 12835, 37741, 86434, 22400, 37947, 95763, 86337, 35189, 22756, 47473, 16618, 42479, 47405, 14055, 64262, 66670, 89692, 54032, 94591, 44149, 29854, 76691, 33263, 62048, 25116, 88598, 16119, 62116, 54517, 31883, 86707, 18895, 81790, 71294, 2684, 15292, 48107, 14341, 91416, 75609, 92564, 39987, 2283, 89970, 95855, 80970, 5432, 89860, 90293, 99851, 94648, 5598, 32171, 28793, 92305, 64244, 8277, 93391, 96717, 34464, 29838, 10664, 28050, 60122, 77934, 10758, 84922, 92220, 45071, 97697, 36368, 17792, 84792, 76594, 67319, 51886, 5665, 45201, 11348, 9254, 7510, 51039, 91683, 84500, 85338, 5555, 19633, 3870, 39576, 41486, 58524, 54508, 20707, 58504, 39642, 22454, 80069, 83455, 31043, 90794, 51934, 3295, 26582, 16300, 74990, 22197, 83310, 69642, 81113, 58558, 84833, 17105, 46659, 25003, 85749, 44829, 4103, 67516, 76458, 52392, 53546, 70291, 98846, 67315, 30686, 18555, 29755, 5923, 22732, 19501, 56181, 85351, 5023, 4808, 56911, 16793, 75336, 49712, 27723, 96974, 34321, 5454, 12862, 71924, 45928, 95697, 68664, 58183, 78104, 42483, 71204, 99628, 40642, 56410, 17350, 13396, 76724, 87509, 9158, 83708, 27298, 92651, 95086, 38851, 63558, 89810, 1580, 32518, 35795, 26514, 56322, 78635, 63731, 91428, 7247, 66460, 38671, 26799, 22549, 47991, 46064, 80467, 40083, 17141, 39152, 99872, 27561, 75389, 74778, 94893, 82935, 99076, 93419, 10474, 84436, 47536, 16719, 60136, 80566, 28404, 74525, 74212, 3704, 65516, 98197, 34210, 64140, 22238, 49939, 99542, 27481, 21992, 78181, 90060, 71365, 66935, 29578, 14961, 8569, 9454, 43308, 66753, 45972, 93572, 16382, 87320, 37183, 25478, 38164, 31997, 69856, 60898, 63968, 62264, 4799, 17591, 89937, 73905, 55890, 88285, 2448, 40398, 54180, 65869, 45155, 43407, 39105, 339, 51619, 20203, 21189, 68245, 76912, 1222, 76411, 82679, 7, 66047, 32043, 42627, 16638, 27019, 15248, 66444, 8249, 18790, 82150, 54084, 84469, 3426, 50226, 99868, 88894, 43769, 66384, 8593, 41414, 2976, 60053, 51866, 87904, 74135, 53842, 59520, 67482, 16995, 32328, 29555, 49067, 2799, 68851, 41049, 97190, 53984, 99755, 46412, 45885, 64000, 21962, 36438, 71742, 57223, 66599, 86071, 31436, 32667, 98099, 38399, 47377, 5171, 2742, 48803, 17823, 22093, 9866, 691, 5514, 25546, 2114, 5919, 56181, 96052, 67211, 61712, 25995, 3188, 23833, 38549, 44775, 55355, 61548, 55988, 47309, 23749, 30667, 70732, 33299, 16127, 30842, 78961, 41072, 9876, 18903, 30292, 25275, 61881, 15939, 72573, 84502, 92654, 97226, 53434, 77025, 63892, 12421, 33644, 39445, 30933, 84218, 13757, 37719, 84450, 2697, 60309, 22402, 80310, 92771, 45205, 72792, 95776, 85945, 74651, 216, 50842, 47854, 21916, 61588, 75405, 10495, 83083, 60427, 78495, 99809, 47890, 22993, 21508, 9459, 26845, 98130, 1184, 46438, 27698, 40652, 65654, 98517, 1096, 6998, 49133, 57041, 77983, 58708, 42176, 67356, 324, 70063, 10597, 65205, 25622, 34336, 16640, 27896, 26907, 86760, 48244, 89650, 44997, 51609, 28934, 9171, 97859, 97213, 19859, 41037, 64081, 94781, 27683, 41521, 52871, 86935, 26486, 38744, 25943, 60617, 6414, 42292, 46204, 53262, 30201, 38776, 88831, 97253, 67282, 72860, 18452, 60927, 81504, 57713, 30296, 10896, 39900, 67135, 42772, 4631, 55283, 39253, 25264, 1809, 12874, 88035, 88421, 90491, 83290, 6884, 15444, 90113, 20406, 20796, 40239, 34431, 15018, 45600, 17241, 26611, 9551, 89126, 65673, 31708, 91252, 39647, 63011, 24193, 58932, 89326, 33491, 53217, 27976, 70151, 37531, 53576, 23931, 11789, 73073, 52171, 89301, 51718, 15385, 79487, 66436, 35771, 34163, 86540, 42665, 80748, 77622, 14679, 40185, 25030, 42622, 13162, 17048, 24243, 59985, 59807, 60562, 3595, 10135, 29199, 69784, 59796, 38194, 58432, 50943, 40422, 63035, 3208, 81440, 90749, 88046, 32218, 88092, 22224, 2627, 91576, 16781, 43948, 57795, 71073, 27817, 87077, 82717, 24473, 42096, 76920, 88864, 90537, 14715, 42551, 45066, 24316, 37361, 38582, 21871, 14672, 93362, 21727, 57021, 94313, 39562, 64985, 94028, 46094, 43845, 91838, 79574, 7597, 3153, 56783, 18817, 74711, 6883, 91061, 31674, 73729, 99315, 66183, 57647, 74484, 68077, 33224, 397, 56753, 53158, 71872, 68153, 9298, 20961, 49656, 33407, 95683, 14328, 44708, 72952, 27048, 67887, 28741, 46752, 88177, 95894, 40086, 88534, 87112, 68614, 83073, 88794, 96799, 67588, 75049, 84603, 83140, 97347, 87316, 73087, 77135, 71883, 98643, 3808, 8848, 14133, 60447, 1366, 72976, 1868, 51667, 63279, 60040, 88264, 79152, 3474, 61366, 20523, 21584, 93712, 83654, 89761, 90154, 96345, 37539, 32556, 74254, 70603, 97122, 44978, 78028, 8943, 13778, 11080, 34271, 68276, 85372, 48410, 94516, 15427, 75323, 71685, 70774, 50342, 33771, 3678, 42321, 69788, 41758, 55004, 30992, 17402, 63523, 42328, 87171, 24751, 15084, 33884, 83655, 88345, 69602, 52606, 57886, 18034, 3381, 75796, 35901, 77480, 28683, 68324, 66035, 7223, 14926, 16128, 13645, 90370, 31949, 11057, 98849, 29499, 21565, 30786, 83292, 92392, 37104, 36899, 49906, 79368, 43710, 80365, 88735, 75275, 21664, 57965, 19002, 301, 12658, 94385, 1717, 96191, 50404, 80166, 93965, 24688, 27839, 10812, 31715, 92127, 42588, 93307, 80834, 11317, 26583, 25769, 98227, 14884, 58462, 29148, 68662, 26872, 72927, 79021, 51622, 29521, 33355, 45701, 45996, 33782, 93424, 16530, 96086, 17329, 74020, 11501, 46660, 5583, 22277, 77653, 55430, 84644, 448, 86828, 58855, 67451, 95264, 67386, 82424, 52611, 60012, 88620, 72894, 94716, 22262, 99813, 69592, 63464, 33163, 91857, 47904, 22209, 78590, 68615, 52952, 31441, 41313, 18550, 72685, 68825, 4795, 53971, 14592, 39634, 23682, 76630, 2731, 81481, 86542, 23727, 54291, 56045, 61635, 32186, 9355, 73416, 63532, 24340, 18886, 84832, 30654, 48543, 18339, 65024, 91197, 64624, 74648, 9660, 27897, 49771, 11123, 8732, 49393, 12911, 72416, 17834, 18878, 62754, 85072, 23727, 56577, 51257, 83291, 12329, 16203, 91681, 68137, 79959, 43609, 58987, 2026, 42969, 59144, 84349, 75214, 76972, 22633, 64104, 53799, 16851, 99197, 70476, 77113, 46320, 88693, 37711, 96536, 68156, 7119, 2104, 49435, 77706, 18924, 24957, 92406, 87148, 70482, 36491, 42605, 54440, 7893, 31618, 35707, 65130, 30007, 75706, 77266, 37100, 9601, 87681, 42543, 69847, 81848, 32034, 49429, 99434, 62209, 17125, 55227, 61634, 52574, 83649, 28725, 70119, 62467, 80676, 21192, 99584, 21310, 25292, 72781, 17186, 10393, 98390, 19789, 92931, 36234, 62627, 23437, 3885, 58822, 82941, 43806, 8172, 23790, 72295, 36196, 98200, 2889, 87619, 13846, 56197, 27151, 21238, 48794, 81100, 62643, 40001, 39243, 33213, 78416, 194, 91369, 79342, 36404, 52308, 13741, 24442, 88610, 12659, 11574, 70052, 93039, 79367, 41792, 61816, 35435, 47192, 97596, 28330, 41145, 16918, 62865, 9576, 45857, 68737, 90124, 16703, 7071, 48433, 57222, 34435, 800, 72496, 16449, 68187, 28739, 97672, 86818, 50768, 40807, 88681, 64340, 2224, 19703, 59245, 90905, 31239, 84216, 93942, 97371, 16842, 92168, 52692, 16064, 84686, 89444, 27938, 98406, 41365, 4515, 20494, 18813, 16242, 10634, 61566, 18592, 78057, 8720, 33739, 78345, 87693, 30242, 70545, 55521, 23687, 9160, 8655, 38811, 61768, 7228, 5567, 5561, 82071, 85, 50145, 23113, 97761, 88441, 14891, 72188, 85166, 37189, 75671, 81377, 92470, 73645, 93258, 6610, 12185, 43065, 26704, 47922, 56650, 7527, 18006, 56948, 51675, 16658, 66402, 1047, 81624, 77395, 62310, 73262, 66050, 57275, 32936, 87641, 51528, 58183, 21952, 84098, 28913, 28622, 18140, 89796, 41317, 93954, 67690, 64667, 57092, 21315, 4731, 76115, 77291, 11204, 8634, 93034, 27411, 27149, 13843, 9817, 9407, 84492, 28444, 59901, 14592, 89654, 66207, 66232, 80293, 74502, 36925, 55515, 10121, 16768, 4720, 71502, 40500, 21406, 571, 87320, 81683, 42788, 86367, 44686, 22159, 67015, 35892, 49668, 83991, 72088, 30210, 74009, 86370, 97956, 2132, 93512, 54819, 26094, 51409, 21485, 94764, 85806, 13393, 48543, 7042, 76538, 64224, 47909, 9994, 23750, 17351, 52141, 30486, 60380, 86546, 66606, 36913, 58173, 45709, 83679, 82617, 23381, 9603, 61107, 566, 6572, 64745, 10614, 86371, 43244, 97154, 10397, 50975, 68006, 20045, 16942, 25536, 74031, 31807, 70133, 78790, 40341, 68730, 39635, 39013, 66841, 44043, 96215, 21270, 59427, 25034, 40645, 84741, 52083, 54503, 36861, 27659, 95463, 53847, 40921, 70116, 61536, 56756, 8967, 31079, 20097, 76014, 99818, 16606, 19713, 66904, 27106, 24874, 96701, 73287, 76772, 6073, 57343, 51428, 91171, 28299, 17520, 64903, 4177, 36071, 94952, 59008, 28543, 11576, 74547, 13260, 20688, 41261, 2780, 6633, 37536, 8844, 95774, 49323, 30448, 14154, 83379, 71259, 23302, 68402, 43750, 88505, 15575, 44927, 6584, 29867, 21541, 65763, 12154, 86616, 79877, 73259, 68626, 98962, 68548, 86576, 48046, 51755, 64995, 3661, 64585, 81550, 46798, 49319, 50206, 22024, 5175, 12923, 23427, 55915, 91723, 55831, 83784, 81034, 86779, 34622, 84570, 18960, 48798, 42970, 95789, 39465, 82353, 68905, 44234, 18244, 54345, 5592, 89361, 14644, 67924, 66415, 89349, 88530, 72096, 44459, 5258, 48317, 48866, 56886, 90458, 75889, 4514, 37227, 11302, 4667, 2129, 80414, 86289, 15887, 87380, 50749, 83220, 50529, 20619, 11606, 36531, 23409, 78122, 19566, 76564, 33045, 66703, 30017, 35347, 35038, 12952, 13971, 3922, 98702, 11786, 38388, 69556, 76728, 60535, 59961, 23634, 42211, 98387, 34880, 27755, 93182, 99040, 96390, 65989, 38375, 3652, 59657, 57431, 24666, 11061, 64713, 85185, 72849, 58611, 31220, 26657, 77056, 24553, 24993, 5210, 89024, 32054, 46997, 92652, 28363, 98992, 22593, 97710, 47766, 37646, 93573, 95502, 33790, 92973, 27766, 62671, 89698, 10877, 73893, 41004, 96035, 18795, 48080, 59666, 30241, 35233, 87353, 43647, 13404, 41982, 19264, 29229, 61369, 8309, 39383, 42305, 25944, 13577, 51545, 68990, 69801, 37145, 79189, 55897, 57793, 66816, 21930, 56771, 79296, 73793, 21632, 42301, 23696, 72641, 56310, 85576, 3004, 25669, 69221, 32996, 23040, 65782, 23712, 13414, 10758, 15590, 97298, 74246, 51511, 46900, 36795, 38292, 3852, 6384, 84421, 3446, 91670, 45312, 27609, 87034, 6683, 83891, 88991, 16533, 9197, 34427, 60384, 48525, 90978, 46107, 21693, 12956, 21804, 46558, 37682, 81207, 85840, 53238, 35026, 4835, 53264, 41376, 17783, 64756, 39278, 25403, 33042, 20954, 31193, 24247, 45911, 92453, 25370, 86602, 48574, 57865, 26436, 16122, 76614, 17028, 21262, 59718, 77821, 14036, 31033, 90563, 45410, 15158, 90209, 84089, 38053, 60780, 54166, 14255, 33120, 27171, 71798, 91214, 80040, 56699, 12475, 40193, 59415, 4769, 75920, 1036, 2692, 75862, 16612, 73670, 61182, 3305, 90334, 187, 91659, 28063, 75684, 50017, 82643, 9282, 77376, 85469, 8164, 5584, 36623, 82597, 83859, 3435, 98460, 70095, 80257, 4381, 6501, 8924, 35514, 14297, 54373, 71369, 5172, 15955, 82441, 4636, 48215, 6821, 3385, 17663, 40107, 55679, 30366, 42390, 95895, 16083, 58499, 17176, 55993, 51034, 49296, 4010, 78974, 35930, 2019, 96226, 27167, 68245, 53109, 59037, 37843, 79243, 10262, 58797, 61490, 82590, 52411, 54783, 29447, 94551, 30026, 97959, 93939, 73217, 82573, 62154, 78291, 33728, 39102, 11484, 86210, 43794, 73553, 87435, 1110, 77108, 56521, 78610, 8254, 1842, 43068, 70415, 79195, 26136, 49786, 47279, 38471, 20379, 54704, 86614, 91138, 51595, 50818, 80186, 73087, 17262, 94735, 4952, 27935, 4928, 74862, 51392, 62388, 9570, 38485, 30594, 56278, 47395, 72762, 94597, 72279, 16010, 34697, 54475, 67874, 78014, 88381, 4045, 41494, 55178, 46054, 24373, 1824, 55333, 7525, 97908, 61178, 84635, 2199, 35361, 4803, 21907, 79414, 66083, 54782, 58692, 28332, 41851, 28198, 55819, 37313, 67046, 16147, 90478, 71230, 34141, 85002, 44332, 35906, 429, 39744, 773, 22909, 19536, 98986, 90945, 45209, 85439, 92265, 25291, 22775, 60611, 49159, 95701, 36113, 53923, 60824, 84935, 29656, 50007, 86624, 61691, 76150, 32187, 42765, 60660, 13859, 10792, 88210, 29374, 29563, 45188, 28811, 19739, 67649, 73775, 99247, 48414, 91067, 68253, 9452, 90116, 91737, 73979, 62370, 69112, 58791, 20349, 71480, 56852, 36919, 87977, 77609, 68738, 85159, 4918, 70076, 46473, 4122, 57713, 1426, 50987, 77910, 66211, 62546, 77749, 96462, 34304, 77441, 12104, 91805, 10287, 60943, 49632, 83116, 25716, 23113, 22707, 77770, 31176, 6759, 46130, 4739, 55554, 3843, 31653, 70834, 72877, 41561, 36903, 23010, 6663, 2266, 16360, 70118, 91936, 17098, 77278, 4880, 23484, 94970, 41826, 46733, 93484, 68350, 38861, 18134, 32936, 241, 24803, 13876, 93278, 5039, 35873, 44418, 5305, 28510, 36115, 46717, 15238, 78607, 23464, 68635, 55712, 55007, 92411, 65739, 4858, 67537, 37041, 67453, 89801, 45963, 14800, 14225, 65655, 80463, 9716, 77255, 65136, 11230, 76323, 81433, 36445, 86523, 61058, 59560, 19380, 40791, 48073, 29626, 36661, 87907, 57369, 41623, 13705, 3880, 45088, 55444, 41003, 27754, 1450, 75312, 71801, 99600, 60719, 54182, 29245, 63315, 73758, 42973, 32702, 10855, 56363, 14638, 84424, 27178, 78195, 3133, 70865, 48019, 26117, 7151, 52107, 85562, 41347, 50486, 69457, 86961, 95482, 11857, 93587, 45680, 42145, 13029, 10043, 5142, 49213, 54525, 85761, 42707, 70754, 33768, 87671, 85038, 58900, 88438, 20004, 63390, 14815, 38875, 73417, 82875, 89481, 55517, 944, 15773, 61814, 32915, 27868, 5510, 21916, 28426, 89881, 16680, 88850, 11056, 51991, 4230, 39107, 49216, 40065, 4523, 75848, 95349, 56034, 10724, 9885, 88232, 42478, 65702, 95696, 39746, 66032, 88082, 86905, 30007, 75068, 66629, 7358, 26706, 90511, 72843, 67857, 20061, 98581, 69682, 38000, 14186, 70, 2290, 17269, 30909, 69449, 19997, 13275, 2444, 84985, 51290, 97641, 15092, 69650, 21920, 19617, 7418, 49725, 91090, 20805, 28627, 80665, 67192, 34697, 57667, 99323, 50101, 40587, 35081, 14037, 34414, 19898, 60779, 83267, 87499, 29596, 41852, 15813, 32419, 72232, 8322, 39184, 46525, 13833, 65743, 94595, 37363, 4711, 35386, 96413, 10627, 62625, 56555, 12919, 93218, 25191, 98380, 51923, 66181, 5788, 73491, 1452, 487, 12277, 45415, 11884, 61300, 94528, 9181, 26616, 11455, 31514, 63290, 45035, 42759, 33804, 85721, 80979, 46010, 50975, 72482, 31231, 3086, 58941, 46102, 25773, 89742, 29788, 96741, 88523, 14922, 88262, 76305, 57676, 93259, 2396, 69145, 26074, 30056, 3853, 75317, 56639, 66203, 38923, 48939, 22813, 91864, 10934, 6714, 84099, 25631, 73223, 95630, 97552, 45950, 22197, 42886, 33764, 1263, 41856, 82057, 62349, 94091, 78028, 62651, 18911, 5693, 92561, 97821, 41994, 92343, 76785, 22216, 4203, 5038, 86151, 23596, 24338, 77181, 51761, 97693, 10955, 98159, 37568, 58932, 72128, 27303, 99608, 31688, 57557, 91022, 43036, 93927, 32869, 53653, 55205, 33139, 47271, 31224, 51650, 36422, 86857, 73799, 22068, 43376, 84760, 44898, 65776, 42451, 71480, 38509, 41673, 44141, 75918, 95652, 68981, 83001, 48815, 98086, 67950, 27986, 33175, 43624, 55274, 71051, 61124, 51550, 64967, 31570, 15748, 19159, 38174, 51078, 79811, 39183, 57527, 96550, 85168, 28824, 47466, 56993, 13151, 96664, 29735, 70251, 1079, 4314, 77714, 11507, 1440, 48415, 31984, 99915, 20282, 26524, 18057, 4992, 40521, 98108, 84045, 91961, 79256, 72244, 25788, 5487, 23595, 73302, 14205, 8925, 27625, 64343, 28821, 37992, 67156, 83320, 31106, 10884, 30735, 15067, 51091, 15668, 48777, 50770, 19169, 76504, 41165, 29749, 92812, 8065, 66782, 26841, 1411, 95461, 61134, 18699, 52261, 60469, 81373, 44825, 11448, 73320, 30151, 56991, 31372, 6655, 36472, 86292, 30247, 30931, 21029, 53410, 9859, 37267, 47514, 3492, 49008, 94727, 25234, 40546, 53417, 36492, 25723, 76227, 58456, 15979, 34876, 9574, 34392, 3751, 36933, 83921, 65108, 63135, 67572, 40184, 21098];
/** @type {Array[]} */

var SBOX = new Array(16);
/** @type {number[]} */

var shiftTable = [16, 8, 16, 24];
/** @type {number} */

var sboxSize = 16;
/** @type {number} */

var count5 = 4;
/** @type {number} */

var randomIndex = 0; // 9591

/**
 * Generate a random digit in the range from 0 to 9, inclusive, by simply by
 * getting the next random digit from the RAND table of random digits.
 *
 * @returns {number}
 */

function getRandomDigit() {
  if (count5 < 0) {
    count5 = 4;
    randomIndex++;
  }

  return randTable[randomIndex] % Math.pow(10, count5 + 1) / Math.pow(10, count5--) | 0;
}
/**
 * Get a random integer in the range from low to high, inclusive.
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */


function getRandomNumber(low, high) {
  var range = high - low + 1;
  var rand = 0;
  var max = 1;

  do {
    for (rand = 0, max = 1; max < range; max *= 10) {
      rand = rand * 10 + getRandomDigit();
    }
  } while (rand >= (max / range | 0) * range);

  return low + rand % range | 0;
}
/**
 * Generate SBOX by size
 *
 * @param {number} size
 */


function generateSbox(size) {
  for (var i = 0; i < size; i++) {
    SBOX[i] = new Array(256);
    /* Fill initial S box with a trivial permutation (0-255) */

    for (var row = 0; row < 256; row++) {
      SBOX[i][row] = row | row << 8 | row << 16 | row << 24 | 0;
    }

    for (var col = 3; col >= 0; col--) {
      for (var _row = 0; _row < 255; _row++) {
        /* Exchange random rows in the column.  This ensures that
         * column remains a permutation of (0-255). */
        var mask = 0xff << (col << 3);
        var temp = SBOX[i][_row] | 0;
        var row2 = getRandomNumber(_row, 255);
        SBOX[i][_row] = SBOX[i][_row] & ~mask | SBOX[i][row2] & mask | 0;
        SBOX[i][row2] = SBOX[i][row2] & ~mask | temp & mask | 0;
      }
    }
  }
}

generateSbox(sboxSize);
/**
 * Calculates Snefru v2.0 (2 rounds 128, 4 rounds 256), Snefru v2.5 (8 rounds) hash
 *
 * @example <caption>Calculates Snefru128/8 hash from string "message" - ES6 style</caption>
 * import Snefru from "crypto-api/src/hasher/snefru";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Snefru();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates Snefru128/8 hash from UTF string "message" - ES6 style</caption>
 * import Snefru from "crypto-api/src/hasher/snefru";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Snefru();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates Snefru128/8 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('snefru');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates Snefru128/8 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('snefru', 'message'));
 * </script>
 */

var Snefru =
/*#__PURE__*/
function (_Hasher32be) {
  _inherits(Snefru, _Hasher32be);

  /**
   * @param {Object} [options]
    * | Hash type   | Length | Rounds |
   * |-------------|--------|--------|
   * | snefru128/2 | 128    | 2      |
   * | snefru256/4 | 256    | 4      |
   * | snefru128/8 | 128    | 8      |
   * | snefru256/8 | 256    | 8      |
   *
   * @param {number} [options.rounds=8] - Number of rounds (Can be from 2 to 8)
   * @param {number} [options.length=128] - Length of hash result (Can be from 32 to 480 with step 32).
   * Be careful, increasing of length will cause a reduction of the block size
   */
  function Snefru(options) {
    var _this;

    _classCallCheck(this, Snefru);

    options = options || {};
    options.length = options.length || 128;
    options.rounds = options.rounds || 8;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Snefru).call(this, options));
    /**
     * Size of block in units
     * @ignore
     * @type {number}
     */

    _this.blockSize = 16 - _this.state.hash.length;
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

    _this.W = new Array(16);
    return _this;
  }
  /**
   * Reset hasher to initial state
   */


  _createClass(Snefru, [{
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(Snefru.prototype), "reset", this).call(this);

      this.state.hash = new Array(this.options.length / 32 | 0);

      for (var i = 0; i < this.state.hash.length; i++) {
        this.state.hash[i] = 0 | 0;
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
      for (var i = 0; i < this.state.hash.length; i++) {
        this.W[i] = this.state.hash[i] | 0;
      }

      for (var _i = this.state.hash.length; _i < 16; _i++) {
        this.W[_i] = block[_i - this.state.hash.length] | 0;
      } //  Rounds


      for (var _i2 = 0; _i2 < this.options.rounds << 1; _i2 += 2) {
        for (var byteInWord = 0; byteInWord < 4; byteInWord++) {
          for (var n = 0; n < 16; n++) {
            var sbe = SBOX[_i2 + (n / 2 | 0) % 2][this.W[n] & 0xff] | 0;
            this.W[n - 1 >>> 0 & 0xf] ^= sbe;
            this.W[n + 1 & 0xf] ^= sbe;
          }

          for (var _n = 0; _n < 16; _n++) {
            this.W[_n] = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateRight */ "b"])(this.W[_n], shiftTable[byteInWord]);
          }
        }
      }

      for (var _i3 = 0; _i3 < this.state.hash.length; _i3++) {
        this.state.hash[_i3] = this.state.hash[_i3] ^ this.W[15 - _i3] | 0;
      }
    }
    /**
     * Finalize hash and return result
     *
     * @returns {string}
     */

  }, {
    key: "finalize",
    value: function finalize() {
      if (this.state.message.length > 0) {
        this.addPaddingZero(this.blockSizeInBytes - this.state.message.length | 0);
      }

      this.addPaddingZero(this.blockSizeInBytes - 8 | 0);
      this.addLengthBits();
      this.process();
      return this.getStateHash();
    }
  }]);

  return Snefru;
}(_hasher32be__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Snefru);

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _hasher32be__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


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



/** @type {number[]} */

var SBOX = new Array(256);
/** @type {number[]} */

var SBOX0 = [0x68, 0xd0, 0xeb, 0x2b, 0x48, 0x9d, 0x6a, 0xe4, 0xe3, 0xa3, 0x56, 0x81, 0x7d, 0xf1, 0x85, 0x9e, 0x2c, 0x8e, 0x78, 0xca, 0x17, 0xa9, 0x61, 0xd5, 0x5d, 0x0b, 0x8c, 0x3c, 0x77, 0x51, 0x22, 0x42, 0x3f, 0x54, 0x41, 0x80, 0xcc, 0x86, 0xb3, 0x18, 0x2e, 0x57, 0x06, 0x62, 0xf4, 0x36, 0xd1, 0x6b, 0x1b, 0x65, 0x75, 0x10, 0xda, 0x49, 0x26, 0xf9, 0xcb, 0x66, 0xe7, 0xba, 0xae, 0x50, 0x52, 0xab, 0x05, 0xf0, 0x0d, 0x73, 0x3b, 0x04, 0x20, 0xfe, 0xdd, 0xf5, 0xb4, 0x5f, 0x0a, 0xb5, 0xc0, 0xa0, 0x71, 0xa5, 0x2d, 0x60, 0x72, 0x93, 0x39, 0x08, 0x83, 0x21, 0x5c, 0x87, 0xb1, 0xe0, 0x00, 0xc3, 0x12, 0x91, 0x8a, 0x02, 0x1c, 0xe6, 0x45, 0xc2, 0xc4, 0xfd, 0xbf, 0x44, 0xa1, 0x4c, 0x33, 0xc5, 0x84, 0x23, 0x7c, 0xb0, 0x25, 0x15, 0x35, 0x69, 0xff, 0x94, 0x4d, 0x70, 0xa2, 0xaf, 0xcd, 0xd6, 0x6c, 0xb7, 0xf8, 0x09, 0xf3, 0x67, 0xa4, 0xea, 0xec, 0xb6, 0xd4, 0xd2, 0x14, 0x1e, 0xe1, 0x24, 0x38, 0xc6, 0xdb, 0x4b, 0x7a, 0x3a, 0xde, 0x5e, 0xdf, 0x95, 0xfc, 0xaa, 0xd7, 0xce, 0x07, 0x0f, 0x3d, 0x58, 0x9a, 0x98, 0x9c, 0xf2, 0xa7, 0x11, 0x7e, 0x8b, 0x43, 0x03, 0xe2, 0xdc, 0xe5, 0xb2, 0x4e, 0xc7, 0x6d, 0xe9, 0x27, 0x40, 0xd8, 0x37, 0x92, 0x8f, 0x01, 0x1d, 0x53, 0x3e, 0x59, 0xc1, 0x4f, 0x32, 0x16, 0xfa, 0x74, 0xfb, 0x63, 0x9f, 0x34, 0x1a, 0x2a, 0x5a, 0x8d, 0xc9, 0xcf, 0xf6, 0x90, 0x28, 0x88, 0x9b, 0x31, 0x0e, 0xbd, 0x4a, 0xe8, 0x96, 0xa6, 0x0c, 0xc8, 0x79, 0xbc, 0xbe, 0xef, 0x6e, 0x46, 0x97, 0x5b, 0xed, 0x19, 0xd9, 0xac, 0x99, 0xa8, 0x29, 0x64, 0x1f, 0xad, 0x55, 0x13, 0xbb, 0xf7, 0x6f, 0xb9, 0x47, 0x2f, 0xee, 0xb8, 0x7b, 0x89, 0x30, 0xd3, 0x7f, 0x76, 0x82];
/** @type {number[]} */

var eBOX = [0x1, 0xb, 0x9, 0xc, 0xd, 0x6, 0xf, 0x3, 0xe, 0x8, 0x7, 0x4, 0xa, 0x2, 0x5, 0x0];
/** @type {number[]} */

var rBOX = [0x7, 0xc, 0xb, 0xd, 0xe, 0x4, 0x9, 0xf, 0x6, 0x3, 0x8, 0xa, 0x2, 0x5, 0x1, 0x0];
/** @type {number[]} */

var iBOX = new Array(16);
/** @type {number[]} */

var theta = [1, 1, 4, 1, 8, 5, 2, 9];
/** @type {number[]} */

var theta0 = [1, 1, 3, 1, 5, 8, 9, 5];
/** @type {Array[]} */

var C = new Array(512);
/** @type {number[]} */

var RC = new Array(22);
/** @type {Array[]} */

var C0 = new Array(512);
/** @type {number[]} */

var RC0 = new Array(22);
/** @type {Array[]} */

var CT = new Array(512);
/** @type {number[]} */

var RCT = new Array(22);
/**
 * Calculates SBOX from eBOX & rBOX
 *
 * @private
 * @returns {void}
 */

function calculateSBOX() {
  for (var i = 0; i < 16; i++) {
    iBOX[eBOX[i]] = i | 0;
  }

  for (var _i = 0; _i < 256; _i++) {
    var left = eBOX[_i >> 4];
    var right = iBOX[_i & 0xf];
    var temp = rBOX[left ^ right];
    SBOX[_i] = eBOX[left ^ temp] << 4 | iBOX[right ^ temp];
  }
}
/**
 * Calculates C* & RC* transform tables
 *
 * @private
 * @param {number[]} SBOX
 * @param {number[]} theta
 * @returns {[Array[], number[]]}
 */


function calculateRC(SBOX, theta) {
  /** @type {Array[]} */
  var C = new Array(512);
  /** @type {number[]} */

  var RC = new Array(22);

  for (var t = 0; t < 8; t++) {
    C[t] = [];
  }

  for (var i = 0; i < 256; i++) {
    var V = new Array(10);
    V[1] = SBOX[i];
    V[2] = V[1] << 1;

    if (V[2] >= 0x100) {
      V[2] ^= 0x11d;
    }

    V[3] = V[2] ^ V[1];
    V[4] = V[2] << 1;

    if (V[4] >= 0x100) {
      V[4] ^= 0x11d;
    }

    V[5] = V[4] ^ V[1];
    V[8] = V[4] << 1;

    if (V[8] >= 0x100) {
      V[8] ^= 0x11d;
    }

    V[9] = V[8] ^ V[1]; // build the circulant table C[0][x] = S[x].[1, 1, 4, 1, 8, 5, 2, 9] | S[x].[1, 1, 3, 1, 5, 8, 9, 5]

    C[0][i * 2] = V[theta[0]] << 24 | V[theta[1]] << 16 | V[theta[2]] << 8 | V[theta[3]];
    C[0][i * 2 + 1] = V[theta[4]] << 24 | V[theta[5]] << 16 | V[theta[6]] << 8 | V[theta[7]]; // build the remaining circulant tables C[t][x] = C[0][x] rotr t

    for (var _t = 1; _t < 8; _t++) {
      C[_t][i * 2] = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_0__[/* rotateRight64lo */ "d"])(C[0][i * 2 + 1], C[0][i * 2], _t << 3);
      C[_t][i * 2 + 1] = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_0__[/* rotateRight64hi */ "c"])(C[0][i * 2 + 1], C[0][i * 2], _t << 3);
    }
  } // build the round constants


  RC[0] = 0;
  RC[1] = 0;

  for (var _i2 = 1; _i2 <= 10; _i2++) {
    RC[_i2 * 2] = C[0][16 * _i2 - 16] & 0xff000000 ^ C[1][16 * _i2 - 14] & 0x00ff0000 ^ C[2][16 * _i2 - 12] & 0x0000ff00 ^ C[3][16 * _i2 - 10] & 0x000000ff;
    RC[_i2 * 2 + 1] = C[4][16 * _i2 - 7] & 0xff000000 ^ C[5][16 * _i2 - 5] & 0x00ff0000 ^ C[6][16 * _i2 - 3] & 0x0000ff00 ^ C[7][16 * _i2 - 1] & 0x000000ff;
  }

  return [C, RC];
} // Build transform tables


(function () {
  calculateSBOX(); // whirlpool-0

  var x = calculateRC(SBOX0, theta0);
  C0 = x[0];
  RC0 = x[1]; // whirlpool-t

  x = calculateRC(SBOX, theta0);
  CT = x[0];
  RCT = x[1]; // whirlpool

  x = calculateRC(SBOX, theta);
  C = x[0];
  RC = x[1];
})();
/**
 * Calculates [WHIRLPOOL (WHIRLPOOL-0, WHIRLPOOL-T)](http://www.larc.usp.br/~pbarreto/WhirlpoolPage.html) hash
 *
 * @example <caption>Calculates WHIRLPOOL hash from string "message" - ES6 style</caption>
 * import Whirlpool from "crypto-api/src/hasher/whirlpool";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Whirlpool();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates WHIRLPOOL hash from UTF string "message" - ES6 style</caption>
 * import Whirlpool from "crypto-api/src/hasher/whirlpool";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Whirlpool();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates WHIRLPOOL hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('whirlpool');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates WHIRLPOOL hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('whirlpool', 'message'));
 * </script>
 */


var Whirlpool =
/*#__PURE__*/
function (_Hasher32be) {
  _inherits(Whirlpool, _Hasher32be);

  /**
   * @param {Object} [options]
   * @param {number} [options.rounds=10] - Number of rounds (Can be from 1 to 10)
   * @param {string} [options.type] - Algorithm type
   *
   * | Hash type   | Type      |
   * |-------------|-----------|
   * | whirlpool-0 | '0'       |
   * | whirlpool-t | 't'       |
   * | whirlpool   | undefined |
   */
  function Whirlpool(options) {
    var _this;

    _classCallCheck(this, Whirlpool);

    options = options || {};
    options.type = options.type || '';
    options.rounds = options.rounds || 10;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Whirlpool).call(this, options));

    switch (_this.options.type) {
      case '0':
      case 0:
        /**
         *  @type {{number[]}[]}
         *  @ignore
         *  */
        _this.C = C0;
        /**
         *  @type {number[]}
         *  @ignore
         *  */

        _this.RC = RC0;
        break;

      case 't':
        _this.C = CT;
        _this.RC = RCT;
        break;

      default:
        _this.C = C;
        _this.RC = RC;
    }

    return _this;
  }
  /**
   * Reset hasher to initial state
   */


  _createClass(Whirlpool, [{
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(Whirlpool.prototype), "reset", this).call(this);

      this.state.hash = new Array(16);

      for (var i = 0; i < 16; i++) {
        this.state.hash[i] = 0 | 0;
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
      // compute and apply K^0 to the cipher state
      var K = new Array(16);
      var state = [];

      for (var i = 0; i < 16; i++) {
        state[i] = block[i] ^ (K[i] = this.state.hash[i]) | 0;
      } // iterate over all rounds


      var L = [];

      for (var r = 1; r <= this.options.rounds; r++) {
        // compute K^r from K^{r-1}
        for (var _i3 = 0; _i3 < 8; _i3++) {
          L[_i3 * 2] = 0;
          L[_i3 * 2 + 1] = 0;

          for (var t = 0, s = 56, j = 0; t < 8; t++, s -= 8, j = s < 32 ? 1 : 0) {
            L[_i3 * 2] ^= this.C[t][(K[(_i3 - t & 7) * 2 + j] >>> s % 32 & 0xff) * 2];
            L[_i3 * 2 + 1] ^= this.C[t][(K[(_i3 - t & 7) * 2 + j] >>> s % 32 & 0xff) * 2 + 1];
          }
        }

        for (var _i4 = 0; _i4 < 16; _i4++) {
          K[_i4] = L[_i4];
        }

        K[0] ^= this.RC[r * 2];
        K[1] ^= this.RC[r * 2 + 1]; // apply the r-th round transformation

        for (var _i5 = 0; _i5 < 8; _i5++) {
          L[_i5 * 2] = K[_i5 * 2];
          L[_i5 * 2 + 1] = K[_i5 * 2 + 1];

          for (var _t2 = 0, _s = 56, _j = 0; _t2 < 8; _t2++, _s -= 8, _j = _s < 32 ? 1 : 0) {
            L[_i5 * 2] ^= this.C[_t2][(state[(_i5 - _t2 & 7) * 2 + _j] >>> _s % 32 & 0xff) * 2];
            L[_i5 * 2 + 1] ^= this.C[_t2][(state[(_i5 - _t2 & 7) * 2 + _j] >>> _s % 32 & 0xff) * 2 + 1];
          }
        }

        for (var _i6 = 0; _i6 < 16; _i6++) {
          state[_i6] = L[_i6];
        }
      } // apply the Miyaguchi-Preneel compression function


      for (var _i7 = 0; _i7 < 16; _i7++) {
        this.state.hash[_i7] ^= state[_i7] ^ block[_i7];
      }
    }
    /**
     * Finalize hash and return result
     *
     * @returns {string}
     */

  }, {
    key: "finalize",
    value: function finalize() {
      this.addPaddingISO7816(this.state.message.length < 32 ? 56 - this.state.message.length | 0 : 120 - this.state.message.length | 0);
      this.addLengthBits();
      this.process();
      return this.getStateHash();
    }
  }]);

  return Whirlpool;
}(_hasher32be__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Whirlpool);

/***/ }),
/* 13 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/hasher/hasher.mjs
var hasher = __webpack_require__(4);

// CONCATENATED MODULE: ./src/hasher/hasher8.mjs


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
 * Hasher for 8 bit blocks
 * @interface
 */

var Hasher8 =
/*#__PURE__*/
function (_Hasher) {
  _inherits(Hasher8, _Hasher);

  /**
   * @param {Object} [options]
   */
  function Hasher8(options) {
    var _this;

    _classCallCheck(this, Hasher8);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hasher8).call(this, options));
    /**
     * Size of unit = 1 byte
     * @type {number} unitSize
     */

    _this.unitSize = 1;
    /**
     * Size of block in bytes
     * @type {number}
     */

    _this.blockSizeInBytes = _this.blockSize * _this.unitSize;
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
   */


  _createClass(Hasher8, [{
    key: "process",
    value: function process() {
      while (this.state.message.length >= this.blockSizeInBytes) {
        this.blockUnits = new Array(this.blockSizeInBytes);

        for (var i = 0; i < this.blockSizeInBytes; i++) {
          this.blockUnits[i] = this.state.message.charCodeAt(i) | 0;
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
        hash += String.fromCharCode(this.state.hash[i] & 0xff);
      }

      return hash;
    }
  }]);

  return Hasher8;
}(hasher["a" /* default */]);

/* harmony default export */ var hasher8 = (Hasher8);
// CONCATENATED MODULE: ./src/hasher/md2.mjs


function md2_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { md2_typeof = function _typeof(obj) { return typeof obj; }; } else { md2_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return md2_typeof(obj); }

function md2_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function md2_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function md2_createClass(Constructor, protoProps, staticProps) { if (protoProps) md2_defineProperties(Constructor.prototype, protoProps); if (staticProps) md2_defineProperties(Constructor, staticProps); return Constructor; }

function md2_possibleConstructorReturn(self, call) { if (call && (md2_typeof(call) === "object" || typeof call === "function")) { return call; } return md2_assertThisInitialized(self); }

function md2_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = md2_getPrototypeOf(object); if (object === null) break; } return object; }

function md2_getPrototypeOf(o) { md2_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return md2_getPrototypeOf(o); }

function md2_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) md2_setPrototypeOf(subClass, superClass); }

function md2_setPrototypeOf(o, p) { md2_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return md2_setPrototypeOf(o, p); }


/**
 * Constants from Pi
 * @link https://github.com/e-sushi/MD2-S-box-creator
 * @type {number[]}
 */

var SBOX = [0x29, 0x2e, 0x43, 0xc9, 0xa2, 0xd8, 0x7c, 0x01, 0x3d, 0x36, 0x54, 0xa1, 0xec, 0xf0, 0x06, 0x13, 0x62, 0xa7, 0x05, 0xf3, 0xc0, 0xc7, 0x73, 0x8c, 0x98, 0x93, 0x2b, 0xd9, 0xbc, 0x4c, 0x82, 0xca, 0x1e, 0x9b, 0x57, 0x3c, 0xfd, 0xd4, 0xe0, 0x16, 0x67, 0x42, 0x6f, 0x18, 0x8a, 0x17, 0xe5, 0x12, 0xbe, 0x4e, 0xc4, 0xd6, 0xda, 0x9e, 0xde, 0x49, 0xa0, 0xfb, 0xf5, 0x8e, 0xbb, 0x2f, 0xee, 0x7a, 0xa9, 0x68, 0x79, 0x91, 0x15, 0xb2, 0x07, 0x3f, 0x94, 0xc2, 0x10, 0x89, 0x0b, 0x22, 0x5f, 0x21, 0x80, 0x7f, 0x5d, 0x9a, 0x5a, 0x90, 0x32, 0x27, 0x35, 0x3e, 0xcc, 0xe7, 0xbf, 0xf7, 0x97, 0x03, 0xff, 0x19, 0x30, 0xb3, 0x48, 0xa5, 0xb5, 0xd1, 0xd7, 0x5e, 0x92, 0x2a, 0xac, 0x56, 0xaa, 0xc6, 0x4f, 0xb8, 0x38, 0xd2, 0x96, 0xa4, 0x7d, 0xb6, 0x76, 0xfc, 0x6b, 0xe2, 0x9c, 0x74, 0x04, 0xf1, 0x45, 0x9d, 0x70, 0x59, 0x64, 0x71, 0x87, 0x20, 0x86, 0x5b, 0xcf, 0x65, 0xe6, 0x2d, 0xa8, 0x02, 0x1b, 0x60, 0x25, 0xad, 0xae, 0xb0, 0xb9, 0xf6, 0x1c, 0x46, 0x61, 0x69, 0x34, 0x40, 0x7e, 0x0f, 0x55, 0x47, 0xa3, 0x23, 0xdd, 0x51, 0xaf, 0x3a, 0xc3, 0x5c, 0xf9, 0xce, 0xba, 0xc5, 0xea, 0x26, 0x2c, 0x53, 0x0d, 0x6e, 0x85, 0x28, 0x84, 0x09, 0xd3, 0xdf, 0xcd, 0xf4, 0x41, 0x81, 0x4d, 0x52, 0x6a, 0xdc, 0x37, 0xc8, 0x6c, 0xc1, 0xab, 0xfa, 0x24, 0xe1, 0x7b, 0x08, 0x0c, 0xbd, 0xb1, 0x4a, 0x78, 0x88, 0x95, 0x8b, 0xe3, 0x63, 0xe8, 0x6d, 0xe9, 0xcb, 0xd5, 0xfe, 0x3b, 0x00, 0x1d, 0x39, 0xf2, 0xef, 0xb7, 0x0e, 0x66, 0x58, 0xd0, 0xe4, 0xa6, 0x77, 0x72, 0xf8, 0xeb, 0x75, 0x4b, 0x0a, 0x31, 0x44, 0x50, 0xb4, 0x8f, 0xed, 0x1f, 0x1a, 0xdb, 0x99, 0x8d, 0x33, 0x9f, 0x11, 0x83, 0x14];
/**
 * Calculates [MD2](https://tools.ietf.org/html/rfc1319) hash
 *
 * @example <caption>Calculates MD2 hash from string "message" - ES6 style</caption>
 * import Md2 from "crypto-api/src/hasher/md2";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Md2();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates MD2 hash from UTF string "message" - ES6 style</caption>
 * import Md2 from "crypto-api/src/hasher/md2";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Md2();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates MD2 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('md2');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates MD2 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('md2', 'message'));
 * </script>
 */

var Md2 =
/*#__PURE__*/
function (_Hasher) {
  md2_inherits(Md2, _Hasher);

  /**
   * @param {Object} [options]
   * @param {number} [options.rounds=18] - Number of rounds (Must be greater than 0)
   */
  function Md2(options) {
    var _this;

    md2_classCallCheck(this, Md2);

    _this = md2_possibleConstructorReturn(this, md2_getPrototypeOf(Md2).call(this, options));
    _this.options.rounds = _this.options.rounds || 18;
    return _this;
  }
  /**
   * Reset hasher to initial state
   */


  md2_createClass(Md2, [{
    key: "reset",
    value: function reset() {
      _get(md2_getPrototypeOf(Md2.prototype), "reset", this).call(this);

      this.state.hash = new Array(48);
      this.state.checksum = new Array(16);
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
      // Append hash
      for (var i = 0; i < 16; i++) {
        this.state.hash[16 + i] = block[i] | 0;
        this.state.hash[32 + i] = block[i] ^ this.state.hash[i];
      } // Rounds


      var t = 0;

      for (var _i = 0; _i < this.options.rounds; _i++) {
        for (var j = 0; j < 48; j++) {
          t = this.state.hash[j] ^= SBOX[t];
        }

        t = t + _i & 0xff;
      } // Append checksum


      t = this.state.checksum[15] & 0xff;

      for (var _i2 = 0; _i2 < 16; _i2++) {
        t = this.state.checksum[_i2] ^= SBOX[block[_i2] ^ t];
      }
    }
    /**
     * Finalize hash and return result
     *
     * @returns {string}
     */

  }, {
    key: "finalize",
    value: function finalize() {
      this.addPaddingPKCS7(16 - (this.state.message.length & 0xf) | 0);
      this.process(); // Process checksum

      for (var i = 0; i < 16; i++) {
        this.state.message += String.fromCharCode(this.state.checksum[i]);
      }

      this.process(); // Return hash

      return this.getStateHash(16);
    }
  }]);

  return Md2;
}(hasher8);

/* harmony default export */ var md2 = __webpack_exports__["a"] = (Md2);

/***/ }),
/* 14 */
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

var K = [0x00000000, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc];
/** @type {number[]} */

var ROT = [5, 11, 7, 15, 6, 13, 8, 14, 7, 12, 9, 11, 8, 15, 6, 12, 9, 14, 5, 13];
/** @type {number[]} */

var ROT2 = [10, 17, 25, 30];
/** @type {number[]} */

var IND = [18, 0, 1, 2, 3, 19, 4, 5, 6, 7, 16, 8, 9, 10, 11, 17, 12, 13, 14, 15, 22, 3, 6, 9, 12, 23, 15, 2, 5, 8, 20, 11, 14, 1, 4, 21, 7, 10, 13, 0, 26, 12, 5, 14, 7, 27, 0, 9, 2, 11, 24, 4, 13, 6, 15, 25, 8, 1, 10, 3, 30, 7, 2, 13, 8, 31, 3, 14, 9, 4, 28, 15, 10, 5, 0, 29, 11, 6, 1, 12];
/**
 * Calculates [HAS-160](https://www.randombit.net/has160.html) hash
 *
 * @example <caption>Calculates HAS-160 hash from string "message" - ES6 style</caption>
 * import Has160 from "crypto-api/src/hasher/has160";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Has160();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates HAS-160 hash from UTF string "message" - ES6 style</caption>
 * import Has160 from "crypto-api/src/hasher/has160";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Has160();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates HAS-160 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('has160');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates HAS-160 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('has160', 'message'));
 * </script>
 */

var Has160 =
/*#__PURE__*/
function (_Hasher32le) {
  _inherits(Has160, _Hasher32le);

  /**
   * @param {Object} [options]
   * @param {number} [options.rounds=80] - Number of rounds (Can be from 1 to 80)
   */
  function Has160(options) {
    var _this;

    _classCallCheck(this, Has160);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Has160).call(this, options));
    _this.options.rounds = _this.options.rounds || 80;
    /**
     *  @private
     *  @ignore
     *  @type {number[]}
     */

    _this.W = new Array(32);
    return _this;
  }
  /**
   * Reset hasher to initial state
   */


  _createClass(Has160, [{
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(Has160.prototype), "reset", this).call(this);

      this.state.hash = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
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

      for (var i = 0; i < 16; i++) {
        this.W[i] = block[i] | 0;
      }

      this.W[16] = this.W[0] ^ this.W[1] ^ this.W[2] ^ this.W[3] | 0;
      this.W[17] = this.W[4] ^ this.W[5] ^ this.W[6] ^ this.W[7] | 0;
      this.W[18] = this.W[8] ^ this.W[9] ^ this.W[10] ^ this.W[11] | 0;
      this.W[19] = this.W[12] ^ this.W[13] ^ this.W[14] ^ this.W[15] | 0;
      this.W[20] = this.W[3] ^ this.W[6] ^ this.W[9] ^ this.W[12] | 0;
      this.W[21] = this.W[2] ^ this.W[5] ^ this.W[8] ^ this.W[15] | 0;
      this.W[22] = this.W[1] ^ this.W[4] ^ this.W[11] ^ this.W[14] | 0;
      this.W[23] = this.W[0] ^ this.W[7] ^ this.W[10] ^ this.W[13] | 0;
      this.W[24] = this.W[5] ^ this.W[7] ^ this.W[12] ^ this.W[14] | 0;
      this.W[25] = this.W[0] ^ this.W[2] ^ this.W[9] ^ this.W[11] | 0;
      this.W[26] = this.W[4] ^ this.W[6] ^ this.W[13] ^ this.W[15] | 0;
      this.W[27] = this.W[1] ^ this.W[3] ^ this.W[8] ^ this.W[10] | 0;
      this.W[28] = this.W[2] ^ this.W[7] ^ this.W[8] ^ this.W[13] | 0;
      this.W[29] = this.W[3] ^ this.W[4] ^ this.W[9] ^ this.W[14] | 0;
      this.W[30] = this.W[0] ^ this.W[5] ^ this.W[10] ^ this.W[15] | 0;
      this.W[31] = this.W[1] ^ this.W[6] ^ this.W[11] ^ this.W[12] | 0; // Calculate hash

      for (var _i = 0; _i < this.options.rounds; _i++) {
        var t = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(a, ROT[_i % 20]) + e + this.W[IND[_i]] + K[_i / 20 >> 0] | 0;

        if (_i < 20) {
          t = t + (b & c | ~b & d) | 0;
        } else if (_i < 40) {
          t = t + (b ^ c ^ d) | 0;
        } else if (_i < 60) {
          t = t + (c ^ (b | ~d)) | 0;
        } else {
          t = t + (b ^ c ^ d) | 0;
        }

        e = d;
        d = c;
        c = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(b, ROT2[_i / 20 >> 0]) | 0;
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

  return Has160;
}(_hasher32le__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Has160);

/***/ }),
/* 15 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toBase64; });


var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
/**
 * Convert binary result of hash to Base64
 *
 * @param {string} raw
 * @returns {string}
 */

function toBase64(raw) {
  var str = '';
  var size = raw.length - raw.length % 3 | 0;
  var n = 0;

  for (var i = 0; i < size; i += 3) {
    n = raw.charCodeAt(i) << 16 | raw.charCodeAt(i + 1) << 8 | raw.charCodeAt(i + 2);
    str += chars.charAt(n >> 18) + chars.charAt(n >> 12 & 0x3f) + chars.charAt(n >> 6 & 0x3f) + chars.charAt(n & 0x3f);
  }

  if (raw.length - size === 2) {
    n = raw.charCodeAt(size) << 16 | raw.charCodeAt(size + 1) << 8;
    str += chars.charAt(n >> 18) + chars.charAt(n >> 12 & 0x3f) + chars.charAt(n >> 6 & 0x3f) + '=';
  } else if (raw.length - size === 1) {
    n = raw.charCodeAt(size) << 16;
    str += chars.charAt(n >> 18) + chars.charAt(n >> 12 & 0x3f) + '==';
  }

  return str;
}

/***/ }),
/* 16 */
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

var S = [[3, 7, 11, 19], [3, 5, 9, 13], [3, 9, 11, 15]];
/** @type {number} */

var F = 0x00000000;
/** @type {number} */

var G = 0x5a827999;
/** @type {number} */

var H = 0x6ed9eba1;
/**
 * Calculates [MD4](https://tools.ietf.org/html/rfc1320) hash
 *
 * @example <caption>Calculates MD4 hash from string "message" - ES6 style</caption>
 * import Md4 from "crypto-api/src/hasher/md4";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Md4();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates MD4 hash from UTF string "message" - ES6 style</caption>
 * import Md4 from "crypto-api/src/hasher/md4";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Md4();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates MD4 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('md4');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates MD4 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('md4', 'message'));
 * </script>
 */

var Md4 =
/*#__PURE__*/
function (_Hasher32le) {
  _inherits(Md4, _Hasher32le);

  function Md4() {
    _classCallCheck(this, Md4);

    return _possibleConstructorReturn(this, _getPrototypeOf(Md4).apply(this, arguments));
  }

  _createClass(Md4, [{
    key: "reset",

    /**
     * Reset hasher to initial state
     */
    value: function reset() {
      _get(_getPrototypeOf(Md4.prototype), "reset", this).call(this);

      this.state.hash = [0x67452301 | 0, 0xefcdab89 | 0, 0x98badcfe | 0, 0x10325476 | 0];
    }
    /**
     * @private
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

      a = Md4.CC(Md4.FF, F, a, b, c, d, block[0], S[0][0]);
      d = Md4.CC(Md4.FF, F, d, a, b, c, block[1], S[0][1]);
      c = Md4.CC(Md4.FF, F, c, d, a, b, block[2], S[0][2]);
      b = Md4.CC(Md4.FF, F, b, c, d, a, block[3], S[0][3]);
      a = Md4.CC(Md4.FF, F, a, b, c, d, block[4], S[0][0]);
      d = Md4.CC(Md4.FF, F, d, a, b, c, block[5], S[0][1]);
      c = Md4.CC(Md4.FF, F, c, d, a, b, block[6], S[0][2]);
      b = Md4.CC(Md4.FF, F, b, c, d, a, block[7], S[0][3]);
      a = Md4.CC(Md4.FF, F, a, b, c, d, block[8], S[0][0]);
      d = Md4.CC(Md4.FF, F, d, a, b, c, block[9], S[0][1]);
      c = Md4.CC(Md4.FF, F, c, d, a, b, block[10], S[0][2]);
      b = Md4.CC(Md4.FF, F, b, c, d, a, block[11], S[0][3]);
      a = Md4.CC(Md4.FF, F, a, b, c, d, block[12], S[0][0]);
      d = Md4.CC(Md4.FF, F, d, a, b, c, block[13], S[0][1]);
      c = Md4.CC(Md4.FF, F, c, d, a, b, block[14], S[0][2]);
      b = Md4.CC(Md4.FF, F, b, c, d, a, block[15], S[0][3]); // Round 2

      a = Md4.CC(Md4.GG, G, a, b, c, d, block[0], S[1][0]);
      d = Md4.CC(Md4.GG, G, d, a, b, c, block[4], S[1][1]);
      c = Md4.CC(Md4.GG, G, c, d, a, b, block[8], S[1][2]);
      b = Md4.CC(Md4.GG, G, b, c, d, a, block[12], S[1][3]);
      a = Md4.CC(Md4.GG, G, a, b, c, d, block[1], S[1][0]);
      d = Md4.CC(Md4.GG, G, d, a, b, c, block[5], S[1][1]);
      c = Md4.CC(Md4.GG, G, c, d, a, b, block[9], S[1][2]);
      b = Md4.CC(Md4.GG, G, b, c, d, a, block[13], S[1][3]);
      a = Md4.CC(Md4.GG, G, a, b, c, d, block[2], S[1][0]);
      d = Md4.CC(Md4.GG, G, d, a, b, c, block[6], S[1][1]);
      c = Md4.CC(Md4.GG, G, c, d, a, b, block[10], S[1][2]);
      b = Md4.CC(Md4.GG, G, b, c, d, a, block[14], S[1][3]);
      a = Md4.CC(Md4.GG, G, a, b, c, d, block[3], S[1][0]);
      d = Md4.CC(Md4.GG, G, d, a, b, c, block[7], S[1][1]);
      c = Md4.CC(Md4.GG, G, c, d, a, b, block[11], S[1][2]);
      b = Md4.CC(Md4.GG, G, b, c, d, a, block[15], S[1][3]); // Round 3

      a = Md4.CC(Md4.HH, H, a, b, c, d, block[0], S[2][0]);
      d = Md4.CC(Md4.HH, H, d, a, b, c, block[8], S[2][1]);
      c = Md4.CC(Md4.HH, H, c, d, a, b, block[4], S[2][2]);
      b = Md4.CC(Md4.HH, H, b, c, d, a, block[12], S[2][3]);
      a = Md4.CC(Md4.HH, H, a, b, c, d, block[2], S[2][0]);
      d = Md4.CC(Md4.HH, H, d, a, b, c, block[10], S[2][1]);
      c = Md4.CC(Md4.HH, H, c, d, a, b, block[6], S[2][2]);
      b = Md4.CC(Md4.HH, H, b, c, d, a, block[14], S[2][3]);
      a = Md4.CC(Md4.HH, H, a, b, c, d, block[1], S[2][0]);
      d = Md4.CC(Md4.HH, H, d, a, b, c, block[9], S[2][1]);
      c = Md4.CC(Md4.HH, H, c, d, a, b, block[5], S[2][2]);
      b = Md4.CC(Md4.HH, H, b, c, d, a, block[13], S[2][3]);
      a = Md4.CC(Md4.HH, H, a, b, c, d, block[3], S[2][0]);
      d = Md4.CC(Md4.HH, H, d, a, b, c, block[11], S[2][1]);
      c = Md4.CC(Md4.HH, H, c, d, a, b, block[7], S[2][2]);
      b = Md4.CC(Md4.HH, H, b, c, d, a, block[15], S[2][3]);
      this.state.hash = [this.state.hash[0] + a | 0, this.state.hash[1] + b | 0, this.state.hash[2] + c | 0, this.state.hash[3] + d | 0];
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
     * @private
     * @ignore
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {number}
     */

  }, {
    key: "GG",
    value: function GG(x, y, z) {
      return x & y | x & z | y & z;
    }
    /**
     * @private
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
     * @private
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
     * @constructor
     */

  }, {
    key: "CC",
    value: function CC(f, k, a, x, y, z, m, s) {
      return Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(a + f(x, y, z) + m + k, s) | 0;
    }
  }]);

  return Md4;
}(_hasher32le__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Md4);

/***/ }),
/* 17 */
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
 * Calculates [SHA0](http://pages.saclay.inria.fr/pierre.karpman/fips180.pdf) hash
 *
 * @example <caption>Calculates SHA0 hash from string "message" - ES6 style</caption>
 * import Sha0 from "crypto-api/src/hasher/sha0";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Sha0();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SHA0 hash from UTF string "message" - ES6 style</caption>
 * import Sha0 from "crypto-api/src/hasher/sha0";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Sha0();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SHA0 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('sha0');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates SHA0 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('sha0', 'message'));
 * </script>
 */

var Sha0 =
/*#__PURE__*/
function (_Hasher32be) {
  _inherits(Sha0, _Hasher32be);

  /**
   * @param {Object} [options]
   * @param {number} [options.rounds=80] - Number of rounds (Must be greater than 16)
   */
  function Sha0(options) {
    var _this;

    _classCallCheck(this, Sha0);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sha0).call(this, options));
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


  _createClass(Sha0, [{
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(Sha0.prototype), "reset", this).call(this);

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
          this.W[i] = this.W[i - 3] ^ this.W[i - 8] ^ this.W[i - 14] ^ this.W[i - 16] | 0;
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

  return Sha0;
}(_hasher32be__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Sha0);

/***/ }),
/* 18 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromArrayBuffer; });

/**
 * Convert ArrayBuffer to binary input for hasher
 *
 * @param {ArrayBuffer} buffer
 * @returns {string}
 */

function fromArrayBuffer(buffer) {
  var s = '';
  var bytes = new Uint8Array(buffer);

  for (var i = 0; i < bytes.length; i++) {
    s += String.fromCharCode(bytes[i]);
  }

  return s;
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .flag(object, key, [value])
 *
 * Get or set a flag value on an object. If a
 * value is provided it will be set, else it will
 * return the currently set value or `undefined` if
 * the value is not set.
 *
 *     utils.flag(this, 'foo', 'bar'); // setter
 *     utils.flag(this, 'foo'); // getter, returns `bar`
 *
 * @param {Object} object constructed Assertion
 * @param {String} key
 * @param {Mixed} value (optional)
 * @namespace Utils
 * @name flag
 * @api private
 */

module.exports = function flag(obj, key, value) {
  var flags = obj.__flags || (obj.__flags = Object.create(null));
  if (arguments.length === 3) {
    flags[key] = value;
  } else {
    return flags[key];
  }
};


/***/ }),
/* 20 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

/**
 * Calculates [HMAC](https://tools.ietf.org/html/rfc2104)
 *
 * @example <caption>Calculates HMAC-MD5 from string "message" with key "key" - ES6 style</caption>
 * import Md5 from "crypto-api/src/hasher/md5";
 * import Hmac from "crypto-api/src/mac/hmac";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Md5();
 * let hmac = new Hmac('key', hasher);
 * hmac.update('message');
 * console.log(toHex(hmac.finalize()));
 *
 * @example <caption>Calculates HMAC-MD5 from UTF string "message" with UTF key "key" - ES6 style</caption>
 * import Md5 from "crypto-api/src/hasher/md5";
 * import Hmac from "crypto-api/src/mac/hmac";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Md5();
 * let hmac = new Hmac(fromUtf('key'), hasher);
 * hmac.update(fromUtf('message'));
 * console.log(toHex(hmac.finalize()));
 *
 * @example <caption>Calculates HMAC-MD5 from string "message" with key "key" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('md5');
 *   var hmac = CryptoApi.getHmac('key', hasher);
 *   hmac.update('message');
 *   console.log(CryptoApi.encoder.toHex(hmac.finalize()));
 * </script>
 *
 * @example <caption>Calculates HMAC-MD5 from UTF string "message" with UTF key "key" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('md5');
 *   console.log(CryptoApi.hmac('key', 'message', hasher));
 * </script>
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hmac =
/*#__PURE__*/
function () {
  /**
   *
   * @param {string} key
   * @param {Hasher} hasher
   */
  function Hmac(key, hasher) {
    _classCallCheck(this, Hmac);

    if (key.length > hasher.blockSizeInBytes) {
      hasher.update(key);
      key = hasher.finalize();
      hasher.reset();
    }

    for (var i = key.length; i < hasher.blockSizeInBytes; i++) {
      key += "\x00";
    }
    /**
     * @type {string}
     * @ignore
     */


    this.oPad = '';

    for (var _i = 0; _i < key.length; _i++) {
      hasher.update(String.fromCharCode(0x36 ^ key.charCodeAt(_i)));
      this.oPad += String.fromCharCode(0x5c ^ key.charCodeAt(_i));
    }
    /**
     * @type {Hasher}
     * @ignore
     */


    this.hasher = hasher;
  }
  /**
   * Update message from binary string
   *
   * @param {string} message
   */


  _createClass(Hmac, [{
    key: "update",
    value: function update(message) {
      this.hasher.update(message);
    }
    /**
     * Finalize hmac and return result
     *
     * @returns {string}
     */

  }, {
    key: "finalize",
    value: function finalize() {
      var hash = this.hasher.finalize();
      this.hasher.reset();
      this.hasher.update(this.oPad);
      this.hasher.update(hash);
      return this.hasher.finalize();
    }
  }]);

  return Hmac;
}();

/* harmony default export */ __webpack_exports__["a"] = (Hmac);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var used = [];

/*!
 * Chai version
 */

exports.version = '4.2.0';

/*!
 * Assertion Error
 */

exports.AssertionError = __webpack_require__(33);

/*!
 * Utils for plugins (not exported)
 */

var util = __webpack_require__(45);

/**
 * # .use(function)
 *
 * Provides a way to extend the internals of Chai.
 *
 * @param {Function}
 * @returns {this} for chaining
 * @api public
 */

exports.use = function (fn) {
  if (!~used.indexOf(fn)) {
    fn(exports, util);
    used.push(fn);
  }

  return exports;
};

/*!
 * Utility Functions
 */

exports.util = util;

/*!
 * Configuration
 */

var config = __webpack_require__(23);
exports.config = config;

/*!
 * Primary `Assertion` prototype
 */

var assertion = __webpack_require__(62);
exports.use(assertion);

/*!
 * Core Assertions
 */

var core = __webpack_require__(63);
exports.use(core);

/*!
 * Expect interface
 */

var expect = __webpack_require__(64);
exports.use(expect);

/*!
 * Should interface
 */

var should = __webpack_require__(65);
exports.use(should);

/*!
 * Assert interface
 */

var assert = __webpack_require__(66);
exports.use(assert);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .transferFlags(assertion, object, includeAll = true)
 *
 * Transfer all the flags for `assertion` to `object`. If
 * `includeAll` is set to `false`, then the base Chai
 * assertion flags (namely `object`, `ssfi`, `lockSsfi`,
 * and `message`) will not be transferred.
 *
 *
 *     var newAssertion = new Assertion();
 *     utils.transferFlags(assertion, newAssertion);
 *
 *     var anotherAssertion = new Assertion(myObj);
 *     utils.transferFlags(assertion, anotherAssertion, false);
 *
 * @param {Assertion} assertion the assertion to transfer the flags from
 * @param {Object} object the object to transfer the flags to; usually a new assertion
 * @param {Boolean} includeAll
 * @namespace Utils
 * @name transferFlags
 * @api private
 */

module.exports = function transferFlags(assertion, object, includeAll) {
  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

  if (!object.__flags) {
    object.__flags = Object.create(null);
  }

  includeAll = arguments.length === 3 ? includeAll : true;

  for (var flag in flags) {
    if (includeAll ||
        (flag !== 'object' && flag !== 'ssfi' && flag !== 'lockSsfi' && flag != 'message')) {
      object.__flags[flag] = flags[flag];
    }
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {

  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */

  includeStack: false,

  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */

  showDiff: true,

  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */

  truncateThreshold: 40,

  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {Boolean}
   * @api public
   */

  useProxy: true,

  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @api public
   */

  proxyExcludedKeys: ['then', 'catch', 'inspect', 'toJSON']
};


/***/ }),
/* 24 */
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



/**
 * Calculates [SM3](https://tools.ietf.org/id/draft-oscca-cfrg-sm3-02.html) hash
 *
 * @example <caption>Calculates SM3 hash from string "message" - ES6 style</caption>
 * import Sm3 from "crypto-api/src/hasher/sm3";
 * import {toHex} from "crypto-api/src/encoder/hex";
 *
 * let hasher = new Sm3();
 * hasher.update('message');
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SM3 hash from UTF string "message" - ES6 style</caption>
 * import Sm3 from "crypto-api/src/hasher/sm3";
 * import {toHex} from "crypto-api/src/encoder/hex";
 * import {fromUtf} from "crypto-api/src/encoder/utf";
 *
 * let hasher = new Sm3();
 * hasher.update(fromUtf('message'));
 * console.log(toHex(hasher.finalize()));
 *
 * @example <caption>Calculates SM3 hash from string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   var hasher = CryptoApi.getHasher('sm3');
 *   hasher.update('message');
 *   console.log(CryptoApi.encoder.toHex(hasher.finalize()));
 * </script>
 *
 * @example <caption>Calculates SM3 hash from UTF string "message" - ES5 style</caption>
 * <script src="https://nf404.github.io/crypto-api/crypto-api.min.js"></script>
 * <script>
 *   console.log(CryptoApi.hash('sm3', 'message'));
 * </script>
 */

var Sm3 =
/*#__PURE__*/
function (_Hasher32be) {
  _inherits(Sm3, _Hasher32be);

  /**
   * @param {Object} [options]
   * @param {number} [options.rounds=64] - Number of rounds (Must be greater than 16)
   * @param {number} [options.length=256] - Length of hash result
   */
  function Sm3(options) {
    var _this;

    _classCallCheck(this, Sm3);

    options = options || {};
    options.length = options.length || 256;
    options.rounds = options.rounds || 64;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sm3).call(this, options));
    /**
     * Working variable (only for speed optimization)
     * @private
     * @ignore
     * @type {number[]}
     */

    _this.W = new Array(132);
    return _this;
  }
  /**
   * Reset hasher to initial state
   */


  _createClass(Sm3, [{
    key: "reset",
    value: function reset() {
      _get(_getPrototypeOf(Sm3.prototype), "reset", this).call(this);

      this.state.hash = [0x7380166f | 0, 0x4914b2b9 | 0, 0x172442d7 | 0, 0xda8a0600 | 0, 0xa96f30bc | 0, 0x163138aa | 0, 0xe38dee4d | 0, 0xb0fb0e4e | 0];
    }
    /**
     * @protected
     * @ignore
     * @param {number} x
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
      var d = this.state.hash[3] | 0;
      var e = this.state.hash[4] | 0;
      var f = this.state.hash[5] | 0;
      var g = this.state.hash[6] | 0;
      var h = this.state.hash[7] | 0; // Expand message

      for (var i = 0; i < 132; i++) {
        if (i < 16) {
          this.W[i] = block[i] | 0;
        } else if (i < 68) {
          this.W[i] = Sm3.p1(this.W[i - 16] ^ this.W[i - 9] ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(this.W[i - 3], 15)) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(this.W[i - 13], 7) ^ this.W[i - 6];
        } else {
          this.W[i] = this.W[i - 68] ^ this.W[i - 64];
        }
      } // Calculate hash


      for (var _i = 0; _i < this.options.rounds; _i++) {
        var ss1 = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(a, 12) + e + Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(Sm3.tj(_i), _i % 32) | 0, 7);
        var ss2 = ss1 ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(a, 12);
        var tt1 = Sm3.ffj(_i, a, b, c) + d + ss2 + this.W[_i + 68] | 0;
        var tt2 = Sm3.ggj(_i, e, f, g) + h + ss1 + this.W[_i] | 0;
        d = c;
        c = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(b, 9);
        b = a;
        a = tt1;
        h = g;
        g = Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(f, 19);
        f = e;
        e = Sm3.p0(tt2);
      }

      this.state.hash[0] = this.state.hash[0] ^ a;
      this.state.hash[1] = this.state.hash[1] ^ b;
      this.state.hash[2] = this.state.hash[2] ^ c;
      this.state.hash[3] = this.state.hash[3] ^ d;
      this.state.hash[4] = this.state.hash[4] ^ e;
      this.state.hash[5] = this.state.hash[5] ^ f;
      this.state.hash[6] = this.state.hash[6] ^ g;
      this.state.hash[7] = this.state.hash[7] ^ h;
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
  }], [{
    key: "p0",
    value: function p0(x) {
      return x ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(x, 9) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(x, 17);
    }
    /**
     * @protected
     * @ignore
     * @param {number} x
     * @returns {number}
     */

  }, {
    key: "p1",
    value: function p1(x) {
      return x ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(x, 15) ^ Object(_tools_tools__WEBPACK_IMPORTED_MODULE_1__[/* rotateLeft */ "a"])(x, 23);
    }
    /**
     * @protected
     * @ignore
     * @param {number} i
     * @returns {number}
     */

  }, {
    key: "tj",
    value: function tj(i) {
      return i < 16 ? 0x79cc4519 : 0x7a879d8a;
    }
    /**
     * @protected
     * @ignore
     * @param {number} i
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @returns {number}
     */

  }, {
    key: "ffj",
    value: function ffj(i, a, b, c) {
      return i < 16 ? a ^ b ^ c : a & b | a & c | b & c;
    }
    /**
     * @protected
     * @ignore
     * @param {number} i
     * @param {number} e
     * @param {number} f
     * @param {number} g
     * @returns {number}
     */

  }, {
    key: "ggj",
    value: function ggj(i, e, f, g) {
      return i < 16 ? e ^ f ^ g : e & f | ~e & g;
    }
  }]);

  return Sm3;
}(_hasher32be__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (Sm3);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.assert = __webpack_require__(44).assert;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(23);

/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .isProxyEnabled()
 *
 * Helper function to check if Chai's proxy protection feature is enabled. If
 * proxies are unsupported or disabled via the user's Chai config, then return
 * false. Otherwise, return true.
 *
 * @namespace Utils
 * @name isProxyEnabled
 */

module.exports = function isProxyEnabled() {
  return config.useProxy &&
    typeof Proxy !== 'undefined' &&
    typeof Reflect !== 'undefined';
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var fnLengthDesc = Object.getOwnPropertyDescriptor(function () {}, 'length');

/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .addLengthGuard(fn, assertionName, isChainable)
 *
 * Define `length` as a getter on the given uninvoked method assertion. The
 * getter acts as a guard against chaining `length` directly off of an uninvoked
 * method assertion, which is a problem because it references `function`'s
 * built-in `length` property instead of Chai's `length` assertion. When the
 * getter catches the user making this mistake, it throws an error with a
 * helpful message.
 *
 * There are two ways in which this mistake can be made. The first way is by
 * chaining the `length` assertion directly off of an uninvoked chainable
 * method. In this case, Chai suggests that the user use `lengthOf` instead. The
 * second way is by chaining the `length` assertion directly off of an uninvoked
 * non-chainable method. Non-chainable methods must be invoked prior to
 * chaining. In this case, Chai suggests that the user consult the docs for the
 * given assertion.
 *
 * If the `length` property of functions is unconfigurable, then return `fn`
 * without modification.
 *
 * Note that in ES6, the function's `length` property is configurable, so once
 * support for legacy environments is dropped, Chai's `length` property can
 * replace the built-in function's `length` property, and this length guard will
 * no longer be necessary. In the mean time, maintaining consistency across all
 * environments is the priority.
 *
 * @param {Function} fn
 * @param {String} assertionName
 * @param {Boolean} isChainable
 * @namespace Utils
 * @name addLengthGuard
 */

module.exports = function addLengthGuard (fn, assertionName, isChainable) {
  if (!fnLengthDesc.configurable) return fn;

  Object.defineProperty(fn, 'length', {
    get: function () {
      if (isChainable) {
        throw Error('Invalid Chai property: ' + assertionName + '.length. Due' +
          ' to a compatibility issue, "length" cannot directly follow "' +
          assertionName + '". Use "' + assertionName + '.lengthOf" instead.');
      }

      throw Error('Invalid Chai property: ' + assertionName + '.length. See' +
        ' docs for proper usage of "' + assertionName + '".');
    }
  });

  return fn;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var config = __webpack_require__(23);
var flag = __webpack_require__(19);
var getProperties = __webpack_require__(37);
var isProxyEnabled = __webpack_require__(26);

/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .proxify(object)
 *
 * Return a proxy of given object that throws an error when a non-existent
 * property is read. By default, the root cause is assumed to be a misspelled
 * property, and thus an attempt is made to offer a reasonable suggestion from
 * the list of existing properties. However, if a nonChainableMethodName is
 * provided, then the root cause is instead a failure to invoke a non-chainable
 * method prior to reading the non-existent property.
 *
 * If proxies are unsupported or disabled via the user's Chai config, then
 * return object without modification.
 *
 * @param {Object} obj
 * @param {String} nonChainableMethodName
 * @namespace Utils
 * @name proxify
 */

var builtins = ['__flags', '__methods', '_obj', 'assert'];

module.exports = function proxify(obj, nonChainableMethodName) {
  if (!isProxyEnabled()) return obj;

  return new Proxy(obj, {
    get: function proxyGetter(target, property) {
      // This check is here because we should not throw errors on Symbol properties
      // such as `Symbol.toStringTag`.
      // The values for which an error should be thrown can be configured using
      // the `config.proxyExcludedKeys` setting.
      if (typeof property === 'string' &&
          config.proxyExcludedKeys.indexOf(property) === -1 &&
          !Reflect.has(target, property)) {
        // Special message for invalid property access of non-chainable methods.
        if (nonChainableMethodName) {
          throw Error('Invalid Chai property: ' + nonChainableMethodName + '.' +
            property + '. See docs for proper usage of "' +
            nonChainableMethodName + '".');
        }

        // If the property is reasonably close to an existing Chai property,
        // suggest that property to the user. Only suggest properties with a
        // distance less than 4.
        var suggestion = null;
        var suggestionDistance = 4;
        getProperties(target).forEach(function(prop) {
          if (
            !Object.prototype.hasOwnProperty(prop) &&
            builtins.indexOf(prop) === -1
          ) {
            var dist = stringDistanceCapped(
              property,
              prop,
              suggestionDistance
            );
            if (dist < suggestionDistance) {
              suggestion = prop;
              suggestionDistance = dist;
            }
          }
        });

        if (suggestion !== null) {
          throw Error('Invalid Chai property: ' + property +
            '. Did you mean "' + suggestion + '"?');
        } else {
          throw Error('Invalid Chai property: ' + property);
        }
      }

      // Use this proxy getter as the starting point for removing implementation
      // frames from the stack trace of a failed assertion. For property
      // assertions, this prevents the proxy getter from showing up in the stack
      // trace since it's invoked before the property getter. For method and
      // chainable method assertions, this flag will end up getting changed to
      // the method wrapper, which is good since this frame will no longer be in
      // the stack once the method is invoked. Note that Chai builtin assertion
      // properties such as `__flags` are skipped since this is only meant to
      // capture the starting point of an assertion. This step is also skipped
      // if the `lockSsfi` flag is set, thus indicating that this assertion is
      // being called from within another assertion. In that case, the `ssfi`
      // flag is already set to the outer assertion's starting point.
      if (builtins.indexOf(property) === -1 && !flag(target, 'lockSsfi')) {
        flag(target, 'ssfi', proxyGetter);
      }

      return Reflect.get(target, property);
    }
  });
};

/**
 * # stringDistanceCapped(strA, strB, cap)
 * Return the Levenshtein distance between two strings, but no more than cap.
 * @param {string} strA
 * @param {string} strB
 * @param {number} number
 * @return {number} min(string distance between strA and strB, cap)
 * @api private
 */

function stringDistanceCapped(strA, strB, cap) {
  if (Math.abs(strA.length - strB.length) >= cap) {
    return cap;
  }

  var memo = [];
  // `memo` is a two-dimensional array containing distances.
  // memo[i][j] is the distance between strA.slice(0, i) and
  // strB.slice(0, j).
  for (var i = 0; i <= strA.length; i++) {
    memo[i] = Array(strB.length + 1).fill(0);
    memo[i][0] = i;
  }
  for (var j = 0; j < strB.length; j++) {
    memo[0][j] = j;
  }

  for (var i = 1; i <= strA.length; i++) {
    var ch = strA.charCodeAt(i - 1);
    for (var j = 1; j <= strB.length; j++) {
      if (Math.abs(i - j) >= cap) {
        memo[i][j] = cap;
        continue;
      }
      memo[i][j] = Math.min(
        memo[i - 1][j] + 1,
        memo[i][j - 1] + 1,
        memo[i - 1][j - 1] +
          (ch === strB.charCodeAt(j - 1) ? 0 : 1)
      );
    }
  }

  return memo[strA.length][strB.length];
}


/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

/* !
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var promiseExists = typeof Promise === 'function';

/* eslint-disable no-undef */
var globalObject = typeof self === 'object' ? self : global; // eslint-disable-line id-blacklist

var symbolExists = typeof Symbol !== 'undefined';
var mapExists = typeof Map !== 'undefined';
var setExists = typeof Set !== 'undefined';
var weakMapExists = typeof WeakMap !== 'undefined';
var weakSetExists = typeof WeakSet !== 'undefined';
var dataViewExists = typeof DataView !== 'undefined';
var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== 'undefined';
var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== 'undefined';
var setEntriesExists = setExists && typeof Set.prototype.entries === 'function';
var mapEntriesExists = mapExists && typeof Map.prototype.entries === 'function';
var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf(new Set().entries());
var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf(new Map().entries());
var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === 'function';
var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
var toStringLeftSliceLength = 8;
var toStringRightSliceLength = -1;
/**
 * ### typeOf (obj)
 *
 * Uses `Object.prototype.toString` to determine the type of an object,
 * normalising behaviour across engine versions & well optimised.
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
function typeDetect(obj) {
  /* ! Speed optimisation
   * Pre:
   *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
   *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
   *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
   *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
   *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
   * Post:
   *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
   *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
   *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
   *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
   *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
   */
  var typeofObj = typeof obj;
  if (typeofObj !== 'object') {
    return typeofObj;
  }

  /* ! Speed optimisation
   * Pre:
   *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
   * Post:
   *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
   */
  if (obj === null) {
    return 'null';
  }

  /* ! Spec Conformance
   * Test: `Object.prototype.toString.call(window)``
   *  - Node === "[object global]"
   *  - Chrome === "[object global]"
   *  - Firefox === "[object Window]"
   *  - PhantomJS === "[object Window]"
   *  - Safari === "[object Window]"
   *  - IE 11 === "[object Window]"
   *  - IE Edge === "[object Window]"
   * Test: `Object.prototype.toString.call(this)``
   *  - Chrome Worker === "[object global]"
   *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
   *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
   *  - IE 11 Worker === "[object WorkerGlobalScope]"
   *  - IE Edge Worker === "[object WorkerGlobalScope]"
   */
  if (obj === globalObject) {
    return 'global';
  }

  /* ! Speed optimisation
   * Pre:
   *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
   * Post:
   *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
   */
  if (
    Array.isArray(obj) &&
    (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))
  ) {
    return 'Array';
  }

  // Not caching existence of `window` and related properties due to potential
  // for `window` to be unset before tests in quasi-browser environments.
  if (typeof window === 'object' && window !== null) {
    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/browsers.html#location)
     * WhatWG HTML$7.7.3 - The `Location` interface
     * Test: `Object.prototype.toString.call(window.location)``
     *  - IE <=11 === "[object Object]"
     *  - IE Edge <=13 === "[object Object]"
     */
    if (typeof window.location === 'object' && obj === window.location) {
      return 'Location';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#document)
     * WhatWG HTML$3.1.1 - The `Document` object
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     *       WhatWG HTML states:
     *         > For historical reasons, Window objects must also have a
     *         > writable, configurable, non-enumerable property named
     *         > HTMLDocument whose value is the Document interface object.
     * Test: `Object.prototype.toString.call(document)``
     *  - Chrome === "[object HTMLDocument]"
     *  - Firefox === "[object HTMLDocument]"
     *  - Safari === "[object HTMLDocument]"
     *  - IE <=10 === "[object Document]"
     *  - IE 11 === "[object HTMLDocument]"
     *  - IE Edge <=13 === "[object HTMLDocument]"
     */
    if (typeof window.document === 'object' && obj === window.document) {
      return 'Document';
    }

    if (typeof window.navigator === 'object') {
      /* ! Spec Conformance
       * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
       * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
       * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
       *  - IE <=10 === "[object MSMimeTypesCollection]"
       */
      if (typeof window.navigator.mimeTypes === 'object' &&
          obj === window.navigator.mimeTypes) {
        return 'MimeTypeArray';
      }

      /* ! Spec Conformance
       * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
       * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
       * Test: `Object.prototype.toString.call(navigator.plugins)``
       *  - IE <=10 === "[object MSPluginsCollection]"
       */
      if (typeof window.navigator.plugins === 'object' &&
          obj === window.navigator.plugins) {
        return 'PluginArray';
      }
    }

    if ((typeof window.HTMLElement === 'function' ||
        typeof window.HTMLElement === 'object') &&
        obj instanceof window.HTMLElement) {
      /* ! Spec Conformance
      * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
      * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
      * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
      *  - IE <=10 === "[object HTMLBlockElement]"
      */
      if (obj.tagName === 'BLOCKQUOTE') {
        return 'HTMLQuoteElement';
      }

      /* ! Spec Conformance
       * (https://html.spec.whatwg.org/#htmltabledatacellelement)
       * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
       * Note: Most browsers currently adher to the W3C DOM Level 2 spec
       *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
       *       which suggests that browsers should use HTMLTableCellElement for
       *       both TD and TH elements. WhatWG separates these.
       * Test: Object.prototype.toString.call(document.createElement('td'))
       *  - Chrome === "[object HTMLTableCellElement]"
       *  - Firefox === "[object HTMLTableCellElement]"
       *  - Safari === "[object HTMLTableCellElement]"
       */
      if (obj.tagName === 'TD') {
        return 'HTMLTableDataCellElement';
      }

      /* ! Spec Conformance
       * (https://html.spec.whatwg.org/#htmltableheadercellelement)
       * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
       * Note: Most browsers currently adher to the W3C DOM Level 2 spec
       *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
       *       which suggests that browsers should use HTMLTableCellElement for
       *       both TD and TH elements. WhatWG separates these.
       * Test: Object.prototype.toString.call(document.createElement('th'))
       *  - Chrome === "[object HTMLTableCellElement]"
       *  - Firefox === "[object HTMLTableCellElement]"
       *  - Safari === "[object HTMLTableCellElement]"
       */
      if (obj.tagName === 'TH') {
        return 'HTMLTableHeaderCellElement';
      }
    }
  }

  /* ! Speed optimisation
  * Pre:
  *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
  *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
  *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
  *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
  *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
  *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
  *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
  *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
  *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
  * Post:
  *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
  *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
  *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
  *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
  *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
  *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
  *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
  *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
  *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
  */
  var stringTag = (symbolToStringTagExists && obj[Symbol.toStringTag]);
  if (typeof stringTag === 'string') {
    return stringTag;
  }

  var objPrototype = Object.getPrototypeOf(obj);
  /* ! Speed optimisation
  * Pre:
  *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
  *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
  * Post:
  *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
  *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
  */
  if (objPrototype === RegExp.prototype) {
    return 'RegExp';
  }

  /* ! Speed optimisation
  * Pre:
  *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
  * Post:
  *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
  */
  if (objPrototype === Date.prototype) {
    return 'Date';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
   * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
   * Test: `Object.prototype.toString.call(Promise.resolve())``
   *  - Chrome <=47 === "[object Object]"
   *  - Edge <=20 === "[object Object]"
   *  - Firefox 29-Latest === "[object Promise]"
   *  - Safari 7.1-Latest === "[object Promise]"
   */
  if (promiseExists && objPrototype === Promise.prototype) {
    return 'Promise';
  }

  /* ! Speed optimisation
  * Pre:
  *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
  * Post:
  *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
  */
  if (setExists && objPrototype === Set.prototype) {
    return 'Set';
  }

  /* ! Speed optimisation
  * Pre:
  *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
  * Post:
  *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
  */
  if (mapExists && objPrototype === Map.prototype) {
    return 'Map';
  }

  /* ! Speed optimisation
  * Pre:
  *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
  * Post:
  *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
  */
  if (weakSetExists && objPrototype === WeakSet.prototype) {
    return 'WeakSet';
  }

  /* ! Speed optimisation
  * Pre:
  *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
  * Post:
  *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
  */
  if (weakMapExists && objPrototype === WeakMap.prototype) {
    return 'WeakMap';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
   * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
   * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
   *  - Edge <=13 === "[object Object]"
   */
  if (dataViewExists && objPrototype === DataView.prototype) {
    return 'DataView';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
   * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
   * Test: `Object.prototype.toString.call(new Map().entries())``
   *  - Edge <=13 === "[object Object]"
   */
  if (mapExists && objPrototype === mapIteratorPrototype) {
    return 'Map Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
   * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
   * Test: `Object.prototype.toString.call(new Set().entries())``
   *  - Edge <=13 === "[object Object]"
   */
  if (setExists && objPrototype === setIteratorPrototype) {
    return 'Set Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
   * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
   * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
   *  - Edge <=13 === "[object Object]"
   */
  if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
    return 'Array Iterator';
  }

  /* ! Spec Conformance
   * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
   * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
   * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
   *  - Edge <=13 === "[object Object]"
   */
  if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
    return 'String Iterator';
  }

  /* ! Speed optimisation
  * Pre:
  *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
  * Post:
  *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
  */
  if (objPrototype === null) {
    return 'Object';
  }

  return Object
    .prototype
    .toString
    .call(obj)
    .slice(toStringLeftSliceLength, toStringRightSliceLength);
}

return typeDetect;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// This is (almost) directly from Node.js utils
// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

var getName = __webpack_require__(36);
var getProperties = __webpack_require__(37);
var getEnumerableProperties = __webpack_require__(50);
var config = __webpack_require__(23);

module.exports = inspect;

/**
 * ### .inspect(obj, [showHidden], [depth], [colors])
 *
 * Echoes the value of a value. Tries to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
 *    properties of objects. Default is false.
 * @param {Number} depth Depth in which to descend in object. Default is 2.
 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
 *    output. Default is false (no coloring).
 * @namespace Utils
 * @name inspect
 */
function inspect(obj, showHidden, depth, colors) {
  var ctx = {
    showHidden: showHidden,
    seen: [],
    stylize: function (str) { return str; }
  };
  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
}

// Returns true if object is a DOM element.
var isDOMElement = function (object) {
  if (typeof HTMLElement === 'object') {
    return object instanceof HTMLElement;
  } else {
    return object &&
      typeof object === 'object' &&
      'nodeType' in object &&
      object.nodeType === 1 &&
      typeof object.nodeName === 'string';
  }
};

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (value && typeof value.inspect === 'function' &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (typeof ret !== 'string') {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // If this is a DOM element, try to get the outer HTML.
  if (isDOMElement(value)) {
    if ('outerHTML' in value) {
      return value.outerHTML;
      // This value does not have an outerHTML attribute,
      //   it could still be an XML element
    } else {
      // Attempt to serialize it
      try {
        if (document.xmlVersion) {
          var xmlSerializer = new XMLSerializer();
          return xmlSerializer.serializeToString(value);
        } else {
          // Firefox 11- do not support outerHTML
          //   It does, however, support innerHTML
          //   Use the following to render the element
          var ns = "http://www.w3.org/1999/xhtml";
          var container = document.createElementNS(ns, '_');

          container.appendChild(value.cloneNode(false));
          var html = container.innerHTML
            .replace('><', '>' + value.innerHTML + '<');
          container.innerHTML = '';
          return html;
        }
      } catch (err) {
        // This could be a non-native DOM implementation,
        //   continue with the normal flow:
        //   printing the element as if it is an object.
      }
    }
  }

  // Look up the keys of the object.
  var visibleKeys = getEnumerableProperties(value);
  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

  var name, nameSuffix;

  // Some type of object without properties can be shortcut.
  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
  // a `stack` plus `description` property; ignore those for consistency.
  if (keys.length === 0 || (isError(value) && (
      (keys.length === 1 && keys[0] === 'stack') ||
      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
     ))) {
    if (typeof value === 'function') {
      name = getName(value);
      nameSuffix = name ? ': ' + name : '';
      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = ''
    , array = false
    , typedArray = false
    , braces = ['{', '}'];

  if (isTypedArray(value)) {
    typedArray = true;
    braces = ['[', ']'];
  }

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (typeof value === 'function') {
    name = getName(value);
    nameSuffix = name ? ': ' + name : '';
    base = ' [Function' + nameSuffix + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    return formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else if (typedArray) {
    return formatTypedArray(value);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  switch (typeof value) {
    case 'undefined':
      return ctx.stylize('undefined', 'undefined');

    case 'string':
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');

    case 'number':
      if (value === 0 && (1/value) === -Infinity) {
        return ctx.stylize('-0', 'number');
      }
      return ctx.stylize('' + value, 'number');

    case 'boolean':
      return ctx.stylize('' + value, 'boolean');

    case 'symbol':
      return ctx.stylize(value.toString(), 'symbol');
  }
  // For some reason typeof null is "object", so special case here.
  if (value === null) {
    return ctx.stylize('null', 'null');
  }
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}

function formatTypedArray(value) {
  var str = '[ ';

  for (var i = 0; i < value.length; ++i) {
    if (str.length >= config.truncateThreshold - 7) {
      str += '...';
      break;
    }
    str += value[i] + ', ';
  }
  str += ' ]';

  // Removing trailing `, ` if the array was not truncated
  if (str.indexOf(',  ]') !== -1) {
    str = str.replace(',  ]', ' ]');
  }

  return str;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name;
  var propDescriptor = Object.getOwnPropertyDescriptor(value, key);
  var str;

  if (propDescriptor) {
    if (propDescriptor.get) {
      if (propDescriptor.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (propDescriptor.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
  }
  if (visibleKeys.indexOf(key) < 0) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(value[key]) < 0) {
      if (recurseTimes === null) {
        str = formatValue(ctx, value[key], null);
      } else {
        str = formatValue(ctx, value[key], recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (typeof name === 'undefined') {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var length = output.reduce(function(prev, cur) {
    return prev + cur.length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

function isTypedArray(ar) {
  // Unfortunately there's no way to check if an object is a TypedArray
  // We have to check if it's one of these types
  return (typeof ar === 'object' && /\w+Array]$/.test(objectToString(ar)));
}

function isArray(ar) {
  return Array.isArray(ar) ||
         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
}

function isRegExp(re) {
  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
}

function isDate(d) {
  return typeof d === 'object' && objectToString(d) === '[object Date]';
}

function isError(e) {
  return typeof e === 'object' && objectToString(e) === '[object Error]';
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */

function exclude () {
  var excludes = [].slice.call(arguments);

  function excludeProps (res, obj) {
    Object.keys(obj).forEach(function (key) {
      if (!~excludes.indexOf(key)) res[key] = obj[key];
    });
  }

  return function extendExclude () {
    var args = [].slice.call(arguments)
      , i = 0
      , res = {};

    for (; i < args.length; i++) {
      excludeProps(res, args[i]);
    }

    return res;
  };
};

/*!
 * Primary Exports
 */

module.exports = AssertionError;

/**
 * ### AssertionError
 *
 * An extension of the JavaScript `Error` constructor for
 * assertion and validation scenarios.
 *
 * @param {String} message
 * @param {Object} properties to include (optional)
 * @param {callee} start stack function (optional)
 */

function AssertionError (message, _props, ssf) {
  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
    , props = extend(_props || {});

  // default values
  this.message = message || 'Unspecified AssertionError';
  this.showDiff = false;

  // copy from properties
  for (var key in props) {
    this[key] = props[key];
  }

  // capture stack trace
  ssf = ssf || AssertionError;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, ssf);
  } else {
    try {
      throw new Error();
    } catch(e) {
      this.stack = e.stack;
    }
  }
}

/*!
 * Inherit from Error.prototype
 */

AssertionError.prototype = Object.create(Error.prototype);

/*!
 * Statically set name
 */

AssertionError.prototype.name = 'AssertionError';

/*!
 * Ensure correct constructor
 */

AssertionError.prototype.constructor = AssertionError;

/**
 * Allow errors to be converted to JSON for static transfer.
 *
 * @param {Boolean} include stack (default: `true`)
 * @return {Object} object that can be `JSON.stringify`
 */

AssertionError.prototype.toJSON = function (stack) {
  var extend = exclude('constructor', 'toJSON', 'stack')
    , props = extend({ name: this.name }, this);

  // include stack if exists and not turned off
  if (false !== stack && this.stack) {
    props.stack = this.stack;
  }

  return props;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getActual(object, [actual])
 *
 * Returns the `actual` value for an Assertion.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getActual
 */

module.exports = function getActual(obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var inspect = __webpack_require__(31);
var config = __webpack_require__(23);

/**
 * ### .objDisplay(object)
 *
 * Determines if an object or an array matches
 * criteria to be inspected in-line for error
 * messages or should be truncated.
 *
 * @param {Mixed} javascript object to inspect
 * @name objDisplay
 * @namespace Utils
 * @api public
 */

module.exports = function objDisplay(obj) {
  var str = inspect(obj)
    , type = Object.prototype.toString.call(obj);

  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
    if (type === '[object Function]') {
      return !obj.name || obj.name === ''
        ? '[Function]'
        : '[Function: ' + obj.name + ']';
    } else if (type === '[object Array]') {
      return '[ Array(' + obj.length + ') ]';
    } else if (type === '[object Object]') {
      var keys = Object.keys(obj)
        , kstr = keys.length > 2
          ? keys.splice(0, 2).join(', ') + ', ...'
          : keys.join(', ');
      return '{ Object (' + kstr + ') }';
    } else {
      return str;
    }
  } else {
    return str;
  }
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* !
 * Chai - getFuncName utility
 * Copyright(c) 2012-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getFuncName(constructorFn)
 *
 * Returns the name of a function.
 * When a non-function instance is passed, returns `null`.
 * This also includes a polyfill function if `aFunc.name` is not defined.
 *
 * @name getFuncName
 * @param {Function} funct
 * @namespace Utils
 * @api public
 */

var toString = Function.prototype.toString;
var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
function getFuncName(aFunc) {
  if (typeof aFunc !== 'function') {
    return null;
  }

  var name = '';
  if (typeof Function.prototype.name === 'undefined' && typeof aFunc.name === 'undefined') {
    // Here we run a polyfill if Function does not support the `name` property and if aFunc.name is not defined
    var match = toString.call(aFunc).match(functionNameMatch);
    if (match) {
      name = match[1];
    }
  } else {
    // If we've got a `name` property we just use it
    name = aFunc.name;
  }

  return name;
}

module.exports = getFuncName;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getProperties(object)
 *
 * This allows the retrieval of property names of an object, enumerable or not,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getProperties
 * @api public
 */

module.exports = function getProperties(object) {
  var result = Object.getOwnPropertyNames(object);

  function addProperty(property) {
    if (result.indexOf(property) === -1) {
      result.push(property);
    }
  }

  var proto = Object.getPrototypeOf(object);
  while (proto !== null) {
    Object.getOwnPropertyNames(proto).forEach(addProperty);
    proto = Object.getPrototypeOf(proto);
  }

  return result;
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getOwnEnumerablePropertySymbols(object)
 *
 * This allows the retrieval of directly-owned enumerable property symbols of an
 * object. This function is necessary because Object.getOwnPropertySymbols
 * returns both enumerable and non-enumerable property symbols.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getOwnEnumerablePropertySymbols
 * @api public
 */

module.exports = function getOwnEnumerablePropertySymbols(obj) {
  if (typeof Object.getOwnPropertySymbols !== 'function') return [];

  return Object.getOwnPropertySymbols(obj).filter(function (sym) {
    return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
  });
};


/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Dependencies that are used for multiple exports are required here only once
 */

var pathval = __webpack_require__(46);

/*!
 * test utility
 */

exports.test = __webpack_require__(47);

/*!
 * type utility
 */

exports.type = __webpack_require__(30);

/*!
 * expectTypes utility
 */
exports.expectTypes = __webpack_require__(48);

/*!
 * message utility
 */

exports.getMessage = __webpack_require__(49);

/*!
 * actual utility
 */

exports.getActual = __webpack_require__(34);

/*!
 * Inspect util
 */

exports.inspect = __webpack_require__(31);

/*!
 * Object Display util
 */

exports.objDisplay = __webpack_require__(35);

/*!
 * Flag utility
 */

exports.flag = __webpack_require__(19);

/*!
 * Flag transferring utility
 */

exports.transferFlags = __webpack_require__(22);

/*!
 * Deep equal utility
 */

exports.eql = __webpack_require__(51);

/*!
 * Deep path info
 */

exports.getPathInfo = pathval.getPathInfo;

/*!
 * Check if a property exists
 */

exports.hasProperty = pathval.hasProperty;

/*!
 * Function name
 */

exports.getName = __webpack_require__(36);

/*!
 * add Property
 */

exports.addProperty = __webpack_require__(52);

/*!
 * add Method
 */

exports.addMethod = __webpack_require__(53);

/*!
 * overwrite Property
 */

exports.overwriteProperty = __webpack_require__(54);

/*!
 * overwrite Method
 */

exports.overwriteMethod = __webpack_require__(55);

/*!
 * Add a chainable method
 */

exports.addChainableMethod = __webpack_require__(56);

/*!
 * Overwrite chainable method
 */

exports.overwriteChainableMethod = __webpack_require__(57);

/*!
 * Compare by inspect method
 */

exports.compareByInspect = __webpack_require__(58);

/*!
 * Get own enumerable property symbols method
 */

exports.getOwnEnumerablePropertySymbols = __webpack_require__(38);

/*!
 * Get own enumerable properties method
 */

exports.getOwnEnumerableProperties = __webpack_require__(59);

/*!
 * Checks error against a given set of criteria
 */

exports.checkError = __webpack_require__(60);

/*!
 * Proxify util
 */

exports.proxify = __webpack_require__(28);

/*!
 * addLengthGuard util
 */

exports.addLengthGuard = __webpack_require__(27);

/*!
 * isProxyEnabled helper
 */

exports.isProxyEnabled = __webpack_require__(26);

/*!
 * isNaN method
 */

exports.isNaN = __webpack_require__(61);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* !
 * Chai - pathval utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */

/**
 * ### .hasProperty(object, name)
 *
 * This allows checking whether an object has own
 * or inherited from prototype chain named property.
 *
 * Basically does the same thing as the `in`
 * operator but works properly with null/undefined values
 * and other primitives.
 *
 *     var obj = {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *
 * The following would be the results.
 *
 *     hasProperty(obj, 'str');  // true
 *     hasProperty(obj, 'constructor');  // true
 *     hasProperty(obj, 'bar');  // false
 *
 *     hasProperty(obj.str, 'length'); // true
 *     hasProperty(obj.str, 1);  // true
 *     hasProperty(obj.str, 5);  // false
 *
 *     hasProperty(obj.arr, 'length');  // true
 *     hasProperty(obj.arr, 2);  // true
 *     hasProperty(obj.arr, 3);  // false
 *
 * @param {Object} object
 * @param {String|Symbol} name
 * @returns {Boolean} whether it exists
 * @namespace Utils
 * @name hasProperty
 * @api public
 */

function hasProperty(obj, name) {
  if (typeof obj === 'undefined' || obj === null) {
    return false;
  }

  // The `in` operator does not work with primitives.
  return name in Object(obj);
}

/* !
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `internalGetPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be infinitely deep and nested.
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */

function parsePath(path) {
  var str = path.replace(/([^\\])\[/g, '$1.[');
  var parts = str.match(/(\\\.|[^.]+?)+/g);
  return parts.map(function mapMatches(value) {
    var regexp = /^\[(\d+)\]$/;
    var mArr = regexp.exec(value);
    var parsed = null;
    if (mArr) {
      parsed = { i: parseFloat(mArr[1]) };
    } else {
      parsed = { p: value.replace(/\\([.\[\]])/g, '$1') };
    }

    return parsed;
  });
}

/* !
 * ## internalGetPathValue(obj, parsed[, pathDepth])
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(obj, parsed);
 *
 * @param {Object} object to search against
 * @param {Object} parsed definition from `parsePath`.
 * @param {Number} depth (nesting level) of the property we want to retrieve
 * @returns {Object|Undefined} value
 * @api private
 */

function internalGetPathValue(obj, parsed, pathDepth) {
  var temporaryValue = obj;
  var res = null;
  pathDepth = (typeof pathDepth === 'undefined' ? parsed.length : pathDepth);

  for (var i = 0; i < pathDepth; i++) {
    var part = parsed[i];
    if (temporaryValue) {
      if (typeof part.p === 'undefined') {
        temporaryValue = temporaryValue[part.i];
      } else {
        temporaryValue = temporaryValue[part.p];
      }

      if (i === (pathDepth - 1)) {
        res = temporaryValue;
      }
    }
  }

  return res;
}

/* !
 * ## internalSetPathValue(obj, value, parsed)
 *
 * Companion function for `parsePath` that sets
 * the value located at a parsed address.
 *
 *  internalSetPathValue(obj, 'value', parsed);
 *
 * @param {Object} object to search and define on
 * @param {*} value to use upon set
 * @param {Object} parsed definition from `parsePath`
 * @api private
 */

function internalSetPathValue(obj, val, parsed) {
  var tempObj = obj;
  var pathDepth = parsed.length;
  var part = null;
  // Here we iterate through every part of the path
  for (var i = 0; i < pathDepth; i++) {
    var propName = null;
    var propVal = null;
    part = parsed[i];

    // If it's the last part of the path, we set the 'propName' value with the property name
    if (i === (pathDepth - 1)) {
      propName = typeof part.p === 'undefined' ? part.i : part.p;
      // Now we set the property with the name held by 'propName' on object with the desired val
      tempObj[propName] = val;
    } else if (typeof part.p !== 'undefined' && tempObj[part.p]) {
      tempObj = tempObj[part.p];
    } else if (typeof part.i !== 'undefined' && tempObj[part.i]) {
      tempObj = tempObj[part.i];
    } else {
      // If the obj doesn't have the property we create one with that name to define it
      var next = parsed[i + 1];
      // Here we set the name of the property which will be defined
      propName = typeof part.p === 'undefined' ? part.i : part.p;
      // Here we decide if this property will be an array or a new object
      propVal = typeof next.p === 'undefined' ? [] : {};
      tempObj[propName] = propVal;
      tempObj = tempObj[propName];
    }
  }
}

/**
 * ### .getPathInfo(object, path)
 *
 * This allows the retrieval of property info in an
 * object given a string path.
 *
 * The path info consists of an object with the
 * following properties:
 *
 * * parent - The parent object of the property referenced by `path`
 * * name - The name of the final property, a number if it was an array indexer
 * * value - The value of the property, if it exists, otherwise `undefined`
 * * exists - Whether the property exists or not
 *
 * @param {Object} object
 * @param {String} path
 * @returns {Object} info
 * @namespace Utils
 * @name getPathInfo
 * @api public
 */

function getPathInfo(obj, path) {
  var parsed = parsePath(path);
  var last = parsed[parsed.length - 1];
  var info = {
    parent: parsed.length > 1 ? internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
    name: last.p || last.i,
    value: internalGetPathValue(obj, parsed),
  };
  info.exists = hasProperty(info.parent, info.name);

  return info;
}

/**
 * ### .getPathValue(object, path)
 *
 * This allows the retrieval of values in an
 * object given a string path.
 *
 *     var obj = {
 *         prop1: {
 *             arr: ['a', 'b', 'c']
 *           , str: 'Hello'
 *         }
 *       , prop2: {
 *             arr: [ { nested: 'Universe' } ]
 *           , str: 'Hello again!'
 *         }
 *     }
 *
 * The following would be the results.
 *
 *     getPathValue(obj, 'prop1.str'); // Hello
 *     getPathValue(obj, 'prop1.att[2]'); // b
 *     getPathValue(obj, 'prop2.arr[0].nested'); // Universe
 *
 * @param {Object} object
 * @param {String} path
 * @returns {Object} value or `undefined`
 * @namespace Utils
 * @name getPathValue
 * @api public
 */

function getPathValue(obj, path) {
  var info = getPathInfo(obj, path);
  return info.value;
}

/**
 * ### .setPathValue(object, path, value)
 *
 * Define the value in an object at a given string path.
 *
 * ```js
 * var obj = {
 *     prop1: {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *   , prop2: {
 *         arr: [ { nested: 'Universe' } ]
 *       , str: 'Hello again!'
 *     }
 * };
 * ```
 *
 * The following would be acceptable.
 *
 * ```js
 * var properties = require('tea-properties');
 * properties.set(obj, 'prop1.str', 'Hello Universe!');
 * properties.set(obj, 'prop1.arr[2]', 'B');
 * properties.set(obj, 'prop2.arr[0].nested.value', { hello: 'universe' });
 * ```
 *
 * @param {Object} object
 * @param {String} path
 * @param {Mixed} value
 * @api private
 */

function setPathValue(obj, path, val) {
  var parsed = parsePath(path);
  internalSetPathValue(obj, val, parsed);
  return obj;
}

module.exports = {
  hasProperty: hasProperty,
  getPathInfo: getPathInfo,
  getPathValue: getPathValue,
  setPathValue: setPathValue,
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var flag = __webpack_require__(19);

/**
 * ### .test(object, expression)
 *
 * Test and object for expression.
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name test
 */

module.exports = function test(obj, args) {
  var negate = flag(obj, 'negate')
    , expr = args[0];
  return negate ? !expr : expr;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .expectTypes(obj, types)
 *
 * Ensures that the object being tested against is of a valid type.
 *
 *     utils.expectTypes(this, ['array', 'object', 'string']);
 *
 * @param {Mixed} obj constructed Assertion
 * @param {Array} type A list of allowed types for this assertion
 * @namespace Utils
 * @name expectTypes
 * @api public
 */

var AssertionError = __webpack_require__(33);
var flag = __webpack_require__(19);
var type = __webpack_require__(30);

module.exports = function expectTypes(obj, types) {
  var flagMsg = flag(obj, 'message');
  var ssfi = flag(obj, 'ssfi');

  flagMsg = flagMsg ? flagMsg + ': ' : '';

  obj = flag(obj, 'object');
  types = types.map(function (t) { return t.toLowerCase(); });
  types.sort();

  // Transforms ['lorem', 'ipsum'] into 'a lorem, or an ipsum'
  var str = types.map(function (t, index) {
    var art = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(t.charAt(0)) ? 'an' : 'a';
    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
    return or + art + ' ' + t;
  }).join(', ');

  var objType = type(obj).toLowerCase();

  if (!types.some(function (expected) { return objType === expected; })) {
    throw new AssertionError(
      flagMsg + 'object tested must be ' + str + ', but ' + objType + ' given',
      undefined,
      ssfi
    );
  }
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var flag = __webpack_require__(19)
  , getActual = __webpack_require__(34)
  , objDisplay = __webpack_require__(35);

/**
 * ### .getMessage(object, message, negateMessage)
 *
 * Construct the error message based on flags
 * and template tags. Template tags will return
 * a stringified inspection of the object referenced.
 *
 * Message template tags:
 * - `#{this}` current asserted object
 * - `#{act}` actual value
 * - `#{exp}` expected value
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getMessage
 * @api public
 */

module.exports = function getMessage(obj, args) {
  var negate = flag(obj, 'negate')
    , val = flag(obj, 'object')
    , expected = args[3]
    , actual = getActual(obj, args)
    , msg = negate ? args[2] : args[1]
    , flagMsg = flag(obj, 'message');

  if(typeof msg === "function") msg = msg();
  msg = msg || '';
  msg = msg
    .replace(/#\{this\}/g, function () { return objDisplay(val); })
    .replace(/#\{act\}/g, function () { return objDisplay(actual); })
    .replace(/#\{exp\}/g, function () { return objDisplay(expected); });

  return flagMsg ? flagMsg + ': ' + msg : msg;
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .getEnumerableProperties(object)
 *
 * This allows the retrieval of enumerable property names of an object,
 * inherited or not.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getEnumerableProperties
 * @api public
 */

module.exports = function getEnumerableProperties(object) {
  var result = [];
  for (var name in object) {
    result.push(name);
  }
  return result;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* globals Symbol: false, Uint8Array: false, WeakMap: false */
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var type = __webpack_require__(30);
function FakeMap() {
  this._key = 'chai/deep-eql__' + Math.random() + Date.now();
}

FakeMap.prototype = {
  get: function getMap(key) {
    return key[this._key];
  },
  set: function setMap(key, value) {
    if (Object.isExtensible(key)) {
      Object.defineProperty(key, this._key, {
        value: value,
        configurable: true,
      });
    }
  },
};

var MemoizeMap = typeof WeakMap === 'function' ? WeakMap : FakeMap;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return null;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    var result = leftHandMap.get(rightHandOperand);
    if (typeof result === 'boolean') {
      return result;
    }
  }
  return null;
}

/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    leftHandMap.set(rightHandOperand, result);
  } else {
    leftHandMap = new MemoizeMap();
    leftHandMap.set(rightHandOperand, result);
    memoizeMap.set(leftHandOperand, leftHandMap);
  }
}

/*!
 * Primary Export
 */

module.exports = deepEqual;
module.exports.MemoizeMap = MemoizeMap;

/**
 * Assert deeply nested sameValue equality between two objects of any type.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
 */
function deepEqual(leftHandOperand, rightHandOperand, options) {
  // If we have a comparator, we can't assume anything; so bail to its check first.
  if (options && options.comparator) {
    return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
  }

  var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
  if (simpleResult !== null) {
    return simpleResult;
  }

  // Deeper comparisons are pushed through to a larger function
  return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
}

/**
 * Many comparisons can be canceled out early via simple equality or primitive checks.
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @return {Boolean|null} equal match
 */
function simpleEqual(leftHandOperand, rightHandOperand) {
  // Equal references (except for Numbers) can be returned early
  if (leftHandOperand === rightHandOperand) {
    // Handle +-0 cases
    return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
  }

  // handle NaN cases
  if (
    leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
    rightHandOperand !== rightHandOperand // eslint-disable-line no-self-compare
  ) {
    return true;
  }

  // Anything that is not an 'object', i.e. symbols, functions, booleans, numbers,
  // strings, and undefined, can be compared by reference.
  if (isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    // Easy out b/c it would have passed the first equality check
    return false;
  }
  return null;
}

/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
  options = options || {};
  options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
  var comparator = options && options.comparator;

  // Check if a memoized result exists.
  var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
  if (memoizeResultLeft !== null) {
    return memoizeResultLeft;
  }
  var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
  if (memoizeResultRight !== null) {
    return memoizeResultRight;
  }

  // If a comparator is present, use it.
  if (comparator) {
    var comparatorResult = comparator(leftHandOperand, rightHandOperand);
    // Comparators may return null, in which case we want to go back to default behavior.
    if (comparatorResult === false || comparatorResult === true) {
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
      return comparatorResult;
    }
    // To allow comparators to override *any* behavior, we ran them first. Since it didn't decide
    // what to do, we need to make sure to return the basic tests first before we move on.
    var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
    if (simpleResult !== null) {
      // Don't memoize this, it takes longer to set/retrieve than to just compare.
      return simpleResult;
    }
  }

  var leftHandType = type(leftHandOperand);
  if (leftHandType !== type(rightHandOperand)) {
    memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
    return false;
  }

  // Temporarily set the operands in the memoize object to prevent blowing the stack
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);

  var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
  return result;
}

function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
  switch (leftHandType) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Date':
      // If these types are their instance types (e.g. `new Number`) then re-deepEqual against their values
      return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
    case 'Promise':
    case 'Symbol':
    case 'function':
    case 'WeakMap':
    case 'WeakSet':
    case 'Error':
      return leftHandOperand === rightHandOperand;
    case 'Arguments':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'Array':
      return iterableEqual(leftHandOperand, rightHandOperand, options);
    case 'RegExp':
      return regexpEqual(leftHandOperand, rightHandOperand);
    case 'Generator':
      return generatorEqual(leftHandOperand, rightHandOperand, options);
    case 'DataView':
      return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
    case 'ArrayBuffer':
      return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
    case 'Set':
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    case 'Map':
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    default:
      return objectEqual(leftHandOperand, rightHandOperand, options);
  }
}

/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */

function regexpEqual(leftHandOperand, rightHandOperand) {
  return leftHandOperand.toString() === rightHandOperand.toString();
}

/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function entriesEqual(leftHandOperand, rightHandOperand, options) {
  // IE11 doesn't support Set#entries or Set#@@iterator, so we need manually populate using Set#forEach
  if (leftHandOperand.size !== rightHandOperand.size) {
    return false;
  }
  if (leftHandOperand.size === 0) {
    return true;
  }
  var leftHandItems = [];
  var rightHandItems = [];
  leftHandOperand.forEach(function gatherEntries(key, value) {
    leftHandItems.push([ key, value ]);
  });
  rightHandOperand.forEach(function gatherEntries(key, value) {
    rightHandItems.push([ key, value ]);
  });
  return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
}

/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function iterableEqual(leftHandOperand, rightHandOperand, options) {
  var length = leftHandOperand.length;
  if (length !== rightHandOperand.length) {
    return false;
  }
  if (length === 0) {
    return true;
  }
  var index = -1;
  while (++index < length) {
    if (deepEqual(leftHandOperand[index], rightHandOperand[index], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function generatorEqual(leftHandOperand, rightHandOperand, options) {
  return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
}

/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function hasIteratorFunction(target) {
  return typeof Symbol !== 'undefined' &&
    typeof target === 'object' &&
    typeof Symbol.iterator !== 'undefined' &&
    typeof target[Symbol.iterator] === 'function';
}

/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function getIteratorEntries(target) {
  if (hasIteratorFunction(target)) {
    try {
      return getGeneratorEntries(target[Symbol.iterator]());
    } catch (iteratorError) {
      return [];
    }
  }
  return [];
}

/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function getGeneratorEntries(generator) {
  var generatorResult = generator.next();
  var accumulator = [ generatorResult.value ];
  while (generatorResult.done === false) {
    generatorResult = generator.next();
    accumulator.push(generatorResult.value);
  }
  return accumulator;
}

/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function getEnumerableKeys(target) {
  var keys = [];
  for (var key in target) {
    keys.push(key);
  }
  return keys;
}

/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function keysEqual(leftHandOperand, rightHandOperand, keys, options) {
  var length = keys.length;
  if (length === 0) {
    return true;
  }
  for (var i = 0; i < length; i += 1) {
    if (deepEqual(leftHandOperand[keys[i]], rightHandOperand[keys[i]], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function objectEqual(leftHandOperand, rightHandOperand, options) {
  var leftHandKeys = getEnumerableKeys(leftHandOperand);
  var rightHandKeys = getEnumerableKeys(rightHandOperand);
  if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
    leftHandKeys.sort();
    rightHandKeys.sort();
    if (iterableEqual(leftHandKeys, rightHandKeys) === false) {
      return false;
    }
    return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
  }

  var leftHandEntries = getIteratorEntries(leftHandOperand);
  var rightHandEntries = getIteratorEntries(rightHandOperand);
  if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
    leftHandEntries.sort();
    rightHandEntries.sort();
    return iterableEqual(leftHandEntries, rightHandEntries, options);
  }

  if (leftHandKeys.length === 0 &&
      leftHandEntries.length === 0 &&
      rightHandKeys.length === 0 &&
      rightHandEntries.length === 0) {
    return true;
  }

  return false;
}

/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function isPrimitive(value) {
  return value === null || typeof value !== 'object';
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chai = __webpack_require__(21);
var flag = __webpack_require__(19);
var isProxyEnabled = __webpack_require__(26);
var transferFlags = __webpack_require__(22);

/**
 * ### .addProperty(ctx, name, getter)
 *
 * Adds a property to the prototype of an object.
 *
 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.instanceof(Foo);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.foo;
 *
 * @param {Object} ctx object to which the property is added
 * @param {String} name of property to add
 * @param {Function} getter function to be used for name
 * @namespace Utils
 * @name addProperty
 * @api public
 */

module.exports = function addProperty(ctx, name, getter) {
  getter = getter === undefined ? function () {} : getter;

  Object.defineProperty(ctx, name,
    { get: function propertyGetter() {
        // Setting the `ssfi` flag to `propertyGetter` causes this function to
        // be the starting point for removing implementation frames from the
        // stack trace of a failed assertion.
        //
        // However, we only want to use this function as the starting point if
        // the `lockSsfi` flag isn't set and proxy protection is disabled.
        //
        // If the `lockSsfi` flag is set, then either this assertion has been
        // overwritten by another assertion, or this assertion is being invoked
        // from inside of another assertion. In the first case, the `ssfi` flag
        // has already been set by the overwriting assertion. In the second
        // case, the `ssfi` flag has already been set by the outer assertion.
        //
        // If proxy protection is enabled, then the `ssfi` flag has already been
        // set by the proxy getter.
        if (!isProxyEnabled() && !flag(this, 'lockSsfi')) {
          flag(this, 'ssfi', propertyGetter);
        }

        var result = getter.call(this);
        if (result !== undefined)
          return result;

        var newAssertion = new chai.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      }
    , configurable: true
  });
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var addLengthGuard = __webpack_require__(27);
var chai = __webpack_require__(21);
var flag = __webpack_require__(19);
var proxify = __webpack_require__(28);
var transferFlags = __webpack_require__(22);

/**
 * ### .addMethod(ctx, name, method)
 *
 * Adds a method to the prototype of an object.
 *
 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(fooStr).to.be.foo('bar');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for name
 * @namespace Utils
 * @name addMethod
 * @api public
 */

module.exports = function addMethod(ctx, name, method) {
  var methodWrapper = function () {
    // Setting the `ssfi` flag to `methodWrapper` causes this function to be the
    // starting point for removing implementation frames from the stack trace of
    // a failed assertion.
    //
    // However, we only want to use this function as the starting point if the
    // `lockSsfi` flag isn't set.
    //
    // If the `lockSsfi` flag is set, then either this assertion has been
    // overwritten by another assertion, or this assertion is being invoked from
    // inside of another assertion. In the first case, the `ssfi` flag has
    // already been set by the overwriting assertion. In the second case, the
    // `ssfi` flag has already been set by the outer assertion.
    if (!flag(this, 'lockSsfi')) {
      flag(this, 'ssfi', methodWrapper);
    }

    var result = method.apply(this, arguments);
    if (result !== undefined)
      return result;

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };

  addLengthGuard(methodWrapper, name, false);
  ctx[name] = proxify(methodWrapper, name);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chai = __webpack_require__(21);
var flag = __webpack_require__(19);
var isProxyEnabled = __webpack_require__(26);
var transferFlags = __webpack_require__(22);

/**
 * ### .overwriteProperty(ctx, name, fn)
 *
 * Overwrites an already existing property getter and provides
 * access to previous value. Must return function to use as getter.
 *
 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
 *       return function () {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.name).to.equal('bar');
 *         } else {
 *           _super.call(this);
 *         }
 *       }
 *     });
 *
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteProperty('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.be.ok;
 *
 * @param {Object} ctx object whose property is to be overwritten
 * @param {String} name of property to overwrite
 * @param {Function} getter function that returns a getter function to be used for name
 * @namespace Utils
 * @name overwriteProperty
 * @api public
 */

module.exports = function overwriteProperty(ctx, name, getter) {
  var _get = Object.getOwnPropertyDescriptor(ctx, name)
    , _super = function () {};

  if (_get && 'function' === typeof _get.get)
    _super = _get.get

  Object.defineProperty(ctx, name,
    { get: function overwritingPropertyGetter() {
        // Setting the `ssfi` flag to `overwritingPropertyGetter` causes this
        // function to be the starting point for removing implementation frames
        // from the stack trace of a failed assertion.
        //
        // However, we only want to use this function as the starting point if
        // the `lockSsfi` flag isn't set and proxy protection is disabled.
        //
        // If the `lockSsfi` flag is set, then either this assertion has been
        // overwritten by another assertion, or this assertion is being invoked
        // from inside of another assertion. In the first case, the `ssfi` flag
        // has already been set by the overwriting assertion. In the second
        // case, the `ssfi` flag has already been set by the outer assertion.
        //
        // If proxy protection is enabled, then the `ssfi` flag has already been
        // set by the proxy getter.
        if (!isProxyEnabled() && !flag(this, 'lockSsfi')) {
          flag(this, 'ssfi', overwritingPropertyGetter);
        }

        // Setting the `lockSsfi` flag to `true` prevents the overwritten
        // assertion from changing the `ssfi` flag. By this point, the `ssfi`
        // flag is already set to the correct starting point for this assertion.
        var origLockSsfi = flag(this, 'lockSsfi');
        flag(this, 'lockSsfi', true);
        var result = getter(_super).call(this);
        flag(this, 'lockSsfi', origLockSsfi);

        if (result !== undefined) {
          return result;
        }

        var newAssertion = new chai.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      }
    , configurable: true
  });
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var addLengthGuard = __webpack_require__(27);
var chai = __webpack_require__(21);
var flag = __webpack_require__(19);
var proxify = __webpack_require__(28);
var transferFlags = __webpack_require__(22);

/**
 * ### .overwriteMethod(ctx, name, fn)
 *
 * Overwrites an already existing method and provides
 * access to previous function. Must return function
 * to be used for name.
 *
 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
 *       return function (str) {
 *         var obj = utils.flag(this, 'object');
 *         if (obj instanceof Foo) {
 *           new chai.Assertion(obj.value).to.equal(str);
 *         } else {
 *           _super.apply(this, arguments);
 *         }
 *       }
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteMethod('foo', fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.equal('bar');
 *
 * @param {Object} ctx object whose method is to be overwritten
 * @param {String} name of method to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @namespace Utils
 * @name overwriteMethod
 * @api public
 */

module.exports = function overwriteMethod(ctx, name, method) {
  var _method = ctx[name]
    , _super = function () {
      throw new Error(name + ' is not a function');
    };

  if (_method && 'function' === typeof _method)
    _super = _method;

  var overwritingMethodWrapper = function () {
    // Setting the `ssfi` flag to `overwritingMethodWrapper` causes this
    // function to be the starting point for removing implementation frames from
    // the stack trace of a failed assertion.
    //
    // However, we only want to use this function as the starting point if the
    // `lockSsfi` flag isn't set.
    //
    // If the `lockSsfi` flag is set, then either this assertion has been
    // overwritten by another assertion, or this assertion is being invoked from
    // inside of another assertion. In the first case, the `ssfi` flag has
    // already been set by the overwriting assertion. In the second case, the
    // `ssfi` flag has already been set by the outer assertion.
    if (!flag(this, 'lockSsfi')) {
      flag(this, 'ssfi', overwritingMethodWrapper);
    }

    // Setting the `lockSsfi` flag to `true` prevents the overwritten assertion
    // from changing the `ssfi` flag. By this point, the `ssfi` flag is already
    // set to the correct starting point for this assertion.
    var origLockSsfi = flag(this, 'lockSsfi');
    flag(this, 'lockSsfi', true);
    var result = method(_super).apply(this, arguments);
    flag(this, 'lockSsfi', origLockSsfi);

    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  }

  addLengthGuard(overwritingMethodWrapper, name, false);
  ctx[name] = proxify(overwritingMethodWrapper, name);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var addLengthGuard = __webpack_require__(27);
var chai = __webpack_require__(21);
var flag = __webpack_require__(19);
var proxify = __webpack_require__(28);
var transferFlags = __webpack_require__(22);

/*!
 * Module variables
 */

// Check whether `Object.setPrototypeOf` is supported
var canSetPrototype = typeof Object.setPrototypeOf === 'function';

// Without `Object.setPrototypeOf` support, this module will need to add properties to a function.
// However, some of functions' own props are not configurable and should be skipped.
var testFn = function() {};
var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name) {
  var propDesc = Object.getOwnPropertyDescriptor(testFn, name);

  // Note: PhantomJS 1.x includes `callee` as one of `testFn`'s own properties,
  // but then returns `undefined` as the property descriptor for `callee`. As a
  // workaround, we perform an otherwise unnecessary type-check for `propDesc`,
  // and then filter it out if it's not an object as it should be.
  if (typeof propDesc !== 'object')
    return true;

  return !propDesc.configurable;
});

// Cache `Function` properties
var call  = Function.prototype.call,
    apply = Function.prototype.apply;

/**
 * ### .addChainableMethod(ctx, name, method, chainingBehavior)
 *
 * Adds a method to an object, such that the method can also be chained.
 *
 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
 *       var obj = utils.flag(this, 'object');
 *       new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
 *
 * The result can then be used as both a method assertion, executing both `method` and
 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
 *
 *     expect(fooStr).to.be.foo('bar');
 *     expect(fooStr).to.be.foo.equal('foo');
 *
 * @param {Object} ctx object to which the method is added
 * @param {String} name of method to add
 * @param {Function} method function to be used for `name`, when called
 * @param {Function} chainingBehavior function to be called every time the property is accessed
 * @namespace Utils
 * @name addChainableMethod
 * @api public
 */

module.exports = function addChainableMethod(ctx, name, method, chainingBehavior) {
  if (typeof chainingBehavior !== 'function') {
    chainingBehavior = function () { };
  }

  var chainableBehavior = {
      method: method
    , chainingBehavior: chainingBehavior
  };

  // save the methods so we can overwrite them later, if we need to.
  if (!ctx.__methods) {
    ctx.__methods = {};
  }
  ctx.__methods[name] = chainableBehavior;

  Object.defineProperty(ctx, name,
    { get: function chainableMethodGetter() {
        chainableBehavior.chainingBehavior.call(this);

        var chainableMethodWrapper = function () {
          // Setting the `ssfi` flag to `chainableMethodWrapper` causes this
          // function to be the starting point for removing implementation
          // frames from the stack trace of a failed assertion.
          //
          // However, we only want to use this function as the starting point if
          // the `lockSsfi` flag isn't set.
          //
          // If the `lockSsfi` flag is set, then this assertion is being
          // invoked from inside of another assertion. In this case, the `ssfi`
          // flag has already been set by the outer assertion.
          //
          // Note that overwriting a chainable method merely replaces the saved
          // methods in `ctx.__methods` instead of completely replacing the
          // overwritten assertion. Therefore, an overwriting assertion won't
          // set the `ssfi` or `lockSsfi` flags.
          if (!flag(this, 'lockSsfi')) {
            flag(this, 'ssfi', chainableMethodWrapper);
          }

          var result = chainableBehavior.method.apply(this, arguments);
          if (result !== undefined) {
            return result;
          }

          var newAssertion = new chai.Assertion();
          transferFlags(this, newAssertion);
          return newAssertion;
        };

        addLengthGuard(chainableMethodWrapper, name, true);

        // Use `Object.setPrototypeOf` if available
        if (canSetPrototype) {
          // Inherit all properties from the object by replacing the `Function` prototype
          var prototype = Object.create(this);
          // Restore the `call` and `apply` methods from `Function`
          prototype.call = call;
          prototype.apply = apply;
          Object.setPrototypeOf(chainableMethodWrapper, prototype);
        }
        // Otherwise, redefine all properties (slow!)
        else {
          var asserterNames = Object.getOwnPropertyNames(ctx);
          asserterNames.forEach(function (asserterName) {
            if (excludeNames.indexOf(asserterName) !== -1) {
              return;
            }

            var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
            Object.defineProperty(chainableMethodWrapper, asserterName, pd);
          });
        }

        transferFlags(this, chainableMethodWrapper);
        return proxify(chainableMethodWrapper);
      }
    , configurable: true
  });
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var chai = __webpack_require__(21);
var transferFlags = __webpack_require__(22);

/**
 * ### .overwriteChainableMethod(ctx, name, method, chainingBehavior)
 *
 * Overwrites an already existing chainable method
 * and provides access to the previous function or
 * property.  Must return functions to be used for
 * name.
 *
 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'lengthOf',
 *       function (_super) {
 *       }
 *     , function (_super) {
 *       }
 *     );
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.have.lengthOf(3);
 *     expect(myFoo).to.have.lengthOf.above(3);
 *
 * @param {Object} ctx object whose method / property is to be overwritten
 * @param {String} name of method / property to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @param {Function} chainingBehavior function that returns a function to be used for property
 * @namespace Utils
 * @name overwriteChainableMethod
 * @api public
 */

module.exports = function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
  var chainableBehavior = ctx.__methods[name];

  var _chainingBehavior = chainableBehavior.chainingBehavior;
  chainableBehavior.chainingBehavior = function overwritingChainableMethodGetter() {
    var result = chainingBehavior(_chainingBehavior).call(this);
    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };

  var _method = chainableBehavior.method;
  chainableBehavior.method = function overwritingChainableMethodWrapper() {
    var result = method(_method).apply(this, arguments);
    if (result !== undefined) {
      return result;
    }

    var newAssertion = new chai.Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var inspect = __webpack_require__(31);

/**
 * ### .compareByInspect(mixed, mixed)
 *
 * To be used as a compareFunction with Array.prototype.sort. Compares elements
 * using inspect instead of default behavior of using toString so that Symbols
 * and objects with irregular/missing toString can still be sorted without a
 * TypeError.
 *
 * @param {Mixed} first element to compare
 * @param {Mixed} second element to compare
 * @returns {Number} -1 if 'a' should come before 'b'; otherwise 1
 * @name compareByInspect
 * @namespace Utils
 * @api public
 */

module.exports = function compareByInspect(a, b) {
  return inspect(a) < inspect(b) ? -1 : 1;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var getOwnEnumerablePropertySymbols = __webpack_require__(38);

/**
 * ### .getOwnEnumerableProperties(object)
 *
 * This allows the retrieval of directly-owned enumerable property names and
 * symbols of an object. This function is necessary because Object.keys only
 * returns enumerable property names, not enumerable property symbols.
 *
 * @param {Object} object
 * @returns {Array}
 * @namespace Utils
 * @name getOwnEnumerableProperties
 * @api public
 */

module.exports = function getOwnEnumerableProperties(obj) {
  return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* !
 * Chai - checkError utility
 * Copyright(c) 2012-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### .checkError
 *
 * Checks that an error conforms to a given set of criteria and/or retrieves information about it.
 *
 * @api public
 */

/**
 * ### .compatibleInstance(thrown, errorLike)
 *
 * Checks if two instances are compatible (strict equal).
 * Returns false if errorLike is not an instance of Error, because instances
 * can only be compatible if they're both error instances.
 *
 * @name compatibleInstance
 * @param {Error} thrown error
 * @param {Error|ErrorConstructor} errorLike object to compare against
 * @namespace Utils
 * @api public
 */

function compatibleInstance(thrown, errorLike) {
  return errorLike instanceof Error && thrown === errorLike;
}

/**
 * ### .compatibleConstructor(thrown, errorLike)
 *
 * Checks if two constructors are compatible.
 * This function can receive either an error constructor or
 * an error instance as the `errorLike` argument.
 * Constructors are compatible if they're the same or if one is
 * an instance of another.
 *
 * @name compatibleConstructor
 * @param {Error} thrown error
 * @param {Error|ErrorConstructor} errorLike object to compare against
 * @namespace Utils
 * @api public
 */

function compatibleConstructor(thrown, errorLike) {
  if (errorLike instanceof Error) {
    // If `errorLike` is an instance of any error we compare their constructors
    return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
  } else if (errorLike.prototype instanceof Error || errorLike === Error) {
    // If `errorLike` is a constructor that inherits from Error, we compare `thrown` to `errorLike` directly
    return thrown.constructor === errorLike || thrown instanceof errorLike;
  }

  return false;
}

/**
 * ### .compatibleMessage(thrown, errMatcher)
 *
 * Checks if an error's message is compatible with a matcher (String or RegExp).
 * If the message contains the String or passes the RegExp test,
 * it is considered compatible.
 *
 * @name compatibleMessage
 * @param {Error} thrown error
 * @param {String|RegExp} errMatcher to look for into the message
 * @namespace Utils
 * @api public
 */

function compatibleMessage(thrown, errMatcher) {
  var comparisonString = typeof thrown === 'string' ? thrown : thrown.message;
  if (errMatcher instanceof RegExp) {
    return errMatcher.test(comparisonString);
  } else if (typeof errMatcher === 'string') {
    return comparisonString.indexOf(errMatcher) !== -1; // eslint-disable-line no-magic-numbers
  }

  return false;
}

/**
 * ### .getFunctionName(constructorFn)
 *
 * Returns the name of a function.
 * This also includes a polyfill function if `constructorFn.name` is not defined.
 *
 * @name getFunctionName
 * @param {Function} constructorFn
 * @namespace Utils
 * @api private
 */

var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;
function getFunctionName(constructorFn) {
  var name = '';
  if (typeof constructorFn.name === 'undefined') {
    // Here we run a polyfill if constructorFn.name is not defined
    var match = String(constructorFn).match(functionNameMatch);
    if (match) {
      name = match[1];
    }
  } else {
    name = constructorFn.name;
  }

  return name;
}

/**
 * ### .getConstructorName(errorLike)
 *
 * Gets the constructor name for an Error instance or constructor itself.
 *
 * @name getConstructorName
 * @param {Error|ErrorConstructor} errorLike
 * @namespace Utils
 * @api public
 */

function getConstructorName(errorLike) {
  var constructorName = errorLike;
  if (errorLike instanceof Error) {
    constructorName = getFunctionName(errorLike.constructor);
  } else if (typeof errorLike === 'function') {
    // If `err` is not an instance of Error it is an error constructor itself or another function.
    // If we've got a common function we get its name, otherwise we may need to create a new instance
    // of the error just in case it's a poorly-constructed error. Please see chaijs/chai/issues/45 to know more.
    constructorName = getFunctionName(errorLike).trim() ||
        getFunctionName(new errorLike()); // eslint-disable-line new-cap
  }

  return constructorName;
}

/**
 * ### .getMessage(errorLike)
 *
 * Gets the error message from an error.
 * If `err` is a String itself, we return it.
 * If the error has no message, we return an empty string.
 *
 * @name getMessage
 * @param {Error|String} errorLike
 * @namespace Utils
 * @api public
 */

function getMessage(errorLike) {
  var msg = '';
  if (errorLike && errorLike.message) {
    msg = errorLike.message;
  } else if (typeof errorLike === 'string') {
    msg = errorLike;
  }

  return msg;
}

module.exports = {
  compatibleInstance: compatibleInstance,
  compatibleConstructor: compatibleConstructor,
  compatibleMessage: compatibleMessage,
  getMessage: getMessage,
  getConstructorName: getConstructorName,
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */

/**
 * ### .isNaN(value)
 *
 * Checks if the given value is NaN or not.
 *
 *     utils.isNaN(NaN); // true
 *
 * @param {Value} The value which has to be checked if it is NaN
 * @name isNaN
 * @api private
 */

function isNaN(value) {
  // Refer http://www.ecma-international.org/ecma-262/6.0/#sec-isnan-number
  // section's NOTE.
  return value !== value;
}

// If ECMAScript 6's Number.isNaN is present, prefer that.
module.exports = Number.isNaN || isNaN;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var config = __webpack_require__(23);

module.exports = function (_chai, util) {
  /*!
   * Module dependencies.
   */

  var AssertionError = _chai.AssertionError
    , flag = util.flag;

  /*!
   * Module export.
   */

  _chai.Assertion = Assertion;

  /*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */

  function Assertion (obj, msg, ssfi, lockSsfi) {
    flag(this, 'ssfi', ssfi || Assertion);
    flag(this, 'lockSsfi', lockSsfi);
    flag(this, 'object', obj);
    flag(this, 'message', msg);

    return util.proxify(this);
  }

  Object.defineProperty(Assertion, 'includeStack', {
    get: function() {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      return config.includeStack;
    },
    set: function(value) {
      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
      config.includeStack = value;
    }
  });

  Object.defineProperty(Assertion, 'showDiff', {
    get: function() {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      return config.showDiff;
    },
    set: function(value) {
      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
      config.showDiff = value;
    }
  });

  Assertion.addProperty = function (name, fn) {
    util.addProperty(this.prototype, name, fn);
  };

  Assertion.addMethod = function (name, fn) {
    util.addMethod(this.prototype, name, fn);
  };

  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  Assertion.overwriteProperty = function (name, fn) {
    util.overwriteProperty(this.prototype, name, fn);
  };

  Assertion.overwriteMethod = function (name, fn) {
    util.overwriteMethod(this.prototype, name, fn);
  };

  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
  };

  /**
   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
   *
   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
   *
   * @name assert
   * @param {Philosophical} expression to be tested
   * @param {String|Function} message or function that returns message to display if expression fails
   * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
   * @param {Mixed} expected value (remember to check for negation)
   * @param {Mixed} actual (optional) will default to `this.obj`
   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
   * @api private
   */

  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
    var ok = util.test(this, arguments);
    if (false !== showDiff) showDiff = true;
    if (undefined === expected && undefined === _actual) showDiff = false;
    if (true !== config.showDiff) showDiff = false;

    if (!ok) {
      msg = util.getMessage(this, arguments);
      var actual = util.getActual(this, arguments);
      throw new AssertionError(msg, {
          actual: actual
        , expected: expected
        , showDiff: showDiff
      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
    }
  };

  /*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */

  Object.defineProperty(Assertion.prototype, '_obj',
    { get: function () {
        return flag(this, 'object');
      }
    , set: function (val) {
        flag(this, 'object', val);
      }
  });
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, _) {
  var Assertion = chai.Assertion
    , AssertionError = chai.AssertionError
    , flag = _.flag;

  /**
   * ### Language Chains
   *
   * The following are provided as chainable getters to improve the readability
   * of your assertions.
   *
   * **Chains**
   *
   * - to
   * - be
   * - been
   * - is
   * - that
   * - which
   * - and
   * - has
   * - have
   * - with
   * - at
   * - of
   * - same
   * - but
   * - does
   * - still
   *
   * @name language chains
   * @namespace BDD
   * @api public
   */

  [ 'to', 'be', 'been', 'is'
  , 'and', 'has', 'have', 'with'
  , 'that', 'which', 'at', 'of'
  , 'same', 'but', 'does', 'still' ].forEach(function (chain) {
    Assertion.addProperty(chain);
  });

  /**
   * ### .not
   *
   * Negates all assertions that follow in the chain.
   *
   *     expect(function () {}).to.not.throw();
   *     expect({a: 1}).to.not.have.property('b');
   *     expect([1, 2]).to.be.an('array').that.does.not.include(3);
   *
   * Just because you can negate any assertion with `.not` doesn't mean you
   * should. With great power comes great responsibility. It's often best to
   * assert that the one expected output was produced, rather than asserting
   * that one of countless unexpected outputs wasn't produced. See individual
   * assertions for specific guidance.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.equal(1); // Not recommended
   *
   * @name not
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('not', function () {
    flag(this, 'negate', true);
  });

  /**
   * ### .deep
   *
   * Causes all `.equal`, `.include`, `.members`, `.keys`, and `.property`
   * assertions that follow in the chain to use deep equality instead of strict
   * (`===`) equality. See the `deep-eql` project page for info on the deep
   * equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) equals `{a: 1}`
   *     expect({a: 1}).to.deep.equal({a: 1});
   *     expect({a: 1}).to.not.equal({a: 1});
   *
   *     // Target array deeply (but not strictly) includes `{a: 1}`
   *     expect([{a: 1}]).to.deep.include({a: 1});
   *     expect([{a: 1}]).to.not.include({a: 1});
   *
   *     // Target object deeply (but not strictly) includes `x: {a: 1}`
   *     expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
   *     expect({x: {a: 1}}).to.not.include({x: {a: 1}});
   *
   *     // Target array deeply (but not strictly) has member `{a: 1}`
   *     expect([{a: 1}]).to.have.deep.members([{a: 1}]);
   *     expect([{a: 1}]).to.not.have.members([{a: 1}]);
   *
   *     // Target set deeply (but not strictly) has key `{a: 1}`
   *     expect(new Set([{a: 1}])).to.have.deep.keys([{a: 1}]);
   *     expect(new Set([{a: 1}])).to.not.have.keys([{a: 1}]);
   *
   *     // Target object deeply (but not strictly) has property `x: {a: 1}`
   *     expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
   *     expect({x: {a: 1}}).to.not.have.property('x', {a: 1});
   *
   * @name deep
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('deep', function () {
    flag(this, 'deep', true);
  });

  /**
   * ### .nested
   *
   * Enables dot- and bracket-notation in all `.property` and `.include`
   * assertions that follow in the chain.
   *
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
   *     expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
   *     expect({'.a': {'[b]': 'x'}}).to.nested.include({'\\.a.\\[b\\]': 'x'});
   *
   * `.nested` cannot be combined with `.own`.
   *
   * @name nested
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('nested', function () {
    flag(this, 'nested', true);
  });

  /**
   * ### .own
   *
   * Causes all `.property` and `.include` assertions that follow in the chain
   * to ignore inherited properties.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.have.own.property('a');
   *     expect({a: 1}).to.have.property('b');
   *     expect({a: 1}).to.not.have.own.property('b');
   *
   *     expect({a: 1}).to.own.include({a: 1});
   *     expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
   *
   * `.own` cannot be combined with `.nested`.
   *
   * @name own
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('own', function () {
    flag(this, 'own', true);
  });

  /**
   * ### .ordered
   *
   * Causes all `.members` assertions that follow in the chain to require that
   * members be in the same order.
   *
   *     expect([1, 2]).to.have.ordered.members([1, 2])
   *       .but.not.have.ordered.members([2, 1]);
   *
   * When `.include` and `.ordered` are combined, the ordering begins at the
   * start of both arrays.
   *
   *     expect([1, 2, 3]).to.include.ordered.members([1, 2])
   *       .but.not.include.ordered.members([2, 3]);
   *
   * @name ordered
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('ordered', function () {
    flag(this, 'ordered', true);
  });

  /**
   * ### .any
   *
   * Causes all `.keys` assertions that follow in the chain to only require that
   * the target have at least one of the given keys. This is the opposite of
   * `.all`, which requires that the target have all of the given keys.
   *
   *     expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
   *
   * See the `.keys` doc for guidance on when to use `.any` or `.all`.
   *
   * @name any
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('any', function () {
    flag(this, 'any', true);
    flag(this, 'all', false);
  });

  /**
   * ### .all
   *
   * Causes all `.keys` assertions that follow in the chain to require that the
   * target have all of the given keys. This is the opposite of `.any`, which
   * only requires that the target have at least one of the given keys.
   *
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *
   * Note that `.all` is used by default when neither `.all` nor `.any` are
   * added earlier in the chain. However, it's often best to add `.all` anyway
   * because it improves readability.
   *
   * See the `.keys` doc for guidance on when to use `.any` or `.all`.
   *
   * @name all
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('all', function () {
    flag(this, 'all', true);
    flag(this, 'any', false);
  });

  /**
   * ### .a(type[, msg])
   *
   * Asserts that the target's type is equal to the given string `type`. Types
   * are case insensitive. See the `type-detect` project page for info on the
   * type detection algorithm: https://github.com/chaijs/type-detect.
   *
   *     expect('foo').to.be.a('string');
   *     expect({a: 1}).to.be.an('object');
   *     expect(null).to.be.a('null');
   *     expect(undefined).to.be.an('undefined');
   *     expect(new Error).to.be.an('error');
   *     expect(Promise.resolve()).to.be.a('promise');
   *     expect(new Float32Array).to.be.a('float32array');
   *     expect(Symbol()).to.be.a('symbol');
   *
   * `.a` supports objects that have a custom type set via `Symbol.toStringTag`.
   *
   *     var myObj = {
   *       [Symbol.toStringTag]: 'myCustomType'
   *     };
   *
   *     expect(myObj).to.be.a('myCustomType').but.not.an('object');
   *
   * It's often best to use `.a` to check a target's type before making more
   * assertions on the same target. That way, you avoid unexpected behavior from
   * any assertion that does different things based on the target's type.
   *
   *     expect([1, 2, 3]).to.be.an('array').that.includes(2);
   *     expect([]).to.be.an('array').that.is.empty;
   *
   * Add `.not` earlier in the chain to negate `.a`. However, it's often best to
   * assert that the target is the expected type, rather than asserting that it
   * isn't one of many unexpected types.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.an('array'); // Not recommended
   *
   * `.a` accepts an optional `msg` argument which is a custom error message to
   * show when the assertion fails. The message can also be given as the second
   * argument to `expect`.
   *
   *     expect(1).to.be.a('string', 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.a('string');
   *
   * `.a` can also be used as a language chain to improve the readability of
   * your assertions.
   *
   *     expect({b: 2}).to.have.a.property('b');
   *
   * The alias `.an` can be used interchangeably with `.a`.
   *
   * @name a
   * @alias an
   * @param {String} type
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function an (type, msg) {
    if (msg) flag(this, 'message', msg);
    type = type.toLowerCase();
    var obj = flag(this, 'object')
      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';

    this.assert(
        type === _.type(obj).toLowerCase()
      , 'expected #{this} to be ' + article + type
      , 'expected #{this} not to be ' + article + type
    );
  }

  Assertion.addChainableMethod('an', an);
  Assertion.addChainableMethod('a', an);

  /**
   * ### .include(val[, msg])
   *
   * When the target is a string, `.include` asserts that the given string `val`
   * is a substring of the target.
   *
   *     expect('foobar').to.include('foo');
   *
   * When the target is an array, `.include` asserts that the given `val` is a
   * member of the target.
   *
   *     expect([1, 2, 3]).to.include(2);
   *
   * When the target is an object, `.include` asserts that the given object
   * `val`'s properties are a subset of the target's properties.
   *
   *     expect({a: 1, b: 2, c: 3}).to.include({a: 1, b: 2});
   *
   * When the target is a Set or WeakSet, `.include` asserts that the given `val` is a
   * member of the target. SameValueZero equality algorithm is used.
   *
   *     expect(new Set([1, 2])).to.include(2);
   *
   * When the target is a Map, `.include` asserts that the given `val` is one of
   * the values of the target. SameValueZero equality algorithm is used.
   *
   *     expect(new Map([['a', 1], ['b', 2]])).to.include(2);
   *
   * Because `.include` does different things based on the target's type, it's
   * important to check the target's type before using `.include`. See the `.a`
   * doc for info on testing a target's type.
   *
   *     expect([1, 2, 3]).to.be.an('array').that.includes(2);
   *
   * By default, strict (`===`) equality is used to compare array members and
   * object properties. Add `.deep` earlier in the chain to use deep equality
   * instead (WeakSet targets are not supported). See the `deep-eql` project
   * page for info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target array deeply (but not strictly) includes `{a: 1}`
   *     expect([{a: 1}]).to.deep.include({a: 1});
   *     expect([{a: 1}]).to.not.include({a: 1});
   *
   *     // Target object deeply (but not strictly) includes `x: {a: 1}`
   *     expect({x: {a: 1}}).to.deep.include({x: {a: 1}});
   *     expect({x: {a: 1}}).to.not.include({x: {a: 1}});
   *
   * By default, all of the target's properties are searched when working with
   * objects. This includes properties that are inherited and/or non-enumerable.
   * Add `.own` earlier in the chain to exclude the target's inherited
   * properties from the search.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.own.include({a: 1});
   *     expect({a: 1}).to.include({b: 2}).but.not.own.include({b: 2});
   *
   * Note that a target object is always only searched for `val`'s own
   * enumerable properties.
   *
   * `.deep` and `.own` can be combined.
   *
   *     expect({a: {b: 2}}).to.deep.own.include({a: {b: 2}});
   *
   * Add `.nested` earlier in the chain to enable dot- and bracket-notation when
   * referencing nested properties.
   *
   *     expect({a: {b: ['x', 'y']}}).to.nested.include({'a.b[1]': 'y'});
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 2}}).to.nested.include({'\\.a.\\[b\\]': 2});
   *
   * `.deep` and `.nested` can be combined.
   *
   *     expect({a: {b: [{c: 3}]}}).to.deep.nested.include({'a.b[0]': {c: 3}});
   *
   * `.own` and `.nested` cannot be combined.
   *
   * Add `.not` earlier in the chain to negate `.include`.
   *
   *     expect('foobar').to.not.include('taco');
   *     expect([1, 2, 3]).to.not.include(4);
   *
   * However, it's dangerous to negate `.include` when the target is an object.
   * The problem is that it creates uncertain expectations by asserting that the
   * target object doesn't have all of `val`'s key/value pairs but may or may
   * not have some of them. It's often best to identify the exact output that's
   * expected, and then write an assertion that only accepts that exact output.
   *
   * When the target object isn't even expected to have `val`'s keys, it's
   * often best to assert exactly that.
   *
   *     expect({c: 3}).to.not.have.any.keys('a', 'b'); // Recommended
   *     expect({c: 3}).to.not.include({a: 1, b: 2}); // Not recommended
   *
   * When the target object is expected to have `val`'s keys, it's often best to
   * assert that each of the properties has its expected value, rather than
   * asserting that each property doesn't have one of many unexpected values.
   *
   *     expect({a: 3, b: 4}).to.include({a: 3, b: 4}); // Recommended
   *     expect({a: 3, b: 4}).to.not.include({a: 1, b: 2}); // Not recommended
   *
   * `.include` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2, 3]).to.include(4, 'nooo why fail??');
   *     expect([1, 2, 3], 'nooo why fail??').to.include(4);
   *
   * `.include` can also be used as a language chain, causing all `.members` and
   * `.keys` assertions that follow in the chain to require the target to be a
   * superset of the expected set, rather than an identical set. Note that
   * `.members` ignores duplicates in the subset when `.include` is added.
   *
   *     // Target object's keys are a superset of ['a', 'b'] but not identical
   *     expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
   *     expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');
   *
   *     // Target array is a superset of [1, 2] but not identical
   *     expect([1, 2, 3]).to.include.members([1, 2]);
   *     expect([1, 2, 3]).to.not.have.members([1, 2]);
   *
   *     // Duplicates in the subset are ignored
   *     expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);
   *
   * Note that adding `.any` earlier in the chain causes the `.keys` assertion
   * to ignore `.include`.
   *
   *     // Both assertions are identical
   *     expect({a: 1}).to.include.any.keys('a', 'b');
   *     expect({a: 1}).to.have.any.keys('a', 'b');
   *
   * The aliases `.includes`, `.contain`, and `.contains` can be used
   * interchangeably with `.include`.
   *
   * @name include
   * @alias contain
   * @alias includes
   * @alias contains
   * @param {Mixed} val
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function SameValueZero(a, b) {
    return (_.isNaN(a) && _.isNaN(b)) || a === b;
  }

  function includeChainingBehavior () {
    flag(this, 'contains', true);
  }

  function include (val, msg) {
    if (msg) flag(this, 'message', msg);

    var obj = flag(this, 'object')
      , objType = _.type(obj).toLowerCase()
      , flagMsg = flag(this, 'message')
      , negate = flag(this, 'negate')
      , ssfi = flag(this, 'ssfi')
      , isDeep = flag(this, 'deep')
      , descriptor = isDeep ? 'deep ' : '';

    flagMsg = flagMsg ? flagMsg + ': ' : '';

    var included = false;

    switch (objType) {
      case 'string':
        included = obj.indexOf(val) !== -1;
        break;

      case 'weakset':
        if (isDeep) {
          throw new AssertionError(
            flagMsg + 'unable to use .deep.include with WeakSet',
            undefined,
            ssfi
          );
        }

        included = obj.has(val);
        break;

      case 'map':
        var isEql = isDeep ? _.eql : SameValueZero;
        obj.forEach(function (item) {
          included = included || isEql(item, val);
        });
        break;

      case 'set':
        if (isDeep) {
          obj.forEach(function (item) {
            included = included || _.eql(item, val);
          });
        } else {
          included = obj.has(val);
        }
        break;

      case 'array':
        if (isDeep) {
          included = obj.some(function (item) {
            return _.eql(item, val);
          })
        } else {
          included = obj.indexOf(val) !== -1;
        }
        break;

      default:
        // This block is for asserting a subset of properties in an object.
        // `_.expectTypes` isn't used here because `.include` should work with
        // objects with a custom `@@toStringTag`.
        if (val !== Object(val)) {
          throw new AssertionError(
            flagMsg + 'object tested must be an array, a map, an object,'
              + ' a set, a string, or a weakset, but ' + objType + ' given',
            undefined,
            ssfi
          );
        }

        var props = Object.keys(val)
          , firstErr = null
          , numErrs = 0;

        props.forEach(function (prop) {
          var propAssertion = new Assertion(obj);
          _.transferFlags(this, propAssertion, true);
          flag(propAssertion, 'lockSsfi', true);

          if (!negate || props.length === 1) {
            propAssertion.property(prop, val[prop]);
            return;
          }

          try {
            propAssertion.property(prop, val[prop]);
          } catch (err) {
            if (!_.checkError.compatibleConstructor(err, AssertionError)) {
              throw err;
            }
            if (firstErr === null) firstErr = err;
            numErrs++;
          }
        }, this);

        // When validating .not.include with multiple properties, we only want
        // to throw an assertion error if all of the properties are included,
        // in which case we throw the first property assertion error that we
        // encountered.
        if (negate && props.length > 1 && numErrs === props.length) {
          throw firstErr;
        }
        return;
    }

    // Assert inclusion in collection or substring in a string.
    this.assert(
      included
      , 'expected #{this} to ' + descriptor + 'include ' + _.inspect(val)
      , 'expected #{this} to not ' + descriptor + 'include ' + _.inspect(val));
  }

  Assertion.addChainableMethod('include', include, includeChainingBehavior);
  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
  Assertion.addChainableMethod('includes', include, includeChainingBehavior);

  /**
   * ### .ok
   *
   * Asserts that the target is a truthy value (considered `true` in boolean context).
   * However, it's often best to assert that the target is strictly (`===`) or
   * deeply equal to its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.ok; // Not recommended
   *
   *     expect(true).to.be.true; // Recommended
   *     expect(true).to.be.ok; // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.ok`.
   *
   *     expect(0).to.equal(0); // Recommended
   *     expect(0).to.not.be.ok; // Not recommended
   *
   *     expect(false).to.be.false; // Recommended
   *     expect(false).to.not.be.ok; // Not recommended
   *
   *     expect(null).to.be.null; // Recommended
   *     expect(null).to.not.be.ok; // Not recommended
   *
   *     expect(undefined).to.be.undefined; // Recommended
   *     expect(undefined).to.not.be.ok; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(false, 'nooo why fail??').to.be.ok;
   *
   * @name ok
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('ok', function () {
    this.assert(
        flag(this, 'object')
      , 'expected #{this} to be truthy'
      , 'expected #{this} to be falsy');
  });

  /**
   * ### .true
   *
   * Asserts that the target is strictly (`===`) equal to `true`.
   *
   *     expect(true).to.be.true;
   *
   * Add `.not` earlier in the chain to negate `.true`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `true`.
   *
   *     expect(false).to.be.false; // Recommended
   *     expect(false).to.not.be.true; // Not recommended
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.true; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(false, 'nooo why fail??').to.be.true;
   *
   * @name true
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('true', function () {
    this.assert(
        true === flag(this, 'object')
      , 'expected #{this} to be true'
      , 'expected #{this} to be false'
      , flag(this, 'negate') ? false : true
    );
  });

  /**
   * ### .false
   *
   * Asserts that the target is strictly (`===`) equal to `false`.
   *
   *     expect(false).to.be.false;
   *
   * Add `.not` earlier in the chain to negate `.false`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to `false`.
   *
   *     expect(true).to.be.true; // Recommended
   *     expect(true).to.not.be.false; // Not recommended
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.false; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(true, 'nooo why fail??').to.be.false;
   *
   * @name false
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('false', function () {
    this.assert(
        false === flag(this, 'object')
      , 'expected #{this} to be false'
      , 'expected #{this} to be true'
      , flag(this, 'negate') ? true : false
    );
  });

  /**
   * ### .null
   *
   * Asserts that the target is strictly (`===`) equal to `null`.
   *
   *     expect(null).to.be.null;
   *
   * Add `.not` earlier in the chain to negate `.null`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `null`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.null; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.null;
   *
   * @name null
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('null', function () {
    this.assert(
        null === flag(this, 'object')
      , 'expected #{this} to be null'
      , 'expected #{this} not to be null'
    );
  });

  /**
   * ### .undefined
   *
   * Asserts that the target is strictly (`===`) equal to `undefined`.
   *
   *     expect(undefined).to.be.undefined;
   *
   * Add `.not` earlier in the chain to negate `.undefined`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to `undefined`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.undefined; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.undefined;
   *
   * @name undefined
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('undefined', function () {
    this.assert(
        undefined === flag(this, 'object')
      , 'expected #{this} to be undefined'
      , 'expected #{this} not to be undefined'
    );
  });

  /**
   * ### .NaN
   *
   * Asserts that the target is exactly `NaN`.
   *
   *     expect(NaN).to.be.NaN;
   *
   * Add `.not` earlier in the chain to negate `.NaN`. However, it's often best
   * to assert that the target is equal to its expected value, rather than not
   * equal to `NaN`.
   *
   *     expect('foo').to.equal('foo'); // Recommended
   *     expect('foo').to.not.be.NaN; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(42, 'nooo why fail??').to.be.NaN;
   *
   * @name NaN
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('NaN', function () {
    this.assert(
        _.isNaN(flag(this, 'object'))
        , 'expected #{this} to be NaN'
        , 'expected #{this} not to be NaN'
    );
  });

  /**
   * ### .exist
   *
   * Asserts that the target is not strictly (`===`) equal to either `null` or
   * `undefined`. However, it's often best to assert that the target is equal to
   * its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.exist; // Not recommended
   *
   *     expect(0).to.equal(0); // Recommended
   *     expect(0).to.exist; // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.exist`.
   *
   *     expect(null).to.be.null; // Recommended
   *     expect(null).to.not.exist; // Not recommended
   *
   *     expect(undefined).to.be.undefined; // Recommended
   *     expect(undefined).to.not.exist; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(null, 'nooo why fail??').to.exist;
   *
   * @name exist
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('exist', function () {
    var val = flag(this, 'object');
    this.assert(
        val !== null && val !== undefined
      , 'expected #{this} to exist'
      , 'expected #{this} to not exist'
    );
  });

  /**
   * ### .empty
   *
   * When the target is a string or array, `.empty` asserts that the target's
   * `length` property is strictly (`===`) equal to `0`.
   *
   *     expect([]).to.be.empty;
   *     expect('').to.be.empty;
   *
   * When the target is a map or set, `.empty` asserts that the target's `size`
   * property is strictly equal to `0`.
   *
   *     expect(new Set()).to.be.empty;
   *     expect(new Map()).to.be.empty;
   *
   * When the target is a non-function object, `.empty` asserts that the target
   * doesn't have any own enumerable properties. Properties with Symbol-based
   * keys are excluded from the count.
   *
   *     expect({}).to.be.empty;
   *
   * Because `.empty` does different things based on the target's type, it's
   * important to check the target's type before using `.empty`. See the `.a`
   * doc for info on testing a target's type.
   *
   *     expect([]).to.be.an('array').that.is.empty;
   *
   * Add `.not` earlier in the chain to negate `.empty`. However, it's often
   * best to assert that the target contains its expected number of values,
   * rather than asserting that it's not empty.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.not.be.empty; // Not recommended
   *
   *     expect(new Set([1, 2, 3])).to.have.property('size', 3); // Recommended
   *     expect(new Set([1, 2, 3])).to.not.be.empty; // Not recommended
   *
   *     expect(Object.keys({a: 1})).to.have.lengthOf(1); // Recommended
   *     expect({a: 1}).to.not.be.empty; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect([1, 2, 3], 'nooo why fail??').to.be.empty;
   *
   * @name empty
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('empty', function () {
    var val = flag(this, 'object')
      , ssfi = flag(this, 'ssfi')
      , flagMsg = flag(this, 'message')
      , itemsCount;

    flagMsg = flagMsg ? flagMsg + ': ' : '';

    switch (_.type(val).toLowerCase()) {
      case 'array':
      case 'string':
        itemsCount = val.length;
        break;
      case 'map':
      case 'set':
        itemsCount = val.size;
        break;
      case 'weakmap':
      case 'weakset':
        throw new AssertionError(
          flagMsg + '.empty was passed a weak collection',
          undefined,
          ssfi
        );
      case 'function':
        var msg = flagMsg + '.empty was passed a function ' + _.getName(val);
        throw new AssertionError(msg.trim(), undefined, ssfi);
      default:
        if (val !== Object(val)) {
          throw new AssertionError(
            flagMsg + '.empty was passed non-string primitive ' + _.inspect(val),
            undefined,
            ssfi
          );
        }
        itemsCount = Object.keys(val).length;
    }

    this.assert(
        0 === itemsCount
      , 'expected #{this} to be empty'
      , 'expected #{this} not to be empty'
    );
  });

  /**
   * ### .arguments
   *
   * Asserts that the target is an `arguments` object.
   *
   *     function test () {
   *       expect(arguments).to.be.arguments;
   *     }
   *
   *     test();
   *
   * Add `.not` earlier in the chain to negate `.arguments`. However, it's often
   * best to assert which type the target is expected to be, rather than
   * asserting that its not an `arguments` object.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.arguments; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({}, 'nooo why fail??').to.be.arguments;
   *
   * The alias `.Arguments` can be used interchangeably with `.arguments`.
   *
   * @name arguments
   * @alias Arguments
   * @namespace BDD
   * @api public
   */

  function checkArguments () {
    var obj = flag(this, 'object')
      , type = _.type(obj);
    this.assert(
        'Arguments' === type
      , 'expected #{this} to be arguments but got ' + type
      , 'expected #{this} to not be arguments'
    );
  }

  Assertion.addProperty('arguments', checkArguments);
  Assertion.addProperty('Arguments', checkArguments);

  /**
   * ### .equal(val[, msg])
   *
   * Asserts that the target is strictly (`===`) equal to the given `val`.
   *
   *     expect(1).to.equal(1);
   *     expect('foo').to.equal('foo');
   *
   * Add `.deep` earlier in the chain to use deep equality instead. See the
   * `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) equals `{a: 1}`
   *     expect({a: 1}).to.deep.equal({a: 1});
   *     expect({a: 1}).to.not.equal({a: 1});
   *
   *     // Target array deeply (but not strictly) equals `[1, 2]`
   *     expect([1, 2]).to.deep.equal([1, 2]);
   *     expect([1, 2]).to.not.equal([1, 2]);
   *
   * Add `.not` earlier in the chain to negate `.equal`. However, it's often
   * best to assert that the target is equal to its expected value, rather than
   * not equal to one of countless unexpected values.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.equal(2); // Not recommended
   *
   * `.equal` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.equal(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.equal(2);
   *
   * The aliases `.equals` and `eq` can be used interchangeably with `.equal`.
   *
   * @name equal
   * @alias equals
   * @alias eq
   * @param {Mixed} val
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertEqual (val, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    if (flag(this, 'deep')) {
      var prevLockSsfi = flag(this, 'lockSsfi');
      flag(this, 'lockSsfi', true);
      this.eql(val);
      flag(this, 'lockSsfi', prevLockSsfi);
    } else {
      this.assert(
          val === obj
        , 'expected #{this} to equal #{exp}'
        , 'expected #{this} to not equal #{exp}'
        , val
        , this._obj
        , true
      );
    }
  }

  Assertion.addMethod('equal', assertEqual);
  Assertion.addMethod('equals', assertEqual);
  Assertion.addMethod('eq', assertEqual);

  /**
   * ### .eql(obj[, msg])
   *
   * Asserts that the target is deeply equal to the given `obj`. See the
   * `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target object is deeply (but not strictly) equal to {a: 1}
   *     expect({a: 1}).to.eql({a: 1}).but.not.equal({a: 1});
   *
   *     // Target array is deeply (but not strictly) equal to [1, 2]
   *     expect([1, 2]).to.eql([1, 2]).but.not.equal([1, 2]);
   *
   * Add `.not` earlier in the chain to negate `.eql`. However, it's often best
   * to assert that the target is deeply equal to its expected value, rather
   * than not deeply equal to one of countless unexpected values.
   *
   *     expect({a: 1}).to.eql({a: 1}); // Recommended
   *     expect({a: 1}).to.not.eql({b: 2}); // Not recommended
   *
   * `.eql` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect({a: 1}).to.eql({b: 2}, 'nooo why fail??');
   *     expect({a: 1}, 'nooo why fail??').to.eql({b: 2});
   *
   * The alias `.eqls` can be used interchangeably with `.eql`.
   *
   * The `.deep.equal` assertion is almost identical to `.eql` but with one
   * difference: `.deep.equal` causes deep equality comparisons to also be used
   * for any other assertions that follow in the chain.
   *
   * @name eql
   * @alias eqls
   * @param {Mixed} obj
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertEql(obj, msg) {
    if (msg) flag(this, 'message', msg);
    this.assert(
        _.eql(obj, flag(this, 'object'))
      , 'expected #{this} to deeply equal #{exp}'
      , 'expected #{this} to not deeply equal #{exp}'
      , obj
      , this._obj
      , true
    );
  }

  Assertion.addMethod('eql', assertEql);
  Assertion.addMethod('eqls', assertEql);

  /**
   * ### .above(n[, msg])
   *
   * Asserts that the target is a number or a date greater than the given number or date `n` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.above(1); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the target's `length`
   * or `size` is greater than the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.above(2); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.above(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.above`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(1).to.not.be.above(2); // Not recommended
   *
   * `.above` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.above(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.above(2);
   *
   * The aliases `.gt` and `.greaterThan` can be used interchangeably with
   * `.above`.
   *
   * @name above
   * @alias gt
   * @alias greaterThan
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertAbove (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , errorMessage
      , shouldThrow = true;

    if (doLength && objType !== 'map' && objType !== 'set') {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to above must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to above must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var descriptor = 'length'
        , itemsCount;
      if (objType === 'map' || objType === 'set') {
        descriptor = 'size';
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
          itemsCount > n
        , 'expected #{this} to have a ' + descriptor + ' above #{exp} but got #{act}'
        , 'expected #{this} to not have a ' + descriptor + ' above #{exp}'
        , n
        , itemsCount
      );
    } else {
      this.assert(
          obj > n
        , 'expected #{this} to be above #{exp}'
        , 'expected #{this} to be at most #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('above', assertAbove);
  Assertion.addMethod('gt', assertAbove);
  Assertion.addMethod('greaterThan', assertAbove);

  /**
   * ### .least(n[, msg])
   *
   * Asserts that the target is a number or a date greater than or equal to the given
   * number or date `n` respectively. However, it's often best to assert that the target is equal to
   * its expected value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.at.least(1); // Not recommended
   *     expect(2).to.be.at.least(2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the target's `length`
   * or `size` is greater than or equal to the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.at.least(2); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.at.least(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.least`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.at.least(2); // Not recommended
   *
   * `.least` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.at.least(2, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.at.least(2);
   *
   * The alias `.gte` can be used interchangeably with `.least`.
   *
   * @name least
   * @alias gte
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertLeast (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , errorMessage
      , shouldThrow = true;

    if (doLength && objType !== 'map' && objType !== 'set') {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to least must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to least must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var descriptor = 'length'
        , itemsCount;
      if (objType === 'map' || objType === 'set') {
        descriptor = 'size';
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
          itemsCount >= n
        , 'expected #{this} to have a ' + descriptor + ' at least #{exp} but got #{act}'
        , 'expected #{this} to have a ' + descriptor + ' below #{exp}'
        , n
        , itemsCount
      );
    } else {
      this.assert(
          obj >= n
        , 'expected #{this} to be at least #{exp}'
        , 'expected #{this} to be below #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('least', assertLeast);
  Assertion.addMethod('gte', assertLeast);

  /**
   * ### .below(n[, msg])
   *
   * Asserts that the target is a number or a date less than the given number or date `n` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.below(2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the target's `length`
   * or `size` is less than the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.below(4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.length(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.below(4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.below`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.be.below(1); // Not recommended
   *
   * `.below` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(2).to.be.below(1, 'nooo why fail??');
   *     expect(2, 'nooo why fail??').to.be.below(1);
   *
   * The aliases `.lt` and `.lessThan` can be used interchangeably with
   * `.below`.
   *
   * @name below
   * @alias lt
   * @alias lessThan
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertBelow (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , errorMessage
      , shouldThrow = true;

    if (doLength && objType !== 'map' && objType !== 'set') {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to below must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to below must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var descriptor = 'length'
        , itemsCount;
      if (objType === 'map' || objType === 'set') {
        descriptor = 'size';
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
          itemsCount < n
        , 'expected #{this} to have a ' + descriptor + ' below #{exp} but got #{act}'
        , 'expected #{this} to not have a ' + descriptor + ' below #{exp}'
        , n
        , itemsCount
      );
    } else {
      this.assert(
          obj < n
        , 'expected #{this} to be below #{exp}'
        , 'expected #{this} to be at least #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('below', assertBelow);
  Assertion.addMethod('lt', assertBelow);
  Assertion.addMethod('lessThan', assertBelow);

  /**
   * ### .most(n[, msg])
   *
   * Asserts that the target is a number or a date less than or equal to the given number
   * or date `n` respectively. However, it's often best to assert that the target is equal to its
   * expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.at.most(2); // Not recommended
   *     expect(1).to.be.at.most(1); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the target's `length`
   * or `size` is less than or equal to the given number `n`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.at.most(4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.at.most(4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.most`.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.not.be.at.most(1); // Not recommended
   *
   * `.most` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(2).to.be.at.most(1, 'nooo why fail??');
   *     expect(2, 'nooo why fail??').to.be.at.most(1);
   *
   * The alias `.lte` can be used interchangeably with `.most`.
   *
   * @name most
   * @alias lte
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertMost (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , nType = _.type(n).toLowerCase()
      , errorMessage
      , shouldThrow = true;

    if (doLength && objType !== 'map' && objType !== 'set') {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && nType !== 'date')) {
      errorMessage = msgPrefix + 'the argument to most must be a date';
    } else if (nType !== 'number' && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the argument to most must be a number';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var descriptor = 'length'
        , itemsCount;
      if (objType === 'map' || objType === 'set') {
        descriptor = 'size';
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
          itemsCount <= n
        , 'expected #{this} to have a ' + descriptor + ' at most #{exp} but got #{act}'
        , 'expected #{this} to have a ' + descriptor + ' above #{exp}'
        , n
        , itemsCount
      );
    } else {
      this.assert(
          obj <= n
        , 'expected #{this} to be at most #{exp}'
        , 'expected #{this} to be above #{exp}'
        , n
      );
    }
  }

  Assertion.addMethod('most', assertMost);
  Assertion.addMethod('lte', assertMost);

  /**
   * ### .within(start, finish[, msg])
   *
   * Asserts that the target is a number or a date greater than or equal to the given
   * number or date `start`, and less than or equal to the given number or date `finish` respectively.
   * However, it's often best to assert that the target is equal to its expected
   * value.
   *
   *     expect(2).to.equal(2); // Recommended
   *     expect(2).to.be.within(1, 3); // Not recommended
   *     expect(2).to.be.within(2, 3); // Not recommended
   *     expect(2).to.be.within(1, 2); // Not recommended
   *
   * Add `.lengthOf` earlier in the chain to assert that the target's `length`
   * or `size` is greater than or equal to the given number `start`, and less
   * than or equal to the given number `finish`.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.have.lengthOf.within(2, 4); // Not recommended
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3); // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf.within(2, 4); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.within`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.within(2, 4); // Not recommended
   *
   * `.within` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(4).to.be.within(1, 3, 'nooo why fail??');
   *     expect(4, 'nooo why fail??').to.be.within(1, 3);
   *
   * @name within
   * @param {Number} start lower bound inclusive
   * @param {Number} finish upper bound inclusive
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('within', function (start, finish, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , doLength = flag(this, 'doLength')
      , flagMsg = flag(this, 'message')
      , msgPrefix = ((flagMsg) ? flagMsg + ': ' : '')
      , ssfi = flag(this, 'ssfi')
      , objType = _.type(obj).toLowerCase()
      , startType = _.type(start).toLowerCase()
      , finishType = _.type(finish).toLowerCase()
      , errorMessage
      , shouldThrow = true
      , range = (startType === 'date' && finishType === 'date')
          ? start.toUTCString() + '..' + finish.toUTCString()
          : start + '..' + finish;

    if (doLength && objType !== 'map' && objType !== 'set') {
      new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
    }

    if (!doLength && (objType === 'date' && (startType !== 'date' || finishType !== 'date'))) {
      errorMessage = msgPrefix + 'the arguments to within must be dates';
    } else if ((startType !== 'number' || finishType !== 'number') && (doLength || objType === 'number')) {
      errorMessage = msgPrefix + 'the arguments to within must be numbers';
    } else if (!doLength && (objType !== 'date' && objType !== 'number')) {
      var printObj = (objType === 'string') ? "'" + obj + "'" : obj;
      errorMessage = msgPrefix + 'expected ' + printObj + ' to be a number or a date';
    } else {
      shouldThrow = false;
    }

    if (shouldThrow) {
      throw new AssertionError(errorMessage, undefined, ssfi);
    }

    if (doLength) {
      var descriptor = 'length'
        , itemsCount;
      if (objType === 'map' || objType === 'set') {
        descriptor = 'size';
        itemsCount = obj.size;
      } else {
        itemsCount = obj.length;
      }
      this.assert(
          itemsCount >= start && itemsCount <= finish
        , 'expected #{this} to have a ' + descriptor + ' within ' + range
        , 'expected #{this} to not have a ' + descriptor + ' within ' + range
      );
    } else {
      this.assert(
          obj >= start && obj <= finish
        , 'expected #{this} to be within ' + range
        , 'expected #{this} to not be within ' + range
      );
    }
  });

  /**
   * ### .instanceof(constructor[, msg])
   *
   * Asserts that the target is an instance of the given `constructor`.
   *
   *     function Cat () { }
   *
   *     expect(new Cat()).to.be.an.instanceof(Cat);
   *     expect([1, 2]).to.be.an.instanceof(Array);
   *
   * Add `.not` earlier in the chain to negate `.instanceof`.
   *
   *     expect({a: 1}).to.not.be.an.instanceof(Array);
   *
   * `.instanceof` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1).to.be.an.instanceof(Array, 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.an.instanceof(Array);
   *
   * Due to limitations in ES5, `.instanceof` may not always work as expected
   * when using a transpiler such as Babel or TypeScript. In particular, it may
   * produce unexpected results when subclassing built-in object such as
   * `Array`, `Error`, and `Map`. See your transpiler's docs for details:
   *
   * - ([Babel](https://babeljs.io/docs/usage/caveats/#classes))
   * - ([TypeScript](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work))
   *
   * The alias `.instanceOf` can be used interchangeably with `.instanceof`.
   *
   * @name instanceof
   * @param {Constructor} constructor
   * @param {String} msg _optional_
   * @alias instanceOf
   * @namespace BDD
   * @api public
   */

  function assertInstanceOf (constructor, msg) {
    if (msg) flag(this, 'message', msg);

    var target = flag(this, 'object')
    var ssfi = flag(this, 'ssfi');
    var flagMsg = flag(this, 'message');

    try {
      var isInstanceOf = target instanceof constructor;
    } catch (err) {
      if (err instanceof TypeError) {
        flagMsg = flagMsg ? flagMsg + ': ' : '';
        throw new AssertionError(
          flagMsg + 'The instanceof assertion needs a constructor but '
            + _.type(constructor) + ' was given.',
          undefined,
          ssfi
        );
      }
      throw err;
    }

    var name = _.getName(constructor);
    if (name === null) {
      name = 'an unnamed constructor';
    }

    this.assert(
        isInstanceOf
      , 'expected #{this} to be an instance of ' + name
      , 'expected #{this} to not be an instance of ' + name
    );
  };

  Assertion.addMethod('instanceof', assertInstanceOf);
  Assertion.addMethod('instanceOf', assertInstanceOf);

  /**
   * ### .property(name[, val[, msg]])
   *
   * Asserts that the target has a property with the given key `name`.
   *
   *     expect({a: 1}).to.have.property('a');
   *
   * When `val` is provided, `.property` also asserts that the property's value
   * is equal to the given `val`.
   *
   *     expect({a: 1}).to.have.property('a', 1);
   *
   * By default, strict (`===`) equality is used. Add `.deep` earlier in the
   * chain to use deep equality instead. See the `deep-eql` project page for
   * info on the deep equality algorithm: https://github.com/chaijs/deep-eql.
   *
   *     // Target object deeply (but not strictly) has property `x: {a: 1}`
   *     expect({x: {a: 1}}).to.have.deep.property('x', {a: 1});
   *     expect({x: {a: 1}}).to.not.have.property('x', {a: 1});
   *
   * The target's enumerable and non-enumerable properties are always included
   * in the search. By default, both own and inherited properties are included.
   * Add `.own` earlier in the chain to exclude inherited properties from the
   * search.
   *
   *     Object.prototype.b = 2;
   *
   *     expect({a: 1}).to.have.own.property('a');
   *     expect({a: 1}).to.have.own.property('a', 1);
   *     expect({a: 1}).to.have.property('b');
   *     expect({a: 1}).to.not.have.own.property('b');
   *
   * `.deep` and `.own` can be combined.
   *
   *     expect({x: {a: 1}}).to.have.deep.own.property('x', {a: 1});
   *
   * Add `.nested` earlier in the chain to enable dot- and bracket-notation when
   * referencing nested properties.
   *
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');
   *     expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]', 'y');
   *
   * If `.` or `[]` are part of an actual property name, they can be escaped by
   * adding two backslashes before them.
   *
   *     expect({'.a': {'[b]': 'x'}}).to.have.nested.property('\\.a.\\[b\\]');
   *
   * `.deep` and `.nested` can be combined.
   *
   *     expect({a: {b: [{c: 3}]}})
   *       .to.have.deep.nested.property('a.b[0]', {c: 3});
   *
   * `.own` and `.nested` cannot be combined.
   *
   * Add `.not` earlier in the chain to negate `.property`.
   *
   *     expect({a: 1}).to.not.have.property('b');
   *
   * However, it's dangerous to negate `.property` when providing `val`. The
   * problem is that it creates uncertain expectations by asserting that the
   * target either doesn't have a property with the given key `name`, or that it
   * does have a property with the given key `name` but its value isn't equal to
   * the given `val`. It's often best to identify the exact output that's
   * expected, and then write an assertion that only accepts that exact output.
   *
   * When the target isn't expected to have a property with the given key
   * `name`, it's often best to assert exactly that.
   *
   *     expect({b: 2}).to.not.have.property('a'); // Recommended
   *     expect({b: 2}).to.not.have.property('a', 1); // Not recommended
   *
   * When the target is expected to have a property with the given key `name`,
   * it's often best to assert that the property has its expected value, rather
   * than asserting that it doesn't have one of many unexpected values.
   *
   *     expect({a: 3}).to.have.property('a', 3); // Recommended
   *     expect({a: 3}).to.not.have.property('a', 1); // Not recommended
   *
   * `.property` changes the target of any assertions that follow in the chain
   * to be the value of the property from the original target object.
   *
   *     expect({a: 1}).to.have.property('a').that.is.a('number');
   *
   * `.property` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing `val`, only use the
   * second form.
   *
   *     // Recommended
   *     expect({a: 1}).to.have.property('a', 2, 'nooo why fail??');
   *     expect({a: 1}, 'nooo why fail??').to.have.property('a', 2);
   *     expect({a: 1}, 'nooo why fail??').to.have.property('b');
   *
   *     // Not recommended
   *     expect({a: 1}).to.have.property('b', undefined, 'nooo why fail??');
   *
   * The above assertion isn't the same thing as not providing `val`. Instead,
   * it's asserting that the target object has a `b` property that's equal to
   * `undefined`.
   *
   * The assertions `.ownProperty` and `.haveOwnProperty` can be used
   * interchangeably with `.own.property`.
   *
   * @name property
   * @param {String} name
   * @param {Mixed} val (optional)
   * @param {String} msg _optional_
   * @returns value of property for chaining
   * @namespace BDD
   * @api public
   */

  function assertProperty (name, val, msg) {
    if (msg) flag(this, 'message', msg);

    var isNested = flag(this, 'nested')
      , isOwn = flag(this, 'own')
      , flagMsg = flag(this, 'message')
      , obj = flag(this, 'object')
      , ssfi = flag(this, 'ssfi')
      , nameType = typeof name;

    flagMsg = flagMsg ? flagMsg + ': ' : '';

    if (isNested) {
      if (nameType !== 'string') {
        throw new AssertionError(
          flagMsg + 'the argument to property must be a string when using nested syntax',
          undefined,
          ssfi
        );
      }
    } else {
      if (nameType !== 'string' && nameType !== 'number' && nameType !== 'symbol') {
        throw new AssertionError(
          flagMsg + 'the argument to property must be a string, number, or symbol',
          undefined,
          ssfi
        );
      }
    }

    if (isNested && isOwn) {
      throw new AssertionError(
        flagMsg + 'The "nested" and "own" flags cannot be combined.',
        undefined,
        ssfi
      );
    }

    if (obj === null || obj === undefined) {
      throw new AssertionError(
        flagMsg + 'Target cannot be null or undefined.',
        undefined,
        ssfi
      );
    }

    var isDeep = flag(this, 'deep')
      , negate = flag(this, 'negate')
      , pathInfo = isNested ? _.getPathInfo(obj, name) : null
      , value = isNested ? pathInfo.value : obj[name];

    var descriptor = '';
    if (isDeep) descriptor += 'deep ';
    if (isOwn) descriptor += 'own ';
    if (isNested) descriptor += 'nested ';
    descriptor += 'property ';

    var hasProperty;
    if (isOwn) hasProperty = Object.prototype.hasOwnProperty.call(obj, name);
    else if (isNested) hasProperty = pathInfo.exists;
    else hasProperty = _.hasProperty(obj, name);

    // When performing a negated assertion for both name and val, merely having
    // a property with the given name isn't enough to cause the assertion to
    // fail. It must both have a property with the given name, and the value of
    // that property must equal the given val. Therefore, skip this assertion in
    // favor of the next.
    if (!negate || arguments.length === 1) {
      this.assert(
          hasProperty
        , 'expected #{this} to have ' + descriptor + _.inspect(name)
        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
    }

    if (arguments.length > 1) {
      this.assert(
          hasProperty && (isDeep ? _.eql(val, value) : val === value)
        , 'expected #{this} to have ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
        , 'expected #{this} to not have ' + descriptor + _.inspect(name) + ' of #{act}'
        , val
        , value
      );
    }

    flag(this, 'object', value);
  }

  Assertion.addMethod('property', assertProperty);

  function assertOwnProperty (name, value, msg) {
    flag(this, 'own', true);
    assertProperty.apply(this, arguments);
  }

  Assertion.addMethod('ownProperty', assertOwnProperty);
  Assertion.addMethod('haveOwnProperty', assertOwnProperty);

  /**
   * ### .ownPropertyDescriptor(name[, descriptor[, msg]])
   *
   * Asserts that the target has its own property descriptor with the given key
   * `name`. Enumerable and non-enumerable properties are included in the
   * search.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a');
   *
   * When `descriptor` is provided, `.ownPropertyDescriptor` also asserts that
   * the property's descriptor is deeply equal to the given `descriptor`. See
   * the `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * Add `.not` earlier in the chain to negate `.ownPropertyDescriptor`.
   *
   *     expect({a: 1}).to.not.have.ownPropertyDescriptor('b');
   *
   * However, it's dangerous to negate `.ownPropertyDescriptor` when providing
   * a `descriptor`. The problem is that it creates uncertain expectations by
   * asserting that the target either doesn't have a property descriptor with
   * the given key `name`, or that it does have a property descriptor with the
   * given key `name` but its not deeply equal to the given `descriptor`. It's
   * often best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to have a property descriptor with the given
   * key `name`, it's often best to assert exactly that.
   *
   *     // Recommended
   *     expect({b: 2}).to.not.have.ownPropertyDescriptor('a');
   *
   *     // Not recommended
   *     expect({b: 2}).to.not.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * When the target is expected to have a property descriptor with the given
   * key `name`, it's often best to assert that the property has its expected
   * descriptor, rather than asserting that it doesn't have one of many
   * unexpected descriptors.
   *
   *     // Recommended
   *     expect({a: 3}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 3,
   *     });
   *
   *     // Not recommended
   *     expect({a: 3}).to.not.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 1,
   *     });
   *
   * `.ownPropertyDescriptor` changes the target of any assertions that follow
   * in the chain to be the value of the property descriptor from the original
   * target object.
   *
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a')
   *       .that.has.property('enumerable', true);
   *
   * `.ownPropertyDescriptor` accepts an optional `msg` argument which is a
   * custom error message to show when the assertion fails. The message can also
   * be given as the second argument to `expect`. When not providing
   * `descriptor`, only use the second form.
   *
   *     // Recommended
   *     expect({a: 1}).to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 2,
   *     }, 'nooo why fail??');
   *
   *     // Recommended
   *     expect({a: 1}, 'nooo why fail??').to.have.ownPropertyDescriptor('a', {
   *       configurable: true,
   *       enumerable: true,
   *       writable: true,
   *       value: 2,
   *     });
   *
   *     // Recommended
   *     expect({a: 1}, 'nooo why fail??').to.have.ownPropertyDescriptor('b');
   *
   *     // Not recommended
   *     expect({a: 1})
   *       .to.have.ownPropertyDescriptor('b', undefined, 'nooo why fail??');
   *
   * The above assertion isn't the same thing as not providing `descriptor`.
   * Instead, it's asserting that the target object has a `b` property
   * descriptor that's deeply equal to `undefined`.
   *
   * The alias `.haveOwnPropertyDescriptor` can be used interchangeably with
   * `.ownPropertyDescriptor`.
   *
   * @name ownPropertyDescriptor
   * @alias haveOwnPropertyDescriptor
   * @param {String} name
   * @param {Object} descriptor _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertOwnPropertyDescriptor (name, descriptor, msg) {
    if (typeof descriptor === 'string') {
      msg = descriptor;
      descriptor = null;
    }
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
    if (actualDescriptor && descriptor) {
      this.assert(
          _.eql(descriptor, actualDescriptor)
        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor)
        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor)
        , descriptor
        , actualDescriptor
        , true
      );
    } else {
      this.assert(
          actualDescriptor
        , 'expected #{this} to have an own property descriptor for ' + _.inspect(name)
        , 'expected #{this} to not have an own property descriptor for ' + _.inspect(name)
      );
    }
    flag(this, 'object', actualDescriptor);
  }

  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);

  /**
   * ### .lengthOf(n[, msg])
   *
   * Asserts that the target's `length` or `size` is equal to the given number
   * `n`.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(3);
   *     expect('foo').to.have.lengthOf(3);
   *     expect(new Set([1, 2, 3])).to.have.lengthOf(3);
   *     expect(new Map([['a', 1], ['b', 2], ['c', 3]])).to.have.lengthOf(3);
   *
   * Add `.not` earlier in the chain to negate `.lengthOf`. However, it's often
   * best to assert that the target's `length` property is equal to its expected
   * value, rather than not equal to one of many unexpected values.
   *
   *     expect('foo').to.have.lengthOf(3); // Recommended
   *     expect('foo').to.not.have.lengthOf(4); // Not recommended
   *
   * `.lengthOf` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2, 3]).to.have.lengthOf(2, 'nooo why fail??');
   *     expect([1, 2, 3], 'nooo why fail??').to.have.lengthOf(2);
   *
   * `.lengthOf` can also be used as a language chain, causing all `.above`,
   * `.below`, `.least`, `.most`, and `.within` assertions that follow in the
   * chain to use the target's `length` property as the target. However, it's
   * often best to assert that the target's `length` property is equal to its
   * expected length, rather than asserting that its `length` property falls
   * within some range of values.
   *
   *     // Recommended
   *     expect([1, 2, 3]).to.have.lengthOf(3);
   *
   *     // Not recommended
   *     expect([1, 2, 3]).to.have.lengthOf.above(2);
   *     expect([1, 2, 3]).to.have.lengthOf.below(4);
   *     expect([1, 2, 3]).to.have.lengthOf.at.least(3);
   *     expect([1, 2, 3]).to.have.lengthOf.at.most(3);
   *     expect([1, 2, 3]).to.have.lengthOf.within(2,4);
   *
   * Due to a compatibility issue, the alias `.length` can't be chained directly
   * off of an uninvoked method such as `.a`. Therefore, `.length` can't be used
   * interchangeably with `.lengthOf` in every situation. It's recommended to
   * always use `.lengthOf` instead of `.length`.
   *
   *     expect([1, 2, 3]).to.have.a.length(3); // incompatible; throws error
   *     expect([1, 2, 3]).to.have.a.lengthOf(3);  // passes as expected
   *
   * @name lengthOf
   * @alias length
   * @param {Number} n
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertLengthChain () {
    flag(this, 'doLength', true);
  }

  function assertLength (n, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , objType = _.type(obj).toLowerCase()
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi')
      , descriptor = 'length'
      , itemsCount;

    switch (objType) {
      case 'map':
      case 'set':
        descriptor = 'size';
        itemsCount = obj.size;
        break;
      default:
        new Assertion(obj, flagMsg, ssfi, true).to.have.property('length');
        itemsCount = obj.length;
    }

    this.assert(
        itemsCount == n
      , 'expected #{this} to have a ' + descriptor + ' of #{exp} but got #{act}'
      , 'expected #{this} to not have a ' + descriptor + ' of #{act}'
      , n
      , itemsCount
    );
  }

  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
  Assertion.addChainableMethod('lengthOf', assertLength, assertLengthChain);

  /**
   * ### .match(re[, msg])
   *
   * Asserts that the target matches the given regular expression `re`.
   *
   *     expect('foobar').to.match(/^foo/);
   *
   * Add `.not` earlier in the chain to negate `.match`.
   *
   *     expect('foobar').to.not.match(/taco/);
   *
   * `.match` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect('foobar').to.match(/taco/, 'nooo why fail??');
   *     expect('foobar', 'nooo why fail??').to.match(/taco/);
   *
   * The alias `.matches` can be used interchangeably with `.match`.
   *
   * @name match
   * @alias matches
   * @param {RegExp} re
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */
  function assertMatch(re, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    this.assert(
        re.exec(obj)
      , 'expected #{this} to match ' + re
      , 'expected #{this} not to match ' + re
    );
  }

  Assertion.addMethod('match', assertMatch);
  Assertion.addMethod('matches', assertMatch);

  /**
   * ### .string(str[, msg])
   *
   * Asserts that the target string contains the given substring `str`.
   *
   *     expect('foobar').to.have.string('bar');
   *
   * Add `.not` earlier in the chain to negate `.string`.
   *
   *     expect('foobar').to.not.have.string('taco');
   *
   * `.string` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect('foobar').to.have.string('taco', 'nooo why fail??');
   *     expect('foobar', 'nooo why fail??').to.have.string('taco');
   *
   * @name string
   * @param {String} str
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('string', function (str, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(obj, flagMsg, ssfi, true).is.a('string');

    this.assert(
        ~obj.indexOf(str)
      , 'expected #{this} to contain ' + _.inspect(str)
      , 'expected #{this} to not contain ' + _.inspect(str)
    );
  });

  /**
   * ### .keys(key1[, key2[, ...]])
   *
   * Asserts that the target object, array, map, or set has the given keys. Only
   * the target's own inherited properties are included in the search.
   *
   * When the target is an object or array, keys can be provided as one or more
   * string arguments, a single array argument, or a single object argument. In
   * the latter case, only the keys in the given object matter; the values are
   * ignored.
   *
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *     expect(['x', 'y']).to.have.all.keys(0, 1);
   *
   *     expect({a: 1, b: 2}).to.have.all.keys(['a', 'b']);
   *     expect(['x', 'y']).to.have.all.keys([0, 1]);
   *
   *     expect({a: 1, b: 2}).to.have.all.keys({a: 4, b: 5}); // ignore 4 and 5
   *     expect(['x', 'y']).to.have.all.keys({0: 4, 1: 5}); // ignore 4 and 5
   *
   * When the target is a map or set, each key must be provided as a separate
   * argument.
   *
   *     expect(new Map([['a', 1], ['b', 2]])).to.have.all.keys('a', 'b');
   *     expect(new Set(['a', 'b'])).to.have.all.keys('a', 'b');
   *
   * Because `.keys` does different things based on the target's type, it's
   * important to check the target's type before using `.keys`. See the `.a` doc
   * for info on testing a target's type.
   *
   *     expect({a: 1, b: 2}).to.be.an('object').that.has.all.keys('a', 'b');
   *
   * By default, strict (`===`) equality is used to compare keys of maps and
   * sets. Add `.deep` earlier in the chain to use deep equality instead. See
   * the `deep-eql` project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target set deeply (but not strictly) has key `{a: 1}`
   *     expect(new Set([{a: 1}])).to.have.all.deep.keys([{a: 1}]);
   *     expect(new Set([{a: 1}])).to.not.have.all.keys([{a: 1}]);
   *
   * By default, the target must have all of the given keys and no more. Add
   * `.any` earlier in the chain to only require that the target have at least
   * one of the given keys. Also, add `.not` earlier in the chain to negate
   * `.keys`. It's often best to add `.any` when negating `.keys`, and to use
   * `.all` when asserting `.keys` without negation.
   *
   * When negating `.keys`, `.any` is preferred because `.not.any.keys` asserts
   * exactly what's expected of the output, whereas `.not.all.keys` creates
   * uncertain expectations.
   *
   *     // Recommended; asserts that target doesn't have any of the given keys
   *     expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd');
   *
   *     // Not recommended; asserts that target doesn't have all of the given
   *     // keys but may or may not have some of them
   *     expect({a: 1, b: 2}).to.not.have.all.keys('c', 'd');
   *
   * When asserting `.keys` without negation, `.all` is preferred because
   * `.all.keys` asserts exactly what's expected of the output, whereas
   * `.any.keys` creates uncertain expectations.
   *
   *     // Recommended; asserts that target has all the given keys
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b');
   *
   *     // Not recommended; asserts that target has at least one of the given
   *     // keys but may or may not have more of them
   *     expect({a: 1, b: 2}).to.have.any.keys('a', 'b');
   *
   * Note that `.all` is used by default when neither `.all` nor `.any` appear
   * earlier in the chain. However, it's often best to add `.all` anyway because
   * it improves readability.
   *
   *     // Both assertions are identical
   *     expect({a: 1, b: 2}).to.have.all.keys('a', 'b'); // Recommended
   *     expect({a: 1, b: 2}).to.have.keys('a', 'b'); // Not recommended
   *
   * Add `.include` earlier in the chain to require that the target's keys be a
   * superset of the expected keys, rather than identical sets.
   *
   *     // Target object's keys are a superset of ['a', 'b'] but not identical
   *     expect({a: 1, b: 2, c: 3}).to.include.all.keys('a', 'b');
   *     expect({a: 1, b: 2, c: 3}).to.not.have.all.keys('a', 'b');
   *
   * However, if `.any` and `.include` are combined, only the `.any` takes
   * effect. The `.include` is ignored in this case.
   *
   *     // Both assertions are identical
   *     expect({a: 1}).to.have.any.keys('a', 'b');
   *     expect({a: 1}).to.include.any.keys('a', 'b');
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.have.key('b');
   *
   * The alias `.key` can be used interchangeably with `.keys`.
   *
   * @name keys
   * @alias key
   * @param {...String|Array|Object} keys
   * @namespace BDD
   * @api public
   */

  function assertKeys (keys) {
    var obj = flag(this, 'object')
      , objType = _.type(obj)
      , keysType = _.type(keys)
      , ssfi = flag(this, 'ssfi')
      , isDeep = flag(this, 'deep')
      , str
      , deepStr = ''
      , actual
      , ok = true
      , flagMsg = flag(this, 'message');

    flagMsg = flagMsg ? flagMsg + ': ' : '';
    var mixedArgsMsg = flagMsg + 'when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments';

    if (objType === 'Map' || objType === 'Set') {
      deepStr = isDeep ? 'deeply ' : '';
      actual = [];

      // Map and Set '.keys' aren't supported in IE 11. Therefore, use .forEach.
      obj.forEach(function (val, key) { actual.push(key) });

      if (keysType !== 'Array') {
        keys = Array.prototype.slice.call(arguments);
      }
    } else {
      actual = _.getOwnEnumerableProperties(obj);

      switch (keysType) {
        case 'Array':
          if (arguments.length > 1) {
            throw new AssertionError(mixedArgsMsg, undefined, ssfi);
          }
          break;
        case 'Object':
          if (arguments.length > 1) {
            throw new AssertionError(mixedArgsMsg, undefined, ssfi);
          }
          keys = Object.keys(keys);
          break;
        default:
          keys = Array.prototype.slice.call(arguments);
      }

      // Only stringify non-Symbols because Symbols would become "Symbol()"
      keys = keys.map(function (val) {
        return typeof val === 'symbol' ? val : String(val);
      });
    }

    if (!keys.length) {
      throw new AssertionError(flagMsg + 'keys required', undefined, ssfi);
    }

    var len = keys.length
      , any = flag(this, 'any')
      , all = flag(this, 'all')
      , expected = keys;

    if (!any && !all) {
      all = true;
    }

    // Has any
    if (any) {
      ok = expected.some(function(expectedKey) {
        return actual.some(function(actualKey) {
          if (isDeep) {
            return _.eql(expectedKey, actualKey);
          } else {
            return expectedKey === actualKey;
          }
        });
      });
    }

    // Has all
    if (all) {
      ok = expected.every(function(expectedKey) {
        return actual.some(function(actualKey) {
          if (isDeep) {
            return _.eql(expectedKey, actualKey);
          } else {
            return expectedKey === actualKey;
          }
        });
      });

      if (!flag(this, 'contains')) {
        ok = ok && keys.length == actual.length;
      }
    }

    // Key string
    if (len > 1) {
      keys = keys.map(function(key) {
        return _.inspect(key);
      });
      var last = keys.pop();
      if (all) {
        str = keys.join(', ') + ', and ' + last;
      }
      if (any) {
        str = keys.join(', ') + ', or ' + last;
      }
    } else {
      str = _.inspect(keys[0]);
    }

    // Form
    str = (len > 1 ? 'keys ' : 'key ') + str;

    // Have / include
    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

    // Assertion
    this.assert(
        ok
      , 'expected #{this} to ' + deepStr + str
      , 'expected #{this} to not ' + deepStr + str
      , expected.slice(0).sort(_.compareByInspect)
      , actual.sort(_.compareByInspect)
      , true
    );
  }

  Assertion.addMethod('keys', assertKeys);
  Assertion.addMethod('key', assertKeys);

  /**
   * ### .throw([errorLike], [errMsgMatcher], [msg])
   *
   * When no arguments are provided, `.throw` invokes the target function and
   * asserts that an error is thrown.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw();
   *
   * When one argument is provided, and it's an error constructor, `.throw`
   * invokes the target function and asserts that an error is thrown that's an
   * instance of that error constructor.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(TypeError);
   *
   * When one argument is provided, and it's an error instance, `.throw` invokes
   * the target function and asserts that an error is thrown that's strictly
   * (`===`) equal to that error instance.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(err);
   *
   * When one argument is provided, and it's a string, `.throw` invokes the
   * target function and asserts that an error is thrown with a message that
   * contains that string.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw('salmon');
   *
   * When one argument is provided, and it's a regular expression, `.throw`
   * invokes the target function and asserts that an error is thrown with a
   * message that matches that regular expression.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(/salmon/);
   *
   * When two arguments are provided, and the first is an error instance or
   * constructor, and the second is a string or regular expression, `.throw`
   * invokes the function and asserts that an error is thrown that fulfills both
   * conditions as described above.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(TypeError, 'salmon');
   *     expect(badFn).to.throw(TypeError, /salmon/);
   *     expect(badFn).to.throw(err, 'salmon');
   *     expect(badFn).to.throw(err, /salmon/);
   *
   * Add `.not` earlier in the chain to negate `.throw`.
   *
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.not.throw();
   *
   * However, it's dangerous to negate `.throw` when providing any arguments.
   * The problem is that it creates uncertain expectations by asserting that the
   * target either doesn't throw an error, or that it throws an error but of a
   * different type than the given type, or that it throws an error of the given
   * type but with a message that doesn't include the given string. It's often
   * best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to throw an error, it's often best to assert
   * exactly that.
   *
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.not.throw(); // Recommended
   *     expect(goodFn).to.not.throw(ReferenceError, 'x'); // Not recommended
   *
   * When the target is expected to throw an error, it's often best to assert
   * that the error is of its expected type, and has a message that includes an
   * expected string, rather than asserting that it doesn't have one of many
   * unexpected types, and doesn't have a message that includes some string.
   *
   *     var badFn = function () { throw new TypeError('Illegal salmon!'); };
   *
   *     expect(badFn).to.throw(TypeError, 'salmon'); // Recommended
   *     expect(badFn).to.not.throw(ReferenceError, 'x'); // Not recommended
   *
   * `.throw` changes the target of any assertions that follow in the chain to
   * be the error object that's thrown.
   *
   *     var err = new TypeError('Illegal salmon!');
   *     err.code = 42;
   *     var badFn = function () { throw err; };
   *
   *     expect(badFn).to.throw(TypeError).with.property('code', 42);
   *
   * `.throw` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`. When not providing two arguments, always use
   * the second form.
   *
   *     var goodFn = function () {};
   *
   *     expect(goodFn).to.throw(TypeError, 'x', 'nooo why fail??');
   *     expect(goodFn, 'nooo why fail??').to.throw();
   *
   * Due to limitations in ES5, `.throw` may not always work as expected when
   * using a transpiler such as Babel or TypeScript. In particular, it may
   * produce unexpected results when subclassing the built-in `Error` object and
   * then passing the subclassed constructor to `.throw`. See your transpiler's
   * docs for details:
   *
   * - ([Babel](https://babeljs.io/docs/usage/caveats/#classes))
   * - ([TypeScript](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work))
   *
   * Beware of some common mistakes when using the `throw` assertion. One common
   * mistake is to accidentally invoke the function yourself instead of letting
   * the `throw` assertion invoke the function for you. For example, when
   * testing if a function named `fn` throws, provide `fn` instead of `fn()` as
   * the target for the assertion.
   *
   *     expect(fn).to.throw();     // Good! Tests `fn` as desired
   *     expect(fn()).to.throw();   // Bad! Tests result of `fn()`, not `fn`
   *
   * If you need to assert that your function `fn` throws when passed certain
   * arguments, then wrap a call to `fn` inside of another function.
   *
   *     expect(function () { fn(42); }).to.throw();  // Function expression
   *     expect(() => fn(42)).to.throw();             // ES6 arrow function
   *
   * Another common mistake is to provide an object method (or any stand-alone
   * function that relies on `this`) as the target of the assertion. Doing so is
   * problematic because the `this` context will be lost when the function is
   * invoked by `.throw`; there's no way for it to know what `this` is supposed
   * to be. There are two ways around this problem. One solution is to wrap the
   * method or function call inside of another function. Another solution is to
   * use `bind`.
   *
   *     expect(function () { cat.meow(); }).to.throw();  // Function expression
   *     expect(() => cat.meow()).to.throw();             // ES6 arrow function
   *     expect(cat.meow.bind(cat)).to.throw();           // Bind
   *
   * Finally, it's worth mentioning that it's a best practice in JavaScript to
   * only throw `Error` and derivatives of `Error` such as `ReferenceError`,
   * `TypeError`, and user-defined objects that extend `Error`. No other type of
   * value will generate a stack trace when initialized. With that said, the
   * `throw` assertion does technically support any type of value being thrown,
   * not just `Error` and its derivatives.
   *
   * The aliases `.throws` and `.Throw` can be used interchangeably with
   * `.throw`.
   *
   * @name throw
   * @alias throws
   * @alias Throw
   * @param {Error|ErrorConstructor} errorLike
   * @param {String|RegExp} errMsgMatcher error message
   * @param {String} msg _optional_
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @returns error for chaining (null if no error)
   * @namespace BDD
   * @api public
   */

  function assertThrows (errorLike, errMsgMatcher, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , ssfi = flag(this, 'ssfi')
      , flagMsg = flag(this, 'message')
      , negate = flag(this, 'negate') || false;
    new Assertion(obj, flagMsg, ssfi, true).is.a('function');

    if (errorLike instanceof RegExp || typeof errorLike === 'string') {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    var caughtErr;
    try {
      obj();
    } catch (err) {
      caughtErr = err;
    }

    // If we have the negate flag enabled and at least one valid argument it means we do expect an error
    // but we want it to match a given set of criteria
    var everyArgIsUndefined = errorLike === undefined && errMsgMatcher === undefined;

    // If we've got the negate flag enabled and both args, we should only fail if both aren't compatible
    // See Issue #551 and PR #683@GitHub
    var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
    var errorLikeFail = false;
    var errMsgMatcherFail = false;

    // Checking if error was thrown
    if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
      // We need this to display results correctly according to their types
      var errorLikeString = 'an error';
      if (errorLike instanceof Error) {
        errorLikeString = '#{exp}';
      } else if (errorLike) {
        errorLikeString = _.checkError.getConstructorName(errorLike);
      }

      this.assert(
          caughtErr
        , 'expected #{this} to throw ' + errorLikeString
        , 'expected #{this} to not throw an error but #{act} was thrown'
        , errorLike && errorLike.toString()
        , (caughtErr instanceof Error ?
            caughtErr.toString() : (typeof caughtErr === 'string' ? caughtErr : caughtErr &&
                                    _.checkError.getConstructorName(caughtErr)))
      );
    }

    if (errorLike && caughtErr) {
      // We should compare instances only if `errorLike` is an instance of `Error`
      if (errorLike instanceof Error) {
        var isCompatibleInstance = _.checkError.compatibleInstance(caughtErr, errorLike);

        if (isCompatibleInstance === negate) {
          // These checks were created to ensure we won't fail too soon when we've got both args and a negate
          // See Issue #551 and PR #683@GitHub
          if (everyArgIsDefined && negate) {
            errorLikeFail = true;
          } else {
            this.assert(
                negate
              , 'expected #{this} to throw #{exp} but #{act} was thrown'
              , 'expected #{this} to not throw #{exp}' + (caughtErr && !negate ? ' but #{act} was thrown' : '')
              , errorLike.toString()
              , caughtErr.toString()
            );
          }
        }
      }

      var isCompatibleConstructor = _.checkError.compatibleConstructor(caughtErr, errorLike);
      if (isCompatibleConstructor === negate) {
        if (everyArgIsDefined && negate) {
            errorLikeFail = true;
        } else {
          this.assert(
              negate
            , 'expected #{this} to throw #{exp} but #{act} was thrown'
            , 'expected #{this} to not throw #{exp}' + (caughtErr ? ' but #{act} was thrown' : '')
            , (errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike))
            , (caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr))
          );
        }
      }
    }

    if (caughtErr && errMsgMatcher !== undefined && errMsgMatcher !== null) {
      // Here we check compatible messages
      var placeholder = 'including';
      if (errMsgMatcher instanceof RegExp) {
        placeholder = 'matching'
      }

      var isCompatibleMessage = _.checkError.compatibleMessage(caughtErr, errMsgMatcher);
      if (isCompatibleMessage === negate) {
        if (everyArgIsDefined && negate) {
            errMsgMatcherFail = true;
        } else {
          this.assert(
            negate
            , 'expected #{this} to throw error ' + placeholder + ' #{exp} but got #{act}'
            , 'expected #{this} to throw error not ' + placeholder + ' #{exp}'
            ,  errMsgMatcher
            ,  _.checkError.getMessage(caughtErr)
          );
        }
      }
    }

    // If both assertions failed and both should've matched we throw an error
    if (errorLikeFail && errMsgMatcherFail) {
      this.assert(
        negate
        , 'expected #{this} to throw #{exp} but #{act} was thrown'
        , 'expected #{this} to not throw #{exp}' + (caughtErr ? ' but #{act} was thrown' : '')
        , (errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike))
        , (caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr))
      );
    }

    flag(this, 'object', caughtErr);
  };

  Assertion.addMethod('throw', assertThrows);
  Assertion.addMethod('throws', assertThrows);
  Assertion.addMethod('Throw', assertThrows);

  /**
   * ### .respondTo(method[, msg])
   *
   * When the target is a non-function object, `.respondTo` asserts that the
   * target has a method with the given name `method`. The method can be own or
   * inherited, and it can be enumerable or non-enumerable.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(new Cat()).to.respondTo('meow');
   *
   * When the target is a function, `.respondTo` asserts that the target's
   * `prototype` property has a method with the given name `method`. Again, the
   * method can be own or inherited, and it can be enumerable or non-enumerable.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(Cat).to.respondTo('meow');
   *
   * Add `.itself` earlier in the chain to force `.respondTo` to treat the
   * target as a non-function object, even if it's a function. Thus, it asserts
   * that the target has a method with the given name `method`, rather than
   * asserting that the target's `prototype` property has a method with the
   * given name `method`.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *     Cat.hiss = function () {};
   *
   *     expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow');
   *
   * When not adding `.itself`, it's important to check the target's type before
   * using `.respondTo`. See the `.a` doc for info on checking a target's type.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *
   *     expect(new Cat()).to.be.an('object').that.respondsTo('meow');
   *
   * Add `.not` earlier in the chain to negate `.respondTo`.
   *
   *     function Dog () {}
   *     Dog.prototype.bark = function () {};
   *
   *     expect(new Dog()).to.not.respondTo('meow');
   *
   * `.respondTo` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect({}).to.respondTo('meow', 'nooo why fail??');
   *     expect({}, 'nooo why fail??').to.respondTo('meow');
   *
   * The alias `.respondsTo` can be used interchangeably with `.respondTo`.
   *
   * @name respondTo
   * @alias respondsTo
   * @param {String} method
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function respondTo (method, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , itself = flag(this, 'itself')
      , context = ('function' === typeof obj && !itself)
        ? obj.prototype[method]
        : obj[method];

    this.assert(
        'function' === typeof context
      , 'expected #{this} to respond to ' + _.inspect(method)
      , 'expected #{this} to not respond to ' + _.inspect(method)
    );
  }

  Assertion.addMethod('respondTo', respondTo);
  Assertion.addMethod('respondsTo', respondTo);

  /**
   * ### .itself
   *
   * Forces all `.respondTo` assertions that follow in the chain to behave as if
   * the target is a non-function object, even if it's a function. Thus, it
   * causes `.respondTo` to assert that the target has a method with the given
   * name, rather than asserting that the target's `prototype` property has a
   * method with the given name.
   *
   *     function Cat () {}
   *     Cat.prototype.meow = function () {};
   *     Cat.hiss = function () {};
   *
   *     expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow');
   *
   * @name itself
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('itself', function () {
    flag(this, 'itself', true);
  });

  /**
   * ### .satisfy(matcher[, msg])
   *
   * Invokes the given `matcher` function with the target being passed as the
   * first argument, and asserts that the value returned is truthy.
   *
   *     expect(1).to.satisfy(function(num) {
   *       return num > 0;
   *     });
   *
   * Add `.not` earlier in the chain to negate `.satisfy`.
   *
   *     expect(1).to.not.satisfy(function(num) {
   *       return num > 2;
   *     });
   *
   * `.satisfy` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1).to.satisfy(function(num) {
   *       return num > 2;
   *     }, 'nooo why fail??');
   *
   *     expect(1, 'nooo why fail??').to.satisfy(function(num) {
   *       return num > 2;
   *     });
   *
   * The alias `.satisfies` can be used interchangeably with `.satisfy`.
   *
   * @name satisfy
   * @alias satisfies
   * @param {Function} matcher
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function satisfy (matcher, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object');
    var result = matcher(obj);
    this.assert(
        result
      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
      , flag(this, 'negate') ? false : true
      , result
    );
  }

  Assertion.addMethod('satisfy', satisfy);
  Assertion.addMethod('satisfies', satisfy);

  /**
   * ### .closeTo(expected, delta[, msg])
   *
   * Asserts that the target is a number that's within a given +/- `delta` range
   * of the given number `expected`. However, it's often best to assert that the
   * target is equal to its expected value.
   *
   *     // Recommended
   *     expect(1.5).to.equal(1.5);
   *
   *     // Not recommended
   *     expect(1.5).to.be.closeTo(1, 0.5);
   *     expect(1.5).to.be.closeTo(2, 0.5);
   *     expect(1.5).to.be.closeTo(1, 1);
   *
   * Add `.not` earlier in the chain to negate `.closeTo`.
   *
   *     expect(1.5).to.equal(1.5); // Recommended
   *     expect(1.5).to.not.be.closeTo(3, 1); // Not recommended
   *
   * `.closeTo` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect(1.5).to.be.closeTo(3, 1, 'nooo why fail??');
   *     expect(1.5, 'nooo why fail??').to.be.closeTo(3, 1);
   *
   * The alias `.approximately` can be used interchangeably with `.closeTo`.
   *
   * @name closeTo
   * @alias approximately
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function closeTo(expected, delta, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');

    new Assertion(obj, flagMsg, ssfi, true).is.a('number');
    if (typeof expected !== 'number' || typeof delta !== 'number') {
      flagMsg = flagMsg ? flagMsg + ': ' : '';
      throw new AssertionError(
          flagMsg + 'the arguments to closeTo or approximately must be numbers',
          undefined,
          ssfi
      );
    }

    this.assert(
        Math.abs(obj - expected) <= delta
      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
    );
  }

  Assertion.addMethod('closeTo', closeTo);
  Assertion.addMethod('approximately', closeTo);

  // Note: Duplicates are ignored if testing for inclusion instead of sameness.
  function isSubsetOf(subset, superset, cmp, contains, ordered) {
    if (!contains) {
      if (subset.length !== superset.length) return false;
      superset = superset.slice();
    }

    return subset.every(function(elem, idx) {
      if (ordered) return cmp ? cmp(elem, superset[idx]) : elem === superset[idx];

      if (!cmp) {
        var matchIdx = superset.indexOf(elem);
        if (matchIdx === -1) return false;

        // Remove match from superset so not counted twice if duplicate in subset.
        if (!contains) superset.splice(matchIdx, 1);
        return true;
      }

      return superset.some(function(elem2, matchIdx) {
        if (!cmp(elem, elem2)) return false;

        // Remove match from superset so not counted twice if duplicate in subset.
        if (!contains) superset.splice(matchIdx, 1);
        return true;
      });
    });
  }

  /**
   * ### .members(set[, msg])
   *
   * Asserts that the target array has the same members as the given array
   * `set`.
   *
   *     expect([1, 2, 3]).to.have.members([2, 1, 3]);
   *     expect([1, 2, 2]).to.have.members([2, 1, 2]);
   *
   * By default, members are compared using strict (`===`) equality. Add `.deep`
   * earlier in the chain to use deep equality instead. See the `deep-eql`
   * project page for info on the deep equality algorithm:
   * https://github.com/chaijs/deep-eql.
   *
   *     // Target array deeply (but not strictly) has member `{a: 1}`
   *     expect([{a: 1}]).to.have.deep.members([{a: 1}]);
   *     expect([{a: 1}]).to.not.have.members([{a: 1}]);
   *
   * By default, order doesn't matter. Add `.ordered` earlier in the chain to
   * require that members appear in the same order.
   *
   *     expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);
   *     expect([1, 2, 3]).to.have.members([2, 1, 3])
   *       .but.not.ordered.members([2, 1, 3]);
   *
   * By default, both arrays must be the same size. Add `.include` earlier in
   * the chain to require that the target's members be a superset of the
   * expected members. Note that duplicates are ignored in the subset when
   * `.include` is added.
   *
   *     // Target array is a superset of [1, 2] but not identical
   *     expect([1, 2, 3]).to.include.members([1, 2]);
   *     expect([1, 2, 3]).to.not.have.members([1, 2]);
   *
   *     // Duplicates in the subset are ignored
   *     expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);
   *
   * `.deep`, `.ordered`, and `.include` can all be combined. However, if
   * `.include` and `.ordered` are combined, the ordering begins at the start of
   * both arrays.
   *
   *     expect([{a: 1}, {b: 2}, {c: 3}])
   *       .to.include.deep.ordered.members([{a: 1}, {b: 2}])
   *       .but.not.include.deep.ordered.members([{b: 2}, {c: 3}]);
   *
   * Add `.not` earlier in the chain to negate `.members`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the target array doesn't have all of the same members as
   * the given array `set` but may or may not have some of them. It's often best
   * to identify the exact output that's expected, and then write an assertion
   * that only accepts that exact output.
   *
   *     expect([1, 2]).to.not.include(3).and.not.include(4); // Recommended
   *     expect([1, 2]).to.not.have.members([3, 4]); // Not recommended
   *
   * `.members` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`.
   *
   *     expect([1, 2]).to.have.members([1, 2, 3], 'nooo why fail??');
   *     expect([1, 2], 'nooo why fail??').to.have.members([1, 2, 3]);
   *
   * @name members
   * @param {Array} set
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  Assertion.addMethod('members', function (subset, msg) {
    if (msg) flag(this, 'message', msg);
    var obj = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');

    new Assertion(obj, flagMsg, ssfi, true).to.be.an('array');
    new Assertion(subset, flagMsg, ssfi, true).to.be.an('array');

    var contains = flag(this, 'contains');
    var ordered = flag(this, 'ordered');

    var subject, failMsg, failNegateMsg;

    if (contains) {
      subject = ordered ? 'an ordered superset' : 'a superset';
      failMsg = 'expected #{this} to be ' + subject + ' of #{exp}';
      failNegateMsg = 'expected #{this} to not be ' + subject + ' of #{exp}';
    } else {
      subject = ordered ? 'ordered members' : 'members';
      failMsg = 'expected #{this} to have the same ' + subject + ' as #{exp}';
      failNegateMsg = 'expected #{this} to not have the same ' + subject + ' as #{exp}';
    }

    var cmp = flag(this, 'deep') ? _.eql : undefined;

    this.assert(
        isSubsetOf(subset, obj, cmp, contains, ordered)
      , failMsg
      , failNegateMsg
      , subset
      , obj
      , true
    );
  });

  /**
   * ### .oneOf(list[, msg])
   *
   * Asserts that the target is a member of the given array `list`. However,
   * it's often best to assert that the target is equal to its expected value.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.be.oneOf([1, 2, 3]); // Not recommended
   *
   * Comparisons are performed using strict (`===`) equality.
   *
   * Add `.not` earlier in the chain to negate `.oneOf`.
   *
   *     expect(1).to.equal(1); // Recommended
   *     expect(1).to.not.be.oneOf([2, 3, 4]); // Not recommended
   *
   * `.oneOf` accepts an optional `msg` argument which is a custom error message
   * to show when the assertion fails. The message can also be given as the
   * second argument to `expect`.
   *
   *     expect(1).to.be.oneOf([2, 3, 4], 'nooo why fail??');
   *     expect(1, 'nooo why fail??').to.be.oneOf([2, 3, 4]);
   *
   * @name oneOf
   * @param {Array<*>} list
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function oneOf (list, msg) {
    if (msg) flag(this, 'message', msg);
    var expected = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(list, flagMsg, ssfi, true).to.be.an('array');

    this.assert(
        list.indexOf(expected) > -1
      , 'expected #{this} to be one of #{exp}'
      , 'expected #{this} to not be one of #{exp}'
      , list
      , expected
    );
  }

  Assertion.addMethod('oneOf', oneOf);

  /**
   * ### .change(subject[, prop[, msg]])
   *
   * When one argument is provided, `.change` asserts that the given function
   * `subject` returns a different value when it's invoked before the target
   * function compared to when it's invoked afterward. However, it's often best
   * to assert that `subject` is equal to its expected value.
   *
   *     var dots = ''
   *       , addDot = function () { dots += '.'; }
   *       , getDots = function () { return dots; };
   *
   *     // Recommended
   *     expect(getDots()).to.equal('');
   *     addDot();
   *     expect(getDots()).to.equal('.');
   *
   *     // Not recommended
   *     expect(addDot).to.change(getDots);
   *
   * When two arguments are provided, `.change` asserts that the value of the
   * given object `subject`'s `prop` property is different before invoking the
   * target function compared to afterward.
   *
   *     var myObj = {dots: ''}
   *       , addDot = function () { myObj.dots += '.'; };
   *
   *     // Recommended
   *     expect(myObj).to.have.property('dots', '');
   *     addDot();
   *     expect(myObj).to.have.property('dots', '.');
   *
   *     // Not recommended
   *     expect(addDot).to.change(myObj, 'dots');
   *
   * Strict (`===`) equality is used to compare before and after values.
   *
   * Add `.not` earlier in the chain to negate `.change`.
   *
   *     var dots = ''
   *       , noop = function () {}
   *       , getDots = function () { return dots; };
   *
   *     expect(noop).to.not.change(getDots);
   *
   *     var myObj = {dots: ''}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'dots');
   *
   * `.change` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {dots: ''}
   *       , addDot = function () { myObj.dots += '.'; };
   *
   *     expect(addDot).to.not.change(myObj, 'dots', 'nooo why fail??');
   *
   *     var dots = ''
   *       , addDot = function () { dots += '.'; }
   *       , getDots = function () { return dots; };
   *
   *     expect(addDot, 'nooo why fail??').to.not.change(getDots);
   *
   * `.change` also causes all `.by` assertions that follow in the chain to
   * assert how much a numeric subject was increased or decreased by. However,
   * it's dangerous to use `.change.by`. The problem is that it creates
   * uncertain expectations by asserting that the subject either increases by
   * the given delta, or that it decreases by the given delta. It's often best
   * to identify the exact output that's expected, and then write an assertion
   * that only accepts that exact output.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; }
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   * The alias `.changes` can be used interchangeably with `.change`.
   *
   * @name change
   * @alias changes
   * @param {String} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertChanges (subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    // This gets flagged because of the .by(delta) assertion
    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'change');
    flag(this, 'realDelta', final !== initial);

    this.assert(
      initial !== final
      , 'expected ' + msgObj + ' to change'
      , 'expected ' + msgObj + ' to not change'
    );
  }

  Assertion.addMethod('change', assertChanges);
  Assertion.addMethod('changes', assertChanges);

  /**
   * ### .increase(subject[, prop[, msg]])
   *
   * When one argument is provided, `.increase` asserts that the given function
   * `subject` returns a greater number when it's invoked after invoking the
   * target function compared to when it's invoked beforehand. `.increase` also
   * causes all `.by` assertions that follow in the chain to assert how much
   * greater of a number is returned. It's often best to assert that the return
   * value increased by the expected amount, rather than asserting it increased
   * by any amount.
   *
   *     var val = 1
   *       , addTwo = function () { val += 2; }
   *       , getVal = function () { return val; };
   *
   *     expect(addTwo).to.increase(getVal).by(2); // Recommended
   *     expect(addTwo).to.increase(getVal); // Not recommended
   *
   * When two arguments are provided, `.increase` asserts that the value of the
   * given object `subject`'s `prop` property is greater after invoking the
   * target function compared to beforehand.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.increase(myObj, 'val'); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.increase`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either decreases, or that it stays the same.
   * It's often best to identify the exact output that's expected, and then
   * write an assertion that only accepts that exact output.
   *
   * When the subject is expected to decrease, it's often best to assert that it
   * decreased by the expected amount.
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.not.increase(myObj, 'val'); // Not recommended
   *
   * When the subject is expected to stay the same, it's often best to assert
   * exactly that.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'val'); // Recommended
   *     expect(noop).to.not.increase(myObj, 'val'); // Not recommended
   *
   * `.increase` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.increase(myObj, 'val', 'nooo why fail??');
   *
   *     var val = 1
   *       , noop = function () {}
   *       , getVal = function () { return val; };
   *
   *     expect(noop, 'nooo why fail??').to.increase(getVal);
   *
   * The alias `.increases` can be used interchangeably with `.increase`.
   *
   * @name increase
   * @alias increases
   * @param {String|Function} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertIncreases (subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    // Make sure that the target is a number
    new Assertion(initial, flagMsg, ssfi, true).is.a('number');

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'increase');
    flag(this, 'realDelta', final - initial);

    this.assert(
      final - initial > 0
      , 'expected ' + msgObj + ' to increase'
      , 'expected ' + msgObj + ' to not increase'
    );
  }

  Assertion.addMethod('increase', assertIncreases);
  Assertion.addMethod('increases', assertIncreases);

  /**
   * ### .decrease(subject[, prop[, msg]])
   *
   * When one argument is provided, `.decrease` asserts that the given function
   * `subject` returns a lesser number when it's invoked after invoking the
   * target function compared to when it's invoked beforehand. `.decrease` also
   * causes all `.by` assertions that follow in the chain to assert how much
   * lesser of a number is returned. It's often best to assert that the return
   * value decreased by the expected amount, rather than asserting it decreased
   * by any amount.
   *
   *     var val = 1
   *       , subtractTwo = function () { val -= 2; }
   *       , getVal = function () { return val; };
   *
   *     expect(subtractTwo).to.decrease(getVal).by(2); // Recommended
   *     expect(subtractTwo).to.decrease(getVal); // Not recommended
   *
   * When two arguments are provided, `.decrease` asserts that the value of the
   * given object `subject`'s `prop` property is lesser after invoking the
   * target function compared to beforehand.
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.decrease(myObj, 'val'); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.decrease`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either increases, or that it stays the same.
   * It's often best to identify the exact output that's expected, and then
   * write an assertion that only accepts that exact output.
   *
   * When the subject is expected to increase, it's often best to assert that it
   * increased by the expected amount.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.not.decrease(myObj, 'val'); // Not recommended
   *
   * When the subject is expected to stay the same, it's often best to assert
   * exactly that.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.not.change(myObj, 'val'); // Recommended
   *     expect(noop).to.not.decrease(myObj, 'val'); // Not recommended
   *
   * `.decrease` accepts an optional `msg` argument which is a custom error
   * message to show when the assertion fails. The message can also be given as
   * the second argument to `expect`. When not providing two arguments, always
   * use the second form.
   *
   *     var myObj = {val: 1}
   *       , noop = function () {};
   *
   *     expect(noop).to.decrease(myObj, 'val', 'nooo why fail??');
   *
   *     var val = 1
   *       , noop = function () {}
   *       , getVal = function () { return val; };
   *
   *     expect(noop, 'nooo why fail??').to.decrease(getVal);
   *
   * The alias `.decreases` can be used interchangeably with `.decrease`.
   *
   * @name decrease
   * @alias decreases
   * @param {String|Function} subject
   * @param {String} prop name _optional_
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertDecreases (subject, prop, msg) {
    if (msg) flag(this, 'message', msg);
    var fn = flag(this, 'object')
      , flagMsg = flag(this, 'message')
      , ssfi = flag(this, 'ssfi');
    new Assertion(fn, flagMsg, ssfi, true).is.a('function');

    var initial;
    if (!prop) {
      new Assertion(subject, flagMsg, ssfi, true).is.a('function');
      initial = subject();
    } else {
      new Assertion(subject, flagMsg, ssfi, true).to.have.property(prop);
      initial = subject[prop];
    }

    // Make sure that the target is a number
    new Assertion(initial, flagMsg, ssfi, true).is.a('number');

    fn();

    var final = prop === undefined || prop === null ? subject() : subject[prop];
    var msgObj = prop === undefined || prop === null ? initial : '.' + prop;

    flag(this, 'deltaMsgObj', msgObj);
    flag(this, 'initialDeltaValue', initial);
    flag(this, 'finalDeltaValue', final);
    flag(this, 'deltaBehavior', 'decrease');
    flag(this, 'realDelta', initial - final);

    this.assert(
      final - initial < 0
      , 'expected ' + msgObj + ' to decrease'
      , 'expected ' + msgObj + ' to not decrease'
    );
  }

  Assertion.addMethod('decrease', assertDecreases);
  Assertion.addMethod('decreases', assertDecreases);

  /**
   * ### .by(delta[, msg])
   *
   * When following an `.increase` assertion in the chain, `.by` asserts that
   * the subject of the `.increase` assertion increased by the given `delta`.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2);
   *
   * When following a `.decrease` assertion in the chain, `.by` asserts that the
   * subject of the `.decrease` assertion decreased by the given `delta`.
   *
   *     var myObj = {val: 1}
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2);
   *
   * When following a `.change` assertion in the chain, `.by` asserts that the
   * subject of the `.change` assertion either increased or decreased by the
   * given `delta`. However, it's dangerous to use `.change.by`. The problem is
   * that it creates uncertain expectations. It's often best to identify the
   * exact output that's expected, and then write an assertion that only accepts
   * that exact output.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; }
   *       , subtractTwo = function () { myObj.val -= 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(2); // Recommended
   *     expect(addTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   *     expect(subtractTwo).to.decrease(myObj, 'val').by(2); // Recommended
   *     expect(subtractTwo).to.change(myObj, 'val').by(2); // Not recommended
   *
   * Add `.not` earlier in the chain to negate `.by`. However, it's often best
   * to assert that the subject changed by its expected delta, rather than
   * asserting that it didn't change by one of countless unexpected deltas.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     // Recommended
   *     expect(addTwo).to.increase(myObj, 'val').by(2);
   *
   *     // Not recommended
   *     expect(addTwo).to.increase(myObj, 'val').but.not.by(3);
   *
   * `.by` accepts an optional `msg` argument which is a custom error message to
   * show when the assertion fails. The message can also be given as the second
   * argument to `expect`.
   *
   *     var myObj = {val: 1}
   *       , addTwo = function () { myObj.val += 2; };
   *
   *     expect(addTwo).to.increase(myObj, 'val').by(3, 'nooo why fail??');
   *     expect(addTwo, 'nooo why fail??').to.increase(myObj, 'val').by(3);
   *
   * @name by
   * @param {Number} delta
   * @param {String} msg _optional_
   * @namespace BDD
   * @api public
   */

  function assertDelta(delta, msg) {
    if (msg) flag(this, 'message', msg);

    var msgObj = flag(this, 'deltaMsgObj');
    var initial = flag(this, 'initialDeltaValue');
    var final = flag(this, 'finalDeltaValue');
    var behavior = flag(this, 'deltaBehavior');
    var realDelta = flag(this, 'realDelta');

    var expression;
    if (behavior === 'change') {
      expression = Math.abs(final - initial) === Math.abs(delta);
    } else {
      expression = realDelta === Math.abs(delta);
    }

    this.assert(
      expression
      , 'expected ' + msgObj + ' to ' + behavior + ' by ' + delta
      , 'expected ' + msgObj + ' to not ' + behavior + ' by ' + delta
    );
  }

  Assertion.addMethod('by', assertDelta);

  /**
   * ### .extensible
   *
   * Asserts that the target is extensible, which means that new properties can
   * be added to it. Primitives are never extensible.
   *
   *     expect({a: 1}).to.be.extensible;
   *
   * Add `.not` earlier in the chain to negate `.extensible`.
   *
   *     var nonExtensibleObject = Object.preventExtensions({})
   *       , sealedObject = Object.seal({})
   *       , frozenObject = Object.freeze({});
   *
   *     expect(nonExtensibleObject).to.not.be.extensible;
   *     expect(sealedObject).to.not.be.extensible;
   *     expect(frozenObject).to.not.be.extensible;
   *     expect(1).to.not.be.extensible;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect(1, 'nooo why fail??').to.be.extensible;
   *
   * @name extensible
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('extensible', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
    // The following provides ES6 behavior for ES5 environments.

    var isExtensible = obj === Object(obj) && Object.isExtensible(obj);

    this.assert(
      isExtensible
      , 'expected #{this} to be extensible'
      , 'expected #{this} to not be extensible'
    );
  });

  /**
   * ### .sealed
   *
   * Asserts that the target is sealed, which means that new properties can't be
   * added to it, and its existing properties can't be reconfigured or deleted.
   * However, it's possible that its existing properties can still be reassigned
   * to different values. Primitives are always sealed.
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     expect(sealedObject).to.be.sealed;
   *     expect(frozenObject).to.be.sealed;
   *     expect(1).to.be.sealed;
   *
   * Add `.not` earlier in the chain to negate `.sealed`.
   *
   *     expect({a: 1}).to.not.be.sealed;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.be.sealed;
   *
   * @name sealed
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('sealed', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
    // The following provides ES6 behavior for ES5 environments.

    var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;

    this.assert(
      isSealed
      , 'expected #{this} to be sealed'
      , 'expected #{this} to not be sealed'
    );
  });

  /**
   * ### .frozen
   *
   * Asserts that the target is frozen, which means that new properties can't be
   * added to it, and its existing properties can't be reassigned to different
   * values, reconfigured, or deleted. Primitives are always frozen.
   *
   *     var frozenObject = Object.freeze({});
   *
   *     expect(frozenObject).to.be.frozen;
   *     expect(1).to.be.frozen;
   *
   * Add `.not` earlier in the chain to negate `.frozen`.
   *
   *     expect({a: 1}).to.not.be.frozen;
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect({a: 1}, 'nooo why fail??').to.be.frozen;
   *
   * @name frozen
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('frozen', function() {
    var obj = flag(this, 'object');

    // In ES5, if the argument to this method is a primitive, then it will cause a TypeError.
    // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
    // The following provides ES6 behavior for ES5 environments.

    var isFrozen = obj === Object(obj) ? Object.isFrozen(obj) : true;

    this.assert(
      isFrozen
      , 'expected #{this} to be frozen'
      , 'expected #{this} to not be frozen'
    );
  });

  /**
   * ### .finite
   *
   * Asserts that the target is a number, and isn't `NaN` or positive/negative
   * `Infinity`.
   *
   *     expect(1).to.be.finite;
   *
   * Add `.not` earlier in the chain to negate `.finite`. However, it's
   * dangerous to do so. The problem is that it creates uncertain expectations
   * by asserting that the subject either isn't a number, or that it's `NaN`, or
   * that it's positive `Infinity`, or that it's negative `Infinity`. It's often
   * best to identify the exact output that's expected, and then write an
   * assertion that only accepts that exact output.
   *
   * When the target isn't expected to be a number, it's often best to assert
   * that it's the expected type, rather than asserting that it isn't one of
   * many unexpected types.
   *
   *     expect('foo').to.be.a('string'); // Recommended
   *     expect('foo').to.not.be.finite; // Not recommended
   *
   * When the target is expected to be `NaN`, it's often best to assert exactly
   * that.
   *
   *     expect(NaN).to.be.NaN; // Recommended
   *     expect(NaN).to.not.be.finite; // Not recommended
   *
   * When the target is expected to be positive infinity, it's often best to
   * assert exactly that.
   *
   *     expect(Infinity).to.equal(Infinity); // Recommended
   *     expect(Infinity).to.not.be.finite; // Not recommended
   *
   * When the target is expected to be negative infinity, it's often best to
   * assert exactly that.
   *
   *     expect(-Infinity).to.equal(-Infinity); // Recommended
   *     expect(-Infinity).to.not.be.finite; // Not recommended
   *
   * A custom error message can be given as the second argument to `expect`.
   *
   *     expect('foo', 'nooo why fail??').to.be.finite;
   *
   * @name finite
   * @namespace BDD
   * @api public
   */

  Assertion.addProperty('finite', function(msg) {
    var obj = flag(this, 'object');

    this.assert(
        typeof obj === 'number' && isFinite(obj)
      , 'expected #{this} to be a finite number'
      , 'expected #{this} to not be a finite number'
    );
  });
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  chai.expect = function (val, message) {
    return new chai.Assertion(val, message);
  };

  /**
   * ### .fail([message])
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure.
   *
   *     expect.fail();
   *     expect.fail("custom error message");
   *     expect.fail(1, 2);
   *     expect.fail(1, 2, "custom error message");
   *     expect.fail(1, 2, "custom error message", ">");
   *     expect.fail(1, 2, undefined, ">");
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace BDD
   * @api public
   */

  chai.expect.fail = function (actual, expected, message, operator) {
    if (arguments.length < 2) {
        message = actual;
        actual = undefined;
    }

    message = message || 'expect.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
    }, chai.expect.fail);
  };
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  var Assertion = chai.Assertion;

  function loadShould () {
    // explicitly define this method as function as to have it's name to include as `ssfi`
    function shouldGetter() {
      if (this instanceof String
          || this instanceof Number
          || this instanceof Boolean
          || typeof Symbol === 'function' && this instanceof Symbol) {
        return new Assertion(this.valueOf(), null, shouldGetter);
      }
      return new Assertion(this, null, shouldGetter);
    }
    function shouldSetter(value) {
      // See https://github.com/chaijs/chai/issues/86: this makes
      // `whatever.should = someValue` actually set `someValue`, which is
      // especially useful for `global.should = require('chai').should()`.
      //
      // Note that we have to use [[DefineProperty]] instead of [[Put]]
      // since otherwise we would trigger this very setter!
      Object.defineProperty(this, 'should', {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    }
    // modify Object.prototype to have `should`
    Object.defineProperty(Object.prototype, 'should', {
      set: shouldSetter
      , get: shouldGetter
      , configurable: true
    });

    var should = {};

    /**
     * ### .fail([message])
     * ### .fail(actual, expected, [message], [operator])
     *
     * Throw a failure.
     *
     *     should.fail();
     *     should.fail("custom error message");
     *     should.fail(1, 2);
     *     should.fail(1, 2, "custom error message");
     *     should.fail(1, 2, "custom error message", ">");
     *     should.fail(1, 2, undefined, ">");
     *
     *
     * @name fail
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @param {String} operator
     * @namespace BDD
     * @api public
     */

    should.fail = function (actual, expected, message, operator) {
      if (arguments.length < 2) {
          message = actual;
          actual = undefined;
      }

      message = message || 'should.fail()';
      throw new chai.AssertionError(message, {
          actual: actual
        , expected: expected
        , operator: operator
      }, should.fail);
    };

    /**
     * ### .equal(actual, expected, [message])
     *
     * Asserts non-strict equality (`==`) of `actual` and `expected`.
     *
     *     should.equal(3, '3', '== coerces values to strings');
     *
     * @name equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */

    should.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.equal(val2);
    };

    /**
     * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
     *
     * Asserts that `function` will throw an error that is an instance of
     * `constructor`, or alternately that it will throw an error with message
     * matching `regexp`.
     *
     *     should.throw(fn, 'function throws a reference error');
     *     should.throw(fn, /function throws a reference error/);
     *     should.throw(fn, ReferenceError);
     *     should.throw(fn, ReferenceError, 'function throws a reference error');
     *     should.throw(fn, ReferenceError, /function throws a reference error/);
     *
     * @name throw
     * @alias Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */

    should.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.Throw(errt, errs);
    };

    /**
     * ### .exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var foo = 'hi';
     *
     *     should.exist(foo, 'foo exists');
     *
     * @name exist
     * @namespace Should
     * @api public
     */

    should.exist = function (val, msg) {
      new Assertion(val, msg).to.exist;
    }

    // negation
    should.not = {}

    /**
     * ### .not.equal(actual, expected, [message])
     *
     * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
     *
     *     should.not.equal(3, 4, 'these numbers are not equal');
     *
     * @name not.equal
     * @param {Mixed} actual
     * @param {Mixed} expected
     * @param {String} message
     * @namespace Should
     * @api public
     */

    should.not.equal = function (val1, val2, msg) {
      new Assertion(val1, msg).to.not.equal(val2);
    };

    /**
     * ### .throw(function, [constructor/regexp], [message])
     *
     * Asserts that `function` will _not_ throw an error that is an instance of
     * `constructor`, or alternately that it will not throw an error with message
     * matching `regexp`.
     *
     *     should.not.throw(fn, Error, 'function does not throw');
     *
     * @name not.throw
     * @alias not.Throw
     * @param {Function} function
     * @param {ErrorConstructor} constructor
     * @param {RegExp} regexp
     * @param {String} message
     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
     * @namespace Should
     * @api public
     */

    should.not.Throw = function (fn, errt, errs, msg) {
      new Assertion(fn, msg).to.not.Throw(errt, errs);
    };

    /**
     * ### .not.exist
     *
     * Asserts that the target is neither `null` nor `undefined`.
     *
     *     var bar = null;
     *
     *     should.not.exist(bar, 'bar does not exist');
     *
     * @name not.exist
     * @namespace Should
     * @api public
     */

    should.not.exist = function (val, msg) {
      new Assertion(val, msg).to.not.exist;
    }

    should['throw'] = should['Throw'];
    should.not['throw'] = should.not['Throw'];

    return should;
  };

  chai.should = loadShould;
  chai.Should = loadShould;
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  /*!
   * Chai dependencies.
   */

  var Assertion = chai.Assertion
    , flag = util.flag;

  /*!
   * Module export.
   */

  /**
   * ### assert(expression, message)
   *
   * Write your own test expressions.
   *
   *     assert('foo' !== 'bar', 'foo is not bar');
   *     assert(Array.isArray([]), 'empty arrays are arrays');
   *
   * @param {Mixed} expression to test for truthiness
   * @param {String} message to display on error
   * @name assert
   * @namespace Assert
   * @api public
   */

  var assert = chai.assert = function (express, errmsg) {
    var test = new Assertion(null, null, chai.assert, true);
    test.assert(
        express
      , errmsg
      , '[ negation message unavailable ]'
    );
  };

  /**
   * ### .fail([message])
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure. Node.js `assert` module-compatible.
   *
   *     assert.fail();
   *     assert.fail("custom error message");
   *     assert.fail(1, 2);
   *     assert.fail(1, 2, "custom error message");
   *     assert.fail(1, 2, "custom error message", ">");
   *     assert.fail(1, 2, undefined, ">");
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace Assert
   * @api public
   */

  assert.fail = function (actual, expected, message, operator) {
    if (arguments.length < 2) {
        // Comply with Node's fail([message]) interface

        message = actual;
        actual = undefined;
    }

    message = message || 'assert.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
    }, assert.fail);
  };

  /**
   * ### .isOk(object, [message])
   *
   * Asserts that `object` is truthy.
   *
   *     assert.isOk('everything', 'everything is ok');
   *     assert.isOk(false, 'this will fail');
   *
   * @name isOk
   * @alias ok
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isOk = function (val, msg) {
    new Assertion(val, msg, assert.isOk, true).is.ok;
  };

  /**
   * ### .isNotOk(object, [message])
   *
   * Asserts that `object` is falsy.
   *
   *     assert.isNotOk('everything', 'this will fail');
   *     assert.isNotOk(false, 'this will pass');
   *
   * @name isNotOk
   * @alias notOk
   * @param {Mixed} object to test
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotOk = function (val, msg) {
    new Assertion(val, msg, assert.isNotOk, true).is.not.ok;
  };

  /**
   * ### .equal(actual, expected, [message])
   *
   * Asserts non-strict equality (`==`) of `actual` and `expected`.
   *
   *     assert.equal(3, '3', '== coerces values to strings');
   *
   * @name equal
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.equal = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.equal, true);

    test.assert(
        exp == flag(test, 'object')
      , 'expected #{this} to equal #{exp}'
      , 'expected #{this} to not equal #{act}'
      , exp
      , act
      , true
    );
  };

  /**
   * ### .notEqual(actual, expected, [message])
   *
   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
   *
   *     assert.notEqual(3, 4, 'these numbers are not equal');
   *
   * @name notEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notEqual = function (act, exp, msg) {
    var test = new Assertion(act, msg, assert.notEqual, true);

    test.assert(
        exp != flag(test, 'object')
      , 'expected #{this} to not equal #{exp}'
      , 'expected #{this} to equal #{act}'
      , exp
      , act
      , true
    );
  };

  /**
   * ### .strictEqual(actual, expected, [message])
   *
   * Asserts strict equality (`===`) of `actual` and `expected`.
   *
   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
   *
   * @name strictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.strictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.strictEqual, true).to.equal(exp);
  };

  /**
   * ### .notStrictEqual(actual, expected, [message])
   *
   * Asserts strict inequality (`!==`) of `actual` and `expected`.
   *
   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
   *
   * @name notStrictEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notStrictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.notStrictEqual, true).to.not.equal(exp);
  };

  /**
   * ### .deepEqual(actual, expected, [message])
   *
   * Asserts that `actual` is deeply equal to `expected`.
   *
   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
   *
   * @name deepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @alias deepStrictEqual
   * @namespace Assert
   * @api public
   */

  assert.deepEqual = assert.deepStrictEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.deepEqual, true).to.eql(exp);
  };

  /**
   * ### .notDeepEqual(actual, expected, [message])
   *
   * Assert that `actual` is not deeply equal to `expected`.
   *
   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
   *
   * @name notDeepEqual
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepEqual = function (act, exp, msg) {
    new Assertion(act, msg, assert.notDeepEqual, true).to.not.eql(exp);
  };

   /**
   * ### .isAbove(valueToCheck, valueToBeAbove, [message])
   *
   * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`.
   *
   *     assert.isAbove(5, 2, '5 is strictly greater than 2');
   *
   * @name isAbove
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAbove
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAbove = function (val, abv, msg) {
    new Assertion(val, msg, assert.isAbove, true).to.be.above(abv);
  };

   /**
   * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
   *
   * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`.
   *
   *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
   *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
   *
   * @name isAtLeast
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAtLeast
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAtLeast = function (val, atlst, msg) {
    new Assertion(val, msg, assert.isAtLeast, true).to.be.least(atlst);
  };

   /**
   * ### .isBelow(valueToCheck, valueToBeBelow, [message])
   *
   * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`.
   *
   *     assert.isBelow(3, 6, '3 is strictly less than 6');
   *
   * @name isBelow
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeBelow
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isBelow = function (val, blw, msg) {
    new Assertion(val, msg, assert.isBelow, true).to.be.below(blw);
  };

   /**
   * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
   *
   * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`.
   *
   *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
   *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
   *
   * @name isAtMost
   * @param {Mixed} valueToCheck
   * @param {Mixed} valueToBeAtMost
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isAtMost = function (val, atmst, msg) {
    new Assertion(val, msg, assert.isAtMost, true).to.be.most(atmst);
  };

  /**
   * ### .isTrue(value, [message])
   *
   * Asserts that `value` is true.
   *
   *     var teaServed = true;
   *     assert.isTrue(teaServed, 'the tea has been served');
   *
   * @name isTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isTrue = function (val, msg) {
    new Assertion(val, msg, assert.isTrue, true).is['true'];
  };

  /**
   * ### .isNotTrue(value, [message])
   *
   * Asserts that `value` is not true.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotTrue(tea, 'great, time for tea!');
   *
   * @name isNotTrue
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotTrue = function (val, msg) {
    new Assertion(val, msg, assert.isNotTrue, true).to.not.equal(true);
  };

  /**
   * ### .isFalse(value, [message])
   *
   * Asserts that `value` is false.
   *
   *     var teaServed = false;
   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
   *
   * @name isFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFalse = function (val, msg) {
    new Assertion(val, msg, assert.isFalse, true).is['false'];
  };

  /**
   * ### .isNotFalse(value, [message])
   *
   * Asserts that `value` is not false.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotFalse(tea, 'great, time for tea!');
   *
   * @name isNotFalse
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotFalse = function (val, msg) {
    new Assertion(val, msg, assert.isNotFalse, true).to.not.equal(false);
  };

  /**
   * ### .isNull(value, [message])
   *
   * Asserts that `value` is null.
   *
   *     assert.isNull(err, 'there was no error');
   *
   * @name isNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNull = function (val, msg) {
    new Assertion(val, msg, assert.isNull, true).to.equal(null);
  };

  /**
   * ### .isNotNull(value, [message])
   *
   * Asserts that `value` is not null.
   *
   *     var tea = 'tasty chai';
   *     assert.isNotNull(tea, 'great, time for tea!');
   *
   * @name isNotNull
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotNull = function (val, msg) {
    new Assertion(val, msg, assert.isNotNull, true).to.not.equal(null);
  };

  /**
   * ### .isNaN
   *
   * Asserts that value is NaN.
   *
   *     assert.isNaN(NaN, 'NaN is NaN');
   *
   * @name isNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNaN = function (val, msg) {
    new Assertion(val, msg, assert.isNaN, true).to.be.NaN;
  };

  /**
   * ### .isNotNaN
   *
   * Asserts that value is not NaN.
   *
   *     assert.isNotNaN(4, '4 is not NaN');
   *
   * @name isNotNaN
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */
  assert.isNotNaN = function (val, msg) {
    new Assertion(val, msg, assert.isNotNaN, true).not.to.be.NaN;
  };

  /**
   * ### .exists
   *
   * Asserts that the target is neither `null` nor `undefined`.
   *
   *     var foo = 'hi';
   *
   *     assert.exists(foo, 'foo is neither `null` nor `undefined`');
   *
   * @name exists
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.exists = function (val, msg) {
    new Assertion(val, msg, assert.exists, true).to.exist;
  };

  /**
   * ### .notExists
   *
   * Asserts that the target is either `null` or `undefined`.
   *
   *     var bar = null
   *       , baz;
   *
   *     assert.notExists(bar);
   *     assert.notExists(baz, 'baz is either null or undefined');
   *
   * @name notExists
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notExists = function (val, msg) {
    new Assertion(val, msg, assert.notExists, true).to.not.exist;
  };

  /**
   * ### .isUndefined(value, [message])
   *
   * Asserts that `value` is `undefined`.
   *
   *     var tea;
   *     assert.isUndefined(tea, 'no tea defined');
   *
   * @name isUndefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isUndefined = function (val, msg) {
    new Assertion(val, msg, assert.isUndefined, true).to.equal(undefined);
  };

  /**
   * ### .isDefined(value, [message])
   *
   * Asserts that `value` is not `undefined`.
   *
   *     var tea = 'cup of chai';
   *     assert.isDefined(tea, 'tea has been defined');
   *
   * @name isDefined
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isDefined = function (val, msg) {
    new Assertion(val, msg, assert.isDefined, true).to.not.equal(undefined);
  };

  /**
   * ### .isFunction(value, [message])
   *
   * Asserts that `value` is a function.
   *
   *     function serveTea() { return 'cup of tea'; };
   *     assert.isFunction(serveTea, 'great, we can have tea now');
   *
   * @name isFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFunction = function (val, msg) {
    new Assertion(val, msg, assert.isFunction, true).to.be.a('function');
  };

  /**
   * ### .isNotFunction(value, [message])
   *
   * Asserts that `value` is _not_ a function.
   *
   *     var serveTea = [ 'heat', 'pour', 'sip' ];
   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
   *
   * @name isNotFunction
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotFunction = function (val, msg) {
    new Assertion(val, msg, assert.isNotFunction, true).to.not.be.a('function');
  };

  /**
   * ### .isObject(value, [message])
   *
   * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
   * _The assertion does not match subclassed objects._
   *
   *     var selection = { name: 'Chai', serve: 'with spices' };
   *     assert.isObject(selection, 'tea selection is an object');
   *
   * @name isObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isObject = function (val, msg) {
    new Assertion(val, msg, assert.isObject, true).to.be.a('object');
  };

  /**
   * ### .isNotObject(value, [message])
   *
   * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
   *
   *     var selection = 'chai'
   *     assert.isNotObject(selection, 'tea selection is not an object');
   *     assert.isNotObject(null, 'null is not an object');
   *
   * @name isNotObject
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotObject = function (val, msg) {
    new Assertion(val, msg, assert.isNotObject, true).to.not.be.a('object');
  };

  /**
   * ### .isArray(value, [message])
   *
   * Asserts that `value` is an array.
   *
   *     var menu = [ 'green', 'chai', 'oolong' ];
   *     assert.isArray(menu, 'what kind of tea do we want?');
   *
   * @name isArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isArray = function (val, msg) {
    new Assertion(val, msg, assert.isArray, true).to.be.an('array');
  };

  /**
   * ### .isNotArray(value, [message])
   *
   * Asserts that `value` is _not_ an array.
   *
   *     var menu = 'green|chai|oolong';
   *     assert.isNotArray(menu, 'what kind of tea do we want?');
   *
   * @name isNotArray
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotArray = function (val, msg) {
    new Assertion(val, msg, assert.isNotArray, true).to.not.be.an('array');
  };

  /**
   * ### .isString(value, [message])
   *
   * Asserts that `value` is a string.
   *
   *     var teaOrder = 'chai';
   *     assert.isString(teaOrder, 'order placed');
   *
   * @name isString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isString = function (val, msg) {
    new Assertion(val, msg, assert.isString, true).to.be.a('string');
  };

  /**
   * ### .isNotString(value, [message])
   *
   * Asserts that `value` is _not_ a string.
   *
   *     var teaOrder = 4;
   *     assert.isNotString(teaOrder, 'order placed');
   *
   * @name isNotString
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotString = function (val, msg) {
    new Assertion(val, msg, assert.isNotString, true).to.not.be.a('string');
  };

  /**
   * ### .isNumber(value, [message])
   *
   * Asserts that `value` is a number.
   *
   *     var cups = 2;
   *     assert.isNumber(cups, 'how many cups');
   *
   * @name isNumber
   * @param {Number} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNumber = function (val, msg) {
    new Assertion(val, msg, assert.isNumber, true).to.be.a('number');
  };

  /**
   * ### .isNotNumber(value, [message])
   *
   * Asserts that `value` is _not_ a number.
   *
   *     var cups = '2 cups please';
   *     assert.isNotNumber(cups, 'how many cups');
   *
   * @name isNotNumber
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotNumber = function (val, msg) {
    new Assertion(val, msg, assert.isNotNumber, true).to.not.be.a('number');
  };

   /**
   * ### .isFinite(value, [message])
   *
   * Asserts that `value` is a finite number. Unlike `.isNumber`, this will fail for `NaN` and `Infinity`.
   *
   *     var cups = 2;
   *     assert.isFinite(cups, 'how many cups');
   *
   *     assert.isFinite(NaN); // throws
   *
   * @name isFinite
   * @param {Number} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isFinite = function (val, msg) {
    new Assertion(val, msg, assert.isFinite, true).to.be.finite;
  };

  /**
   * ### .isBoolean(value, [message])
   *
   * Asserts that `value` is a boolean.
   *
   *     var teaReady = true
   *       , teaServed = false;
   *
   *     assert.isBoolean(teaReady, 'is the tea ready');
   *     assert.isBoolean(teaServed, 'has tea been served');
   *
   * @name isBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isBoolean = function (val, msg) {
    new Assertion(val, msg, assert.isBoolean, true).to.be.a('boolean');
  };

  /**
   * ### .isNotBoolean(value, [message])
   *
   * Asserts that `value` is _not_ a boolean.
   *
   *     var teaReady = 'yep'
   *       , teaServed = 'nope';
   *
   *     assert.isNotBoolean(teaReady, 'is the tea ready');
   *     assert.isNotBoolean(teaServed, 'has tea been served');
   *
   * @name isNotBoolean
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.isNotBoolean = function (val, msg) {
    new Assertion(val, msg, assert.isNotBoolean, true).to.not.be.a('boolean');
  };

  /**
   * ### .typeOf(value, name, [message])
   *
   * Asserts that `value`'s type is `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
   *     assert.typeOf('tea', 'string', 'we have a string');
   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
   *     assert.typeOf(null, 'null', 'we have a null');
   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
   *
   * @name typeOf
   * @param {Mixed} value
   * @param {String} name
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.typeOf = function (val, type, msg) {
    new Assertion(val, msg, assert.typeOf, true).to.be.a(type);
  };

  /**
   * ### .notTypeOf(value, name, [message])
   *
   * Asserts that `value`'s type is _not_ `name`, as determined by
   * `Object.prototype.toString`.
   *
   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
   *
   * @name notTypeOf
   * @param {Mixed} value
   * @param {String} typeof name
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notTypeOf = function (val, type, msg) {
    new Assertion(val, msg, assert.notTypeOf, true).to.not.be.a(type);
  };

  /**
   * ### .instanceOf(object, constructor, [message])
   *
   * Asserts that `value` is an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new Tea('chai');
   *
   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
   *
   * @name instanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.instanceOf = function (val, type, msg) {
    new Assertion(val, msg, assert.instanceOf, true).to.be.instanceOf(type);
  };

  /**
   * ### .notInstanceOf(object, constructor, [message])
   *
   * Asserts `value` is not an instance of `constructor`.
   *
   *     var Tea = function (name) { this.name = name; }
   *       , chai = new String('chai');
   *
   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
   *
   * @name notInstanceOf
   * @param {Object} object
   * @param {Constructor} constructor
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notInstanceOf = function (val, type, msg) {
    new Assertion(val, msg, assert.notInstanceOf, true)
      .to.not.be.instanceOf(type);
  };

  /**
   * ### .include(haystack, needle, [message])
   *
   * Asserts that `haystack` includes `needle`. Can be used to assert the
   * inclusion of a value in an array, a substring in a string, or a subset of
   * properties in an object.
   *
   *     assert.include([1,2,3], 2, 'array contains value');
   *     assert.include('foobar', 'foo', 'string contains substring');
   *     assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property');
   *
   * Strict equality (===) is used. When asserting the inclusion of a value in
   * an array, the array is searched for an element that's strictly equal to the
   * given value. When asserting a subset of properties in an object, the object
   * is searched for the given property keys, checking that each one is present
   * and strictly equal to the given property value. For instance:
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.include([obj1, obj2], obj1);
   *     assert.include({foo: obj1, bar: obj2}, {foo: obj1});
   *     assert.include({foo: obj1, bar: obj2}, {foo: obj1, bar: obj2});
   *
   * @name include
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.include = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.include, true).include(inc);
  };

  /**
   * ### .notInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` does not include `needle`. Can be used to assert
   * the absence of a value in an array, a substring in a string, or a subset of
   * properties in an object.
   *
   *     assert.notInclude([1,2,3], 4, "array doesn't contain value");
   *     assert.notInclude('foobar', 'baz', "string doesn't contain substring");
   *     assert.notInclude({ foo: 'bar', hello: 'universe' }, { foo: 'baz' }, 'object doesn't contain property');
   *
   * Strict equality (===) is used. When asserting the absence of a value in an
   * array, the array is searched to confirm the absence of an element that's
   * strictly equal to the given value. When asserting a subset of properties in
   * an object, the object is searched to confirm that at least one of the given
   * property keys is either not present or not strictly equal to the given
   * property value. For instance:
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.notInclude([obj1, obj2], {a: 1});
   *     assert.notInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
   *     assert.notInclude({foo: obj1, bar: obj2}, {foo: obj1, bar: {b: 2}});
   *
   * @name notInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notInclude, true).not.include(inc);
  };

  /**
   * ### .deepInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` includes `needle`. Can be used to assert the
   * inclusion of a value in an array or a subset of properties in an object.
   * Deep equality is used.
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.deepInclude([obj1, obj2], {a: 1});
   *     assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}});
   *     assert.deepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 2}});
   *
   * @name deepInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.deepInclude, true).deep.include(inc);
  };

  /**
   * ### .notDeepInclude(haystack, needle, [message])
   *
   * Asserts that `haystack` does not include `needle`. Can be used to assert
   * the absence of a value in an array or a subset of properties in an object.
   * Deep equality is used.
   *
   *     var obj1 = {a: 1}
   *       , obj2 = {b: 2};
   *     assert.notDeepInclude([obj1, obj2], {a: 9});
   *     assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 9}});
   *     assert.notDeepInclude({foo: obj1, bar: obj2}, {foo: {a: 1}, bar: {b: 9}});
   *
   * @name notDeepInclude
   * @param {Array|String} haystack
   * @param {Mixed} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepInclude, true).not.deep.include(inc);
  };

  /**
   * ### .nestedInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an
   * object.
   * Enables the use of dot- and bracket-notation for referencing nested
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   *
   *     assert.nestedInclude({'.a': {'b': 'x'}}, {'\\.a.[b]': 'x'});
   *     assert.nestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'x'});
   *
   * @name nestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.nestedInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.nestedInclude, true).nested.include(inc);
  };

  /**
   * ### .notNestedInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' does not include 'needle'.
   * Can be used to assert the absence of a subset of properties in an
   * object.
   * Enables the use of dot- and bracket-notation for referencing nested
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   *
   *     assert.notNestedInclude({'.a': {'b': 'x'}}, {'\\.a.b': 'y'});
   *     assert.notNestedInclude({'a': {'[b]': 'x'}}, {'a.\\[b\\]': 'y'});
   *
   * @name notNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notNestedInclude = function (exp, inc, msg) {
    new Assertion(exp, msg, assert.notNestedInclude, true)
      .not.nested.include(inc);
  };

  /**
   * ### .deepNestedInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an
   * object while checking for deep equality.
   * Enables the use of dot- and bracket-notation for referencing nested
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   *
   *     assert.deepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {x: 1}});
   *     assert.deepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {x: 1}});
   *
   * @name deepNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepNestedInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.deepNestedInclude, true)
      .deep.nested.include(inc);
  };

  /**
   * ### .notDeepNestedInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' does not include 'needle'.
   * Can be used to assert the absence of a subset of properties in an
   * object while checking for deep equality.
   * Enables the use of dot- and bracket-notation for referencing nested
   * properties.
   * '[]' and '.' in property names can be escaped using double backslashes.
   *
   *     assert.notDeepNestedInclude({a: {b: [{x: 1}]}}, {'a.b[0]': {y: 1}})
   *     assert.notDeepNestedInclude({'.a': {'[b]': {x: 1}}}, {'\\.a.\\[b\\]': {y: 2}});
   *
   * @name notDeepNestedInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepNestedInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepNestedInclude, true)
      .not.deep.nested.include(inc);
  };

  /**
   * ### .ownInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an
   * object while ignoring inherited properties.
   *
   *     assert.ownInclude({ a: 1 }, { a: 1 });
   *
   * @name ownInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.ownInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.ownInclude, true).own.include(inc);
  };

  /**
   * ### .notOwnInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the absence of a subset of properties in an
   * object while ignoring inherited properties.
   *
   *     Object.prototype.b = 2;
   *
   *     assert.notOwnInclude({ a: 1 }, { b: 2 });
   *
   * @name notOwnInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notOwnInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.notOwnInclude, true).not.own.include(inc);
  };

  /**
   * ### .deepOwnInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the inclusion of a subset of properties in an
   * object while ignoring inherited properties and checking for deep equality.
   *
   *      assert.deepOwnInclude({a: {b: 2}}, {a: {b: 2}});
   *
   * @name deepOwnInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepOwnInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.deepOwnInclude, true)
      .deep.own.include(inc);
  };

   /**
   * ### .notDeepOwnInclude(haystack, needle, [message])
   *
   * Asserts that 'haystack' includes 'needle'.
   * Can be used to assert the absence of a subset of properties in an
   * object while ignoring inherited properties and checking for deep equality.
   *
   *      assert.notDeepOwnInclude({a: {b: 2}}, {a: {c: 3}});
   *
   * @name notDeepOwnInclude
   * @param {Object} haystack
   * @param {Object} needle
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepOwnInclude = function(exp, inc, msg) {
    new Assertion(exp, msg, assert.notDeepOwnInclude, true)
      .not.deep.own.include(inc);
  };

  /**
   * ### .match(value, regexp, [message])
   *
   * Asserts that `value` matches the regular expression `regexp`.
   *
   *     assert.match('foobar', /^foo/, 'regexp matches');
   *
   * @name match
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.match = function (exp, re, msg) {
    new Assertion(exp, msg, assert.match, true).to.match(re);
  };

  /**
   * ### .notMatch(value, regexp, [message])
   *
   * Asserts that `value` does not match the regular expression `regexp`.
   *
   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
   *
   * @name notMatch
   * @param {Mixed} value
   * @param {RegExp} regexp
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notMatch = function (exp, re, msg) {
    new Assertion(exp, msg, assert.notMatch, true).to.not.match(re);
  };

  /**
   * ### .property(object, property, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property`.
   *
   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
   *     assert.property({ tea: { green: 'matcha' }}, 'toString');
   *
   * @name property
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.property = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.property, true).to.have.property(prop);
  };

  /**
   * ### .notProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property`.
   *
   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
   *
   * @name notProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notProperty, true)
      .to.not.have.property(prop);
  };

  /**
   * ### .propertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property` with a value given by `value`. Uses a strict equality check
   * (===).
   *
   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
   *
   * @name propertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.propertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.propertyVal, true)
      .to.have.property(prop, val);
  };

  /**
   * ### .notPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property` with value given by `value`. Uses a strict equality check
   * (===).
   *
   *     assert.notPropertyVal({ tea: 'is good' }, 'tea', 'is bad');
   *     assert.notPropertyVal({ tea: 'is good' }, 'coffee', 'is good');
   *
   * @name notPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notPropertyVal, true)
      .to.not.have.property(prop, val);
  };

  /**
   * ### .deepPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property` with a value given by `value`. Uses a deep equality check.
   *
   *     assert.deepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
   *
   * @name deepPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.deepPropertyVal, true)
      .to.have.deep.property(prop, val);
  };

  /**
   * ### .notDeepPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct or inherited property named
   * by `property` with value given by `value`. Uses a deep equality check.
   *
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
   *     assert.notDeepPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
   *
   * @name notDeepPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notDeepPropertyVal, true)
      .to.not.have.deep.property(prop, val);
  };

  /**
   * ### .ownProperty(object, property, [message])
   *
   * Asserts that `object` has a direct property named by `property`. Inherited
   * properties aren't checked.
   *
   *     assert.ownProperty({ tea: { green: 'matcha' }}, 'tea');
   *
   * @name ownProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.ownProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.ownProperty, true)
      .to.have.own.property(prop);
  };

  /**
   * ### .notOwnProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by
   * `property`. Inherited properties aren't checked.
   *
   *     assert.notOwnProperty({ tea: { green: 'matcha' }}, 'coffee');
   *     assert.notOwnProperty({}, 'toString');
   *
   * @name notOwnProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @api public
   */

  assert.notOwnProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notOwnProperty, true)
      .to.not.have.own.property(prop);
  };

  /**
   * ### .ownPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct property named by `property` and a value
   * equal to the provided `value`. Uses a strict equality check (===).
   * Inherited properties aren't checked.
   *
   *     assert.ownPropertyVal({ coffee: 'is good'}, 'coffee', 'is good');
   *
   * @name ownPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.ownPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.ownPropertyVal, true)
      .to.have.own.property(prop, value);
  };

  /**
   * ### .notOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by `property`
   * with a value equal to the provided `value`. Uses a strict equality check
   * (===). Inherited properties aren't checked.
   *
   *     assert.notOwnPropertyVal({ tea: 'is better'}, 'tea', 'is worse');
   *     assert.notOwnPropertyVal({}, 'toString', Object.prototype.toString);
   *
   * @name notOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.notOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.notOwnPropertyVal, true)
      .to.not.have.own.property(prop, value);
  };

  /**
   * ### .deepOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a direct property named by `property` and a value
   * equal to the provided `value`. Uses a deep equality check. Inherited
   * properties aren't checked.
   *
   *     assert.deepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'matcha' });
   *
   * @name deepOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.deepOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.deepOwnPropertyVal, true)
      .to.have.deep.own.property(prop, value);
  };

  /**
   * ### .notDeepOwnPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a direct property named by `property`
   * with a value equal to the provided `value`. Uses a deep equality check.
   * Inherited properties aren't checked.
   *
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { black: 'matcha' });
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'tea', { green: 'oolong' });
   *     assert.notDeepOwnPropertyVal({ tea: { green: 'matcha' } }, 'coffee', { green: 'matcha' });
   *     assert.notDeepOwnPropertyVal({}, 'toString', Object.prototype.toString);
   *
   * @name notDeepOwnPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @api public
   */

  assert.notDeepOwnPropertyVal = function (obj, prop, value, msg) {
    new Assertion(obj, msg, assert.notDeepOwnPropertyVal, true)
      .to.not.have.deep.own.property(prop, value);
  };

  /**
   * ### .nestedProperty(object, property, [message])
   *
   * Asserts that `object` has a direct or inherited property named by
   * `property`, which can be a string using dot- and bracket-notation for
   * nested reference.
   *
   *     assert.nestedProperty({ tea: { green: 'matcha' }}, 'tea.green');
   *
   * @name nestedProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.nestedProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.nestedProperty, true)
      .to.have.nested.property(prop);
  };

  /**
   * ### .notNestedProperty(object, property, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property`, which
   * can be a string using dot- and bracket-notation for nested reference. The
   * property cannot exist on the object nor anywhere in its prototype chain.
   *
   *     assert.notNestedProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
   *
   * @name notNestedProperty
   * @param {Object} object
   * @param {String} property
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notNestedProperty = function (obj, prop, msg) {
    new Assertion(obj, msg, assert.notNestedProperty, true)
      .to.not.have.nested.property(prop);
  };

  /**
   * ### .nestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with value given
   * by `value`. `property` can use dot- and bracket-notation for nested
   * reference. Uses a strict equality check (===).
   *
   *     assert.nestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
   *
   * @name nestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.nestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.nestedPropertyVal, true)
      .to.have.nested.property(prop, val);
  };

  /**
   * ### .notNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property` with
   * value given by `value`. `property` can use dot- and bracket-notation for
   * nested reference. Uses a strict equality check (===).
   *
   *     assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
   *     assert.notNestedPropertyVal({ tea: { green: 'matcha' }}, 'coffee.green', 'matcha');
   *
   * @name notNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notNestedPropertyVal, true)
      .to.not.have.nested.property(prop, val);
  };

  /**
   * ### .deepNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` has a property named by `property` with a value given
   * by `value`. `property` can use dot- and bracket-notation for nested
   * reference. Uses a deep equality check.
   *
   *     assert.deepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yum' });
   *
   * @name deepNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.deepNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.deepNestedPropertyVal, true)
      .to.have.deep.nested.property(prop, val);
  };

  /**
   * ### .notDeepNestedPropertyVal(object, property, value, [message])
   *
   * Asserts that `object` does _not_ have a property named by `property` with
   * value given by `value`. `property` can use dot- and bracket-notation for
   * nested reference. Uses a deep equality check.
   *
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { oolong: 'yum' });
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.green', { matcha: 'yuck' });
   *     assert.notDeepNestedPropertyVal({ tea: { green: { matcha: 'yum' } } }, 'tea.black', { matcha: 'yum' });
   *
   * @name notDeepNestedPropertyVal
   * @param {Object} object
   * @param {String} property
   * @param {Mixed} value
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notDeepNestedPropertyVal = function (obj, prop, val, msg) {
    new Assertion(obj, msg, assert.notDeepNestedPropertyVal, true)
      .to.not.have.deep.nested.property(prop, val);
  }

  /**
   * ### .lengthOf(object, length, [message])
   *
   * Asserts that `object` has a `length` or `size` with the expected value.
   *
   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
   *     assert.lengthOf('foobar', 6, 'string has length of 6');
   *     assert.lengthOf(new Set([1,2,3]), 3, 'set has size of 3');
   *     assert.lengthOf(new Map([['a',1],['b',2],['c',3]]), 3, 'map has size of 3');
   *
   * @name lengthOf
   * @param {Mixed} object
   * @param {Number} length
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.lengthOf = function (exp, len, msg) {
    new Assertion(exp, msg, assert.lengthOf, true).to.have.lengthOf(len);
  };

  /**
   * ### .hasAnyKeys(object, [keys], [message])
   *
   * Asserts that `object` has at least one of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'iDontExist', 'baz']);
   *     assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, iDontExist: 99, baz: 1337});
   *     assert.hasAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.hasAnyKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{foo: 'bar'}, 'anotherKey']);
   *
   * @name hasAnyKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAnyKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAnyKeys, true).to.have.any.keys(keys);
  }

  /**
   * ### .hasAllKeys(object, [keys], [message])
   *
   * Asserts that `object` has all and only all of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
   *     assert.hasAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337]);
   *     assert.hasAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.hasAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
   *
   * @name hasAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAllKeys, true).to.have.all.keys(keys);
  }

  /**
   * ### .containsAllKeys(object, [keys], [message])
   *
   * Asserts that `object` has all of the `keys` provided but may have more keys not listed.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'baz']);
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'bar', 'baz']);
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, baz: 1337});
   *     assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, bar: 99, baz: 1337});
   *     assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}]);
   *     assert.containsAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
   *     assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}]);
   *     assert.containsAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{foo: 'bar'}, 'anotherKey']);
   *
   * @name containsAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.containsAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.containsAllKeys, true)
      .to.contain.all.keys(keys);
  }

  /**
   * ### .doesNotHaveAnyKeys(object, [keys], [message])
   *
   * Asserts that `object` has none of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
   *     assert.doesNotHaveAnyKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
   *     assert.doesNotHaveAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
   *     assert.doesNotHaveAnyKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
   *
   * @name doesNotHaveAnyKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAnyKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAnyKeys, true)
      .to.not.have.any.keys(keys);
  }

  /**
   * ### .doesNotHaveAllKeys(object, [keys], [message])
   *
   * Asserts that `object` does not have at least one of the `keys` provided.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, ['one', 'two', 'example']);
   *     assert.doesNotHaveAllKeys({foo: 1, bar: 2, baz: 3}, {one: 1, two: 2, example: 'foo'});
   *     assert.doesNotHaveAllKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{one: 'two'}, 'example']);
   *     assert.doesNotHaveAllKeys(new Set([{foo: 'bar'}, 'anotherKey'], [{one: 'two'}, 'example']);
   *
   * @name doesNotHaveAllKeys
   * @param {Mixed} object
   * @param {String[]} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAllKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAllKeys, true)
      .to.not.have.all.keys(keys);
  }

  /**
   * ### .hasAnyDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` has at least one of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), [{one: 'one'}, {two: 'two'}]);
   *     assert.hasAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {three: 'three'}]);
   *     assert.hasAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
   *
   * @name doesNotHaveAllKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAnyDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAnyDeepKeys, true)
      .to.have.any.deep.keys(keys);
  }

 /**
   * ### .hasAllDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` has all and only all of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne']]), {one: 'one'});
   *     assert.hasAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
   *     assert.hasAllDeepKeys(new Set([{one: 'one'}]), {one: 'one'});
   *     assert.hasAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
   *
   * @name hasAllDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.hasAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.hasAllDeepKeys, true)
      .to.have.all.deep.keys(keys);
  }

 /**
   * ### .containsAllDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` contains all of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {one: 'one'});
   *     assert.containsAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{one: 'one'}, {two: 'two'}]);
   *     assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {one: 'one'});
   *     assert.containsAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {two: 'two'}]);
   *
   * @name containsAllDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.containsAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.containsAllDeepKeys, true)
      .to.contain.all.deep.keys(keys);
  }

 /**
   * ### .doesNotHaveAnyDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` has none of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
   *     assert.doesNotHaveAnyDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
   *     assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
   *     assert.doesNotHaveAnyDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{twenty: 'twenty'}, {fifty: 'fifty'}]);
   *
   * @name doesNotHaveAnyDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAnyDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAnyDeepKeys, true)
      .to.not.have.any.deep.keys(keys);
  }

 /**
   * ### .doesNotHaveAllDeepKeys(object, [keys], [message])
   *
   * Asserts that `object` does not have at least one of the `keys` provided.
   * Since Sets and Maps can have objects as keys you can use this assertion to perform
   * a deep comparison.
   * You can also provide a single object instead of a `keys` array and its keys
   * will be used as the expected set of keys.
   *
   *     assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [1, 2]]), {thisDoesNot: 'exist'});
   *     assert.doesNotHaveAllDeepKeys(new Map([[{one: 'one'}, 'valueOne'], [{two: 'two'}, 'valueTwo']]), [{twenty: 'twenty'}, {one: 'one'}]);
   *     assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), {twenty: 'twenty'});
   *     assert.doesNotHaveAllDeepKeys(new Set([{one: 'one'}, {two: 'two'}]), [{one: 'one'}, {fifty: 'fifty'}]);
   *
   * @name doesNotHaveAllDeepKeys
   * @param {Mixed} object
   * @param {Array|Object} keys
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.doesNotHaveAllDeepKeys = function (obj, keys, msg) {
    new Assertion(obj, msg, assert.doesNotHaveAllDeepKeys, true)
      .to.not.have.all.deep.keys(keys);
  }

 /**
   * ### .throws(fn, [errorLike/string/regexp], [string/regexp], [message])
   *
   * If `errorLike` is an `Error` constructor, asserts that `fn` will throw an error that is an
   * instance of `errorLike`.
   * If `errorLike` is an `Error` instance, asserts that the error thrown is the same
   * instance as `errorLike`.
   * If `errMsgMatcher` is provided, it also asserts that the error thrown will have a
   * message matching `errMsgMatcher`.
   *
   *     assert.throws(fn, 'Error thrown must have this msg');
   *     assert.throws(fn, /Error thrown must have a msg that matches this/);
   *     assert.throws(fn, ReferenceError);
   *     assert.throws(fn, errorInstance);
   *     assert.throws(fn, ReferenceError, 'Error thrown must be a ReferenceError and have this msg');
   *     assert.throws(fn, errorInstance, 'Error thrown must be the same errorInstance and have this msg');
   *     assert.throws(fn, ReferenceError, /Error thrown must be a ReferenceError and match this/);
   *     assert.throws(fn, errorInstance, /Error thrown must be the same errorInstance and match this/);
   *
   * @name throws
   * @alias throw
   * @alias Throw
   * @param {Function} fn
   * @param {ErrorConstructor|Error} errorLike
   * @param {RegExp|String} errMsgMatcher
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Assert
   * @api public
   */

  assert.throws = function (fn, errorLike, errMsgMatcher, msg) {
    if ('string' === typeof errorLike || errorLike instanceof RegExp) {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    var assertErr = new Assertion(fn, msg, assert.throws, true)
      .to.throw(errorLike, errMsgMatcher);
    return flag(assertErr, 'object');
  };

  /**
   * ### .doesNotThrow(fn, [errorLike/string/regexp], [string/regexp], [message])
   *
   * If `errorLike` is an `Error` constructor, asserts that `fn` will _not_ throw an error that is an
   * instance of `errorLike`.
   * If `errorLike` is an `Error` instance, asserts that the error thrown is _not_ the same
   * instance as `errorLike`.
   * If `errMsgMatcher` is provided, it also asserts that the error thrown will _not_ have a
   * message matching `errMsgMatcher`.
   *
   *     assert.doesNotThrow(fn, 'Any Error thrown must not have this message');
   *     assert.doesNotThrow(fn, /Any Error thrown must not match this/);
   *     assert.doesNotThrow(fn, Error);
   *     assert.doesNotThrow(fn, errorInstance);
   *     assert.doesNotThrow(fn, Error, 'Error must not have this message');
   *     assert.doesNotThrow(fn, errorInstance, 'Error must not have this message');
   *     assert.doesNotThrow(fn, Error, /Error must not match this/);
   *     assert.doesNotThrow(fn, errorInstance, /Error must not match this/);
   *
   * @name doesNotThrow
   * @param {Function} fn
   * @param {ErrorConstructor} errorLike
   * @param {RegExp|String} errMsgMatcher
   * @param {String} message
   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
   * @namespace Assert
   * @api public
   */

  assert.doesNotThrow = function (fn, errorLike, errMsgMatcher, msg) {
    if ('string' === typeof errorLike || errorLike instanceof RegExp) {
      errMsgMatcher = errorLike;
      errorLike = null;
    }

    new Assertion(fn, msg, assert.doesNotThrow, true)
      .to.not.throw(errorLike, errMsgMatcher);
  };

  /**
   * ### .operator(val1, operator, val2, [message])
   *
   * Compares two values using `operator`.
   *
   *     assert.operator(1, '<', 2, 'everything is ok');
   *     assert.operator(1, '>', 2, 'this will fail');
   *
   * @name operator
   * @param {Mixed} val1
   * @param {String} operator
   * @param {Mixed} val2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.operator = function (val, operator, val2, msg) {
    var ok;
    switch(operator) {
      case '==':
        ok = val == val2;
        break;
      case '===':
        ok = val === val2;
        break;
      case '>':
        ok = val > val2;
        break;
      case '>=':
        ok = val >= val2;
        break;
      case '<':
        ok = val < val2;
        break;
      case '<=':
        ok = val <= val2;
        break;
      case '!=':
        ok = val != val2;
        break;
      case '!==':
        ok = val !== val2;
        break;
      default:
        msg = msg ? msg + ': ' : msg;
        throw new chai.AssertionError(
          msg + 'Invalid operator "' + operator + '"',
          undefined,
          assert.operator
        );
    }
    var test = new Assertion(ok, msg, assert.operator, true);
    test.assert(
        true === flag(test, 'object')
      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
  };

  /**
   * ### .closeTo(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
   *
   * @name closeTo
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.closeTo = function (act, exp, delta, msg) {
    new Assertion(act, msg, assert.closeTo, true).to.be.closeTo(exp, delta);
  };

  /**
   * ### .approximately(actual, expected, delta, [message])
   *
   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
   *
   *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
   *
   * @name approximately
   * @param {Number} actual
   * @param {Number} expected
   * @param {Number} delta
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.approximately = function (act, exp, delta, msg) {
    new Assertion(act, msg, assert.approximately, true)
      .to.be.approximately(exp, delta);
  };

  /**
   * ### .sameMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in any order. Uses a
   * strict equality check (===).
   *
   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
   *
   * @name sameMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameMembers, true)
      .to.have.same.members(set2);
  }

  /**
   * ### .notSameMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in any order.
   * Uses a strict equality check (===).
   *
   *     assert.notSameMembers([ 1, 2, 3 ], [ 5, 1, 3 ], 'not same members');
   *
   * @name notSameMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameMembers, true)
      .to.not.have.same.members(set2);
  }

  /**
   * ### .sameDeepMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in any order. Uses a
   * deep equality check.
   *
   *     assert.sameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { c: 3 }], 'same deep members');
   *
   * @name sameDeepMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameDeepMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameDeepMembers, true)
      .to.have.same.deep.members(set2);
  }

  /**
   * ### .notSameDeepMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in any order.
   * Uses a deep equality check.
   *
   *     assert.notSameDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [{ b: 2 }, { a: 1 }, { f: 5 }], 'not same deep members');
   *
   * @name notSameDeepMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameDeepMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameDeepMembers, true)
      .to.not.have.same.deep.members(set2);
  }

  /**
   * ### .sameOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in the same order.
   * Uses a strict equality check (===).
   *
   *     assert.sameOrderedMembers([ 1, 2, 3 ], [ 1, 2, 3 ], 'same ordered members');
   *
   * @name sameOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameOrderedMembers, true)
      .to.have.same.ordered.members(set2);
  }

  /**
   * ### .notSameOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in the same
   * order. Uses a strict equality check (===).
   *
   *     assert.notSameOrderedMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'not same ordered members');
   *
   * @name notSameOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameOrderedMembers, true)
      .to.not.have.same.ordered.members(set2);
  }

  /**
   * ### .sameDeepOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` have the same members in the same order.
   * Uses a deep equality check.
   *
   * assert.sameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { c: 3 } ], 'same deep ordered members');
   *
   * @name sameDeepOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.sameDeepOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.sameDeepOrderedMembers, true)
      .to.have.same.deep.ordered.members(set2);
  }

  /**
   * ### .notSameDeepOrderedMembers(set1, set2, [message])
   *
   * Asserts that `set1` and `set2` don't have the same members in the same
   * order. Uses a deep equality check.
   *
   * assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 }, { z: 5 } ], 'not same deep ordered members');
   * assert.notSameDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { c: 3 } ], 'not same deep ordered members');
   *
   * @name notSameDeepOrderedMembers
   * @param {Array} set1
   * @param {Array} set2
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notSameDeepOrderedMembers = function (set1, set2, msg) {
    new Assertion(set1, msg, assert.notSameDeepOrderedMembers, true)
      .to.not.have.same.deep.ordered.members(set2);
  }

  /**
   * ### .includeMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in any order. Uses a
   * strict equality check (===). Duplicates are ignored.
   *
   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1, 2 ], 'include members');
   *
   * @name includeMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeMembers, true)
      .to.include.members(subset);
  }

  /**
   * ### .notIncludeMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in any order. Uses a
   * strict equality check (===). Duplicates are ignored.
   *
   *     assert.notIncludeMembers([ 1, 2, 3 ], [ 5, 1 ], 'not include members');
   *
   * @name notIncludeMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeMembers, true)
      .to.not.include.members(subset);
  }

  /**
   * ### .includeDeepMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in any order. Uses a deep
   * equality check. Duplicates are ignored.
   *
   *     assert.includeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 }, { b: 2 } ], 'include deep members');
   *
   * @name includeDeepMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeDeepMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeDeepMembers, true)
      .to.include.deep.members(subset);
  }

  /**
   * ### .notIncludeDeepMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in any order. Uses a
   * deep equality check. Duplicates are ignored.
   *
   *     assert.notIncludeDeepMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { f: 5 } ], 'not include deep members');
   *
   * @name notIncludeDeepMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeDeepMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeDeepMembers, true)
      .to.not.include.deep.members(subset);
  }

  /**
   * ### .includeOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a strict equality
   * check (===).
   *
   *     assert.includeOrderedMembers([ 1, 2, 3 ], [ 1, 2 ], 'include ordered members');
   *
   * @name includeOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeOrderedMembers, true)
      .to.include.ordered.members(subset);
  }

  /**
   * ### .notIncludeOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a strict equality
   * check (===).
   *
   *     assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 1 ], 'not include ordered members');
   *     assert.notIncludeOrderedMembers([ 1, 2, 3 ], [ 2, 3 ], 'not include ordered members');
   *
   * @name notIncludeOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeOrderedMembers, true)
      .to.not.include.ordered.members(subset);
  }

  /**
   * ### .includeDeepOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` is included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a deep equality
   * check.
   *
   *     assert.includeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { b: 2 } ], 'include deep ordered members');
   *
   * @name includeDeepOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.includeDeepOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.includeDeepOrderedMembers, true)
      .to.include.deep.ordered.members(subset);
  }

  /**
   * ### .notIncludeDeepOrderedMembers(superset, subset, [message])
   *
   * Asserts that `subset` isn't included in `superset` in the same order
   * beginning with the first element in `superset`. Uses a deep equality
   * check.
   *
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { a: 1 }, { f: 5 } ], 'not include deep ordered members');
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { a: 1 } ], 'not include deep ordered members');
   *     assert.notIncludeDeepOrderedMembers([ { a: 1 }, { b: 2 }, { c: 3 } ], [ { b: 2 }, { c: 3 } ], 'not include deep ordered members');
   *
   * @name notIncludeDeepOrderedMembers
   * @param {Array} superset
   * @param {Array} subset
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.notIncludeDeepOrderedMembers = function (superset, subset, msg) {
    new Assertion(superset, msg, assert.notIncludeDeepOrderedMembers, true)
      .to.not.include.deep.ordered.members(subset);
  }

  /**
   * ### .oneOf(inList, list, [message])
   *
   * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
   *
   *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
   *
   * @name oneOf
   * @param {*} inList
   * @param {Array<*>} list
   * @param {String} message
   * @namespace Assert
   * @api public
   */

  assert.oneOf = function (inList, list, msg) {
    new Assertion(inList, msg, assert.oneOf, true).to.be.oneOf(list);
  }

  /**
   * ### .changes(function, object, property, [message])
   *
   * Asserts that a function changes the value of a property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 22 };
   *     assert.changes(fn, obj, 'val');
   *
   * @name changes
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changes = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changes, true).to.change(obj, prop);
  }

   /**
   * ### .changesBy(function, object, property, delta, [message])
   *
   * Asserts that a function changes the value of a property by an amount (delta).
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 2 };
   *     assert.changesBy(fn, obj, 'val', 2);
   *
   * @name changesBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changesBy, true)
      .to.change(obj, prop).by(delta);
  }

   /**
   * ### .doesNotChange(function, object, property, [message])
   *
   * Asserts that a function does not change the value of a property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { console.log('foo'); };
   *     assert.doesNotChange(fn, obj, 'val');
   *
   * @name doesNotChange
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotChange = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotChange, true)
      .to.not.change(obj, prop);
  }

  /**
   * ### .changesButNotBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not change the value of a property or of a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 10 };
   *     assert.changesButNotBy(fn, obj, 'val', 5);
   *
   * @name changesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.changesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.changesButNotBy, true)
      .to.change(obj, prop).but.not.by(delta);
  }

  /**
   * ### .increases(function, object, property, [message])
   *
   * Asserts that a function increases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 13 };
   *     assert.increases(fn, obj, 'val');
   *
   * @name increases
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increases = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.increases, true)
      .to.increase(obj, prop);
  }

  /**
   * ### .increasesBy(function, object, property, delta, [message])
   *
   * Asserts that a function increases a numeric object property or a function's return value by an amount (delta).
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val += 10 };
   *     assert.increasesBy(fn, obj, 'val', 10);
   *
   * @name increasesBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increasesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.increasesBy, true)
      .to.increase(obj, prop).by(delta);
  }

  /**
   * ### .doesNotIncrease(function, object, property, [message])
   *
   * Asserts that a function does not increase a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 8 };
   *     assert.doesNotIncrease(fn, obj, 'val');
   *
   * @name doesNotIncrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotIncrease = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotIncrease, true)
      .to.not.increase(obj, prop);
  }

  /**
   * ### .increasesButNotBy(function, object, property, [message])
   *
   * Asserts that a function does not increase a numeric object property or function's return value by an amount (delta).
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 15 };
   *     assert.increasesButNotBy(fn, obj, 'val', 10);
   *
   * @name increasesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.increasesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.increasesButNotBy, true)
      .to.increase(obj, prop).but.not.by(delta);
  }

  /**
   * ### .decreases(function, object, property, [message])
   *
   * Asserts that a function decreases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.decreases(fn, obj, 'val');
   *
   * @name decreases
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreases = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.decreases, true)
      .to.decrease(obj, prop);
  }

  /**
   * ### .decreasesBy(function, object, property, delta, [message])
   *
   * Asserts that a function decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val -= 5 };
   *     assert.decreasesBy(fn, obj, 'val', 5);
   *
   * @name decreasesBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreasesBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.decreasesBy, true)
      .to.decrease(obj, prop).by(delta);
  }

  /**
   * ### .doesNotDecrease(function, object, property, [message])
   *
   * Asserts that a function does not decreases a numeric object property.
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 15 };
   *     assert.doesNotDecrease(fn, obj, 'val');
   *
   * @name doesNotDecrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotDecrease = function (fn, obj, prop, msg) {
    if (arguments.length === 3 && typeof obj === 'function') {
      msg = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotDecrease, true)
      .to.not.decrease(obj, prop);
  }

  /**
   * ### .doesNotDecreaseBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.doesNotDecreaseBy(fn, obj, 'val', 1);
   *
   * @name doesNotDecrease
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.doesNotDecreaseBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    return new Assertion(fn, msg, assert.doesNotDecreaseBy, true)
      .to.not.decrease(obj, prop).by(delta);
  }

  /**
   * ### .decreasesButNotBy(function, object, property, delta, [message])
   *
   * Asserts that a function does not decreases a numeric object property or a function's return value by an amount (delta)
   *
   *     var obj = { val: 10 };
   *     var fn = function() { obj.val = 5 };
   *     assert.decreasesButNotBy(fn, obj, 'val', 1);
   *
   * @name decreasesButNotBy
   * @param {Function} modifier function
   * @param {Object} object or getter function
   * @param {String} property name _optional_
   * @param {Number} change amount (delta)
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.decreasesButNotBy = function (fn, obj, prop, delta, msg) {
    if (arguments.length === 4 && typeof obj === 'function') {
      var tmpMsg = delta;
      delta = prop;
      msg = tmpMsg;
    } else if (arguments.length === 3) {
      delta = prop;
      prop = null;
    }

    new Assertion(fn, msg, assert.decreasesButNotBy, true)
      .to.decrease(obj, prop).but.not.by(delta);
  }

  /*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */

  assert.ifError = function (val) {
    if (val) {
      throw(val);
    }
  };

  /**
   * ### .isExtensible(object)
   *
   * Asserts that `object` is extensible (can have new properties added to it).
   *
   *     assert.isExtensible({});
   *
   * @name isExtensible
   * @alias extensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isExtensible = function (obj, msg) {
    new Assertion(obj, msg, assert.isExtensible, true).to.be.extensible;
  };

  /**
   * ### .isNotExtensible(object)
   *
   * Asserts that `object` is _not_ extensible.
   *
   *     var nonExtensibleObject = Object.preventExtensions({});
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.freeze({});
   *
   *     assert.isNotExtensible(nonExtensibleObject);
   *     assert.isNotExtensible(sealedObject);
   *     assert.isNotExtensible(frozenObject);
   *
   * @name isNotExtensible
   * @alias notExtensible
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotExtensible = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotExtensible, true).to.not.be.extensible;
  };

  /**
   * ### .isSealed(object)
   *
   * Asserts that `object` is sealed (cannot have new properties added to it
   * and its existing properties cannot be removed).
   *
   *     var sealedObject = Object.seal({});
   *     var frozenObject = Object.seal({});
   *
   *     assert.isSealed(sealedObject);
   *     assert.isSealed(frozenObject);
   *
   * @name isSealed
   * @alias sealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isSealed = function (obj, msg) {
    new Assertion(obj, msg, assert.isSealed, true).to.be.sealed;
  };

  /**
   * ### .isNotSealed(object)
   *
   * Asserts that `object` is _not_ sealed.
   *
   *     assert.isNotSealed({});
   *
   * @name isNotSealed
   * @alias notSealed
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotSealed = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotSealed, true).to.not.be.sealed;
  };

  /**
   * ### .isFrozen(object)
   *
   * Asserts that `object` is frozen (cannot have new properties added to it
   * and its existing properties cannot be modified).
   *
   *     var frozenObject = Object.freeze({});
   *     assert.frozen(frozenObject);
   *
   * @name isFrozen
   * @alias frozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isFrozen = function (obj, msg) {
    new Assertion(obj, msg, assert.isFrozen, true).to.be.frozen;
  };

  /**
   * ### .isNotFrozen(object)
   *
   * Asserts that `object` is _not_ frozen.
   *
   *     assert.isNotFrozen({});
   *
   * @name isNotFrozen
   * @alias notFrozen
   * @param {Object} object
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotFrozen = function (obj, msg) {
    new Assertion(obj, msg, assert.isNotFrozen, true).to.not.be.frozen;
  };

  /**
   * ### .isEmpty(target)
   *
   * Asserts that the target does not contain any values.
   * For arrays and strings, it checks the `length` property.
   * For `Map` and `Set` instances, it checks the `size` property.
   * For non-function objects, it gets the count of own
   * enumerable string keys.
   *
   *     assert.isEmpty([]);
   *     assert.isEmpty('');
   *     assert.isEmpty(new Map);
   *     assert.isEmpty({});
   *
   * @name isEmpty
   * @alias empty
   * @param {Object|Array|String|Map|Set} target
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isEmpty = function(val, msg) {
    new Assertion(val, msg, assert.isEmpty, true).to.be.empty;
  };

  /**
   * ### .isNotEmpty(target)
   *
   * Asserts that the target contains values.
   * For arrays and strings, it checks the `length` property.
   * For `Map` and `Set` instances, it checks the `size` property.
   * For non-function objects, it gets the count of own
   * enumerable string keys.
   *
   *     assert.isNotEmpty([1, 2]);
   *     assert.isNotEmpty('34');
   *     assert.isNotEmpty(new Set([5, 6]));
   *     assert.isNotEmpty({ key: 7 });
   *
   * @name isNotEmpty
   * @alias notEmpty
   * @param {Object|Array|String|Map|Set} target
   * @param {String} message _optional_
   * @namespace Assert
   * @api public
   */

  assert.isNotEmpty = function(val, msg) {
    new Assertion(val, msg, assert.isNotEmpty, true).to.not.be.empty;
  };

  /*!
   * Aliases.
   */

  (function alias(name, as){
    assert[as] = assert[name];
    return alias;
  })
  ('isOk', 'ok')
  ('isNotOk', 'notOk')
  ('throws', 'throw')
  ('throws', 'Throw')
  ('isExtensible', 'extensible')
  ('isNotExtensible', 'notExtensible')
  ('isSealed', 'sealed')
  ('isNotSealed', 'notSealed')
  ('isFrozen', 'frozen')
  ('isNotFrozen', 'notFrozen')
  ('isEmpty', 'empty')
  ('isNotEmpty', 'notEmpty');
};


/***/ }),
/* 67 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/hasher/hasher.mjs
var hasher_hasher = __webpack_require__(4);

// EXTERNAL MODULE: ./src/encoder/hex.mjs
var hex = __webpack_require__(2);

// EXTERNAL MODULE: ./src/encoder/utf.mjs
var utf = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/chai/register-assert.js
var register_assert = __webpack_require__(25);

// CONCATENATED MODULE: ./test/TestHasher.mjs


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var TestHasher_TestHasher =
/*#__PURE__*/
function () {
  function TestHasher() {
    _classCallCheck(this, TestHasher);
  }

  _createClass(TestHasher, [{
    key: "testHash",

    /**
     * Test hash
     *
     * @param {Object} test
     */
    value: function testHash(test) {
      var hash = this.getInstance(test.options);
      hash.update(Object(utf["a" /* fromUtf */])(test.message));
      assert.equal(Object(hex["a" /* toHex */])(hash.finalize()), test.hash);
    }
    /**
     * Test setState, getState
     *
     * @param {Object} [options] - Hash options
     */

  }, {
    key: "testSetGetState",
    value: function testSetGetState(options) {
      var hasher = this.getInstance(options);
      hasher.update('1');
      var hash1 = Object(hex["a" /* toHex */])(hasher.finalize());
      hasher.reset();
      hasher.update('12');
      var hash2 = Object(hex["a" /* toHex */])(hasher.finalize());
      hasher.reset();
      hasher.update('1');
      var state = hasher.getState();
      assert.equal(Object(hex["a" /* toHex */])(hasher.finalize()), hash1);
      hasher.setState(state);
      hasher.update('2');
      assert.equal(Object(hex["a" /* toHex */])(hasher.finalize()), hash2);
    }
    /**
     * @param {Object} [options]
     * @returns {Hasher}
     */

  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new hasher_hasher["a" /* default */](options);
    }
  }]);

  return TestHasher;
}();

/* harmony default export */ var test_TestHasher = (TestHasher_TestHasher);
// EXTERNAL MODULE: ./src/hasher/has160.mjs
var has160 = __webpack_require__(14);

// CONCATENATED MODULE: ./test/hasher/has160Test.mjs
/*global describe, it */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function has160Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function has160Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function has160Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) has160Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) has160Test_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * The HAS-160 test suite
 * @link https://files.randombit.net/misc/has160.pdf
 */

var has160Test_Has160Test =
/*#__PURE__*/
function (_TestHasher) {
  _inherits(Has160Test, _TestHasher);

  function Has160Test() {
    has160Test_classCallCheck(this, Has160Test);

    return _possibleConstructorReturn(this, _getPrototypeOf(Has160Test).apply(this, arguments));
  }

  has160Test_createClass(Has160Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Has160} */

      describe('Hash has160 tests', function () {
        it("has160('')", function () {
          t.testHash({
            message: '',
            hash: '307964ef34151d37c8047adec7ab50f4ff89762d'
          });
        });
        it("has160('a')", function () {
          t.testHash({
            message: 'a',
            hash: '4872bcbc4cd0f0a9dc7c2f7045e5b43b6c830db8'
          });
        });
        it("has160('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: '975e810488cf2a3d49838478124afce4b1c78804'
          });
        });
        it("has160('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: '2338dbc8638d31225f73086246ba529f96710bc6'
          });
        });
        it("has160('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: '596185c9ab6703d0d0dbb98702bc0f5729cd1d3c'
          });
        });
        it("has160('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: 'cb5d7efbca2f02e0fb7167cabb123af5795764e5'
          });
        });
        it("has160('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: '07f05c8c0773c55ca3a5a695ce6aca4c438911b5'
          });
        });
        /**
         * @test {Has160#setState}
         * @test {Has160#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
    /**
     * @param {Object} [options]
     * @returns {Hasher}
     */

  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new has160["a" /* default */](options || {});
    }
  }]);

  return Has160Test;
}(test_TestHasher);

/* harmony default export */ var has160Test = (has160Test_Has160Test);
// EXTERNAL MODULE: ./src/hasher/md2.mjs + 1 modules
var md2 = __webpack_require__(13);

// CONCATENATED MODULE: ./test/hasher/md2Test.mjs
/*global describe, it */


function md2Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { md2Test_typeof = function _typeof(obj) { return typeof obj; }; } else { md2Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return md2Test_typeof(obj); }

function md2Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function md2Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function md2Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) md2Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) md2Test_defineProperties(Constructor, staticProps); return Constructor; }

function md2Test_possibleConstructorReturn(self, call) { if (call && (md2Test_typeof(call) === "object" || typeof call === "function")) { return call; } return md2Test_assertThisInitialized(self); }

function md2Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function md2Test_getPrototypeOf(o) { md2Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return md2Test_getPrototypeOf(o); }

function md2Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) md2Test_setPrototypeOf(subClass, superClass); }

function md2Test_setPrototypeOf(o, p) { md2Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return md2Test_setPrototypeOf(o, p); }



/**
 * The MD2 test suite
 * @link https://tools.ietf.org/html/rfc1319
 */

var md2Test_Md2Test =
/*#__PURE__*/
function (_TestHasher) {
  md2Test_inherits(Md2Test, _TestHasher);

  function Md2Test() {
    md2Test_classCallCheck(this, Md2Test);

    return md2Test_possibleConstructorReturn(this, md2Test_getPrototypeOf(Md2Test).apply(this, arguments));
  }

  md2Test_createClass(Md2Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Md2} */

      describe('Hash md2 tests', function () {
        it("md2('')", function () {
          t.testHash({
            message: '',
            hash: '8350e5a3e24c153df2275c9f80692773'
          });
        });
        it("md2('a')", function () {
          t.testHash({
            message: 'a',
            hash: '32ec01ec4a6dac72c0ab96fb34c0b5d1'
          });
        });
        it("md2('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: 'da853b0d3f88d99b30283a69e6ded6bb'
          });
        });
        it("md2('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: 'ab4f496bfb2a530b219ff33031fe06b0'
          });
        });
        it("md2('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: '4e8ddff3650292ab5a4108c3aa47940b'
          });
        });
        it("md2('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: 'da33def2a42df13975352846c30338cd'
          });
        });
        it("md2('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: 'd5976f79d83d3a0dc9806c3c66f3efd8'
          });
        });
        /**
         * @test {Md2#setState}
         * @test {Md2#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new md2["a" /* default */]();
    }
  }]);

  return Md2Test;
}(test_TestHasher);

/* harmony default export */ var md2Test = (md2Test_Md2Test);
// EXTERNAL MODULE: ./src/hasher/md4.mjs
var md4 = __webpack_require__(16);

// CONCATENATED MODULE: ./test/hasher/md4Test.mjs
/*global describe, it */


function md4Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { md4Test_typeof = function _typeof(obj) { return typeof obj; }; } else { md4Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return md4Test_typeof(obj); }

function md4Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function md4Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function md4Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) md4Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) md4Test_defineProperties(Constructor, staticProps); return Constructor; }

function md4Test_possibleConstructorReturn(self, call) { if (call && (md4Test_typeof(call) === "object" || typeof call === "function")) { return call; } return md4Test_assertThisInitialized(self); }

function md4Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function md4Test_getPrototypeOf(o) { md4Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return md4Test_getPrototypeOf(o); }

function md4Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) md4Test_setPrototypeOf(subClass, superClass); }

function md4Test_setPrototypeOf(o, p) { md4Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return md4Test_setPrototypeOf(o, p); }


 // The MD4 test suite
// https://tools.ietf.org/html/rfc1320
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/md4/Md4-128.unverified.test-vectors

var md4Test_Md4Test =
/*#__PURE__*/
function (_TestHasher) {
  md4Test_inherits(Md4Test, _TestHasher);

  function Md4Test() {
    md4Test_classCallCheck(this, Md4Test);

    return md4Test_possibleConstructorReturn(this, md4Test_getPrototypeOf(Md4Test).apply(this, arguments));
  }

  md4Test_createClass(Md4Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Md4} */

      describe('Hash md4 tests', function () {
        it("md4('')", function () {
          t.testHash({
            message: '',
            hash: '31d6cfe0d16ae931b73c59d7e0c089c0'
          });
        });
        it("md4('a')", function () {
          t.testHash({
            message: 'a',
            hash: 'bde52cb31de33e46245e05fbdbd6fb24'
          });
        });
        it("md4('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: 'a448017aaf21d8525fc10ae87aa6729d'
          });
        });
        it("md4('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: 'd9130a8164549fe818874806e1c7014b'
          });
        });
        it("md4('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: 'd79e1c308aa5bbcdeea8ed63df412da9'
          });
        });
        it("md4('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: '043f8582f241db351ce627e153e7f0e4'
          });
        });
        it("md4('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: 'e33b4ddc9c38f2199c3e7b164fcc0536'
          });
        });
        /**
         * @test {Md4#setState}
         * @test {Md4#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new md4["a" /* default */]();
    }
  }]);

  return Md4Test;
}(test_TestHasher);

/* harmony default export */ var md4Test = (md4Test_Md4Test);
// EXTERNAL MODULE: ./src/hasher/md5.mjs
var md5 = __webpack_require__(10);

// CONCATENATED MODULE: ./test/hasher/md5Test.mjs
/*global describe, it */


function md5Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { md5Test_typeof = function _typeof(obj) { return typeof obj; }; } else { md5Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return md5Test_typeof(obj); }

function md5Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function md5Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function md5Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) md5Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) md5Test_defineProperties(Constructor, staticProps); return Constructor; }

function md5Test_possibleConstructorReturn(self, call) { if (call && (md5Test_typeof(call) === "object" || typeof call === "function")) { return call; } return md5Test_assertThisInitialized(self); }

function md5Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function md5Test_getPrototypeOf(o) { md5Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return md5Test_getPrototypeOf(o); }

function md5Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) md5Test_setPrototypeOf(subClass, superClass); }

function md5Test_setPrototypeOf(o, p) { md5Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return md5Test_setPrototypeOf(o, p); }


 // The MD5 test suite
// https://tools.ietf.org/html/rfc1321
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/md5/Md5-128.unverified.test-vectors

var md5Test_Md5Test =
/*#__PURE__*/
function (_TestHasher) {
  md5Test_inherits(Md5Test, _TestHasher);

  function Md5Test() {
    md5Test_classCallCheck(this, Md5Test);

    return md5Test_possibleConstructorReturn(this, md5Test_getPrototypeOf(Md5Test).apply(this, arguments));
  }

  md5Test_createClass(Md5Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Md5} */

      describe('Hash md5 tests', function () {
        it("md5('')", function () {
          t.testHash({
            message: '',
            hash: 'd41d8cd98f00b204e9800998ecf8427e'
          });
        });
        it("md5('a')", function () {
          t.testHash({
            message: 'a',
            hash: '0cc175b9c0f1b6a831c399e269772661'
          });
        });
        it("md5('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: '900150983cd24fb0d6963f7d28e17f72'
          });
        });
        it("md5('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: 'f96b697d7cb7938d525a2f31aaf161d0'
          });
        });
        it("md5('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: 'c3fcd3d76192e4007dfb496cca67e13b'
          });
        });
        it("md5('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: 'd174ab98d277d9f5a5611c2c9f419d9f'
          });
        });
        it("md5('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: '57edf4a22be3c955ac49da2e2107b67a'
          });
        });
        /**
         * @test {Md5#setState}
         * @test {Md5#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new md5["a" /* default */]();
    }
  }]);

  return Md5Test;
}(test_TestHasher);

/* harmony default export */ var md5Test = (md5Test_Md5Test);
// EXTERNAL MODULE: ./src/hasher/ripemd.mjs
var ripemd = __webpack_require__(8);

// CONCATENATED MODULE: ./test/hasher/ripemd128Test.mjs
/*global describe, it */


function ripemd128Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ripemd128Test_typeof = function _typeof(obj) { return typeof obj; }; } else { ripemd128Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ripemd128Test_typeof(obj); }

function ripemd128Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ripemd128Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ripemd128Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) ripemd128Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) ripemd128Test_defineProperties(Constructor, staticProps); return Constructor; }

function ripemd128Test_possibleConstructorReturn(self, call) { if (call && (ripemd128Test_typeof(call) === "object" || typeof call === "function")) { return call; } return ripemd128Test_assertThisInitialized(self); }

function ripemd128Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ripemd128Test_getPrototypeOf(o) { ripemd128Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ripemd128Test_getPrototypeOf(o); }

function ripemd128Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ripemd128Test_setPrototypeOf(subClass, superClass); }

function ripemd128Test_setPrototypeOf(o, p) { ripemd128Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ripemd128Test_setPrototypeOf(o, p); }


 // The RIPEMD128 test suite
// http://homes.esat.kuleuven.be/~bosselae/ripemd160.html

var ripemd128Test_Ripemd128Test =
/*#__PURE__*/
function (_TestHasher) {
  ripemd128Test_inherits(Ripemd128Test, _TestHasher);

  function Ripemd128Test() {
    ripemd128Test_classCallCheck(this, Ripemd128Test);

    return ripemd128Test_possibleConstructorReturn(this, ripemd128Test_getPrototypeOf(Ripemd128Test).apply(this, arguments));
  }

  ripemd128Test_createClass(Ripemd128Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Ripemd} */

      describe('Hash ripemd128 tests', function () {
        it("ripemd128('')", function () {
          t.testHash({
            message: '',
            hash: 'cdf26213a150dc3ecb610f18f6b38b46'
          });
        });
        it("ripemd128('a')", function () {
          t.testHash({
            message: 'a',
            hash: '86be7afa339d0fc7cfc785e72f578d33'
          });
        });
        it("ripemd128('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: 'c14a12199c66e4ba84636b0f69144c77'
          });
        });
        it("ripemd128('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: '9e327b3d6e523062afc1132d7df9d1b8'
          });
        });
        it("ripemd128('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: 'fd2aa607f71dc8f510714922b371834e'
          });
        });
        it("ripemd128('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: 'a1aa0689d0fafa2ddc22e88b49133a06'
          });
        });
        it("ripemd128('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: 'd1e959eb179c911faea4624c60c5c702'
          });
        });
        it("ripemd128('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: '3f45ef194732c2dbb2c4a2c769795fa3'
          });
        });
        /**
         * @test {Ripemd#setState}
         * @test {Ripemd#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new ripemd["a" /* default */](options || {
        length: 128
      });
    }
  }]);

  return Ripemd128Test;
}(test_TestHasher);

/* harmony default export */ var ripemd128Test = (ripemd128Test_Ripemd128Test);
// CONCATENATED MODULE: ./test/hasher/ripemd160Test.mjs
/*global describe, it */


function ripemd160Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ripemd160Test_typeof = function _typeof(obj) { return typeof obj; }; } else { ripemd160Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ripemd160Test_typeof(obj); }

function ripemd160Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ripemd160Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ripemd160Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) ripemd160Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) ripemd160Test_defineProperties(Constructor, staticProps); return Constructor; }

function ripemd160Test_possibleConstructorReturn(self, call) { if (call && (ripemd160Test_typeof(call) === "object" || typeof call === "function")) { return call; } return ripemd160Test_assertThisInitialized(self); }

function ripemd160Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ripemd160Test_getPrototypeOf(o) { ripemd160Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ripemd160Test_getPrototypeOf(o); }

function ripemd160Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ripemd160Test_setPrototypeOf(subClass, superClass); }

function ripemd160Test_setPrototypeOf(o, p) { ripemd160Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ripemd160Test_setPrototypeOf(o, p); }


 // The RIPEMD160 test suite
// http://homes.esat.kuleuven.be/~bosselae/ripemd160.html

var ripemd160Test_Ripemd160Test =
/*#__PURE__*/
function (_TestHasher) {
  ripemd160Test_inherits(Ripemd160Test, _TestHasher);

  function Ripemd160Test() {
    ripemd160Test_classCallCheck(this, Ripemd160Test);

    return ripemd160Test_possibleConstructorReturn(this, ripemd160Test_getPrototypeOf(Ripemd160Test).apply(this, arguments));
  }

  ripemd160Test_createClass(Ripemd160Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Ripemd} */

      describe('Hash ripemd160 tests', function () {
        it("ripemd160('')", function () {
          t.testHash({
            message: '',
            hash: '9c1185a5c5e9fc54612808977ee8f548b2258d31'
          });
        });
        it("ripemd160('a')", function () {
          t.testHash({
            message: 'a',
            hash: '0bdc9d2d256b3ee9daae347be6f4dc835a467ffe'
          });
        });
        it("ripemd160('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: '8eb208f7e05d987a9b044a8e98c6b087f15a0bfc'
          });
        });
        it("ripemd160('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: '5d0689ef49d2fae572b881b123a85ffa21595f36'
          });
        });
        it("ripemd160('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: 'f71c27109c692c1b56bbdceb5b9d2865b3708dbc'
          });
        });
        it("ripemd160('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: '12a053384a9c0c88e405a06c27dcf49ada62eb2b'
          });
        });
        it("ripemd160('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: 'b0e20b6e3116640286ed3a87a5713079b21f5189'
          });
        });
        it("ripemd160('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: '9b752e45573d4b39f4dbd3323cab82bf63326bfb'
          });
        });
        /**
         * @test {Ripemd#setState}
         * @test {Ripemd#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new ripemd["a" /* default */](options);
    }
  }]);

  return Ripemd160Test;
}(test_TestHasher);

/* harmony default export */ var ripemd160Test = (ripemd160Test_Ripemd160Test);
// CONCATENATED MODULE: ./test/hasher/ripemd256Test.mjs
/*global describe, it */


function ripemd256Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ripemd256Test_typeof = function _typeof(obj) { return typeof obj; }; } else { ripemd256Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ripemd256Test_typeof(obj); }

function ripemd256Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ripemd256Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ripemd256Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) ripemd256Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) ripemd256Test_defineProperties(Constructor, staticProps); return Constructor; }

function ripemd256Test_possibleConstructorReturn(self, call) { if (call && (ripemd256Test_typeof(call) === "object" || typeof call === "function")) { return call; } return ripemd256Test_assertThisInitialized(self); }

function ripemd256Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ripemd256Test_getPrototypeOf(o) { ripemd256Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ripemd256Test_getPrototypeOf(o); }

function ripemd256Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ripemd256Test_setPrototypeOf(subClass, superClass); }

function ripemd256Test_setPrototypeOf(o, p) { ripemd256Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ripemd256Test_setPrototypeOf(o, p); }


 // The RIPEMD256 test suite
// http://homes.esat.kuleuven.be/~bosselae/ripemd160.html

var ripemd256Test_Ripemd256Test =
/*#__PURE__*/
function (_TestHasher) {
  ripemd256Test_inherits(Ripemd256Test, _TestHasher);

  function Ripemd256Test() {
    ripemd256Test_classCallCheck(this, Ripemd256Test);

    return ripemd256Test_possibleConstructorReturn(this, ripemd256Test_getPrototypeOf(Ripemd256Test).apply(this, arguments));
  }

  ripemd256Test_createClass(Ripemd256Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Ripemd} */

      describe('Hash ripemd256 tests', function () {
        it("ripemd256('')", function () {
          t.testHash({
            message: '',
            hash: '02ba4c4e5f8ecd1877fc52d64d30e37a2d9774fb1e5d026380ae0168e3c5522d'
          });
        });
        it("ripemd256('a')", function () {
          t.testHash({
            message: 'a',
            hash: 'f9333e45d857f5d90a91bab70a1eba0cfb1be4b0783c9acfcd883a9134692925'
          });
        });
        it("ripemd256('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: 'afbd6e228b9d8cbbcef5ca2d03e6dba10ac0bc7dcbe4680e1e42d2e975459b65'
          });
        });
        it("ripemd256('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: '87e971759a1ce47a514d5c914c392c9018c7c46bc14465554afcdf54a5070c0e'
          });
        });
        it("ripemd256('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: '649d3034751ea216776bf9a18acc81bc7896118a5197968782dd1fd97d8d5133'
          });
        });
        it("ripemd256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: '3843045583aac6c8c8d9128573e7a9809afb2a0f34ccc36ea9e72f16f6368e3f'
          });
        });
        it("ripemd256('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: '5740a408ac16b720b84424ae931cbb1fe363d1d0bf4017f1a89f7ea6de77a0b8'
          });
        });
        it("ripemd256('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: '06fdcc7a409548aaf91368c06a6275b553e3f099bf0ea4edfd6778df89a890dd'
          });
        });
        /**
         * @test {Ripemd#setState}
         * @test {Ripemd#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new ripemd["a" /* default */](options || {
        length: 256
      });
    }
  }]);

  return Ripemd256Test;
}(test_TestHasher);

/* harmony default export */ var ripemd256Test = (ripemd256Test_Ripemd256Test);
// CONCATENATED MODULE: ./test/hasher/ripemd320Test.mjs
/*global describe, it */


function ripemd320Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ripemd320Test_typeof = function _typeof(obj) { return typeof obj; }; } else { ripemd320Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ripemd320Test_typeof(obj); }

function ripemd320Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ripemd320Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ripemd320Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) ripemd320Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) ripemd320Test_defineProperties(Constructor, staticProps); return Constructor; }

function ripemd320Test_possibleConstructorReturn(self, call) { if (call && (ripemd320Test_typeof(call) === "object" || typeof call === "function")) { return call; } return ripemd320Test_assertThisInitialized(self); }

function ripemd320Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ripemd320Test_getPrototypeOf(o) { ripemd320Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ripemd320Test_getPrototypeOf(o); }

function ripemd320Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ripemd320Test_setPrototypeOf(subClass, superClass); }

function ripemd320Test_setPrototypeOf(o, p) { ripemd320Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ripemd320Test_setPrototypeOf(o, p); }


 // The RIPEMD320 test suite
// http://homes.esat.kuleuven.be/~bosselae/ripemd160.html

var ripemd320Test_Ripemd320Test =
/*#__PURE__*/
function (_TestHasher) {
  ripemd320Test_inherits(Ripemd320Test, _TestHasher);

  function Ripemd320Test() {
    ripemd320Test_classCallCheck(this, Ripemd320Test);

    return ripemd320Test_possibleConstructorReturn(this, ripemd320Test_getPrototypeOf(Ripemd320Test).apply(this, arguments));
  }

  ripemd320Test_createClass(Ripemd320Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Ripemd} */

      describe('Hash ripemd320 tests', function () {
        it("ripemd320('')", function () {
          t.testHash({
            message: '',
            hash: '22d65d5661536cdc75c1fdf5c6de7b41b9f27325ebc61e8557177d705a0ec880151c3a32a00899b8'
          });
        });
        it("ripemd320('a')", function () {
          t.testHash({
            message: 'a',
            hash: 'ce78850638f92658a5a585097579926dda667a5716562cfcf6fbe77f63542f99b04705d6970dff5d'
          });
        });
        it("ripemd320('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: 'de4c01b3054f8930a79d09ae738e92301e5a17085beffdc1b8d116713e74f82fa942d64cdbc4682d'
          });
        });
        it("ripemd320('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: '3a8e28502ed45d422f68844f9dd316e7b98533fa3f2a91d29f84d425c88d6b4eff727df66a7c0197'
          });
        });
        it("ripemd320('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: 'cabdb1810b92470a2093aa6bce05952c28348cf43ff60841975166bb40ed234004b8824463e6b009'
          });
        });
        it("ripemd320('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: 'd034a7950cf722021ba4b84df769a5de2060e259df4c9bb4a4268c0e935bbc7470a969c9d072a1ac'
          });
        });
        it("ripemd320('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: 'ed544940c86d67f250d232c30b7b3e5770e0c60c8cb9a4cafe3b11388af9920e1b99230b843c86a4'
          });
        });
        it("ripemd320('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: '557888af5f6d8ed62ab66945c6d2a0a47ecd5341e915eb8fea1d0524955f825dc717e4a008ab2d42'
          });
        });
        /**
         * @test {Ripemd#setState}
         * @test {Ripemd#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new ripemd["a" /* default */](options || {
        length: 320
      });
    }
  }]);

  return Ripemd320Test;
}(test_TestHasher);

/* harmony default export */ var ripemd320Test = (ripemd320Test_Ripemd320Test);
// EXTERNAL MODULE: ./src/hasher/sha0.mjs
var sha0 = __webpack_require__(17);

// CONCATENATED MODULE: ./test/hasher/sha0Test.mjs
/*global describe, it */


function sha0Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sha0Test_typeof = function _typeof(obj) { return typeof obj; }; } else { sha0Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sha0Test_typeof(obj); }

function sha0Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sha0Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sha0Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) sha0Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) sha0Test_defineProperties(Constructor, staticProps); return Constructor; }

function sha0Test_possibleConstructorReturn(self, call) { if (call && (sha0Test_typeof(call) === "object" || typeof call === "function")) { return call; } return sha0Test_assertThisInitialized(self); }

function sha0Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sha0Test_getPrototypeOf(o) { sha0Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sha0Test_getPrototypeOf(o); }

function sha0Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sha0Test_setPrototypeOf(subClass, superClass); }

function sha0Test_setPrototypeOf(o, p) { sha0Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sha0Test_setPrototypeOf(o, p); }


 // The SHA0 test suite
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/sha/Sha-0-160.test-vectors

var sha0Test_Sha0Test =
/*#__PURE__*/
function (_TestHasher) {
  sha0Test_inherits(Sha0Test, _TestHasher);

  function Sha0Test() {
    sha0Test_classCallCheck(this, Sha0Test);

    return sha0Test_possibleConstructorReturn(this, sha0Test_getPrototypeOf(Sha0Test).apply(this, arguments));
  }

  sha0Test_createClass(Sha0Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Sha0} */

      describe('Hash sha0 tests', function () {
        it("sha0('')", function () {
          t.testHash({
            message: '',
            hash: 'f96cea198ad1dd5617ac084a3d92c6107708c0ef'
          });
        });
        it("sha0('a')", function () {
          t.testHash({
            message: 'a',
            hash: '37f297772fae4cb1ba39b6cf9cf0381180bd62f2'
          });
        });
        it("sha0('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: '0164b8a914cd2a5e74c4f7ff082c4d97f1edf880'
          });
        });
        it("sha0('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: 'c1b0f222d150ebb9aa36a40cafdc8bcbed830b14'
          });
        });
        it("sha0('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: 'b40ce07a430cfd3c033039b9fe9afec95dc1bdcd'
          });
        });
        it("sha0('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: 'd2516ee1acfa5baf33dfc1c471e438449ef134c8'
          });
        });
        it("sha0('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: '79e966f7a3a990df33e40e3d7f8f18d2caebadfa'
          });
        });
        it("sha0('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: '4aa29d14d171522ece47bee8957e35a41f3e9cff'
          });
        });
        /**
         * @test {Sha0#setState}
         * @test {Sha0#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha0["a" /* default */]();
    }
  }]);

  return Sha0Test;
}(test_TestHasher);

/* harmony default export */ var sha0Test = (sha0Test_Sha0Test);
// EXTERNAL MODULE: ./src/hasher/sha1.mjs
var sha1 = __webpack_require__(11);

// CONCATENATED MODULE: ./test/hasher/sha1Test.mjs
/*global describe, it */


function sha1Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sha1Test_typeof = function _typeof(obj) { return typeof obj; }; } else { sha1Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sha1Test_typeof(obj); }

function sha1Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sha1Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sha1Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) sha1Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) sha1Test_defineProperties(Constructor, staticProps); return Constructor; }

function sha1Test_possibleConstructorReturn(self, call) { if (call && (sha1Test_typeof(call) === "object" || typeof call === "function")) { return call; } return sha1Test_assertThisInitialized(self); }

function sha1Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sha1Test_getPrototypeOf(o) { sha1Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sha1Test_getPrototypeOf(o); }

function sha1Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sha1Test_setPrototypeOf(subClass, superClass); }

function sha1Test_setPrototypeOf(o, p) { sha1Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sha1Test_setPrototypeOf(o, p); }


 // The SHA1 test suite
// http://tools.ietf.org/html/rfc3174
// http://csrc.nist.gov/publications/fips/fips180-2/fips180-2.pdf
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/sha/Sha-1-160.test-vectors

var sha1Test_Sha1Test =
/*#__PURE__*/
function (_TestHasher) {
  sha1Test_inherits(Sha1Test, _TestHasher);

  function Sha1Test() {
    sha1Test_classCallCheck(this, Sha1Test);

    return sha1Test_possibleConstructorReturn(this, sha1Test_getPrototypeOf(Sha1Test).apply(this, arguments));
  }

  sha1Test_createClass(Sha1Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Sha1} */

      describe('Hash sha1 tests', function () {
        it("sha1('')", function () {
          t.testHash({
            message: '',
            hash: 'da39a3ee5e6b4b0d3255bfef95601890afd80709'
          });
        });
        it("sha1('a')", function () {
          t.testHash({
            message: 'a',
            hash: '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8'
          });
        });
        it("sha1('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: 'a9993e364706816aba3e25717850c26c9cd0d89d'
          });
        });
        it("sha1('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: 'c12252ceda8be8994d5fa0290a47231c1d16aae3'
          });
        });
        it("sha1('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: '32d10c7b8cf96570ca04ce37f2a19d84240d3a89'
          });
        });
        it("sha1('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: '84983e441c3bd26ebaae4aa1f95129e5e54670f1'
          });
        });
        it("sha1('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: '761c457bf73b14d27e9e9265c46f4b4dda11f940'
          });
        });
        it("sha1('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: '50abf5706a150990a08b2c5ea40fa0e585554732'
          });
        });
        it("sha1('01234567' x 80)", function () {
          t.testHash({
            message: new Array(81).join('01234567'),
            hash: 'dea356a2cddd90c7a7ecedc5ebb563934f460452'
          });
        });
        /**
         * @test {Sha1#setState}
         * @test {Sha1#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha1["a" /* default */]();
    }
  }]);

  return Sha1Test;
}(test_TestHasher);

/* harmony default export */ var sha1Test = (sha1Test_Sha1Test);
// EXTERNAL MODULE: ./src/hasher/sha256.mjs
var sha256 = __webpack_require__(7);

// CONCATENATED MODULE: ./test/hasher/sha224Test.mjs
/*global describe, it */


function sha224Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sha224Test_typeof = function _typeof(obj) { return typeof obj; }; } else { sha224Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sha224Test_typeof(obj); }

function sha224Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sha224Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sha224Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) sha224Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) sha224Test_defineProperties(Constructor, staticProps); return Constructor; }

function sha224Test_possibleConstructorReturn(self, call) { if (call && (sha224Test_typeof(call) === "object" || typeof call === "function")) { return call; } return sha224Test_assertThisInitialized(self); }

function sha224Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sha224Test_getPrototypeOf(o) { sha224Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sha224Test_getPrototypeOf(o); }

function sha224Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sha224Test_setPrototypeOf(subClass, superClass); }

function sha224Test_setPrototypeOf(o, p) { sha224Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sha224Test_setPrototypeOf(o, p); }


 // The SHA224 test suite
// http://tools.ietf.org/html/rfc4634

var sha224Test_Sha224Test =
/*#__PURE__*/
function (_TestHasher) {
  sha224Test_inherits(Sha224Test, _TestHasher);

  function Sha224Test() {
    sha224Test_classCallCheck(this, Sha224Test);

    return sha224Test_possibleConstructorReturn(this, sha224Test_getPrototypeOf(Sha224Test).apply(this, arguments));
  }

  sha224Test_createClass(Sha224Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Sha256} */

      describe('Hash sha224 tests', function () {
        it("sha224('')", function () {
          t.testHash({
            message: '',
            hash: 'd14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f'
          });
        });
        it("sha224('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: '23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7'
          });
        });
        it("sha224('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: '75388b16512776cc5dba5da1fd890150b0c6455cb4f58b1952522525'
          });
        });
        it("sha224('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')", function () {
          t.testHash({
            message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
            hash: 'c97ca9a559850ce97a04a96def6d99a9e0e0e2ab14e6b8df265fc0b3'
          });
        });
        it("sha224('01234567' x 80)", function () {
          t.testHash({
            message: new Array(81).join('01234567'),
            hash: '567f69f168cd7844e65259ce658fe7aadfa25216e68eca0eb7ab8262'
          });
        });
        /**
         * @test {Sha256#setState}
         * @test {Sha256#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha256["a" /* default */](options || {
        length: 224
      });
    }
  }]);

  return Sha224Test;
}(test_TestHasher);

/* harmony default export */ var sha224Test = (sha224Test_Sha224Test);
// CONCATENATED MODULE: ./test/hasher/sha256Test.mjs
/*global describe, it */


function sha256Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sha256Test_typeof = function _typeof(obj) { return typeof obj; }; } else { sha256Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sha256Test_typeof(obj); }

function sha256Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sha256Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sha256Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) sha256Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) sha256Test_defineProperties(Constructor, staticProps); return Constructor; }

function sha256Test_possibleConstructorReturn(self, call) { if (call && (sha256Test_typeof(call) === "object" || typeof call === "function")) { return call; } return sha256Test_assertThisInitialized(self); }

function sha256Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sha256Test_getPrototypeOf(o) { sha256Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sha256Test_getPrototypeOf(o); }

function sha256Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sha256Test_setPrototypeOf(subClass, superClass); }

function sha256Test_setPrototypeOf(o, p) { sha256Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sha256Test_setPrototypeOf(o, p); }


 // The SHA256 test suite
// http://tools.ietf.org/html/rfc4634

var sha256Test_Sha256Test =
/*#__PURE__*/
function (_TestHasher) {
  sha256Test_inherits(Sha256Test, _TestHasher);

  function Sha256Test() {
    sha256Test_classCallCheck(this, Sha256Test);

    return sha256Test_possibleConstructorReturn(this, sha256Test_getPrototypeOf(Sha256Test).apply(this, arguments));
  }

  sha256Test_createClass(Sha256Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Sha256} */

      describe('Hash sha256 tests', function () {
        it("sha256('')", function () {
          t.testHash({
            message: '',
            hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
          });
        });
        it("sha256('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'
          });
        });
        it("sha256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1'
          });
        });
        it("sha256('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')", function () {
          t.testHash({
            message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
            hash: 'cf5b16a778af8380036ce59e7b0492370b249b11e8f07a51afac45037afee9d1'
          });
        });
        it("sha256('01234567' x 80)", function () {
          t.testHash({
            message: new Array(81).join('01234567'),
            hash: '594847328451bdfa85056225462cc1d867d877fb388df0ce35f25ab5562bfbb5'
          });
        });
        /**
         * @test {Sha256#setState}
         * @test {Sha256#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha256["a" /* default */](options);
    }
  }]);

  return Sha256Test;
}(test_TestHasher);

/* harmony default export */ var sha256Test = (sha256Test_Sha256Test);
// EXTERNAL MODULE: ./src/hasher/sha512.mjs
var sha512 = __webpack_require__(6);

// CONCATENATED MODULE: ./test/hasher/sha384Test.mjs
/*global describe, it */


function sha384Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sha384Test_typeof = function _typeof(obj) { return typeof obj; }; } else { sha384Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sha384Test_typeof(obj); }

function sha384Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sha384Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sha384Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) sha384Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) sha384Test_defineProperties(Constructor, staticProps); return Constructor; }

function sha384Test_possibleConstructorReturn(self, call) { if (call && (sha384Test_typeof(call) === "object" || typeof call === "function")) { return call; } return sha384Test_assertThisInitialized(self); }

function sha384Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sha384Test_getPrototypeOf(o) { sha384Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sha384Test_getPrototypeOf(o); }

function sha384Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sha384Test_setPrototypeOf(subClass, superClass); }

function sha384Test_setPrototypeOf(o, p) { sha384Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sha384Test_setPrototypeOf(o, p); }


 // The SHA384 test suite
// http://tools.ietf.org/html/rfc4634

var sha384Test_Sha384Test =
/*#__PURE__*/
function (_TestHasher) {
  sha384Test_inherits(Sha384Test, _TestHasher);

  function Sha384Test() {
    sha384Test_classCallCheck(this, Sha384Test);

    return sha384Test_possibleConstructorReturn(this, sha384Test_getPrototypeOf(Sha384Test).apply(this, arguments));
  }

  sha384Test_createClass(Sha384Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Sha512} */

      describe('Hash sha384 tests', function () {
        it("sha384('')", function () {
          t.testHash({
            message: '',
            hash: '38b060a751ac96384cd9327eb1b1e36a21fdb71114be07434c0cc7bf63f6e1da274edebfe76f65fbd51ad2f14898b95b'
          });
        });
        it("sha384('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: 'cb00753f45a35e8bb5a03d699ac65007272c32ab0eded1631a8b605a43ff5bed8086072ba1e7cc2358baeca134c825a7'
          });
        });
        it("sha384('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: '3391fdddfc8dc7393707a65b1b4709397cf8b1d162af05abfe8f450de5f36bc6b0455a8520bc4e6f5fe95b1fe3c8452b'
          });
        });
        it("sha384('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')", function () {
          t.testHash({
            message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
            hash: '09330c33f71147e83d192fc782cd1b4753111b173b3b05d22fa08086e3b0f712fcc7c71a557e2db966c3e9fa91746039'
          });
        });
        it("sha384('01234567' x 80)", function () {
          t.testHash({
            message: new Array(81).join('01234567'),
            hash: '2fc64a4f500ddb6828f6a3430b8dd72a368eb7f3a8322a70bc84275b9c0b3ab00d27a5cc3c2d224aa6b61a0d79fb4596'
          });
        });
        /**
         * @test {Sha512#setState}
         * @test {Sha512#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha512["a" /* default */](options || {
        length: 384
      });
    }
  }]);

  return Sha384Test;
}(test_TestHasher);

/* harmony default export */ var sha384Test = (sha384Test_Sha384Test);
// CONCATENATED MODULE: ./test/hasher/sha512_224Test.mjs
/*global describe, it */


function sha512_224Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sha512_224Test_typeof = function _typeof(obj) { return typeof obj; }; } else { sha512_224Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sha512_224Test_typeof(obj); }

function sha512_224Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sha512_224Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sha512_224Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) sha512_224Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) sha512_224Test_defineProperties(Constructor, staticProps); return Constructor; }

function sha512_224Test_possibleConstructorReturn(self, call) { if (call && (sha512_224Test_typeof(call) === "object" || typeof call === "function")) { return call; } return sha512_224Test_assertThisInitialized(self); }

function sha512_224Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sha512_224Test_getPrototypeOf(o) { sha512_224Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sha512_224Test_getPrototypeOf(o); }

function sha512_224Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sha512_224Test_setPrototypeOf(subClass, superClass); }

function sha512_224Test_setPrototypeOf(o, p) { sha512_224Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sha512_224Test_setPrototypeOf(o, p); }


 // The SHA512/224 test suite
// http://csrc.nist.gov/groups/ST/toolkit/documents/Examples/SHA512_224.pdf

var sha512_224Test_Sha512_224Test =
/*#__PURE__*/
function (_TestHasher) {
  sha512_224Test_inherits(Sha512_224Test, _TestHasher);

  function Sha512_224Test() {
    sha512_224Test_classCallCheck(this, Sha512_224Test);

    return sha512_224Test_possibleConstructorReturn(this, sha512_224Test_getPrototypeOf(Sha512_224Test).apply(this, arguments));
  }

  sha512_224Test_createClass(Sha512_224Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Sha512} */

      describe('Hash sha512/224 tests', function () {
        it("sha512/224('')", function () {
          t.testHash({
            message: '',
            hash: '6ed0dd02806fa89e25de060c19d3ac86cabb87d6a0ddd05c333b84f4'
          });
        });
        it("sha512/224('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: '4634270f707b6a54daae7530460842e20e37ed265ceee9a43e8924aa'
          });
        });
        it("sha512/224('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: 'e5302d6d54bb242275d1e7622d68df6eb02dedd13f564c13dbda2174'
          });
        });
        it("sha512/224('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')", function () {
          t.testHash({
            message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
            hash: '23fec5bb94d60b23308192640b0c453335d664734fe40e7268674af9'
          });
        });
        it("sha512/224('01234567' x 80)", function () {
          t.testHash({
            message: new Array(81).join('01234567'),
            hash: '406338c163ad81f50d6b4c9bb45240c5d706b498863404bab6b84938'
          });
        });
        /**
         * @test {Sha512#setState}
         * @test {Sha512#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha512["a" /* default */](options || {
        length: 224
      });
    }
  }]);

  return Sha512_224Test;
}(test_TestHasher);

/* harmony default export */ var sha512_224Test = (sha512_224Test_Sha512_224Test);
// CONCATENATED MODULE: ./test/hasher/sha512_256Test.mjs
/*global describe, it */


function sha512_256Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sha512_256Test_typeof = function _typeof(obj) { return typeof obj; }; } else { sha512_256Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sha512_256Test_typeof(obj); }

function sha512_256Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sha512_256Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sha512_256Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) sha512_256Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) sha512_256Test_defineProperties(Constructor, staticProps); return Constructor; }

function sha512_256Test_possibleConstructorReturn(self, call) { if (call && (sha512_256Test_typeof(call) === "object" || typeof call === "function")) { return call; } return sha512_256Test_assertThisInitialized(self); }

function sha512_256Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sha512_256Test_getPrototypeOf(o) { sha512_256Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sha512_256Test_getPrototypeOf(o); }

function sha512_256Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sha512_256Test_setPrototypeOf(subClass, superClass); }

function sha512_256Test_setPrototypeOf(o, p) { sha512_256Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sha512_256Test_setPrototypeOf(o, p); }


 // The SHA512/256 test suite
// http://csrc.nist.gov/groups/ST/toolkit/documents/Examples/SHA512_256.pdf

var sha512_256Test_Sha512_256Test =
/*#__PURE__*/
function (_TestHasher) {
  sha512_256Test_inherits(Sha512_256Test, _TestHasher);

  function Sha512_256Test() {
    sha512_256Test_classCallCheck(this, Sha512_256Test);

    return sha512_256Test_possibleConstructorReturn(this, sha512_256Test_getPrototypeOf(Sha512_256Test).apply(this, arguments));
  }

  sha512_256Test_createClass(Sha512_256Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Sha512} */

      describe('Hash sha512/256 tests', function () {
        it("sha512/256('')", function () {
          t.testHash({
            message: '',
            hash: 'c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a'
          });
        });
        it("sha512/256('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: '53048e2681941ef99b2e29b76b4c7dabe4c2d0c634fc6d46e0e2f13107e7af23'
          });
        });
        it("sha512/256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: 'bde8e1f9f19bb9fd3406c90ec6bc47bd36d8ada9f11880dbc8a22a7078b6a461'
          });
        });
        it("sha512/256('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')", function () {
          t.testHash({
            message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
            hash: '3928e184fb8690f840da3988121d31be65cb9d3ef83ee6146feac861e19b563a'
          });
        });
        it("sha512/256('01234567' x 80)", function () {
          t.testHash({
            message: new Array(81).join('01234567'),
            hash: 'cf78e4ba935b4d9eb91052aeddf8e2d606c590f708573693ea94be826a666ee4'
          });
        });
        /**
         * @test {Sha512#setState}
         * @test {Sha512#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha512["a" /* default */](options || {
        length: 256
      });
    }
  }]);

  return Sha512_256Test;
}(test_TestHasher);

/* harmony default export */ var sha512_256Test = (sha512_256Test_Sha512_256Test);
// CONCATENATED MODULE: ./test/hasher/sha512Test.mjs
/*global describe, it */


function sha512Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sha512Test_typeof = function _typeof(obj) { return typeof obj; }; } else { sha512Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sha512Test_typeof(obj); }

function sha512Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sha512Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sha512Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) sha512Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) sha512Test_defineProperties(Constructor, staticProps); return Constructor; }

function sha512Test_possibleConstructorReturn(self, call) { if (call && (sha512Test_typeof(call) === "object" || typeof call === "function")) { return call; } return sha512Test_assertThisInitialized(self); }

function sha512Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sha512Test_getPrototypeOf(o) { sha512Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sha512Test_getPrototypeOf(o); }

function sha512Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sha512Test_setPrototypeOf(subClass, superClass); }

function sha512Test_setPrototypeOf(o, p) { sha512Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sha512Test_setPrototypeOf(o, p); }


 // The SHA512 test suite
// http://tools.ietf.org/html/rfc4634

var sha512Test_Sha512Test =
/*#__PURE__*/
function (_TestHasher) {
  sha512Test_inherits(Sha512Test, _TestHasher);

  function Sha512Test() {
    sha512Test_classCallCheck(this, Sha512Test);

    return sha512Test_possibleConstructorReturn(this, sha512Test_getPrototypeOf(Sha512Test).apply(this, arguments));
  }

  sha512Test_createClass(Sha512Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Sha512} */

      describe('Hash sha512 tests', function () {
        it("sha512('')", function () {
          t.testHash({
            message: '',
            hash: 'cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e'
          });
        });
        it("sha512('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f'
          });
        });
        it("sha512('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: '204a8fc6dda82f0a0ced7beb8e08a41657c16ef468b228a8279be331a703c33596fd15c13b1b07f9aa1d3bea57789ca031ad85c7a71dd70354ec631238ca3445'
          });
        });
        it("sha512('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu')", function () {
          t.testHash({
            message: 'abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu',
            hash: '8e959b75dae313da8cf4f72814fc143f8f7779c6eb9f7fa17299aeadb6889018501d289e4900f7e4331b99dec4b5433ac7d329eeb6dd26545e96e55b874be909'
          });
        });
        it("sha512('01234567' x 80)", function () {
          t.testHash({
            message: new Array(81).join('01234567'),
            hash: '89d05ba632c699c31231ded4ffc127d5a894dad412c0e024db872d1abd2ba8141a0f85072a9be1e2aa04cf33c765cb510813a39cd5a84c4acaa64d3f3fb7bae9'
          });
        });
        /**
         * @test {Sha512#setState}
         * @test {Sha512#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha512["a" /* default */](options);
    }
  }]);

  return Sha512Test;
}(test_TestHasher);

/* harmony default export */ var sha512Test = (sha512Test_Sha512Test);
// EXTERNAL MODULE: ./src/hasher/snefru.mjs
var snefru = __webpack_require__(9);

// CONCATENATED MODULE: ./test/hasher/snefru128_2Test.mjs
/*global describe, it */


function snefru128_2Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { snefru128_2Test_typeof = function _typeof(obj) { return typeof obj; }; } else { snefru128_2Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return snefru128_2Test_typeof(obj); }

function snefru128_2Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function snefru128_2Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function snefru128_2Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) snefru128_2Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) snefru128_2Test_defineProperties(Constructor, staticProps); return Constructor; }

function snefru128_2Test_possibleConstructorReturn(self, call) { if (call && (snefru128_2Test_typeof(call) === "object" || typeof call === "function")) { return call; } return snefru128_2Test_assertThisInitialized(self); }

function snefru128_2Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function snefru128_2Test_getPrototypeOf(o) { snefru128_2Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return snefru128_2Test_getPrototypeOf(o); }

function snefru128_2Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) snefru128_2Test_setPrototypeOf(subClass, superClass); }

function snefru128_2Test_setPrototypeOf(o, p) { snefru128_2Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return snefru128_2Test_setPrototypeOf(o, p); }


 // The Snefru-2-128 test suite
// From Snefru version 2.0 package

var snefru128_2Test_Snefru128_2Test =
/*#__PURE__*/
function (_TestHasher) {
  snefru128_2Test_inherits(Snefru128_2Test, _TestHasher);

  function Snefru128_2Test() {
    snefru128_2Test_classCallCheck(this, Snefru128_2Test);

    return snefru128_2Test_possibleConstructorReturn(this, snefru128_2Test_getPrototypeOf(Snefru128_2Test).apply(this, arguments));
  }

  snefru128_2Test_createClass(Snefru128_2Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Snefru} */

      describe('Hash snefru128/2 tests', function () {
        it("snefru128/2('')", function () {
          t.testHash({
            message: '',
            hash: 'b67224738c99d0ef185f2e971eb762ae'
          });
        });
        it("snefru128/2(0x0a)", function () {
          t.testHash({
            message: "\n",
            hash: '13af7619ab98d4b5f5e0a9e6b26b5452'
          });
        });
        it("snefru128/2('1' + 0x0a)", function () {
          t.testHash({
            message: "1\n",
            hash: '578c83f88fe1f6a8c119d2ba3a9256c2'
          });
        });
        it("snefru128/2('12' + 0x0a)", function () {
          t.testHash({
            message: "12\n",
            hash: '255468d4b4bd985b696a73136027fc80'
          });
        });
        it("snefru128/2('123' + 0x0a)", function () {
          t.testHash({
            message: "123\n",
            hash: 'f5339a529c4dafc534fe3f0d7a66baf7'
          });
        });
        it("snefru128/2('1234' + 0x0a)", function () {
          t.testHash({
            message: "1234\n",
            hash: '2645ff869a6c0ec65c49c20dd9050165'
          });
        });
        it("snefru128/2('12345' + 0x0a)", function () {
          t.testHash({
            message: "12345\n",
            hash: '387d29298ed52ece88e64f38fe4fdb11'
          });
        });
        it("snefru128/2('123456' + 0x0a)", function () {
          t.testHash({
            message: "123456\n",
            hash: 'f29f8915d23a0e02838cc2e275f5dfe7'
          });
        });
        it("snefru128/2('1234567' + 0x0a)", function () {
          t.testHash({
            message: "1234567\n",
            hash: '4fb0f76e9af16a2d61844b9ce833e18f'
          });
        });
        it("snefru128/2('12345678' + 0x0a)", function () {
          t.testHash({
            message: "12345678\n",
            hash: 'aacc56fc85910fefe81fc6976b061f4e'
          });
        });
        it("snefru128/2('123456789' + 0x0a)", function () {
          t.testHash({
            message: "123456789\n",
            hash: 'e699784944ed68a1c762ea1e90c77967'
          });
        });
        it("snefru128/2('The theory of quantum electrodynamics has now lasted for ....')", function () {
          t.testHash({
            message: "The theory of quantum electrodynamics has now lasted for\n" + "more than fifty years, and has been tested more and more\n" + "accurately over a wider and wider range of conditions.\n" + "At the present time I can proudly say that there is no\n" + "significant difference between experiment and theory!\n\n" + "Just to give you an idea of how the theory has been put\n" + "through the wringer, I'll give you some recent numbers:\n" + "experiments have Dirac's number at 1.00115965221 (with\n" + "an uncertainty of about five times as much). To give you\n" + "a feeling for the accuracy of these numbers, it comes\n" + "out something like this:  If you were to measure the\n" + "distance from Los Angeles to New York to this accuracy,\n" + "it would be exact to the thickness of a human hair.\n" + "That's how delicately quantum electrodynamics has, in the\n" + "past fifty years, been checked -- both theoretically and\n" + "experimentally.\n",
            hash: 'ef84019eff25cfb6142452df77180806'
          });
        });
        /**
         * @test {Snefru#setState}
         * @test {Snefru#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new snefru["a" /* default */](options || {
        rounds: 2
      });
    }
  }]);

  return Snefru128_2Test;
}(test_TestHasher);

/* harmony default export */ var snefru128_2Test = (snefru128_2Test_Snefru128_2Test);
// CONCATENATED MODULE: ./test/hasher/snefru128_8Test.mjs
/*global describe, it */


function snefru128_8Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { snefru128_8Test_typeof = function _typeof(obj) { return typeof obj; }; } else { snefru128_8Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return snefru128_8Test_typeof(obj); }

function snefru128_8Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function snefru128_8Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function snefru128_8Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) snefru128_8Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) snefru128_8Test_defineProperties(Constructor, staticProps); return Constructor; }

function snefru128_8Test_possibleConstructorReturn(self, call) { if (call && (snefru128_8Test_typeof(call) === "object" || typeof call === "function")) { return call; } return snefru128_8Test_assertThisInitialized(self); }

function snefru128_8Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function snefru128_8Test_getPrototypeOf(o) { snefru128_8Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return snefru128_8Test_getPrototypeOf(o); }

function snefru128_8Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) snefru128_8Test_setPrototypeOf(subClass, superClass); }

function snefru128_8Test_setPrototypeOf(o, p) { snefru128_8Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return snefru128_8Test_setPrototypeOf(o, p); }


 // The Snefru-8-128 test suite
// From Snefru version 2.5a package

var snefru128_8Test_Snefru128_8Test =
/*#__PURE__*/
function (_TestHasher) {
  snefru128_8Test_inherits(Snefru128_8Test, _TestHasher);

  function Snefru128_8Test() {
    snefru128_8Test_classCallCheck(this, Snefru128_8Test);

    return snefru128_8Test_possibleConstructorReturn(this, snefru128_8Test_getPrototypeOf(Snefru128_8Test).apply(this, arguments));
  }

  snefru128_8Test_createClass(Snefru128_8Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Snefru} */

      describe('Hash snefru128/8 tests', function () {
        it("snefru128/8('')", function () {
          t.testHash({
            message: '',
            hash: '8617f366566a011837f4fb4ba5bedea2'
          });
        });
        it("snefru128/8(0x0a)", function () {
          t.testHash({
            message: "\n",
            hash: 'd9fcb3171c097fbba8c8f12aa0906bad'
          });
        });
        it("snefru128/8('1' + 0x0a)", function () {
          t.testHash({
            message: "1\n",
            hash: '44ec420ce99c1f62feb66c53c24ae453'
          });
        });
        it("snefru128/8('12' + 0x0a)", function () {
          t.testHash({
            message: "12\n",
            hash: '7182051aa852ef6fba4b6c9c9b79b317'
          });
        });
        it("snefru128/8('123' + 0x0a)", function () {
          t.testHash({
            message: "123\n",
            hash: 'bc3a50af82bf56d6a64732bc7b050a93'
          });
        });
        it("snefru128/8('1234' + 0x0a)", function () {
          t.testHash({
            message: "1234\n",
            hash: 'c5b8a04985a8eadfb4331a8988752b77'
          });
        });
        it("snefru128/8('12345' + 0x0a)", function () {
          t.testHash({
            message: "12345\n",
            hash: 'd559a2b62f6f44111324f85208723707'
          });
        });
        it("snefru128/8('123456' + 0x0a)", function () {
          t.testHash({
            message: "123456\n",
            hash: '6cfb5e8f1da02bd167b01e4816686c30'
          });
        });
        it("snefru128/8('1234567' + 0x0a)", function () {
          t.testHash({
            message: "1234567\n",
            hash: '29aa48325f275a8a7a01ba1543c54ba5'
          });
        });
        it("snefru128/8('12345678' + 0x0a)", function () {
          t.testHash({
            message: "12345678\n",
            hash: 'be862a6b68b7df887ebe00319cbc4a47'
          });
        });
        it("snefru128/8('123456789' + 0x0a)", function () {
          t.testHash({
            message: "123456789\n",
            hash: '6103721ccd8ad565d68e90b0f8906163'
          });
        });
        it("snefru128/8('The theory of quantum electrodynamics has now lasted for ....')", function () {
          t.testHash({
            message: "The theory of quantum electrodynamics has now lasted for\n" + "more than fifty years, and has been tested more and more\n" + "accurately over a wider and wider range of conditions.\n" + "At the present time I can proudly say that there is no\n" + "significant difference between experiment and theory!\n\n" + "Just to give you an idea of how the theory has been put\n" + "through the wringer, I'll give you some recent numbers:\n" + "experiments have Dirac's number at 1.00115965221 (with\n" + "an uncertainty of about five times as much). To give you\n" + "a feeling for the accuracy of these numbers, it comes\n" + "out something like this:  If you were to measure the\n" + "distance from Los Angeles to New York to this accuracy,\n" + "it would be exact to the thickness of a human hair.\n" + "That's how delicately quantum electrodynamics has, in the\n" + "past fifty years, been checked -- both theoretically and\n" + "experimentally.\n",
            hash: '56ab6bb21a7a07892d62cb03c41dde6d'
          });
        });
        /**
         * @test {Snefru#setState}
         * @test {Snefru#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new snefru["a" /* default */](options);
    }
  }]);

  return Snefru128_8Test;
}(test_TestHasher);

/* harmony default export */ var snefru128_8Test = (snefru128_8Test_Snefru128_8Test);
// CONCATENATED MODULE: ./test/hasher/snefru256_4Test.mjs
/*global describe, it */


function snefru256_4Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { snefru256_4Test_typeof = function _typeof(obj) { return typeof obj; }; } else { snefru256_4Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return snefru256_4Test_typeof(obj); }

function snefru256_4Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function snefru256_4Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function snefru256_4Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) snefru256_4Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) snefru256_4Test_defineProperties(Constructor, staticProps); return Constructor; }

function snefru256_4Test_possibleConstructorReturn(self, call) { if (call && (snefru256_4Test_typeof(call) === "object" || typeof call === "function")) { return call; } return snefru256_4Test_assertThisInitialized(self); }

function snefru256_4Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function snefru256_4Test_getPrototypeOf(o) { snefru256_4Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return snefru256_4Test_getPrototypeOf(o); }

function snefru256_4Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) snefru256_4Test_setPrototypeOf(subClass, superClass); }

function snefru256_4Test_setPrototypeOf(o, p) { snefru256_4Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return snefru256_4Test_setPrototypeOf(o, p); }


 // The Snefru-256 test suite
// From Snefru version 2.0 package

var snefru256_4Test_Snefru256_4Test =
/*#__PURE__*/
function (_TestHasher) {
  snefru256_4Test_inherits(Snefru256_4Test, _TestHasher);

  function Snefru256_4Test() {
    snefru256_4Test_classCallCheck(this, Snefru256_4Test);

    return snefru256_4Test_possibleConstructorReturn(this, snefru256_4Test_getPrototypeOf(Snefru256_4Test).apply(this, arguments));
  }

  snefru256_4Test_createClass(Snefru256_4Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Snefru} */

      describe('Hash snefru256/4 tests', function () {
        it("snefru256/4('')", function () {
          t.testHash({
            message: '',
            hash: '5148516ae7fc7e89ad8e0b0b8d76ac782498615818fb8eeb08cbab9f07c82a73'
          });
        });
        it("snefru256/4(0x0a)", function () {
          t.testHash({
            message: "\n",
            hash: '6c504351ce7f4b7a93adb29af9781ff92150f157fee18661eef511a30fc83ddf'
          });
        });
        it("snefru256/4('1' + 0x0a)", function () {
          t.testHash({
            message: "1\n",
            hash: '65d657f885ad8b4ab35999cc3ded8b827cf71fa42542475035778910d6c2e320'
          });
        });
        it("snefru256/4('12' + 0x0a)", function () {
          t.testHash({
            message: "12\n",
            hash: '7636f3d1af139cf958f46f9966221282a444732a7de59da5d3481c6bbd6e7092'
          });
        });
        it("snefru256/4('123' + 0x0a)", function () {
          t.testHash({
            message: "123\n",
            hash: 'cd3c71635b14c7c2c24be8644baab592b8ab5b9991ee5ee5b3cf7a7fc6426ad7'
          });
        });
        it("snefru256/4('1234' + 0x0a)", function () {
          t.testHash({
            message: "1234\n",
            hash: '9ba783a1290cb21efe196a023286ece549394c751ddd607e5d67c4dc549c62eb'
          });
        });
        it("snefru256/4('12345' + 0x0a)", function () {
          t.testHash({
            message: "12345\n",
            hash: 'c9680da8ef00d2f84459a8e9b50ada71c63cae6fdcb6f774f699878330a4a1f4'
          });
        });
        it("snefru256/4('123456' + 0x0a)", function () {
          t.testHash({
            message: "123456\n",
            hash: '7656d389f980bbe894152abec6dc5f16faf21c603b8f5098861acf3cc059467b'
          });
        });
        it("snefru256/4('1234567' + 0x0a)", function () {
          t.testHash({
            message: "1234567\n",
            hash: 'd96eb5998377bb1d74a02a2f00ac9a853175250e4796af3636609747372bba80'
          });
        });
        it("snefru256/4('12345678' + 0x0a)", function () {
          t.testHash({
            message: "12345678\n",
            hash: 'b7818f092118e98a140af09a6cca4e6f1eba88e752c20174653637c9d628f33f'
          });
        });
        it("snefru256/4('123456789' + 0x0a)", function () {
          t.testHash({
            message: "123456789\n",
            hash: 'c22422491187baaa9472540008dffd5b38f015579f3f239050969991fdc1a810'
          });
        });
        it("snefru256/4('The theory of quantum electrodynamics has now lasted for ....')", function () {
          t.testHash({
            message: "The theory of quantum electrodynamics has now lasted for\n" + "more than fifty years, and has been tested more and more\n" + "accurately over a wider and wider range of conditions.\n" + "At the present time I can proudly say that there is no\n" + "significant difference between experiment and theory!\n\n" + "Just to give you an idea of how the theory has been put\n" + "through the wringer, I'll give you some recent numbers:\n" + "experiments have Dirac's number at 1.00115965221 (with\n" + "an uncertainty of about five times as much). To give you\n" + "a feeling for the accuracy of these numbers, it comes\n" + "out something like this:  If you were to measure the\n" + "distance from Los Angeles to New York to this accuracy,\n" + "it would be exact to the thickness of a human hair.\n" + "That's how delicately quantum electrodynamics has, in the\n" + "past fifty years, been checked -- both theoretically and\n" + "experimentally.\n",
            hash: 'd4303702d63e71d5e4eacdef868770576563d8c0dec0d7d1cb7ad00f39b6296a'
          });
        });
        /**
         * @test {Snefru#setState}
         * @test {Snefru#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new snefru["a" /* default */](options || {
        length: 256,
        rounds: 4
      });
    }
  }]);

  return Snefru256_4Test;
}(test_TestHasher);

/* harmony default export */ var snefru256_4Test = (snefru256_4Test_Snefru256_4Test);
// CONCATENATED MODULE: ./test/hasher/snefru256_8Test.mjs
/*global describe, it */


function snefru256_8Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { snefru256_8Test_typeof = function _typeof(obj) { return typeof obj; }; } else { snefru256_8Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return snefru256_8Test_typeof(obj); }

function snefru256_8Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function snefru256_8Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function snefru256_8Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) snefru256_8Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) snefru256_8Test_defineProperties(Constructor, staticProps); return Constructor; }

function snefru256_8Test_possibleConstructorReturn(self, call) { if (call && (snefru256_8Test_typeof(call) === "object" || typeof call === "function")) { return call; } return snefru256_8Test_assertThisInitialized(self); }

function snefru256_8Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function snefru256_8Test_getPrototypeOf(o) { snefru256_8Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return snefru256_8Test_getPrototypeOf(o); }

function snefru256_8Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) snefru256_8Test_setPrototypeOf(subClass, superClass); }

function snefru256_8Test_setPrototypeOf(o, p) { snefru256_8Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return snefru256_8Test_setPrototypeOf(o, p); }


 // The Snefru-256 test suite
// From Snefru version 2.5a package

var snefru256_8Test_Snefru256_8Test =
/*#__PURE__*/
function (_TestHasher) {
  snefru256_8Test_inherits(Snefru256_8Test, _TestHasher);

  function Snefru256_8Test() {
    snefru256_8Test_classCallCheck(this, Snefru256_8Test);

    return snefru256_8Test_possibleConstructorReturn(this, snefru256_8Test_getPrototypeOf(Snefru256_8Test).apply(this, arguments));
  }

  snefru256_8Test_createClass(Snefru256_8Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Snefru} */

      describe('Hash snefru256/8 tests', function () {
        it("snefru256/8('')", function () {
          t.testHash({
            message: '',
            hash: '8617f366566a011837f4fb4ba5bedea2b892f3ed8b894023d16ae344b2be5881'
          });
        });
        it("snefru256/8(0x0a)", function () {
          t.testHash({
            message: "\n",
            hash: '2e02687f0d45d5b9b50cb68c3f33e6843d618a1aca2d06893d3eb4e3026b5732'
          });
        });
        it("snefru256/8('1' + 0x0a)", function () {
          t.testHash({
            message: "1\n",
            hash: 'bfea4a05a2a2ef15c736d114598a20b9d9bd4d66b661e6b05ecf6a7737bdc58c'
          });
        });
        it("snefru256/8('12' + 0x0a)", function () {
          t.testHash({
            message: "12\n",
            hash: 'ac677d69761ade3f189c7aef106d5fe7392d324e19cc76d5db4a2c05f2cc2cc5'
          });
        });
        it("snefru256/8('123' + 0x0a)", function () {
          t.testHash({
            message: "123\n",
            hash: '061c76aa1db4a22c0e42945e26c48499b5400162e08c640be05d3c007c44793d'
          });
        });
        it("snefru256/8('1234' + 0x0a)", function () {
          t.testHash({
            message: "1234\n",
            hash: '1e87fe1d9c927e9e24be85e3cc73359873541640a6261793ce5a974953113f5e'
          });
        });
        it("snefru256/8('12345' + 0x0a)", function () {
          t.testHash({
            message: "12345\n",
            hash: '1b59927d85a9349a87796620fe2ff401a06a7ba48794498ebab978efc3a68912'
          });
        });
        it("snefru256/8('123456' + 0x0a)", function () {
          t.testHash({
            message: "123456\n",
            hash: '28e9d9bc35032b68faeda88101ecb2524317e9da111b0e3e7094107212d9cf72'
          });
        });
        it("snefru256/8('1234567' + 0x0a)", function () {
          t.testHash({
            message: "1234567\n",
            hash: 'f7fff4ee74fd1b8d6b3267f84e47e007f029d13b8af7e37e34d13b469b8f248f'
          });
        });
        it("snefru256/8('12345678' + 0x0a)", function () {
          t.testHash({
            message: "12345678\n",
            hash: 'ee7d64b0102b2205e98926613b200185559d08be6ad787da717c968744e11af3'
          });
        });
        it("snefru256/8('123456789' + 0x0a)", function () {
          t.testHash({
            message: "123456789\n",
            hash: '4ca72639e40e9ab9c0c3f523c4449b3911632d374c124d7702192ec2e4e0b7a3'
          });
        });
        it("snefru256/8('The theory of quantum electrodynamics has now lasted for ....')", function () {
          t.testHash({
            message: "The theory of quantum electrodynamics has now lasted for\n" + "more than fifty years, and has been tested more and more\n" + "accurately over a wider and wider range of conditions.\n" + "At the present time I can proudly say that there is no\n" + "significant difference between experiment and theory!\n\n" + "Just to give you an idea of how the theory has been put\n" + "through the wringer, I'll give you some recent numbers:\n" + "experiments have Dirac's number at 1.00115965221 (with\n" + "an uncertainty of about five times as much). To give you\n" + "a feeling for the accuracy of these numbers, it comes\n" + "out something like this:  If you were to measure the\n" + "distance from Los Angeles to New York to this accuracy,\n" + "it would be exact to the thickness of a human hair.\n" + "That's how delicately quantum electrodynamics has, in the\n" + "past fifty years, been checked -- both theoretically and\n" + "experimentally.\n",
            hash: '5e8a32ed1998b611f5f096960c65e820da93a9a424d2715130c1e45483f1839c'
          });
        });
        /**
         * @test {Snefru#setState}
         * @test {Snefru#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new snefru["a" /* default */](options || {
        length: 256
      });
    }
  }]);

  return Snefru256_8Test;
}(test_TestHasher);

/* harmony default export */ var snefru256_8Test = (snefru256_8Test_Snefru256_8Test);
// EXTERNAL MODULE: ./src/hasher/whirlpool.mjs
var whirlpool = __webpack_require__(12);

// CONCATENATED MODULE: ./test/hasher/whirlpool-0Test.mjs
/*global describe, it */


function whirlpool_0Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { whirlpool_0Test_typeof = function _typeof(obj) { return typeof obj; }; } else { whirlpool_0Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return whirlpool_0Test_typeof(obj); }

function whirlpool_0Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function whirlpool_0Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function whirlpool_0Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) whirlpool_0Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) whirlpool_0Test_defineProperties(Constructor, staticProps); return Constructor; }

function whirlpool_0Test_possibleConstructorReturn(self, call) { if (call && (whirlpool_0Test_typeof(call) === "object" || typeof call === "function")) { return call; } return whirlpool_0Test_assertThisInitialized(self); }

function whirlpool_0Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function whirlpool_0Test_getPrototypeOf(o) { whirlpool_0Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return whirlpool_0Test_getPrototypeOf(o); }

function whirlpool_0Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) whirlpool_0Test_setPrototypeOf(subClass, superClass); }

function whirlpool_0Test_setPrototypeOf(o, p) { whirlpool_0Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return whirlpool_0Test_setPrototypeOf(o, p); }


 // The WHIRLPOOL-0 test suite
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/whirlpool/Whirlpool-Orig-512.verified.test-vectors

var whirlpool_0Test_Whirlpool0Test =
/*#__PURE__*/
function (_TestHasher) {
  whirlpool_0Test_inherits(Whirlpool0Test, _TestHasher);

  function Whirlpool0Test() {
    whirlpool_0Test_classCallCheck(this, Whirlpool0Test);

    return whirlpool_0Test_possibleConstructorReturn(this, whirlpool_0Test_getPrototypeOf(Whirlpool0Test).apply(this, arguments));
  }

  whirlpool_0Test_createClass(Whirlpool0Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Whirlpool} */

      describe('Hash whirlpool-0 tests', function () {
        it("whirlpool-0('')", function () {
          t.testHash({
            message: '',
            hash: 'b3e1ab6eaf640a34f784593f2074416accd3b8e62c620175fca0997b1ba2347339aa0d79e754c308209ea36811dfa40c1c32f1a2b9004725d987d3635165d3c8'
          });
        });
        it("whirlpool-0('a')", function () {
          t.testHash({
            message: 'a',
            hash: 'f4b620445ae62431dbd6dbcec64d2a3031cd2f48df5e755f30b3d069929ed4b4eda0ae65441bc86746021fb7f2167f84d67566efaba003f0abb67a42a2ce5b13'
          });
        });
        it("whirlpool-0('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: '54ee18b0bbd4dd38a211699f2829793156e5842df502a2a25995c6c541f28cc050ff57d4af772dee7cedcc4c34c3b8ec06446c6657f2f36c2c06464399879b86'
          });
        });
        it("whirlpool-0('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: '29e158ba336ce7f930115178a6c86019f0f413adb283d8f0798af06ca0a06d6d6f295a333b1c24bda2f429ac918a3748aef90f7a2c8bfb084d5f979cf4e7b2b5'
          });
        });
        it("whirlpool-0('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: '5ac9757e1407432daf348a972b8ad4a65c1123cf1f9b779c1ae7ee2d540f30b3cefa8f98dca5fbb42084c5c2f161a7b40eb6b4a1fc7f9aaab92a4bb6002edc5e'
          });
        });
        it("whirlpool-0('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: 'cae4175f09753de84974cfa968621092fe41ee9de913919c2b452e6cb424056721d640e563f628f29dd3bd0030837ae4ac14aa17308505a92e5f7a92f112be75'
          });
        });
        it("whirlpool-0('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: 'e5965b4565b041a0d459610e5e48e944c4830cd16feba02d9d263e7da8de6a6b88966709bf28a5328d928312e7a172da4cff72fe6de02277dae4b1dba49689a2'
          });
        });
        it("whirlpool-0('The quick brown fox jumps over the lazy dog')", function () {
          t.testHash({
            message: 'The quick brown fox jumps over the lazy dog',
            hash: '4f8f5cb531e3d49a61cf417cd133792ccfa501fd8da53ee368fed20e5fe0248c3a0b64f98a6533cee1da614c3a8ddec791ff05fee6d971d57c1348320f4eb42d'
          });
        });
        /**
         * @test {Whirlpool#setState}
         * @test {Whirlpool#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new whirlpool["a" /* default */](options || {
        type: '0'
      });
    }
  }]);

  return Whirlpool0Test;
}(test_TestHasher);

/* harmony default export */ var whirlpool_0Test = (whirlpool_0Test_Whirlpool0Test);
// CONCATENATED MODULE: ./test/hasher/whirlpool-tTest.mjs
/*global describe, it */


function whirlpool_tTest_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { whirlpool_tTest_typeof = function _typeof(obj) { return typeof obj; }; } else { whirlpool_tTest_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return whirlpool_tTest_typeof(obj); }

function whirlpool_tTest_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function whirlpool_tTest_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function whirlpool_tTest_createClass(Constructor, protoProps, staticProps) { if (protoProps) whirlpool_tTest_defineProperties(Constructor.prototype, protoProps); if (staticProps) whirlpool_tTest_defineProperties(Constructor, staticProps); return Constructor; }

function whirlpool_tTest_possibleConstructorReturn(self, call) { if (call && (whirlpool_tTest_typeof(call) === "object" || typeof call === "function")) { return call; } return whirlpool_tTest_assertThisInitialized(self); }

function whirlpool_tTest_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function whirlpool_tTest_getPrototypeOf(o) { whirlpool_tTest_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return whirlpool_tTest_getPrototypeOf(o); }

function whirlpool_tTest_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) whirlpool_tTest_setPrototypeOf(subClass, superClass); }

function whirlpool_tTest_setPrototypeOf(o, p) { whirlpool_tTest_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return whirlpool_tTest_setPrototypeOf(o, p); }


 // The WHIRLPOOL-T test suite
// https://www.cosic.esat.kuleuven.be/nessie/testvectors/hash/whirlpool/Whirlpool-Tweak-512.verified.test-vectors

var whirlpool_tTest_WhirlpoolTTest =
/*#__PURE__*/
function (_TestHasher) {
  whirlpool_tTest_inherits(WhirlpoolTTest, _TestHasher);

  function WhirlpoolTTest() {
    whirlpool_tTest_classCallCheck(this, WhirlpoolTTest);

    return whirlpool_tTest_possibleConstructorReturn(this, whirlpool_tTest_getPrototypeOf(WhirlpoolTTest).apply(this, arguments));
  }

  whirlpool_tTest_createClass(WhirlpoolTTest, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Whirlpool} */

      describe('Hash whirlpool-t tests', function () {
        it("whirlpool-t('')", function () {
          t.testHash({
            message: '',
            hash: '470f0409abaa446e49667d4ebe12a14387cedbd10dd17b8243cad550a089dc0feea7aa40f6c2aaab71c6ebd076e43c7cfca0ad32567897dcb5969861049a0f5a'
          });
        });
        it("whirlpool-t('a')", function () {
          t.testHash({
            message: 'a',
            hash: 'b290e0e7931025ed37043ad568f0036b40e6bff8f7455868780f47ef7b5d693e62448029a9351cd85ac29cb0725e4cfeb996a92f2b8da8768483ac58ec0e492c'
          });
        });
        it("whirlpool-t('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: '8afc0527dcc0a19623860ef2369d0e25de8ebe2abaa40f598afaf6b07c002ed73e4fc0fc220fd4f54f74b5d6b07aa57764c3dbdcc2cdd919d89fa8155a34b841'
          });
        });
        it("whirlpool-t('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: '817eadf8efca5afbc11f71d0814e03a8d569c90f748c8603597a7a0de3c8d55f528199010218249517b58b14bee523515608754b53a3cca35c0865ba5e361431'
          });
        });
        it("whirlpool-t('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: '4afc2b07bddc8417635fcb43e695e16f45e116c226dd84339eb95c2ccb39e7acbe1af8f7b1f3bd380077e71929498bc968200371f9299015434d1df109a0aa1d'
          });
        });
        it("whirlpool-t('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: '0f960ec9ab7d0c7e355a423d1ef4911a39797c836a71414276afeb8fa475dba0c348547143162f3212edf1fb8d8c652a11a579a399c2dbd837fe8608f5096131'
          });
        });
        it("whirlpool-t('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: '6ae43784c69d01c273bba40f8411495167909e0c1acc241473d44e27bc8641e646535d38fce20604941988c387c201cff199c8fa2afbedd036d66202892a7eee'
          });
        });
        it("whirlpool-t('The quick brown fox jumps over the lazy dog')", function () {
          t.testHash({
            message: 'The quick brown fox jumps over the lazy dog',
            hash: '3ccf8252d8bbb258460d9aa999c06ee38e67cb546cffcf48e91f700f6fc7c183ac8cc3d3096dd30a35b01f4620a1e3a20d79cd5168544d9e1b7cdf49970e87f1'
          });
        });
        /**
         * @test {Whirlpool#setState}
         * @test {Whirlpool#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new whirlpool["a" /* default */](options || {
        type: 't'
      });
    }
  }]);

  return WhirlpoolTTest;
}(test_TestHasher);

/* harmony default export */ var whirlpool_tTest = (whirlpool_tTest_WhirlpoolTTest);
// CONCATENATED MODULE: ./test/hasher/whirlpoolTest.mjs
/*global describe, it */


function whirlpoolTest_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { whirlpoolTest_typeof = function _typeof(obj) { return typeof obj; }; } else { whirlpoolTest_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return whirlpoolTest_typeof(obj); }

function whirlpoolTest_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function whirlpoolTest_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function whirlpoolTest_createClass(Constructor, protoProps, staticProps) { if (protoProps) whirlpoolTest_defineProperties(Constructor.prototype, protoProps); if (staticProps) whirlpoolTest_defineProperties(Constructor, staticProps); return Constructor; }

function whirlpoolTest_possibleConstructorReturn(self, call) { if (call && (whirlpoolTest_typeof(call) === "object" || typeof call === "function")) { return call; } return whirlpoolTest_assertThisInitialized(self); }

function whirlpoolTest_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function whirlpoolTest_getPrototypeOf(o) { whirlpoolTest_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return whirlpoolTest_getPrototypeOf(o); }

function whirlpoolTest_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) whirlpoolTest_setPrototypeOf(subClass, superClass); }

function whirlpoolTest_setPrototypeOf(o, p) { whirlpoolTest_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return whirlpoolTest_setPrototypeOf(o, p); }


 // The WHIRLPOOL test suite
// http://www.larc.usp.br/~pbarreto/WhirlpoolPage.html

var whirlpoolTest_WhirlpoolTest =
/*#__PURE__*/
function (_TestHasher) {
  whirlpoolTest_inherits(WhirlpoolTest, _TestHasher);

  function WhirlpoolTest() {
    whirlpoolTest_classCallCheck(this, WhirlpoolTest);

    return whirlpoolTest_possibleConstructorReturn(this, whirlpoolTest_getPrototypeOf(WhirlpoolTest).apply(this, arguments));
  }

  whirlpoolTest_createClass(WhirlpoolTest, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Whirlpool} */

      describe('Hash whirlpool tests', function () {
        it("whirlpool('')", function () {
          t.testHash({
            message: '',
            hash: '19fa61d75522a4669b44e39c1d2e1726c530232130d407f89afee0964997f7a73e83be698b288febcf88e3e03c4f0757ea8964e59b63d93708b138cc42a66eb3'
          });
        });
        it("whirlpool('a')", function () {
          t.testHash({
            message: 'a',
            hash: '8aca2602792aec6f11a67206531fb7d7f0dff59413145e6973c45001d0087b42d11bc645413aeff63a42391a39145a591a92200d560195e53b478584fdae231a'
          });
        });
        it("whirlpool('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: '4e2448a4c6f486bb16b6562c73b4020bf3043e3a731bce721ae1b303d97e6d4c7181eebdb6c57e277d0e34957114cbd6c797fc9d95d8b582d225292076d4eef5'
          });
        });
        it("whirlpool('message digest')", function () {
          t.testHash({
            message: 'message digest',
            hash: '378c84a4126e2dc6e56dcc7458377aac838d00032230f53ce1f5700c0ffb4d3b8421557659ef55c106b4b52ac5a4aaa692ed920052838f3362e86dbd37a8903e'
          });
        });
        it("whirlpool('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: 'f1d754662636ffe92c82ebb9212a484a8d38631ead4238f5442ee13b8054e41b08bf2a9251c30b6a0b8aae86177ab4a6f68f673e7207865d5d9819a3dba4eb3b'
          });
        });
        it("whirlpool('A..Za..z0..9')", function () {
          t.testHash({
            message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            hash: 'dc37e008cf9ee69bf11f00ed9aba26901dd7c28cdec066cc6af42e40f82f3a1e08eba26629129d8fb7cb57211b9281a65517cc879d7b962142c65f5a7af01467'
          });
        });
        it("whirlpool('1234567890' x 8)", function () {
          t.testHash({
            message: new Array(9).join('1234567890'),
            hash: '466ef18babb0154d25b9d38a6414f5c08784372bccb204d6549c4afadb6014294d5bd8df2a6c44e538cd047b2681a51a2c60481e88c5a20b2c2a80cf3a9a083b'
          });
        });
        it("whirlpool('The quick brown fox jumps over the lazy dog')", function () {
          t.testHash({
            message: 'The quick brown fox jumps over the lazy dog',
            hash: 'b97de512e91e3828b40d2b0fdce9ceb3c4a71f9bea8d88e75c4fa854df36725fd2b52eb6544edcacd6f8beddfea403cb55ae31f03ad62a5ef54e42ee82c3fb35'
          });
        });
        it("whirlpool('abcdbcdecdefdefgefghfghighijhijk')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijk',
            hash: '2a987ea40f917061f5d6f0a0e4644f488a7a5a52deee656207c562f988e95c6916bdc8031bc5be1b7b947639fe050b56939baaa0adff9ae6745b7b181c3be3fd'
          });
        });
        it("whirlpool(0x00 x 31)", function () {
          t.testHash({
            message: new Array(32).join("\x00"),
            hash: '3e3f188f8febbeb17a933feaf7fe53a4858d80c915ad6a1418f0318e68d49b4e459223cd414e0fbc8a57578fd755d86e827abef4070fc1503e25d99e382f72ba'
          });
        });
        it("whirlpool(0x00 x 32)", function () {
          t.testHash({
            message: new Array(33).join("\x00"),
            hash: '961b5f299f750f880fca004bdf2882e2fe1b491b0c0ee7e2b514c5dfdd53292dbdbee17e6d3bb5824cdec1867cc7090963be8fff0c1d8ed5864e07cacb50d68a'
          });
        });
        it("whirlpool(0x00 x 33)", function () {
          t.testHash({
            message: new Array(34).join("\x00"),
            hash: '54a9c8784dbf6c2618ca32057b76b9d6733c19f4a377cb7e892d057bf73e83fbaf6ac147a65fef0991dc296955440ad0b793f81c5cf71e29669ce3f19195aaf7'
          });
        });
        /**
         * @test {Whirlpool#setState}
         * @test {Whirlpool#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new whirlpool["a" /* default */](options);
    }
  }]);

  return WhirlpoolTest;
}(test_TestHasher);

/* harmony default export */ var whirlpoolTest = (whirlpoolTest_WhirlpoolTest);
// EXTERNAL MODULE: ./src/hasher/sm3.mjs
var sm3 = __webpack_require__(24);

// CONCATENATED MODULE: ./test/hasher/sm3Test.mjs
/*global describe, it */


function sm3Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { sm3Test_typeof = function _typeof(obj) { return typeof obj; }; } else { sm3Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return sm3Test_typeof(obj); }

function sm3Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sm3Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function sm3Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) sm3Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) sm3Test_defineProperties(Constructor, staticProps); return Constructor; }

function sm3Test_possibleConstructorReturn(self, call) { if (call && (sm3Test_typeof(call) === "object" || typeof call === "function")) { return call; } return sm3Test_assertThisInitialized(self); }

function sm3Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function sm3Test_getPrototypeOf(o) { sm3Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return sm3Test_getPrototypeOf(o); }

function sm3Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) sm3Test_setPrototypeOf(subClass, superClass); }

function sm3Test_setPrototypeOf(o, p) { sm3Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return sm3Test_setPrototypeOf(o, p); }


 // The SM3 test suite
// https://tools.ietf.org/id/draft-oscca-cfrg-sm3-02.html#rfc.appendix.A.1
// https://github.com/adamws/oscca-sm3/blob/master/example/example.c
// https://dev.gnupg.org/source/libgcrypt/browse/master/tests/basic.c;ab57613f10ad57d2fec648017c18d7abb189863b$10642

var sm3Test_Sm3Test =
/*#__PURE__*/
function (_TestHasher) {
  sm3Test_inherits(Sm3Test, _TestHasher);

  function Sm3Test() {
    sm3Test_classCallCheck(this, Sm3Test);

    return sm3Test_possibleConstructorReturn(this, sm3Test_getPrototypeOf(Sm3Test).apply(this, arguments));
  }

  sm3Test_createClass(Sm3Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /** @test {Sm3} */

      describe('Hash sm3 tests', function () {
        it("sm3('')", function () {
          t.testHash({
            message: '',
            hash: '1ab21d8355cfa17f8e61194831e81a8f22bec8c728fefb747ed035eb5082aa2b'
          });
        });
        it("sm3('a')", function () {
          t.testHash({
            message: 'a',
            hash: '623476ac18f65a2909e43c7fec61b49c7e764a91a18ccb82f1917a29c86c5e88'
          });
        });
        it("sm3('abc')", function () {
          t.testHash({
            message: 'abc',
            hash: '66c7f0f462eeedd9d1f2d46bdc10e4e24167c4875cf2f7a2297da02b8f4ba8e0'
          });
        });
        it("sm3('abcd' x 16)", function () {
          t.testHash({
            message: new Array(17).join('abcd'),
            hash: 'debe9ff92275b8a138604889c18e5a4d6fdb70e5387e5765293dcba39c0c5732'
          });
        });
        it("sm3('a..z')", function () {
          t.testHash({
            message: 'abcdefghijklmnopqrstuvwxyz',
            hash: 'b80fe97a4da24afc277564f66a359ef440462ad28dcc6d63adb24d5c20a61595'
          });
        });
        it("sm3('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
          t.testHash({
            message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
            hash: '639b6cc5e64d9e37a390b192df4fa1ea0720ab747ff692b9f38c4e66ad7b8c05'
          });
        });
        /**
         * @test {Sm3#setState}
         * @test {Sm3#getState}
         */

        it('hash setState() getState()', function () {
          t.testSetGetState();
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sm3["a" /* default */]();
    }
  }]);

  return Sm3Test;
}(test_TestHasher);

/* harmony default export */ var sm3Test = (sm3Test_Sm3Test);
// EXTERNAL MODULE: ./src/mac/hmac.mjs
var mac_hmac = __webpack_require__(20);

// CONCATENATED MODULE: ./test/TestHmac.mjs


function TestHmac_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TestHmac_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TestHmac_createClass(Constructor, protoProps, staticProps) { if (protoProps) TestHmac_defineProperties(Constructor.prototype, protoProps); if (staticProps) TestHmac_defineProperties(Constructor, staticProps); return Constructor; }






var TestHmac_TestHmac =
/*#__PURE__*/
function () {
  function TestHmac() {
    TestHmac_classCallCheck(this, TestHmac);
  }

  TestHmac_createClass(TestHmac, [{
    key: "testHmac",

    /**
     * Test hmac
     *
     * @param {Object} test
     */
    value: function testHmac(test) {
      var hash = this.getInstance(test.options || {});
      var hmac = new mac_hmac["a" /* default */](test.key, hash);
      hmac.update(test.message);
      assert.equal(Object(hex["a" /* toHex */])(hmac.finalize()), test.hash);
    }
    /**
     * @param {Object|undefined} options
     * @returns {Hasher}
     */

  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new hasher_hasher["a" /* default */](options);
    }
  }]);

  return TestHmac;
}();

/* harmony default export */ var test_TestHmac = (TestHmac_TestHmac);
// CONCATENATED MODULE: ./test/mac/hmac-has160Test.mjs
/*global describe, it */


function hmac_has160Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hmac_has160Test_typeof = function _typeof(obj) { return typeof obj; }; } else { hmac_has160Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hmac_has160Test_typeof(obj); }

function hmac_has160Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hmac_has160Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hmac_has160Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) hmac_has160Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) hmac_has160Test_defineProperties(Constructor, staticProps); return Constructor; }

function hmac_has160Test_possibleConstructorReturn(self, call) { if (call && (hmac_has160Test_typeof(call) === "object" || typeof call === "function")) { return call; } return hmac_has160Test_assertThisInitialized(self); }

function hmac_has160Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hmac_has160Test_getPrototypeOf(o) { hmac_has160Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return hmac_has160Test_getPrototypeOf(o); }

function hmac_has160Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) hmac_has160Test_setPrototypeOf(subClass, superClass); }

function hmac_has160Test_setPrototypeOf(o, p) { hmac_has160Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return hmac_has160Test_setPrototypeOf(o, p); }


 // The HMAC-HAS160 test suite
// https://files.randombit.net/misc/has160.pdf

var hmac_has160Test_HmacHas160Test =
/*#__PURE__*/
function (_TestHmac) {
  hmac_has160Test_inherits(HmacHas160Test, _TestHmac);

  function HmacHas160Test() {
    hmac_has160Test_classCallCheck(this, HmacHas160Test);

    return hmac_has160Test_possibleConstructorReturn(this, hmac_has160Test_getPrototypeOf(HmacHas160Test).apply(this, arguments));
  }

  hmac_has160Test_createClass(HmacHas160Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /**
       * @test {Hmac}
       * @test {Has160}
       */

      describe('Hmac has160 tests', function () {
        it("hmac-has160('Hi There', 0x0b x 20)", function () {
          t.testHmac({
            message: 'Hi There',
            key: new Array(21).join("\x0b"),
            hash: 'f5b44115a53f716b6f488de1098ee7c251418623'
          });
        });
        it("hmac-has160('what do ya want for nothing?', 'Jefe')", function () {
          t.testHmac({
            message: 'what do ya want for nothing?',
            key: 'Jefe',
            hash: 'a74547c1ef0aa147c7428ab7e71664549be2a412'
          });
        });
        it("hmac-has160(0xdd x 50, 0xaa x 20)", function () {
          t.testHmac({
            message: new Array(51).join("\xdd"),
            key: new Array(21).join("\xaa"),
            hash: 'e4c91bc71782fa44a56be1a34aae167e8ffc9734'
          });
        });
        it("hmac-has160(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)", function () {
          t.testHmac({
            message: new Array(51).join("\xcd"),
            key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
            hash: '14d1055da875222053bf1180bbef8892eba3ac30'
          });
        });
        it("hmac-has160('Test With Truncation', 0x0c x 20)", function () {
          t.testHmac({
            message: 'Test With Truncation',
            key: new Array(21).join("\x0c"),
            hash: '124131a293f1fdf3d6b11e2b7f7a1f5b12e42d58'
          });
        });
        it("hmac-has160('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 80)", function () {
          t.testHmac({
            message: 'Test Using Larger Than Block-Size Key - Hash Key First',
            key: new Array(81).join("\xaa"),
            hash: '63750d67af40e3fde33526545d300972a1527053'
          });
        });
        it("hmac-has160('Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data', 0xaa x 80)", function () {
          t.testHmac({
            message: 'Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data',
            key: new Array(81).join("\xaa"),
            hash: '1bdb821e399e208352c64f0655f6601e2a8a087c'
          });
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new has160["a" /* default */]();
    }
  }]);

  return HmacHas160Test;
}(test_TestHmac);

/* harmony default export */ var hmac_has160Test = (hmac_has160Test_HmacHas160Test);
// CONCATENATED MODULE: ./test/mac/hmac-md5Test.mjs
/*global describe, it */


function hmac_md5Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hmac_md5Test_typeof = function _typeof(obj) { return typeof obj; }; } else { hmac_md5Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hmac_md5Test_typeof(obj); }

function hmac_md5Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hmac_md5Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hmac_md5Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) hmac_md5Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) hmac_md5Test_defineProperties(Constructor, staticProps); return Constructor; }

function hmac_md5Test_possibleConstructorReturn(self, call) { if (call && (hmac_md5Test_typeof(call) === "object" || typeof call === "function")) { return call; } return hmac_md5Test_assertThisInitialized(self); }

function hmac_md5Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hmac_md5Test_getPrototypeOf(o) { hmac_md5Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return hmac_md5Test_getPrototypeOf(o); }

function hmac_md5Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) hmac_md5Test_setPrototypeOf(subClass, superClass); }

function hmac_md5Test_setPrototypeOf(o, p) { hmac_md5Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return hmac_md5Test_setPrototypeOf(o, p); }


 // The HMAC-MD5 test suite
// https://tools.ietf.org/html/rfc2202

var hmac_md5Test_HmacMd5Test =
/*#__PURE__*/
function (_TestHmac) {
  hmac_md5Test_inherits(HmacMd5Test, _TestHmac);

  function HmacMd5Test() {
    hmac_md5Test_classCallCheck(this, HmacMd5Test);

    return hmac_md5Test_possibleConstructorReturn(this, hmac_md5Test_getPrototypeOf(HmacMd5Test).apply(this, arguments));
  }

  hmac_md5Test_createClass(HmacMd5Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /**
       * @test {Hmac}
       * @test {Md5}
       */

      describe('Hmac md5 tests', function () {
        it("hmac-md5('Hi There', 0x0b x 16)", function () {
          t.testHmac({
            message: 'Hi There',
            key: new Array(17).join("\x0b"),
            hash: '9294727a3638bb1c13f48ef8158bfc9d'
          });
        });
        it("hmac-md5('what do ya want for nothing?', 'Jefe')", function () {
          t.testHmac({
            message: 'what do ya want for nothing?',
            key: 'Jefe',
            hash: '750c783e6ab0b503eaa86e310a5db738'
          });
        });
        it("hmac-md5(0xdd x 50, 0xaa x 16)", function () {
          t.testHmac({
            message: new Array(51).join("\xdd"),
            key: new Array(17).join("\xaa"),
            hash: '56be34521d144c88dbb8c733f0e8b3f6'
          });
        });
        it("hmac-md5(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)", function () {
          t.testHmac({
            message: new Array(51).join("\xcd"),
            key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
            hash: '697eaf0aca3a3aea3a75164746ffaa79'
          });
        });
        it("hmac-md5('Test With Truncation', 0x0c x 16)", function () {
          t.testHmac({
            message: 'Test With Truncation',
            key: new Array(17).join("\x0c"),
            hash: '56461ef2342edc00f9bab995690efd4c'
          });
        });
        it("hmac-md5('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 80)", function () {
          t.testHmac({
            message: 'Test Using Larger Than Block-Size Key - Hash Key First',
            key: new Array(81).join("\xaa"),
            hash: '6b1ab7fe4bd7bf8f0b62e6ce61b9d0cd'
          });
        });
        it("hmac-md5('Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data', 0xaa x 80)", function () {
          t.testHmac({
            message: 'Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data',
            key: new Array(81).join("\xaa"),
            hash: '6f630fad67cda0ee1fb1f562db3aa53e'
          });
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new md5["a" /* default */]();
    }
  }]);

  return HmacMd5Test;
}(test_TestHmac);

/* harmony default export */ var hmac_md5Test = (hmac_md5Test_HmacMd5Test);
// CONCATENATED MODULE: ./test/mac/hmac-sha1Test.mjs
/*global describe, it */


function hmac_sha1Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hmac_sha1Test_typeof = function _typeof(obj) { return typeof obj; }; } else { hmac_sha1Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hmac_sha1Test_typeof(obj); }

function hmac_sha1Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hmac_sha1Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hmac_sha1Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) hmac_sha1Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) hmac_sha1Test_defineProperties(Constructor, staticProps); return Constructor; }

function hmac_sha1Test_possibleConstructorReturn(self, call) { if (call && (hmac_sha1Test_typeof(call) === "object" || typeof call === "function")) { return call; } return hmac_sha1Test_assertThisInitialized(self); }

function hmac_sha1Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hmac_sha1Test_getPrototypeOf(o) { hmac_sha1Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return hmac_sha1Test_getPrototypeOf(o); }

function hmac_sha1Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) hmac_sha1Test_setPrototypeOf(subClass, superClass); }

function hmac_sha1Test_setPrototypeOf(o, p) { hmac_sha1Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return hmac_sha1Test_setPrototypeOf(o, p); }


 // The HMAC-SHA1 test suite
// https://tools.ietf.org/html/rfc2202

var hmac_sha1Test_HmacSha1Test =
/*#__PURE__*/
function (_TestHmac) {
  hmac_sha1Test_inherits(HmacSha1Test, _TestHmac);

  function HmacSha1Test() {
    hmac_sha1Test_classCallCheck(this, HmacSha1Test);

    return hmac_sha1Test_possibleConstructorReturn(this, hmac_sha1Test_getPrototypeOf(HmacSha1Test).apply(this, arguments));
  }

  hmac_sha1Test_createClass(HmacSha1Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /**
       * @test {Hmac}
       * @test {Sha1}
       */

      describe('Hmac sha1 tests', function () {
        it("hmac-sha1('Hi There', 0x0b x 20)", function () {
          t.testHmac({
            message: 'Hi There',
            key: new Array(21).join("\x0b"),
            hash: 'b617318655057264e28bc0b6fb378c8ef146be00'
          });
        });
        it("hmac-sha1('what do ya want for nothing?', 'Jefe')", function () {
          t.testHmac({
            message: 'what do ya want for nothing?',
            key: 'Jefe',
            hash: 'effcdf6ae5eb2fa2d27416d5f184df9c259a7c79'
          });
        });
        it("hmac-sha1(0xdd x 50, 0xaa x 20)", function () {
          t.testHmac({
            message: new Array(51).join("\xdd"),
            key: new Array(21).join("\xaa"),
            hash: '125d7342b9ac11cd91a39af48aa17b4f63f175d3'
          });
        });
        it("hmac-sha1(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)", function () {
          t.testHmac({
            message: new Array(51).join("\xcd"),
            key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
            hash: '4c9007f4026250c6bc8414f9bf50c86c2d7235da'
          });
        });
        it("hmac-sha1('Test With Truncation', 0x0c x 20)", function () {
          t.testHmac({
            message: 'Test With Truncation',
            key: new Array(21).join("\x0c"),
            hash: '4c1a03424b55e07fe7f27be1d58bb9324a9a5a04'
          });
        });
        it("hmac-sha1('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 80)", function () {
          t.testHmac({
            message: 'Test Using Larger Than Block-Size Key - Hash Key First',
            key: new Array(81).join("\xaa"),
            hash: 'aa4ae5e15272d00e95705637ce8a3b55ed402112'
          });
        });
        it("hmac-sha1('Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data', 0xaa x 80)", function () {
          t.testHmac({
            message: 'Test Using Larger Than Block-Size Key and Larger Than One Block-Size Data',
            key: new Array(81).join("\xaa"),
            hash: 'e8e99d0f45237d786d6bbaa7965c7808bbff1a91'
          });
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha1["a" /* default */]();
    }
  }]);

  return HmacSha1Test;
}(test_TestHmac);

/* harmony default export */ var hmac_sha1Test = (hmac_sha1Test_HmacSha1Test);
// CONCATENATED MODULE: ./test/mac/hmac-sha224Test.mjs
/*global describe, it */


function hmac_sha224Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hmac_sha224Test_typeof = function _typeof(obj) { return typeof obj; }; } else { hmac_sha224Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hmac_sha224Test_typeof(obj); }

function hmac_sha224Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hmac_sha224Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hmac_sha224Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) hmac_sha224Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) hmac_sha224Test_defineProperties(Constructor, staticProps); return Constructor; }

function hmac_sha224Test_possibleConstructorReturn(self, call) { if (call && (hmac_sha224Test_typeof(call) === "object" || typeof call === "function")) { return call; } return hmac_sha224Test_assertThisInitialized(self); }

function hmac_sha224Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hmac_sha224Test_getPrototypeOf(o) { hmac_sha224Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return hmac_sha224Test_getPrototypeOf(o); }

function hmac_sha224Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) hmac_sha224Test_setPrototypeOf(subClass, superClass); }

function hmac_sha224Test_setPrototypeOf(o, p) { hmac_sha224Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return hmac_sha224Test_setPrototypeOf(o, p); }


 // The HMAC-SHA224 test suite
// https://tools.ietf.org/html/rfc4231

var hmac_sha224Test_HmacSha224Test =
/*#__PURE__*/
function (_TestHmac) {
  hmac_sha224Test_inherits(HmacSha224Test, _TestHmac);

  function HmacSha224Test() {
    hmac_sha224Test_classCallCheck(this, HmacSha224Test);

    return hmac_sha224Test_possibleConstructorReturn(this, hmac_sha224Test_getPrototypeOf(HmacSha224Test).apply(this, arguments));
  }

  hmac_sha224Test_createClass(HmacSha224Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /**
       * @test {Hmac}
       * @test {Sha256}
       */

      describe('Hmac sha224 tests', function () {
        it("hmac-sha224('Hi There', 0x0b x 20)", function () {
          t.testHmac({
            message: 'Hi There',
            key: new Array(21).join("\x0b"),
            hash: '896fb1128abbdf196832107cd49df33f47b4b1169912ba4f53684b22'
          });
        });
        it("hmac-sha224('what do ya want for nothing?', 'Jefe')", function () {
          t.testHmac({
            message: 'what do ya want for nothing?',
            key: 'Jefe',
            hash: 'a30e01098bc6dbbf45690f3a7e9e6d0f8bbea2a39e6148008fd05e44'
          });
        });
        it("hmac-sha224(0xdd x 50, 0xaa x 20)", function () {
          t.testHmac({
            message: new Array(51).join("\xdd"),
            key: new Array(21).join("\xaa"),
            hash: '7fb3cb3588c6c1f6ffa9694d7d6ad2649365b0c1f65d69d1ec8333ea'
          });
        });
        it("hmac-sha224(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)", function () {
          t.testHmac({
            message: new Array(51).join("\xcd"),
            key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
            hash: '6c11506874013cac6a2abc1bb382627cec6a90d86efc012de7afec5a'
          });
        });
        it("hmac-sha224('Test With Truncation', 0x0c x 20)", function () {
          t.testHmac({
            message: 'Test With Truncation',
            key: new Array(21).join("\x0c"),
            hash: '0e2aea68a90c8d37c988bcdb9fca6fa8099cd857c7ec4a1815cac54c'
          });
        });
        it("hmac-sha224('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 131)", function () {
          t.testHmac({
            message: 'Test Using Larger Than Block-Size Key - Hash Key First',
            key: new Array(132).join("\xaa"),
            hash: '95e9a0db962095adaebe9b2d6f0dbce2d499f112f2d2b7273fa6870e'
          });
        });
        it("hmac-sha224('This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.', 0xaa x 131)", function () {
          t.testHmac({
            message: 'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.',
            key: new Array(132).join("\xaa"),
            hash: '3a854166ac5d9f023f54d517d0b39dbd946770db9c2b95c9f6f565d1'
          });
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha256["a" /* default */]({
        length: 224
      });
    }
  }]);

  return HmacSha224Test;
}(test_TestHmac);

/* harmony default export */ var hmac_sha224Test = (hmac_sha224Test_HmacSha224Test);
// CONCATENATED MODULE: ./test/mac/hmac-sha256Test.mjs
/*global describe, it */


function hmac_sha256Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hmac_sha256Test_typeof = function _typeof(obj) { return typeof obj; }; } else { hmac_sha256Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hmac_sha256Test_typeof(obj); }

function hmac_sha256Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hmac_sha256Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hmac_sha256Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) hmac_sha256Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) hmac_sha256Test_defineProperties(Constructor, staticProps); return Constructor; }

function hmac_sha256Test_possibleConstructorReturn(self, call) { if (call && (hmac_sha256Test_typeof(call) === "object" || typeof call === "function")) { return call; } return hmac_sha256Test_assertThisInitialized(self); }

function hmac_sha256Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hmac_sha256Test_getPrototypeOf(o) { hmac_sha256Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return hmac_sha256Test_getPrototypeOf(o); }

function hmac_sha256Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) hmac_sha256Test_setPrototypeOf(subClass, superClass); }

function hmac_sha256Test_setPrototypeOf(o, p) { hmac_sha256Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return hmac_sha256Test_setPrototypeOf(o, p); }


 // The HMAC-SHA256 test suite
// https://tools.ietf.org/html/rfc4231

var hmac_sha256Test_HmacSha256Test =
/*#__PURE__*/
function (_TestHmac) {
  hmac_sha256Test_inherits(HmacSha256Test, _TestHmac);

  function HmacSha256Test() {
    hmac_sha256Test_classCallCheck(this, HmacSha256Test);

    return hmac_sha256Test_possibleConstructorReturn(this, hmac_sha256Test_getPrototypeOf(HmacSha256Test).apply(this, arguments));
  }

  hmac_sha256Test_createClass(HmacSha256Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /**
       * @test {Hmac}
       * @test {Sha256}
       */

      describe('Hmac sha256 tests', function () {
        it("hmac-sha256('Hi There', 0x0b x 20)", function () {
          t.testHmac({
            message: 'Hi There',
            key: new Array(21).join("\x0b"),
            hash: 'b0344c61d8db38535ca8afceaf0bf12b881dc200c9833da726e9376c2e32cff7'
          });
        });
        it("hmac-sha256('what do ya want for nothing?', 'Jefe')", function () {
          t.testHmac({
            message: 'what do ya want for nothing?',
            key: 'Jefe',
            hash: '5bdcc146bf60754e6a042426089575c75a003f089d2739839dec58b964ec3843'
          });
        });
        it("hmac-sha256(0xdd x 50, 0xaa x 20)", function () {
          t.testHmac({
            message: new Array(51).join("\xdd"),
            key: new Array(21).join("\xaa"),
            hash: '773ea91e36800e46854db8ebd09181a72959098b3ef8c122d9635514ced565fe'
          });
        });
        it("hmac-sha256(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)", function () {
          t.testHmac({
            message: new Array(51).join("\xcd"),
            key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
            hash: '82558a389a443c0ea4cc819899f2083a85f0faa3e578f8077a2e3ff46729665b'
          });
        });
        it("hmac-sha256('Test With Truncation', 0x0c x 20)", function () {
          t.testHmac({
            message: 'Test With Truncation',
            key: new Array(21).join("\x0c"),
            hash: 'a3b6167473100ee06e0c796c2955552bfa6f7c0a6a8aef8b93f860aab0cd20c5'
          });
        });
        it("hmac-sha256('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 131)", function () {
          t.testHmac({
            message: 'Test Using Larger Than Block-Size Key - Hash Key First',
            key: new Array(132).join("\xaa"),
            hash: '60e431591ee0b67f0d8a26aacbf5b77f8e0bc6213728c5140546040f0ee37f54'
          });
        });
        it("hmac-sha256('This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.', 0xaa x 131)", function () {
          t.testHmac({
            message: 'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.',
            key: new Array(132).join("\xaa"),
            hash: '9b09ffa71b942fcb27635fbcd5b0e944bfdc63644f0713938a7f51535c3a35e2'
          });
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha256["a" /* default */]();
    }
  }]);

  return HmacSha256Test;
}(test_TestHmac);

/* harmony default export */ var hmac_sha256Test = (hmac_sha256Test_HmacSha256Test);
// CONCATENATED MODULE: ./test/mac/hmac-sha384Test.mjs
/*global describe, it */


function hmac_sha384Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hmac_sha384Test_typeof = function _typeof(obj) { return typeof obj; }; } else { hmac_sha384Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hmac_sha384Test_typeof(obj); }

function hmac_sha384Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hmac_sha384Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hmac_sha384Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) hmac_sha384Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) hmac_sha384Test_defineProperties(Constructor, staticProps); return Constructor; }

function hmac_sha384Test_possibleConstructorReturn(self, call) { if (call && (hmac_sha384Test_typeof(call) === "object" || typeof call === "function")) { return call; } return hmac_sha384Test_assertThisInitialized(self); }

function hmac_sha384Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hmac_sha384Test_getPrototypeOf(o) { hmac_sha384Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return hmac_sha384Test_getPrototypeOf(o); }

function hmac_sha384Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) hmac_sha384Test_setPrototypeOf(subClass, superClass); }

function hmac_sha384Test_setPrototypeOf(o, p) { hmac_sha384Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return hmac_sha384Test_setPrototypeOf(o, p); }


 // The HMAC-SHA384 test suite
// https://tools.ietf.org/html/rfc4231

var hmac_sha384Test_HmacSha384Test =
/*#__PURE__*/
function (_TestHmac) {
  hmac_sha384Test_inherits(HmacSha384Test, _TestHmac);

  function HmacSha384Test() {
    hmac_sha384Test_classCallCheck(this, HmacSha384Test);

    return hmac_sha384Test_possibleConstructorReturn(this, hmac_sha384Test_getPrototypeOf(HmacSha384Test).apply(this, arguments));
  }

  hmac_sha384Test_createClass(HmacSha384Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /**
       * @test {Hmac}
       * @test {Sha512}
       */

      describe('Hmac sha384 tests', function () {
        it("hmac-sha384('Hi There', 0x0b x 20)", function () {
          t.testHmac({
            message: 'Hi There',
            key: new Array(21).join("\x0b"),
            hash: 'afd03944d84895626b0825f4ab46907f15f9dadbe4101ec682aa034c7cebc59cfaea9ea9076ede7f4af152e8b2fa9cb6'
          });
        });
        it("hmac-sha384('what do ya want for nothing?', 'Jefe')", function () {
          t.testHmac({
            message: 'what do ya want for nothing?',
            key: 'Jefe',
            hash: 'af45d2e376484031617f78d2b58a6b1b9c7ef464f5a01b47e42ec3736322445e8e2240ca5e69e2c78b3239ecfab21649'
          });
        });
        it("hmac-sha384(0xdd x 50, 0xaa x 20)", function () {
          t.testHmac({
            message: new Array(51).join("\xdd"),
            key: new Array(21).join("\xaa"),
            hash: '88062608d3e6ad8a0aa2ace014c8a86f0aa635d947ac9febe83ef4e55966144b2a5ab39dc13814b94e3ab6e101a34f27'
          });
        });
        it("hmac-sha384(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)", function () {
          t.testHmac({
            message: new Array(51).join("\xcd"),
            key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
            hash: '3e8a69b7783c25851933ab6290af6ca77a9981480850009cc5577c6e1f573b4e6801dd23c4a7d679ccf8a386c674cffb'
          });
        });
        it("hmac-sha384('Test With Truncation', 0x0c x 20)", function () {
          t.testHmac({
            message: 'Test With Truncation',
            key: new Array(21).join("\x0c"),
            hash: '3abf34c3503b2a23a46efc619baef897f4c8e42c934ce55ccbae9740fcbc1af4ca62269e2a37cd88ba926341efe4aeea'
          });
        });
        it("hmac-sha384('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 131)", function () {
          t.testHmac({
            message: 'Test Using Larger Than Block-Size Key - Hash Key First',
            key: new Array(132).join("\xaa"),
            hash: '4ece084485813e9088d2c63a041bc5b44f9ef1012a2b588f3cd11f05033ac4c60c2ef6ab4030fe8296248df163f44952'
          });
        });
        it("hmac-sha384('This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.', 0xaa x 131)", function () {
          t.testHmac({
            message: 'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.',
            key: new Array(132).join("\xaa"),
            hash: '6617178e941f020d351e2f254e8fd32c602420feb0b8fb9adccebb82461e99c5a678cc31e799176d3860e6110c46523e'
          });
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha512["a" /* default */]({
        length: 384
      });
    }
  }]);

  return HmacSha384Test;
}(test_TestHmac);

/* harmony default export */ var hmac_sha384Test = (hmac_sha384Test_HmacSha384Test);
// CONCATENATED MODULE: ./test/mac/hmac-sha512Test.mjs
/*global describe, it */


function hmac_sha512Test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hmac_sha512Test_typeof = function _typeof(obj) { return typeof obj; }; } else { hmac_sha512Test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hmac_sha512Test_typeof(obj); }

function hmac_sha512Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hmac_sha512Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hmac_sha512Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) hmac_sha512Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) hmac_sha512Test_defineProperties(Constructor, staticProps); return Constructor; }

function hmac_sha512Test_possibleConstructorReturn(self, call) { if (call && (hmac_sha512Test_typeof(call) === "object" || typeof call === "function")) { return call; } return hmac_sha512Test_assertThisInitialized(self); }

function hmac_sha512Test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hmac_sha512Test_getPrototypeOf(o) { hmac_sha512Test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return hmac_sha512Test_getPrototypeOf(o); }

function hmac_sha512Test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) hmac_sha512Test_setPrototypeOf(subClass, superClass); }

function hmac_sha512Test_setPrototypeOf(o, p) { hmac_sha512Test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return hmac_sha512Test_setPrototypeOf(o, p); }


 // The HMAC-SHA512 test suite
// https://tools.ietf.org/html/rfc4231

var hmac_sha512Test_HmacSha512Test =
/*#__PURE__*/
function (_TestHmac) {
  hmac_sha512Test_inherits(HmacSha512Test, _TestHmac);

  function HmacSha512Test() {
    hmac_sha512Test_classCallCheck(this, HmacSha512Test);

    return hmac_sha512Test_possibleConstructorReturn(this, hmac_sha512Test_getPrototypeOf(HmacSha512Test).apply(this, arguments));
  }

  hmac_sha512Test_createClass(HmacSha512Test, [{
    key: "test",
    value: function test() {
      var t = this;
      /**
       * @test {Hmac}
       * @test {Sha512}
       */

      describe('Hmac sha512 tests', function () {
        it("hmac-sha512('Hi There', 0x0b x 20)", function () {
          t.testHmac({
            message: 'Hi There',
            key: new Array(21).join("\x0b"),
            hash: '87aa7cdea5ef619d4ff0b4241a1d6cb02379f4e2ce4ec2787ad0b30545e17cdedaa833b7d6b8a702038b274eaea3f4e4be9d914eeb61f1702e696c203a126854'
          });
        });
        it("hmac-sha512('what do ya want for nothing?', 'Jefe')", function () {
          t.testHmac({
            message: 'what do ya want for nothing?',
            key: 'Jefe',
            hash: '164b7a7bfcf819e2e395fbe73b56e0a387bd64222e831fd610270cd7ea2505549758bf75c05a994a6d034f65f8f0e6fdcaeab1a34d4a6b4b636e070a38bce737'
          });
        });
        it("hmac-sha512(0xdd x 50, 0xaa x 20)", function () {
          t.testHmac({
            message: new Array(51).join("\xdd"),
            key: new Array(21).join("\xaa"),
            hash: 'fa73b0089d56a284efb0f0756c890be9b1b5dbdd8ee81a3655f83e33b2279d39bf3e848279a722c806b485a47e67c807b946a337bee8942674278859e13292fb'
          });
        });
        it("hmac-sha512(0xcd x 50, 0x0102030405060708090a0b0c0d0e0f10111213141516171819)", function () {
          t.testHmac({
            message: new Array(51).join("\xcd"),
            key: "\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19",
            hash: 'b0ba465637458c6990e5a8c5f61d4af7e576d97ff94b872de76f8050361ee3dba91ca5c11aa25eb4d679275cc5788063a5f19741120c4f2de2adebeb10a298dd'
          });
        });
        it("hmac-sha512('Test With Truncation', 0x0c x 20)", function () {
          t.testHmac({
            message: 'Test With Truncation',
            key: new Array(21).join("\x0c"),
            hash: '415fad6271580a531d4179bc891d87a650188707922a4fbb36663a1eb16da008711c5b50ddd0fc235084eb9d3364a1454fb2ef67cd1d29fe6773068ea266e96b'
          });
        });
        it("hmac-sha512('Test Using Larger Than Block-Size Key - Hash Key First', 0xaa x 131)", function () {
          t.testHmac({
            message: 'Test Using Larger Than Block-Size Key - Hash Key First',
            key: new Array(132).join("\xaa"),
            hash: '80b24263c7c1a3ebb71493c1dd7be8b49b46d1f41b4aeec1121b013783f8f3526b56d037e05f2598bd0fd2215d6a1e5295e64f73f63f0aec8b915a985d786598'
          });
        });
        it("hmac-sha512('This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.', 0xaa x 131)", function () {
          t.testHmac({
            message: 'This is a test using a larger than block-size key and a larger than block-size data. The key needs to be hashed before being used by the HMAC algorithm.',
            key: new Array(132).join("\xaa"),
            hash: 'e37b6a775dc87dbaa4dfa9f96e5e3ffddebd71f8867289865df5a32d20cdc944b6022cac3c4982b10d5eeb55c3e4de15134676fb6de0446065c97440fa8c6a58'
          });
        });
      });
    }
  }, {
    key: "getInstance",
    value: function getInstance(options) {
      return new sha512["a" /* default */]();
    }
  }]);

  return HmacSha512Test;
}(test_TestHmac);

/* harmony default export */ var hmac_sha512Test = (hmac_sha512Test_HmacSha512Test);
// CONCATENATED MODULE: ./test/encoder/UtfTest.mjs
/*global describe, it */


function UtfTest_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UtfTest_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UtfTest_createClass(Constructor, protoProps, staticProps) { if (protoProps) UtfTest_defineProperties(Constructor.prototype, protoProps); if (staticProps) UtfTest_defineProperties(Constructor, staticProps); return Constructor; }





var UtfTest_UtfTest =
/*#__PURE__*/
function () {
  function UtfTest() {
    UtfTest_classCallCheck(this, UtfTest);
  }

  UtfTest_createClass(UtfTest, [{
    key: "test",
    value: function test() {
      /** @test fromUtf */
      describe('Encoder UTF tests', function () {
        /** @test fromUtf */
        it("fromUtf('\\0')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])('\0')), '00');
        });
        /** @test fromUtf */

        it("fromUtf('\\x5c')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])('\x5c')), '5c');
        });
        /** @test fromUtf */

        it("fromUtf('\\x7f')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])('\x7f')), '7f');
        });
        /** @test fromUtf */

        it("fromUtf('\\x80')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])('\x80')), 'c280');
        });
        /** @test fromUtf */

        it("fromUtf('\\u05ca')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])("\u05CA")), 'd78a');
        });
        /** @test fromUtf */

        it("fromUtf('\\u07ff')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])("\u07FF")), 'dfbf');
        });
        /** @test fromUtf */

        it("fromUtf('\\u0800')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])("\u0800")), 'e0a080');
        });
        /** @test fromUtf */

        it("fromUtf('\\u2c3c')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])("\u2C3C")), 'e2b0bc');
        });
        /** @test fromUtf */

        it("fromUtf('\\uffff')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])("\uFFFF")), 'efbfbf');
        });
        /** @test fromUtf */

        it("fromUtf('\\ud800\\udc00')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])("\uD800\uDC00")), 'f0908080');
        });
        /** @test fromUtf */

        it("fromUtf('\\ud834\\udf06')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])("\uD834\uDF06")), 'f09d8c86');
        });
        /** @test fromUtf */

        it("fromUtf('\\udbff\\udfff')", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(utf["a" /* fromUtf */])("\uDBFF\uDFFF")), 'f48fbfbf');
        });
      });
    }
  }]);

  return UtfTest;
}();

/* harmony default export */ var encoder_UtfTest = (UtfTest_UtfTest);
// EXTERNAL MODULE: ./src/encoder/base64.mjs
var base64 = __webpack_require__(15);

// CONCATENATED MODULE: ./test/encoder/Base64Test.mjs
/*global describe, it */


function Base64Test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Base64Test_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Base64Test_createClass(Constructor, protoProps, staticProps) { if (protoProps) Base64Test_defineProperties(Constructor.prototype, protoProps); if (staticProps) Base64Test_defineProperties(Constructor, staticProps); return Constructor; }


 // https://tools.ietf.org/html/rfc4648#section-10

var Base64Test_Base64Test =
/*#__PURE__*/
function () {
  function Base64Test() {
    Base64Test_classCallCheck(this, Base64Test);
  }

  Base64Test_createClass(Base64Test, [{
    key: "test",
    value: function test() {
      /** @test toBase64 */
      describe('Encoder Base64 tests', function () {
        /** @test toBase64 */
        it("toBase64('')", function () {
          assert.equal(Object(base64["a" /* toBase64 */])(''), '');
        });
        /** @test toBase64 */

        it("toBase64('f')", function () {
          assert.equal(Object(base64["a" /* toBase64 */])('f'), 'Zg==');
        });
        /** @test toBase64 */

        it("toBase64('fo')", function () {
          assert.equal(Object(base64["a" /* toBase64 */])('fo'), 'Zm8=');
        });
        /** @test toBase64 */

        it("toBase64('foo')", function () {
          assert.equal(Object(base64["a" /* toBase64 */])('foo'), 'Zm9v');
        });
        /** @test toBase64 */

        it("toBase64('foob')", function () {
          assert.equal(Object(base64["a" /* toBase64 */])('foob'), 'Zm9vYg==');
        });
        /** @test toBase64 */

        it("toBase64('fooba')", function () {
          assert.equal(Object(base64["a" /* toBase64 */])('fooba'), 'Zm9vYmE=');
        });
        /** @test toBase64 */

        it("toBase64('foobar')", function () {
          assert.equal(Object(base64["a" /* toBase64 */])('foobar'), 'Zm9vYmFy');
        });
      });
    }
  }]);

  return Base64Test;
}();

/* harmony default export */ var encoder_Base64Test = (Base64Test_Base64Test);
// EXTERNAL MODULE: ./src/encoder/array-buffer.mjs
var array_buffer = __webpack_require__(18);

// CONCATENATED MODULE: ./test/encoder/ArrayBufferTest.mjs
/*global describe, it */


function ArrayBufferTest_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ArrayBufferTest_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ArrayBufferTest_createClass(Constructor, protoProps, staticProps) { if (protoProps) ArrayBufferTest_defineProperties(Constructor.prototype, protoProps); if (staticProps) ArrayBufferTest_defineProperties(Constructor, staticProps); return Constructor; }





var ArrayBufferTest_ArrayBufferTest =
/*#__PURE__*/
function () {
  function ArrayBufferTest() {
    ArrayBufferTest_classCallCheck(this, ArrayBufferTest);
  }

  ArrayBufferTest_createClass(ArrayBufferTest, [{
    key: "test",
    value: function test() {
      /** @test fromArrayBuffer */
      describe('Encoder ArrayBuffer tests', function () {
        /** @test fromArrayBuffer */
        it("fromArrayBuffer([0x00])", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(array_buffer["a" /* fromArrayBuffer */])([0x00])), '00');
        });
        /** @test fromArrayBuffer */

        it("fromArrayBuffer([0x5c])", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(array_buffer["a" /* fromArrayBuffer */])([0x5c])), '5c');
        });
        /** @test fromArrayBuffer */

        it("fromArrayBuffer([0x7f])", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(array_buffer["a" /* fromArrayBuffer */])([0x7f])), '7f');
        });
        /** @test fromArrayBuffer */

        it("fromArrayBuffer([0x80])", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(array_buffer["a" /* fromArrayBuffer */])([0x80])), '80');
        });
        /** @test fromArrayBuffer */

        it("fromArrayBuffer([0xff, 0xff])", function () {
          assert.equal(Object(hex["a" /* toHex */])(Object(array_buffer["a" /* fromArrayBuffer */])([0xff, 0xff])), 'ffff');
        });
      });
    }
  }]);

  return ArrayBufferTest;
}();

/* harmony default export */ var encoder_ArrayBufferTest = (ArrayBufferTest_ArrayBufferTest);
// CONCATENATED MODULE: ./test/test.mjs



































 // Hash tests

new has160Test().test();
new md2Test().test();
new md4Test().test();
new md5Test().test();
new ripemd128Test().test();
new ripemd160Test().test();
new ripemd256Test().test();
new ripemd320Test().test();
new sha0Test().test();
new sha1Test().test();
new sha224Test().test();
new sha256Test().test();
new sha384Test().test();
new sha512_224Test().test();
new sha512_256Test().test();
new sha512Test().test();
new snefru128_2Test().test();
new snefru128_8Test().test();
new snefru256_4Test().test();
new snefru256_8Test().test();
new whirlpool_0Test().test();
new whirlpool_tTest().test();
new whirlpoolTest().test();
new sm3Test().test(); // HMAC tests

new hmac_has160Test().test();
new hmac_md5Test().test();
new hmac_sha1Test().test();
new hmac_sha224Test().test();
new hmac_sha256Test().test();
new hmac_sha384Test().test();
new hmac_sha512Test().test(); // Encoder tests

new encoder_UtfTest().test();
new encoder_Base64Test().test();
new encoder_ArrayBufferTest().test();
// CONCATENATED MODULE: ./example/unit-tests.mjs
mocha.setup('bdd');

mocha.checkLeaks();
mocha.run();

/***/ })
/******/ ])["default"];