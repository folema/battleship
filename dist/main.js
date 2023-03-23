/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domEvents/clearChildContainer.js":
/*!**********************************************!*\
  !*** ./src/domEvents/clearChildContainer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearChildContainer": () => (/* binding */ clearChildContainer)
/* harmony export */ });
const childContainer = document.getElementById("child-container")

const clearChildContainer = ()=>{
    while(childContainer.firstChild)childContainer.removeChild(childContainer.firstChild)
}



/***/ }),

/***/ "./src/domEvents/displayWinner.js":
/*!****************************************!*\
  !*** ./src/domEvents/displayWinner.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayWinner": () => (/* binding */ displayWinner)
/* harmony export */ });
/* harmony import */ var _clearChildContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearChildContainer */ "./src/domEvents/clearChildContainer.js");

const displayWinner = (player)=>{
    (0,_clearChildContainer__WEBPACK_IMPORTED_MODULE_0__.clearChildContainer)()
    const childContainer = document.getElementById("child-container")
    const winDiv = document.createElement("div")
    const winMessage= document.createElement("h3")
    winMessage.textContent = `Game over. The Winner is Admiral ${player.name}`
    winDiv.appendChild(winMessage)
    childContainer.appendChild(winDiv)
}



/***/ }),

/***/ "./src/domEvents/game.js":
/*!*******************************!*\
  !*** ./src/domEvents/game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _functions_aiFire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/aiFire */ "./src/functions/aiFire.js");
/* harmony import */ var _displayWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayWinner */ "./src/domEvents/displayWinner.js");
/* harmony import */ var _functions_checkWinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/checkWinner */ "./src/functions/checkWinner.js");



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
                ;(0,_functions_aiFire__WEBPACK_IMPORTED_MODULE_0__.aiFire)(objOne, objTwo)
                break;
            case 1:
                shotHit(e) 
                if ((0,_functions_checkWinner__WEBPACK_IMPORTED_MODULE_2__.checkWinner)(objTwo) === 5){ 
                    (0,_displayWinner__WEBPACK_IMPORTED_MODULE_1__.displayWinner)(objOne) 
                    break;
                } 
                
                else if ((0,_functions_checkWinner__WEBPACK_IMPORTED_MODULE_2__.checkWinner)(objTwo) < 5){ 
                        (0,_functions_aiFire__WEBPACK_IMPORTED_MODULE_0__.aiFire)(objOne, objTwo)
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



/***/ }),

/***/ "./src/domEvents/makePlayerGameboard.js":
/*!**********************************************!*\
  !*** ./src/domEvents/makePlayerGameboard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makePlayerGameBoard": () => (/* binding */ makePlayerGameBoard)
/* harmony export */ });
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



/***/ }),

/***/ "./src/domEvents/placeShips.js":
/*!*************************************!*\
  !*** ./src/domEvents/placeShips.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeShip": () => (/* binding */ placeShip)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/domEvents/game.js");
/* harmony import */ var _functions_aiPlaceShip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/aiPlaceShip */ "./src/functions/aiPlaceShip.js");


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
            return (0,_game__WEBPACK_IMPORTED_MODULE_0__.game)(obj, playerTwo)
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
    ;(0,_functions_aiPlaceShip__WEBPACK_IMPORTED_MODULE_1__.aiPlaceShip)(playerTwo)   
}





/***/ }),

/***/ "./src/domEvents/signup.js":
/*!*********************************!*\
  !*** ./src/domEvents/signup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "start": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/playerFactory */ "./src/factories/playerFactory.js");
/* harmony import */ var _clearChildContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearChildContainer */ "./src/domEvents/clearChildContainer.js");
/* harmony import */ var _makePlayerGameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makePlayerGameboard */ "./src/domEvents/makePlayerGameboard.js");
/* harmony import */ var _placeShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placeShips */ "./src/domEvents/placeShips.js");




const inpuField = document.getElementById("name-input")
const startButton = document.getElementById("startButton")

const start = ()=>{
    if (inpuField.value <=0) alert("Enter player name")
    else{
        startButton.removeEventListener("click", start)
        const playerOne = (0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)(inpuField.value, false)
        const playerTwo = (0,_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__.playerFactory)("Macintosh", true)
        ;(0,_clearChildContainer__WEBPACK_IMPORTED_MODULE_1__.clearChildContainer)()
        ;(0,_makePlayerGameboard__WEBPACK_IMPORTED_MODULE_2__.makePlayerGameBoard)(playerOne)
        ;(0,_placeShips__WEBPACK_IMPORTED_MODULE_3__.placeShip)(playerOne, playerTwo)
        return playerOne, playerTwo
    }
    
      
}



/***/ }),

/***/ "./src/factories/gameBoard.js":
/*!************************************!*\
  !*** ./src/factories/gameBoard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard)
/* harmony export */ });
const gameboard = ()=>{
    let board = {a: [0,1,2,3,4,5,6,7,8,9],
        b: [0,1,2,3,4,5,6,7,8,9],
        c: [0,1,2,3,4,5,6,7,8,9],
        d: [0,1,2,3,4,5,6,7,8,9],
        e: [0,1,2,3,4,5,6,7,8,9],
        f: [0,1,2,3,4,5,6,7,8,9],
        g: [0,1,2,3,4,5,6,7,8,9],
        h: [0,1,2,3,4,5,6,7,8,9],
        i: [0,1,2,3,4,5,6,7,8,9],
        j: [0,1,2,3,4,5,6,7,8,9]}
    const placeShip = (obj)=>{
        let coordKeys = Object.keys(obj.cord)
        let horizontal = obj.horizontal
        if (!horizontal){
                coordKeys.forEach((key)=>{
                board[key][obj.cord[key]] = obj.ship.ship
            })
            return 
        }
        if (horizontal){
                let positions = Object.values(obj.cord[coordKeys])
                for (let i = 0; i < positions.length; i++){
                    board[coordKeys][positions[i]] = obj.ship.ship
                }
            return 
            }
        }
    const check = (key,index)=>{
        if(board[key]=== undefined)return false
        if(isNaN(board[key][index])) return false
        else return true
        }
    const checkavailable= (obj)=>{
        let available = true
        let coordKeys = Object.keys(obj.cord)
        let horizontal = obj.horizontal
        if (!horizontal){
            coordKeys.forEach((key)=>{
                if (!check(key, obj.cord[key])){  
                    available = false
                    return available
                }
                else { 
                    return 
                }
            })            
        }
        if (horizontal){
            let positions = Object.values(obj.cord[coordKeys])
            positions.forEach((pos)=>{
                if (!check(coordKeys,pos)){
                    available = false
                    return available
                }
                else {
                    return 
                }
            })
            
        }
        return available
    }
    return{board, placeShip, checkavailable}
}







