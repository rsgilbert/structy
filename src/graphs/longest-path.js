const longestPath = (graph) => {
    let lengths = {}
    for (const node in graph) {
        lengthFor(node, graph, lengths)
    }
    return Math.max(...Object.values(lengths))
};

module.exports = {
    longestPath,
};

/**
 * Find length for a given node
 * @param {string} node 
 * @param {Graph} graph 
 * @param {Record<string, any>} lengths 
 * @returns { number }
 */
const lengthFor = (node, graph, lengths) => {
    if (node in lengths) {
        return lengths[node];
    }
    let result = 0
    for (let neighbor of graph[node]) {
        result = Math.max(result, 1 + lengthFor(neighbor, graph, lengths))
    }
    lengths[node] = result
    return lengths[node]
}