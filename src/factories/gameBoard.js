const gameboard = ()=>{
    let board = {a: [0,1,2,3,4,5,6,7,8,9],
        b: [0,1,2,3,4,5,6,7,8,9],
        c: [0,1,2,3,4,5,6,7,8,9],
        d: [0,1,2,3,4,5,6,7,8,9],
        e: [0,1,2,3,4,5,6,7,8,9],
        f: [0,1,2,3,4,5,6,7,8,9],
        h: [0,1,2,3,4,5,6,7,8,9],
        i: [0,1,2,3,4,5,6,7,8,9],
        j: [0,1,2,3,4,5,6,7,8,9]}
    const placeShip = (obj)=>{
        let available = true
        let coordKeys = Object.keys(obj.cord)
        coordKeys.forEach((key)=>{
            if (!checkavailable(key, obj.cord[key])){ available = false 
                return available}
        })
        if (available){
            coordKeys.forEach((key)=>{
                board[key][obj.cord[key]] = obj.ship.ship
            })
            
        }
        else return "Not available"
    }
    const checkavailable =(key,index)=>{
        if(isNaN(board[key][index]))return false
        else return true
    }
    return{board, placeShip}
}

export {gameboard}



