import { Pokemon } from "./types.ts";

export const resolvers = {
    Pokemon: {
        id: (parent: Pokemon) => {
            console.log(parent.id)
            console.log(parent.name)
        }
    },

    Query: {
        pokemon: async(
            _:unknown,
            args: {name: string}
        ):Promise<JSON>=> {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + args.name)
            return await response.json()
        }
    }
}