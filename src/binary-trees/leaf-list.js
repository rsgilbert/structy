/**
 * Write a function, treeLevels, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a level of the tree.
 * @param {BinaryNode} root 
 * @returns {any[][]}
 */
const leafList = (root) => {
    let result = []
    const stack = [root]
    while (stack.length > 0) {
        const node = stack.pop()
        if (node !== null) {
            if (node.left === null && node.right === null) {
                // node is a leaf 
                result.push(node.val)
            }
            // add right before left so result maintains left-to-right ordering
            stack.push(node.right, node.left)
        }
    }
    return result
};

module.exports = {
    leafList,
};
