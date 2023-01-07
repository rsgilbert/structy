const { expect, describe, test } = require('@jest/globals');
const { knightAttack } = require('../../src/graphs/knight-attack');

describe('knightAttack', () => {
    test('test_00', () => {
        expect(knightAttack(8, 1, 1, 2, 2)).toBe(2); // -> 2)
    })

    test('test_01', ()=>{
        expect(knightAttack(8, 1, 1, 2, 3)).toBe(1); // -> 1)
    })

    test('test_02', ()=>{
        expect(knightAttack(8, 0, 3, 4, 2)).toBe(3); // -> 3)
    })
    test('test_03', ()=>{
        expect(knightAttack(8, 0, 3, 5, 2)).toBe(4); // -> 4)
    })
    test('test_04', ()=>{
        expect(knightAttack(24, 4, 7, 19, 20)).toBe(10); // -> 10)
    })
    test('test_05', ()=>{
        expect(knightAttack(100, 21, 10, 0, 0)).toBe(11); // -> 11)
    })

    test('test_06', ()=>{
        expect(knightAttack(3, 0, 0, 1, 2)).toBe(1); // -> 1)
    })

    test('test_07', ()=>{
        expect(knightAttack(3, 0, 0, 1, 1)).toBe(null); // -> null)
    })

})