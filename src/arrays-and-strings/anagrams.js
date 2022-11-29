
/**
 * Check and return true if the two strings are anagrams, ie they contain the same characters 
 * @param {string} s1 
 * @param {string} s2 
 */
const anagrams = (s1, s2) => {
    if(s1.length !== s2.length) return false;
    let s1Array = Array.from(s1).sort()
    let s2Array = Array.from(s2).sort() 
    for(let i = 0; i < s1Array.length; i++) {
        if(s1Array[i] !== s2Array[i]) return false 
    }
    return true 
};

module.exports = {
    anagrams,
};
