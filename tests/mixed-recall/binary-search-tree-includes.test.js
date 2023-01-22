const { expect, describe, test } = require('@jest/globals');
const { Node } = require('../../src/binary-trees/utils');
const { binarySearchTreeIncludes } = require('../../src/mixed-recall/binary-search-tree-includes');

describe('binarySearchTreeIncludes', () => {
    describe('tree a', () => {
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
        test('test_00', () => {
            expect(binarySearchTreeIncludes(a, 9)).toBe(true)
        })
        test('test_01', () => {
            expect(binarySearchTreeIncludes(a, 15)).toBe(false)
        })
        test('test_02', () => {
            expect(binarySearchTreeIncludes(a, 1)).toBe(false)
        })
        test('test_03', () => {
            expect(binarySearchTreeIncludes(a, 12)).toBe(true)
        })
    })
    describe('tree q', () => {
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

        test('test_04', ()=>{
            expect(binarySearchTreeIncludes(q, 55)).toBe(false)
        })
        test('test_05', ()=>{
            expect(binarySearchTreeIncludes(q, 47)).toBe(true)
        })
        test('test_06', ()=>{
            expect(binarySearchTreeIncludes(q, 49)).toBe(false)
        })
        test('test_07', ()=>{
            expect(binarySearchTreeIncludes(q, 70)).toBe(true)
        })
        test('test_08', ()=>{
            expect(binarySearchTreeIncludes(q, 100)).toBe(false)
        })
    })

})