'use strict'
/**
 * Write a function, isBinarySearchTree, that takes in the root of a binary tree. The function should return a boolean indicating whether or not the tree satisfies the binary search tree property.

A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value.
 * @param {BinaryNode} root 
 * @returns {boolean}
 */
const isBinarySearchTree = (root) => {
    return isSorted(inOrderArr(root))
};

/**
 * 
 * @param {BinaryNode} root 
 */
function inOrderArr(root) {
    if (root === null) return []
    return [
        ...inOrderArr(root.left), root.val, ...inOrderArr(root.right)
    ]
}

/**
 * @param {*[]} arr 
 * @returns {boolean}
 */
function isSorted(arr) {
    for (let i = 0, j = 1; j < arr.length; i++, j++) {
        if (arr[j] < arr[i]) return false;
    }
    return true;
}
module.exports = {
    isBinarySearchTree,
};
