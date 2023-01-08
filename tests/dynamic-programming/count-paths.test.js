const { expect, describe, test } = require('@jest/globals');
const { countPaths } = require('../../src/dynamic-programming/count-paths');

describe('countPaths', () => {
    test('test_00', () => {
        const grid = [
            ["O", "O"],
            ["O", "O"],
        ];
        expect(countPaths(grid)).toBe(2); // -> 2
    })

    test('test_01', () => {
        const grid = [
            ["O", "O", "X"],
            ["O", "O", "O"],
            ["O", "O", "O"],
        ];
        expect(countPaths(grid)).toBe(5); // -> 5
    })

    test('test_02', ()=>{
        const grid = [
            ["O", "O", "O"],
            ["O", "O", "X"],
            ["O", "O", "O"],
          ];
          expect(countPaths(grid)).toBe(3);
    })

    test('test_03', ()=>{
        const grid = [
            ["O", "O", "O"],
            ["O", "X", "X"],
            ["O", "O", "O"],
          ];
          expect(countPaths(grid)).toBe(1)
    })

    test('test_04', ()=>{
        const grid = [
            ["O", "O", "X", "O", "O", "O"],
            ["O", "O", "X", "O", "O", "O"],
            ["X", "O", "X", "O", "O", "O"],
            ["X", "X", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O"],
          ];
          expect(countPaths(grid)).toBe(0);
    })

    test('test_05', ()=>{
        const grid = [
            ["O", "O", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "X"],
            ["X", "O", "O", "O", "O", "O"],
            ["X", "X", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O"],
          ];
          expect(countPaths(grid)).toBe(42);
    })

    test('test_06', ()=>{
        const grid = [
            ["O", "O", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "X"],
            ["X", "O", "O", "O", "O", "O"],
            ["X", "X", "X", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "X"],
          ];
          expect(countPaths(grid)).toBe(0);
    })

    test('test_07', ()=>{
        const grid = [
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
          ];
          expect(countPaths(grid)).toBe(40116600); // -> 40116600
    })

    test('test_08', ()=>{
        const grid = [
            ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "X", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "X", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
            ["X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O", "O"],
            ["X", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "X", "X", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "X", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
            ["X", "X", "X", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "X", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "X", "X", "O", "O", "O", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
            ["O", "O", "O", "O", "O", "O", "O", "O", "X", "O", "O", "O", "O", "O", "O"],
          ];
          expect(countPaths(grid)).toBe(3190434); // -> 3190434
    })

})