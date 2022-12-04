const { Node} = require('./utils')

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')


a.left = b 
a.right = c 
b.left = d 
b.right = e 
c.right = f 

