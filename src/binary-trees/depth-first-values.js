/**
 * Performs depth first search to list all the nodes
 * @param {BinaryNode} root 
 * @return {any[]}
 */
const depthFirstValues = (root) => {
    const result = []
    depthFirstValuesRecur(root, result)
    return result 
};

/**
 * 
 * @param {BinaryNode} node 
 * @param {any[]} result 
 * @return {void}
 */
const depthFirstValuesRecur = (node, result) => {
    if(node === null) return
    result.push(node.val)
    depthFirstValuesRecur(node.left, result)
    depthFirstValuesRecur(node.right, result)
}

module.exports = {
    depthFirstValues,
};


