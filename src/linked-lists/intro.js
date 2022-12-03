const {Node} = require('./utils')

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d

/**
 * 
 * @param {Node} head 
 */
const printLinkedList = (head) => {
    let current = head
    while (true) {
        console.log(current.val)
        // in this way `current` is always in a consistent state, never null 
        if (current.next === null) {
            break;
        }
        else {
            current = current.next
        }
    }
}


/**
 * 
 * @param {Node} current 
 */
 const printLinkedListRecur = (current) => {
    if(current.next == null) {
        console.log(current.val)
        return
    }
    console.log(current.val)
    printLinkedListRecur(current.next)
}


// printLinkedList(a)
printLinkedListRecur(b)