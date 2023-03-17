import { gameboard } from "../src/factories/gameBoard"
import { shipFactory } from "../src/factories/shipFactory"
const board = gameboard()
const navyOne = [shipFactory("Carrier"), shipFactory("Battleship"), shipFactory("Destroyer"), shipFactory("Submarine"), shipFactory("Patrol boat")]

test("checks of board available", ()=>{
    expect(board.checkavailable({ship: navyOne[0], cord: {a: [0], b: [0], c: [0], d: [0], e: [0]}, horizontal: false})).toBe(true)
})

test("returns false if board is not available", ()=>{
    board.placeShip({ship: navyOne[1], cord: {a: [1], b: [1], c: [1], d: [1]}, horizontal: false})
    expect(board.checkavailable({ship: navyOne[2], cord: {a: [1], b: [1], c: [1]}, horizontal: false})).toBe(false)
})

test("checks horizontal places on board",()=>{
    expect(board.checkavailable({ship: navyOne[4], cord: {a: [3,4]}, horizontal: true})).toBe(true)
})
test("places ship on board",()=>{
    board.placeShip({ship: navyOne[0], cord: {a: [0], b: [0], c: [0], d: [0], e: [0]}, horizontal: false})
    expect(board.board).toEqual(
       {a: ["Carrier","Battleship",2,3,4,5,6,7,8,9],
        b: ["Carrier","Battleship",2,3,4,5,6,7,8,9],
        c: ["Carrier","Battleship",2,3,4,5,6,7,8,9],
        d: ["Carrier","Battleship",2,3,4,5,6,7,8,9],
        e: ["Carrier",1,2,3,4,5,6,7,8,9],
        f: [0,1,2,3,4,5,6,7,8,9],
        h: [0,1,2,3,4,5,6,7,8,9],
        i: [0,1,2,3,4,5,6,7,8,9],
        j: [0,1,2,3,4,5,6,7,8,9]})
})
test("places ship horizontal on board",()=>{
    board.placeShip({ship: navyOne[4], cord: {a: [8,9]}, horizontal: true})
    expect(board.board).toEqual(
        {a: ["Carrier","Battleship",2,3,4,5,6,7,"Patrol boat","Patrol boat"],
         b: ["Carrier","Battleship",2,3,4,5,6,7,8,9],
         c: ["Carrier","Battleship",2,3,4,5,6,7,8,9],
         d: ["Carrier","Battleship",2,3,4,5,6,7,8,9],
         e: ["Carrier",1,2,3,4,5,6,7,8,9],
         f: [0,1,2,3,4,5,6,7,8,9],
         h: [0,1,2,3,4,5,6,7,8,9],
         i: [0,1,2,3,4,5,6,7,8,9],
         j: [0,1,2,3,4,5,6,7,8,9]})
})
test("Returns true if horizontal places are available",()=>{
    expect(board.checkavailable({ship: navyOne[3], cord: {h: [0,1,2]}, horizontal: true})).toBe(true)
})
test("Returns false if horizontal places are taken", ()=>{
    expect(board.checkavailable({ship: navyOne[3], cord: {e: [0,1,2]}, horizontal: true})).toBe(false)
})