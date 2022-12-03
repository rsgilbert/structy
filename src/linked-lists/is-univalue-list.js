
/**
 * Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.
 * @param {LinkedListNode} head
 * @returns {boolean} - whether list has only one unique value
 */
const isUnivalueList = (head) => {
    if(!head) return false 
    let firstValue = head.val 
    while(head) {
        if(head.val !== firstValue) return false 
        head = head.next
    }
    return true 
  };
  
  module.exports = {
    isUnivalueList,
  };
  