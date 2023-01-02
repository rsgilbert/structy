class Stack {
    values = []
    push(v) {
        this.values.push(v)
    }
    get length() {
        return this.values.length;
    }
    pop(){
        return this.values.pop()
    }
    peek() {
        return this.values[this.values.length-1]
    }
    isEmpty() {
        return this.values.length === 0
    }
}

class Queue {
    values = []
    enqueue(v) {
        this.values.unshift(v)
    }
    dequeue() {
        return this.values.pop()
    }
    get length() {
        return this.values.length;
    }
    peek() {
        return this.values[this.values.length-1]
    }
    isEmpty() {
        return this.values.length === 0
    }
}

/**
 * Convert a list edges into an adjacency list
 * @param {any[][]} edges 
 * @return {Graph}
 */
 function adjacencyListFor(edges) {
    /** @type {Graph} */
    let result = {}
    for (let edge of edges) {
        let node1 = edge[0].toString()
        let node2 = edge[1].toString()
        if(!(node1 in result)) {
            result[node1] = []
        }
        if(!(node2 in result)) {
            result[node2] = []
        }
        result[node1].push(node2);
        result[node2].push(node1);
    }
    return result
}

module.exports = {
    Stack, Queue, adjacencyListFor
}