import { Pokemon, Abilities,Moves } from "./types.ts";

export const resolvers = {
    Abilities: {
        name: (parent: Abilities) => parent.ability.name,
        effect: async(parent: Abilities) => {
            const response = await fetch(parent.ability.url)
            const aux = await response.json()
            return aux.effect_entries.find((e: { language: { name: string } }) => e.language.name === "en").short_effect
        }
    },
    Moves: {
        name: (parent: Moves) => parent.move.name,
        power: async(parent: Moves) => {
            const response = await fetch(parent.move.url)
            const aux = await response.json()
            return aux.power
        }
    },
    Pokemon: {
        id: (parent: Pokemon) => parent.id,
        name: (parent: Pokemon) => parent.name,
        abilities: (parent: Pokemon) => {
            return parent.abilities
        }
    },

    Query: {
        pokemon: async(
            _:unknown,
            args: {name: string}
        ):Promise<JSON> => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + args.name)
            return await response.json()
        }
    }
}