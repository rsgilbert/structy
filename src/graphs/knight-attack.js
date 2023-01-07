const { Queue } = require("./utils");

/**
 * The function should return a number representing the minimum number of moves required for the knight to land ontop of the pawn. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight to attack the pawn, then return null.
 * @param {number} n - the length of the chess board
 * @param {number} kr the starting row of the knight
 * @param {number} kc the starting column of the knight
 * @param {number} pr the row of the pawn
 * @param {number} pc the column of the pawn
 */
const knightAttack = (n, kr, kc, pr, pc) => {
    return new KnightAttack(n, kr, kc, pr, pc).execute()
};

class KnightAttack {
    /**  @type {number} -the length of the chess board */
    boardLength;
    /** @type {number} the starting row of the knight */
    kr;
    /** @type {number} the starting column of the knight */
    kc;
    /** @type {number} the row of the pawn */
    pr;
    /** @type {number} the column of the pawn */
    pc;

    /**
     * The function should return a number representing the minimum number of moves required for the knight to land ontop of the pawn. The knight cannot move out-of-bounds of the board. You can assume that rows and columns are 0-indexed. This means that if n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is not possible for the knight to attack the pawn, then return null.
     * @param {number} boardLength - the length of the chess board
     * @param {number} kr the starting row of the knight
     * @param {number} kc the starting column of the knight
     * @param {number} pr the row of the pawn
     * @param {number} pc the column of the pawn
     */
    constructor(boardLength, kr, kc, pr, pc) {
        this.boardLength = boardLength;
        this.kr = kr;
        this.kc = kc;
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

    cellStr(rowIdx, colIdx) { 
        return JSON.stringify({ rowIdx, colIdx })
    }

    execute() {
        const visited = new Set()
        const queue = new Queue()
        queue.enqueue({ rowIdx: this.kr, colIdx: this.kc, moves: 0 }) 
        while(!queue.isEmpty()) {
            const { rowIdx, colIdx, moves } = queue.dequeue()
            if(this.isPawnCell(rowIdx, colIdx)) return moves;
            if(!visited.has(this.cellStr(rowIdx, colIdx))) {
                visited.add(this.cellStr(rowIdx, colIdx))
                for(const pos of this.nextPositions(rowIdx, colIdx)) {
                    queue.enqueue({ rowIdx: pos.rowIdx, colIdx: pos.colIdx, moves: moves+1 })
                }
            }
        }
        return null 
    }
}



module.exports = {
    knightAttack,
};
