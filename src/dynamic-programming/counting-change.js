const { Stack, Queue } = require("../graphs/utils");


/**
 * Write a function, countingChange, that takes in an amount and an array of coins. The function should return the number of different ways it is possible to make change for the given amount using the coins.
 * Look at the picture in test_00 - counting-change.test.js 
 * @param {number} amount 
 * @param {number[]} coins
 * @param {Record<string,number>} memo 
 * @returns {number}
 */
const countingChange = (amount, coins, memo = {}) => {
    if (amount === 0) return 1;
    if (coins.length === 0) return 0
    if (amount < 0) return 0;
    if (numsStr([amount, coins]) in memo) return memo[numsStr([amount, coins])];

    const [_c, ...coinsForExclude] = coins;
    const exclude = countingChange(amount, coinsForExclude, memo)
    const include = countingChange(amount - coins[0], coins, memo)
    const result = exclude + include;
    memo[numsStr([amount, coins])] = result;
    return result;
};

/**
 * Write a function, countingChange, that takes in an amount and an array of coins. The function should return the number of different ways it is possible to make change for the given amount using the coins.
 * NB: not efficient
 * @param {number} amount 
 * @param {number[]} coins
 * @returns {number}
 */
const countingChangeUsingGraph = (amount, coins) => {
    // using dfs 
    const stack = new Stack()
    let result = 0
    const solutions = new Set()

    stack.push({ amount, solution: [] })

    while (!stack.isEmpty()) {
        const { amount, solution } = stack.pop()
        if (amount === 0) {
            // found soln
            if (!solutions.has(numsStr(solution))) {
                solutions.add(numsStr(solution))
                result++;
            }
        }
        if (amount > 0) {
            for (const coin of coins) {
                stack.push({ amount: amount - coin, solution: [...solution, coin] })
            }
        }
    }
    return result
}

function numsStr(nums) {
    return JSON.stringify([...nums].sort((a, b) => a > b ? 1 : -1))
}

module.exports = {
    countingChange,
};
