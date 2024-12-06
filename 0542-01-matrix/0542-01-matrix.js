/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const chachQueue = [];
  const DIRECTIONS = [[0, 1], [0, -1], [-1, 0], [1, 0]];
  const resultMat = Array.from(Array(mat.length), (row) => Array(mat[0].length).fill(null));

  for (let row = 0; row < mat.length; row++) {
    for (let column = 0; column < mat[0].length; column++) {
      if (mat[row][column] === 0) {
        chachQueue.push([row, column]);
      }
    }
  }

  let count = 0

  while (chachQueue.length !== 0) {
    console.log("시작", chachQueue)
    const queueLength = chachQueue.length;

    for (let i = 0; i < queueLength; i++) {
      const [posX, posY] = chachQueue.shift();

      resultMat[posX][posY] = count;

      DIRECTIONS.forEach(([directionPosX, directionPoxY]) => {
        const [nextPosX, nextPosY] = [directionPosX + posX, directionPoxY + posY]
        
        if (resultMat[nextPosX]?.[nextPosY] === null && mat[nextPosX][nextPosY]) {

          chachQueue.push([nextPosX, nextPosY])
        }
      })
    }
    console.log("끝", chachQueue)
    count++;
  }

  return resultMat
};