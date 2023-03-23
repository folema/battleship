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

export {checkWinner}