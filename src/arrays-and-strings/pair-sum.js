/**
 * Write a function, pairSum, that takes in an array and a target sum as arguments. 
 * The function should return an array containing a pair of indices whose elements sum to the given target. 
 * The indices returned must be unique.
 * @param {number[]} numbers 
 * @param {number} targetSum 
 * @returns {[number,number]} the pair sum
 */
const pairSum = (numbers, targetSum) => {
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === targetSum) {
                return [i, j]
            }
        }
    }
};

module.exports = {
    pairSum,
};
