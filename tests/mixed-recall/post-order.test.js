const { expect, describe, test } = require('@jest/globals');
const { Node } = require('../../src/binary-trees/utils');
const { isBinarySearchTree } = require('../../src/mixed-recall/is-binary-search-tree');
const { postOrder } = require('../../src/mixed-recall/post-order');

describe('isBinarySearchTree', () => {
    test('test_00', () => {
        const x = new Node('x');
        const y = new Node('y');
        const z = new Node('z');

        x.left = y;
        x.right = z;

        //       x
        //    /    \
        //   y      z

        expect(postOrder(x)).toEqual(['y', 'z', 'x']);
        // ['y', 'z', 'x']
    })
    test('test_01', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');
        const e = new Node('e');
        const f = new Node('f');
        const g = new Node('g');

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.left = f;
        c.right = g;

        //      a
        //    /    \
        //   b      c
        //  / \    / \
        // d   e  f   g

        expect(postOrder(a)).toEqual(['d', 'e', 'b', 'f', 'g', 'c', 'a'])
        // [ 'd', 'e', 'b', 'f', 'g', 'c', 'a' ] 
    })
    test('test_02', () => {
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

        expect(postOrder(a)).toEqual(['d', 'g', 'h', 'e', 'b', 'f', 'c', 'a'])
        // [ 'd', 'g', 'h', 'e', 'b', 'f', 'c', 'a' ] 
    })
    test('test_03', () => {
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

        expect(postOrder(l)).toEqual(['m', 'q', 'r', 'o', 's', 't', 'p', 'n', 'l']);
        // [ 'm', 'q', 'r', 'o', 's', 't', 'p', 'n', 'l' ]
    })
    test('test_04', () => {
        expect(postOrder(null)).toEqual([]);
        // []
    })
})