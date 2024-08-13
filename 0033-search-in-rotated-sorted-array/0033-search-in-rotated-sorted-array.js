/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, start = 0, end = nums.length - 1) {
  const startElement = nums[start];
  const endElement = nums[end];
  const middleIndex = Math.floor((end + start) / 2);
  const middleElement = nums[middleIndex];

  if (end - start <= 1) {
    if (startElement === target) {
      return start;
    }
    
    if (endElement === target) {
      return end;
    }
    
    return -1;
  }

  if (middleElement === target) {
    return middleIndex;
  }

  if (endElement >= startElement) {
    return searchTargetInSortedArr(nums, target, start, end);
  }

  if (middleElement >= startElement) {
    return target >= startElement && target <= middleElement ? search(nums, target, start, middleIndex - 1) : search(nums, target, middleIndex + 1, end);
  }

  if (middleElement <= startElement) {
    return target <= endElement && target >= middleElement ? search(nums, target, middleIndex + 1, end) : search(nums, target, start, middleIndex - 1);
  }
};

function searchTargetInSortedArr(arr, target, start, end) {
  const startElement = arr[start];
  const endElement = arr[end];
  const middleIndex = Math.floor((end + start) / 2);
  const middleElement = arr[middleIndex];
  
  if (end - start <= 1) {
    if (startElement === target) {
      return start;
    }
    
    if (endElement === target) {
      return end;
    }
    
      return -1;
  }
  
  if (middleElement === target) {
    return middleIndex;
  }
  
  return target > middleElement ? searchTargetInSortedArr(arr, target, middleIndex + 1, end) : searchTargetInSortedArr (arr, target, start, middleIndex - 1);
}
