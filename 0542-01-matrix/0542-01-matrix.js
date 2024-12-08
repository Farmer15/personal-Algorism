/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const chachQueue = [];
  const DIRECTIONS = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const TOTAL_COUNT = mat.length * mat[0].length;

  for (let row = 0; row < mat.length; row++) {
    for (let column = 0; column < mat[0].length; column++) {
      if (mat[row][column] === 0) {
        chachQueue.push([row, column]);
      } else {
        mat[row][column] = TOTAL_COUNT
      }
    }
  }

  while (chachQueue.length !== 0) {
    [currentposX, currentposY] = chachQueue.shift();

    DIRECTIONS.forEach(([directionPosX, directionPosY]) => {
      const [nextPosX, nextPosY] = [currentposX +  directionPosX, currentposY + directionPosY];
      const nextPos = mat[nextPosX]?.[nextPosY];

      if (nextPos && nextPos === TOTAL_COUNT) {
        mat[nextPosX][nextPosY] = mat[currentposX][currentposY] + 1;
        chachQueue.push([nextPosX, nextPosY]);
      }
    })
  }

  return mat
};