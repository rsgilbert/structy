const tribonacci = (n, memo={ 0: 0, 1: 0, 2: 1 }) => {
    if(n in memo)return memo[n];
    return memo[n] = tribonacci(n-1, memo) + tribonacci(n-2, memo) + tribonacci(n-3, memo)
};

module.exports = {
    tribonacci,
};
