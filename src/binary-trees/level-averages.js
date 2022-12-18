/**
 * Write a function, levelAverages, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.
 * @param {BinaryNode} root 
 * @returns {number[]}
 */
const levelAverages = (root) => {
    let result = []
    // queue since we're using breadth-first search
    // remove from start (.shift)
    // add to end (.push) 
    let queue = [{ node: root, parentLevel: -1 }]
    while (queue.length > 0) {
        let { node, parentLevel } = queue.shift()
        if (node !== null) {
            let level = parentLevel + 1
            queue.push({ node: node.left, parentLevel: level })
            queue.push({ node: node.right, parentLevel: level })
            // add to result 
            if (result[level] === undefined) {
                result[level] = []
            }
            result[level].push(node.val)
        }
    }
    /**
     * @param {number[]} arr 
     * @return {number}
     */
    const avg = arr => {
        return arr.reduce((acc, v) => acc + v, 0) / arr.length
    }

    return result.map(avg)
};

module.exports = {
    levelAverages,
};
