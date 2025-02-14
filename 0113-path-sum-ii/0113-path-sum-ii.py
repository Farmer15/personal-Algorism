# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        result = []

        def getPathSumList(node: Optional[TreeNode], path_list: List[int], path_sum: int):
            if node is None:
                return         
            
            next_path_sum = path_sum + node.val
            next_path_list = [*path_list, node.val]

            if not node.left and not node.right:
                if next_path_sum == targetSum:
                    result.append(next_path_list)
                return
            
            getPathSumList(node.left, next_path_list, next_path_sum)
            getPathSumList(node.right, next_path_list, next_path_sum)

        getPathSumList(root, [], 0)
        
        return result
