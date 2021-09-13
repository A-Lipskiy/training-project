import { useState, useEffect } from 'react';
import type { PokeResponse } from './pokemonTypes.js';

async function fetchPokemon(
  name: string,
  onSetData: (pokemon: PokeResponse) => void
) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const rJSON: unknown = await response.json();
    const guard = (rJSON: unknown): rJSON is PokeResponse =>
      typeof rJSON === 'object' &&
      rJSON !== null &&
      'name' in rJSON &&
      'height' in rJSON &&
      'weight' in rJSON &&
      'base_experience' in rJSON;
    if (guard(rJSON)) {
      onSetData({
        name: rJSON.name,
        height: rJSON.height,
        weight: rJSON.weight,
        base_experience: rJSON.base_experience,
        sprites: rJSON.sprites,
      });
    }
  } catch (e) {
    console.log(e);
  }
}

export const useFetchPokemon = (
  name: string | undefined
): { isLoading: boolean; pokemon: PokeResponse | undefined } => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokeResponse | undefined>();

  useEffect(() => {
    let isUnmounted = false;
    if (name) {
      setIsLoading(true);
      fetchPokemon(name, (poke) => {
        if (isUnmounted) return;
        setPokemon(poke);
        setIsLoading(false);
      });
    }
    return () => {
      isUnmounted = true;
    };
  }, [name]);

  return { isLoading, pokemon };
};
