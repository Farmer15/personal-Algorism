# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        
        return self.get_height(root) != None

    def get_height(self, root: Optional[TreeNode]) -> bool or int:
        if root is None:
            return 0
        
        left_height = self.get_height(root.left)
        right_height = self.get_height(root.right)
        
        if right_height != None and left_height != None and -1 <= (left_height - right_height) <= 1:
            return max(left_height, right_height) + 1
        else:
            return None
          