/**
 * Write a function, maxPathSum, that takes in a grid as an argument. The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. You may only travel through the grid by moving down or right.
 * @param {number[][]} grid 
 */
const maxPathSum = (grid) => {
    return new MaxPathSum(grid).execute(0, 0);
};

class MaxPathSum {
    /** 
     * @type {Record<string,number>}
     */
    memo = {}
    /**
     * @type {number[][]}
     */
    grid;


    /**
     * @param {number[][]} grid
     */
    constructor(grid) {
        this.grid = grid;
    }


    withinBounds(rowIdx, colIdx) {
        return rowIdx in this.grid && colIdx in this.grid[0];
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
        this.memo[this.cellStr(rowIdx, colIdx)] = this.nextPositions(rowIdx, colIdx).reduce((mx, curr) => {
            return Math.max(mx, this.grid[rowIdx][colIdx] + this.execute(curr.rowIdx, curr.colIdx));
        }, this.grid[rowIdx][colIdx]);
        return this.memo[this.cellStr(rowIdx, colIdx)];
    }
}

module.exports = {
    maxPathSum,
};
