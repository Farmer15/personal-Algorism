/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head) {
    return null;
  }

  const resultNode = new ListNode();
  let reverseArray = [];
  let currentNode = head;

  while (currentNode) {
    reverseArray.push({...currentNode});

    if (reverseArray.length === k) {
      for (let i = reverseArray.length - 1; i > 0; i--) {
        reverseArray[i].next = reverseArray[i - 1];
      }
      
      if (!resultNode.tail) {
        resultNode.next = reverseArray[reverseArray.length - 1];
      } else {
        resultNode.tail.next = reverseArray[reverseArray.length - 1];
      }

      resultNode.tail = reverseArray[0];
      reverseArray[0].next = null
      reverseArray = [];
    }

    currentNode = currentNode.next;
  }

  if (reverseArray.length !== 0) {
    resultNode.tail.next = reverseArray[0];
    reverseArray[reverseArray.length - 1].next = null;
  }

  return resultNode.next;
};