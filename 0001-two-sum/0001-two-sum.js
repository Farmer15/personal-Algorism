/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (const index1 in nums) {
    for (const index2 in nums) {
      if (index1 < index2) {
        if (nums[index1] + nums[index2] === target) {
          return [index1, index2];
        }
      }
    }
  }
};