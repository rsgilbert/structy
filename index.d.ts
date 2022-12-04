interface BinaryNode {
    val: any;
    left: BinaryNode
    right: BinaryNode
}

interface LinkedListNode {
    next: LinkedListNode | null
    val: any
}


// see: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html
declare global {
    export interface Matchers<R extends void | Promise<void>> {
        tikTak: number;
    }
}

// export {}