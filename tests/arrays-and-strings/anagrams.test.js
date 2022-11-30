import { expect,describe,test } from '@jest/globals';

const { anagrams } = require('../../src/arrays-and-strings/anagrams.js')

describe('anagrams', () => {
    test('should be true -> the strings are anagrams', ()=> {
        const input1 = 'restful';
        const input2 = 'fluster'
        expect(anagrams(input1, input2)).toBe(true)
    })
    test('should be false -> the strings are not anagrams', ()=> {
        const input1 = 'cats';
        const input2 = 'tocs'
        expect(anagrams(input1, input2)).toBe(false)
    })
})