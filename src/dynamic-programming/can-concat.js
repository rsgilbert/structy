/**
 * Write a function, canConcat, that takes in a string and an array of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.
 * @param {string} s 
 * @param {string[]} words 
 * @param {Record<string,any>} memo
 * @returns {boolean}
 */
const canConcat = (s, words, memo = {}) => {
    if (s === '') return true;
    if (s in memo) return memo[s];
    for (const word of words.filter(w => w.length > 0)) {
        if (s.startsWith(word)) {
            if (canConcat(s.substring(word.length), words, memo)) {
                memo[s] = true;
                return memo[s];
            }
        }
    }
    memo[s] = false;
    return memo[s];
};

module.exports = {
    canConcat,
};
