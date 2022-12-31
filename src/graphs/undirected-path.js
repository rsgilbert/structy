const { Stack } = require("./utils");

/**
 * 
 * @param {any[][]} edges 
 * @param {*} nodeA 
 * @param {*} nodeB 
 */
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = adjacencyListFor(edges)
    const stack = new Stack()
    const visited = new Set()
    stack.push(nodeA)
    while(!stack.isEmpty()) {
        const current = stack.pop()
        if(!visited.has(current)) {
            visited.add(current)
            if(current === nodeB) {
                return true 
            }
            for(let neighbor of graph[current]) {
                stack.push(neighbor)
            }
        }
    }
    return false
};

/**
 * Convert a list edges into an adjacency list
 * @param {any[][]} edges 
 * @return {Graph}
 */
function adjacencyListFor(edges) {
    /** @type {Graph} */
    let result = {}
    for (let edge of edges) {
        let [node1, node2] = edge;
        if(!Object.keys(result).includes(node1)) {
            result[node1] = []
        }
        if(!Object.keys(result).includes(node2)) {
            result[node2] = []
        }
        result[node1].push(node2);
        result[node2].push(node1);
    }
    return result

}

module.exports = {
    undirectedPath,
    adjacencyListFor
};


