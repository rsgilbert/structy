/**
 * 
 * @param {LinkedListNode} head 
 */
const sumList = (head) => {
    let result = 0 
    while(head){
        result += head.val
        head = head.next
    }
    return result 
};

module.exports = {
    sumList,
};
