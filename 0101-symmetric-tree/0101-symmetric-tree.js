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
var isSymmetric = function(root) {
  const childArray = [root];
  
  while (isAllNull(childArray)) {
    const end = childArray.length;

    for (let i = 0; i < end; i++) {
      childArray.push(childArray[i]?.left);
      childArray.push(childArray[i]?.right);
    }
    
    childArray.splice(0, end);

    for (let j = 0; j < childArray.length / 2; j++) {
      if (childArray[j]?.val !== childArray[childArray.length - 1 - j]?.val) {
        return false;
      }
    }
  }

  return true;

  function isAllNull(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) {
        return true;
      }
    }

    return false;
  }
};