const { expect, describe, test } = require('@jest/globals');
const { binarySearch } = require('../../src/mixed-recall/binary-search');

describe('breakingBoundaries', () => {
    test('test_00', () => {
        expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6)).toBe(6)
    })
    test('test_01', ()=>{
        expect(binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 27)).toBe(-1)
    })
    test('test_02', ()=>{
expect(binarySearch([0, 6, 8, 12, 16, 19, 20, 28], 8)).toBe(2)
    })
    test('test_03', ()=>{
        expect(binarySearch([0, 6, 8, 12, 16, 19, 20, 24, 28], 28)).toBe(8)
    })
    test('test_04', ()=>{
        expect(binarySearch([7, 9], 7)).toBe(0)
    })
    test('test_05', ()=>{
        expect(binarySearch([7, 9], 9)).toBe(1)
    })
    test('test_06', ()=>{
        expect(binarySearch([7, 9], 12)).toBe(-1)
    })
    test('test_07', ()=>{
        expect(binarySearch([7], 7)).toBe(0)
    })
    test('test_08', ()=>{
        expect(binarySearch([], 7)).toBe(-1)
    })
})