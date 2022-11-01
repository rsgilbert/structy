/**
 * 
 * @param {string} s 
 */
const uncompress = s => {
    let result = ''
    while(s) {
        let num = parseInt(s)
        s = s.slice(num.toString().length)
        result += s[0].repeat(num)
        s = s.slice(1)
    }
    return result 
}


module.exports= {
    uncompress
}