/**
 * 
 * @param {BinaryNode} root 
 * @returns {*}
 */
const bottomRightValue = (root) => {
    let result 
    // We shall use breadth-first search to find bottom right value
    // breadth-first search can be implemented using a queue data structure
    // we add to the end and remove from the start
    let queue = [root]
    while(queue.length > 0) {
        const node = queue.shift()
        if(node !== null) {
            result = node.val 
            queue.push(node.left, node.right)
        }
    }
    return result 

};

module.exports = {
    bottomRightValue,
};
