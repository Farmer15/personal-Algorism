/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false;
  }

  const resultArray = [];

  sumTreePathNode(root, 0);
  console.log(resultArray);
  return resultArray.includes(targetSum);
  
  function sumTreePathNode(root, sum) {
    const confirmSum = sum + root.val;
    
    if (root.left) {
      sumTreePathNode(root.left, confirmSum);
    }

    if (root.right) {
      sumTreePathNode(root.right, confirmSum);
    }

    if (!root.left && !root.right) {
      resultArray.push(confirmSum);
      return;
    } 
  }
};