const { expect, describe, test } = require('@jest/globals');
const { arrayStepper } = require('../../src/dynamic-programming/array-stepper');


describe('arrayStepper', () => {
    test('test_00', () => {
        expect(arrayStepper([2, 4, 2, 0, 0, 1])).toBe(true); // -> true
    })
    test('test_01', () => {
        expect(arrayStepper([2, 3, 2, 0, 0, 1])).toBe(false);
    })
    test('test_02', () => {
        expect(arrayStepper([3, 1, 3, 1, 0, 1])).toBe(true);
    })
    test('test_03', () => {
        expect(arrayStepper([4, 1, 5, 1, 1, 1, 0, 4])).toBe(true);
    })
    test('test_04', () => {
        expect(arrayStepper([4, 1, 2, 1, 1, 1, 0, 4])).toBe(false);
    })
    test('test_05', () => {
        expect(arrayStepper([1, 1, 1, 1, 1, 0])).toBe(true);
    })
    test('test_06', () => {
        expect(arrayStepper([1, 1, 1, 1, 0, 0])).toBe(false)
    })
    test('test_07', () => {
        expect(arrayStepper([
            31, 30, 29, 28, 27,
            26, 25, 24, 23, 22,
            21, 20, 19, 18, 17,
            16, 15, 14, 13, 12,
            11, 10, 9, 8, 7, 6,
            5, 3, 2, 1, 0, 0, 0
        ])).toBe(false)
    })
})
