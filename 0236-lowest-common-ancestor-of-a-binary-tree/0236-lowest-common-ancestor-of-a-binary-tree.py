# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def have_targetnode(tree: "TreeNode") -> "TreeNode":
            if tree is None:
                return

            if tree.val == p.val or tree.val == q.val:
                return tree

            have_left_targetnode = have_targetnode(tree.left)
            have_right_targetnode = have_targetnode(tree.right)
           
            if have_left_targetnode and have_right_targetnode:
                return tree
            elif have_left_targetnode:
                return have_left_targetnode
            elif have_right_targetnode:
                return have_right_targetnode
            else:
                return 

        return have_targetnode(root)


