
/**
 * 
 * @param {string} s 
 */
const compress = s => {
    let result = ''
    let runningCount = 0 
    let runningChar = ''
    let idx = 0
    while (idx < s.length) {
        let char = s[idx]
        if(char === runningChar) {
            // still seeing same character
            runningCount++ 
        }
        else {
            // the streak of same characters has been broken
            // we compress the streak 
            if(runningCount > 1) {
                result += `${runningCount}`
            }
            result += runningChar
            runningChar = char 
            runningCount = 1
        }
        idx++ 
    }
    if(runningCount > 1) {
        result += `${runningCount}`
    }
    result += runningChar
    return result 
}

module.exports = {
    compress 
}