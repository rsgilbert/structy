const { Stack } = require("./utils");

/**
 * Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island.
 * @param {string[][]} grid 
 * @returns {number} - size of minimum island 
 */
const minimumIsland = (grid) => {
    let result = Number.MAX_SAFE_INTEGER;
    const visited = new Set()
    for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
        const row = grid[rowIdx];
        for (let colIdx = 0; colIdx < row.length; colIdx++) {
            if (isUnvisitedLand(rowIdx, colIdx, grid, visited)) {
                const size = exploreLandMass(rowIdx, colIdx, grid, visited)
                result = Math.min(result, size)
            }
        }
    }
    return result
};

/**
 * Explore land mass starting from a given cell marking off all connected land cells as visited
 * @param {number} rowIdx 
 * @param {number} colIdx 
 * @param { string[][]} grid
 * @param {Set} visited 
 * @returns {number} size of island
 */
function exploreLandMass(rowIdx, colIdx, grid, visited) {
    let size = 0;
    const stack = new Stack()
    stack.push({ rowIdx, colIdx })
    while (!stack.isEmpty()) {
        const { rowIdx, colIdx } = stack.pop()
        if (isUnvisitedLand(rowIdx, colIdx, grid, visited)) {
            // we explore this land mass to add it to the visited set
            visited.add(cellStr(rowIdx, colIdx))
            size++
            if (colIdx >= 1) {
                // left
                stack.push({ rowIdx, colIdx: colIdx - 1 })
            }
            if (colIdx <= grid[0]?.length - 2) {
                // right
                stack.push({ rowIdx, colIdx: colIdx + 1 })
            }
            if (rowIdx <= grid.length - 2) {
                // bottom
                stack.push({ rowIdx: rowIdx + 1, colIdx })
            }
        }
    }
    return size
}

/**
 * @param {number} rowIdx 
 * @param {number} colIdx 
 * @param {Set} visited 
 * @returns 
 */
function isVisited(rowIdx, colIdx, visited) {
    return visited.has(cellStr(rowIdx, colIdx))
}
/** 
 * @param {number} rowIdx 
 * @param {number} colIdx 
 */
const cellStr = (rowIdx, colIdx) => JSON.stringify({ rowIdx, colIdx })

function isLand(rIdx, cIdx, grid) {
    return grid[rIdx][cIdx] === 'L'
}

/**
 * Explore land mass starting from a given cell marking off all connected land cells as visited
 * @param {number} rowIdx 
 * @param {number} colIdx 
 * @param { string[][]} grid
 * @param {Set} visited 
 * @returns {boolean}
 */
function isUnvisitedLand(rowIdx, colIdx, grid, visited) {
    return isLand(rowIdx, colIdx, grid) && !isVisited(rowIdx, colIdx, visited)
}

module.exports = {
    minimumIsland,
};
