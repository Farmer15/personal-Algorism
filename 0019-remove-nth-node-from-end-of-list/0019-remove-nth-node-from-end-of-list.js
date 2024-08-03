/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const newNode = new ListNode(_, head);
  let currentNode = newNode;
  let totalNodeCount = 0;
  let count = 0;

  while (currentNode) {
    totalNodeCount++;
    currentNode = currentNode.next;
  }
 
  if (totalNodeCount === 1 && n === 1) return null;
  if (totalNodeCount - 1 === n) return head.next;

  currentNode = newNode;

  while (currentNode) {
    if (count === totalNodeCount - n - 1) {
      currentNode.next = currentNode?.next?.next ?? null;
      break;
    }

    count++;
    currentNode = currentNode.next;
  }

  return head;
};