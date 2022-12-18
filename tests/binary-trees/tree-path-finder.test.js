const { expect, describe, test } = require('@jest/globals');
const { breadthFirstValues } = require('../../src/binary-trees/breadth-first-values.js');
const { pathFinder } = require('../../src/binary-trees/tree-path-finder.js');
const { treeSum } = require('../../src/binary-trees/tree-sum.js');
const { Node } = require('../../src/binary-trees/utils.js');

describe('treePathFinder', () => {
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

        expect(pathFinder(a, 'e')).toEqual(['a', 'b', 'e']); // -> [ 'a', 'b', 'e' ]
    })

    test('test_01', () => {
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

        expect(pathFinder(a, 'p')).toBe(null); // -> null
    })

    test('test_02', () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");
        const g = new Node("g");
        const h = new Node("h");

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

        expect(pathFinder(a, "c")).toEqual(['a', 'c']); // -> ['a', 'c']
    })

    test('test_03', () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");
        const g = new Node("g");
        const h = new Node("h");

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

        expect(pathFinder(a, "h")).toEqual(['a', 'c', 'f', 'h']); // -> ['a', 'c', 'f', 'h']
    })

    test('test_04', () => {
        const x = new Node("x");

        //      x

        expect(pathFinder(x, "x")).toEqual(['x']); // -> ['x']
    })

    test('test_05', () => {
        expect(pathFinder(null, 'x')).toBe(null)
    })
    test('test_06', () => {
        const root = new Node(0);
        let curr = root;
        for (let i = 1; i <= 6000; i += 1) {
            curr.right = new Node(i);
            curr = curr.right;
        }

        //      0
        //       \
        //        1
        //         \
        //          2
        //           \
        //            3
        //             .
        //              .
        //               .
        //              5999
        //                \
        //                6000

        expect(pathFinder(root, 3451)).toHaveLength(3452); // -> [0, 1, 2, 3, ..., 3450, 3451]
    })
})