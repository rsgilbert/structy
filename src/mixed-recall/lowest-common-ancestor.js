const { Stack } = require("../graphs/utils");

/**
 * Write a function, lowestCommonAncestor, that takes in the root of a binary tree and two values. The function should return the value of the lowest common ancestor of the two values in the tree.
 * @param {BinaryNode} root 
 * @param {*} val1 
 * @param {*} val2 
 * @returns {*}
 */
const lowestCommonAncestor = (root, val1, val2) => {
    let val1Path = []
    let val2Path = []
    let foundVal1 = false
    let foundVal2 = false
    if(root === null) return null;

    const stack = new Stack()
    stack.push({ node: root, path: [root.val] })
    while (!(foundVal1 && foundVal2) && !stack.isEmpty()) {
        const { node, path } = stack.pop()
        if (node !== null) {
            if (node?.val === val1) {
                foundVal1 = true;
                val1Path = path
            }
            if (node?.val === val2) {
                foundVal2 = true;
                val2Path = path;
            }
            stack.push({ node: node.left, path: [...path, node.left?.val] })
            stack.push({ node: node.right, path: [...path, node.right?.val] })
        }
    }
    for(let i = val1Path.length - 1; i >= 0; i--) {
        if(val2Path.includes(val1Path[i])) {
            return val1Path[i];
        }
    }
    return null;

};

module.exports = {
    lowestCommonAncestor,
};
