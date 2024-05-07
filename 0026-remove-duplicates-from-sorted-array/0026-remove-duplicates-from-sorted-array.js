/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const compareArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (!compareArray.includes(nums[i])) {
      compareArray.push(nums[i]);
    } else {
      nums[i] = 100;
    }
  }
  
  nums.sort(function (a, b) {
    return a - b;
  });

  return compareArray.length;

  
};