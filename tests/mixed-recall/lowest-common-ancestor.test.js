const { expect, describe, test, beforeEach } = require('@jest/globals');
const { Node } = require('../../src/binary-trees/utils');
const { lowestCommonAncestor } = require('../../src/mixed-recall/lowest-common-ancestor.js');


describe('lowestCommonAncestor', () => {
    describe('using example tree 1', () => {
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
        test('test_00', () => {
            expect(lowestCommonAncestor(a, 'd', 'h')).toBe('b'); // b)
        })
        test('test_01', () => {
            expect(lowestCommonAncestor(a, 'd', 'g')).toBe('b')
        })
        test('test_02', () => {
            expect(lowestCommonAncestor(a, 'g', 'c')).toBe('a')
        })
        test('test_03', () => {
            expect(lowestCommonAncestor(a, 'b', 'g')).toBe('b')
        })
        test('test_04', () => {
            expect(lowestCommonAncestor(a, 'f', 'c')).toBe('c')
        })
    })

    describe('using example tree 2', () => {
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

        test('test_05', () => {
            expect(lowestCommonAncestor(l, 'r', 'p')).toBe('n'); // n)
        })
        test('test_06', () => {
            expect(lowestCommonAncestor(l, 'm', 'o')).toBe('l'); // l
        })
        test('test_07', () => {
            expect(lowestCommonAncestor(l, 't', 'q')).toBe('n'); // n
        })
        test('test_08', () => {
            expect(lowestCommonAncestor(l, 's', 'p')).toBe('p'); // p
        })
    })

})