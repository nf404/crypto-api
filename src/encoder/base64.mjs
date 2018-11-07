'use strict';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

/**
 * Convert binary result of hash to Base64
 *
 * @param {string} raw
 * @returns {string}
 */
export function toBase64(raw) {
  let str = '';
  let size = (raw.length - raw.length % 3) | 0;
  let n = 0;
  for (let i = 0; i < size; i += 3) {
    n = (raw.charCodeAt(i) << 16) | (raw.charCodeAt(i + 1) << 8) | raw.charCodeAt(i + 2);
    str += chars.charAt(n >> 18) +
	chars.charAt((n >> 12) & 0x3f) +
	chars.charAt((n >> 6) & 0x3f) +
	chars.charAt(n & 0x3f);
  }
  if ((raw.length - size) === 2) {
    n = (raw.charCodeAt(size) << 16) | (raw.charCodeAt(size + 1) << 8);
    str += chars.charAt(n >> 18) +
	chars.charAt((n >> 12) & 0x3f) +
	chars.charAt((n >> 6) & 0x3f) + '=';
  } else if ((raw.length - size) === 1) {
    n = raw.charCodeAt(size) << 16;
    str += chars.charAt(n >> 18) +
	chars.charAt((n >> 12) & 0x3f) + '==';
  }
  return str;
}