const { expect, describe, test } = require('@jest/globals');
const { breadthFirstValues } = require('../../src/binary-trees/breadth-first-values.js');
const { pathFinder } = require('../../src/binary-trees/tree-path-finder.js');
const { treeSum } = require('../../src/binary-trees/tree-sum.js');
const { treeValueCount } = require('../../src/binary-trees/tree-value-count.js');
const { Node } = require('../../src/binary-trees/utils.js');

describe('treePathFinder', () => {
    test('test_00', () => {
        const a = new Node(12);
        const b = new Node(6);
        const c = new Node(6);
        const d = new Node(4);
        const e = new Node(6);
        const f = new Node(12);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //      12
        //    /   \
        //   6     6
        //  / \     \
        // 4   6     12

        expect(treeValueCount(a, 6)).toBe(3); // -> 3
    })

    test('test_01', () => {
        const a = new Node(12);
        const b = new Node(6);
        const c = new Node(6);
        const d = new Node(4);
        const e = new Node(6);
        const f = new Node(12);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //      12
        //    /   \
        //   6     6
        //  / \     \
        // 4  6     12

        expect(treeValueCount(a, 12)).toBe(2); // -> 2
    })

    test('test_04', ()=>{
        expect(treeValueCount(null, 42)).toBe(0)
    })
})