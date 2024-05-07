/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        nums[i] = null;
        count++;
      }
    }
    
    nums.sort(function (a, b) {
      return b - a;
    });

    return nums.length - count;
};