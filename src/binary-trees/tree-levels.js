/**
 * Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.
 * @param {BinaryNode} root 
 * @returns {any[][]}
 */
const treeLevels = (root) => {
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
            if(result[level] === undefined) {
                result[level] = []
            }
            result[level].push(node.val)
        }
    }
    return result
};

module.exports = {
    treeLevels,
};
