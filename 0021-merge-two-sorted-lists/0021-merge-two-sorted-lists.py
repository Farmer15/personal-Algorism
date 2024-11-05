# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        current_node1 = list1
        current_node2 = list2
        merge_sorted_node_head = ListNode()
        merge_sorted_node = merge_sorted_node_head

        while current_node1 or current_node2:
            if not current_node1:
                merge_sorted_node.next = current_node2
                break
              
            if not current_node2:
                merge_sorted_node.next = current_node1
                break

            if current_node1.val >= current_node2.val:
                merge_sorted_node.next = current_node2
                current_node2 = current_node2.next
            else:
                merge_sorted_node.next = current_node1
                current_node1 = current_node1.next
            
            merge_sorted_node = merge_sorted_node.next
        
        return merge_sorted_node_head.next