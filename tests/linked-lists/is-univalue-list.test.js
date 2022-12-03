const { expect, describe, test } = require('@jest/globals');
const { linkedListValues } = require('../../src/linked-lists/linked-list-values.js');
const { Node } = require('../../src/linked-lists/utils.js');
const { isUnivalueList } = require('../../src/linked-lists/is-univalue-list.js');

describe('isUnivalueList', () => {
    test('has only one unique value returns true', () => {
        const a = new Node(3);
        const b = new Node(3);
        const c = new Node(3);

        a.next = b;
        b.next = c;
        expect(isUnivalueList((a))).toBe(true)
    })
    test('when it does not have only one unique value returns false', () => {
        const a = new Node(3);
        const b = new Node(8);
        const c = new Node(3);

        a.next = b;
        b.next = c;
        expect(isUnivalueList((a))).toBe(false)
    })
})
