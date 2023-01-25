/**
 * Write a function, tokenReplace, that takes in an object of tokens and a string. The function should return a new string where tokens are replaced.

Tokens are enclosed in a pair of '$'. You can assume that the input string is properly formatted. Tokens should be replaced from left to right in the string (see test_05).
 * @param { string } s 
 * @param {Record<string,string>} tokens 
 */
const tokenReplace = (s, tokens) => {
    let token = nextToken(s)
    if (token === '') return s;
    return tokenReplace(s.replace(token, tokens[token]), tokens)
};

/**
 * @param {string} s 
 * @returns {string}
 */
function nextToken(s) {
    let startIdx = s.indexOf('$')
    let endIdx = startIdx + 1 + s.substring(startIdx + 1).indexOf('$')
    return s.substring(startIdx, endIdx + 1)
}

module.exports = {
    tokenReplace,
};
