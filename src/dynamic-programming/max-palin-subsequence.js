/**
 * 
 * @param {string} str 
 * @param {number} startIdx 
 * @param {number} endIdx 
 * @param {Record<string, number>} memo 
 */
const maxPalinSubsequence = (str, startIdx = 0, endIdx = str.length - 1, memo = {}) => {
    // empty string
    if(endIdx - startIdx === -1) return 0;
    // single character
    if(endIdx - startIdx === 0) return 1;
    if(indexStr(startIdx, endIdx) in memo) return memo[indexStr(startIdx, endIdx)];

    if(str[startIdx] === str[endIdx]) {
        // start character equals to last character
        memo[indexStr(startIdx, endIdx)] = 2 + maxPalinSubsequence(str, startIdx+1, endIdx-1, memo)
    }
    else {
        // start character different from last character 
        const leftResult = maxPalinSubsequence(str, startIdx+1, endIdx, memo)
        const rightResult = maxPalinSubsequence(str, startIdx, endIdx-1, memo)
        memo[indexStr(startIdx, endIdx)] = Math.max(leftResult, rightResult)
    }
    return memo[indexStr(startIdx, endIdx)];
};

const indexStr = (i1, i2) => `${i1},${i2}`;

module.exports = {
    maxPalinSubsequence,
};
