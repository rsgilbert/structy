const { expect, describe, test } = require('@jest/globals');
const { linkedListValues } = require('../../src/linked-lists/linked-list-values.js');
const { addLists } = require('../../src/linked-lists/add-lists.js');
const { Node } = require('../../src/linked-lists/utils.js');

describe('addLists', () => {
    test('test_00: 621 + 354 = 975', () => {

        const a1 = new Node(1);
        const a2 = new Node(2);
        const a3 = new Node(6);
        a1.next = a2;
        a2.next = a3;
        // 1 -> 2 -> 6

        const b1 = new Node(4);
        const b2 = new Node(5);
        const b3 = new Node(3);
        b1.next = b2;
        b2.next = b3;
        // 4 -> 5 -> 3

        let result = addLists(a1, b1);
        // 5 -> 7 -> 9

        // @ts-ignore
        expect(linkedListValues(result)).toMatchObject([5, 7, 9])
    })


    test('test_01: 7541 + 32 = 7573', () => {
        //  7541
        // +  32
        // -----
        //  7573

        const a1 = new Node(1);
        const a2 = new Node(4);
        const a3 = new Node(5);
        const a4 = new Node(7);
        a1.next = a2;
        a2.next = a3;
        a3.next = a4;
        // 1 -> 4 -> 5 -> 7

        const b1 = new Node(2);
        const b2 = new Node(3);
        b1.next = b2;
        // 2 -> 3 

        let result = addLists(a1, b1);
        // 3 -> 7 -> 5 -> 7

        // @ts-ignore
        expect(linkedListValues(result)).toMatchObject([3, 7, 5, 7])
    })

    test('test_02: 39 + 47 = 86', () => {
        //   39
        // + 47
        // ----
        //   86

        const a1 = new Node(9);
        const a2 = new Node(3);
        a1.next = a2;
        // 9 -> 3

        const b1 = new Node(7);
        const b2 = new Node(4);
        b1.next = b2;
        // 7 -> 4

        let result = addLists(a1, b1);
        // 6 -> 8

        // @ts-ignore
        expect(linkedListValues(result)).toMatchObject([6, 8])
    })

    test('test_03: 89 + 47 = 136', () => {
        //   89
        // + 47
        // ----
        //  136

        const a1 = new Node(9);
        const a2 = new Node(8);
        a1.next = a2;
        // 9 -> 8

        const b1 = new Node(7);
        const b2 = new Node(4);
        b1.next = b2;
        // 7 -> 4

        let result = addLists(a1, b1);
        // 6 -> 3 -> 1

        // @ts-ignore
        expect(linkedListValues(result)).toMatchObject([6, 3, 1])
    })

    test('test_04: 999 + 6 = 1005', () => {
        //   999
        //  +  6
        //  ----
        //  1005

        const a1 = new Node(9);
        const a2 = new Node(9);
        const a3 = new Node(9);
        a1.next = a2;
        a2.next = a3;
        // 9 -> 9 -> 9

        const b1 = new Node(6);
        // 6

        const result = addLists(a1, b1);
        // 5 -> 0 -> 0 -> 1

        // @ts-ignore
        expect(linkedListValues(result)).toMatchObject([5, 0,0,1])
    })

})