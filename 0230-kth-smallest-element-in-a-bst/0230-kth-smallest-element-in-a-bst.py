# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.order = 0
        self.result_val = None

    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        if self.result_val or root is None:
            return

        self.kthSmallest(root.left, k)
        
        self.order += 1
    
        if self.order == k:
            self.result_val = root.val
            return self.result_val
        
        self.kthSmallest(root.right, k)

        return self.result_val