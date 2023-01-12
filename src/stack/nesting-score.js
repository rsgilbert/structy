const { Stack } = require("../graphs/utils");

/**
 * Write a function, nestingScore, that takes in a string of brackets as an argument. The function should return the score of the string according to the following rules:

[] is worth 1 point
XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
[S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
You may assume that the input only contains well-formed square brackets.
 * @param {string} str
  @returns {number} 
 */
const nestingScore = (str) => {
    return nestingStore2(str, 0, str.length - 1)
};

/**
 * 
 * @param {string} str 
 * @param {number} startIdx 
 * @param {number} endIdx 
 * @returns { number }
 */
const nestingStore2 = (str, startIdx, endIdx) => {
    let result = 0;
    while(startIdx <= endIdx) {
        if(str.substring(startIdx, startIdx+2) === '[]') {
            // form of [] or [][]
            result += 1;
            startIdx += 2;
        }
        else {
            // form of [S] eg [[]]
            const closingIdx = indexOfClosingBracket(str, startIdx)
            result += 2 * nestingStore2(str, startIdx + 1, closingIdx - 1)
            startIdx = closingIdx+1;
        }
    }
    return result;
}

/**
 * @param {string} s
 * @param {number} startIdx  - index of opening bracket
 */
const indexOfClosingBracket = (s, startIdx) => {
    const stack = new Stack();
    stack.push(s[startIdx]);
    while (!stack.isEmpty()) {
        startIdx++;
        const c = s[startIdx];
        if (c === '[') stack.push(c);
        if (c === ']') stack.pop();
    }
    return startIdx;
}


module.exports = {
    nestingScore,
};
