const { describe, test, expect } = require("@jest/globals");
const { tokenReplace } = require("../../src/mixed-recall/token-replace");

describe('tokenReplace', () => {
    test('test_00', () => {
        const tokens = {
            '$LOCATION$': 'park',
            '$ANIMAL$': 'dog',
        };
        expect(tokenReplace('Walk the $ANIMAL$ in the $LOCATION$!', tokens)).toEqual('Walk the dog in the park!');
        // -> 'Walk the dog in the park!'
    })
    test('test_01', ()=>{
        const tokens = {
            '$ADJECTIVE$': 'quick',
            '$VERB$': 'hopped',
            '$DIRECTION$': 'North'
          };
          expect(tokenReplace('the $ADJECTIVE$ fox $VERB$ $ADJECTIVE$ly $DIRECTION$ward', tokens)).toEqual('the quick fox hopped quickly Northward')
          // -> 'the quick fox hopped quickly Northward'
    })

    test('test_02', ()=>{
        const tokens = {
            '$greeting$': 'hey programmer',
          };
          expect(tokenReplace('his greeting is always $greeting$.', tokens)).toEqual('his greeting is always hey programmer.') 
          // -> 'his greeting is always hey programmer.'
    })
    test('test_03', ()=>{
        const tokens = {
            '$A$': 'lions',
            '$B$': 'tigers',
            '$C$': 'bears',
          };
          expect(tokenReplace('$A$$B$$C$, oh my.', tokens)).toEqual('lionstigersbears, oh my.')
          // -> 'lionstigersbears, oh my.'
    })
    test('test_04', ()=>{
        const tokens = {
            '$A$': 'lions',
            '$B$': 'tigers',
            '$C$': 'bears',
          };
          expect(tokenReplace('$B$', tokens)).toEqual('tigers')
          // -> 'tigers'
    })
    test('test_05', ()=>{
        const tokens = {
            '$second$': 'beta',
            '$first$': 'alpha',
            '$third$': 'gamma',
          };
          expect(tokenReplace('$first$second$third$', tokens)).toEqual('alphasecondgamma')
          // -> 'alphasecondgamma'
    })
})