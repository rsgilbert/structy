const { expect, describe, test } = require('@jest/globals');
const { breakingBoundaries } = require('../../src/mixed-recall/breaking-boundaries');

describe('breakingBoundaries', () => {
    test('test_00', () => {
        expect(breakingBoundaries(3, 4, 2, 0, 0)).toBe(4)
    })
    test('test_01', ()=>{
        expect(breakingBoundaries(2, 2, 2, 1, 1)).toBe(6)
    })
    test('test_02', ()=>{
        expect(breakingBoundaries(3, 4, 3, 0, 0)).toBe(11)
    })
    test('test_03', ()=>{
        expect(breakingBoundaries(4, 4, 5, 2, 1)).toBe(160)
    })
    test('test_04', ()=>{
        expect(breakingBoundaries(5, 6, 9, 2, 5)).toBe(11635)
    })
    test('test_05', ()=>{
        expect(breakingBoundaries(6, 6, 12, 3, 4)).toBe(871065)
    })
    test('test_06', ()=>{
        expect(breakingBoundaries(6, 6, 15, 3, 4)).toBe(40787896)
    })
    test('test_07', ()=>{
        expect(breakingBoundaries(6, 8, 16, 2, 1)).toBe(137495089)
    })

})