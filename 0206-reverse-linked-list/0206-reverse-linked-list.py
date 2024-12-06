# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = head
        reverse = None

        while prev:
            temp = ListNode(prev.val, prev.next)
            prev.next = reverse
            reverse = prev
            prev = temp.next
        
        return reverse
