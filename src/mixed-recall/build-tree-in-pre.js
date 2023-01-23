const { Node } = require("../binary-trees/utils");

/**
 * Write a function, buildTreeInPre, that takes in an array of in-ordered values and an array of pre-ordered values for a binary tree. The function should build a binary tree that has the given in-order and pre-order traversal structure. The function should return the root of this tree.

You can assume that the values of inorder and preorder are unique.
 * @param {*[]} inOrder 
 * @param {*[]} preOrder 
 * @returns {BinaryNode}
 */
const buildTreeInPre = (inOrder, preOrder) => {
    if(inOrder.length !== preOrder.length) throw new Error('Illegal state')
    if(inOrder.length <= 0) return null;

    const root = new Node(preOrder[0])
    const inOrderLeft = inOrder.slice(0, inOrder.indexOf(root.val))
    const inOrderRight = inOrder.slice(inOrder.indexOf(root.val) + 1)
    const preOrderLeft = preOrder.slice(1, inOrderLeft.length + 1)
    const preOrderRight = preOrder.slice(inOrderLeft.length + 1)
    root.left = buildTreeInPre(inOrderLeft, preOrderLeft)
    root.right = buildTreeInPre(inOrderRight, preOrderRight)
    return root;
};

module.exports = {
    buildTreeInPre,
};