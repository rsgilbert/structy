const { expect, describe, test } = require('@jest/globals');
const { maxPalinSubsequence } = require('../../src/dynamic-programming/max-palin-subsequence');


describe('maxPalinSubsequence', () => {
    test('test_00', () => {
        expect(maxPalinSubsequence("luwxult")).toBe(5)
    })

    test('test_01', ()=>{
        expect(maxPalinSubsequence("xyzaxxzy")).toBe(6)
    })
    test('test_02', ()=>{
        expect(maxPalinSubsequence("lol")).toBe(3)
    })
    test('test_03', ()=>{
        expect(maxPalinSubsequence("boabcdefop")).toBe(3)
    })
    test('test_04', ()=>{
        expect(maxPalinSubsequence('z')).toBe(1)
    })
    test('test_05', ()=>{
        expect(maxPalinSubsequence("chartreusepugvicefree")).toBe(7)
    })
    test('test_06', ()=>{
        expect(maxPalinSubsequence("qwueoiuahsdjnweuueueunasdnmnqweuzqwerty")).toBe(15)
    })
    test('test_07', ()=>{
        expect(maxPalinSubsequence("enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe")).toBe(31)
    })

})