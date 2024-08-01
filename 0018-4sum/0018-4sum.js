/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const targetArray = [];
  const sortedNums = [...nums].sort((a, b) => a - b);
  let leftLeft = 0;

  while (leftLeft < sortedNums.length - 3) {
    if (leftLeft !== sortedNums.length - 4 && sortedNums[leftLeft] === sortedNums[leftLeft + 1]) {
      leftLeft++;
      continue;
    }

    let left = leftLeft + 1;
    let middle = left + 1;
    let right = sortedNums.length - 1;

    while (left < sortedNums.length - 2) {
      if (left !== sortedNums.length - 3 && sortedNums[left] === sortedNums[left + 1]) {
        left++;
        continue;
      }

      const fourSums = sortedNums[leftLeft] + sortedNums[left] + sortedNums[middle] + sortedNums[right];

      if (fourSums > target) {
        right--;
      } else if (fourSums === target) {
        targetArray.push([sortedNums[leftLeft], sortedNums[left], sortedNums[middle], sortedNums[right]]);
        
        while (sortedNums[middle] === sortedNums[middle + 1]) {
          middle++;
        }
        middle++;
      } else {
        middle++;
      }

      if (middle >= right) {
        left++;
        middle = left + 1;
        right = sortedNums.length - 1;
      }
    }

    leftLeft++;
  }

  return targetArray;
};