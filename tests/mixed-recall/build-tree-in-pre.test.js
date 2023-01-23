const { expect, describe, test } = require('@jest/globals');
const { treeLevels } = require('../../src/binary-trees/tree-levels');
const { Node } = require('../../src/binary-trees/utils');
const { buildTreeInPost } = require('../../src/mixed-recall/build-tree-in-post');
const { buildTreeInPre } = require('../../src/mixed-recall/build-tree-in-pre');

describe('postOrder', () => {
    test('test_00', () => {
        const tree = buildTreeInPre(
            ['z', 'y', 'x'],
            ['y', 'z', 'x']
        );
        //       y
        //    /    \
        //   z      x
        expect(treeLevels(tree)).toEqual([
            ['y'],
            ['z', 'x']
        ])
    })

    test('test_01', () => {
        const tree = buildTreeInPre(
            ['y', 'z', 'x'],
            ['y', 'x', 'z']
        );
        //       y
        //        \
        //         x
        //        / 
        //       z
        expect(treeLevels(tree)).toEqual([
            ['y'],
            ['x'],
            ['z']
        ])
    })

    test('test_02', () => {
        const tree = buildTreeInPre(
            ['d', 'b', 'g', 'e', 'h', 'a', 'c', 'f'],
            ['a', 'b', 'd', 'e', 'g', 'h', 'c', 'f']
        );
        //       a
        //    /    \
        //   b      c
        //  / \      \
        // d   e      f
        //    / \
        //    g  h
        expect(treeLevels(tree)).toEqual([
            ['a'],
            ['b', 'c'],
            ['d', 'e', 'f'],
            ['g', 'h']
        ])
    })
    test('test_03', () => {
        const tree = buildTreeInPre(
            ['t', 'u', 's', 'q', 'r', 'p'],
            ['u', 't', 's', 'r', 'q', 'p']
        );
        //     u
        //  /    \
        // t      s
        //         \
        //         r
        //        / \
        //        q  p
        expect(treeLevels(tree)).toEqual([
            ['u'],
            ['t', 's'],
            ['r'],
            ['q', 'p']
        ])
    })

    test('test_04', () => {
        const tree = buildTreeInPre(
            ['m', 'l', 'q', 'o', 'r', 'n', 's', 'p', 't'],
            ['l', 'm', 'n', 'o', 'q', 'r', 'p', 's', 't']
        );
        //        l
        //     /     \
        //    m       n
        //         /    \
        //         o     p
        //        / \   / \
        //       q   r s   t
        expect(treeLevels(tree)).toEqual([
            ['l'],
            ['m', 'n'],
            ['o', 'p'],
            ['q', 'r', 's', 't']
        ])
    })


})