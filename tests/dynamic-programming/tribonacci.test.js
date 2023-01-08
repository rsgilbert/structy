const { expect, describe, test } = require('@jest/globals');
const { tribonacci } = require('../../src/dynamic-programming/tribonacci');

describe('tribonacci', () => {
    test('test_00', () => {
        expect(tribonacci(0)).toBe(0); // -> 0
    })
    test('test_01', ()=>{
        expect(tribonacci(1)).toBe(0)
    })
    test('test_05', ()=>{
        expect(tribonacci(14)).toBe(927)
    })
})