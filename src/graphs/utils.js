
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

module.exports = {
    Stack, Queue
}