/**
 * Write a function, createCombinations, that takes in an array and a length as arguments. The function should return a 2D array representing all of the combinations of the specifized length.
 * @param {any[]} items 
 * @param {number} k - size of combinations array 
 * @param {number} startIdx 
 * @returns {any[][]}
 */
const createCombinations = (items, k, startIdx=0) => {
    if(k === 0) return [[]]
    const result = []
    for(let i = startIdx; i <= items.length - k; i++) {
        let combs = createCombinations(items, k-1, i+1).map(c => [items[i], ...c])
        result.push(...combs)
    }
    return result;
};

module.exports = {
    createCombinations,
};
