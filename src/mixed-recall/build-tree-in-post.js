class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
/**
 * Write a function, buildTreeInPost, that takes in an array of in-ordered values and an array of post-ordered values for a binary tree. The function should build a binary tree that has the given in-order and post-order traversal structure. The function should return the root of this tree.

 You can assume that the values of inorder and postorder are unique.
 * @param {*[]} inOrder 
 * @param {*[]} postOrder 
 */
const buildTreeInPost = (inOrder, postOrder) => {
    // todo
};

module.exports = {
    buildTreeInPost,
};
