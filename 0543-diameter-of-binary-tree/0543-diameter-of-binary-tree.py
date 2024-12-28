# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    max_diameter = 0      
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        def get_max_diameter(tree: Optional[TreeNode]) -> int:
            if tree is None:
                return 0
            
            left_max_diameter = get_max_diameter(tree.left)
            right_max_diameter = get_max_diameter(tree.right)
            self.max_diameter = max(self.max_diameter, left_max_diameter + right_max_diameter)
            
            return max(left_max_diameter, right_max_diameter) + 1
 
        get_max_diameter(root)
        return self.max_diameter 