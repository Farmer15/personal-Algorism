/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const result = [-1, -1];

  searchLeftIndex(nums, 0, nums.length - 1);
  searchRightIndex(nums, 0, nums.length - 1);

  return result;

  function searchLeftIndex(array, start, end) {
    if (end <= start) {
      return end === start && array[start] === target ? result[0] = Math.min(result[0] ?? start, start) : 0;
    }
    const middleIndex = Math.floor((end + start) / 2);
    if (nums[middleIndex] === target) {
      result[0] = middleIndex;
      searchLeftIndex(array, start, middleIndex - 1);
    } else if (nums[middleIndex] > target) {
      searchLeftIndex(array, start, middleIndex - 1);
    } else {
      searchLeftIndex(array, middleIndex + 1, end);
    }
  }

    function searchRightIndex(array, start, end) {
    if (end <= start) {
      return end === start && array[start] === target ? result[1] = Math.max(result[1] ?? start, start) : 0;
    }

    const middleIndex = Math.floor((end + start) / 2);

    if (nums[middleIndex] === target) {
      result[1] = middleIndex;
      searchRightIndex(array, middleIndex + 1, end);
    } else if (nums[middleIndex] > target) {
      searchRightIndex(array, start, middleIndex - 1);
    } else {
      searchRightIndex(array, middleIndex + 1, end);
    }
  }
};
