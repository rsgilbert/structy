/**
 * Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.
 * @param {LinkedListNode} head 
 * @param {number} index 
 * @returns {*}
 */
const getNodeValue = (head, index) => {
    let cursorIdx = 0;
    
    while(head) {
        if(cursorIdx === index) {
            return head.val 
        }
        cursorIdx++
        head = head.next
    }
    return null
};
  
  module.exports = {
    getNodeValue,
  };
  