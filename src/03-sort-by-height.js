/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let array = arr;
  array = array.filter((item) => item !== -1).sort((a, b) => a - b);
  // return arr.sort((a, b) => {
  //  if (a === -1) {
  //    return 1;
  //  }
  //  return a - b;
  // });
  let count = 0;
  return arr.map((item, index) => {
    if (item === -1) {
      count += 1;
      return item;
    }
    return array[index - count];
  });
}

module.exports = sortByHeight;
