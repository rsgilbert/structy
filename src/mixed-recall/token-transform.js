const { tokenReplace } = require('./token-replace')
/**
 * Write a function, tokenTransform, that takes in an object of tokens and a string. In the object, the replacement values for a token may reference other tokens. The function should return a new string where tokens are replaced with their fully evaluated string values.

Tokens are enclosed in a pair of '$'.

You may assume that there are no circular token dependencies.
 * @param {string} s 
 * @param {Record<string,string>} tokens 
 */
const tokenTransform = (s, tokens) => {
    expandTokens(tokens)
    return tokenReplace(s, tokens)
};

/**
* @param {Record<string,string>} tokens 
* @returns {void}
*/
function expandTokens(tokens) {
    for (let token in tokens) {
       expandToken(token, tokens)
    }
}

/**
 * @param {string} token
* @param {Record<string,string>} tokens 
* @returns {string}
*/
function expandToken(token, tokens) {
    let value = tokens[token];
    let token2 = nextToken(value)
    if (token2 === '') return value;
    tokens[token] = value.replace(token2, expandToken(token2, tokens))
    return expandToken(token, tokens)
}

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
    tokenTransform,
};
