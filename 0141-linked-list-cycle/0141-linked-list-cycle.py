# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head or not head.next:
            return False

        one_jump_node = head
        two_jump_node = head

        while two_jump_node and two_jump_node.next:
            one_jump_node = one_jump_node.next
            two_jump_node = two_jump_node.next.next

            if one_jump_node == two_jump_node:
                return True

        return False