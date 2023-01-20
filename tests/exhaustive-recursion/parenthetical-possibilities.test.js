const { expect, describe, test } = require('@jest/globals');
const { parentheticalPossibilities } = require('../../src/exhaustive-recursion/parenthetical-possibilities');

describe('parentheticalPossibilities', () => {
    test('test_00', () => {
        expect(parentheticalPossibilities('x(mn)yz')).toEqual(
            ['xmyz', 'xnyz'])
    })
    test('test_01', () => {
        expect(parentheticalPossibilities("(qr)ab(stu)c")).toEqual(
            ['qabsc', 'qabtc', 'qabuc', 'rabsc', 'rabtc', 'rabuc'])
    })

    test('test_02', () => {
        expect(parentheticalPossibilities("taco")).toEqual(
            ['taco'])
    })
    test('test_03', () => {
        expect(parentheticalPossibilities("")).toEqual(
            [''])
    })
    test('test_04', () => {
        expect(parentheticalPossibilities("(etc)(blvd)(cat)")).toEqual(
            [
                'ebc', 'eba', 'ebt', 'elc', 'ela',
                'elt', 'evc', 'eva', 'evt', 'edc',
                'eda', 'edt', 'tbc', 'tba', 'tbt',
                'tlc', 'tla', 'tlt', 'tvc', 'tva',
                'tvt', 'tdc', 'tda', 'tdt', 'cbc',
                'cba', 'cbt', 'clc', 'cla', 'clt',
                'cvc', 'cva', 'cvt', 'cdc', 'cda',
                'cdt'
            ])
    })
});