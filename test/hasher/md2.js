'use strict';
import TestHasher from "../TestHasher";
import Md2 from "../../src/hasher/md2";

// The MD2 test suite
// https://tools.ietf.org/html/rfc1319

class TestMd2 extends TestHasher {
  constructor() {
    super();

    this.data = {
      "md2('')": {
        message: '',
        hash: '8350e5a3e24c153df2275c9f80692773'
      },
      "md2('a')": {
        message: 'a',
        hash: '32ec01ec4a6dac72c0ab96fb34c0b5d1'
      },
      "md2('abc')": {
        message: 'abc',
        hash: 'da853b0d3f88d99b30283a69e6ded6bb'
      },
      "md2('message digest')": {
        message: 'message digest',
        hash: 'ab4f496bfb2a530b219ff33031fe06b0'
      },
      "md2('a..z')": {
        message: 'abcdefghijklmnopqrstuvwxyz',
        hash: '4e8ddff3650292ab5a4108c3aa47940b'
      },
      "md2('A..Za..z0..9')": {
        message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        hash: 'da33def2a42df13975352846c30338cd'
      },
      "md2('1234567890' x 8)": {
        message: new Array(9).join('1234567890'),
        hash: 'd5976f79d83d3a0dc9806c3c66f3efd8'
      }
    }
  }

  getInstance(options) {
    return new Md2();
  }
}

export default TestMd2