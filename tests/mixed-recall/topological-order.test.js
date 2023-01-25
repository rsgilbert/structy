const { expect, describe, test } = require('@jest/globals');
const { topologicalOrder } = require('../../src/mixed-recall/topological-order.js');

describe('topologicalOrder', () => {
    test('test_00', () => {
        const order = topologicalOrder({
            a: ["f"],
            b: ["d"],
            c: ["a", "f"],
            d: ["e"],
            e: [],
            f: ["b", "e"],
        }); // -> ['c', 'a', 'f', 'b', 'd', 'e']
        expect(order).toEqual(['c', 'a', 'f', 'b', 'd', 'e'])
    })
    test('test_01', () => {
        const order = topologicalOrder({
            h: ["l", "m"],
            i: ["k"],
            j: ["k", "i"],
            k: ["h", "m"],
            l: ["m"],
            m: [],
        }); // -> ['j', 'i', 'k', 'h', 'l', 'm']
        expect(order).toEqual(['j', 'i', 'k', 'h', 'l', 'm'])
    })
    test('test_02', () => {
        const order = topologicalOrder({
            q: [],
            r: ["q"],
            s: ["r"],
            t: ["s"],
        }); // -> ['t', 's', 'r', 'q']
        expect(order).toEqual(['t', 's', 'r', 'q'])
    })
    test('test_03', () => {
        const order = topologicalOrder({
            v: ["z", "w"],
            w: [],
            x: ["w", "v", "z"],
            y: ["x"],
            z: ["w"],
        }); // -> ['y', 'x', 'v', 'z', 'w']
        expect(order).toEqual(['y', 'x', 'v', 'z', 'w'])
    })

})