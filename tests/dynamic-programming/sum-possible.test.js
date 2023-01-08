const { expect, describe, test } = require('@jest/globals');
const { sumPossible } = require('../../src/dynamic-programming/sum-possible');

describe('sumPossible', () => {
    test('test_00', () => {
        expect(sumPossible(8, [5, 12, 4])).toBe(true); 
    });
    test('test_01', ()=>{
        expect(sumPossible(15, [6, 2, 10, 19])).toBe(false)
    })
    test('test_02', ()=>{
        expect(sumPossible(13, [6, 2, 1])).toBe(true)
    });
    test('test_03', ()=>{
        expect(sumPossible(103, [6, 20, 1])).toBe(true)
    })
    test('test_04', ()=>{
        expect(sumPossible(12, [])).toBe(false)
    })
    test('test_05', ()=>{
        expect(sumPossible(12, [12])).toBe(true)
    })
    test('test_06', ()=>{
        expect(sumPossible(0, [])).toBe(true)
    })
    test('test_07', ()=>{
        expect(sumPossible(271, [10, 8, 265, 24])).toBe(false)
    })
    test('test_08', ()=>{
        expect(sumPossible(2017, [4, 2, 10])).toBe(false)
    })
    test('test_09', ()=>{
        expect(sumPossible(13, [3, 5])).toBe(true)
    })
})