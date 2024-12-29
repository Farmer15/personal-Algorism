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
            next_floor = deque([])
            result_val.append(floor[-1].val)

            while floor:
                current_node = floor.popleft()
                
                if current_node.left:
                    next_floor.append(current_node.left)
                
                if current_node.right:
                    next_floor.append(current_node.right)
            
            floor = next_floor

        return result_val
        