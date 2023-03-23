import { clearChildContainer } from "./clearChildContainer"
const displayWinner = (player)=>{
    clearChildContainer()
    const childContainer = document.getElementById("child-container")
    const winDiv = document.createElement("div")
    const winMessage= document.createElement("h3")
    winMessage.textContent = `Game over. The Winner is Admiral ${player.name}`
    winDiv.appendChild(winMessage)
    childContainer.appendChild(winDiv)
}

export {displayWinner}