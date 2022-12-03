/**
 * Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.
 * @param {LinkedListNode} head 
 * @returns {any[]}
 */
const linkedListValues = (head) => {
    const result = []
    while(head) {
        result.push(head.val)
        head = head.next
    }
    return result
};

module.exports = {
    linkedListValues,
};