/***/ }),

/***/ "./src/factories/playerFactory.js":
/*!****************************************!*\
  !*** ./src/factories/playerFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playerFactory": () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/factories/gameBoard.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ "./src/factories/shipFactory.js");



const playerFactory = (playerName, isAi)=>{
    let name = playerName
    let ai = isAi
    const navy = [(0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.shipFactory)("Carrier"), (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.shipFactory)("Battleship"), (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.shipFactory)("Destroyer"), (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.shipFactory)("Submarine"), (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__.shipFactory)("Patrol boat")]
    let gameBoard = (0,_gameBoard__WEBPACK_IMPORTED_MODULE_0__.gameboard)()
    let oppositionBoard = {a: [0,1,2,3,4,5,6,7,8,9],
                          b: [0,1,2,3,4,5,6,7,8,9],
                          c: [0,1,2,3,4,5,6,7,8,9],
                          d: [0,1,2,3,4,5,6,7,8,9],
                          e: [0,1,2,3,4,5,6,7,8,9],
                          f: [0,1,2,3,4,5,6,7,8,9],
                          g: [0,1,2,3,4,5,6,7,8,9],
                          h: [0,1,2,3,4,5,6,7,8,9],
                          i: [0,1,2,3,4,5,6,7,8,9],
                          j: [0,1,2,3,4,5,6,7,8,9]}
    const fire = (coord, obj)=>{
        let coordOne = Object.keys(coord)
        let coordTwo = Object.values(coord)
        if (isNaN(oppositionBoard[coordOne][coordTwo])){
            return -1
        }
        else {
            let shipImpact = obj.gameBoard.board[coordOne][coordTwo]
            if (isNaN(shipImpact)){
                oppositionBoard[coordOne][coordTwo] = "Hit"
                for (let i = 0; i < obj.navy.length; i++){
                    if (obj.navy[i].ship=== shipImpact){
                        obj.navy[i].impact()
                    return oppositionBoard, 1
                }
                }
                    
                return oppositionBoard
                
            }
            else {
                oppositionBoard[coordOne][coordTwo] = "Miss"
                return oppositionBoard, 0
            }
        }   
    }
    return {name, navy, gameBoard, ai, oppositionBoard, fire}
}



/***/ }),

/***/ "./src/factories/shipFactory.js":
/*!**************************************!*\
  !*** ./src/factories/shipFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
const shipFactory = (type)=>{
    let shipType = type
    let shipLength = ()=>{
            switch (shipType){
                case "Carrier":
                    return 5
                    break
                case "Battleship":
                    return 4
                    break
                case "Destroyer":
                    return 3
                    break    
                case "Submarine":
                    return 3
                    break
                case "Patrol boat":
                    return 2
                    break
            }
    }
    let hit = 0
    let isSunk = false
    const sinks = ()=>{
        if(hit === shipLength()){
            isSunk = true
            
            return isSunk
        }
        else {
            isSunk = false
            return isSunk
        }
    }
    const impact = ()=>{
        hit++
        
        return hit,sinks()
    }
    return {ship: shipType,
            shipLength: shipLength(),
            impact,
            sinks,  
            } 
}




/***/ }),

/***/ "./src/functions/aiFire.js":
/*!*********************************!*\
  !*** ./src/functions/aiFire.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aiFire": () => (/* binding */ aiFire)
/* harmony export */ });
/* harmony import */ var _checkWinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkWinner */ "./src/functions/checkWinner.js");
/* harmony import */ var _domEvents_displayWinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domEvents/displayWinner */ "./src/domEvents/displayWinner.js");



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
            if((0,_checkWinner__WEBPACK_IMPORTED_MODULE_0__.checkWinner)(playerOne) === 5) return (0,_domEvents_displayWinner__WEBPACK_IMPORTED_MODULE_1__.displayWinner)(playerTwo)
            else return 
        }
    },500)
    return
}


/***/ }),

/***/ "./src/functions/aiPlaceShip.js":
/*!**************************************!*\
  !*** ./src/functions/aiPlaceShip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aiPlaceShip": () => (/* binding */ aiPlaceShip)
/* harmony export */ });
const aiPlaceShip = (obj)=>{
    const xAxisPlaces = ["a","b","c","d","e","f","g","h","i","j"]
    const horizontalChoice =()=>Math.floor(Math.random()*2)
    const xAxisPlacesChoice = ()=>{
        const index = Math.floor(Math.random()*xAxisPlaces.length)
        const choice = xAxisPlaces[index]
        return choice
    }
    const yAxisChoice = ()=> Math.floor(Math.random()*9)
    const placeShip = (number)=>{
        if (number >= 5)return 
        else{
            let coordinates = {cord:{}, ship: obj.navy[number]}
            let xAxis = xAxisPlacesChoice()
            let yAxis = yAxisChoice()
            let horizontal = false
            switch (horizontalChoice()){
                case 0:{
                    horizontal= false
                    for (let i = 0; i < xAxisPlaces.length; i++){
                        if(xAxisPlaces[i]=== xAxis){
                            for ( let j = 0; j < obj.navy[number].shipLength; j++){
                                coordinates.cord[xAxisPlaces[i+j]] = [yAxis]
                            }
                        }
                    }
                    coordinates.horizontal =horizontal
                    if (obj.gameBoard.checkavailable(coordinates)=== false)return placeShip(number)    
                    
                    else{
                        obj.gameBoard.placeShip(coordinates)
                        return placeShip(number+1)
                    }
                    
                    
                }
                case 1:{
                    horizontal = true
                    let yAxisArr = []
                    for (let i = 0; i < obj.navy[number].shipLength; i++){
                        yAxisArr.push(yAxis+i)
                    }
                    coordinates.cord[xAxis] = yAxisArr
                    coordinates.horizontal = horizontal
                    if (obj.gameBoard.checkavailable(coordinates)=== false)return placeShip(number)
                    
                    else{
                        obj.gameBoard.placeShip(coordinates)
                        return placeShip(number+1)
                    }
                    
                }
            }
        }
    }
    placeShip(0)
    
}



