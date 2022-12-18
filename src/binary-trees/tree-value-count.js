/**
 * Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.
 * @param {BinaryNode} root 
 * @param {*} target 
 * @returns {number}
 */
const treeValueCount = (root, target) => {
    let result = 0
    let stack = [root]
    while (stack.length > 0) {
        const node = stack.pop()
        if (node) {
            if (node.val === target) result++;
            stack.push(node.left, node.right)
        }
    }
    return result
};

module.exports = {
    treeValueCount,
};