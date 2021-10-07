import type { PokeListResponse } from './pokemonTypes.js';
import { POKEMON_LIST_PAGE_SIZE } from './PokemonsList';
import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query';

const isPokeListResponse = (rJSON: unknown): rJSON is PokeListResponse =>
  typeof rJSON === 'object' &&
  rJSON !== null &&
  'count' in rJSON &&
  'results' in rJSON;

async function fetchPokemonsList(
  pageNumber = 0
): Promise<PokeListResponse & { pageNumber: number }> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${
      pageNumber * POKEMON_LIST_PAGE_SIZE
    }&limit=${POKEMON_LIST_PAGE_SIZE}`
  );

  if (!response.ok) throw new Error('Fetching error');
  if (response.text.toString() === '') throw new Error('Response is empty');

  const rJSON: unknown = await response.json();
  if (isPokeListResponse(rJSON)) {
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
      return page * POKEMON_LIST_PAGE_SIZE < lastPage.count
        ? lastPage.pageNumber + 1
        : undefined;
    },
  });
