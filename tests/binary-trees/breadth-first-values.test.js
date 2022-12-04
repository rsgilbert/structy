
const { expect, describe, test } = require('@jest/globals');
const { breadthFirstValues } = require('../../src/binary-trees/breadth-first-values.js');
const { Node } = require('../../src/binary-trees/utils.js');

describe('breadthFirstValues', () => {
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

        expect(breadthFirstValues(a)).toEqual(['a', 'b', 'c', 'd', 'e', 'f'])
        //    -> ['a', 'b', 'c', 'd', 'e', 'f']
    })

    test('test_01', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');
        const e = new Node('e');
        const f = new Node('f');
        const g = new Node('g');
        const h = new Node('h');

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        f.right = h;

        //      a
        //    /   \
        //   b     c
        //  / \     \
        // d   e     f
        //    /       \
        //   g         h

        expect(breadthFirstValues(a)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
        //   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    })
})