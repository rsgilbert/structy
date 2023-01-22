const { expect, describe, test } = require('@jest/globals');
const { Node } = require('../../src/binary-trees/utils.js');
const { leftyNodes } = require('../../src/mixed-recall/lefty-nodes.js');

describe('leftyNodes', () => {
    test('test_00', () => {
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
        e.right = h;

        //      a
        //    /    \
        //   b      c
        //  / \      \
        // d   e      f
        //    / \
        //    g  h

        expect(leftyNodes(a)).toEqual(['a', 'b', 'd', 'g']); // [ 'a', 'b', 'd', 'g' ]
    })

    test('test_01', () => {
        const u = new Node('u');
        const t = new Node('t');
        const s = new Node('s');
        const r = new Node('r');
        const q = new Node('q');
        const p = new Node('p');

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

        expect(leftyNodes(u)).toEqual(['u', 't', 'r', 'q']); // [ 'u', 't', 'r', 'q' ]
    })

    test('test_02', () => {
        const l = new Node('l');
        const m = new Node('m');
        const n = new Node('n');
        const o = new Node('o');
        const p = new Node('p');
        const q = new Node('q');
        const r = new Node('r');
        const s = new Node('s');
        const t = new Node('t');

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

        expect(leftyNodes(l)).toEqual(['l', 'm', 'o', 'q']); // [ 'l', 'm', 'o', 'q' ]
    })

    test('test_03', () => {
        const n = new Node('n');
        const y = new Node('y');
        const c = new Node('c');

        n.left = y;
        n.right = c;

        //       n
        //     /   \
        //    y     c

        expect(leftyNodes(n)).toEqual(['n', 'y']); // [ 'n', 'y' ]
    })
    test('test_04', () => {
        const i = new Node('i');
        const n = new Node('n');
        const s = new Node('s');
        const t = new Node('t');

        i.right = n;
        n.left = s;
        n.right = t;

        //       i
        //        \
        //         n
        //        / \
        //       s   t

        expect(leftyNodes(i)).toEqual(['i', 'n', 's']); // [ 'i', 'n', 's' ]
    })

    test('test_05', () => {
        expect(leftyNodes(null)).toEqual([])
    })
})