const { expect, describe, test } = require('@jest/globals');
const { howHigh } = require('../../src/binary-trees/how-high.js');
const { maxPathSum } = require('../../src/binary-trees/max-root-to-leaf-path.js');
const { treeLevels } = require('../../src/binary-trees/tree-levels.js');
const { Node } = require('../../src/binary-trees/utils.js');

describe('treeLevels', () => {
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

        expect(treeLevels(a)).toEqual(
            [
                ['a'],
                ['b', 'c'],
                ['d', 'e', 'f']
            ]
        ); // ->
        // [
        //   ['a'],
        //   ['b', 'c'],
        //   ['d', 'e', 'f']
        // ]
    })
    test('test_01', () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");
        const g = new Node("g");
        const h = new Node("h");
        const i = new Node("i");

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

        expect(treeLevels(a)).toEqual(
            [
                ['a'],
                ['b', 'c'],
                ['d', 'e', 'f'],
                ['g', 'h', 'i']
            ]
        ); // ->
        // [
        //   ['a'],
        //   ['b', 'c'],
        //   ['d', 'e', 'f'],
        //   ['g', 'h', 'i']
        // ]
    })

    test('test_02', ()=>{
        const q = new Node("q");
const r = new Node("r");
const s = new Node("s");
const t = new Node("t");
const u = new Node("u");
const v = new Node("v");

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

expect(treeLevels(q)).toEqual(
    [
  ['q'],
  ['r', 's'],
  ['t'],
  ['u'],
  ['v']
]
); //->
// [
//   ['q'],
//   ['r', 's'],
//   ['t'],
//   ['u'],
//   ['v']
// ]
    })
    test('test_03', ()=>{
        expect(treeLevels(null)).toEqual([]); // -> []
    })
})