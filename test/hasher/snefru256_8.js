'use strict';

import Snefru from "../../src/hasher/snefru";
import TestHasher from "../TestHasher";

// The Snefru-256 test suite
// From Snefru version 2.5a package

class TestSnefru256_8 extends TestHasher {
  constructor() {
    super();

    this.data = {
      "snefru256_8('')": {
        options: {length: 256},
        message: '',
        hash: '8617f366566a011837f4fb4ba5bedea2b892f3ed8b894023d16ae344b2be5881'
      },
      "snefru256_8(0x0a)": {
        options: {length: 256},
        message: "\n",
        hash: '2e02687f0d45d5b9b50cb68c3f33e6843d618a1aca2d06893d3eb4e3026b5732'
      },
      "snefru256_8('1' + 0x0a)": {
        options: {length: 256},
        message: "1\n",
        hash: 'bfea4a05a2a2ef15c736d114598a20b9d9bd4d66b661e6b05ecf6a7737bdc58c'
      },
      "snefru256_8('12' + 0x0a)": {
        options: {length: 256},
        message: "12\n",
        hash: 'ac677d69761ade3f189c7aef106d5fe7392d324e19cc76d5db4a2c05f2cc2cc5'
      },
      "snefru256_8('123' + 0x0a)": {
        options: {length: 256},
        message: "123\n",
        hash: '061c76aa1db4a22c0e42945e26c48499b5400162e08c640be05d3c007c44793d'
      },
      "snefru256_8('1234' + 0x0a)": {
        options: {length: 256},
        message: "1234\n",
        hash: '1e87fe1d9c927e9e24be85e3cc73359873541640a6261793ce5a974953113f5e'
      },
      "snefru256_8('12345' + 0x0a)": {
        options: {length: 256},
        message: "12345\n",
        hash: '1b59927d85a9349a87796620fe2ff401a06a7ba48794498ebab978efc3a68912'
      },
      "snefru256_8('123456' + 0x0a)": {
        options: {length: 256},
        message: "123456\n",
        hash: '28e9d9bc35032b68faeda88101ecb2524317e9da111b0e3e7094107212d9cf72'
      },
      "snefru256_8('1234567' + 0x0a)": {
        options: {length: 256},
        message: "1234567\n",
        hash: 'f7fff4ee74fd1b8d6b3267f84e47e007f029d13b8af7e37e34d13b469b8f248f'
      },
      "snefru256_8('12345678' + 0x0a)": {
        options: {length: 256},
        message: "12345678\n",
        hash: 'ee7d64b0102b2205e98926613b200185559d08be6ad787da717c968744e11af3'
      },
      "snefru256_8('123456789' + 0x0a)": {
        options: {length: 256},
        message: "123456789\n",
        hash: '4ca72639e40e9ab9c0c3f523c4449b3911632d374c124d7702192ec2e4e0b7a3'
      },
      "snefru256_8('The theory of quantum electrodynamics has now lasted for ....')": {
        options: {length: 256},
        message: "The theory of quantum electrodynamics has now lasted for\n" +
        "more than fifty years, and has been tested more and more\n" +
        "accurately over a wider and wider range of conditions.\n" +
        "At the present time I can proudly say that there is no\n" +
        "significant difference between experiment and theory!\n\n" +
        "Just to give you an idea of how the theory has been put\n" +
        "through the wringer, I'll give you some recent numbers:\n" +
        "experiments have Dirac's number at 1.00115965221 (with\n" +
        "an uncertainty of about five times as much). To give you\n" +
        "a feeling for the accuracy of these numbers, it comes\n" +
        "out something like this:  If you were to measure the\n" +
        "distance from Los Angeles to New York to this accuracy,\n" +
        "it would be exact to the thickness of a human hair.\n" +
        "That's how delicately quantum electrodynamics has, in the\n" +
        "past fifty years, been checked -- both theoretically and\n" +
        "experimentally.\n",
        hash: '5e8a32ed1998b611f5f096960c65e820da93a9a424d2715130c1e45483f1839c'
      }
    }
  }

  getInstance(options) {
    return new Snefru(options);
  }
}

export default TestSnefru256_8