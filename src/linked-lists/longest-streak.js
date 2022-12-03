/**
 * Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.
 * @param {LinkedListNode} head
 * @returns {number} - length of longest streak
 */
const longestStreak = (head) => {
    let result = 0 

    let prevValue = undefined
    let currentStreak = 0 
    while(head) {
        currentStreak = (head.val === prevValue) ? currentStreak + 1 : 1
        result = Math.max(result, currentStreak)
        prevValue = head.val 
        head = head.next
    }
    return result 
};

module.exports = {
    longestStreak,
};
