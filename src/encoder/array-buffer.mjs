'use strict';

/**
 * Convert ArrayBuffer to binary input for hasher
 *
 * @param {ArrayBuffer} buffer
 * @returns {string}
 */
export function fromArrayBuffer(buffer) {
  let s = '';
  const bytes = new Uint8Array(buffer);
  for (var i = 0; i < bytes.length; i++) {
    s += String.fromCharCode(bytes[i]);
  }
  return s;
}