const { Queue } = require("./utils");

/**
 * 
 * @param {Graph} graph 
 */
const hasCycle = (graph) => {
    for (const node in graph) {
        const queue = new Queue()
        queue.enqueue({ node, visited: new Set() })
        while (!queue.isEmpty()) {
            const { node, visited } = queue.dequeue()
            if (visited.has(node)) return true
            visited.add(node)
            for (const neighbor of graph[node]) {
                queue.enqueue({ node: neighbor, visited: new Set(visited) })
            }
        }
    }
    return false
};

const hasCycle2 = graph => {
    for(const node in graph) {
        if(hasCycleRecur(node, graph, new Set())) return true 
    }
    return false 
}

/**
 * Recursively check for cycles
 * @param {*} node
 * @param {Graph} graph
 * @param {Set} visited
 */
function hasCycleRecur(node, graph, visited) {
    if(visited.has(node)) return true
    visited.add(node)
    for(const neighbor of graph[node]) {
        if(hasCycleRecur(neighbor, graph, new Set(visited))) return true
    }
    return false
}

/**
 * 
 * @param {Graph} graph 
 * @returns { boolean }
 */
function whiteGrayBlackCycleDetectionAlgorithm (graph) {
    for(const node in graph) {
        const visited = new Set()
        if(cycleDetected(node, graph, new Set(), visited)) return true;
    }
    return false 
}

/**
 * 
 * @param {*} node 
 * @param {Graph} graph 
 * @param {Set} visiting 
 * @param {Set} visited 
 * @returns { boolean } true if cycle exists
 */
function cycleDetected (node, graph, visiting, visited) {
    if(visited.has(node)) return false 
    if(visiting.has(node)) return true 
    visiting.add(node)
    for(const neighbor of graph[node]) {
        if(cycleDetected(neighbor, graph, visiting, visited)) return true 
    }
    visiting.delete(node)
    visited.add(node)
    return false 
}
module.exports = {
    hasCycle: whiteGrayBlackCycleDetectionAlgorithm,
};
