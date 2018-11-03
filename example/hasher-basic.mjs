'use strict';

import Md2 from "../src/hasher/md2";
import {toHex} from "../src/encoder/hex";

let hasher = new Md2();
hasher.update('test message');
document.getElementById('result').innerHTML = toHex(hasher.finalize());
