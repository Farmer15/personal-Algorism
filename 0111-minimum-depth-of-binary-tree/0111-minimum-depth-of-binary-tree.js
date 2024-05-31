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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  let leftHeight = Infinity;
  let rightHeight = Infinity;

  if (root.left) {
    leftHeight = minDepth(root.left) + 1;
  }

  if (root.right) {
    rightHeight = minDepth(root.right) + 1;
  }

  return Math.min(leftHeight, rightHeight)
};