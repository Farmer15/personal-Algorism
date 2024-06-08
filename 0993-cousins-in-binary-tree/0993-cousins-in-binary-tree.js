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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let confrimNode = null;

  getTargetAndHeight(root, x, 0);

  return getTargetAndHeight(root, y, 0);

  function getTargetAndHeight(root, target, height, pevVal = null) {
    const currentHeight = height + 1;

    if (root.val === target) {
      if (confrimNode) {
        return confrimNode[0] === currentHeight && confrimNode[1] !== pevVal;
      } else {confrimNode
        confrimNode = [currentHeight, pevVal];
        return;
      }
    }
    
    if (root.left) {
      var leftResult = getTargetAndHeight(root.left, target, currentHeight, root.val);
    }

    if (root.right) {
      var rightResult = getTargetAndHeight(root.right, target, currentHeight, root.val);
    }

    return leftResult ?? rightResult;
  }
};