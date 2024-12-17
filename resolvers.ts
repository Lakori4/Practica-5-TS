import { Abilities,Moves } from "./types.ts";

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

    Query: {
        pokemon: async(
            _:unknown,
            args: {nameOrId: string}
        ):Promise<JSON> => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + args.nameOrId)
            return await response.json()
        }
    }
}