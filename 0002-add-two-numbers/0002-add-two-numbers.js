/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const numL1 = getAllNode(l1);
  const numL2 = getAllNode(l2);
  const result = sumStringNum(numL1, numL2);
  const head = new ListNode(result[result.length - 1]);
  let currentNode = head;
  
  for (let i = result.length - 2; i >= 0; i--) {
    const nextNode = new ListNode(result[i]);

    currentNode.next = nextNode;
    currentNode = currentNode.next;
  }

  return head;
};

function getAllNode(node) {
  if (!node) {
    return "";
  }

  return getAllNode(node.next) + `${node.val}`
}

function sumStringNum(numStr1, numStr2) {
  let copiedStr1 = numStr1;
  let copiedStr2 = numStr2;
  
  copiedStr1 = copiedStr1.padStart(copiedStr2.length, "0");
  copiedStr2 = copiedStr2.padStart(copiedStr1.length, "0");
  
  let result = "";
  let index1 = copiedStr1.length - 1;
  let index2 = copiedStr2.length - 1;
  let temp = 0;

  while (index1 >= 0 || index2 >= 0) {    
    let sum = +copiedStr1[index1] + +copiedStr2[index2] + temp;
    temp = 0;
    
    if (sum >= 10) {
      temp = 1;
      sum %= 10
    }
    
    result = sum.toString() + result;
    
    index1--;
    index2--;
  }
  
  return temp ? temp + result : result;
}