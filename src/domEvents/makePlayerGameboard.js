const childContainer = document.getElementById("child-container")
const makePlayerGameBoard = (obj)=>{
    const gameControlsContainer = document.createElement("div")
    gameControlsContainer.id = "game-controls-container"
    gameControlsContainer.className = "game-controls-container"
    const displayDiv = document.createElement("div")
    displayDiv.className = "display-div"
    displayDiv.id = "display-div"
    const display = document.createElement("h3")
    display.className = "display"
    display.id = "display"
    displayDiv.appendChild(display)
    gameControlsContainer.appendChild(displayDiv)
    let boardPlaces = obj.gameBoard.board
    let keys = Object.keys(boardPlaces)
    const friendlyWaters = document.createElement("div")
    friendlyWaters.className = "friendly-waters"
    friendlyWaters.id = "friendly-waters"
    keys.forEach((key)=>{
        for(let i = 0; i < boardPlaces[key].length; i++){
            let tile = document.createElement("div")
            tile.className = "tile"
            tile.id =`${key}${boardPlaces[key][i]}`
            friendlyWaters.appendChild(tile)

        }
    })
    gameControlsContainer.appendChild(friendlyWaters)
    childContainer.appendChild(gameControlsContainer)

}

export {makePlayerGameBoard}