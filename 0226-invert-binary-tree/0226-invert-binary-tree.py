# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        Solution.switch_child_node(Solution.invertTree, root)

        return root


    def switch_child_node(self, node):
        if not hasattr(node, "left") or not hasattr(node, "right"):
            return
            
        node.left, node.right = node.right, node.left

        if node.left:
            self(self, node.left)

        if node.right:
            self(self, node.right)