/**
 * Write a function, linkedListCycle, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains a cycle.
 * @param {LinkedListNode} node 
 * @returns {boolean}
 */
const linkedListCycle = (node) => {
    const visited = new Set()
    while(node !== null) {
        if(visited.has(node)) return true;
        visited.add(node)
        node = node.next;
    }
    return false;
};

module.exports = {
    linkedListCycle,
};
