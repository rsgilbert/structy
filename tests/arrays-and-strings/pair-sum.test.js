const { expect,describe,test } = require('@jest/globals');
const { pairSum } = require('../../src/arrays-and-strings/pair-sum.js')

describe('pairSum', () => {
    test('returns the pair of indices whose elements sum to the given sum', ()=> {
        const input1 = [1, 3, 2, 8]
        const input2 = 5
        // @ts-ignore
        expect(pairSum(input1, input2)).toMatchObject([1, 2])
    })

})