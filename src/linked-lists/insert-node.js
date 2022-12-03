const { Node } = require("./utils");

/**
 * Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.
 * @param {LinkedListNode} head 
 * @param {*} value 
 * @param {number} index
 * @returns {LinkedListNode}
 */
const insertNode = (head, value, index) => {
    const nod = new Node(value)
    if(index === 0) {
        nod.next = head 
        return nod 
    }
    let runningIdx = 0 
    let result = head 
    while(head) {
        if(runningIdx === index - 1) {
            [head.next, nod.next] = [nod, head.next] 
            return result 
        }
        runningIdx ++
        head = head.next 
    }
    return result 
};

module.exports = {
    insertNode,
};

