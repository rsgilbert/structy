const { expect, describe, test } = require('@jest/globals');
const { maxIncreasingSubseq } = require('../../src/mixed-recall/max-increasing-subseq');

describe('maxIncreasingSubseq', () => {
    test('test_00', () => {
        const numbers = [4, 18, 20, 10, 12, 15, 19];
        expect(maxIncreasingSubseq(numbers)).toBe(5); // -> 5
    })
    test('test_01', () => {
        const numbers = [12, 9, 2, 5, 4, 32, 90, 20];
        expect(maxIncreasingSubseq(numbers)).toBe(4); // -> 4
    })
    test('test_02', () => {
        const numbers = [42, 50, 51, 60, 55, 70, 4, 5, 70];
        expect(maxIncreasingSubseq(numbers)).toBe(5); // -> 5
    })
    test('test_03', () => {
        const numbers = [7, 14, 10, 12];
        expect(maxIncreasingSubseq(numbers)).toBe(3); // -> 3
    })
    test('test_04', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        expect(maxIncreasingSubseq(numbers)).toBe(21); // -> 21
    })
    test('test_05', () => {
        const numbers = [
            1, 2, 3, 4, 5, 12, 6, 30, 7, 8, 9, 10, 11, 12, 13, 10, 18, 14, 15, 16, 17, 18, 19, 20, 21, 100,
            104,
        ];
        expect(maxIncreasingSubseq(numbers)).toBe(23)
    })
    test('test_06', () => {
        const numbers = [
            1, 2, 300, 3, 4, 305, 5, 12, 6, 30, 7, 8, 9, 10, 10, 10, 15, 11, 12, 13, 10, 18, 14, 15, 16,
            17, 18, 19, 20, 21, 100, 101, 102, 103, 104, 105
        ];
        expect(maxIncreasingSubseq(numbers)).toBe(27); // -> 27
    })
})