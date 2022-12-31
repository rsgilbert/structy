interface BinaryNode {
    val: any;
    left: BinaryNode
    right: BinaryNode
}

interface LinkedListNode {
    next: LinkedListNode | null
    val: any
}


type Graph<T> = Record<string, T[]> 

