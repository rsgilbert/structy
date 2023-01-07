const { longestPath } = require("./longest-path");

/**
 * Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments. Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B. Return the minimum number of semesters required to complete all n courses. There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.
 * Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B.
 * @param {number} numCourses 
 * @param {number[][]} prereqs 
 */
const semestersRequired = (numCourses, prereqs) => {
    const graph = prerequisiteGraphFor(prereqs);
    return longestPath(graph) + 1;
};

/**
* Convert a list edges representing prerequisites into an adjacency list representing a DAG for prerequisites
* In the edges, [1,2] means that course 1 is a prerequisite for course 2
* @param {any[][]} edges 
* @return {Graph}
*/
function prerequisiteGraphFor(edges) {
   /** @type {Graph} */
   let result = {}
   for (let edge of edges) {
       let node1 = edge[0].toString()
       let node2 = edge[1].toString()
       if(!(node1 in result)) {
           result[node1] = []
       }
       if(!(node2 in result)) {
           result[node2] = []
       }
       result[node1].push(node2);
   }
   return result
}
















module.exports = {
    semestersRequired,
    prerequisiteGraphFor
};
