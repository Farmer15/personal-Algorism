from collections import deque

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []
        total_deque = deque([root])
        result = []

        while total_deque:
            floor_deque = total_deque.copy()
            total_deque.clear()
            floor_values = []
            while floor_deque:
                parent_node = floor_deque.popleft()
                floor_values.append(parent_node.val)

                if parent_node.left:
                    total_deque.append(parent_node.left)
                
                if parent_node.right:
                    total_deque.append(parent_node.right)

            result.append(floor_values)
        
        return result
                
                
              
                

