# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if root is None:
            return root

        current_node = root
        while (current_node.val - p.val) * (current_node.val - q.val) > 0:
            if current_node is None:
                return

            if p.val > current_node.val:
                current_node = current_node.right
            else:
                current_node = current_node.left

        return current_node