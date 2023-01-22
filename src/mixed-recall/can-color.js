const { Queue } = require("../graphs/utils");

/**
 * Write a function, canColor, that takes in an object representing the adjacency list of an undirected graph. The function should return a boolean indicating whether or not it is possible to color nodes of the graph using two colors in such a way that adjacent nodes are always different colors.
 * For example, given this graph:

    x-y-z

    It is possible to color the nodes by using red for x and z, 
    then use blue for y. So the answer is true.

    For example, given this graph:

        q
    / \
    s - r

    It is not possible to color the nodes without making two 
    adjacent nodes the same color. So the answer is false.
 * @param {Graph} graph 
 * @returns {boolean}
 */
const canColor = (graph) => {
    for (const node in graph) {
        const painted = {
            white: new Set(),
            black: new Set()
        }
        const queue = new Queue()
        const visited = new Set()
        queue.enqueue({ node: node, color: 'white' })
        while (!queue.isEmpty()) {
            const { node, color } = queue.dequeue()
            if (painted[oppositeColor(color)].has(node)) {
                // this node has already been painted a different color 
                // this is a conflict
                return false;
            }
            if (!visited.has(node)) {
                painted[color].add(node)
                visited.add(node)
                for(const neighbor of graph[node]) {
                    queue.enqueue({ node: neighbor, color: oppositeColor(color)})
                }
            }

        }
    }
    return true;

}

const oppositeColor = color => color === 'white' ? 'black' : 'white';

module.exports = {
    canColor,
};
