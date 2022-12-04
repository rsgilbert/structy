

/**
 * Write a function, treeIncludes, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.
 * @param {BinaryNode} root 
 * @param {*} target
 * @returns {boolean}
 */
 const treeIncludes = (root, target) => {
    const stack = [root]
    while(stack.length) {
        const node = stack.pop()
        if(node) {
            if(node.val === target) return true;
            stack.push(node.left, node.right)
        }
  
    }
    return false 
};

module.exports = {
    treeIncludes,
};
