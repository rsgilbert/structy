/**
 * Write a function, breakingBoundaries, that takes in 5 arguments: a number of rows (m), a number of columns (n), a number of moves (k), a starting row (r), and a starting column (c). Say you were situated in a grid with dimensions m * n. If you had to start at position (r,c), in how many different ways could you move out of bounds if you could take at most k moves. A single move is moving one space up, down, left, or right. During a path you may revisit a position.

For example:

Given m, n, k, r, c:

3, 4, 2, 0, 0

This input asks us to count the numbers of ways
to move out of bounds in a 3 by 4 grid, starting at
position (0, 0) if we could take at most 2 moves.

The answer is 4 because of these 4 distinct ways:
 1. left
 2. up
 3. right, up
 4. down, left
The function should return a number representing how many ways you can move out of bounds.
 * @param {number} m - number of rows
 * @param {number} n - number of columns
 * @param {number} k - number of moves
 * @param {number} r - starting row
 * @param {number} c - starting column
 * @returns {number} - number of ways to move out of bounds
 */
const breakingBoundaries = (m, n, k, r, c) => {
    return new BreakingBoundaries(m, n).execute(r, c, k);
};

class BreakingBoundaries {
    rows;
    cols;

    /**
     * @param {number} rows 
     * @param {number} cols 
     */
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
    }

    /**
     * @param {number} r 
     * @param {number} c 
     */
    isOutOfBounds(r, c) {
        return (r < 0) || (c < 0) || (r > this.rows - 1) || (c > this.cols - 1);
    }

    /**
     * 
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
        ]
    }

    /**
     * @param {number} rowIdx
     * @param {number} colIdx
     * @param {number} remainingMoves
     * @returns {number} - number of ways to break boundaries
     */
    execute(rowIdx, colIdx, remainingMoves, memo = {}) {
        if (this.isOutOfBounds(rowIdx, colIdx)) return 1;
        if (remainingMoves === 0) return 0;
        const key = rowIdx + ',' + colIdx + ',' + remainingMoves;
        if(key in memo) return memo[key];
        memo[key] = this.nextPositions(rowIdx, colIdx).reduce((acc, pos) => {
            return acc + this.execute(pos.rowIdx, pos.colIdx, remainingMoves-1, memo);
        }, 0);
        return memo[key];
    }
}


module.exports = {
    breakingBoundaries,
};
