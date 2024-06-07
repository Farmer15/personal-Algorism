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
var findMode = function(root) {
  const resultObj = {};
  const resultArray = [];

  pushAllNode(root);

  for (const nodeVal in resultObj) {
    if (resultArray[resultObj[nodeVal]]) {
      resultArray[resultObj[nodeVal]].push(nodeVal);
    } else {
      resultArray[resultObj[nodeVal]] = [nodeVal];
    }
  }

  return resultArray[resultArray.length - 1];

  function pushAllNode(root) {
    if (!root) {
      return;
    }

    if (resultObj[root.val]) {
      resultObj[root.val]++;
    } else {
      resultObj[root.val] = 1;
    }

    pushAllNode(root.left);
    pushAllNode(root.right);
  }
};