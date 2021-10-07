import type { PokeResponse } from './pokemonTypes.js';
import { useQuery, UseQueryResult } from 'react-query';

const guard = (rJSON: unknown): rJSON is PokeResponse =>
  typeof rJSON === 'object' &&
  rJSON !== null &&
  'name' in rJSON &&
  'height' in rJSON &&
  'weight' in rJSON &&
  'base_experience' in rJSON;

async function fetchPokemon(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) throw new Error('Fetching error');
  if (response.text.toString() === '') throw new Error('Response is empty');

  const rJSON: unknown = await response.json();
  if (guard(rJSON))
    return {
      name: rJSON.name,
      height: rJSON.height,
      weight: rJSON.weight,
      base_experience: rJSON.base_experience,
      sprites: rJSON.sprites,
    };
}

export const useFetchPokemon = (
  name: string | undefined
): UseQueryResult<PokeResponse, Error> =>
  useQuery(
    ['pokemon', name],
    () => {
      if (!name) throw new Error('No pokemon name');
      return fetchPokemon(name);
    },
    {
      enabled: !!name,
    }
  );
