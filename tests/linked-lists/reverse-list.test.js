const { expect, describe, test } = require('@jest/globals');
const { linkedListValues } = require('../../src/linked-lists/linked-list-values.js');
const { reverseList } = require('../../src/linked-lists/reverse-list.js');
const { Node } = require('../../src/linked-lists/utils.js');

describe('reverseList', () => {
    test('reverses list', () => {
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
        expect(linkedListValues(reverseList(a))).toMatchObject(['f', 'e', 'd', 'c', 'b', 'a'])
    })
})
