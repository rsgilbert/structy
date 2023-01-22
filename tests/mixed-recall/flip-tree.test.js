const { expect, describe, test } = require('@jest/globals');
const { breadthFirstValues } = require('../../src/binary-trees/breadth-first-values.js');
const { Node } = require('../../src/binary-trees/utils.js');
const { flipTree } = require('../../src/mixed-recall/flip-tree.js');

describe('flipTree', () => {
    test('test_00', () => {
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
        e.right = h;

        //      a
        //    /    \
        //   b      c
        //  / \      \
        // d   e      f
        //    / \
        //    g  h

        const result = flipTree(a);

        //       a
        //    /    \
        //   c      b
        //  /     /   \
        // f     e    d
        //     /  \
        //    h    g
        expect(breadthFirstValues(a)).toEqual(['a', 'c', 'b', 'f', 'e', 'd', 'h', 'g'])
    })

    test('test_01', () => {
        const u = new Node("u");
        const t = new Node("t");
        const s = new Node("s");
        const r = new Node("r");
        const q = new Node("q");
        const p = new Node("p");

        u.left = t;
        u.right = s;
        s.right = r;
        r.left = q;
        r.right = p;

        //     u
        //  /    \
        // t      s
        //         \
        //         r
        //        / \
        //        q  p

        const result = flipTree(u);

        //           u
        //        /    \
        //       s      t
        //      /
        //     r
        //    / \
        //   p  q
        expect(breadthFirstValues(result)).toEqual(['u', 's', 't', 'r', 'p', 'q'])
    })

    test('test_02', () => {
        const l = new Node("l");
        const m = new Node("m");
        const n = new Node("n");
        const o = new Node("o");
        const p = new Node("p");
        const q = new Node("q");
        const r = new Node("r");
        const s = new Node("s");
        const t = new Node("t");

        l.left = m;
        l.right = n;
        n.left = o;
        n.right = p;
        o.left = q;
        o.right = r;
        p.left = s;
        p.right = t;

        //        l
        //     /     \
        //    m       n
        //         /    \
        //         o     p
        //        / \   / \
        //       q   r s   t

        const result = flipTree(l);

        //             l
        //         /      \
        //        n        m
        //      /  \
        //    p     o
        //  / \    / \
        // t   s  r   q
        expect(breadthFirstValues(result)).toEqual(['l', 'n', 'm', 'p', 'o', 't', 's', 'r', 'q'])
    })
    test('test_03', () => {
        const n = new Node("n");
        const y = new Node("y");
        const c = new Node("c");

        n.left = y;
        n.right = c;

        //       n
        //     /   \
        //    y     c

        const result = flipTree(n);

        //       n
        //     /   \
        //    c     y
        expect(breadthFirstValues(result)).toEqual(['n', 'c', 'y'])
    })
})