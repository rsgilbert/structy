/**
 * Write a function, postOrder, that takes in the root of a binary tree. The function should return an array containing the post-ordered values of the tree.
  Post-order traversal is when nodes are recursively visited in the order: left child, right child, self.
 * @param {BinaryNode} root 
  * @returns { *[]}
 */
const postOrder = (root) => {
    if(root === null) return []
    return [...postOrder(root.left),...postOrder(root.right),  root.val]
};

module.exports = {
    postOrder,
};
