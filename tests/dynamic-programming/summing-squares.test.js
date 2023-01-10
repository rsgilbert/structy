const { expect, describe, test } = require('@jest/globals');
const { sumPossible } = require('../../src/dynamic-programming/sum-possible');
const { summingSquares } = require('../../src/dynamic-programming/summing-squares');

describe('summingSquares', () => {
    test('test_00', () => {
        expect(summingSquares(8)).toBe(2); // -> 2
    })
    test('test_01', ()=>{
        expect(summingSquares(9)).toBe(1)
    })
    test('test_02', ()=>{
        expect(summingSquares(12)).toBe(3); // -> 3
    })
    test('test_03', ()=>{
        expect(summingSquares(1)).toBe(1)
    })
    test('test_04', ()=>{
        expect(summingSquares(31)).toBe(4)
    })
    test('test_05', ()=>{
        expect(summingSquares(50)).toBe(2)
    })
    test('test_06', ()=>{
        expect(summingSquares(68)).toBe(2)
    })
    test('test_07', ()=>{
        expect(summingSquares(87)).toBe(4)
    })
})