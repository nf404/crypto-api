"use strict";

var assert = require('assert');
var CryptoApi = require('../lib/crypto-api');
var hex = require('../lib/enc.hex');
var md2 = require('../lib/hasher.md2');
var md4 = require('../lib/hasher.md4');
var md5 = require('../lib/hasher.md5');
var sha0 = require('../lib/hasher.sha0');
var sha1 = require('../lib/hasher.sha1');
var sha256 = require('../lib/hasher.sha256');

var TestVectors = require('../test-vectors');

Object.keys(TestVectors).forEach(function(hash) {
    describe('Tests for hash ' + hash, function () {
        Object.keys(TestVectors[hash]).forEach(function(msg) {
            it(msg, function () {
                assert.equal(CryptoApi.hash(hash, TestVectors[hash][msg].message, {}).stringify('hex'), TestVectors[hash][msg].hash);
            });
        });
    });
});