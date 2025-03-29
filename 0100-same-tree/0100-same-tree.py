# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if p and q:
            if p.val != q.val:
                return False
        elif p or q:
            return False
        else:
            return True

        if p.left and q.left:
            if self.isSameTree(p.left, q.left) == False:
                return False
        elif p.left or q.left:
            return False

        if p.right and q.right:
            if self.isSameTree(p.right, q.right) == False:
                return False
        elif p.right or q.right:
            return False
        return True