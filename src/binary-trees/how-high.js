/**
 * Write a function, howHigh, that takes in the root of a binary tree. The function should return a number representing the height of the tree.
 * The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.
 * If the tree is empty, return -1.
 * @param {BinaryNode} root 
 * @returns {number} - height of the binary tree
 */
const howHigh = (root) => {
    if (root === null) return -1
    let result = -1
    const stack = [{ node: root, heightAbove: -1 }]
    while (stack.length > 0) {
        const { node, heightAbove } = stack.pop()
        if (node !== null) {
            if (node.left === null && node.right === null) {
                // node is a leaf 
                result = Math.max(result, heightAbove + 1)
            }
            stack.push({ node: node.left, heightAbove: heightAbove + 1 })
            stack.push({ node: node.right, heightAbove: heightAbove + 1 })
        }
    }
    return result
};

module.exports = {
    howHigh,
};