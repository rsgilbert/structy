
const { expect, describe, test } = require('@jest/globals');
const { depthFirstValues } = require('../../src/binary-trees/depth-first-values.js');
const { Node } = require('../../src/binary-trees/utils.js');

describe('depthFirstValues', () => {
    test('test_00', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');
        const e = new Node('e');
        const f = new Node('f');

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //      a
        //    /   \
        //   b     c
        //  / \     \
        // d   e     f


        const result = depthFirstValues(a);
        //    -> ['a', 'b', 'd', 'e', 'c', 'f']
        // @ts-ignore
        expect(result).toMatchObject(['a', 'b', 'd', 'e', 'c', 'f'])
    })

    test('test_01', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');
        const e = new Node('e');
        const f = new Node('f');
        const g = new Node('g');

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;

        //      a
        //    /   \
        //   b     c
        //  / \     \
        // d   e     f
        //    /
        //   g

        const result = depthFirstValues(a);
        //    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']
        expect(result).toEqual(['a', 'b', 'd', 'e', 'g', 'c', 'f'])
    })

    test('test_02', () => {
        const a = new Node('a');
        expect(depthFirstValues(a)).toEqual(['a']);
    })

    test('test_03', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');
        const e = new Node('e');

        a.right = b;
        b.left = c;
        c.right = d;
        d.right = e;

        //      a
        //       \
        //        b
        //       /
        //      c
        //       \
        //        d
        //         \
        //          e

        expect(depthFirstValues(a)).toEqual(['a', 'b', 'c', 'd', 'e']);
        //    -> ['a', 'b', 'c', 'd', 'e']
    })

    test('test_04', ()=>{
        expect(depthFirstValues(null)).toEqual([]); 
        //    -> [])
    })
})

