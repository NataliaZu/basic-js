const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  let result = ''
  let count = 1
  let currentChar = str[0]
  if (str == '') {
    return result
  }
  
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++
    } else {
      if (count === 1) {
        result += currentChar
      } else {
        result += count + currentChar
      }
      count = 1;
      currentChar = str[i]
    }
  }
  
  if (count === 1) {
    result += currentChar
  } else {
    result += count + currentChar
  }
  return result
}

console.log(encodeLine(''))

module.exports = {
  encodeLine
};
