const { expect, describe, test } = require('@jest/globals');
const { safeCracking } = require('../../src/mixed-recall/safe-cracking.js');
const { topologicalOrder } = require('../../src/mixed-recall/topological-order.js');

describe('safeCracking', () => {
    test('test_00', () => {
        expect(safeCracking([
            [7, 1],
            [1, 8],
            [7, 8],
        ])).toBe('718')
    })

    test('test_01', () => {
        expect(safeCracking([
            [3, 1],
            [4, 7],
            [5, 9],
            [4, 3],
            [7, 3],
            [3, 5],
            [9, 1],
        ])).toBe('473591')
    })
    test('test_02', () => {
        expect(safeCracking([
            [2, 5],
            [8, 6],
            [0, 6],
            [6, 2],
            [0, 8],
            [2, 3],
            [3, 5],
            [6, 5],
        ])).toBe('086235'); // -> '086235'
    })
    test('test_03', () => {
        expect(safeCracking([
            [0, 1],
            [6, 0],
            [1, 8],
        ])).toBe('6018'); // -> '6018'
    })

    test('test_04', () => {
        expect(safeCracking([
            [8, 9],
            [4, 2],
            [8, 2],
            [3, 8],
            [2, 9],
            [4, 9],
            [8, 4],
        ])).toBe('38429'); // -> '38429'
    })
})


