const { Node } = require("../binary-trees/utils");

/**
 * Write a function, buildTreeInPost, that takes in an array of in-ordered values and an array of post-ordered values for a binary tree. The function should build a binary tree that has the given in-order and post-order traversal structure. The function should return the root of this tree.

 You can assume that the values of inorder and postorder are unique.
 * @param {*[]} inOrder 
 * @param {*[]} postOrder 
 * @returns {BinaryNode}
 */
 const buildTreeInPost = (inOrder, postOrder) => {
    if(inOrder.length !== postOrder.length) throw Error('Illegal state');
    if(postOrder.length <= 0) return null;
    const root = new Node(postOrder[postOrder.length - 1]);
    const inOrderLeft = inOrder.slice(0, inOrder.indexOf(root.val))
    const inOrderRight = inOrder.slice(inOrder.indexOf(root.val) + 1)
    const postOrderLeft = postOrder.filter(itm => inOrderLeft.includes(itm))
    const postOrderRight = postOrder.filter(itm => inOrderRight.includes(itm))
    root.left = buildTreeInPost(inOrderLeft, postOrderLeft)
    root.right = buildTreeInPost(inOrderRight, postOrderRight)
    return root;
    // what a beautiful algorithm!
 }

/**
 * Write a function, buildTreeInPost, that takes in an array of in-ordered values and an array of post-ordered values for a binary tree. The function should build a binary tree that has the given in-order and post-order traversal structure. The function should return the root of this tree.

 You can assume that the values of inorder and postorder are unique.
 * @param {*[]} inOrder 
 * @param {*[]} postOrder 
 * @returns {BinaryNode}
 */
const buildTreeInPost_firstImple = (inOrder, postOrder, root = new Node(postOrder[postOrder.length - 1])) => {
    if (inOrder.length === 0 || postOrder.length === 0) return null;
    if (root === null) return null;
    root.left = leftNode(inOrder, postOrder, root);
    root.right = rightNode(inOrder, postOrder, root);
    buildTreeInPost_firstImple(inOrder, postOrder, root.left);
    buildTreeInPost_firstImple(inOrder, postOrder, root.right);
    return root;
};

/**
 * Left node of root
 * @param {*[]} inOrder 
 * @param {*[]} postOrder 
 * @param {BinaryNode} root 
 * @returns {BinaryNode}
 */
function leftNode(inOrder, postOrder, root) {
    if(!hasLeftNodes(inOrder, postOrder, root)) return null;
    if(!hasRightNodes(inOrder, postOrder, root)) {
        // no rigt node to base on in next algorithm
        // we use the previous postOrder item 
        return new Node(postOrder[postOrder.indexOf(root.val) - 1])
    }
    let rootInOrderIdx = inOrder.indexOf(root.val);
    const inOrderLeftArr = inOrder.slice(0, rootInOrderIdx)
    const inOrderRightArr = inOrder.slice(rootInOrderIdx+1)
    for(let i = 0; i < inOrderRightArr.length; i++) {
        const item = inOrderRightArr[i];
        const postOrderIdx = postOrder.indexOf(item)
        const postOrderBefore = postOrder[postOrderIdx - 1];
        if(inOrderLeftArr.includes(postOrderBefore)) {
            // the item also has to be in the children of root
            // but this is hard to check for now
            return new Node(postOrderBefore);
        }
    }
    return null;    
}

/**
 * Right node of root
 * @param {*[]} inOrder 
 * @param {*[]} postOrder 
 * @param {BinaryNode} root 
 * @returns {BinaryNode}
 */
function rightNode(inOrder, postOrder, root) {
    if (isLeaf(inOrder, postOrder, root)) return null;
    if (hasRightNodes(inOrder, postOrder, root)) {
        const rightNodePostOrderIdx = postOrder.indexOf(root.val) - 1;
        return new Node(postOrder[rightNodePostOrderIdx]);
    }
    // no right nodes
    return null;

}

/**
 * Has right nodes
 * @param {*[]} inOrder 
 * @param {*[]} postOrder 
 * @param {BinaryNode} root 
 * @returns {boolean}
 */
function hasRightNodes(inOrder, postOrder, root) {
    const inOrderIdx = inOrder.indexOf(root.val);
    if (inOrderIdx === inOrder.length - 1) {
        // no right nodes at all in entire tree.
        return false;
    }
    if (inOrderIdx === -1) return false;
    const rightInOrderIdx = inOrderIdx + 1;
    const rightInOrder = inOrder[rightInOrderIdx];
    // in post order, we visit the children first
    const isChildOfRoot = postOrder.indexOf(rightInOrder) < postOrder.indexOf(root.val)
    return isChildOfRoot;
}

/**
 * Has left nodes
 * @param {*[]} inOrder 
 * @param {*[]} postOrder 
 * @param {BinaryNode} root 
 * @returns {boolean}
 */
function hasLeftNodes(inOrder, postOrder, root) {
    const inOrderIdx = inOrder.indexOf(root.val);
    if (inOrderIdx === -1) return false;
    if (inOrderIdx === 0) return false; // leftmost el in entire tree
    const leftInOrderIdx = inOrderIdx - 1;
    const leftInOrder = inOrder[leftInOrderIdx];
    // lets find out if leftInOrder comes from a subtree of root.left
    // or if it comes from a parent of root where root is on the parent's left subtree
    // In post order, children are visited before the parent 
    const isChildOrRoot = postOrder.indexOf(leftInOrder) < postOrder.indexOf(root.val)
    return isChildOrRoot;
}



/**
 * True if node is a leaf
 * @param {*[]} inOrder 
 * @param {*[]} postOrder 
 * @param {BinaryNode} root 
 * @returns {boolean}
 */
function isLeaf(inOrder, postOrder, root) {
    return !hasLeftNodes(inOrder, postOrder, root) && !hasRightNodes(inOrder, postOrder, root)
}

module.exports = {
    buildTreeInPost,
};
