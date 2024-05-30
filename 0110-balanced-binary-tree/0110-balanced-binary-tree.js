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
 * @return {boolean}
 */
var isBalanced = function(root) {
  const isBalance = Math.abs(getHeight(root?.left) - getHeight(root?.right)) <= 1;

  if (root?.left) {
    if (!isBalanced(root.left)) {
      return false;
    };
  }

  if (root?.right) {
    if (!isBalanced(root.right)) {
      return false;
    };
  }

  return isBalance;
  
  function getHeight(node) {
    if (!node) {
      return 0;
    }

    return Math.max(getHeight(node.left) + 1, getHeight(node.right) + 1)
  }
};