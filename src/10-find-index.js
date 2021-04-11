/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  /* / return array.reduce((sum, item, index) => {
    if (item === value) {
      return sum + index;
    }
    return sum + 0;
  }, 0); / */
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return null;
}

module.exports = findIndex;
