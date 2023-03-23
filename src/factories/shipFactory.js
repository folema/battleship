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

export {shipFactory}
