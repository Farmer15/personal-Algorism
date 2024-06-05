/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const resultObj = {};
  for (const element of nums) {
    if (resultObj[element]) {
      resultObj[element]++;
    } else {
      resultObj[element] = 1;
    }
  }

  for (const key in resultObj) {
    if (resultObj[key] === 1) {
      return key;
    }
  }
};