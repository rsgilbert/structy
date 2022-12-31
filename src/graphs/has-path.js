const { Stack } = require("./utils")

/**
 * 
 * @param {Graph<*>} graph 
 * @param {*} src 
 * @param {*} dst 
 */
const hasPath = (graph, src, dst) => {
    const stack = new Stack()
    stack.push(src)
    while(!stack.isEmpty()) {
        const current = stack.pop()
        if(current === dst) {
            return true 
        }
        for(let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
    //  destination not found, doesnt have path
    return false 
}

module.exports = {
    hasPath
}