# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        cur_node = head
        total_length = 0
        
        while cur_node:
            cur_node = cur_node.next
            total_length += 1
        
        if total_length == n:
            return head.next if head.next else None
        
        cur_node = head
        target = total_length - n
        count = 0

        while cur_node.next:
            if count == target - 1:
                cur_node.next = cur_node.next.next
                return head

            cur_node = cur_node.next
            count += 1
        
        cur_node.next = None
        return head



                