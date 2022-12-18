const { expect, describe, test } = require('@jest/globals');
const { howHigh } = require('../../src/binary-trees/how-high.js');
const { levelAverages } = require('../../src/binary-trees/level-averages.js');
const { maxPathSum } = require('../../src/binary-trees/max-root-to-leaf-path.js');
const { treeLevels } = require('../../src/binary-trees/tree-levels.js');
const { Node } = require('../../src/binary-trees/utils.js');

describe('levelAverages', () => {
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

        expect(levelAverages(a)).toEqual([3, 7.5, 1]); // -> [ 3, 7.5, 1 ] 
    })
})