/***/ }),

/***/ "./src/functions/checkWinner.js":
/*!**************************************!*\
  !*** ./src/functions/checkWinner.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWinner": () => (/* binding */ checkWinner)
/* harmony export */ });
const checkWinner = (player)=>{
    let shipsSunk = 0
    player.navy.forEach(element => {
        if(element.sinks() === true) {
            shipsSunk++

            return shipsSunk
        }
        else return shipsSunk

    });
    return shipsSunk
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domEvents_signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domEvents/signup */ "./src/domEvents/signup.js");

const startButton = document.getElementById("startButton")
startButton.addEventListener("click", _domEvents_signup__WEBPACK_IMPORTED_MODULE_0__.start)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQzNDO0FBQ0Esc0NBQXNDLG9EQUFLLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbUV2ZW50cy9jbGVhckNoaWxkQ29udGFpbmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tRXZlbnRzL2Rpc3BsYXlXaW5uZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21FdmVudHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbUV2ZW50cy9tYWtlUGxheWVyR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tRXZlbnRzL3BsYWNlU2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21FdmVudHMvc2lnbnVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZnVuY3Rpb25zL2FpRmlyZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9haVBsYWNlU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Z1bmN0aW9ucy9jaGVja1dpbm5lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGlsZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hpbGQtY29udGFpbmVyXCIpXG5cbmNvbnN0IGNsZWFyQ2hpbGRDb250YWluZXIgPSAoKT0+e1xuICAgIHdoaWxlKGNoaWxkQ29udGFpbmVyLmZpcnN0Q2hpbGQpY2hpbGRDb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGRDb250YWluZXIuZmlyc3RDaGlsZClcbn1cblxuZXhwb3J0IHtjbGVhckNoaWxkQ29udGFpbmVyfSIsImltcG9ydCB7IGNsZWFyQ2hpbGRDb250YWluZXIgfSBmcm9tIFwiLi9jbGVhckNoaWxkQ29udGFpbmVyXCJcbmNvbnN0IGRpc3BsYXlXaW5uZXIgPSAocGxheWVyKT0+e1xuICAgIGNsZWFyQ2hpbGRDb250YWluZXIoKVxuICAgIGNvbnN0IGNoaWxkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGlsZC1jb250YWluZXJcIilcbiAgICBjb25zdCB3aW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3Qgd2luTWVzc2FnZT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgd2luTWVzc2FnZS50ZXh0Q29udGVudCA9IGBHYW1lIG92ZXIuIFRoZSBXaW5uZXIgaXMgQWRtaXJhbCAke3BsYXllci5uYW1lfWBcbiAgICB3aW5EaXYuYXBwZW5kQ2hpbGQod2luTWVzc2FnZSlcbiAgICBjaGlsZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5EaXYpXG59XG5cbmV4cG9ydCB7ZGlzcGxheVdpbm5lcn0iLCJpbXBvcnQgeyBhaUZpcmUgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL2FpRmlyZVwiXG5pbXBvcnQgeyBkaXNwbGF5V2lubmVyIH0gZnJvbSBcIi4vZGlzcGxheVdpbm5lclwiXG5pbXBvcnQgeyBjaGVja1dpbm5lcn0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9jaGVja1dpbm5lclwiXG5jb25zdCBnYW1lID0gKG9iak9uZSwgb2JqVHdvKT0+e1xuICAgIGNvbnN0IGdhbWVDb250cm9sc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb250cm9scy1jb250YWluZXJcIilcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5XCIpXG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IGBBZG1pcmFsICR7b2JqT25lLm5hbWV9LCBmaXJlIGF0IHdpbGwhYFxuICAgIGNvbnN0IGVuZW15V2F0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGVuZW15V2F0ZXJzLmNsYXNzTmFtZSA9IFwiZW5lbXktd2F0ZXJzXCJcbiAgICBsZXQgb3Bwb3NpdGlvbkJvYXJkS2V5cyA9IE9iamVjdC5rZXlzKG9iak9uZS5vcHBvc2l0aW9uQm9hcmQpXG4gICAgY29uc3Qgc2hvdE1pc3NlZCA9IChlKT0+e1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcbiAgICB9XG4gICAgY29uc3Qgc2hvdEhpdCA9IChlKT0+e1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiXG4gICAgfVxuICAgIGNvbnN0IGZpcmUgPSAoZSk9PntcbiAgICAgICAgbGV0IGZpcmVBdCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXhOdW1iZXJcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0ge1tmaXJlQXQuY2hhckF0KDApXTogWytmaXJlQXQuY2hhckF0KFsxXSldfVxuICAgICAgICBzd2l0Y2ggKG9iak9uZS5maXJlKGNvb3JkaW5hdGVzLCBvYmpUd28pKXtcbiAgICAgICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgc2hvdE1pc3NlZChlKSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBhaUZpcmUob2JqT25lLCBvYmpUd28pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgc2hvdEhpdChlKSBcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tXaW5uZXIob2JqVHdvKSA9PT0gNSl7IFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5V2lubmVyKG9iak9uZSkgXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hlY2tXaW5uZXIob2JqVHdvKSA8IDUpeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFpRmlyZShvYmpPbmUsIG9ialR3bylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFxuICAgICAgICBcbiAgICB9XG4gICAgb3Bwb3NpdGlvbkJvYXJkS2V5cy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBsZXQgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIHRpbGUuY2xhc3NOYW1lID0gXCJlbmVteS10aWxlXCJcbiAgICAgICAgICAgIHRpbGUuZGF0YXNldC5pbmRleE51bWJlcj0gYCR7a2V5fSR7aX1gXG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmaXJlKVxuICAgICAgICAgICAgZW5lbXlXYXRlcnMuYXBwZW5kQ2hpbGQodGlsZSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgZ2FtZUNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15V2F0ZXJzKVxuICAgIFxuICAgIFxufVxuXG5leHBvcnQge2dhbWV9IiwiY29uc3QgY2hpbGRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoaWxkLWNvbnRhaW5lclwiKVxuY29uc3QgbWFrZVBsYXllckdhbWVCb2FyZCA9IChvYmopPT57XG4gICAgY29uc3QgZ2FtZUNvbnRyb2xzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGdhbWVDb250cm9sc0NvbnRhaW5lci5pZCA9IFwiZ2FtZS1jb250cm9scy1jb250YWluZXJcIlxuICAgIGdhbWVDb250cm9sc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImdhbWUtY29udHJvbHMtY29udGFpbmVyXCJcbiAgICBjb25zdCBkaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpc3BsYXlEaXYuY2xhc3NOYW1lID0gXCJkaXNwbGF5LWRpdlwiXG4gICAgZGlzcGxheURpdi5pZCA9IFwiZGlzcGxheS1kaXZcIlxuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBkaXNwbGF5LmNsYXNzTmFtZSA9IFwiZGlzcGxheVwiXG4gICAgZGlzcGxheS5pZCA9IFwiZGlzcGxheVwiXG4gICAgZGlzcGxheURpdi5hcHBlbmRDaGlsZChkaXNwbGF5KVxuICAgIGdhbWVDb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXNwbGF5RGl2KVxuICAgIGxldCBib2FyZFBsYWNlcyA9IG9iai5nYW1lQm9hcmQuYm9hcmRcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGJvYXJkUGxhY2VzKVxuICAgIGNvbnN0IGZyaWVuZGx5V2F0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZyaWVuZGx5V2F0ZXJzLmNsYXNzTmFtZSA9IFwiZnJpZW5kbHktd2F0ZXJzXCJcbiAgICBmcmllbmRseVdhdGVycy5pZCA9IFwiZnJpZW5kbHktd2F0ZXJzXCJcbiAgICBrZXlzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGJvYXJkUGxhY2VzW2tleV0ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICB0aWxlLmNsYXNzTmFtZSA9IFwidGlsZVwiXG4gICAgICAgICAgICB0aWxlLmlkID1gJHtrZXl9JHtib2FyZFBsYWNlc1trZXldW2ldfWBcbiAgICAgICAgICAgIGZyaWVuZGx5V2F0ZXJzLmFwcGVuZENoaWxkKHRpbGUpXG5cbiAgICAgICAgfVxuICAgIH0pXG4gICAgZ2FtZUNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyaWVuZGx5V2F0ZXJzKVxuICAgIGNoaWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVDb250cm9sc0NvbnRhaW5lcilcbn1cblxuZXhwb3J0IHttYWtlUGxheWVyR2FtZUJvYXJkfSIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9nYW1lXCJcbmltcG9ydCB7IGFpUGxhY2VTaGlwIH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9haVBsYWNlU2hpcFwiXG5jb25zdCBwbGFjZVNoaXAgPSAob2JqLCBwbGF5ZXJUd28pPT57XG4gICAgbGV0IGhvcml6b250YWwgPSBmYWxzZVxuICAgIGNvbnN0IGdhbWVDb250cm9sc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb250cm9scy1jb250YWluZXJcIilcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5XCIpXG4gICAgY29uc3QgdGlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGlsZVwiKVxuICAgIGNvbnN0IHNoaXB5YXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNoYW5nZSBheGlzXCJcbiAgICByb3RhdGVCdXR0b24uaWQgPSBcInJvdGF0ZUJ1dHRvblwiXG4gICAgZ2FtZUNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdGF0ZUJ1dHRvbilcbiAgICBzaGlweWFyZC5jbGFzc05hbWUgPSBcInNoaXB5YXJkXCJcbiAgICBzaGlweWFyZC5pZCA9IFwic2hpcHlhcmRcIlxuICAgIGdhbWVDb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlweWFyZClcbiAgICBsZXQgc2hpcE51bWJlciA9IDBcbiAgICBjb25zdCBkcm9wID0gKGUpPT57XG4gICAgICAgIGxldCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwXCIpXG4gICAgICAgIGxldCBpZCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJUZXh0XCIpXG4gICAgICAgIGxldCBib2F0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IHBsYWNlU2hpcE9uR2FtZWJvcmQoc2hpcE51bWJlciwgZS50YXJnZXQuaWQpIFxuICAgICAgICBpZiAob2JqLmdhbWVCb2FyZC5jaGVja2F2YWlsYWJsZShjb29yZGluYXRlcykgPT09IGZhbHNlKXsgXG4gICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCJcblxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzaGlwLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1N0YXJ0KVxuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKVxuICAgICAgICAgICAgc2hpcC5zdHlsZS5jbGFzc05hbWUgPSBcInBsYWNlZC1zaGlwXCJcbiAgICAgICAgICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGJvYXQpXG4gICAgICAgICAgICBlLnRhcmdldC5yZW1vdmVDaGlsZChib2F0KVxuICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cIndoaXRlXCJcbiAgICAgICAgICAgIHNldEdhbWVib2FyZChlLHNoaXBOdW1iZXIsIDApXG4gICAgICAgICAgICBzaGlwTnVtYmVyKytcbiAgICAgICAgICAgIHJlbmRlclNoaXAoc2hpcE51bWJlcilcbiAgICAgICAgICAgIG9iai5nYW1lQm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgcmV0dXJuIHNoaXBOdW1iZXJcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHNldEdhbWVib2FyZCA9IChlLHNoaXBOdW1iZXIsIG51bSk9PntcbiAgICAgICAgbGV0IHlBeGlzID0gZS50YXJnZXQuaWQuY2hhckF0KDApXG4gICAgICAgIGxldCB4QXhpcyA9ICtlLnRhcmdldC5pZC5jaGFyQXQoMSlcbiAgICAgICAgbGV0IHlBeGlzUGxhY2VzID0gW1wiYVwiLFwiYlwiLFwiY1wiLFwiZFwiLFwiZVwiLFwiZlwiLFwiZ1wiLFwiaFwiLFwiaVwiLFwialwiXVxuICAgICAgICBpZihob3Jpem9udGFsKXtcbiAgICAgICAgICAgICAgICBpZiAobnVtID49b2JqLm5hdnlbc2hpcE51bWJlcl0uc2hpcExlbmd0aClyZXR1cm5cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt5QXhpc30ke3hBeGlzK251bX1gKVxuICAgICAgICAgICAgICAgICAgICB0aWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcbiAgICAgICAgICAgICAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ0VudGVyKVxuICAgICAgICAgICAgICAgICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIixkcmFnTGVhdmUpXG4gICAgICAgICAgICAgICAgICAgIHRpbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdPdmVyKVxuICAgICAgICAgICAgICAgICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3ApXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldEdhbWVib2FyZChlLCBzaGlwTnVtYmVyLCAobnVtKzEpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoIWhvcml6b250YWwpe1xuICAgICAgICAgICAgaWYgKG51bSA+PW9iai5uYXZ5W3NoaXBOdW1iZXJdLnNoaXBMZW5ndGgpcmV0dXJuXG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGZvciggbGV0IGkgPSAwOyBpIDwgeUF4aXNQbGFjZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZih5QXhpc1BsYWNlc1tpXSA9PT0geUF4aXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt5QXhpc1BsYWNlc1soaStudW0pXX0ke3hBeGlzfWApXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ0VudGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsZHJhZ0xlYXZlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ092ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGRyb3ApXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEdhbWVib2FyZChlLCBzaGlwTnVtYmVyLCAobnVtKzEpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgICAgICBcbiAgICBcbiAgICBjb25zdCBkcmFnT3ZlciA9IChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgXG4gICAgfVxuICAgIGNvbnN0IGRyYWdFbnRlciA9IChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnTGVhdmUgPSAoZSk9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ1N0YXJ0ID0gKGUpPT57XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLmNsZWFyRGF0YSgpXG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJUZXh0XCIsIGUudGFyZ2V0LmlkKVxuXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU2hpcCA9IChudW0pPT57XG4gICAgICAgIGlmIChudW0gPj01KXtcbiAgICAgICAgICAgIGdhbWVDb250cm9sc0NvbnRhaW5lci5yZW1vdmVDaGlsZChyb3RhdGVCdXR0b24pXG4gICAgICAgICAgICBnYW1lQ29udHJvbHNDb250YWluZXIucmVtb3ZlQ2hpbGQoc2hpcHlhcmQpXG4gICAgICAgICAgICByZXR1cm4gZ2FtZShvYmosIHBsYXllclR3bylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiXG4gICAgICAgICAgICBsZXQgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIHNoaXAuaWQgPSBvYmoubmF2eVtudW1dLnNoaXBcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0ID1gc2hpcCAke29iai5uYXZ5W251bV0uc2hpcH1gXG4gICAgICAgICAgICBzaGlwLnN0eWxlLndpZHRoID1cIjJyZW1cIlxuICAgICAgICAgICAgc2hpcC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnc3RhcnRcIiwgZHJhZ1N0YXJ0KVxuICAgICAgICAgICAgc2hpcHlhcmQuYXBwZW5kQ2hpbGQoc2hpcClcbiAgICAgICAgICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBgQWRtaXJhbCAke29iai5uYW1lfSwgcGxhY2UgeW91ciAke29iai5uYXZ5W251bV0uc2hpcH1gXG4gICAgICAgICAgICByb3RhdGVTaGlwKClcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICB0aWxlLmZvckVhY2goKHRpbGUpPT57XG4gICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIGRyYWdFbnRlcilcbiAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsZHJhZ0xlYXZlKVxuICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnT3ZlcilcbiAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wKVxuICAgIH0pXG4gICAgY29uc3QgcGxhY2VTaGlwT25HYW1lYm9yZCA9IChzaGlwTnVtYmVyLCBpZCk9PntcbiAgICAgICAgY29uc3QgeEF4aXNQbGFjZXMgPSBbXCJhXCIsXCJiXCIsXCJjXCIsXCJkXCIsXCJlXCIsXCJmXCIsXCJnXCIsXCJoXCIsXCJpXCIsXCJqXCJdXG4gICAgICAgIGxldCB4QXhpcyA9IGlkLmNoYXJBdCgwKVxuICAgICAgICBsZXQgeUF4aXMgPSAraWQuY2hhckF0KDEpXG4gICAgICAgIGxldCB5QXhpc0FyciA9W11cbiAgICAgICAgbGV0IGNvb3JkID0ge3NoaXA6IG9iai5uYXZ5W3NoaXBOdW1iZXJdLCBjb3JkOnt9LCBob3Jpem9udGFsOiBob3Jpem9udGFsfVxuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IG9iai5uYXZ5W3NoaXBOdW1iZXJdLnNoaXBMZW5ndGhcbiAgICAgICAgaWYgKGhvcml6b250YWwgPT09IGZhbHNlKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeEF4aXNQbGFjZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKHhBeGlzUGxhY2VzW2ldPT09IHhBeGlzKXtcbiAgICAgICAgICAgICAgICAgICAgZm9yICggbGV0IGogPSAwOyBqIDwgc2hpcExlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkLmNvcmRbeEF4aXNQbGFjZXNbaStqXV0gPSBbeUF4aXNdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29vcmRcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0geUF4aXM7IGkgPCAoeUF4aXMrc2hpcExlbmd0aCk7IGkrKyApe1xuICAgICAgICAgICAgICAgIHlBeGlzQXJyLnB1c2goaSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvb3JkLmNvcmRbeEF4aXNdID0geUF4aXNBcnJcbiAgICAgICAgICAgIHJldHVybiBjb29yZFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29vcmRcbiAgICB9XG4gICAgY29uc3Qgcm90YXRlU2hpcCA9ICgpPT57XG4gICAgICAgIGxldCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwXCIpXG4gICAgICAgIGlmICghaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgaG9yaXpvbnRhbCA9IHRydWVcbiAgICAgICAgICAgIHNoaXAuc3R5bGUucm90YXRlID0gXCI5MGRlZ1wiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBob3Jpem9udGFsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvcml6b250YWwpe1xuICAgICAgICAgICAgaG9yaXpvbnRhbCA9IGZhbHNlXG4gICAgICAgICAgICBzaGlwLnN0eWxlLnJvdGF0ZSA9IFwiMGRlZ1wiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBob3Jpem9udGFsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhvcml6b250YWxcbiAgICB9XG4gICAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3RhdGVTaGlwKVxuXG4gICAgcmVuZGVyU2hpcChzaGlwTnVtYmVyKVxuICAgIGFpUGxhY2VTaGlwKHBsYXllclR3bykgICBcbn1cblxuZXhwb3J0IHtwbGFjZVNoaXB9XG5cbiIsImltcG9ydCB7IHBsYXllckZhY3RvcnkgfSBmcm9tIFwiLi4vZmFjdG9yaWVzL3BsYXllckZhY3RvcnlcIlxuaW1wb3J0IHsgY2xlYXJDaGlsZENvbnRhaW5lciB9IGZyb20gXCIuL2NsZWFyQ2hpbGRDb250YWluZXJcIlxuaW1wb3J0IHsgbWFrZVBsYXllckdhbWVCb2FyZCB9IGZyb20gXCIuL21ha2VQbGF5ZXJHYW1lYm9hcmRcIlxuaW1wb3J0IHsgcGxhY2VTaGlwIH0gZnJvbSBcIi4vcGxhY2VTaGlwc1wiXG5jb25zdCBpbnB1RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWUtaW5wdXRcIilcbmNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEJ1dHRvblwiKVxuXG5jb25zdCBzdGFydCA9ICgpPT57XG4gICAgaWYgKGlucHVGaWVsZC52YWx1ZSA8PTApIGFsZXJ0KFwiRW50ZXIgcGxheWVyIG5hbWVcIilcbiAgICBlbHNle1xuICAgICAgICBzdGFydEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnQpXG4gICAgICAgIGNvbnN0IHBsYXllck9uZSA9IHBsYXllckZhY3RvcnkoaW5wdUZpZWxkLnZhbHVlLCBmYWxzZSlcbiAgICAgICAgY29uc3QgcGxheWVyVHdvID0gcGxheWVyRmFjdG9yeShcIk1hY2ludG9zaFwiLCB0cnVlKVxuICAgICAgICBjbGVhckNoaWxkQ29udGFpbmVyKClcbiAgICAgICAgbWFrZVBsYXllckdhbWVCb2FyZChwbGF5ZXJPbmUpXG4gICAgICAgIHBsYWNlU2hpcChwbGF5ZXJPbmUsIHBsYXllclR3bylcbiAgICAgICAgcmV0dXJuIHBsYXllck9uZSwgcGxheWVyVHdvXG4gICAgfVxuICAgIFxuICAgICAgXG59XG5cbmV4cG9ydCB7c3RhcnR9IiwiY29uc3QgZ2FtZWJvYXJkID0gKCk9PntcbiAgICBsZXQgYm9hcmQgPSB7YTogWzAsMSwyLDMsNCw1LDYsNyw4LDldLFxuICAgICAgICBiOiBbMCwxLDIsMyw0LDUsNiw3LDgsOV0sXG4gICAgICAgIGM6IFswLDEsMiwzLDQsNSw2LDcsOCw5XSxcbiAgICAgICAgZDogWzAsMSwyLDMsNCw1LDYsNyw4LDldLFxuICAgICAgICBlOiBbMCwxLDIsMyw0LDUsNiw3LDgsOV0sXG4gICAgICAgIGY6IFswLDEsMiwzLDQsNSw2LDcsOCw5XSxcbiAgICAgICAgZzogWzAsMSwyLDMsNCw1LDYsNyw4LDldLFxuICAgICAgICBoOiBbMCwxLDIsMyw0LDUsNiw3LDgsOV0sXG4gICAgICAgIGk6IFswLDEsMiwzLDQsNSw2LDcsOCw5XSxcbiAgICAgICAgajogWzAsMSwyLDMsNCw1LDYsNyw4LDldfVxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChvYmopPT57XG4gICAgICAgIGxldCBjb29yZEtleXMgPSBPYmplY3Qua2V5cyhvYmouY29yZClcbiAgICAgICAgbGV0IGhvcml6b250YWwgPSBvYmouaG9yaXpvbnRhbFxuICAgICAgICBpZiAoIWhvcml6b250YWwpe1xuICAgICAgICAgICAgICAgIGNvb3JkS2V5cy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICAgICAgYm9hcmRba2V5XVtvYmouY29yZFtrZXldXSA9IG9iai5zaGlwLnNoaXBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvcml6b250YWwpe1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbnMgPSBPYmplY3QudmFsdWVzKG9iai5jb3JkW2Nvb3JkS2V5c10pXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBib2FyZFtjb29yZEtleXNdW3Bvc2l0aW9uc1tpXV0gPSBvYmouc2hpcC5zaGlwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgY29uc3QgY2hlY2sgPSAoa2V5LGluZGV4KT0+e1xuICAgICAgICBpZihib2FyZFtrZXldPT09IHVuZGVmaW5lZClyZXR1cm4gZmFsc2VcbiAgICAgICAgaWYoaXNOYU4oYm9hcmRba2V5XVtpbmRleF0pKSByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgY29uc3QgY2hlY2thdmFpbGFibGU9IChvYmopPT57XG4gICAgICAgIGxldCBhdmFpbGFibGUgPSB0cnVlXG4gICAgICAgIGxldCBjb29yZEtleXMgPSBPYmplY3Qua2V5cyhvYmouY29yZClcbiAgICAgICAgbGV0IGhvcml6b250YWwgPSBvYmouaG9yaXpvbnRhbFxuICAgICAgICBpZiAoIWhvcml6b250YWwpe1xuICAgICAgICAgICAgY29vcmRLZXlzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrKGtleSwgb2JqLmNvcmRba2V5XSkpeyAgXG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9yaXpvbnRhbCl7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb25zID0gT2JqZWN0LnZhbHVlcyhvYmouY29yZFtjb29yZEtleXNdKVxuICAgICAgICAgICAgcG9zaXRpb25zLmZvckVhY2goKHBvcyk9PntcbiAgICAgICAgICAgICAgICBpZiAoIWNoZWNrKGNvb3JkS2V5cyxwb3MpKXtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXZhaWxhYmxlXG4gICAgfVxuICAgIHJldHVybntib2FyZCwgcGxhY2VTaGlwLCBjaGVja2F2YWlsYWJsZX1cbn1cblxuZXhwb3J0IHtnYW1lYm9hcmR9XG5cblxuXG4iLCJpbXBvcnQgeyBnYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIlxuaW1wb3J0IHsgc2hpcEZhY3RvcnkgfSBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiXG5cbmNvbnN0IHBsYXllckZhY3RvcnkgPSAocGxheWVyTmFtZSwgaXNBaSk9PntcbiAgICBsZXQgbmFtZSA9IHBsYXllck5hbWVcbiAgICBsZXQgYWkgPSBpc0FpXG4gICAgY29uc3QgbmF2eSA9IFtzaGlwRmFjdG9yeShcIkNhcnJpZXJcIiksIHNoaXBGYWN0b3J5KFwiQmF0dGxlc2hpcFwiKSwgc2hpcEZhY3RvcnkoXCJEZXN0cm95ZXJcIiksIHNoaXBGYWN0b3J5KFwiU3VibWFyaW5lXCIpLCBzaGlwRmFjdG9yeShcIlBhdHJvbCBib2F0XCIpXVxuICAgIGxldCBnYW1lQm9hcmQgPSBnYW1lYm9hcmQoKVxuICAgIGxldCBvcHBvc2l0aW9uQm9hcmQgPSB7YTogWzAsMSwyLDMsNCw1LDYsNyw4LDldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiOiBbMCwxLDIsMyw0LDUsNiw3LDgsOV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGM6IFswLDEsMiwzLDQsNSw2LDcsOCw5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZDogWzAsMSwyLDMsNCw1LDYsNyw4LDldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlOiBbMCwxLDIsMyw0LDUsNiw3LDgsOV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGY6IFswLDEsMiwzLDQsNSw2LDcsOCw5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZzogWzAsMSwyLDMsNCw1LDYsNyw4LDldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoOiBbMCwxLDIsMyw0LDUsNiw3LDgsOV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGk6IFswLDEsMiwzLDQsNSw2LDcsOCw5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgajogWzAsMSwyLDMsNCw1LDYsNyw4LDldfVxuICAgIGNvbnN0IGZpcmUgPSAoY29vcmQsIG9iaik9PntcbiAgICAgICAgbGV0IGNvb3JkT25lID0gT2JqZWN0LmtleXMoY29vcmQpXG4gICAgICAgIGxldCBjb29yZFR3byA9IE9iamVjdC52YWx1ZXMoY29vcmQpXG4gICAgICAgIGlmIChpc05hTihvcHBvc2l0aW9uQm9hcmRbY29vcmRPbmVdW2Nvb3JkVHdvXSkpe1xuICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2hpcEltcGFjdCA9IG9iai5nYW1lQm9hcmQuYm9hcmRbY29vcmRPbmVdW2Nvb3JkVHdvXVxuICAgICAgICAgICAgaWYgKGlzTmFOKHNoaXBJbXBhY3QpKXtcbiAgICAgICAgICAgICAgICBvcHBvc2l0aW9uQm9hcmRbY29vcmRPbmVdW2Nvb3JkVHdvXSA9IFwiSGl0XCJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iai5uYXZ5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5uYXZ5W2ldLnNoaXA9PT0gc2hpcEltcGFjdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmoubmF2eVtpXS5pbXBhY3QoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3Bwb3NpdGlvbkJvYXJkLCAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wcG9zaXRpb25Cb2FyZFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3Bwb3NpdGlvbkJvYXJkW2Nvb3JkT25lXVtjb29yZFR3b10gPSBcIk1pc3NcIlxuICAgICAgICAgICAgICAgIHJldHVybiBvcHBvc2l0aW9uQm9hcmQsIDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgIFxuICAgIH1cbiAgICByZXR1cm4ge25hbWUsIG5hdnksIGdhbWVCb2FyZCwgYWksIG9wcG9zaXRpb25Cb2FyZCwgZmlyZX1cbn1cblxuZXhwb3J0IHtwbGF5ZXJGYWN0b3J5fSIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKHR5cGUpPT57XG4gICAgbGV0IHNoaXBUeXBlID0gdHlwZVxuICAgIGxldCBzaGlwTGVuZ3RoID0gKCk9PntcbiAgICAgICAgICAgIHN3aXRjaCAoc2hpcFR5cGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDYXJyaWVyXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA1XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIkJhdHRsZXNoaXBcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiRGVzdHJveWVyXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAzXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrICAgIFxuICAgICAgICAgICAgICAgIGNhc2UgXCJTdWJtYXJpbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDNcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIFwiUGF0cm9sIGJvYXRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGhpdCA9IDBcbiAgICBsZXQgaXNTdW5rID0gZmFsc2VcbiAgICBjb25zdCBzaW5rcyA9ICgpPT57XG4gICAgICAgIGlmKGhpdCA9PT0gc2hpcExlbmd0aCgpKXtcbiAgICAgICAgICAgIGlzU3VuayA9IHRydWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGlzU3Vua1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaXNTdW5rID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiBpc1N1bmtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpbXBhY3QgPSAoKT0+e1xuICAgICAgICBoaXQrK1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGhpdCxzaW5rcygpXG4gICAgfVxuICAgIHJldHVybiB7c2hpcDogc2hpcFR5cGUsXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiBzaGlwTGVuZ3RoKCksXG4gICAgICAgICAgICBpbXBhY3QsXG4gICAgICAgICAgICBzaW5rcywgIFxuICAgICAgICAgICAgfSBcbn1cblxuZXhwb3J0IHtzaGlwRmFjdG9yeX1cbiIsImltcG9ydCB7IGNoZWNrV2lubmVyIH0gZnJvbSBcIi4vY2hlY2tXaW5uZXJcIlxuaW1wb3J0IHsgZGlzcGxheVdpbm5lciB9IGZyb20gXCIuLi9kb21FdmVudHMvZGlzcGxheVdpbm5lclwiXG5cbmNvbnN0IGFpRmlyZSA9IChwbGF5ZXJPbmUsIHBsYXllclR3byk9PntcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5XCIpXG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IGBBZG1pcmFsICR7cGxheWVyVHdvLm5hbWV9LCBmaXJlIGF0IHdpbGwhYFxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwbGF5ZXJUd28ub3Bwb3NpdGlvbkJvYXJkKVxuICAgIGNvbnN0IGtleVNlbGVjdGlvbiA9ICgpPT57XG4gICAgICAgbGV0IGtleU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSprZXlzLmxlbmd0aClcbiAgICAgICByZXR1cm4ga2V5c1trZXlOdW1iZXJdXG4gICAgfVxuICAgIGNvbnN0IGluZGV4U2VsZWN0aW9uID0gKCk9Pk1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KVxuICAgIGxldCB4Q29yZCA9IGtleVNlbGVjdGlvbigpXG4gICAgbGV0IHlDb3JkID0gaW5kZXhTZWxlY3Rpb24oKVxuICAgIGxldCBjb29yZGluYXRlcyA9IHtbeENvcmRdOlt5Q29yZF19XG4gICAgICAgIFxuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgaWYgKHBsYXllclR3by5maXJlKGNvb3JkaW5hdGVzLCBwbGF5ZXJPbmUpID09PSAtMSl7XG4gICAgICAgICAgICAgYWlGaXJlKHBsYXllck9uZSwgcGxheWVyVHdvKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4Q29yZH0ke3lDb3JkfWApXG4gICAgICAgICAgICB0aWxlLnRleHRDb250ZW50ID0gXCJYXCJcbiAgICAgICAgICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBgQWRtaXJhbCAke3BsYXllck9uZS5uYW1lfSwgZmlyZSBhdCB3aWxsIWBcbiAgICAgICAgICAgIGlmKGNoZWNrV2lubmVyKHBsYXllck9uZSkgPT09IDUpIHJldHVybiBkaXNwbGF5V2lubmVyKHBsYXllclR3bylcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIFxuICAgICAgICB9XG4gICAgfSw1MDApXG4gICAgcmV0dXJuXG59XG5leHBvcnQge2FpRmlyZX0iLCJjb25zdCBhaVBsYWNlU2hpcCA9IChvYmopPT57XG4gICAgY29uc3QgeEF4aXNQbGFjZXMgPSBbXCJhXCIsXCJiXCIsXCJjXCIsXCJkXCIsXCJlXCIsXCJmXCIsXCJnXCIsXCJoXCIsXCJpXCIsXCJqXCJdXG4gICAgY29uc3QgaG9yaXpvbnRhbENob2ljZSA9KCk9Pk1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKVxuICAgIGNvbnN0IHhBeGlzUGxhY2VzQ2hvaWNlID0gKCk9PntcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqeEF4aXNQbGFjZXMubGVuZ3RoKVxuICAgICAgICBjb25zdCBjaG9pY2UgPSB4QXhpc1BsYWNlc1tpbmRleF1cbiAgICAgICAgcmV0dXJuIGNob2ljZVxuICAgIH1cbiAgICBjb25zdCB5QXhpc0Nob2ljZSA9ICgpPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKG51bWJlcik9PntcbiAgICAgICAgaWYgKG51bWJlciA+PSA1KXJldHVybiBcbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IHtjb3JkOnt9LCBzaGlwOiBvYmoubmF2eVtudW1iZXJdfVxuICAgICAgICAgICAgbGV0IHhBeGlzID0geEF4aXNQbGFjZXNDaG9pY2UoKVxuICAgICAgICAgICAgbGV0IHlBeGlzID0geUF4aXNDaG9pY2UoKVxuICAgICAgICAgICAgbGV0IGhvcml6b250YWwgPSBmYWxzZVxuICAgICAgICAgICAgc3dpdGNoIChob3Jpem9udGFsQ2hvaWNlKCkpe1xuICAgICAgICAgICAgICAgIGNhc2UgMDp7XG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeEF4aXNQbGFjZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoeEF4aXNQbGFjZXNbaV09PT0geEF4aXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoIGxldCBqID0gMDsgaiA8IG9iai5uYXZ5W251bWJlcl0uc2hpcExlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuY29yZFt4QXhpc1BsYWNlc1tpK2pdXSA9IFt5QXhpc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuaG9yaXpvbnRhbCA9aG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmdhbWVCb2FyZC5jaGVja2F2YWlsYWJsZShjb29yZGluYXRlcyk9PT0gZmFsc2UpcmV0dXJuIHBsYWNlU2hpcChudW1iZXIpICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nYW1lQm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcChudW1iZXIrMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMTp7XG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWwgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGxldCB5QXhpc0FyciA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLm5hdnlbbnVtYmVyXS5zaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgeUF4aXNBcnIucHVzaCh5QXhpcytpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmNvcmRbeEF4aXNdID0geUF4aXNBcnJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuaG9yaXpvbnRhbCA9IGhvcml6b250YWxcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5nYW1lQm9hcmQuY2hlY2thdmFpbGFibGUoY29vcmRpbmF0ZXMpPT09IGZhbHNlKXJldHVybiBwbGFjZVNoaXAobnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nYW1lQm9hcmQucGxhY2VTaGlwKGNvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsYWNlU2hpcChudW1iZXIrMSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGxhY2VTaGlwKDApXG4gICAgXG59XG5cbmV4cG9ydCB7YWlQbGFjZVNoaXB9IiwiY29uc3QgY2hlY2tXaW5uZXIgPSAocGxheWVyKT0+e1xuICAgIGxldCBzaGlwc1N1bmsgPSAwXG4gICAgcGxheWVyLm5hdnkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC5zaW5rcygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzaGlwc1N1bmsrK1xuXG4gICAgICAgICAgICByZXR1cm4gc2hpcHNTdW5rXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gc2hpcHNTdW5rXG5cbiAgICB9KTtcbiAgICByZXR1cm4gc2hpcHNTdW5rXG59XG5cbmV4cG9ydCB7Y2hlY2tXaW5uZXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBzdGFydCB9IGZyb20gXCIuL2RvbUV2ZW50cy9zaWdudXBcIjtcbmNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydEJ1dHRvblwiKVxuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==