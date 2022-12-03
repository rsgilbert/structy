
const { expect, describe, test } = require('@jest/globals');
const { linkedListValues } = require('../../src/linked-lists/linked-list-values.js');
const { Node } = require('../../src/linked-lists/utils.js');

describe('linkedListValues', () => {
    test('returns array of values in linked list', () => {
        const a = new Node('a')
        const b = new Node('b')
        const c = new Node('c')
        a.next = b
        b.next = c
        // @ts-ignore
        expect(linkedListValues(a)).toMatchObject(['a', 'b', 'c'])
    })

    test('returns empty array when head is null', () => {
        expect(linkedListValues(null)).toMatchObject([])
    })
})