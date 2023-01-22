const { adjacencyListFor, Stack } = require("../graphs/utils");

/**
 * Write a function, rareRouting, that takes in a number of cities (n) and a two dimensional array where each subarray represents a direct road that connects a pair of cities. The function should return a boolean indicating whether or not there exists a unique route for every pair of cities. A route is a sequence of roads that does not visit a city more than once.

Cities will be numbered 0 to n - 1.

You can assume that all roads are two-way roads. This means if there is a road between A and B, then you can use that road to go from A to B or go from B to A.

For example, given these roads:

0 --- 1
| \
|  \
|   \
2    3

There is a unique route for between every pair of cities.
So the answer is true.


For example, given these roads:

0 --- 1
| \
|  \
|   \
2 -- 3

There are two routes that can be used to travel from city 1 to city 2:
- first route:  1, 0, 2
- second route: 1, 0, 3, 2 
The answer is false, because routes should be unique.

 * @param {number} n - number of cities
 * @param {number[][]} roads 
 * @returns {boolean} - true if there is only one route between each pair of cities
 */
const rareRouting = (n, roads) => {
    const graph = adjacencyListFor(roads)
    const cities = Object.keys(graph)
    for(let startIdx = 0; startIdx < cities.length - 1; startIdx++) {
        for(let endIdx = startIdx + 1; endIdx < cities.length; endIdx++) {
            const startCity = cities[startIdx];
            const endCity = cities[endIdx];
            let routeCount = 0;
            const stack = new Stack()
            stack.push({ city: startCity, visited: new Set() })
            while(stack.isNotEmpty()) {
                const { city, visited } = stack.pop()
                if(visited.has(city)) continue;
                const newVisited = new Set(visited)
                newVisited.add(city);
                if(city === endCity) {
                    routeCount++;
                    if(routeCount > 1) return false;
                }
                for(const neighbor of graph[city]) {
                    stack.push({ city: neighbor, visited: newVisited })
                }
            }
            // route count has to be strictly 1. Zero count is not accepted either.
            if(routeCount !== 1) return false;
        }
    }
    // we didnt find any multiple routes between cities
    return true;

};

module.exports = {
    rareRouting,
};
