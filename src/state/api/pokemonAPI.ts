import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonM } from "./pokemon.model";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  // refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
