# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []

        floor = deque([root])
        result_val = []
        
        while floor:
            result_val.append(floor[-1].val)
            floor = deque(child for currnt_node in floor for child in (currnt_node.left, currnt_node.right) if child)

        return result_val
        