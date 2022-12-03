
const { expect, describe, test } = require('@jest/globals');
const { getNodeValue } = require('../../src/linked-lists/get-node-value.js');
const { Node } = require('../../src/linked-lists/utils.js');

describe('getNodeValue', () => {
    test('returns val for found index', () => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        a.next = b
        b.next = c
        // @ts-ignore
        expect(getNodeValue(a, 1)).toBe('b')
    })

    test('returns null when no such index', () => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        a.next = b
        b.next = c
        // @ts-ignore
        expect(getNodeValue(a, 10)).toBe(null)
    })

})