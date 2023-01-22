const { expect, describe, test } = require('@jest/globals');
const { canColor } = require('../../src/mixed-recall/can-color');

describe('canColor', () => {
    test('test_00', () => {
        expect(canColor({
            x: ["y"],
            y: ["x", "z"],
            z: ["y"]
        })).toBe(true); // -> true)
    })
    test('test_01', ()=>{
        expect(canColor({
            q: ["r", "s"],
            r: ["q", "s"],
            s: ["r", "q"]
          })).toBe(false)
    })
    test('test_02', ()=>{
        expect(canColor({
            a: ["b", "c", "d"],
            b: ["a"],
            c: ["a"],
            d: ["a"],
          })).toBe(true)
    })
    test('test_03', ()=>{
        expect(canColor({
            a: ["b", "c", "d"],
            b: ["a"],
            c: ["a", "d"],
            d: ["a", "c"],
          })).toBe(false)
    })
    test('test_04', ()=>{
        expect(canColor({
            h: ["i", "k"],
            i: ["h", "j"],
            j: ["i", "k"],
            k: ["h", "j"],
          })).toBe(true)
    })
    test('test_05', ()=>{
        expect(canColor({
            z: []
          })).toBe(true); // -> true
    })
    test('test_06', ()=>{
        expect(canColor({
            h: ["i", "k"],
            i: ["h", "j"],
            j: ["i", "k"],
            k: ["h", "j"],
            q: ["r", "s"],
            r: ["q", "s"],
            s: ["r", "q"]
          })).toBe(false)
    })
})