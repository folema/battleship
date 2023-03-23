import { aiFire } from "../functions/aiFire"
import { displayWinner } from "./displayWinner"
import { checkWinner} from "../functions/checkWinner"
const game = (objOne, objTwo)=>{
    const gameControlsContainer = document.getElementById("game-controls-container")
    const display = document.getElementById("display")
    display.textContent = `Admiral ${objOne.name}, fire at will!`
    const enemyWaters = document.createElement("div")
    enemyWaters.className = "enemy-waters"
    let oppositionBoardKeys = Object.keys(objOne.oppositionBoard)
    const shotMissed = (e)=>{
        e.target.style.backgroundColor = "white"
    }
    const shotHit = (e)=>{
        e.target.style.backgroundColor = "red"
    }
    const fire = (e)=>{
        let fireAt = e.target.dataset.indexNumber
        let coordinates = {[fireAt.charAt(0)]: [+fireAt.charAt([1])]}
        switch (objOne.fire(coordinates, objTwo)){
            case -1:
                break;
            case 0:
                shotMissed(e)                
                aiFire(objOne, objTwo)
                break;
            case 1:
                shotHit(e) 
                if (checkWinner(objTwo) === 5){ 
                    displayWinner(objOne) 
                    break;
                } 
                
                else if (checkWinner(objTwo) < 5){ 
                        aiFire(objOne, objTwo)
                        break;
                    }
        }
        return 
        
    }
    oppositionBoardKeys.forEach((key)=>{
        for (let i = 0; i < 10; i++){
            let tile = document.createElement("div")
            tile.className = "enemy-tile"
            tile.dataset.indexNumber= `${key}${i}`
            tile.addEventListener("click", fire)
            enemyWaters.appendChild(tile)
        }
    })
    gameControlsContainer.appendChild(enemyWaters)
    
    
}

export {game}