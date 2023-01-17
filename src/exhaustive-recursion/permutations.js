/**
 * Write a function, permutations, that takes in an array an argument. The function should return a 2D array where each subarray represents one of the possible permutations of the array.
The subarrays may be returned in any order.
You may assume that the input array contains unique elements.
 * @param {(number|string)[]} items 
 * @param { number } i 
 * @param { (number|string)[][]} perms
 * @returns {(number|string)[][]}
 */
const permutations = (items, i = 0, perms = [[]]) => {
    if (i >= items.length) return perms;
    const newPerms = []
    for (const perm of perms) {
        for (let idx = 0; idx < perm.length + 1; idx++) { // notice that we go past perm length
            const arr = [...perm];
            arr.splice(idx, 0, items[i]);
            newPerms.push(arr);
        }
    }
    const result = permutations(items, i + 1, newPerms)
    return result

};

module.exports = {
    permutations,
};
