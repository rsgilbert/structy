
const { expect, describe, test } = require('@jest/globals');
const { longestStreak } = require('../../src/linked-lists/longest-streak.js');
const { Node } = require('../../src/linked-lists/utils.js');

describe('longestStreak', () => {
    test('returns correct length', () => {
        const a = new Node(7);
        const b = new Node(5);
        const c = new Node(7);
        const d = new Node(7);
        const e = new Node(7);
        const f = new Node(6);

        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;
        e.next = f;
        expect(longestStreak(a)).toBe(3)
    })
})