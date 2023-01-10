const { expect, describe, test } = require('@jest/globals');
const { countingChange } = require('../../src/dynamic-programming/counting-change');

describe('countingChange', () => {
    test.only('test_00', () => {
        /**   amt: 4
         *              [1,2,3]
         *  amt: 3 /           \ 4
         *    [1,2,3]           [2,3]
         * amt: 2 / \3          2  /  \ 4
         *  [1,2,3] [2,3]      [2,3]       [3]
         *  1  /  \2    \3      0 / \ 2    1 / \ 4
         * [1,2,3] [2,3]  [3]  [2,3] [3]   [3]   []
         *  0 /   \1     0 /             -2 / \ 1
         * [1,2,3][2,3]  []              [3]  []
         *      -1 /  \1
         *       [2,3] [3]
         *          -2 / \1
         *           []   []
         */
        expect(countingChange(4, [1, 2, 3])).toBe(4)
    })

    test('test_01', ()=>{
        expect(countingChange(8, [1, 2, 3])).toBe(10)
    })

    test('test_02', ()=>{
        expect(countingChange(24, [5, 7, 3])).toBe(5)
    })

    test('test_03', ()=>{
        expect(countingChange(13, [2, 6, 12, 10])).toBe(0)
    })

    test('test_04', ()=>{
        expect(countingChange(512, [1, 5, 10, 25])).toBe(20119); // -> 20119
    })

    test('test_05', ()=>{
        expect(countingChange(1000, [1, 5, 10, 25])).toBe(142511); // -> 142511
    })

    test.only('test_06', ()=>{
        expect(countingChange(240, [1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(1525987916); // -> 1525987916
    })
})