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
  let start = 0;
  let end = array.length - 1;
  let aim = Math.trunc((start + end) / 2);
  while (array[aim] !== value) {
    if (array[aim] > value) {
      end = aim;
      aim = Math.trunc((start + end) / 2);
    } else {
      start = aim;
      aim = Math.trunc((start + end) / 2);
    }
    if (array[aim + 1] === value) return aim + 1;
    if (array[aim - 1] === value) return aim - 1;
  }
  return aim;
}

module.exports = findIndex;
