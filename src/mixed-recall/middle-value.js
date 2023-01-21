/**
 * @param {LinkedListNode} node 
 * @returns {any}
 */
const middleValue = (node) => {
    let elements = []
    while(node !== null) {
        elements.push(node.val)
        node = node.next;
    }
    if(elements.length % 2 === 0) {
        // even count
        return elements[elements.length / 2];
    }
    else {
        // odd count
        return elements[Math.floor(elements.length / 2)];
    }
  };
  
  module.exports = {
    middleValue,
  };
  