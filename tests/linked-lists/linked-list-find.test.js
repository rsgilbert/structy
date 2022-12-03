
const { expect, describe, test } = require('@jest/globals');
const { linkedListFind } = require('../../src/linked-lists/linked-list-find.js');
const { Node } = require('../../src/linked-lists/utils.js');

describe('linkedListFind', () => {
    test('returns true when item is found in linked list', () => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        a.next = b
        b.next = c
        // @ts-ignore
        expect(linkedListFind(a, 'b')).toBe(true)
    })

    test('returns false when item is not found in linked list', () => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        a.next = b
        b.next = c
        // @ts-ignore
        expect(linkedListFind(a, 'd')).toBe(false)
    })

})