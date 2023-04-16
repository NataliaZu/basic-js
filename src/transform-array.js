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

  return arr.reduce((result, current, index) => {
    if (current === "--discard-next") {
      return result
    }

    if (current === "--discard-prev") {
      if (index > 0 && arr[index - 2] !== "--discard-next") {
        result.pop()
      }
      return result
    }

    if (current === "--double-next") {
      if (index < arr.length - 1) {
        result.push(arr[index + 1])
      }
      return result
    }

    if (current === "--double-prev") {
      if (index > 0 && arr[index - 2] !== "--discard-next") {
        result.push(arr[index - 1])
      }
      return result
    }

    result.push(current)
    return result
  }, [])
}

console.log(transform([1, 2, 3, '--discard-prev', 4, 5]))

module.exports = {
  transform
};
