const { expect, describe, test } = require('@jest/globals');
const { quickestConcat } = require('../../src/dynamic-programming/quickest-concat');


describe('quickestConcat', () => {
    test('test_00', () => {
        expect(quickestConcat('caution', ['ca', 'ion', 'caut', 'ut'])).toBe(2)
    })
    test('test_01', ()=>{
        expect(quickestConcat('caution', ['ion', 'caut', 'caution'])).toBe(1)
    })
    test('test_02', ()=>{
        expect(quickestConcat('respondorreact', ['re', 'or', 'spond', 'act', 'respond'])).toBe(4)
    })
    test('test_03', ()=>{
        expect(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy', 'ch'])).toBe(3)
    })
    test('test_04', ()=>{
        expect(quickestConcat('simchacindy', ['sim', 'simcha', 'acindy'])).toBe(-1)
    })
    test('test_05', ()=>{
        expect(quickestConcat('uuuuuu', ['u', 'uu', 'uuu', 'uuuu'])).toBe(2)
    })
    test('test_06', ()=>{
        expect(quickestConcat('rongbetty', ['wrong', 'bet'])).toBe(-1)
    })
    test('test_07', ()=>{
        expect(quickestConcat('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', ['u', 'uu', 'uuu', 'uuuu', 'uuuuu'])).toBe(7)
    })

})