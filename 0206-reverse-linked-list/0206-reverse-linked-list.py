# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None
        
        prev = head
        reverse = None
        temp = ListNode(head.val, head.next)

        while prev:
            temp = temp.next
            prev.next = reverse
            reverse = prev
            prev = temp
        
        return reverse
