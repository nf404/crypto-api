'use strict';

import TestSha1 from "./hasher/sha1";
import TestHas160 from "./hasher/has160";

describe('Tests for hash sha1', function () {
  (new TestSha1()).test();
});

describe('Tests for hash has160', function () {
  (new TestHas160()).test();
});
