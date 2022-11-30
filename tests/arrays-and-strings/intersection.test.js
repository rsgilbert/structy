const { expect,describe,test } = require('@jest/globals');
const { intersection } = require('../../src/arrays-and-strings/intersection.js')

describe('intersection', () => {
    test('it successfully computes intersection', ()=> {
        const input1 = [4,2,1,6]
        const input2 = [3,6,9,2,10]
        // @ts-ignore
        expect(intersection(input1, input2)).toMatchObject([2,6])
    })
})