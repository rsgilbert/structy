const { expect, describe, test } = require('@jest/globals');
const { hasPath } = require('../../src/graphs/has-path.js');
const { undirectedPath, adjacencyListFor } = require('../../src/graphs/undirected-path.js');

describe('adjacencyListFor', ()=> {
    test('t01', ()=> {
        const edges = [
            ['i', 'j'],
            ['k', 'i'],
            ['m', 'k'],
            ['k', 'l'],
            ['o', 'n']
        ];
        const expectedAdjacencyList = {
            i: ['j', 'k'],
            j: ['i'],
            k: ['i', 'm', 'l'],
            m: ['k'],
            l: ['k'],
            o: ['n'],
            n: ['o']
        }
        expect(adjacencyListFor(edges)).toEqual(expectedAdjacencyList)
    })
})
describe('undirectedPath', () => {
    test('test_00', () => {
        const edges = [
            ['i', 'j'],
            ['k', 'i'],
            ['m', 'k'],
            ['k', 'l'],
            ['o', 'n']
        ];

        expect(undirectedPath(edges, 'j', 'm')).toBe(true); // -> true
    })
    test('test_01', () => {
        const edges = [
            ['i', 'j'],
            ['k', 'i'],
            ['m', 'k'],
            ['k', 'l'],
            ['o', 'n']
        ];

        expect(undirectedPath(edges, 'm', 'j')).toBe(true); // -> true
    })
    test('test_02', () => {
        const edges = [
            ['i', 'j'],
            ['k', 'i'],
            ['m', 'k'],
            ['k', 'l'],
            ['o', 'n']
        ];

        expect(undirectedPath(edges, 'l', 'j')).toBe(true); // -> true
    })

    test('test_03', ()=> {
        const edges = [
            ['i', 'j'],
            ['k', 'i'],
            ['m', 'k'],
            ['k', 'l'],
            ['o', 'n']
          ];
          
          expect(undirectedPath(edges, 'k', 'o')).toBe(false); // -> false
    })

    test('test_04', ()=>{
        const edges = [
            ['i', 'j'],
            ['k', 'i'],
            ['m', 'k'],
            ['k', 'l'],
            ['o', 'n']
          ];
          
          expect(undirectedPath(edges, 'i', 'o')).toBe(false); // -> false
    })
    test('test_05', ()=>{
        const edges = [
            ['b', 'a'],
            ['c', 'a'],
            ['b', 'c'],
            ['q', 'r'],
            ['q', 's'],
            ['q', 'u'],
            ['q', 't'],
          ];
          
          expect(undirectedPath(edges, 'a', 'b')).toBe(true); // -> true
    })

    test('test_06', ()=>{
        const edges = [
            ['b', 'a'],
            ['c', 'a'],
            ['b', 'c'],
            ['q', 'r'],
            ['q', 's'],
            ['q', 'u'],
            ['q', 't'],
          ];
          
          expect(undirectedPath(edges, 'a', 'c')).toBe(true); // -> true
    })

    test('test_07', ()=>{
        const edges = [
            ['b', 'a'],
            ['c', 'a'],
            ['b', 'c'],
            ['q', 'r'],
            ['q', 's'],
            ['q', 'u'],
            ['q', 't'],
          ];
          
          expect(undirectedPath(edges, 'r', 't')).toBe(true); // -> true
    })

    test('test_08', ()=>{
        const edges = [
            ['b', 'a'],
            ['c', 'a'],
            ['b', 'c'],
            ['q', 'r'],
            ['q', 's'],
            ['q', 'u'],
            ['q', 't'],
          ];
          
          expect(undirectedPath(edges, 'r', 'b')).toBe(false); // -> false
    })
    
    test('test_09', ()=>{
        const edges = [
            ['s', 'r'],
            ['t', 'q'],
            ['q', 'r'],
          ];
          
          expect(undirectedPath(edges, 'r', 't')).toBe(true); // -> true
    })

})