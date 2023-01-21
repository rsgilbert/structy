const { expect, describe, test } = require('@jest/globals');
const { Node } = require('../../src/linked-lists/utils.js');
const { linkedListCycle } = require('../../src/mixed-recall/linked-list-cycle.js');

describe('linkedListCycle', () => {
    test('test_00', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = b; // cycle

        //         _______
        //       /        \
        // a -> b -> c -> d 

        expect(linkedListCycle(a)).toBe(true);  // true
    })

    test('test_01', () => {
        const q = new Node('q');
        const r = new Node('r');
        const s = new Node('s');
        const t = new Node('t');
        const u = new Node('u');

        q.next = r;
        r.next = s;
        s.next = t;
        t.next = u;
        u.next = q; // cycle

        //    ________________
        //  /                 \
        // q -> r -> s -> t -> u 

        expect(linkedListCycle(q)).toBe(true);  // true
    })

    test('test_02', () => {

        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');

        a.next = b;
        b.next = c;
        c.next = d;

        // a -> b -> c -> d 

        expect(linkedListCycle(a)).toBe(false);  // false
    })

    test('test_03', () => {
        const q = new Node('q');
        const r = new Node('r');
        const s = new Node('s');
        const t = new Node('t');
        const u = new Node('u');

        q.next = r;
        r.next = s;
        s.next = t;
        t.next = u;
        u.next = t; // cycle

        //                   __
        //                 /   \
        // q -> r -> s -> t -> u 

        expect(linkedListCycle(q)).toBe(true);  // true
    })

    test('test_04', () => {
        const p = new Node('p');

        // p

        expect(linkedListCycle(p)).toBe(false); // false
    })

    test('test_05', () => {
        expect(linkedListCycle(null)).toBe(false); // false
    })
})