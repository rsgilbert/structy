/**
 * Write a function, topologicalOrder, that takes in an object representing the adjacency list for a directed-acyclic graph. The function should return an array containing the topological-order of the graph.

The topological ordering of a graph is a sequence where "parent nodes" appear before their "children" within the sequence.
 * @param {Graph} graph 
 */
const topologicalOrder = (graph) => {
    let remaining = Object.keys(graph)
    let result = []
    while(remaining.length > 0) {
        for(let idx = 0; idx < remaining.length; idx++) {
            const el = remaining[idx];
            if(hasNoParent(el, remaining, graph)) {
                remaining.splice(idx, 1)
                result.push(el)
            }
        }
    }

    return result;         
};



/**
 * @param {*} node
 * @param {*[]} potentialParents
 * @param {Graph} graph 
 * @returns {*}
 */
const hasNoParent = (node, potentialParents, graph) => {
    for(const parent of potentialParents) {
        if(graph[parent].includes(node)) return false;
    }
    return true;
}

module.exports = {
    topologicalOrder,
};
