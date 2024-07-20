/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let [left, middle, right] = [0, 1, sortedNums.length - 1];
  let result = Infinity;

  while (left < sortedNums.length - 2) {
    const threeSum = sortedNums[left] + sortedNums[middle] + sortedNums[right];

    if (threeSum === target) return threeSum;

    if (threeSum > target) {
      right--;
    }

    if (threeSum < target) {
      middle++;
    }
    
    if (middle === right) {
      left++
      middle = left + 1;
      right = sortedNums.length - 1;
    }

    if (Math.abs(threeSum - target) < Math.abs(result - target)) {
      result = threeSum;
    }
  }

  return result;
};