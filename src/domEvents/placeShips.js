import { game } from "./game"
import { aiPlaceShip } from "../functions/aiPlaceShip"
const placeShip = (obj, playerTwo)=>{
    let horizontal = false
    const gameControlsContainer = document.getElementById("game-controls-container")
    const display = document.getElementById("display")
    const tile = document.querySelectorAll(".tile")
    const shipyard = document.createElement("div")
    const rotateButton = document.createElement("button")
    rotateButton.textContent = "Change axis"
    rotateButton.id = "rotateButton"
    gameControlsContainer.appendChild(rotateButton)
    shipyard.className = "shipyard"
    shipyard.id = "shipyard"
    gameControlsContainer.appendChild(shipyard)
    let shipNumber = 0
    const drop = (e)=>{
        let ship = document.querySelector(".ship")
        let id = e.dataTransfer.getData("Text")
        let boat = document.getElementById(id)
        let coordinates = placeShipOnGamebord(shipNumber, e.target.id) 
        if (obj.gameBoard.checkavailable(coordinates) === false){ 
            e.target.style.backgroundColor = "white"

            return 
        }
        else{
            ship.removeEventListener("dragstart", dragStart)
            ship.classList.remove("ship")
            ship.style.className = "placed-ship"
            e.target.appendChild(boat)
            e.target.removeChild(boat)
            e.target.style.backgroundColor ="white"
            setGameboard(e,shipNumber, 0)
            shipNumber++
            renderShip(shipNumber)
            obj.gameBoard.placeShip(coordinates)
            return shipNumber
        }

    }
    
    const setGameboard = (e,shipNumber, num)=>{
        let yAxis = e.target.id.charAt(0)
        let xAxis = +e.target.id.charAt(1)
        let yAxisPlaces = ["a","b","c","d","e","f","g","h","i","j"]
        if(horizontal){
                if (num >=obj.navy[shipNumber].shipLength)return
                else {
                    let tile = document.getElementById(`${yAxis}${xAxis+num}`)
                    tile.style.backgroundColor = "red"
                    tile.removeEventListener("dragover", dragEnter)
                    tile.removeEventListener("dragleave",dragLeave)
                    tile.removeEventListener("dragover", dragOver)
                    tile.removeEventListener("drop", drop)
                        
                    return setGameboard(e, shipNumber, (num+1))
                    }
        }
        if(!horizontal){
            if (num >=obj.navy[shipNumber].shipLength)return
            else{
                for( let i = 0; i < yAxisPlaces.length; i++){
                    if(yAxisPlaces[i] === yAxis){
                        let tile = document.getElementById(`${yAxisPlaces[(i+num)]}${xAxis}`)
                        tile.style.backgroundColor ="red"
                        tile.removeEventListener("dragover", dragEnter)
                        tile.removeEventListener("dragleave",dragLeave)
                        tile.removeEventListener("dragover", dragOver)
                        tile.removeEventListener("drop", drop)
                        
                    }
                    
                }
                return setGameboard(e, shipNumber, (num+1))
            }
                
        }
    }
        
    
    const dragOver = (e)=>{
        e.preventDefault()
        
    }
    const dragEnter = (e)=>{
        e.preventDefault()
          
    }

    const dragLeave = (e)=>{
        e.preventDefault()
          
    }

    const dragStart = (e)=>{
        e.dataTransfer.clearData()
        e.dataTransfer.setData("Text", e.target.id)

    }

    const renderShip = (num)=>{
        if (num >=5){
            gameControlsContainer.removeChild(rotateButton)
            gameControlsContainer.removeChild(shipyard)
            return game(obj, playerTwo)
        }
        else {
            display.textContent = ""
            let ship = document.createElement("div")
            ship.id = obj.navy[num].ship
            ship.classList =`ship ${obj.navy[num].ship}`
            ship.style.width ="2rem"
            ship.draggable = true
            ship.addEventListener("dragstart", dragStart)
            shipyard.appendChild(ship)
            display.textContent = `Admiral ${obj.name}, place your ${obj.navy[num].ship}`
            rotateShip()
            
        }
        
    }
    tile.forEach((tile)=>{
        tile.addEventListener("dragover", dragEnter)
        tile.addEventListener("dragleave",dragLeave)
        tile.addEventListener("dragover", dragOver)
        tile.addEventListener("drop", drop)
    })
    const placeShipOnGamebord = (shipNumber, id)=>{
        const xAxisPlaces = ["a","b","c","d","e","f","g","h","i","j"]
        let xAxis = id.charAt(0)
        let yAxis = +id.charAt(1)
        let yAxisArr =[]
        let coord = {ship: obj.navy[shipNumber], cord:{}, horizontal: horizontal}
        let shipLength = obj.navy[shipNumber].shipLength
        if (horizontal === false){
            for (let i = 0; i < xAxisPlaces.length; i++){
                if(xAxisPlaces[i]=== xAxis){
                    for ( let j = 0; j < shipLength; j++){
                        coord.cord[xAxisPlaces[i+j]] = [yAxis]
                    }
                }
            }
            return coord
        }
        if (horizontal === true){
            for (let i = yAxis; i < (yAxis+shipLength); i++ ){
                yAxisArr.push(i)
            }
            coord.cord[xAxis] = yAxisArr
            return coord
        }
        
        return coord
    }
    const rotateShip = ()=>{
        let ship = document.querySelector(".ship")
        if (!horizontal) {
            horizontal = true
            ship.style.rotate = "90deg"
            
            return horizontal
        }
        if (horizontal){
            horizontal = false
            ship.style.rotate = "0deg"
            
            return horizontal
        }
        return horizontal
    }
    rotateButton.addEventListener("click", rotateShip)

    renderShip(shipNumber)
    aiPlaceShip(playerTwo)   
}

export {placeShip}

