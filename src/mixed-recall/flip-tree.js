const { Stack } = require("../graphs/utils");

/**
 * Write a function, flipTree, that takes in the root of a binary tree. The function should flip the binary tree, turning left subtrees into right subtrees and vice-versa. This flipping should occur in-place by modifying the original tree. The function should return the root of the tree.
 * @param {BinaryNode} root 
 * @returns {BinaryNode} root of the flipped tree
 */
const flipTree = (root) => {
    const stack = new Stack()
    stack.push(root)
    while(!stack.isEmpty()) {
        const node = stack.pop();
        if(node === null) continue;
        [node.left, node.right] = [node.right, node.left];
        stack.push(node.left);
        stack.push(node.right)
    }

    return root;
};

module.exports = {
    flipTree,
};
