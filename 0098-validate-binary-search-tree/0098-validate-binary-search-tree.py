# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    cached_val = -math.inf
      
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if root.left:
            if not self.isValidBST(root.left):
                return False
      
        if self.cached_val >= root.val:
            return False
        else:
            self.cached_val = root.val

        if root.right:
            if not self.isValidBST(root.right):
                return False
        
        return True
        


