const { Stack } = require("./utils");

const largestComponent = (graph) => {
    const visited = new Set()
    let result = 0
    for(const node of Object.keys(graph)) {
        if(!visited.has(node.toString())) {
            let size  = 0
            const stack = new Stack()
            stack.push(node)
            while(!stack.isEmpty()) {
                const current = stack.pop()
                if(!visited.has(current.toString())) {
                    size++
                    visited.add(current.toString())
                    for(const neighbor of graph[current]) {
                        stack.push(neighbor)
                    }
                }
            }
            result = Math.max(result, size)
        }
    }
    return result
  };
  
  module.exports = {
    largestComponent,
  };
  