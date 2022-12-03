
/**
 * Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target
 * @param {LinkedListNode} head 
 * @param {*} target 
 */
const linkedListFind = (head, target) => {
    while(head){
        if(head.val === target) {
            return true
        }
        head = head.next
    }
    return false
};

module.exports = {
    linkedListFind,
};
