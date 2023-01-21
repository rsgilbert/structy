
/**
 * Write a function, linkedPalindrome, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list is a palindrome. A palindrome is a sequence that is the same both forwards and backwards.
 * @param {LinkedListNode} node 
 * @returns {boolean}
 */
const linkedPalindrome = (node) => {
    let elements = []
    while(node !== null) {
        elements.push(node.val)
        node = node.next;
    }
    while(elements.length > 1) {
        if(elements.pop() !== elements.shift()) return false;
    }
    return true;
};

module.exports = {
    linkedPalindrome,
};
