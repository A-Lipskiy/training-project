import type { PokeListResponse } from './pokemonTypes.js';
import { truePageSize } from './PokemonsList';
import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';

const guard = (rJSON: unknown): rJSON is PokeListResponse =>
  typeof rJSON === 'object' &&
  rJSON !== null &&
  'count' in rJSON &&
  'results' in rJSON;

async function fetchPokemonsList(
  pageNumber = 0
): Promise<PokeListResponse & { pageNumber: number }> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${
      pageNumber * truePageSize
    }&limit=${truePageSize}`
  );

  if (!response.ok) throw new Error('Fetching error');
  if (response.text.toString() === '') throw new Error('Response is empty');

  const rJSON: unknown = await response.json();
  if (guard(rJSON)) {
    return {
      count: rJSON.count,
      results: rJSON.results,
      pageNumber,
    };
  }

  throw new Error('Fetched Invalid Data!');
}

const queryFunction = async ({ pageParam = 0 }: { pageParam?: number }) => {
  return fetchPokemonsList(pageParam);
};

export const useFetchPokemonsPages = (): UseInfiniteQueryResult<
  PokeListResponse,
  Error
> =>
  useInfiniteQuery(['pokemon-list'], queryFunction, {
    getNextPageParam: (lastPage) => {
      const page = lastPage.pageNumber + 1;
      if (page * truePageSize < lastPage.count) return lastPage.pageNumber + 1;
      return undefined;
    },
  });
