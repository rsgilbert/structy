
const { expect, describe, test } = require('@jest/globals');
const { sumList } = require('../../src/linked-lists/sum-list.js');
const { Node } = require('../../src/linked-lists/utils.js');

describe('sumList', () => {
    test('returns sum of values in linked list', () => {
        const a = new Node(2);
        const b = new Node(8);
        const c = new Node(3);
        const d = new Node(-1);
        const e = new Node(7);
        a.next = b
        b.next = c
        c.next = d 
        d.next = e
        // @ts-ignore
        expect(sumList(a)).toBe(19)
    })

    test('returns zero when head is null', () => {
        expect(sumList(null)).toBe(0)
    })
})