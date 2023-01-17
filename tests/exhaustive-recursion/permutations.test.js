const { expect, describe, test } = require('@jest/globals');
const { permutations } = require('../../src/exhaustive-recursion/permutations');


describe('permutations', () => {
    test('test_00', () => {
        const expected = [
            ['a', 'b', 'c'],
            ['b', 'a', 'c'],
            ['b', 'c', 'a'],
            ['a', 'c', 'b'],
            ['c', 'a', 'b'],
            ['c', 'b', 'a']
        ]
        const result = permutations(['a', 'b', 'c'])
        expect(expected.length).toEqual(result.length)
        // console.log({result})
        for (const res of result) {
            expect(expected).toContainEqual(res)
        }
    })
    test('test_01', () => {
        const expected = [
            ['red', 'blue'],
            ['blue', 'red']
        ]
        const result = permutations(['red', 'blue'])
        expect(expected.length).toEqual(result.length)
        for (const res of result) {
            expect(expected).toContainEqual(res)
        }
    })
    test('test_02', () => {
        const expected = [
            [8, 2, 1, 4], [2, 8, 1, 4],
            [2, 1, 8, 4], [2, 1, 4, 8],
            [8, 1, 2, 4], [1, 8, 2, 4],
            [1, 2, 8, 4], [1, 2, 4, 8],
            [8, 1, 4, 2], [1, 8, 4, 2],
            [1, 4, 8, 2], [1, 4, 2, 8],
            [8, 2, 4, 1], [2, 8, 4, 1],
            [2, 4, 8, 1], [2, 4, 1, 8],
            [8, 4, 2, 1], [4, 8, 2, 1],
            [4, 2, 8, 1], [4, 2, 1, 8],
            [8, 4, 1, 2], [4, 8, 1, 2],
            [4, 1, 8, 2], [4, 1, 2, 8]
        ];
        const result = permutations([8, 2, 1, 4])
        // console.log({result})
        for (const res of result) {
            expect(expected).toContainEqual(res)
        }
        expect(expected.length).toEqual(result.length)
    })
    test('test_03', () => {
        expect(permutations([])).toEqual(
            [
                []
            ]);

    })
})