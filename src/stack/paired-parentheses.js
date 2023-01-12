const pairedParentheses = (str) => {
    let count = 0;
    for(const s of str) {
        if(count < 0) return false;
        if(s === ')') {
            count--;
        }
        else if(s === '(') {
            count++;
        }
    }
    return count === 0;
};

module.exports = {
    pairedParentheses,
};
