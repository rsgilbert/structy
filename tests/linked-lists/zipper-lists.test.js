const { expect, describe, test } = require('@jest/globals');
const { linkedListValues } = require('../../src/linked-lists/linked-list-values.js');
const { Node } = require('../../src/linked-lists/utils.js');
const { zipperLists } = require('../../src/linked-lists/zipper-lists.js');

describe('zipperLists', () => {
    test('zipper lists', () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");
        const g = new Node("g")
        const h = new Node("h")

        a.next = b;
        b.next = c;

        d.next = e;
        e.next = f;
        f.next = g 
        g.next = h 

        const zippered = zipperLists(a, d)

        // @ts-ignore
        expect(linkedListValues((zippered))).toMatchObject(['a', 'd', 'b', 'e', 'c', 'f', 'g', 'h'])
    })
})
