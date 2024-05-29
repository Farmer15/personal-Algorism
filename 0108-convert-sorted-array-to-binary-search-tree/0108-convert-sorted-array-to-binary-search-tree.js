/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return ConstructTree(nums);

  function ConstructTree(arr) {
    const middleIndex = Math.floor(arr.length / 2);
    const root = new TreeNode(arr[middleIndex]);
    
    if (arr.length >= 3) {
      root.left = ConstructTree(arr.slice(0, middleIndex));
      root.right = ConstructTree(arr.slice(middleIndex + 1));
    }

    if (arr.length === 2) {
      root.left = new TreeNode(arr[0]);
    }

    return root;
  }
};