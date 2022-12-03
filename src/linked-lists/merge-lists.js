/**
 * Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.
 * @param {LinkedListNode} head1
 * @param {LinkedListNode} head2 
 * @returns {LinkedListNode} - head of merged list
 */
const mergeLists = (head1, head2) => {
    let [runningHead, otherHead] = head1.val < head2.val ? [head1, head2] : [head2, head1] 
    let result = runningHead 

    while(runningHead.next) {
        while(otherHead && otherHead.val < runningHead.next.val) {
            // insert otherHead node into runningHead
            [runningHead.next, otherHead.next, otherHead] = [otherHead, runningHead.next, otherHead.next];
            runningHead = runningHead.next
        }
        runningHead = runningHead.next
    }
    runningHead.next = otherHead

    return result
};
  
  module.exports = {
    mergeLists,
  };
  