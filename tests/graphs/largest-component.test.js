const { expect, describe, test } = require('@jest/globals');
const { connectedComponentsCount } = require('../../src/graphs/connected-components-count.js');
const { largestComponent } = require('../../src/graphs/largest-component.js');

describe('connectedComponentsCount', () => {
    test('test_00', () => {
        expect(largestComponent({
            0: ['8', '1', '5'],
            1: ['0'],
            5: ['0', '8'],
            8: ['0', '5'],
            2: ['3', '4'],
            3: ['2', '4'],
            4: ['3', '2']
        })).toBe(4); // -> 4
    })
    test('test_01', () => {
        expect(largestComponent({
            1: ['2'],
            2: ['1','8'],
            6: ['7'],
            9: ['8'],
            7: ['6', '8'],
            8: ['9', '7', '2']
        })).toBe(6); 
    })

    test('test_02', () => {
        expect(largestComponent({
            3: [],
            4: ['6'],
            6: ['4', '5', '7', '8'],
            8: ['6'],
            7: ['6'],
            5: ['6'],
            1: ['2'],
            2: ['1']
        })).toBe(5); 
    })
    test('test_03', () => {
        expect(largestComponent({
        })).toBe(0); 
    })
    test('test_04', () => {
        expect(largestComponent({
            0: ['4','7'],
            1: [],
            2: [],
            3: ['6'],
            4: ['0'],
            6: ['3'],
            7: ['0'],
            8: []
        })).toBe(3); 
    })
})
