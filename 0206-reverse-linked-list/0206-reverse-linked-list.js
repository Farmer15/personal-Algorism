/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null) return null;
  let currentNode = head;
  const nodeArray = [];

  while (currentNode !== null) {
    nodeArray.push(currentNode);
    currentNode = currentNode.next;
  }

  for (let i = nodeArray.length - 1; i >= 0; i--) {
    nodeArray[i].next = nodeArray[i - 1] ?? null;
  }

  return nodeArray[nodeArray.length - 1];
};