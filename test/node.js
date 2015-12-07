"use strict";

var assert = require('assert');
var CryptoApi = require('../lib/crypto-api');
var hex = require('../lib/enc.hex');
var md2 = require('../lib/hasher.md2');

describe('Test vector MD2', function () {
    it('should have valid hash for md2("")', function () {
        assert.equal(CryptoApi.hash('md2', '', {}).stringify('hex'), '8350e5a3e24c153df2275c9f80692773');
    });
    it('should have valid hash for md2("a")', function () {
        assert.equal(CryptoApi.hash('md2', 'a', {}).stringify('hex'), '32ec01ec4a6dac72c0ab96fb34c0b5d1');
    });
    it('should have valid hash for md2("abc")', function () {
        assert.equal(CryptoApi.hash('md2', 'abc', {}).stringify('hex'), 'da853b0d3f88d99b30283a69e6ded6bb');
    });
    it('should have valid hash for md2("message digest")', function () {
        assert.equal(CryptoApi.hash('md2', 'message digest', {}).stringify('hex'), 'ab4f496bfb2a530b219ff33031fe06b0');
    });
});