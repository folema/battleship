import { playerFactory } from "../factories/playerFactory"
import { clearChildContainer } from "./clearChildContainer"
import { makePlayerGameBoard } from "./makePlayerGameboard"
const inpuField = document.getElementById("name-input")
const startButton = document.getElementById("startButton")

const start = ()=>{
    if (inpuField.value <=0) alert("Enter player name")
    else{
        startButton.removeEventListener("click", start)
        const playerOne = playerFactory(inpuField.value, false)
        const playerTwo = playerFactory("Macintosh", true)
        clearChildContainer()
        makePlayerGameBoard(playerOne)
        return playerOne, playerTwo
    }
    
      
}

export {start}