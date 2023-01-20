/**
 * Write a function, substituteSynonyms, that takes in a sentence and an object as arguments. The object contains words as keys whose values are arrays containing synonyms. The function should return an array containing all possible sentences that can be formed by substituting words of the sentence with their synonyms.
 * @param {string} sentence 
 * @param {Record<string, string[]>} synonyms 
 * @param {number} wordsIdx
 * @returns {string[]}
 */
const substituteSynonyms = (sentence, synonyms, wordsIdx = 0) => {
    const wordsToReplace = Object.keys(synonyms)
    if (wordsIdx >= wordsToReplace.length) return [sentence];
    const word = wordsToReplace[wordsIdx];
    const syns = synonyms[word];
    const replacements = new Set()
    for (const s of syns) {
        const sentenceArr = sentence.split(' ');
        do {
            // replace the first match only
            let foundIdx = sentenceArr.findIndex(w => w === word);
            if(foundIdx !== -1) sentenceArr[foundIdx] = s;
            const newWordsIdx = sentenceArr.includes(word) ? wordsIdx : wordsIdx+1;
            const substitutions = substituteSynonyms(sentenceArr.join(' '), synonyms, newWordsIdx)
            substitutions.forEach(sub => replacements.add(sub))
        }
        while(sentenceArr.includes(word));
    }
    return [...replacements];
}

module.exports = {
    substituteSynonyms,
};
