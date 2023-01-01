const { expect, describe, test } = require('@jest/globals');
const { connectedComponentsCount } = require('../../src/graphs/connected-components-count.js');

describe('connectedComponentsCount', () => {
    test('test_00', () => {
        expect(connectedComponentsCount({
            0: [8, 1, 5],
            1: [0],
            5: [0, 8],
            8: [0, 5],
            2: [3, 4],
            3: [2, 4],
            4: [3, 2]
        })).toBe(2); // -> 2)
    })

    test('test_01', () => {
        expect(connectedComponentsCount({
            1: [2],
            2: [1, 8],
            6: [7],
            9: [8],
            7: [6, 8],
            8: [9, 7, 2]
        })).toBe(1); // -> 1   
    })

    test('test_02', () => {
        expect(connectedComponentsCount({
            3: [],
            4: [6],
            6: [4, 5, 7, 8],
            8: [6],
            7: [6],
            5: [6],
            1: [2],
            2: [1]
        })).toBe(3); // -> 3)
    })

    test('test_03', () => {
        expect(connectedComponentsCount({})).toBe(0); // -> 0
    })

    test('test_04', () => {
        expect(connectedComponentsCount({
            0: [4, 7],
            1: [],
            2: [],
            3: [6],
            4: [0],
            6: [3],
            7: [0],
            8: []
        })).toBe(5); // -> 5
    })

})