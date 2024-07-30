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
var swapPairs = function(head) {
  if (!head) return null;

  const result = [];
  let temp;
  let currentNode = head;

  while (currentNode) {
    if (temp) {
      result.push(currentNode);
      result.push(temp);
      temp = null;
    } else {
      temp = currentNode;
    }
    currentNode = currentNode.next;
  }

  if (temp) {
    result.push(temp);
  }

  for (let i = 0; i < result.length - 1; i++) {
    result[i].next = result[i + 1];
    result[i + 1].next = null;
  }

  return result[0];
};