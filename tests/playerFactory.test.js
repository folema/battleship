import { playerFactory } from "../src/factories/playerFactory";

const mike = playerFactory("Mike", false)
const john =playerFactory("John", false)
mike.gameBoard.placeShip({ship: mike.navy[0], cord: {a: [0], b: [0], c: [0], d: [0], e: [0]}})
john.gameBoard.placeShip({ship: john.navy[0], cord: {a: [0], b: [0], c: [0], d: [0], e: [0]}})
mike.gameBoard.placeShip({ship: mike.navy[1], cord: {a: [1,2,3,4]}})
john.gameBoard.placeShip({ship: john.navy[1], cord: {a: [1], b: [2], c: [3], d: [4]}})
test("Player fires and misses", ()=>{
    expect(mike.fire({j: 0}, john.gameBoard.board)).toEqual({a: [0,1,2,3,4,5,6,7,8,9],
        b: [0,1,2,3,4,5,6,7,8,9],
        c: [0,1,2,3,4,5,6,7,8,9],
        d: [0,1,2,3,4,5,6,7,8,9],
        e: [0,1,2,3,4,5,6,7,8,9],
        f: [0,1,2,3,4,5,6,7,8,9],
        h: [0,1,2,3,4,5,6,7,8,9],
        i: [0,1,2,3,4,5,6,7,8,9],
        j: ["Miss",1,2,3,4,5,6,7,8,9]})
})

test("Player Hits ship", ()=>{
    
    expect(mike.fire({b: 0}, john.gameBoard.board)).toEqual({a: [0,1,2,3,4,5,6,7,8,9],
    b: ["Hit",1,2,3,4,5,6,7,8,9],
    c: [0,1,2,3,4,5,6,7,8,9],
    d: [0,1,2,3,4,5,6,7,8,9],
    e: [0,1,2,3,4,5,6,7,8,9],
    f: [0,1,2,3,4,5,6,7,8,9],
    h: [0,1,2,3,4,5,6,7,8,9],
    i: [0,1,2,3,4,5,6,7,8,9],
    j: ["Miss",1,2,3,4,5,6,7,8,9]})
})