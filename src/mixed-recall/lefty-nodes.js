const {  Queue } = require("../graphs/utils");

/**
 * Write a function, leftyNodes, that takes in the root of a binary tree. The function should return an array containing the left-most value on every level of the tree. The array must be ordered in a top-down fashion where the root is the first element.
 *Note that the left-most node on a level may not necessarily be a left child.
 * @param {BinaryNode} root 
 * @returns {any[]} lefty nodes
 */
const leftyNodes = (root) => {
    const levels = []
    const queue = new Queue()
    queue.enqueue({ node: root, depth: 0 })
    while(!queue.isEmpty()) {
        const { node, depth } = queue.dequeue()
        if(node != null) {
            levels[depth] = levels[depth] ? [...levels[depth], node.val] : [node.val];
            queue.enqueue({ node: node.left, depth: depth+1})
            queue.enqueue({ node: node.right, depth: depth+1})
        }
    }
    return levels.map(l => l[0]);
};

module.exports = {
    leftyNodes,
};
