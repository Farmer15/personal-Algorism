/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const nodeGather = [];

  lists.forEach((linkedList) => {
    let currentNode = linkedList;

    while (currentNode) {
      nodeGather.push(currentNode);
      currentNode = currentNode.next;
    }
  })

  if (nodeGather.length === 0) {
    return null;
  }

  nodeGather.sort((a, b) => a.val - b.val)

  for (let i = 0; i < nodeGather.length - 1; i++) {
    const currentNode = nodeGather[i];
    const nextNode = nodeGather[i + 1];

    currentNode.next = nextNode
  }

  return nodeGather[0];
};