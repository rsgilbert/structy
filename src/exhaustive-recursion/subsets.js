/**
 * 
 * @param {any[]} elements 
 * @param {number} i 
 * @param {any[]} sub 
 */
const subsets = (elements, i = 0, sub = []) => {
    if (elements.length === 0) return [[]];
    const el = elements[i];
    const include = [...sub, el];
    if (i === elements.length - 1) {
        return [sub, include];
    }
    return [
        ...subsets(elements, i + 1, sub),
        ...subsets(elements, i + 1, include)
    ];
};

module.exports = {
    subsets,
};

