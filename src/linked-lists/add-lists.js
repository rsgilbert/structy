const { Node } = require('./utils')

/**
 * Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.
 * @param {LinkedListNode} head1
 * @param {LinkedListNode} head2
 * @returns {LinkedListNode}
 */
const addLists = (head1, head2) => {
   let sm = head1.val + head2.val 
   let remainder = sm % 10 
   let curry = Math.floor(sm / 10)
   let result = new Node(remainder)
   let sumHead = result 
   head1 = head1.next
   head2 = head2.next

    while(head1 && head2) {
        let sm = head1.val + head2.val + curry 
        let remainder = sm % 10
        curry = Math.floor(sm / 10)
        sumHead.next = new Node(remainder);
        [sumHead, head1, head2] = [sumHead.next, head1.next, head2.next];
    }
    while(head1) {
        let sm = head1.val + curry 
        let remainder = sm % 10 
        curry = Math.floor(sm / 10)
        sumHead.next = new Node(remainder);
        [sumHead, head1] = [sumHead.next, head1.next];
    }
    while(head2) {
        let sm = head2.val + curry 
        let remainder = sm % 10 
        curry = Math.floor(sm / 10)
        sumHead.next = new Node(remainder);
        [sumHead, head2] = [sumHead.next, head2.next];
    }
    if(curry > 0) {
        sumHead.next = new Node(curry)
    }

   return result 

};

module.exports = {
    addLists,
};