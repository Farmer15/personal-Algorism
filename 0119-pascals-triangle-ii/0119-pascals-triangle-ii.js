/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];

  let resultArray = [1, 1];
  
  while(resultArray.length <= rowIndex) {
    newArray = [1];

    for(let i = 0; i < resultArray.length - 1; i++) {
      const sumElement = resultArray[i] + resultArray[i + 1];

      newArray.push(sumElement);
    }

    newArray.push(1);
    resultArray = newArray;
  }

  return resultArray;
};