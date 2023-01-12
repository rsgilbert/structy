/**
 * Write a function, quickestConcat, that takes in a string and an array of words as arguments. The function should return the minimum number of words needed to build the string by concatenating words of the array.
 * @param {string} s 
 * @param {string[]} words 
 * @returns {number}
 */
const quickestConcat = (s, words) => {
    const quickest = quickestConcatRecur(s, words, {})
    if(isFinite(quickest)) return quickest;
    return -1;
}

/**
 * @param {string} s 
 * @param {string[]} words 
 * @param {Record<string,number>} memo
 * @returns {number}
 */
const quickestConcatRecur = (s, words, memo) => {
    if (s === '') return 0;
    if (s in memo) return memo[s];
    memo[s] = words 
        .filter(w => w.length > 0)
        .reduce((mn, word) =>{
            if (s.startsWith(word)) {
                return Math.min(mn, 1 + quickestConcatRecur(s.substring(word.length), words, memo))
            }
            return mn;
        }, Infinity);
    return memo[s];
};

module.exports = {
    quickestConcat,
};
