/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((arr, index, matr) => arr.map((item, indexx, line) => {
    let count = 0;
    for (let i = indexx - 1; i < line.length; i++) {
      for (let j = index - 1; j < matr.length; j++) {
        if (!(i === indexx && j === index)) {
          if (matr[i] && matr[i][j]) {
            count++;
          }
        }
      }
    }
    return count;
  }));
}

module.exports = minesweeper;
