const { expect, describe, test } = require('@jest/globals');
const { treeLevels } = require('../../src/binary-trees/tree-levels');
const { Node } = require('../../src/binary-trees/utils');
const { buildTreeInPost } = require('../../src/mixed-recall/build-tree-in-post');

describe('postOrder', () => {
    test('test_00', () => {
        const tree = buildTreeInPost(
            ['y', 'x', 'z'],
            ['y', 'z', 'x']
        );
        expect(treeLevels(tree)).toEqual([['x'], ['y', 'z']])
        //       x
        //    /    \
        //   y      z)
    })
    test('test_01', () => {
        const tree = buildTreeInPost(
            ['d', 'b', 'e', 'a', 'f', 'c', 'g'],
            ['d', 'e', 'b', 'f', 'g', 'c', 'a']
        );
        //      a
        //    /    \
        //   b      c
        //  / \    / \
        // d   e  f   g
        expect(treeLevels(tree)).toEqual([['a'], ['b', 'c'], ['d', 'e', 'f', 'g']])
    })
    test('test_02', () => {
        const tree = buildTreeInPost(
            ['d', 'b', 'g', 'e', 'h', 'a', 'c', 'f'],
            ['d', 'g', 'h', 'e', 'b', 'f', 'c', 'a']
        );
        //      a
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
        const tree = buildTreeInPost(
            ['m', 'n'],
            ['m', 'n']
        );
        //       n
        //     /
        //    m
        expect(treeLevels(tree)).toEqual([
            ['n'],
            ['m']
        ])
    })
    test('test_04', () => {
        const tree = buildTreeInPost(
            ['n', 'm'],
            ['m', 'n']
        );
        //     n
        //      \
        //       m
        expect(treeLevels(tree)).toEqual([
            ['n'],
            ['m']
        ])
    })
})