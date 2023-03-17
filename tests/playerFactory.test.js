import { playerFactory } from "../src/factories/playerFactory";

const mike = playerFactory("Mike", false)
const john =playerFactory("John", false)
mike.gameBoard.placeShip({ship: mike.navy[0], cord: {a: [0], b: [0], c: [0], d: [0], e: [0]}, horizontal : false})
john.gameBoard.placeShip({ship: john.navy[0], cord: {a: [0], b: [0], c: [0], d: [0], e: [0]}, horizontal : false})
mike.gameBoard.placeShip({ship: mike.navy[1], cord: {a: [1,2,3,4]}, horizontal: true})
john.gameBoard.placeShip({ship: john.navy[1], cord: {a: [1], b: [2], c: [3], d: [4]}, horizontal: false})
test("Player fires and misses", ()=>{
    expect(mike.fire({j: 0}, john)).toEqual({a: [0,1,2,3,4,5,6,7,8,9],
        b: [0,1,2,3,4,5,6,7,8,9],
        c: [0,1,2,3,4,5,6,7,8,9],
        d: [0,1,2,3,4,5,6,7,8,9],
        e: [0,1,2,3,4,5,6,7,8,9],
        f: [0,1,2,3,4,5,6,7,8,9],
        h: [0,1,2,3,4,5,6,7,8,9],
        i: [0,1,2,3,4,5,6,7,8,9],
        j: ["Miss",1,2,3,4,5,6,7,8,9]})
})

test("player hits ship, ship takes damage", ()=>{
    mike.fire({d: 4}, john)
    expect(john.navy[1].sinks()).toEqual(false)
})

test("Player Hits ship", ()=>{
    
    expect(mike.fire({b: 0}, john)).toEqual({"a": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
                                            "b": ["Hit", 1, 2, 3, 4, 5, 6, 7, 8, 9], 
                                            "c": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
                                            "d": [0, 1, 2, 3, "Hit", 5, 6, 7, 8, 9], 
                                            "e": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
                                            "f": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
                                            "h": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
                                            "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
                                            "j": ["Miss", 1, 2, 3, 4, 5, 6, 7, 8, 9]})
})
test("Player Hits ship, and ship sinks", ()=>{
    john.fire({a: 0}, mike)
    john.fire({b: 0}, mike)
    john.fire({c: 0}, mike)
    john.fire({d: 0}, mike)
    john.fire({e: 0}, mike)
    expect(mike.navy[0].sinks()).toEqual(true)
    
})
test("fires on horizontal ship",()=>{
    expect(john.fire({a: 3}, mike)).toEqual(
    {"a": ["Hit", 1, 2, "Hit", 4, 5, 6, 7, 8, 9], 
     "b": ["Hit", 1, 2, 3, 4, 5, 6, 7, 8, 9], 
     "c": ["Hit", 1, 2, 3, 4, 5, 6, 7, 8, 9], 
     "d": ["Hit", 1, 2, 3, 4, 5, 6, 7, 8, 9], 
     "e": ["Hit", 1, 2, 3, 4, 5, 6, 7, 8, 9], 
     "f": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
     "h": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
     "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
     "j": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]})
    
})