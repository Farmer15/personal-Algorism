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

  return sumTreePathNode(root, 0) ?? false;

  function sumTreePathNode(root, sum) {
    const confirmSum = sum + root.val;
    
    if (root.left) {
      if (sumTreePathNode(root.left, confirmSum)) {
        return true;
      };
    }

    if (root.right) {
      if (sumTreePathNode(root.right, confirmSum)) {
        return true;
      }
    }

    if (!root.left && !root.right && confirmSum === targetSum) {
      return true;
    }
  }
};