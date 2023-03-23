import { checkWinner } from "./checkWinner"
import { displayWinner } from "../domEvents/displayWinner"

const aiFire = (playerOne, playerTwo)=>{
    const display = document.getElementById("display")
    display.textContent = `Admiral ${playerTwo.name}, fire at will!`
    const keys = Object.keys(playerTwo.oppositionBoard)
    const keySelection = ()=>{
       let keyNumber = Math.floor(Math.random()*keys.length)
       return keys[keyNumber]
    }
    const indexSelection = ()=>Math.floor(Math.random()*9)
    let xCord = keySelection()
    let yCord = indexSelection()
    let coordinates = {[xCord]:[yCord]}
        
    setTimeout(()=>{
        if (playerTwo.fire(coordinates, playerOne) === -1){
             aiFire(playerOne, playerTwo)
            return
            }
        else {
            let tile = document.getElementById(`${xCord}${yCord}`)
            tile.textContent = "X"
            display.textContent = `Admiral ${playerOne.name}, fire at will!`
            if(checkWinner(playerOne) === 5) return displayWinner(playerTwo)
            else return 
        }
    },500)
    return
}
export {aiFire}