const { expect, describe, test } = require('@jest/globals');
const { befittingBrackets } = require('../../src/stack/befitting-brackets');

describe('befittingBrackets', () => {
    test('test_00', () => {
        expect(befittingBrackets('(){}[](())')).toBe(true)
    })
    test('test_01', ()=>{
        expect(befittingBrackets('({[]})')).toBe(true)
    })
    test('test_02', ()=>{
        expect(befittingBrackets('[][}')).toBe(false)
    })
})