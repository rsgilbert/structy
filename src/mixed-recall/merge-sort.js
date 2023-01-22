/**
 * Write a function, mergeSort, that takes in an array of numbers as an argument. The function should return a new array containing elements of the original array sorted in ascending order. Your function must implement the merge sort algorithm.
 * @param {*[]} elements 
 * @returns {*[]}
 */
const mergeSort = (elements) => {
    if (elements.length < 2) return [...elements];
    const middleIdx = Math.floor(elements.length / 2)
    const left = mergeSort(elements.slice(0, middleIdx))
    const right = mergeSort(elements.slice(middleIdx))
    return merge(left, right)
};

/**
 * Merge two sorted arrays into one new sorted array
 * @param {*[]} arr1 
 * @param {*[]} arr2 
 * @returns {*[]}
 */
function merge(arr1, arr2) {
    let result = []
    while (arr1.length > 0 && arr2.length > 0) {
        (arr1[0] < arr2[0])
            ? result.push(arr1.shift())
            : result.push(arr2.shift());
    }
    result.push(...arr1, ...arr2)
    return result;
}

module.exports = {
    mergeSort,
};
