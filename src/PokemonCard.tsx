import { useState } from 'react';
import { BallSpinner } from 'react-spinners-kit';
import { useFetchPokemon } from './useFetchPokemon';
export function PokemonCard({
  name,
}: {
  name: string | undefined;
}): JSX.Element {
  const { isLoading, pokemon } = useFetchPokemon(name);
  const [selectedPokemons, setSelectedPokemons] = useState<
    string[] | unknown[]
  >([]);
  if (isLoading || !pokemon)
    return (
      <div className="card-wrapper">
        <BallSpinner size={200} color="#f8b195" />
      </div>
    );
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    let selectedPokemonName: string | undefined;
    if ((e?.target as HTMLElement).className === 'card-wrapper') {
      selectedPokemonName = (
        e?.target as HTMLElement
      ).firstChild?.textContent?.split(' ')[1];
    } else {
      selectedPokemonName = (
        e?.target as HTMLElement
      ).parentNode?.firstChild?.textContent?.split(' ')[1];
    }

    if (typeof selectedPokemonName !== undefined) {
      setSelectedPokemons((oldPages) => {
        const result = [...oldPages];

        result.push(selectedPokemonName);

        return result;
      });
    }
    console.log(selectedPokemons);
  }
  return (
    <div className="card-wrapper" onClick={handleClick}>
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
