const { adjacencyListFor, Queue } = require("./utils");

/**
 * Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.
 * @param {any[][]} edges 
 * @param {*} nodeA 
 * @param {*} nodeB 
 */
const shortestPath = (edges, nodeA, nodeB) => {
    const graph = adjacencyListFor(edges);
    const queue = new Queue()
    queue.enqueue({ node: nodeA, pathSize: 0 })
    const visited = new Set()
    while (!queue.isEmpty()) {
        const { node, pathSize } = queue.dequeue()
        if(!visited.has(node)) {
            visited.add(node)
            if(node === nodeB) {
                return pathSize
            }
            for (const neighbor of graph[node]) {
                queue.enqueue({ node: neighbor, pathSize: pathSize + 1 })
            }
        }
    }
    return -1

};

module.exports = {
    shortestPath,
};
