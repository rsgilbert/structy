/**
 * Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.
 * @param {number[]} a 
 * @param {number[]} b 
 * @returns {number[]} the intersection of the two arrays
 */
const intersection = (a, b) => {
    const bSet = new Set(b)
    return a.filter(v => bSet.has(v))
};

module.exports = {
    intersection,
};
