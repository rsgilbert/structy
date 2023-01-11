/**
 * Write a function, arrayStepper, that takes in an array of numbers as an argument. You start at the first position of the array. The function should return a boolean indicating whether or not it is possible to reach the last position of the array. When situated at some position of the array, you may take a maximum number of steps based on the number at that position.
 * @param {number[]} nums 
 * @param {number} i 
 * @returns {boolean}
 */
const arrayStepper = (nums, i = 0, memo = {}) => {
    if(i === nums.length - 1) return true;
    if(i in memo) return memo[i];

    for(let idx = 1; idx <= nums[i]; idx++) {
        if(arrayStepper(nums, i + idx, memo)) {
            memo[i] = true;
            return memo[i];
        }
    }
    memo[i] = false;
    return memo[i];
};

module.exports = {
    arrayStepper,
};
