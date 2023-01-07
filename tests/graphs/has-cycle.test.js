const { expect, describe, test } = require('@jest/globals');
const { connectedComponentsCount } = require('../../src/graphs/connected-components-count.js');
const { hasCycle } = require('../../src/graphs/has-cycle.js');

describe('hasCycle', () => {
    test('test_00', () => {
        expect(hasCycle({
            a: ["b"],
            b: ["c"],
            c: ["a"],
        })).toBe(true); // -> true
    })
    test('test_01', () => {
        expect(hasCycle({
            a: ["b", "c"],
            b: ["c"],
            c: ["d"],
            d: [],
        })).toBe(false); // -> false
    })

    test('test_02', () => {
        expect(hasCycle({
            a: ["b", "c"],
            b: [],
            c: [],
            e: ["f"],
            f: ["e"],
        })).toBe(true); // -> true
    })

    test('test_03', () => {
        expect(hasCycle({
            q: ["r", "s"],
            r: ["t", "u"],
            s: [],
            t: [],
            u: [],
            v: ["w"],
            w: [],
            x: ["w"],
        })).toBe(false); // -> false
    })
    test('test_04', () => {
        expect(hasCycle({
            a: ["b"],
            b: ["c"],
            c: ["a"],
            g: [],
        })).toBe(true); // -> true
    })

    test('test_05', () => {
        expect(hasCycle({
            a: ["b"],
            b: ["c"],
            c: ["d"],
            d: ["b"],
        })).toBe(true); // -> true
    })
});