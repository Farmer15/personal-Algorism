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
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }

  let currentNode = head;
  let nextNode = currentNode.next;
  const cachedValue = [];
  cachedValue.push(currentNode.val);

  while (nextNode !== null) {
    if (cachedValue.includes(nextNode.val)) {
      currentNode.next = nextNode.next;
    } else {
      cachedValue.push(nextNode.val);
      currentNode = nextNode;
    }

    nextNode = currentNode.next;
  }

  return head;
};