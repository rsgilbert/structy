const { expect, describe, test } = require('@jest/globals');
const { islandCount2 } = require('../../src/graphs/island-count-2.js');

describe('islandCount2', () => {
    test('test_00', () => {
        const grid = [
            ['W', 'L', 'W', 'W', 'W'],
            ['W', 'L', 'W', 'W', 'W'],
            ['W', 'W', 'W', 'L', 'W'],
            ['W', 'W', 'L', 'L', 'W'],
            ['L', 'W', 'W', 'L', 'L'],
            ['L', 'L', 'W', 'W', 'W'],
        ];

        expect(islandCount2(grid)).toBe(3); // -> 3
    })

    test('test_01', () => {
        const grid = [
            ['L', 'W', 'W', 'L', 'W'],
            ['L', 'W', 'W', 'L', 'L'],
            ['W', 'L', 'W', 'L', 'W'],
            ['W', 'W', 'W', 'W', 'W'],
            ['W', 'W', 'L', 'L', 'L'],
        ];

        expect(islandCount2(grid)).toBe(4); // -> 4
    })

    test('test_02', () => {
        const grid = [
            ['L', 'L', 'L'],
            ['L', 'L', 'L'],
            ['L', 'L', 'L'],
        ];

        expect(islandCount2(grid)).toBe(1); // -> 1
    })

    test('test_03', () => {
        const grid = [
            ['W', 'W'],
            ['W', 'W'],
            ['W', 'W'],
        ];

        expect(islandCount2(grid)).toBe(0); // -> 0
    })
})