export type Abilities = {
    ability: {
        name: string,
        url: string
    }
}

export type Moves = {
    move: {
        name: string,
        url: string     
    }
     
}
export type Pokemon = {
    id: string,
    name: string,
    abilities: Abilities[],
    moves: Moves[]
}