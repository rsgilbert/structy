/**
 * Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.
 * @param {string[][]} grid 
 */
const countPaths = (grid) => {
    return new CountPaths(grid).execute(0, 0)
};

class CountPaths {
    /** 
     * @type {Record<string,number>}
     */
    memo = {}
    /**
     * @type {string[][]}
     */
    grid;

    /**
     * @param {string[][]} grid
     */
    constructor(grid) {
        this.grid = grid;
        this.memo[this.endCellStr()] = 1;
    }

    endCellStr() {
        return this.cellStr(this.grid.length - 1, this.grid[0].length - 1);
    }

    withinBounds(rowIdx, colIdx) {
        return rowIdx in this.grid &&
            colIdx in this.grid[0] &&
            this.grid[rowIdx][colIdx] !== 'X';
    }

    nextPositions(rowIdx, colIdx) {
        return [
            { rowIdx: rowIdx + 1, colIdx },
            { rowIdx, colIdx: colIdx + 1 }
        ].filter(pos => this.withinBounds(pos.rowIdx, pos.colIdx))
    }

    cellStr(rowIdx, colIdx) {
        return JSON.stringify({ rowIdx, colIdx })
    }

    /**
     * Execute count-paths
     * @param {number} rowIdx 
     * @param {number} colIdx 
     * @returns {number}
     */
    execute(rowIdx, colIdx) {
        if (this.cellStr(rowIdx, colIdx) in this.memo) {
            return this.memo[this.cellStr(rowIdx, colIdx)];
        }
        this.memo[this.cellStr(rowIdx, colIdx)] = this.nextPositions(rowIdx, colIdx).reduce((acc, curr) => {
            return acc + this.execute(curr.rowIdx, curr.colIdx)
        }, 0);
        return this.memo[this.cellStr(rowIdx, colIdx)];
    }
}
module.exports = {
    countPaths,
};
