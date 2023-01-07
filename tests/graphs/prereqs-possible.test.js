const { expect, describe, test } = require('@jest/globals');
const { minimumIsland } = require('../../src/graphs/minimum-island.js');
const { prereqsPossible } = require('../../src/graphs/prereqs-possible.js');

describe('prereqsPossible', () => {
    test('test_00', () => {
        const numCourses = 6;
        const prereqs = [
            [0, 1],
            [2, 3],
            [0, 2],
            [1, 3],
            [4, 5],
        ];
        expect(prereqsPossible(numCourses, prereqs)).toBe(true); // -> true
    })

    test('test_01', () => {
        const numCourses = 6;
        const prereqs = [
            [0, 1],
            [2, 3],
            [0, 2],
            [1, 3],
            [4, 5],
            [3, 0],
        ];
        expect(prereqsPossible(numCourses, prereqs)).toBe(false); // -> false
    });

    test('test_02', () => {
        const numCourses = 5;
        const prereqs = [
            [2, 4],
            [1, 0],
            [0, 2],
            [0, 4],
        ];
        expect(prereqsPossible(numCourses, prereqs)).toBe(true); // -> true
    })

    test('test_03', () => {
        const numCourses = 6;
        const prereqs = [
            [2, 4],
            [1, 0],
            [0, 2],
            [0, 4],
            [5, 3],
            [3, 5],
        ];
        expect(prereqsPossible(numCourses, prereqs)).toBe(false); // -> false
    });

    test('test_04', () => {
        const numCourses = 8;
        const prereqs = [
            [1, 0],
            [0, 6],
            [2, 0],
            [0, 5],
            [3, 7],
            [4, 3],
        ];
        expect(prereqsPossible(numCourses, prereqs)).toBe(true); // -> true
    });

    test('test_05', () => {
        const numCourses = 8;
        const prereqs = [
            [1, 0],
            [0, 6],
            [2, 0],
            [0, 5],
            [3, 7],
            [7, 4],
            [4, 3],
        ];
        expect(prereqsPossible(numCourses, prereqs)).toBe(false); // -> false
    });

    test('test_06', () => {
        const numCourses = 42;
        const prereqs = [[6, 36]];
        expect(prereqsPossible(numCourses, prereqs)).toBe(true); // -> true
    })

})