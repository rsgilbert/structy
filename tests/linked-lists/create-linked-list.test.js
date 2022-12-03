const { expect, describe, test } = require('@jest/globals');
const { linkedListValues } = require('../../src/linked-lists/linked-list-values.js');
const { insertNode } = require('../../src/linked-lists/insert-node.js');
const { Node } = require('../../src/linked-lists/utils.js');
const { createLinkedList } = require('../../src/linked-lists/create-linked-list.js');

describe('createLinkedList', () => {
    test('creates linked list', () => {
        const ll = createLinkedList([2,4,6])
        // @ts-ignore
        expect(linkedListValues(ll)).toMatchObject([2,4,6])
    })

    test('returns null when provided empty values array', ()=> {
        // @ts-ignore
        expect(createLinkedList([])).toBe(null)
    })


})
