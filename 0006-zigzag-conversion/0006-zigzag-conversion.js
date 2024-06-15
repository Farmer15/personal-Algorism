/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;

  const resultArray = Array(numRows).fill("");
  let resultIndex = 0;
  let index = 0;
  let interval = 1;
  
  while (index < s.length) {
    resultArray[resultIndex] += s[index];

    if (resultIndex === numRows - 1) {
      interval = -1;
    }

    if (resultIndex === 0) {
      interval = 1;
    }

    index++;
    resultIndex += interval;
  }
  console.log(resultArray);
  return resultArray.join("");
};
