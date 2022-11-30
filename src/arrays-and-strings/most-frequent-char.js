/**
 * 
 * @param {string} s 
 * @returns {string} - the most frequent character
 */
const mostFrequentChar = (s) => {
    let frequency = {}
    for(let c of s) {
        frequency[c] = (frequency[c] ?? 0) + 1  
    }
    /** @type {[string,number]} */
    let mostFrequent = ['', Number.MIN_VALUE]
    for(let entry of Object.entries(frequency)){
        if(entry[1] > mostFrequent[1]) {
            mostFrequent = entry 
        }
    }
    return mostFrequent[0]
};

module.exports = {
    mostFrequentChar,
};
