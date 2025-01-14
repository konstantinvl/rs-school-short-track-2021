/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = matrix.map((array, index, matr) => array.reduce((result, num, i) => {
    if (index - 1 === -1) {
      return result + num;
    }
    if (matr[index - 1][i] === 0) {
      return result;
    }
    return result + num;
  }, 0));

  return arr.reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;
