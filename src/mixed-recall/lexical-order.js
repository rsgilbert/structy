/**
 * Write a function, lexicalOrder, that takes in 2 words and an alphabet string as an argument. The function should return true if the first word should appear before the second word if lexically-ordered according to the given alphabet order. If the second word should appear first, then return false.

    Note that the alphabet string may be any arbitrary string.

    Intuitively, Lexical Order is like "dictionary" order:

    You can assume that all characters are lowercase a-z.

    You can assume that the alphabet contains all 26 letters.
 * @param {string} word1 
 * @param {string} word2 
 * @param {string} alphabet 
 */
const lexicalOrder = (word1, word2, alphabet, i = 0) => {
     if(word1.length <= i) return true;
     if(word2.length <= i) return false;
     if(word1[i] === word2[i]) return lexicalOrder(word1, word2, alphabet, i+1);
     return comesBefore(word1[i], word2[i], alphabet);
};

/**
 * 
 * @param {string} c1 
 * @param {string} c2 
 * @param {string} alphabet 
 */
const comesBefore = (c1, c2, alphabet) => {
    let result = alphabet.indexOf(c1) <= alphabet.indexOf(c2)
    return result;
}

module.exports = {
    lexicalOrder,
};
