'use strict';

import Encoder from "../encoder";

class EncoderHex extends Encoder {
  constructor() {
    super();
  }

  encode(raw) {
    for (let str = '', i = 0, l = raw.length; i < l; i++) {
      let hex = raw.charCodeAt(i).toString(16);
      str += (raw.charCodeAt(i) < 16 ? '0' : '') + hex;
    }
    return str;
  }
}

export default EncoderHex