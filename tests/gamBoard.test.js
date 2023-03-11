import { gameboard } from "../src/factories/gameBoard"
import { shipFactory } from "../src/factories/shipFactory"
const board = gameboard()
const navyOne = [shipFactory("Carrier"), shipFactory("Battleship"), shipFactory("Destroyer"), shipFactory("Submarine"), shipFactory("Patrol boat")]

test.skip("Place ship on board", ()=>{
    board.placeShip({ship: navyOne[0], cord: {a: [0], b: [0], c: [0], d: [0], e: [0]}})
    expect(board.board).toEqual(
       {a: ["Carrier",1,2,3,4,5,6,7,8,9],
        b: ["Carrier",1,2,3,4,5,6,7,8,9],
        c: ["Carrier",1,2,3,4,5,6,7,8,9],
        d: ["Carrier",1,2,3,4,5,6,7,8,9],
        e: ["Carrier",1,2,3,4,5,6,7,8,9],
        f: [0,1,2,3,4,5,6,7,8,9],
        h: [0,1,2,3,4,5,6,7,8,9],
        i: [0,1,2,3,4,5,6,7,8,9],
        j: [0,1,2,3,4,5,6,7,8,9]})
})
test.skip("Places two ships on board", ()=>{
    board.placeShip({ship: navyOne[0], cord: {a: [0], b: [0], c: [0], d: [0], e: [0]}})
    board.placeShip({ship: navyOne[4], cord:{a: [9], b:[9]}})
    expect(board.board).toEqual(
        
            {a: ["Carrier",1,2,3,4,5,6,7,8,"Patrol boat"],
             b: ["Carrier",1,2,3,4,5,6,7,8,"Patrol boat"],
             c: ["Carrier",1,2,3,4,5,6,7,8,9],
             d: ["Carrier",1,2,3,4,5,6,7,8,9],
             e: ["Carrier",1,2,3,4,5,6,7,8,9],
             f: [0,1,2,3,4,5,6,7,8,9],
             h: [0,1,2,3,4,5,6,7,8,9],
             i: [0,1,2,3,4,5,6,7,8,9],
             j: [0,1,2,3,4,5,6,7,8,9]}
    )
})
test.skip("Does not allow ships to be placed on same coords", ()=>{
    board.placeShip({ship: navyOne[0], cord: {a: [0], b: [0], c: [0], d: [0], e: [0]}})
    expect(board.placeShip({ship: navyOne[4], cord:{a: [0], b:[1]}})).toBe("Not available")
    
})
