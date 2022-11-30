/**
 * Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.
 * @param {number[]} nums 
 * @returns {number[]} 
 */
const fiveSort = (nums) => {
    const swap = (idx1, idx2) => {
        [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]]
    }
    // always keep idxOfLastNonFive correct
    let idxOfLastNonFive = nums.length -1;
    while(nums[idxOfLastNonFive] === 5) {
        idxOfLastNonFive--;
    }
    
    for (let i = 0; i <= idxOfLastNonFive; i++) {
        if (nums[i] === 5) {
            while(nums[idxOfLastNonFive] === 5) {
                idxOfLastNonFive--;
            }
            swap(i, idxOfLastNonFive)
            while(nums[idxOfLastNonFive] === 5) {
                idxOfLastNonFive--;
            }
        }
    }
    return nums

};

module.exports = {
    fiveSort,
};
