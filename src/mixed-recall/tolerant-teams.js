const { adjacencyListFor, Queue } = require("../graphs/utils");
const { canColor } = require("./can-color");

// tolerantTeams is a coloring problem 
const tolerantTeams = rivalries => canColor(adjacencyListFor(rivalries));
/**
 * Write a function, tolerantTeams, that takes in an array of rivalries as an argument. A rivalry is a pair of people who should not be placed on the same team. The function should return a boolean indicating whether or not it is possible to separate people into two teams, without rivals being on the same team. The two teams formed do not have to be the same size.
 * @param {string[][]} rivalries 
 * @returns {boolean}
 */
const tolerantTeams2 = (rivalries) => {
    const graph = adjacencyListFor(rivalries)
    for (const node in graph) {
        const queue = new Queue()
        queue.enqueue({ node: node, path: [node] })
        while (queue.isNotEmpty()) {
            const { node, path } = queue.dequeue()
            const greatGrandParent = path[path.length - 4];
            if (greatGrandParent === node) {
                // triangular cycle detected 
                // we cant have 3 joint rivalries since that will require atleast 3 teams 
                return false;
            }

            const subPath = path.slice(0, path.length - 1);
            if (subPath.includes(node)) {
                // this node exists earlier in the path 
                // which means we already visited it along this path
                continue;
            }
            for (const neighbor of graph[node]) {
                queue.enqueue({ node: neighbor, path: [...path, neighbor] })
            }
        }
    }

    return true;
};

module.exports = {
    tolerantTeams,
};
