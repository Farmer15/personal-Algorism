/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const sumLength = nums1.length + nums2.length;
  
  if (sumLength <= 2) {
    if (nums1[0] && nums2[0]) {
      return (nums1[0] + nums2[0]) / 2;
    }
    
    if (sumLength === 1) {
      return nums1[0] ?? nums2[0]
    } else {
      return nums1[0] ? (nums1[0] + nums1[1]) / 2 : (nums2[0] + nums2[1]) / 2
    }
  }
    
  const targetIndex = sumLength % 2 === 0 ? [(sumLength / 2) - 1, sumLength / 2] : [(sumLength - 1) / 2];
  const targetElement = [];
  let nums1Pointer = 0;
  let nums2Pointer = 0;
  let count = 0;

  while (targetElement.length <= 1) {
    if (!targetIndex[1] && targetElement.length === 1) {
      break;
    }

    count++;

    if (nums1[nums1Pointer] <= nums2[nums2Pointer] && nums1[nums1Pointer] || nums2[nums2Pointer] === undefined) {
      nums1Pointer++;

      if (count === targetIndex[0] || count === targetIndex[1]) {
        nums1[nums1Pointer] ? targetElement.push(Math.min(nums1[nums1Pointer] ?? Infinity, nums2[nums2Pointer] ?? Infinity)) : targetElement.push(nums2[nums2Pointer]);
      }
    } else {
      nums2Pointer++;

      if (count === targetIndex[0] || count === targetIndex[1]) {
        nums2[nums2Pointer] ? targetElement.push(Math.min(nums1[nums1Pointer] ?? Infinity, nums2[nums2Pointer] ?? Infinity)) : targetElement.push(nums1[nums1Pointer]);
      }
    }
  }

  return targetElement.length === 1 ? targetElement[0] : (targetElement[0] + targetElement[1]) / 2;
};