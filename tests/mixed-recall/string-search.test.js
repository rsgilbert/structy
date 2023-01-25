const { expect, describe, test } = require('@jest/globals');
const { stringSearch } = require('../../src/mixed-recall/string-search');

describe('stringSearch', () => {
    test("test_00", ()=>{
        const grid = [
            ['e', 'y', 'h', 'i', 'j'],
            ['q', 'x', 'e', 'r', 'p'],
            ['r', 'o', 'l', 'l', 'n'],
            ['p', 'r', 'x', 'o', 'h'],
            ['a', 'a', 'm', 'c', 'm']
          ];
          expect(stringSearch(grid, 'hello')).toBe(true); // -> true
    })
    test('test_01', ()=>{
        const grid = [
            ['e', 'y', 'h', 'i', 'j'],
            ['q', 'x', 'e', 'r', 'p'],
            ['r', 'o', 'l', 'l', 'n'],
            ['p', 'r', 'x', 'o', 'h'],
            ['a', 'a', 'm', 'c', 'm']
          ];
          expect(stringSearch(grid, 'proxy')).toBe(true); // -> true
    })
    test('test_02', ()=>{
        const grid = [
            ['e', 'y', 'h', 'i', 'j'],
            ['q', 'x', 'e', 'r', 'p'],
            ['r', 'o', 'l', 'l', 'n'],
            ['p', 'r', 'x', 'o', 'h'],
            ['a', 'a', 'm', 'c', 'm']
          ];
          expect(stringSearch(grid, 'rolling')).toBe(false); // -> false
    })
    test('test_03', ()=>{
        const grid = [
            ['e', 'y', 'h', 'i', 'j'],
            ['q', 'x', 'e', 'r', 'p'],
            ['r', 'o', 'l', 'l', 'n'],
            ['p', 'r', 'x', 'o', 'h'],
            ['a', 'a', 'm', 'z', 'm']
          ];
          expect(stringSearch(grid, 'zoo')).toBe(false); // -> false
    })

    test('test_04', ()=>{
        const grid = [
            ['q', 'w', 'h', 'i', 'j'],
            ['q', 'e', 'r', 'o', 'p'],
            ['h', 'y', 't', 'x', 'z'],
            ['k', 'o', 'm', 'o', 'p']
          ];
          expect(stringSearch(grid, 'qwerty')).toBe(true); // -> true
    })

    test('test_05', ()=>{
        const grid = [ 
            [ 'f', 'd', 'i', 'e', 'l', 'u', 'j', 't', 'q', 'v', 'o', 'p' ], 
            [ 'o', 'p', 'b', 'e', 'm', 'w', 'm', 'l', 'h', 'j', 's', 'v' ], 
            [ 'g', 'b', 's', 'm', 'i', 'w', 'w', 'h', 'l', 'm', 'l', 'n' ], 
            [ 'a', 'l', 's', 'k', 'p', 'c', 't', 'u', 'v', 'b', 'c', 'm' ], 
            [ 'm', 't', 'c', 'k', 'e', 'n', 'r', 'b', 'a', 'z', 'l', 'c' ], 
            [ 'q', 'm', 'a', 'p', 'a', 'p', 'i', 'i', 'u', 't', 'z', 'z' ], 
            [ 'd', 'u', 'z', 'o', 'e', 'r', 'a', 't', 't', 'c', 'q', 'k' ], 
            [ 'f', 'u', 'z', 'g', 'c', 'i', 'k', 'v', 'o', 'f', 's', 'w' ], 
            [ 'p', 'h', 'u', 'i', 'k', 'c', 'v', 'v', 'h', 'q', 'v', 'i' ], 
            [ 'l', 'q', 'w', 'f', 'y', 'g', 'w', 'f', 'a', 'u', 'x', 'q' ] 
          ];
          expect(stringSearch(grid, 'paprika')).toBe(true); // -> true
    })
    test('test_06', ()=>{
        const grid = [
            [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
            [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
            [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
            [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
            [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
            [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
            [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's' ],
            [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 'x', 'x' ],
            [ 's', 's', 's', 's', 's', 's', 's', 's', 's', 'x', 'h' ],
        ];
        expect( stringSearch(grid, 'sssssssh')).toBe(false); // -> false
    })
    test('test_07', ()=>{
        const grid = [
            ['a', 'b', 'a'],
            ['t', 'x', 'x'],
            ['x', 'x', 'x'],
          ];
        expect(stringSearch(grid, 'abat')).toBe(true); // -> true
    })

})