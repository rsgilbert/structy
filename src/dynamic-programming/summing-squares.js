/**
 * 
 * @param {number} n 
 */
const summingSquares = (n, memo = {}) => {
    if(isPerfectSquare(n)) return 1;
    if(n in memo) return memo[n];
    let mn = Infinity; 
    for(let i = 1; i < Math.sqrt(n); i++) {
        const remaining = n - (i ** 2);
        mn = Math.min(mn, 1 + summingSquares(remaining, memo));
    }
    memo[n] = mn;
    return memo[n];
};

function isPerfectSquare(n) {
    return Number.isInteger(Math.sqrt(n));
}

module.exports = {
    summingSquares,
};
