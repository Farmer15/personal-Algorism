/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let changIndex = nums.length - 1;
  
  while (nums[changIndex - 1] >= nums[changIndex]) {
    changIndex--;
  }
  
  let index = changIndex;
  let secondLargeIndex = changIndex;
  
  while (index <= nums.length - 1) {
    if (nums[index] > nums[changIndex - 1] && nums[secondLargeIndex] > nums[index]) {
      secondLargeIndex = index;
    }
    index++;
  }

  if (changIndex !== 0) {
    [nums[changIndex - 1], nums[secondLargeIndex]] = [nums[secondLargeIndex], nums[changIndex - 1]]
  }

  sortByBubble(nums, changIndex);
};

function sortByBubble(array, index) {
  for (let i = index; i < array.length - 1; i++) {
    for (let j = index; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      } 
    }
  }
}