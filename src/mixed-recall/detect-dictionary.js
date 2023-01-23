const { lexicalOrder } = require("./lexical-order");


/**
 * Write a function, detectDictionary, that takes in a dictionary of words and an alphabet string. The function should return a boolean indicating whether or not all words of the dictionary are lexically-ordered according to the alphabet.
You can assume that the alphabet contains all 26 letters.
* @param {string[]} dictionary
* @param {string} alphabet 
*/
const detectDictionary = (dictionary, alphabet, i = 0) => {
    for(let i = 0, j = 1; j < dictionary.length; i++, j++) {
        if(!lexicalOrder(dictionary[i], dictionary[j], alphabet)) {
            return false;
        }
   }
   return true;
};

module.exports = {
    detectDictionary,
};
