/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const permutationArray = []
  
  getPermutation(nums, 0);

  return permutationArray
  
  function getPermutation(array, index) {
    if (index === array.length - 1) {
      permutationArray.push([...array]);
    }

    for (let i = index; i < array.length; i++) {
      [array[index], array[i]] = [array[i], array[index]];

      getPermutation(array, index + 1);

      [array[i], array[index]] = [array[index], array[i]];
    }
  }    
};