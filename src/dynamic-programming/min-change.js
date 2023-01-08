const { Queue } = require("../graphs/utils");

/**
 * Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.
 * @param {number} amount 
 * @param {number[]} coins 
 * @param {Record<string, number>} memo 
 * @returns { number }
 */
const minChange = (amount, coins, memo = { 0: 0 }) => {
    if(amount in memo) return memo[amount];
    if(amount < 0) {
        memo[amount] = -1;
        return memo[amount];
    }
    const results = coins
        .map(coin => minChange(amount - coin, coins, memo))
        .filter(v => v !== -1);
    memo[amount] = 1 + Math.min(...results);
    if(results.length === 0) { 
        memo[amount] = -1;
    }
    return memo[amount];
}

// solving minimum change using breadth first search
const minChange2 = (amount, coins) => {
    const queue = new Queue()
    const visited = new Set()
    queue.enqueue({ amount, steps: 0 })
    while (!queue.isEmpty()) {
        const { amount, steps } = queue.dequeue()
        if (amount === 0) return steps;
        if (!visited.has(amount) && amount > 0) {
            visited.add(amount)
            for (const coin of coins) {
                queue.enqueue({ amount: amount - coin, steps: steps + 1 })
            }
        }
    }
    return -1;
};

module.exports = {
    minChange,
};
