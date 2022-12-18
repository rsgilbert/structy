const { expect, describe, test } = require('@jest/globals');
const { bottomRightValue } = require('../../src/binary-trees/bottom-right-value.js');
const { breadthFirstValues } = require('../../src/binary-trees/breadth-first-values.js');
const { Node } = require('../../src/binary-trees/utils.js');

describe('bottomRightValue', () => {
    test('test_00', () => {
        const a = new Node(3);
        const b = new Node(11);
        const c = new Node(10);
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
        //   11     10
        //  / \      \
        // 4   -2     1

        expect(bottomRightValue(a)).toBe(1); // -> 1
    })

    test('test_01', () => {
        const a = new Node(-1);
        const b = new Node(-6);
        const c = new Node(-5);
        const d = new Node(-3);
        const e = new Node(-4);
        const f = new Node(-13);
        const g = new Node(-2);
        const h = new Node(6);

        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        e.right = h;

        //        -1
        //      /   \
        //    -6    -5
        //   /  \     \
        // -3   -4   -13
        //     / \       
        //    -2  6

        expect(bottomRightValue(a)).toBe(6); // -> 6
    })
    test('test_02', () => {
        const a = new Node(-1);
        const b = new Node(-6);
        const c = new Node(-5);
        const d = new Node(-3);
        const e = new Node(-4);
        const f = new Node(-13);
        const g = new Node(-2);
        const h = new Node(6);
        const i = new Node(7);


        a.left = b;
        a.right = c;
        b.left = d;
        b.right = e;
        c.right = f;
        e.left = g;
        e.right = h;
        f.left = i;

        //        -1
        //      /   \
        //    -6    -5
        //   /  \     \
        // -3   -4   -13
        //     / \    /   
        //    -2  6  7 

        expect(bottomRightValue(a)).toBe(7); // -> 7
    })
    test('test_03', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');
        const e = new Node('e');
        const f = new Node('f');

        a.left = b;
        a.right = c;
        b.right = d;
        d.left = e;
        e.right = f;

        //      a
        //    /   \ 
        //   b     c
        //    \
        //     d
        //    /
        //   e
        //  /
        // f

        expect(bottomRightValue(a)).toBe('f'); // -> 'f'
    })

    test('test_04', () => {
        const a = new Node(42);

        //      42

        expect(bottomRightValue(a)).toBe(42); // -> 42
    })
})