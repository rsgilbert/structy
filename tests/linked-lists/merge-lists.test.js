const { expect, describe, test } = require('@jest/globals');
const { linkedListValues } = require('../../src/linked-lists/linked-list-values.js');
const { Node } = require('../../src/linked-lists/utils.js');
const { mergeLists } = require('../../src/linked-lists/merge-lists.js');

describe('mergeLists', () => {
    test('merge lists', () => {
        const a = new Node(3);
        const b = new Node(10);
        const c = new Node(30);
        const d = new Node(1);
        const e = new Node(7);
        const f = new Node(11);
        const g = new Node(20)
        const h = new Node(2000)

        a.next = b;
        b.next = c;

        d.next = e;
        e.next = f;
        f.next = g 
        g.next = h 

        const merged = mergeLists(a, d)

        // @ts-ignore
        expect(linkedListValues((merged))).toMatchObject([1,3,7,10,11,20,30,2000])
    })
})
