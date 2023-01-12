const { Stack } = require("../graphs/utils");

/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */
const befittingBrackets = (str) => {
    const stack = new Stack()
    for (const s of str) {
        if(isOpeningBracket(s)) {
            stack.push(s)
        }
        if(isClosingBracket(s)) {
            if(stack.isEmpty()) return false;
            const top = stack.pop()
            if(!isOpeningBracket(top)) return false;
            if(closingBracketFor(top) !== s) return false;
        }
    }
    return stack.isEmpty();
};

const isClosingBracket = bracket => Object.values(brackets()).includes(bracket)
/**
 * @param {string} bracket 
 */
const isOpeningBracket = bracket => bracket in brackets();
/**
 * @param {string} openingBracket 
 */
const closingBracketFor = openingBracket => {
    return brackets()[openingBracket];
}

const brackets = () => ({
    '{': '}',
    '[': ']',
    '(': ')'
});

module.exports = {
    befittingBrackets,
};
