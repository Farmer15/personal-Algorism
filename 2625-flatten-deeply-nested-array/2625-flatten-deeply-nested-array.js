/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n > 100) return arr.toString().split(",").filter((element) => element).map((element) => +element);

  let flatArray = [...arr];
  let flatCount = n;

  while (flatCount > 0) {
    let resultArray = [];

    for (let i = 0; i < flatArray.length; i++) {
      if (Array.isArray(flatArray[i])) {
        resultArray = [...resultArray, ...flatArray[i]]; 
      } else {
        resultArray.push(flatArray[i]);
      }
    }
    
    flatArray = resultArray;

    if (flatArray.every((element) => !Array.isArray(element))) return flatArray;

    flatCount--;
  }

  return flatArray;
};