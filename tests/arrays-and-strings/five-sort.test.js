const { expect,describe,test } = require('@jest/globals');
const { fiveSort } = require('../../src/arrays-and-strings/five-sort.js')

describe('fiveSort', () => {
    test('performs five-sort - 1', ()=> {
        const input = [12, 5, 1, 5, 12, 7, 5];
        fiveSort(input)
        // @ts-ignore
        expect(input).toMatchObject([12, 7, 1, 12, 5, 5, 5])
    })

    test('performs five-sort - 2', ()=> {
        const input = [6,5,5,5,5,5,5];
        // @ts-ignore
        expect(fiveSort(input)).toMatchObject([6,5,5,5,5,5,5])
    })

    test('performs five-sort - 3', ()=> {
        const input = [5,5,6,5];
        // @ts-ignore
        expect(fiveSort(input)).toMatchObject([6,5,5,5])
    })

    test('performs five-sort on empty set', ()=> {
        const input = [];
        // @ts-ignore
        expect(fiveSort(input)).toMatchObject([])
    })

    test('performs five-sort on all 5s', ()=> {
        const input = [5,5,5,5,5];
        // @ts-ignore
        expect(fiveSort(input)).toMatchObject([5,5,5,5,5])
    })

    test('performs five-sort on no 5s', ()=> {
        const input = [1,2,3,4];
        // @ts-ignore
        expect(fiveSort(input)).toMatchObject([1,2,3,4])
    })
})