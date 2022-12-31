const { Stack } = require("./utils");

/** @param { Graph } graph */
const connectedComponentsCount = (graph) => {
    const visited = new Set()
    let result = 0
    for(const node of Object.keys(graph)) {
        if(!visited.has(node.toString())) {
            result ++;
            const stack = new Stack()
            stack.push(node)
            while(!stack.isEmpty()) {
                const current = stack.pop()
                if(!visited.has(current.toString())) {
                    visited.add(current.toString())
                    for(const neighbor of graph[current]) {
                        stack.push(neighbor)
                    }
                }
            }
        }
    }
    return result
};

module.exports = {
    connectedComponentsCount,
};

