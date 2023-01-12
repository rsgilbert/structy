const { expect, describe, test } = require('@jest/globals');
const { knightlyNumber } = require('../../src/dynamic-programming/knightly-number');

describe('knightlyNumber', () => {
    test('test_00', () => {
expect(knightlyNumber(8, 2, 4, 4, 5, 5)).toBe(2)
    })
    test('test_01', ()=>{
        expect(knightlyNumber(8, 2, 7, 1, 7, 1)).toBe(3)
    })
    test('test_02', ()=>{
        expect(knightlyNumber(8, 2, 5, 4, 5, 4)).toBe(8)
    })
    test('test_03', ()=>{
        expect(knightlyNumber(8, 3, 5, 2, 4, 4)).toBe(21)
    })
    test('test_04', ()=>{
        expect(knightlyNumber(20, 6, 18, 7, 10, 15)).toBe(60)
    })
    test('test_05', ()=>{
        expect(knightlyNumber(20, 12, 8, 3, 9, 14)).toBe(98410127)
    })
    test('test_06', ()=>{
        expect(knightlyNumber(8, 2, 0, 0, 1, 1)).toBe(0)
    })

})