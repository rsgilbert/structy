const { Queue } = require("./utils");

/**
 * Write a function, closestCarrot, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.
 * @param {string[][]} grid - C is carrot, X is wall O is open space
 * @param {number} startRow 
 * @param {number} startCol 
 * @returns {number} length of shortest path to carrot
 */
const closestCarrot = (grid, startRow, startCol) => {
    const queue = new Queue();
    const visited = new Set();
    queue.enqueue({
        rowIdx: startRow,
        colIdx: startCol,
        distance: 0
    })
    while (!queue.isEmpty()) {
        const { rowIdx, colIdx, distance } = queue.dequeue()
        if (!visited.has(cellStr(rowIdx, colIdx))) {
            visited.add(cellStr(rowIdx, colIdx))
            if(grid[rowIdx][colIdx] === 'C') {
                return distance;
            }
            // up
            if(grid[rowIdx-1] && grid[rowIdx-1][colIdx] !== 'X') {
                queue.enqueue({
                    rowIdx: rowIdx-1,
                    colIdx: colIdx,
                    distance: distance + 1
                })
            }
            // down 
            if(grid[rowIdx+1] && grid[rowIdx+1][colIdx] !== 'X') {
                queue.enqueue({
                    rowIdx: rowIdx+1,
                    colIdx: colIdx,
                    distance: distance + 1
                })
            }
            // left 
            if(grid[rowIdx][colIdx-1] && grid[rowIdx][colIdx-1] !== 'X') {
                queue.enqueue({
                    rowIdx: rowIdx,
                    colIdx: colIdx-1,
                    distance: distance + 1
                })
            }
            // right 
            if(grid[rowIdx][colIdx+1] && grid[rowIdx][colIdx+1] !== 'X') {
                queue.enqueue({
                    rowIdx: rowIdx,
                    colIdx: colIdx+1,
                    distance: distance + 1
                })
            }
        }
    }
    return -1
};


/** 
 * @param {number} rowIdx 
 * @param {number} colIdx 
 */
const cellStr = (rowIdx, colIdx) => JSON.stringify({ rowIdx, colIdx })


module.exports = {
    closestCarrot,
};
