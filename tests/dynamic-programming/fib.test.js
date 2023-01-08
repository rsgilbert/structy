const { expect, describe, test } = require('@jest/globals');
const { fib } = require('../../src/dynamic-programming/fib');

describe('fib', () => {
    test('test_00', () => {
        expect(fib(0)).toBe(0); // -> 0
    })
    test('test_01', () => {
        expect(fib(1)).toBe(1);
    })
    test('test_02', () => {
        expect(fib(2)).toBe(1);
    })
    test('test_03', () => {
        expect(fib(3)).toBe(2);
    })
    test('test_04', () => {
        expect(fib(4)).toBe(3);
    })
    test('test_05', () => {
        expect(fib(5)).toBe(5);
    })
    test('test_06', () => {
        expect(fib(35)).toBe(9227465);
    })
    test('test_07', () => {
        expect(fib(46)).toBe(1836311903);
    })

})