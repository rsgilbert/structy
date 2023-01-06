const { expect, describe, test } = require('@jest/globals');
const { connectedComponentsCount } = require('../../src/graphs/connected-components-count.js');
const { largestComponent } = require('../../src/graphs/largest-component.js');
const { longestPath } = require('../../src/graphs/longest-path.js');

describe('longestPath', () => {
    test('test_00', () => {
        const graph = {
            a: ['c', 'b'],
            b: ['c'],
            c: []
        };

        expect(longestPath(graph)).toBe(2); // -> 2
    })
    test('test_01', () => {
        const graph = {
            a: ['c', 'b'],
            b: ['c'],
            c: [],
            q: ['r'],
            r: ['s', 'u', 't'],
            s: ['t'],
            t: ['u'],
            u: []
        };

        expect(longestPath(graph)).toBe(4); // -> 4
    })

    test('test_02', () => {
        const graph = {
            h: ['i', 'j', 'k'],
            g: ['h'],
            i: [],
            j: [],
            k: [],
            x: ['y'],
            y: []
        };

        expect(longestPath(graph)).toBe(2); // -> 2
    })

    test('test_03', () => {
        const graph = {
            a: ['b'],
            b: ['c'],
            c: [],
            e: ['f'],
            f: ['g'],
            g: ['h'],
            h: []
        };

        expect(longestPath(graph)).toBe(3); // -> 3
    })
})