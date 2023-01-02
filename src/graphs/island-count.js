const { connectedComponentsCount } = require("./connected-components-count");
const { adjacencyListFor } = require("./utils");

/**
 * Write a function, islandCount, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.
 * @param {string[][]} grid 
 * @returns {number} - number of islands 
 */
const islandCount = (grid) => {
    const graph = adjacencyListForGrid(grid)
    // count connected graphs
    return connectedComponentsCount(graph)
};

/**
 * 
 * @param {string[][]} grid 
 * @returns {Graph}
 */
const adjacencyListForGrid = grid => {
    const edges = []
    for (let rowIdx = 0; rowIdx < grid.length; rowIdx++) {
        const row = grid[rowIdx];
        for (let colIdx = 0; colIdx < row.length; colIdx++) {
            if (grid[rowIdx][colIdx] === 'L') {
                // setup a connection to itself, incase it has no land neighbors
                edges.push([gridCellString(rowIdx, colIdx, grid), gridCellString(rowIdx, colIdx, grid)])
                // the current cell is on land
                if (colIdx < row.length - 1) { // avoid going out of bounds
                    if (grid[rowIdx][colIdx + 1] === 'L') {
                        // the left cell is also land
                        // we connect the two cells by setting up an edge between them
                        edges.push([gridCellString(rowIdx, colIdx, grid), gridCellString(rowIdx, colIdx + 1, grid)])
                    }
                }
                if (rowIdx < grid.length - 1) { // avoid going out of bounds
                    if (grid[rowIdx + 1][colIdx] === 'L') {
                        // the bottom cell is also land
                        // we connect the two cells by setting up an edge between them
                        edges.push([gridCellString(rowIdx, colIdx, grid), gridCellString(rowIdx + 1, colIdx, grid)])
                    }
                }
            }
        }
    }
    return adjacencyListFor(edges)
}

module.exports = {
    islandCount,
};

/**
 * Stringify grid cell
 * @param {number} row 
 * @param {number} col 
 * @param {string[][]} grid 
 * @returns {string}
 */
const gridCellString = (row, col, grid) => {
    return JSON.stringify({ row, col, value: grid[row][col] })
}

/**
 * parse contents of stringified grid cell
 * @param {string} str 
 * @returns {{ row: number, col: number, value: 'W'|'L'}}
 */
const gridCellParsed = (str) => {
    return JSON.parse(str)
}