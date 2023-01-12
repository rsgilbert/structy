const { expect, describe, test } = require('@jest/globals');
const { canConcat } = require('../../src/dynamic-programming/can-concat');


describe('canConcat', () => {
    test('test_00', () => {
        expect(canConcat("oneisnone", ["one", "none", "is"])).toBe(true)
    })
    test('test_01', ()=>{
        expect(canConcat("oneisnone", ["on", "e", "is"])).toBe(false)
    })
    test('test_02', ()=>{
        expect(canConcat("oneisnone", ["on", "e", "is", "n"])).toBe(true)
    })
    test('test_03', ()=>{
        expect(canConcat("foodisgood", ["is", "g", "ood", "f"])).toBe(true)
    })
    test('test_04', ()=>{
        expect(canConcat("santahat", ["santah", "hat"])).toBe(false)
    })
    test('test_05', ()=>{
        expect(canConcat("santahat", ["santah", "san", "hat", "tahat"])).toBe(true)
    })
    test('test_06', ()=>{
        expect(canConcat("rrrrrrrrrrrrrrrrrrrrrrrrrrx", ["r", "rr", "rrr", "rrrr", "rrrrr", "rrrrrr"])).toBe(false)
    })
    test('test_07', ()=>{
        expect(canConcat("fooisgood", ["foo", "is", "g", "ood", "f"])).toBe(true)
    })
})