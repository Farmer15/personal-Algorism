/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const confirmLength = nums.length / 2;
  const numsObj = {};
  
  for (const element of nums) {
    if (numsObj[element]) {
      numsObj[element]++;
    } else {
      numsObj[element] = 1;
    }

    if (numsObj[element] > confirmLength) {
      return element;
    }
  }
};