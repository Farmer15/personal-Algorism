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
var inorderTraversal = function(root) {
  const resultArray = [];

  function recycle(node) {
  
    if (node.left) {
      recycle(node.left);
    }
    
    resultArray.push(node.val);

    if (node.right) {
      recycle(node.right);
    }
    
  }
  if (root) {
    recycle(root);
  }
  return resultArray;
};