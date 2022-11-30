const { mostFrequentChar } = require('../../src/arrays-and-strings/most-frequent-char.js')

describe('mostFrequentChar', () => {
    test('returns most frequent character', ()=> {
        const input = 'bookeeper';
        expect(mostFrequentChar(input)).toBe('e')
    })

})