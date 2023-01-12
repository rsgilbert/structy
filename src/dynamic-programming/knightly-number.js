/**
 * The function should return the number of different ways the knight can move to the target in exactly m moves. The knight can revisit positions of the board if needed. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7.
 * @param {number} n - the length of the chess board
 * @param { number } m - moves required
 * @param {number} kr the starting row of the knight
 * @param {number} kc the starting column of the knight
 * @param {number} pr the target row
 * @param {number} pc the target column
 */
const knightlyNumber = (n, m, kr, kc, pr, pc) => {
    return new KnightlyNumber(n, pr, pc).execute(kr, kc, m)
};

class KnightlyNumber {
    /**  @type {number} -the length of the chess board */
    boardLength;
    /** @type {number} the starting row of the knight */
    pr;
    /** @type {number} the target column */
    pc;
    memo = {}
    /**
     * The function should return the number of different ways the knight can move to the target in exactly m moves. The knight can revisit positions of the board if needed. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7.
     * @param {number} boardLength - the length of the chess board
     * @param {number} pr the target row
     * @param {number} pc the target column
     */
    constructor(boardLength, pr, pc) {
        this.boardLength = boardLength;
        this.pr = pr;
        this.pc = pc;
    };

    isPawnCell(rowIdx, colIdx) {
        return rowIdx === this.pr && colIdx === this.pc;
    }

    withinBounds(rowIdx, colIdx) {
        return rowIdx >= 0 &&
            rowIdx < this.boardLength &&
            colIdx >= 0 &&
            colIdx < this.boardLength;
    }


    /**
     * 
     * @param {number} rowIdx 
     * @param {number} colIdx 
     * @returns { { rowIdx: number, colIdx: number }[] }
     */
    nextPositions(rowIdx, colIdx) {
        return [
            // top left
            { rowIdx: rowIdx - 2, colIdx: colIdx - 1 },
            { rowIdx: rowIdx - 1, colIdx: colIdx - 2 },
            // top right
            { rowIdx: rowIdx - 2, colIdx: colIdx + 1 },
            { rowIdx: rowIdx - 1, colIdx: colIdx + 2 },
            // bottom left 
            { rowIdx: rowIdx + 2, colIdx: colIdx - 1 },
            { rowIdx: rowIdx + 1, colIdx: colIdx - 2 },
            // bottom right
            { rowIdx: rowIdx + 2, colIdx: colIdx + 1 },
            { rowIdx: rowIdx + 1, colIdx: colIdx + 2 },
        ].filter(pos => this.withinBounds(pos.rowIdx, pos.colIdx))
    }

    /**
     * 
     * @param {number} rowIdx 
     * @param {number} colIdx 
     * @param {number} moves 
     * @returns { string }
     */
    cellStr(rowIdx, colIdx, moves) {
        return JSON.stringify({ rowIdx, colIdx, moves })
    }


    /**
     * The function should return the number of different ways the knight can move to the target in exactly m moves. The knight can revisit positions of the board if needed. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7.
     * @param { number } rowIdx 
     * @param { number } colIdx 
     * @param { number } moves - moves required
     * @returns { number } - different ways 
     */
    execute(rowIdx, colIdx, moves) {
        if (moves < 0) return 0;
        if (this.pr === rowIdx && this.pc === colIdx && moves === 0) return 1;
        const key = this.cellStr(rowIdx, colIdx, moves);
        if (key in this.memo) return this.memo[key];

        this.memo[key] = this.nextPositions(rowIdx, colIdx).reduce((acc, pos) => {
            return acc + this.execute(pos.rowIdx, pos.colIdx, moves - 1)
        }, 0);
        return this.memo[key];
    }
}





module.exports = {
    knightlyNumber
};
