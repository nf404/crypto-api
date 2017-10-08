'use strict';

import Encoder from "../encoder";

class EncoderHex extends Encoder {
  constructor() {
    super();
  }

  encode(raw) {
    let str = '';
    for (let i = 0, l = raw.length; i < l; i++) {
      str += (raw.charCodeAt(i) < 16 ? '0' : '') + raw.charCodeAt(i).toString(16);
    }
    return str;
  }
}

export default EncoderHex