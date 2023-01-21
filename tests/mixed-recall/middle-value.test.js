const { expect, describe, test } = require('@jest/globals');
const { Node } = require('../../src/linked-lists/utils.js');
const { linkedPalindrome } = require('../../src/mixed-recall/linked-palindrome.js');
const { middleValue } = require('../../src/mixed-recall/middle-value.js');

describe('middleValue', () => {
    test('test_00', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');
        const e = new Node('e');

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;

        // a -> b -> c -> d -> e
        expect(middleValue(a)).toBe('c'); // c
    })

    test('test_01', () => {
        const a = new Node('a');
        const b = new Node('b');
        const c = new Node('c');
        const d = new Node('d');
        const e = new Node('e');
        const f = new Node('f');

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;

        // a -> b -> c -> d -> e -> f
        expect(middleValue(a)).toBe('d'); // d
    })

    test('test_02', () => {
        const x = new Node('x');
        const y = new Node('y');
        const z = new Node('z');

        x.next = y;
        y.next = z;

        // x -> y -> z
        expect(middleValue(x)).toBe('y'); // y
    })

    test('test_03', () => {
        const x = new Node('x');
        const y = new Node('y');

        x.next = y;

        // x -> y 
        expect(middleValue(x)).toBe('y'); // y
    })

    test('test_04', () => {
        const q = new Node('q');

        // q
        expect(middleValue(q)).toBe('q'); // q
    })

})