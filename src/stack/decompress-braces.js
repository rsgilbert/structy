const { Stack } = require("../graphs/utils");
/**
 * Write a function, decompressBraces, that takes in a compressed string as an argument. The function should return the string decompressed.
The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.
You may assume that every number n is guaranteed to be an integer between 1 through 9.
You may assume that the input is valid and the decompressed string will only contain alphabetic characters.
 * @param {string} s 
 * @returns {string}
 */
const decompressBraces = (s) => {
    return decompressBraces2(1, s, 0, s.length-1);
};

/**
 * @param {number} repeat
 * @param {string} s 
 * @param {number} startIdx 
 * @param {number} endIdx 
 * @returns {string}
 */
const decompressBraces2 = (repeat, s, startIdx, endIdx) => {
    let result = ''
    while (startIdx <= endIdx) {
        const c = s[startIdx];
        if (c.match(/[1-9]/)) {
            // is digit
            const closingIdx = indexOfClosingBracket(s, startIdx+1);
            result += decompressBraces2(Number(c), s, startIdx + 2, closingIdx)
            startIdx = closingIdx + 1;
        }
        else if(c === '{' || c === '}') startIdx++;
        else {
            // not digit and not bracket
            result += c;
            startIdx++;
        }
    }
    return result.repeat(repeat);
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
        if (c === '{') stack.push(c);
        if (c === '}') stack.pop();
    }
    return startIdx;
}

module.exports = {
    decompressBraces,
};
