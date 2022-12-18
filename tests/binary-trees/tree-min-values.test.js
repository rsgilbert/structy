const { expect, describe, test } = require('@jest/globals');
const { breadthFirstValues } = require('../../src/binary-trees/breadth-first-values.js');
const { treeIncludes } = require('../../src/binary-trees/tree-includes.js');
const { treeMinValue } = require('../../src/binary-trees/tree-min-value.js');
const { treeSum } = require('../../src/binary-trees/tree-sum.js');
const { Node } = require('../../src/binary-trees/utils.js');

describe('treeSum', () => {
    test('test_00', () => {
        const a = new Node(3);
        const b = new Node(11);
        const c = new Node(4);
        const d = new Node(4);
        const e = new Node(-2);
        const f = new Node(1);
        
        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        
        //       3
        //    /    \
        //   11     4
        //  / \      \
        // 4   -2     1
        
        expect(treeMinValue(a)).toBe(-2); // -> -2
    })
})