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
var findSecondMinimumValue = function(root) {
  if (!root.right) {
    return -1;
  }

  const resultArray = [];

  getTwoNode(root);

  function getTwoNode(root) {
    if (!root) {
      return;
    }

    if (!resultArray.includes(root.val)) {
      resultArray.push(root.val);
    }

    getTwoNode(root.left);
    getTwoNode(root.right);
  }
  
  return resultArray.length === 1 ? -1 : resultArray.sort((a, b) => a - b)[1]; 
};