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

export {aiPlaceShip}