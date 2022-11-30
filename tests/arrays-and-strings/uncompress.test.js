const { uncompress }= require('../../src/arrays-and-strings/uncompress.js')
const { expect,describe,test } = require('@jest/globals');

describe('uncompress', () =>{ 
    test('correctly uncompresses', () => {
        const s = '2t3o11g2s'
        const expected = 'ttooogggggggggggss'
        const result = uncompress(s)
        expect(result).toBe(expected)
    })
})