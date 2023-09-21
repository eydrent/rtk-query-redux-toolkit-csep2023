"use client";
import { useGetPokemonByNameQuery } from "@/state/api/pokemonAPI";

export default function Home() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("pikachu");
  console.log("Hola DATA ------", data);

  // const { species, id, weight } = data;
  return (
    <main>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <h3>{data.id}</h3>
          <h3>{data.weight}</h3>
        </>
      ) : null}
    </main>
  );
}
