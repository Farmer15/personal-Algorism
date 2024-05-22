/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }
  
  if (p.val !== q.val) {
    return false;
  }

  if ((!p.left && q.left) || (p.left && !q.left)) {
    return false;
  }
  
  if (p.left && q.left) {
    if (!isSameTree(p.left, q.left)) {
      return false; 
    };
  }


  if ((!p.right && q.right) || (p.right && !q.right)) {
    return false;
  }

  if (p.right && q.right) {
    if (!isSameTree(p.right, q.right)) {
      return false; 
    };
  }

  return true;
};