# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        current_node = head
        cached_value = []

        while current_node:
            cached_value.append(current_node)
            current_node = current_node.next
        
        return cached_value[len(cached_value) // 2]