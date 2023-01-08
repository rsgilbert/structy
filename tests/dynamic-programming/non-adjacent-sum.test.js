const { expect, describe, test } = require('@jest/globals');
const { maxPathSum } = require('../../src/dynamic-programming/max-path-sum');
const { nonAdjacentSum } = require('../../src/dynamic-programming/non-adjacent-sum');


describe('nonAdjacentSum', () => {
    test('test_00', () => {
        const nums = [2, 4, 5, 12, 7];
        expect(nonAdjacentSum(nums)).toBe(16); // -> 16
    })
    test('test_01', () => {
        const nums = [7, 5, 5, 12];
        expect(nonAdjacentSum(nums)).toBe(19); // -> 19
    })
    test('test_02', () => {
        const nums = [7, 5, 5, 12, 17, 29];
        expect(nonAdjacentSum(nums)).toBe(48); // -> 48
    })
    test('test_03', () => {
        const nums = [
            72, 62, 10, 6, 20, 19, 42,
            46, 24, 78, 30, 41, 75, 38,
            23, 28, 66, 55, 12, 17, 9,
            12, 3, 1, 19, 30, 50, 20
        ];
        expect(nonAdjacentSum(nums)).toBe(488); // -> 488
    })
    test('test_04', () => {
        const nums = [
            72, 62, 10, 6, 20, 19, 42, 46, 24, 78,
            30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
            83, 80, 56, 68, 6, 22, 56, 96, 77, 98,
            61, 20, 0, 76, 53, 74, 8, 22, 92, 37,
            30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
            72, 62, 10, 6, 20, 19, 42, 46, 24, 78,
            42
        ];
        expect(nonAdjacentSum(nums)).toBe(1465); // -> 1465
    })
})