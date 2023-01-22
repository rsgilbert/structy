/**
 * You've been hired to plant flowers in a garden with n different positions. There are m different flower types. The prices of flowers types vary depending on which position they are planted. Your bosses are picky, they tell you to never plant two of the same flower type right next to each other. What is the minimum cost we need to plant a flower in each position of the garden?
Write a function, positioningPlants, that takes in a 2D array with dimensions n * m. Each row of the array represents the costs of the flower types at that position. This means that costs[i][j] represents the cost of planting flower type j at position i. For example:
Given these costs,

costs = [
  [4, 3, 7],
  [6, 1, 9],
  [2, 5, 3]
]

The costs of plants at position 1 are $6, $1, and $9.
The cost of planting flower type 0 at position 1 is $6.
The cost of planting flower type 2 at position 1 is $9.
The function should return the minimum cost of planting flowers without placing the same flower type in adjacent positions.
* @param {number[][]} costs 
* @param {number} positionIdx
* @param {number} prevTypeIdx
* @param {Record<string,number>} memo - cache 
* @returns {number}
 */
const positioningPlants = (costs, positionIdx = 0, prevTypeIdx = -1, memo = {}) => {
    if (positionIdx >= costs.length) return 0;
    const key = positionIdx + ',' + prevTypeIdx;
    if (key in memo) return memo[key];
    const costArr = costs[positionIdx];

    let minCost = Infinity;
    for (let i = 0; i < costArr.length; i++) {
        if (i === prevTypeIdx) continue;
        let c = costArr[i] + positioningPlants(costs, positionIdx + 1, i, memo);
        minCost = Math.min(minCost, c);
    }
    memo[key] = minCost;
    return memo[key];
};

module.exports = {
    positioningPlants,
};
