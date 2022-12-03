/**
 * Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
 * @param {LinkedListNode} head 
 */
const reverseList = (head) => {
    let prev = null 
    while(head) {
        [head.next, prev, head] = [prev, head, head.next]
    }
    return prev
};

module.exports = {
    reverseList,
};