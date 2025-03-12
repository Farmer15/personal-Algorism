# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy_list = ListNode(None, head)
        first = dummy_list
        second = first

        while second:
            if first.next is None or first.next.next is None:
                return dummy_list.next
            
            second = first.next.next
            temp = second.next
            second.next = first.next
            first.next.next = temp
            first.next = second
            first = second = first.next.next

        return dummy_list.next