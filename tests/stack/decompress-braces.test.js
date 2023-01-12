const { expect, describe, test } = require('@jest/globals');
const { decompressBraces } = require('../../src/stack/decompress-braces');

describe('decompressBraces', () => {
    test('test_00', () => {
        expect(decompressBraces("2{q}3{tu}v")).toBe('qqtututuv')
    })
    test('test_01', ()=>{
        expect(decompressBraces("ch3{ao}")).toBe('chaoaoao')
    })
    test('test_02', ()=>{
        expect(decompressBraces("2{y3{o}}s")).toBe('yoooyooos')
    })
    test('test_03', ()=>{
        expect(decompressBraces("z3{a2{xy}b}")).toBe('zaxyxybaxyxybaxyxyb')
    })
    test('test_04', ()=>{
        expect(decompressBraces("2{3{r4{e}r}io}")).toBe('reeeerreeeerreeeerioreeeerreeeerreeeerio')
    })
    test('test_05', ()=>{
        expect(decompressBraces("go3{spinn2{ing}s}")).toBe('gospinningingsspinningingsspinningings')
    })
    test('test_06', ()=>{
        expect(decompressBraces("2{l2{if}azu}l")).toBe('lififazulififazul')
    })
    test('test_07', ()=>{
        expect(decompressBraces("3{al4{ec}2{icia}}")).toBe('alececececiciaiciaalececececiciaiciaalececececiciaicia')
    })
})