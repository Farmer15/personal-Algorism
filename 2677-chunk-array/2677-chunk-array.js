/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  const resultArray = [];
  let tempArray = [];

  for (let i = 0; i < arr.length; i++) {
    tempArray.push(arr[i]);

    if (tempArray.length === size || i === arr.length - 1) {
      resultArray.push(tempArray);
      tempArray = [];
    }
  }

  return resultArray;
};
