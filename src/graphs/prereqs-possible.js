const { hasCycle } = require("./has-cycle");
const { prerequisiteGraphFor } = require("./semesters-required");

/**
 * 
 * @param {number} numCourses 
 * @param {number[][]} prereqs 
 */
const prereqsPossible = (numCourses, prereqs) => {
    const graph = prerequisiteGraphFor(prereqs)
    return !hasCycle(graph)
};

module.exports = {
    prereqsPossible,
};



