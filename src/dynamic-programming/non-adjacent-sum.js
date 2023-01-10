/**
 * 
 * @param {number[]} nums 
 * @param {number} i 
 */
const nonAdjacentSum = (nums, i = 0, memo = {}) => {
    if (i >= nums.length) return 0 ;
    if(i in memo) return memo[i];
    // max sum when nums[i] is involved
    const include = nums[i] + nonAdjacentSum(nums, i + 2, memo)
    // max sum when nums[i] is not involved
    const exclude = nonAdjacentSum(nums, i + 1, memo);
    memo[i] = Math.max(include, exclude);
    return memo[i];
}

/** 
 * Inefficient algorithm.
 * call using: new NonAdjacentSum().execute(0, nums)
 */
class NonAdjacentSum_Ineficient {
    /** @type { Record<string, number> } */
    memo = {}


    /**
     * @param {number} n
     * @param {number[]} nums 
     */
    execute(n, nums) {
        if (nums.length === 0) return n;
        if (this.numsStr(nums) in this.memo) return this.memo[this.numsStr(nums)];
        const result = n + nums.reduce((mx, num, idx) => {
            const newNums = nums.filter((_num, idxF) => idxF > idx + 1)
            return Math.max(mx, this.execute(num, newNums))
        }, -Number.MIN_VALUE);
        this.memo[this.numsStr(nums)] = result;
        return result;
    }

    /**
     * 
     * @param {number[]} nums 
     * @returns 
     */
    numsStr(nums) {
        return JSON.stringify([...nums].sort((a, b) => a > b ? 1 : -1))
    }
}

module.exports = {
    nonAdjacentSum,
};
