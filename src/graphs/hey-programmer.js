const { Stack, Queue} = require('./utils.js')

/** @type {Graph<string>} */
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

/**
 * use stack to implement depth first
 * @param {Graph<*>} graph 
 * @param {*} source 
 */
const depthFirstPrint = (graph, source) => {
    const stack = new Stack()
    stack.push(source)

    while(!stack.isEmpty()) {
        const current = stack.pop()
        // process element after it leaves the stack
        console.log(current)
        for(let neighor of graph[current]) {
            stack.push(neighor)
        }
    }
}


/**
 * Use recursion to implement depth first
 * @param {Graph<*>} graph 
 * @param {*} source 
 */
const depthFirstPrintRecur = (graph, source)=> {
    console.log(source)
    for(let neighbor of graph[source]) {
        depthFirstPrintRecur(graph, neighbor)
    }
}

// depthFirstPrint(graph, 'a') // a,c,e,b,d,f  OR  a,b,d,f,c,e

// depthFirstPrintRecur(graph, 'a')

/**
 * use queue to implement breadth first
 * @param {Graph<*>} graph 
 * @param {*} source 
 */
const breadthFirstPrintRecur = (graph, source) => {
    const queue = new Queue()
    queue.enqueue(source)
    while(!queue.isEmpty()) {
        const current = queue.dequeue()
        console.log(current)
        for(let neighbor of graph[current]) {
            queue.enqueue(neighbor)
        }
    }
}

breadthFirstPrintRecur(graph, 'a') // a,b,c,d,e,f