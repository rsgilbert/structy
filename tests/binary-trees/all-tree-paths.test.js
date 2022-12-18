const { expect, describe, test } = require('@jest/globals');
const { allTreePaths } = require('../../src/binary-trees/all-tree-paths.js');
const { bottomRightValue } = require('../../src/binary-trees/bottom-right-value.js');
const { breadthFirstValues } = require('../../src/binary-trees/breadth-first-values.js');
const { Node } = require('../../src/binary-trees/utils.js');

describe('allTreePaths', () => {
    test('test_00', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');
        const e = new Node('e');
        const f = new Node('f');

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

        expect(allTreePaths(a)).toEqual(
            [
                ['a', 'b', 'd'],
                ['a', 'b', 'e'],
                ['a', 'c', 'f']
            ]
        ); // ->
        // [ 
        //   [ 'a', 'b', 'd' ], 
        //   [ 'a', 'b', 'e' ], 
        //   [ 'a', 'c', 'f' ] 
        // ] 
    })

    test('test_01', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');
        const e = new Node('e');
        const f = new Node('f');
        const g = new Node('g');
        const h = new Node('h');
        const i = new Node('i');

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        e.right = h;
        f.left = i;

        //         a
        //      /    \
        //     b      c
        //   /  \      \
        //  d    e      f
        //      / \    /   
        //     g  h   i 

        expect(allTreePaths(a)).toEqual(
            [
                ['a', 'b', 'd'],
                ['a', 'b', 'e', 'g'],
                ['a', 'b', 'e', 'h'],
                ['a', 'c', 'f', 'i']
            ]
        ); // ->
        // [ 
        //   [ 'a', 'b', 'd' ], 
        //   [ 'a', 'b', 'e', 'g' ], 
        //   [ 'a', 'b', 'e', 'h' ], 
        //   [ 'a', 'c', 'f', 'i' ] 
        // ] 
    })

    test('test_02', () => {
        const q = new Node('q');
        const r = new Node('r');
        const s = new Node('s');
        const t = new Node('t');
        const u = new Node('u');
        const v = new Node('v');

        q.left = r;
        q.right = s;
        r.right = t;
        t.left = u;
        u.right = v;

        //      q
        //    /   \ 
        //   r     s
        //    \
        //     t
        //    /
        //   u
        //  /
        // v

        expect(allTreePaths(q)).toEqual(
            [
                ['q', 'r', 't', 'u', 'v'],
                ['q', 's']
            ]
        ); // ->
        // [ 
        //   [ 'q', 'r', 't', 'u', 'v' ], 
        //   [ 'q', 's' ] 
        // ] 
    })
    test('test_03', () => {
        const z = new Node('z');

        //      z

        expect(allTreePaths(z)).toEqual([['z']]); // -> 
        // [
        //   ['z']
        // ]
    })
})