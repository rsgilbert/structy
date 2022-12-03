/**
 * Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.
 * @param {LinkedListNode} head1
 * @param {LinkedListNode} head2 
 * @returns {LinkedListNode} - head of zippered list
 */
 const zipperLists = (head1, head2) => {
    let result = head1 

    while(head1 && head2) {
        let [temp1, temp2] = [head1.next, head2.next]
        head1.next = head2 
        if(temp1) {
            head2.next = temp1
        }
        [head1, head2] = [temp1, temp2]
    }   

    return result 
  };
  
  module.exports = {
    zipperLists,
  };
  