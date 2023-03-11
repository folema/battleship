import { shipFactory } from "../src/factories/shipFactory"
const navy = [shipFactory("Carrier"), shipFactory("Battleship"), shipFactory("Destroyer"), shipFactory("Submarine"), shipFactory("Patrol boat")]
test.skip("shiptype = Carrier", ()=>{
    expect(navy[0].ship).toBe("Carrier")
})
test.skip("Battleship length = 4", ()=>{
    expect(navy[1].shipLength).toBe(4)
})
test.skip("Destroyer impact = 1", ()=>{
    expect(navy[2].impact()).toEqual(1)
})
test.skip("Patrol boat is not sunk", ()=>{
    expect(navy[4].sinks()).toEqual(false)
})

