const { expect, describe, test } = require('@jest/globals');
const { breadthFirstValues } = require('../../src/binary-trees/breadth-first-values.js');
const { treeIncludes } = require('../../src/binary-trees/tree-includes.js');
const { treeSum } = require('../../src/binary-trees/tree-sum.js');
const { Node } = require('../../src/binary-trees/utils.js');

describe('treeSum', () => {
    test('test_00', () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");

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

        expect(treeIncludes(a, "e")).toBe(true); // -> true
    })

    test('returns false for no such node', () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");

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

        expect(treeIncludes(a, "n")).toBe(false); // -> false
    })
})