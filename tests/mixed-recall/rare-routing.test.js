const { expect, describe, test } = require('@jest/globals');
const { rareRouting } = require('../../src/mixed-recall/rare-routing');

describe('rareRouting', () => {
    test('test_00', () => {
        expect(rareRouting(4, [
            [0, 1],
            [0, 2],
            [0, 3]
        ])).toBe(true); // -> true
    })
    test('test_01', () => {
        expect(rareRouting(4, [
            [0, 1],
            [0, 2],
            [0, 3],
            [3, 2]
        ])).toBe(false)
    })
    test('test_02', () => {
        expect(rareRouting(6, [
            [1, 2],
            [5, 4],
            [3, 0],
            [0, 1],
            [0, 4],
        ])).toBe(true)
    })
    test('test_03', () => {
        expect(rareRouting(6, [
            [1, 2],
            [4, 1],
            [5, 4],
            [3, 0],
            [0, 1],
            [0, 4],
        ])).toBe(false)
    })
    test('test_04', () => {
        expect(rareRouting(4, [
            [0, 1],
            [3, 2],
        ])).toBe(false)
    })
})