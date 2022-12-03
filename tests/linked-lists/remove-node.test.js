const { expect, describe, test } = require('@jest/globals');
const { linkedListValues } = require('../../src/linked-lists/linked-list-values.js');
const { removeNode } = require('../../src/linked-lists/remove-node.js');
const { Node } = require('../../src/linked-lists/utils.js');

describe('removeNode', () => {
    test('removes node', () => {
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
        expect(linkedListValues(removeNode(a, 'd'))).toMatchObject(['a','b','c','e','f'])
    })

    test('returns null when removing top item in one item list', ()=> {
        const b = new Node(5)
        const n = removeNode(b, 5)
        expect(linkedListValues(n)).toMatchObject([])
    })

    test('correctly removes first item', ()=> {
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
        expect(linkedListValues(removeNode(a, 'a'))).toMatchObject(['b','c','d','e','f'])
   
    })
})
