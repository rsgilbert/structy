/**
 * Write a function, linkedPalindrome, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list is a palindrome. A palindrome is a sequence that is the same both forwards and backwards.
 * @param {LinkedListNode} node 
 * @returns {any}
 */
const middleValue = (node) => {
    let elements = []
    while(node !== null) {
        elements.push(node.val)
        node = node.next;
    }
    if(elements.length % 2 === 0) {
        // even count
        return elements[elements.length / 2];
    }
    else {
        // odd count
        return elements[Math.floor(elements.length / 2)];
    }
  };
  
  module.exports = {
    middleValue,
  };
  