const { expect, describe, test } = require('@jest/globals');
const { detectDictionary } = require('../../src/mixed-recall/detect-dictionary.js');

describe('detectDictionary', () => {
    test('test_00', () => {
        const dictionary = ["zoo", "tick", "tack", "door"];
        const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
        expect(detectDictionary(dictionary, alphabet)).toBe(true); // -> true
    })
    test('test_01', () => {
        const dictionary = ["zoo", "tack", "tick", "door"];
        const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
        expect(detectDictionary(dictionary, alphabet)).toBe(false); // -> false
    })
    test('test_02', () => {
        const dictionary = ["zoos", "zoo", "tick", "tack", "door"];
        const alphabet = "ghzstijbacdopnfklmeqrxyuvw";
        expect(detectDictionary(dictionary, alphabet)).toBe(false); // -> false
    })
    test('test_03', () => {
        const dictionary = ["miles", "milestone", "proper", "process", "goal"];
        const alphabet = "mnoijpqrshkltabcdefguvwzxy";
        expect(detectDictionary(dictionary, alphabet)).toBe(true); // -> true
    })
    test('test_04', () => {
        const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal"];
        const alphabet = "mnoijpqrshkltabcdefguvwzxy";
        expect(detectDictionary(dictionary, alphabet)).toBe(true); // -> true
    })
    test('test_05', () => {
        const dictionary = ["miles", "milestone", "pint", "proper", "process", "goal", "apple"];
        const alphabet = "mnoijpqrshkltabcdefguvwzxy";
        expect(detectDictionary(dictionary, alphabet)).toBe(false); // -> false
    })

})
