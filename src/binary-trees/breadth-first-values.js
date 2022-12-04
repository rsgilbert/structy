/**
 * Performs breadth first search to list all the nodes
 * @param {BinaryNode} root 
 * @return {any[]}
 */
const breadthFirstValues = (root) => {
    // think of nodes as a queue
    // we enqueue from the end of the array
    // we dequeue from the start of the array
    let nodes = [root]
    let result = []
    while(nodes.length) {
        let [firstNode, ...rest] = nodes;
        if(firstNode === null) {
            nodes = [...rest];
            continue;
        }
        result = [...result, firstNode.val];
        nodes = [...rest, firstNode.left, firstNode.right];
    }
    return result 
};


module.exports = {
    breadthFirstValues,
};
