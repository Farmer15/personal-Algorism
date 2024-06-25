/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const romanArray = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]];
  let copiedNum = num;
  let resultRoman = "";
  let romanIndex = 0;


  while (copiedNum !== 0) {
    if (copiedNum / romanArray[romanIndex][1] >= 1) {
      resultRoman += romanArray[romanIndex][0];
      copiedNum -= romanArray[romanIndex][1];
    } else {
      romanIndex++;
    }
  }

  return resultRoman;
};