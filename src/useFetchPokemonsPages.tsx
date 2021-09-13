import { useEffect } from 'react';
import type { PokeListResponse } from './pokemonTypes.js';
import { truePageSize } from './PokemonsList';

async function fetchPokemonsList(
  pageNumber: number
): Promise<{ count: number; results: Array<{ name: string; url: string }> }> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        pageNumber * truePageSize
      }&limit=${truePageSize}`
    );
    const rJSON: unknown = await response.json();
    const guard = (rJSON: unknown): rJSON is PokeListResponse =>
      typeof rJSON === 'object' &&
      rJSON !== null &&
      'count' in rJSON &&
      'results' in rJSON;
    if (guard(rJSON)) {
      const page = {
        count: rJSON.count,
        results: rJSON.results,
      };
      return page;
    }
  } catch (e) {
    console.log(e);
  }
  throw new Error(`Can't fetch page ${pageNumber}`);
}
export const useFetchPokemonsPages = async (
  pagesToUpload: number[],
  setPages: React.Dispatch<React.SetStateAction<PokeListResponse[]>>,
  curentLastPage: number,
  pages: PokeListResponse[],
  setPagesToUpload: React.Dispatch<React.SetStateAction<number[]>>
): Promise<PokeListResponse[] | undefined> => {
  useEffect(() => {
    const pagesToUpload = new Array<number>(curentLastPage - pages.length)
      .fill(pages.length)
      .map((length, index) => length + index);

    setPagesToUpload(pagesToUpload);
  }, [curentLastPage, pages, setPagesToUpload]);

  try {
    const pokemonsPagesPromise = pagesToUpload.map(async (pageNumber) => {
      const pokemons = await fetchPokemonsList(pageNumber);

      return {
        pageNumber,
        pokemons,
      };
    });

    const pokemonsPages = await Promise.all(pokemonsPagesPromise);
    if (pagesToUpload.length === 0) return;
    setPages((oldPages) => {
      const result = [...oldPages];

      for (const { pokemons, pageNumber } of pokemonsPages) {
        if (result[pageNumber]) result[pageNumber] = pokemons;
        else result.push(pokemons);
      }

      return result;
    });
  } catch (e) {
    console.log({ e });
  }
};
