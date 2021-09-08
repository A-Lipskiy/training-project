import { useState, useEffect } from 'react';

type PokeResponse = {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
};

async function fetchPokemon(
  id: number,
  onSetData: (pokemon: PokeResponse) => void
) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
      });
    }
  } catch (e) {
    console.log(e);
  }
}

const useFetchPokemon = (
  id: number | undefined
): { isLoading: boolean; pokemon: PokeResponse | undefined } => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokeResponse | undefined>();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      fetchPokemon(id, (poke) => {
        setPokemon(poke);
        setIsLoading(false);
      });
    }
  }, [id]);

  return { isLoading, pokemon };
};

export function PokemonCard({ id }: { id: number }): JSX.Element {
  const { isLoading, pokemon } = useFetchPokemon(id);

  if (isLoading || !pokemon) return <div>LOADING!</div>;

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
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      ></img>
    </div>
  );
}
