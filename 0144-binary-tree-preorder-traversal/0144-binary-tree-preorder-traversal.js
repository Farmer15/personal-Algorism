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
var preorderTraversal = function(root) {
  const resultArray = [];
  
  getTreeNode(root);
  
  function getTreeNode(root) {
    if (!root) return;

    resultArray.push(root.val);

    getTreeNode(root.left);
    getTreeNode(root.right);
  }

  return resultArray;
};