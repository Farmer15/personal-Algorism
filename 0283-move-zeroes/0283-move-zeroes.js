/**
 * @param {number[]} nums
 * @return {void} 아무것도 반환하지 말고 대신 제자리에서 숫자를 수정하세요.
 */
var moveZeroes = function(nums) {
  let right = nums.length -1;
  while (right > 0) {
    let left = 0;
    
    while (left < right) {
      if (nums[left + 1] !== 0 && nums[left] === 0) {
        [nums[left], nums[left + 1]] = [nums[left + 1], nums[left]];
      }
      left++;
    }
    right--;
  }
};