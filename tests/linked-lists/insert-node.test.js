const { expect, describe, test } = require('@jest/globals');
const { linkedListValues } = require('../../src/linked-lists/linked-list-values.js');
const { insertNode } = require('../../src/linked-lists/insert-node.js');
const { Node } = require('../../src/linked-lists/utils.js');

describe('insertNode', () => {
    test('inserts node', () => {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;


        // @ts-ignore
        expect(linkedListValues(insertNode(a, 'X', 3))).toMatchObject(['a','b','c','X','d','e','f'])
    })

    test('correctly inserts into empty list', ()=> {
        const b = new Node(5)
        const n = insertNode(null, 'hi', 0)
        // @ts-ignore
        expect(linkedListValues(n)).toMatchObject(['hi'])
    })

    test('correctly inserts first item', ()=> {
        const a = new Node("a");
        const b = new Node("b");
        const c = new Node("c");
        const d = new Node("d");
        const e = new Node("e");
        const f = new Node("f");

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;  
        // @ts-ignore
        expect(linkedListValues(insertNode(a, 'm', 0))).toMatchObject(['m','a','b','c','d','e','f'])
   
    })
})
