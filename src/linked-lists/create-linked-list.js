const { Node } = require('./utils')

/**
 * 
 * @param {*[]} values 
 * @returns {LinkedListNode}
 */
const createLinkedList = (values) => {
    if(!values.length) return null 
    const [first, ...rest] = values 
    const result = new Node(first)
    let runningHead = result 
    for(let v of rest) {
        runningHead.next = new Node(v)
        runningHead = runningHead.next
    }
    return result 
};

module.exports = {
    createLinkedList,
};
