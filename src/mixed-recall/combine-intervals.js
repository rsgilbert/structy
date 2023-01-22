/**
 * Write a function, combineIntervals, that takes in an array of intervals as an argument. Each interval is an array containing a pair of numbers representing a start and end time. Your function should combine overlapping intervals and return an array containing the combined intervals.

For example:

Given two intervals:

[1, 4] and [3, 7]

The intervals overlap and
should be combined into:

[1, 7]
You may return the combined intervals in any order.

You can assume that the input array contains at least one interval and all intervals are valid with start < end.
 * @param {number[][]} intervals 
 * @param {number[][]} combinations
 * @returns {number[][]}
 */
const combineIntervals = (intervals, combinations = []) => {
    intervals = [...intervals];
    combinations = [...combinations];
    if (intervals.length === 0) {  
        // base case, we return combinations sorted by first element in each array
        return combinations.sort((a,b) => {
            return a[0] < b[0] ? -1 : 1;
        });
    }
    const interval = intervals.pop()
    for (const comb of combinations) {
        if(isOverlapping(interval, comb)) {
            [comb[0], comb[1]] = combine(interval, comb);
            return combineIntervals(intervals, combinations)
        }
    }
    // failed to find an overlap 
    combinations.push(interval)
    return combineIntervals(intervals, combinations);
};

/**
 * @param {*[]} arr1 
 * @param {*[]} arr2 
 * @returns {boolean}
 */
function isOverlapping(arr1, arr2) {
    const falseCase1 = arr1[1] < arr2[0]; // [3,7] [8,13]
    const falseCase2 = arr2[1] < arr1[0]; // [8,13] [3,7]
    return !falseCase1 && !falseCase2;
}

/**
 * @param {*[]} arr1 
 * @param {*[]} arr2 
 * @returns {*[]}
 */
function combine(arr1, arr2) {
    return [Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])];
}

module.exports = {
    combineIntervals,
};
