const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Chars = s1.split('')
  const s2Chars = s2.split('')
  const s1CharCounts = {}
  let commonCharCount = 0
  for (let i = 0; i < s1Chars.length; i++) {
    const char = s1Chars[i]
    s1CharCounts[char] = s1CharCounts[char] ? s1CharCounts[char] + 1 : 1
  }
  for (let i = 0; i < s2Chars.length; i++) {
    const char = s2Chars[i]
    if (s1CharCounts[char]) {
      commonCharCount++
      s1CharCounts[char]--
    }
  }
  return commonCharCount
}

module.exports = {
  getCommonCharacterCount
};
