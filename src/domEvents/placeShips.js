const placeShip = (obj)=>{
    let horizontal = false
    const gameControlsContainer = document.getElementById("game-controls-container")
    const display = document.getElementById("display")
    const tile = document.querySelectorAll(".tile")
    const shipyard = document.createElement("div")
    const rotateButton = document.createElement("button")
    rotateButton.textContent = "Change axis"
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
        let check = obj.gameBoard.checkavailable(coordinates)
        if (check = false) return
        else{
            ship.classList.remove("ship")
            ship.style.className = "placed-ship"
            e.target.appendChild(boat)
            shipNumber++
            renderShip(shipNumber)
            obj.gameBoard.placeShip(coordinates)
            return shipNumber
        }
        

    }
    const dragOver = (e)=>{
        e.preventDefault()
    }
    const dragEnter = (e)=>{
        e.preventDefault()
        e.target.style.backgroundColor = "gray"
        
    }
    const dragLeave = (e)=>{
        e.preventDefault()
        e.target.style.backgroundColor = "white"
        
    }
    const dragStart = (e)=>{
        e.dataTransfer.clearData()
        e.dataTransfer.setData("Text", e.target.id)
    }
    const renderShip = (num)=>{
        
        if (num >=5)return console.log(obj.gameBoard.board)
        else {
            display.textContent = ""
            let ship = document.createElement("div")
            ship.id = obj.navy[num].ship
            ship.className = "ship"
            ship.style.height = `${obj.navy[num].shipLength}rem`
            ship.style.width ="2rem"
            ship.draggable = true
            ship.addEventListener("dragstart", (e)=>dragStart(e))
            shipyard.appendChild(ship)
            display.textContent = `Admiral ${obj.name}, place your ${obj.navy[num].ship}`
            
        }
        
    }
    tile.forEach((tile)=>{
        tile.addEventListener("dragover", (e)=>dragEnter(e))
        tile.addEventListener("dragleave",(e)=>dragLeave(e))
        tile.addEventListener("dragover", (e)=>dragOver(e))
        tile.addEventListener("drop", (e)=>drop(e))
    })
    const placeShipOnGamebord = (shipNumber, id)=>{
        const xAxisPlaces = "abcdefghij"
        let xAxis = id.charAt(0)
        let yAxis = +id.charAt(1)
        let yAxisArr =[]
        let coord = {ship: obj.navy[shipNumber], cord:{}, horizontal: horizontal}
        let shipLength = obj.navy[shipNumber].shipLength
        if (horizontal === false){
            for (let i = 0; i < xAxisPlaces.length; i++){
                if (xAxisPlaces[i] === xAxis){
                    for (let j = 0; j < shipLength; j++){
                        coord.cord[xAxisPlaces[j]] = [yAxis]  
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
    rotateButton.addEventListener("click",()=>{
        let ship = document.querySelector(".ship")
        if (!horizontal) {
            horizontal = true
            ship.style.rotate = "90deg"
            console.log(horizontal)
            return horizontal
        }
        if (horizontal){
            horizontal = false
            ship.style.rotate = "0deg"
            console.log(horizontal)
            return horizontal
        }
        return horizontal
        
    })

    renderShip(shipNumber)   
}

export {placeShip}

