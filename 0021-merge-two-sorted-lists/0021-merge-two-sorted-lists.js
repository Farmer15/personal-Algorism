
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function LinkedList(head) {
  this.head = head;
  this.tail = null;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const listArray = [];
  let currentNode = new ListNode();
  const resultList = new LinkedList(currentNode);
  let currentList1 = list1;
  let currentList2 = list2;
  let index = 0;

  while (currentList1) {
    listArray.push(currentList1.val);
    currentList1 = currentList1.next;
  }

  while (currentList2) {
    listArray.push(currentList2.val);
    currentList2 = currentList2.next;
  }
  
  listArray.sort((a, b) => a - b);

 while (index < listArray.length) {
  currentNode.next = new ListNode(listArray[index]);
  currentNode = currentNode.next;
  index++;
 }

return resultList.head.next;
};
