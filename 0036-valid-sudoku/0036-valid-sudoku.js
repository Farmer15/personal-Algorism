/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    const subBoxArray = getSubBoxArray(board, i);
    const columnArray = getColumnArray(board, i);
    const rowArray = board[i];

    if (!isValidLine(subBoxArray) || !isValidLine(columnArray) || !isValidLine(rowArray)) {
      return false;
    }
  }

  return true;
};

function getSubBoxArray(field, index) {
  const boxCenter = [
    [1, 1], [1, 4], [1, 7],
    [4, 1], [4, 4], [4, 7],
    [7, 1], [7, 4], [7, 7]
  ];

  return [
    field[boxCenter[index][0] - 1][boxCenter[index][1] - 1],
    field[boxCenter[index][0] - 1][boxCenter[index][1]],
    field[boxCenter[index][0] - 1][boxCenter[index][1] + 1],
    field[boxCenter[index][0]][boxCenter[index][1] - 1],
    field[boxCenter[index][0]][boxCenter[index][1]],
    field[boxCenter[index][0]][boxCenter[index][1] + 1],
    field[boxCenter[index][0] + 1][boxCenter[index][1] - 1],
    field[boxCenter[index][0] + 1][boxCenter[index][1]],
    field[boxCenter[index][0] + 1][boxCenter[index][1] + 1],
  ];
}

function getColumnArray(field, index) {
  return field.reduce((columnArray, rowArray) => [...columnArray, rowArray[index]] 
, []);
}

function isValidLine(array) {
  const arrayObj = {};

  for (const num of array) {
    if (!arrayObj[num]) {
      arrayObj[num] = 1;
    } else if (num !== ".") {
      return false;
    }
  }

  return true;
}