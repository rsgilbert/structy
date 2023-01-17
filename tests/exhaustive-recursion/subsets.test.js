const { expect, describe, test } = require('@jest/globals');
const { subsets } = require('../../src/exhaustive-recursion/subsets');


describe('subsets', () => {
    test('test_00', () => {
        expect(subsets(['a', 'b'])).toEqual([
            [],
            ['b'],
            ['a'],
            ['a', 'b']
        ]);
    })

    test('test_01', () => {
        expect(subsets(['a', 'b', 'c'])).toEqual([
            [],
            ['c'],
            ['b'],
            ['b', 'c'],
            ['a'],
            ['a', 'c'],
            ['a', 'b'],
            ['a', 'b', 'c']
        ])
    })
    test('test_02', () => {
        expect(subsets(['x'])).toEqual([
            [],
            ['x']
        ]
        )
    })
    test('test_03', () => {
        expect(subsets([])).toEqual([
            []
        ]
        )
    })
    test('test_04', () => {
        expect(subsets(['q', 'r', 's', 't'])).toEqual([
            [],
            ['t'],
            ['s'],
            ['s', 't'],
            ['r'],
            ['r', 't'],
            ['r', 's'],
            ['r', 's', 't'],
            ['q'],
            ['q', 't'],
            ['q', 's'],
            ['q', 's', 't'],
            ['q', 'r'],
            ['q', 'r', 't'],
            ['q', 'r', 's'],
            ['q', 'r', 's', 't']
        ]
        )
    })
})