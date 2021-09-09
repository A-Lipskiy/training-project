import { useState, useEffect } from 'react';
import { BallSpinner } from 'react-spinners-kit';

type PokeResponse = {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: { other: { dream_world: { front_default: string } } };
};

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

const useFetchPokemon = (
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

export function PokemonCard({
  name,
}: {
  name: string | undefined;
}): JSX.Element {
  const { isLoading, pokemon } = useFetchPokemon(name);

  if (isLoading || !pokemon)
    return (
      <div className="cardWrapper">
        <BallSpinner size={200} color="#514964" />
      </div>
    );

  return (
    <div className="cardWrapper">
      <span>Name: {pokemon.name}</span>
      <br></br>
      <span>Height: {pokemon.height}</span>
      <br></br>
      <span>Weight: {pokemon.weight}</span>
      <br></br>
      <span>Base experience: {pokemon.base_experience}</span>
      <br></br>
      <img src={pokemon.sprites.other.dream_world.front_default}></img>
    </div>
  );
}
