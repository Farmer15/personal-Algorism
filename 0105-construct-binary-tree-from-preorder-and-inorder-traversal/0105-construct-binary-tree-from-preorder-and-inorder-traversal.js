/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder, rootIndex = 0, start = 0, end = preorder.length - 1) {
    if (end < start) {
        return null;
    }

    if (end === start) {
        return new TreeNode(inorder[start])
    }

    const rootVal = preorder[rootIndex];
    const root = new TreeNode(rootVal);
    let inorderRootIndex;

    for (const index in inorder) {
        if (inorder[index] === rootVal) {
            inorderRootIndex = Number(index);
            break;
        }
    }

    root.left = buildTree(preorder, inorder, rootIndex + 1, start, inorderRootIndex - 1);
    root.right = buildTree(preorder, inorder, rootIndex + (inorderRootIndex - start) + 1, inorderRootIndex + 1, end);

    return root;
};