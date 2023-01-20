const { expect, describe, test } = require('@jest/globals');
const { createCombinations } = require('../../src/exhaustive-recursion/create-combinations');
const { permutations } = require('../../src/exhaustive-recursion/permutations');


describe('createCombinations', () => {
    test('test_00', () => {
        expect(createCombinations(["a", "b", "c"], 2)).toEqual(
            [
                ['a', 'b'],
                ['a', 'c'],
                ['b', 'c']
            ]
        )
    })

    test('test_01', () => {
        expect(createCombinations(["q", "r", "s", "t"], 2)).toEqual(
            [
                ['q', 'r'],
                ['q', 's'],
                ['q', 't'],
                ['r', 's'],
                ['r', 't'],
                ['s', 't']
            ]);
    });

    test('test_02', () => {
        expect(createCombinations(['q', 'r', 's', 't'], 3)).toEqual(
            [
                ['q', 'r', 's'],
                ['q', 'r', 't'],
                ['q', 's', 't'],
                ['r', 's', 't']
            ]);
    })

    test('test_03', ()=>{
        expect(createCombinations([1, 28, 94], 3)).toEqual(
        [
          [ 1, 28, 94 ]
        ])
    })

})