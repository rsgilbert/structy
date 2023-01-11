const { expect, describe, test } = require('@jest/globals');
const { overlapSubsequence } = require('../../src/dynamic-programming/overlap-subsequence');


describe('overlapSubsequence', () => {
    test('test_00', () => {
        expect(overlapSubsequence("dogs", "daogt")).toBe(3)
    })
    test('test_01', ()=>{
        expect(overlapSubsequence("xcyats", "criaotsi")).toBe(4)
    })
    test('test_02', ()=>{
        expect(overlapSubsequence("xfeqortsver", "feeeuavoeqr")).toBe(5)
    })
    test('test_03', ()=>{
        expect(overlapSubsequence("kinfolklivemustache", "bespokekinfolksnackwave")).toBe(11)
    })
    test('test_04', ()=>{
        expect(overlapSubsequence(
            "mumblecorebeardleggingsauthenticunicorn",
            "succulentspughumblemeditationlocavore"
          )).toBe(15)
    })
})




