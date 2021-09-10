import type { PokeListResponse } from './pokemonTypes.js';

const truePageSize = 10;

export async function usefetchPokemonsList(
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
