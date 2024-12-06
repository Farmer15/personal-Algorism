# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = head
        reverse = None
        temp = copy.deepcopy(head)

        while prev:
            temp = temp.next
            prev.next = reverse
            reverse = prev
            prev = temp
        
        return reverse
