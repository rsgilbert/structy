
/**
 * Write a function, allTreePaths, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.
 * @param {BinaryNode} root 
 * @return {any[][]}
 */
const allTreePaths = (root) => {
    let result = []
    const stack = [{node:root, pathAbove: []}]
    while(stack.length > 0) {
        const {node, pathAbove} = stack.pop()
        if(node !== null) {
            if(node.left === null && node.right === null) {
                // node is a leaf 
                result.push([...pathAbove, node.val])
            }
            // we start with right since this is a stack
            stack.push({node: node.right, pathAbove: [...pathAbove,node.val]}) 
            stack.push({node: node.left, pathAbove: [...pathAbove,node.val]})
        }
    }
    return result
};

module.exports = {
    allTreePaths,
};
