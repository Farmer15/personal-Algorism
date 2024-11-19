# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        try:
          one_jump_node = head.next
          two_jump_node = head

          while two_jump_node:
              print(two_jump_node.val, one_jump_node.val)
              if two_jump_node == one_jump_node:
                return True
              
              one_jump_node = one_jump_node.next
              two_jump_node = two_jump_node.next.next

          return False
        except:
          return False