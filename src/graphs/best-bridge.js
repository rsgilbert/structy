const { Stack, Queue } = require("./utils");

/**
 * Write a function, bestBridge, that takes in a grid as an argument. The grid contains water (W) and land (L). There are exactly two islands in the grid. An island is a vertically or horizontally connected region of land. Return the minimum length bridge needed to connect the two islands. A bridge does not need to form a straight line.
 * @param {string[][]} grid 
 */
const bestBridge = (grid) => {
    const queue = new Queue()
    const firstLandCell = findFirstLandCell(grid)
    visitLandMass(firstLandCell.rowIdx, firstLandCell.colIdx, grid, new Set(), queue)
    const { distance } = findNextLandMass(queue, grid, new Set())
    return distance - 1; // we subtract since the bridge should consist only of water cells 
};

/**
 * Explore land mass starting from a given cell marking off all connected land cells as visited and adding them to the queue as well
 * @param {Queue} queue
 * @param { string[][]} grid
 * @param {Set} visited 
 * @returns {{ rowIdx: number, colIdx: number, distance: number }}
 */
function findNextLandMass(queue, grid, visited) {
    while(!queue.isEmpty()) {
        const { rowIdx, colIdx, distance } = queue.dequeue()
        if(!isVisited(rowIdx, colIdx, visited)) {
            // we havent visited this cell
            if(isLand(rowIdx, colIdx, grid) && distance > 0) {
                // this is an island cell, its the first we've found so its our answer
                return { rowIdx, colIdx, distance } 
            }
            visited.add(cellStr(rowIdx, colIdx))
            if(colIdx >= 1) {
                // left
                queue.enqueue({ rowIdx, colIdx: colIdx-1, distance: distance+1 })
            }
            if(colIdx <= grid[0]?.length - 2) {
                // right
                queue.enqueue({ rowIdx, colIdx: colIdx+1, distance: distance+1})
            }
            if(rowIdx <= grid.length - 2) {
                // bottom
                queue.enqueue({ rowIdx: rowIdx+1, colIdx, distance: distance+1})
            }
            if(rowIdx >= 1) {
                // top
                queue.enqueue({ rowIdx: rowIdx-1, colIdx, distance: distance+1})
            }
        }
    }
}

/**
 * Find first land cell in grid
 * @param {string[][]} grid 
 * @returns {{ rowIdx: number, colIdx: number }}
 */
function findFirstLandCell(grid) {
    for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
        const row = grid[rowIdx];
        for (let colIdx = 0; colIdx < row.length; colIdx++) {
            if(isLand(rowIdx, colIdx, grid)) return { rowIdx, colIdx }
        }
    }
}


/**
 * Explore land mass starting from a given cell marking off all connected land cells as visited and adding them to the queue as well
 * @param {number} rowIdx 
 * @param {number} colIdx 
 * @param { string[][]} grid
 * @param {Set} visited 
 * @param {Queue} queue
 * @returns {void}
 */
function visitLandMass(rowIdx, colIdx, grid, visited, queue) {
    const stack = new Stack()
    stack.push({ rowIdx, colIdx })
    while (!stack.isEmpty()) {
        const { rowIdx, colIdx } = stack.pop()
        if (isUnvisitedLand(rowIdx, colIdx, grid, visited)) {
            // we explore this land mass to add it to the visited set
            // We assume all top cells are NOT unvisited-land cells
            visited.add(cellStr(rowIdx, colIdx)) 
            queue.enqueue({ rowIdx, colIdx, distance: 0 })
            if(colIdx >= 1) {
                // left
                stack.push({ rowIdx, colIdx: colIdx-1})
            }
            if(colIdx <= grid[0]?.length - 2) {
                // right
                stack.push({ rowIdx, colIdx: colIdx+1 })
            }
            if(rowIdx <= grid.length - 2) {
                // bottom
                stack.push({ rowIdx: rowIdx+1, colIdx})
            }
        }
    }
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
    bestBridge,
};
