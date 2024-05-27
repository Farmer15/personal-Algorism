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
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  let result = 1;
  let count = 1;

  countLeaf(root.left);
  
  count = 1;

  countLeaf(root.right);

  return result;

  function countLeaf(node) {
    if (!node) {
      return;
    }
    

    count++;
    const temp = count;
  
    if (!node.left && !node.right) {
      if (count > result) {
        result = count;
      }
    }

    if (node.left) {
      countLeaf(node.left);
    }

    count = temp;

    if (node.right) {
      countLeaf(node.right);
    }
  }
};