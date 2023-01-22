/**
 * Write a function, binarySearch, that takes in a sorted array of numbers and a target. The function should return the index where the target can be found within the array. If the target is not found in the array, then return -1.

You may assume that the input array contains unique numbers sorted in increasing order.

Your function must implement the binary search algorithm.
 * @param {*[]} numbers 
 * @param {*} target 
 * @param {number} startIdx
 * @param {number} endIdx
 * @returns {number}
 */
const binarySearch = (numbers, target, startIdx = 0, endIdx = numbers.length - 1) => {
    let middleIdx = Math.floor((startIdx + endIdx) / 2);
    if(middleIdx < startIdx) return -1;
    if(numbers[middleIdx] === target) return middleIdx;
    return (numbers[middleIdx] < target) 
        ? binarySearch(numbers, target, middleIdx + 1, endIdx)
        : binarySearch(numbers, target, startIdx, endIdx - 1);
};

module.exports = {
    binarySearch,
};
