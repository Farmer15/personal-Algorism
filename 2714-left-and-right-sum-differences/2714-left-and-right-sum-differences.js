/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
  const rightSum = nums.map((element, index) => {
    let result = 0;

    for (let i = 0; i < index; i++) {
      result += nums[i];
    }

    return result;
  });

  const leftSum = nums.map((element, index) => {
    let result = 0;

    for (let i = index + 1; i < nums.length; i++) {
      result += nums[i];
    }

    return result;
  });

  return nums.map((element, index) => Math.abs(rightSum[index] - leftSum[index]));
};