/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 * @param { Record<string,number>} memo 
 * @returns {number}
 */
const overlapSubsequence = (str1, str2, memo = {}) => {
    if(str1 === '' || str2 === '') return 0;
    const key = arrayStr([str1, str2]);
    if(key in memo) return memo[key];

    const str1Subst = str1.substring(1);
    const str2Subst = str2.substring(1);
    let sub1 = 0;
    if(str1[0] === str2[0]) {
        return 1 + overlapSubsequence(str1Subst, str2Subst, memo)
    }
    const sub2 = overlapSubsequence(str1, str2Subst, memo);
    const sub3 = overlapSubsequence(str1Subst, str2, memo);
    memo[key] = Math.max(sub1, sub2, sub3);
    return memo[key];
};

const arrayStr = arr => JSON.stringify(arr)

module.exports = {
    overlapSubsequence,
};
