/**
 * Write a function, maxPathSum, that takes in the root of a binary tree that contains number values. The function should return the maximum sum of any root to leaf path within the tree.
 * @param {BinaryNode} root 
 * @returns {number}
 */
const maxPathSum = (root) => {
    let result = -Number.MAX_VALUE
    let stack = [{ node: root, sumAbove: 0 }]
    while (stack.length > 0) {
        const { node, sumAbove } = stack.pop()
        if (node !== null) {
            if (node.left == null && node.right == null) {
                // node is a leaf
                // we see if it has max root to leaf
                result = Math.max(result, sumAbove + node.val)
            }
            stack.push({ node: node.left, sumAbove: sumAbove + node.val })
            stack.push({ node: node.right, sumAbove: sumAbove + node.val })
        }
    }
    return result
};

module.exports = {
    maxPathSum,
};
