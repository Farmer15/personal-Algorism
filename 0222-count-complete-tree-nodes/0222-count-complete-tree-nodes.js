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
var countNodes = function(root) {
  let count = 0;

  calculateNode(root);

  return count;
  
  function calculateNode(node) {
    if (!node) return 0;

    count++;
    
    calculateNode(node.left);
    calculateNode(node.right);
  }  
};