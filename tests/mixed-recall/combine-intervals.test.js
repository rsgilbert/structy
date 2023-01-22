const { expect, describe, test } = require('@jest/globals');
const { combineIntervals } = require('../../src/mixed-recall/combine-intervals');

describe('combineIntervals', () => {
    test('test_00', () => {
        const intervals = [
            [1, 4],
            [12, 15],
            [3, 7],
            [8, 13],
        ];
        expect(combineIntervals(intervals)).toEqual([[1, 7], [8, 15]]);
        // -> [ [1, 7], [8, 15] ]
    })
    test('test_01', () => {
        const intervals = [
            [6, 8],
            [2, 9],
            [10, 12],
            [20, 24],
        ];
        expect(combineIntervals(intervals)).toEqual([[2, 9], [10, 12], [20, 24]]);
        // -> [ [2, 9], [10, 12], [20, 24] ]
    })
    test('test_02', () => {
        const intervals = [
            [3, 7],
            [5, 8],
            [1, 5],
        ];
        expect(combineIntervals(intervals)).toEqual([[1, 8]]);
        // -> [ [1, 8] ]
    })
    test('test_03', () => {
        const intervals = [
            [3, 7],
            [10, 13],
            [5, 8],
            [27, 31],
            [1, 5],
            [12, 16],
            [20, 22],
        ];
        expect(combineIntervals(intervals)).toEqual([[1, 8], [10, 16], [20, 22], [27, 31]]);
        // -> [ [1, 8], [10, 16], [20, 22], [27, 31] ]
    })
    test('test_04', () => {
        const intervals = [
            [3, 7],
            [10, 13],
            [5, 8],
            [27, 31],
            [1, 5],
            [12, 16],
            [20, 32],
        ];
        expect(combineIntervals(intervals)).toEqual([[1, 8], [10, 16], [20, 32]]);
        // -> [ [1, 8], [10, 16], [20, 32] ]
    })
    test('test_05', () => {
        const intervals = [
            [64, 70],
            [50, 55],
            [62, 65],
            [12, 50],
            [72, 300000],
        ];
        expect(combineIntervals(intervals)).toEqual([[12, 55], [62, 70], [72, 300000]]);
        // -> [ [12, 55], [62, 70], [72, 300000] ]
    })
})