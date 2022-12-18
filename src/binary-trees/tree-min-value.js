/**
 * 
 * @param {BinaryNode} root 
 * @returns {number}
 */
const treeMinValue = (root) => {
    const stack = [root]
    let result = Number.MAX_VALUE
    while(stack.length) {
        const node = stack.pop()
        if(node !== null) {
            result = Math.min(result, node.val)
            stack.push(node.left, node.right)
        }
    }
    return result 
};

module.exports = {
    treeMinValue,
};
