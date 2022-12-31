const { expect, describe, test } = require('@jest/globals');
const { hasPath } = require('../../src/graphs/has-path.js');

describe('hasPath', () => {
    test('test_00', () => {
        const graph = {
            f: ['g', 'i'],
            g: ['h'],
            h: [],
            i: ['g', 'k'],
            j: ['i'],
            k: []
        };

        expect(hasPath(graph, 'f', 'k')).toBe(true); // true
    })

    test('test_01', () => {
        const graph = {
            f: ['g', 'i'],
            g: ['h'],
            h: [],
            i: ['g', 'k'],
            j: ['i'],
            k: []
        };

        expect(hasPath(graph, 'f', 'j')).toBe(false); // false
    })

    test('test_02', () => {
        const graph = {
            f: ['g', 'i'],
            g: ['h'],
            h: [],
            i: ['g', 'k'],
            j: ['i'],
            k: []
        };

        expect(hasPath(graph, 'i', 'h')).toBe(true); // true
    })
    test('test_03', () => {
        const graph = {
            v: ['x', 'w'],
            w: [],
            x: [],
            y: ['z'],
            z: [],
        };

        expect(hasPath(graph, 'v', 'w')).toBe(true); // true
    })
    test('test_04', () => {
        const graph = {
            v: ['x', 'w'],
            w: [],
            x: [],
            y: ['z'],
            z: [],
        };

        expect(hasPath(graph, 'v', 'z')).toBe(false); // false
    })
})
