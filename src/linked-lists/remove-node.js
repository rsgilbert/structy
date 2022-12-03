/**
 * Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.
 * @param {LinkedListNode} head 
 * @param {*} targetVal 
 * @returns {LinkedListNode}
 */
const removeNode = (head, targetVal) => {
    if (head.val === targetVal) return head.next
    const result = head
    while (head?.next) {
        if (head.next.val === targetVal) {
            head.next = head.next.next
            break;
        }
        head = head.next
    }
    return result
};

module.exports = {
    removeNode,
};
