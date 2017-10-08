'use strict';
import Has160 from "../../src/hasher/has160";
import TestHasher from "../TestHasher";

// The HAS-160 test suite
// https://files.randombit.net/misc/has160.pdf

class TestHas160 extends TestHasher {
  constructor() {
    super();

    this.data = {
      "has160('')": {
        message: '',
        hash: '307964ef34151d37c8047adec7ab50f4ff89762d'
      },
      "has160('a')": {
        message: 'a',
        hash: '4872bcbc4cd0f0a9dc7c2f7045e5b43b6c830db8'
      },
      "has160('abc')": {
        message: 'abc',
        hash: '975e810488cf2a3d49838478124afce4b1c78804'
      },
      "has160('message digest')": {
        message: 'message digest',
        hash: '2338dbc8638d31225f73086246ba529f96710bc6'
      },
      "has160('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: '596185c9ab6703d0d0dbb98702bc0f5729cd1d3c'
      },
      "has160('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'cb5d7efbca2f02e0fb7167cabb123af5795764e5'
      },
      "has160('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: '07f05c8c0773c55ca3a5a695ce6aca4c438911b5'
      }
    }
  }

  getInstance(options) {
    return new Has160();
  }
}

export default TestHas160