# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        if root is None:
            return "None"

        return str(root.val) + "," + self.serialize(root.left) + "," + self.serialize(root.right)    

    def deserialize(self, data):
        def construct_Binary_Tree(parent_node, deque_data):
            if not deque_data:
                return

            left_value =  deque_data.popleft()

            if left_value != "None":
                parent_node.left = TreeNode(int(left_value))
                construct_Binary_Tree(parent_node.left, deque_data)
            
            right_value =  deque_data.popleft()

            if right_value != "None":
                parent_node.right = TreeNode(int(right_value))
                construct_Binary_Tree(parent_node.right, deque_data)

        data = deque(data.split(","))
        
        if not data or data[0] == "None":
            return
        
        root_node = TreeNode(data.popleft())
        construct_Binary_Tree(root_node, data)
        
        return root_node

        
        

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))