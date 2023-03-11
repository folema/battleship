import { gameboard } from "./gameBoard"
import { shipFactory } from "./shipFactory"

const playerFactory = (playerName, isAi)=>{
    let name = playerName
    let ai = isAi
    const navy = [shipFactory("Carrier"), shipFactory("Battleship"), shipFactory("Destroyer"), shipFactory("Submarine"), shipFactory("Patrol boat")]
    let gameBoard = gameboard()
    let oppositionBoard = {a: [0,1,2,3,4,5,6,7,8,9],
                          b: [0,1,2,3,4,5,6,7,8,9],
                          c: [0,1,2,3,4,5,6,7,8,9],
                          d: [0,1,2,3,4,5,6,7,8,9],
                          e: [0,1,2,3,4,5,6,7,8,9],
                          f: [0,1,2,3,4,5,6,7,8,9],
                          h: [0,1,2,3,4,5,6,7,8,9],
                          i: [0,1,2,3,4,5,6,7,8,9],
                          j: [0,1,2,3,4,5,6,7,8,9]}
    const fire = (coord, obj)=>{
        let coordOne = Object.keys(coord)
        let coordTwo = Object.values(coord)
        if (isNaN(oppositionBoard[coordOne][coordTwo])){
            return "Can not fire twice at same coordinate"
        }
        else {
            let shipImpact = obj.gameBoard.board[coordOne][coordTwo]
            if (isNaN(shipImpact)){
                oppositionBoard[coordOne][coordTwo] = "Hit"
                for (let i = 0; i < obj.navy.length; i++){
                    if (obj.navy[i].ship=== shipImpact){
                        obj.navy[i].impact()
                    return oppositionBoard
                }
                }
                    
                return oppositionBoard
                
            }
            else {
                oppositionBoard[coordOne][coordTwo] = "Miss"
                return oppositionBoard
            }
        }   
    }
    return {name, navy, gameBoard, ai, oppositionBoard, fire}
}

export {playerFactory}