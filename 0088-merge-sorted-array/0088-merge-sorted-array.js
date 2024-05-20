/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const copiedNums1 = nums1.slice(0);
  let indexCopiedNums1 = 0;
  let indexNums1 = 0;
  let indexNums2 = 0;

  while (indexNums1 < nums1.length) {
    if (indexCopiedNums1 >= m) {
     copiedNums1[indexCopiedNums1] = Infinity;
    }
    console.log([indexCopiedNums1, indexNums2])
    
    nums2[indexNums2] = nums2[indexNums2] ?? Infinity;
    
    if (copiedNums1[indexCopiedNums1] <= nums2[indexNums2]) {
      nums1[indexNums1] = copiedNums1[indexCopiedNums1];
      indexCopiedNums1++;
    } else {
      nums1[indexNums1] = nums2[indexNums2];
      indexNums2++;
    }

    indexNums1++;
  }

  return nums1
};