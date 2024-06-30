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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const resultArray = [];

  searchTree(root);

  return resultArray;

  function searchTree(root) {
    if (!root) return;

    searchTree(root.left);
    searchTree(root.right);

    resultArray.push(root.val);
  }
};