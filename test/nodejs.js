"use strict";
var assert = require('chai').assert;
/**
 * @type {CryptoApi}
 */
var CryptoApi = require('../lib/crypto-api');

var TestVectors = require('./test-vectors/hash');
var TestVectorsHmac = require('./test-vectors/hmac');

// Hash tests
Object.keys(TestVectors).forEach(function(hash) {
    describe('Tests for hash ' + hash, function () {
        Object.keys(TestVectors[hash]).forEach(function(msg) {
            it(msg, function () {
                assert.equal(CryptoApi.hash(hash, TestVectors[hash][msg].message, {}).stringify('hex'), TestVectors[hash][msg].hash);
            });
        });
    });
});

// HMAC tests
Object.keys(TestVectorsHmac).forEach(function (hash) {
    describe('Tests for hmac-' + hash, function () {
        Object.keys(TestVectorsHmac[hash]).forEach(function (msg) {
            it(msg, function () {
                assert.equal(
                    CryptoApi.mac('hmac', TestVectorsHmac[hash][msg].key, hash, {})
                        .update(TestVectorsHmac[hash][msg].message)
                        .finalize()
                        .stringify('hex'), TestVectorsHmac[hash][msg].hash
                );
            });
        });
    });
});

// Hash setState() getState() tests
describe('Tests for hash setState() getState()', function () {
    Object.keys(TestVectors).forEach(function (hash) {
        it('hash ' + hash, function () {
            var hash1 = CryptoApi.hash(hash, '1', {}).stringify('hex');
            var hash2 = CryptoApi.hash(hash, '12', {}).stringify('hex');
            var hash3 = CryptoApi.hasher(hash, {}).update('1');
            var state = hash3.getState();
            assert.equal(hash3.finalize().stringify('hex'), hash1);
            assert.equal(hash3.setState(state).update('2').finalize().stringify('hex'), hash2);
        });
    });
});

// Error handling tests
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
    it("CryptoApi.hash('sha256').stringify('no-encode')", function () {
        var error = '';
        try {
            CryptoApi.hash('sha256', '', {}).stringify('no-encode');
        } catch(e) {
            error = e;
        }
        assert.equal(error instanceof Error, true);
    });
    it("CryptoApi.mac('no-mac')", function () {
        var error = '';
        try {
            CryptoApi.mac('no-mac', '', 'sha256', {});
        } catch(e) {
            error = e;
        }
        assert.equal(error instanceof Error, true);
    });
    it("CryptoApi.Hashers.add('undefined', undefined)", function () {
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
    it("CryptoApi.Macs.add('undefined', undefined)", function () {
        var error = '';
        try {
            CryptoApi.Macs.add('undefined', undefined);
        } catch(e) {
            error = e;
        }
        assert.equal(error instanceof Error, true);
    });
});