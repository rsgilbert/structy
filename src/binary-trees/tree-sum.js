

/**
 * 
 * @param {BinaryNode} root 
 * @returns {number}
 */
const treeSum = (root) => {
    const stack = [root]
    let result = 0
    while(stack.length) {
        const node = stack.pop()
        if(node) {
            result += node.val
            stack.push(node.left, node.right)
        }
  
    }
    return result
};

module.exports = {
    treeSum,
};
