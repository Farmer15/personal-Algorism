/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
  let count = 0;

  for (let j = 1; j < nums.length - 1; j++) {
    for (let i = 0; i < j; i++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) count++;
      }
    }
  }
  
  return count++;  
};