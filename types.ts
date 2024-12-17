export type Abilities = {
    name: string,
    effect: string
}

export type Moves = {
    name: string,
    power: string          
}
export type Pokemon = {
    id: string,
    name: string,
    abilities: Abilities[],
    moves: Moves[]
}