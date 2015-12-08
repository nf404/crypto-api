"use strict";

var assert = require('assert');
var CryptoApi = require('../lib/crypto-api');
require('../lib/enc.hex');
require('../lib/hasher.md2');
require('../lib/hasher.md4');
require('../lib/hasher.md5');
require('../lib/hasher.sha0');
require('../lib/hasher.sha1');
require('../lib/hasher.sha256');

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
describe('Test Error handling', function () {
    it("CryptoApi.hash('no-hasher')", function () {
        var error = '';
        try {
            CryptoApi.hash('no-hasher', '', {});
        } catch(e) {
            error = e;
        }
        assert.equal(error instanceof Error, true);
    });
    it("CryptoApi.hash('md2').stringify('no-encode')", function () {
        var error = '';
        try {
            CryptoApi.hash('md2', '', {}).stringify('no-encode');
        } catch(e) {
            error = e;
        }
        assert.equal(error instanceof Error, true);
    });
    it("CryptoApi.Hashers.add('undefined', undefined", function () {
        var error = '';
        try {
            CryptoApi.Hashers.add('undefined', undefined);
        } catch(e) {
            error = e;
        }
        assert.equal(error instanceof Error, true);
    });
    it("CryptoApi.Encodes.add('undefined', undefined)", function () {
        var error = '';
        try {
            CryptoApi.Encodes.add('undefined', undefined);
        } catch(e) {
            error = e;
        }
        assert.equal(error instanceof Error, true);
    });
});