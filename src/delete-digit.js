const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('').map(Number)
  let maxNumber = -Infinity
  for (let i = 0; i < digits.length; i++) {
    const deletedDigits = [...digits.slice(0, i), ...digits.slice(i + 1)]
    const number = Number(deletedDigits.join(''))
    maxNumber = Math.max(maxNumber, number)
  }
  return maxNumber
}


module.exports = {
  deleteDigit
};
