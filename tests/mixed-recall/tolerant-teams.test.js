const { expect, describe, test } = require('@jest/globals');
const { tolerantTeams } = require('../../src/mixed-recall/tolerant-teams');

describe('tolerantTeams', () => {
    test('test_00', () => {
        expect(tolerantTeams([
            ['philip', 'seb'],
            ['raj', 'nader']
          ])).toBe(true)
    })
    test('test_01', ()=>{
        expect(tolerantTeams([
            ['philip', 'seb'],
            ['raj', 'nader'],
            ['raj', 'philip'],
            ['seb', 'raj']
          ])).toBe(false)
    })
    test('test_02', ()=>{
        expect(tolerantTeams([
            ['cindy', 'anj'],
            ['alex', 'matt'],
            ['alex', 'cindy'],
            ['anj', 'matt'],
            ['brando', 'matt']
          ])).toBe(true)
    })
    test('test_03', ()=>{
        expect(tolerantTeams([
            ['alex', 'anj'],
            ['alex', 'matt'],
            ['alex', 'cindy'],
            ['anj', 'matt'],
            ['brando', 'matt']
          ])).toBe(false)
    })
    test('test_04', ()=>{
        expect(tolerantTeams([
            ['alan', 'jj'],
            ['betty', 'richard'],
            ['jj', 'simcha'],
            ['richard', 'christine']
          ])).toBe(true)
    })
    test('test_05', ()=>{
        expect(tolerantTeams([
            ['alan', 'jj'],
            ['betty', 'richard'],
            ['jj', 'simcha'],
            ['richard', 'christine']
          ])).toBe(true)
    })
    test('test_06', ()=>{
        expect(tolerantTeams([
            ['alan', 'jj'],
            ['jj', 'richard'],
            ['betty', 'richard'],
            ['jj', 'simcha'],
            ['richard', 'christine']
          ])).toBe(true)
    })
    test('test_07', ()=>{
        expect(tolerantTeams([
            ['alan', 'jj'],
            ['betty', 'richard'],
            ['betty', 'christine'],
            ['jj', 'simcha'],
            ['richard', 'christine']
          ])).toBe(false)
    })
})