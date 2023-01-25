const { dagAdjacencyListFor, Stack } = require("../graphs/utils");

/**
 * Oh-no! You forgot the number combination that unlocks your safe. Luckily, you knew that you'd be forgetful so you previously wrote down a bunch of hints that can be used to determine the correct combination. Each hint is a pair of numbers 'x, y' that indicates you must enter digit 'x' before 'y' (but not necessarily immediately before y).

The keypad on the safe has digits 0-9. You can assume that the hints will generate exactly one working combination and that a digit can occur zero or one time in the answer.

Write a function, safeCracking, that takes in an array of hints as an argument and determines the combination that will unlock the safe. The function should return a string representing the combination.
 * @param {number[][]} hints 
 * @returns {string}
 */
const safeCracking = (hints) => {
    const graph = dagAdjacencyListFor(hints)
    for (const node in graph) {
        const stack = new Stack()
        stack.push({ node, path: [node] })
        while (stack.isNotEmpty()) {
            const { node, path } = stack.pop()
            if(path.length === Object.keys(graph).length) {
                // path contains all nodes 
                return path.join("")
            }
            for(const neighbor of graph[node]) {
                stack.push({ node: neighbor, path: [...path, neighbor]})
            }
        }
    }
    return null;

};

module.exports = {
    safeCracking,
};
