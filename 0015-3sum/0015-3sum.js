/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sortedArr = [...nums].sort((a, b) => a - b);
  const resultArr = [];
  let left = 0;
  
  while (sortedArr[left] <= 0) {
    if (sortedArr[left] === sortedArr[left - 1]) {
      left++;
      continue;
    }
  
    let middle = left + 1;
    let right = sortedArr.length - 1;

    while (middle < right) {
      const threeSum = sortedArr[middle] + sortedArr[right] + sortedArr[left];

      if (threeSum > 0) {
        right--;
      }

      if (threeSum === 0) {
        resultArr.push([sortedArr[left], sortedArr[middle], sortedArr[right]]);

        while (sortedArr[middle] === sortedArr[middle + 1]) {
          middle++
        }
        middle++;
      }

      if (threeSum < 0) {
        middle++;
      }
    }

    left++;
  }
  
  return resultArr;
};