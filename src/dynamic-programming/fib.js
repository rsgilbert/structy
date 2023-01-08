const fib = (n) => {
    return fibRecur(n, { 
        0: 0,
        1: 1
    })
};

/**
 * 
 * @param {number} n 
 * @param {Record<string,number>} memo 
 * @returns {number}
 */
const fibRecur = (n, memo) => {
    if(n in memo) return memo[n];
    return memo[n] = fibRecur(n-1, memo) + fibRecur(n-2, memo);
}

module.exports = {
    fib,
};
