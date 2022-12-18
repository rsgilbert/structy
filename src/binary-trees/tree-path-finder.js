/**
 * Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.
 * @param {BinaryNode} root 
 * @param {any} target 
 * @returns {any[] | null}
 */
const pathFinder = (root, target) => {
    let result = []
    let isFound = pathFinderRecur(root, target, result)
    result.reverse()
    return isFound ? result : null
}
/**
 *  
* @param {BinaryNode} node 
* @param {any} target 
* @param {any[]} result - this is the result array with nodes. It'll have to be reversed by calling fn
* @returns {boolean} true if a value was found in the path
*/
const pathFinderRecur = (node, target, result) => {
    if (node === null) return false
    if (node.val === target) {
        result.push(node.val)
        return true
    }
    let isFound = pathFinderRecur(node.left, target, result)
    if (isFound) {
        result.push(node.val)
        return true
    }
    isFound = pathFinderRecur(node.right, target, result)
    if (isFound) {
        result.push(node.val)
        return true
    }
    return false
}

/**
 * Write a function, pathFinder, that takes in the root of a binary tree and a target value. The function should return an array representing a path to the target value. If the target value is not found in the tree, then return null.
 * @param {BinaryNode} root 
 * @param {any} target 
 * @returns {any[] | null}
 */
 const pathFinder2 = (root, target) => {
    const stack = [{ node: root, pathAbove: []}]
    while(stack.length > 0) {
        const { node, pathAbove } = stack.pop()
        if(node !== null) {
            if(node.val === target) {
                return [...pathAbove, node.val]
            }
            stack.push({node: node.left, pathAbove:[...pathAbove, node.val]})
            stack.push({node: node.right, pathAbove:[...pathAbove, node.val]})
        } 
    }
    return null 
}
module.exports = {
    pathFinder: pathFinder2

}