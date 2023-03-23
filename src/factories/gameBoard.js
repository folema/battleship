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

export {gameboard}



