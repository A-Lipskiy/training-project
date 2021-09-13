import { BallSpinner } from 'react-spinners-kit';
import { useFetchPokemon } from './useFetchPokemon';
export function PokemonCard({
  name,
}: {
  name: string | undefined;
}): JSX.Element {
  const { isLoading, pokemon } = useFetchPokemon(name);

  if (isLoading || !pokemon)
    return (
      <div className="card-wrapper">
        <BallSpinner size={200} color="#514964" />
      </div>
    );

  return (
    <div className="card-wrapper">
      <span className="block-span">Name: {pokemon.name}</span>
      <span className="block-span">Height: {pokemon.height}</span>
      <span className="block-span">Weight: {pokemon.weight}</span>
      <span className="block-span">
        Base experience: {pokemon.base_experience}
      </span>
      <img
        className="pokemon-image"
        src={pokemon.sprites.other.dream_world.front_default}
      ></img>
    </div>
  );
}
