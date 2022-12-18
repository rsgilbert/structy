const { expect, describe, test } = require('@jest/globals');
const { howHigh } = require('../../src/binary-trees/how-high.js');
const { maxPathSum } = require('../../src/binary-trees/max-root-to-leaf-path.js');
const { Node } = require('../../src/binary-trees/utils.js');

describe('howHigh', () => {
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

        expect(howHigh(a)).toBe(2); // -> 2
    })
})