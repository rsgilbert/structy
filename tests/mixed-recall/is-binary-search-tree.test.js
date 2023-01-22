const { expect, describe, test } = require('@jest/globals');
const { Node } = require('../../src/binary-trees/utils');
const { isBinarySearchTree } = require('../../src/mixed-recall/is-binary-search-tree');

describe('isBinarySearchTree', () => {
    test('test_00', () => {
        const a = new Node(12);
        const b = new Node(5);
        const c = new Node(18);
        const d = new Node(3);
        const e = new Node(9);
        const f = new Node(19);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //      12
        //    /   \
        //   5     18
        //  / \     \
        // 3   9     19

        expect(isBinarySearchTree(a)).toBe(true); // -> true
    })
    test('test_01', () => {
        const a = new Node(12);
        const b = new Node(5);
        const c = new Node(18);
        const d = new Node(3);
        const e = new Node(15);
        const f = new Node(19);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //      12
        //    /   \
        //   5     18
        //  / \     \
        // 3   15     19

        expect(isBinarySearchTree(a)).toBe(false); // -> false
    })
    test('test_02', () => {
        const a = new Node(12);
        const b = new Node(5);
        const c = new Node(19);
        const d = new Node(3);
        const e = new Node(9);
        const f = new Node(19);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //      12
        //    /   \
        //   5     19
        //  / \     \
        // 3   9     19

        expect(isBinarySearchTree(a)).toBe(true); // -> true
    })
    test('test_03', () => {
        const a = new Node(12);
        const b = new Node(5);
        const c = new Node(10);
        const d = new Node(3);
        const e = new Node(9);
        const f = new Node(19);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;

        //      12
        //    /   \
        //   5     10
        //  / \     \
        // 3   9     19

        expect(isBinarySearchTree(a)).toBe(false); // -> false
    })
    test('test_04', () => {
        const q = new Node(54);
        const r = new Node(42);
        const s = new Node(70);
        const t = new Node(31);
        const u = new Node(50);
        const v = new Node(72);
        const w = new Node(47);
        const x = new Node(90);

        q.left = r;
        q.right = s;
        r.left = t;
        r.right = u;
        s.right = v;
        u.left = w;
        v.right = x;

        //       54
        //     /    \
        //    42     70
        //   / \      \
        // 31   50     72
        //     /        \
        //    47         90

        expect(isBinarySearchTree(q)).toBe(true); // -> true
    })
})
