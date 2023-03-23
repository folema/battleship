import { playerFactory } from "../src/factories/playerFactory";
import { checkWinner } from "../src/functions/checkWinner";

const john = playerFactory("John", false)
const bob = playerFactory("bob", false)
john.gameBoard.placeShip({ship: john.navy[0], cord: {a: [0], b: [0], c: [0], d: [0], e: [0]}, horizontal : false})
john.gameBoard.placeShip({ship: john.navy[1], cord: {a: [1], b: [1], c: [1], d: [1]}, horizontal : false})
john.gameBoard.placeShip({ship: john.navy[2], cord: {a: [2], b: [2], c: [2]}, horizontal : false})
john.gameBoard.placeShip({ship: john.navy[3], cord: {a: [3], b: [3], c: [3]}, horizontal : false})
john.gameBoard.placeShip({ship: john.navy[4], cord: {a: [4], b: [4]}, horizontal : false})

test("player fires at ship once, checkwinner returns 0", ()=>{
    bob.fire({a:[0]}, john)
    expect(checkWinner(john)).toEqual(0)
})
test("player fires at ship twice, checkwinner returns 0", ()=>{
    bob.fire({b: [0]}, john)
    expect(checkWinner(john)).toEqual(0)
})
test("player sinks ship, checkwinner returns 1", ()=>{
    bob.fire({c:[0]},john)
    bob.fire({d:[0]},john)
    bob.fire({e:[0]},john)
    expect(checkWinner(john)).toEqual(1)

})
test("player sinks all ships, checkwinner returns 5", ()=>{
    bob.fire({a:[1]}, john)
    bob.fire({a:[2]}, john)
    bob.fire({a:[3]}, john)
    bob.fire({a:[4]}, john)
    bob.fire({b:[1]}, john)
    bob.fire({b:[2]}, john)
    bob.fire({b:[3]}, john)
    bob.fire({b:[4]}, john)
    bob.fire({c:[1]},john)
    bob.fire({c:[2]},john)
    bob.fire({c:[3]},john)
    bob.fire({d:[1]},john)
    expect(checkWinner(john)).toEqual(5)
    
})