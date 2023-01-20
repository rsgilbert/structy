
/**
 * @param {string} s
 * @returns {string[]}
 */
const parentheticalPossibilities = (s) => {
    const startBracketIndex = s.indexOf('(')
    const endBracketIndex = s.indexOf(')')
    if(startBracketIndex === -1 && endBracketIndex === -1) {
        return [s];
    }
    let result = []
    for(const c of s.substring(startBracketIndex+1, endBracketIndex)) {
        const s2 = s.substring(0, startBracketIndex) + c + s.substring(endBracketIndex + 1)
        result.push(...parentheticalPossibilities(s2))
    }
    return result;
};



module.exports = {
    parentheticalPossibilities,
};
