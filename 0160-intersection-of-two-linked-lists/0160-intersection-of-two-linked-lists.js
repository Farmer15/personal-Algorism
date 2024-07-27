/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const linkedListANode = [];
  let currentNode = headA;

  while(currentNode) {
    linkedListANode.push(currentNode);
    currentNode = currentNode.next;
  }
  currentNode = headB;
  while(currentNode) {
    if (linkedListANode.includes(currentNode)) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  
  return null;
};