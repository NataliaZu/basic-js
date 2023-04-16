const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const result = []
  const skipIndices = new Set()
  for (let i = 0; i < arr.length; i++) {
    const currElement = arr[i]
    const nextElement = arr[i + 1]
    const prevElement = arr[i - 1]

    if (skipIndices.has(i)) {
      continue
    }

    if (currElement === '--discard-next') {
      skipIndices.add(i + 1)
    } else if (currElement === '--discard-prev') {
      if (!skipIndices.has(i - 1)) {
        result.pop()
      }
    } else if (currElement === '--double-next') {
      if (nextElement !== undefined) {
        result.push(nextElement)
      }
    } else if (currElement === '--double-prev') {
      if (prevElement !== undefined && !skipIndices.has(i - 1)) {
        result.push(result[result.length - 1])
      }
    } else {
      result.push(currElement)
    }
  }
  return result
}

module.exports = {
  transform
};
