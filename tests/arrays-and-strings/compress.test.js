import { expect,describe,test } from '@jest/globals';
const { compress } = require('../../src/arrays-and-strings/compress.js')

describe('compress', () => {
    test('it successfully compresses', ()=> {
        const input = 'aaacc';
        expect(compress(input)).toBe('3a2c')
    })
})