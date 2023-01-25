
/**
 * Write a function, stringSearch, that takes in a grid of letters and a string as arguments. The function should return a boolean indicating whether or not the string can be found in the grid as a path by connecting horizontal or vertical positions. The path can begin at any position, but you cannot reuse a position more than once in the path.

You can assume that all letters are lowercase and alphabetic.
 * @param {string[][]} grid 
 * @param {string} s 
 */
const stringSearch = (grid, s) => {
    return new StringSearch(grid).execute(s)
};

class StringSearch {
    /** @type {string[][]} */
    grid;
    memo = {};
    constructor(grid) {
        this.grid = grid;
    }

    /**
    * 
    * @param {number} rowIdx 
    * @param {number} colIdx 
    * @returns {boolean}
    */
    withinBounds(rowIdx, colIdx) {
        return rowIdx in this.grid && colIdx in this.grid[0];
    }

    /**
    * @param {number} rowIdx 
    * @param {number} colIdx 
    * @returns {{rowIdx: number, colIdx: number}[]}
    */
    nextPositions(rowIdx, colIdx) {
        return [
            // up
            { rowIdx: rowIdx - 1, colIdx },
            // right
            { rowIdx, colIdx: colIdx + 1 },
            // down
            { rowIdx: rowIdx + 1, colIdx },
            // left
            { rowIdx, colIdx: colIdx - 1 }
        ].filter(pos => this.withinBounds(pos.rowIdx, pos.colIdx))
    }

    /**
     * @param {number} rowIdx 
     * @param {number} colIdx 
     * @returns {string}
     */
    cellStr(rowIdx, colIdx) {
        return JSON.stringify({ rowIdx, colIdx })
    }
    /**
     * 
     * @param {string} s 
     * @param {number} rowIdx
     * @param {number} colIdx
     * @param {number} sIdx
     * @returns {boolean}
     */
    search(s, rowIdx, colIdx, sIdx) {
        if (sIdx >= s.length) return true;
        const memoKey = `${rowIdx},${colIdx},${sIdx}`
        if(memoKey in this.memo) return this.memo[memoKey];

        const c = s[sIdx];
        if (this.grid[rowIdx][colIdx] === c) {
            for (const pos of this.nextPositions(rowIdx, colIdx)) {
                if (this.search(s, pos.rowIdx, pos.colIdx, sIdx + 1)) {
                    this.memo[memoKey] = true;
                    return true;
                }
            }
        }
        // not found 
        this.memo[memoKey] = false;
        return false;
    }


    /**
     * 
     * @param {string} s 
     * @returns {boolean}
     */
    execute(s) {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[0].length; j++) {
                if (this.search(s, i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
}
module.exports = {
    stringSearch,
};


//
//1294778450
// 33yy8yz8