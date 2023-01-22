/**
 * Write a function, maxIncreasingSubseq, that takes in an array of numbers as an argument. The function should return the length of the longest subsequence of strictly increasing numbers.
A subsequence of an array can be created by deleting any elements of the array, while maintaining the relative order of elements.
* @param {number[]} numbers 
* @param {number} i - current index in array
* @param { number} mx - maximum value in subsequence, also the last item in subsequence
* @param {number} size - size of subsequence
* @param {Record<string, number>} memo - cache of previous results
* @returns {number}
 */
const maxIncreasingSubseq = (numbers, i = 0, mx=-Infinity, size=0, memo = {}) => {
    if (i >= numbers.length) return size;
    const key = strSub(i, mx, size)
    if(key in memo) return memo[key];
    if(mx >= numbers[i]) {
        // skip item at current index. Dont include it in subsequence
        return maxIncreasingSubseq(numbers, i+1, mx, size, memo)
    }
    const include = maxIncreasingSubseq(numbers, i+1, numbers[i], size+1, memo);
    const exclude = maxIncreasingSubseq(numbers, i+1, mx, size, memo)
    const result = Math.max(include, exclude);
    memo[key] = result;
    return result;
};

const strSub = (i, mx, size) => {
    return JSON.stringify({ i, mx, size})
}
/**
 * @param {number[]} seq 
 * @returns {number}
 */
function biggestAmt(seq) {
    if (seq.length === 0) return -Infinity;
    return seq[seq.length - 1];
}

module.exports = {
    maxIncreasingSubseq,
};
