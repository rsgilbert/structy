const { describe, test, expect } = require("@jest/globals");
const { tokenTransform } = require("../../src/mixed-recall/token-transform");

describe('tokenTransform', ()=>{
    test('test_00', ()=>{
        const tokens = {
            '$LOCATION$': '$ANIMAL$ park',
            '$ANIMAL$': 'dog',
          };
          expect(tokenTransform('Walk the $ANIMAL$ in the $LOCATION$!', tokens)).toEqual('Walk the dog in the dog park!');
          // -> 'Walk the dog in the dog park!'
    })
    test('test_01', ()=>{
        const tokens = {
            '$ADJECTIVE_1$': "quick",
            '$ADJECTIVE_2$': "eager",
            '$ADVERBS$': "$ADJECTIVE_1$ly and $ADJECTIVE_2$ly",
            '$VERB$': "hopped $DIRECTION$",
            '$DIRECTION$': "North",
          };
          expect(tokenTransform("the $ADJECTIVE_1$ fox $ADVERBS$ $VERB$ward", tokens)).toEqual('the quick fox quickly and eagerly hopped Northward')
          // -> 'the quick fox quickly and eagerly hopped Northward'
    })
    test('test_02', ()=>{
        const tokens = {
            '$B$': "epicly $C$",
            '$A$': "pretty $B$ problem $D$",
            '$D$': "we have",
            '$C$': "clever",
          };
          expect(tokenTransform("What a $A$ here!", tokens)).toEqual('What a pretty epicly clever problem we have here!')
          // -> 'What a pretty epicly clever problem we have here!'
    })
    test('test_03', ()=>{
        const tokens = {
            '$1$': "a$2$",
            '$2$': "b$3$",
            '$3$': "c$4$",
            '$4$': "d$5$",
            '$5$': "e$6$",
            '$6$': "f!",
          };
          expect(tokenTransform("$1$ $1$ $1$ $1$ $1$ $1$ $4$ $4$", tokens)).toEqual('abcdef! abcdef! abcdef! abcdef! abcdef! abcdef! def! def!')
          // -> 'abcdef! abcdef! abcdef! abcdef! abcdef! abcdef! def! def!'
    })
    test('test_04',()=>{
        const tokens = {
            '$0$': "$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$$1$",
            '$1$': "$2$$2$$2$$2$$2$$2$$2$$2$$2$",
            '$2$': "$3$$3$$3$$3$$3$$3$$3$",
            '$3$': "$4$$4$$4$$4$$4$$4$",
            '$4$': "$5$$5$$5$$5$$5$",
            '$5$': "$6$$6$$6$$6$",
            '$6$': "$7$$7$$7$",
            '$7$': "$8$$8$",
            '$8$': "",
          };
          expect(tokenTransform("z$0$z$0$z$0$z$0$z$0$z$0$z", tokens)).toEqual('zzzzzzz');
          // -> 'zzzzzzz'
    })
})