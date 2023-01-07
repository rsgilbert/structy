const { expect, describe, test } = require('@jest/globals');
const { semestersRequired } = require('../../src/graphs/semesters-required');


describe('semestersRequired', () => {
    test('test_00', () => {
        const numCourses = 6;
        const prereqs = [
            [1, 2],
            [2, 4],
            [3, 5],
            [0, 5],
        ];
        expect(semestersRequired(numCourses, prereqs)).toBe(3); // -> 3
    })

    test('test_01', () => {
        const numCourses = 7;
        const prereqs = [
            [4, 3],
            [3, 2],
            [2, 1],
            [1, 0],
            [5, 2],
            [5, 6],
        ];
        expect(semestersRequired(numCourses, prereqs)).toBe(5); // -> 5
    })

    test('test_02', () => {
        const numCourses = 5;
        const prereqs = [
            [1, 0],
            [3, 4],
            [1, 2],
            [3, 2],
        ];
        expect(semestersRequired(numCourses, prereqs)).toBe(2); // -> 2
    })
    test('test_03', () => {
        const numCourses = 12;
        const prereqs = [];
        expect(semestersRequired(numCourses, prereqs)).toBe(1); // -> 1
    })

    test('test_04', () => {
        const numCourses = 3;
        const prereqs = [
            [0, 2],
            [0, 1],
            [1, 2],
        ];
        expect(semestersRequired(numCourses, prereqs)).toBe(3); // -> 3
    })
    test('test_05', () => {
        const numCourses = 6;
        const prereqs = [
            [3, 4],
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 5],
        ];
        expect(semestersRequired(numCourses, prereqs)).toBe(2); // -> 2
    })
})