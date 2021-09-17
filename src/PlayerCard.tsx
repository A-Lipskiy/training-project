import { useFetchPokemon } from './useFetchPokemon';
import { BallSpinner } from 'react-spinners-kit';
type Props = {
  y: number;
  pokemonName: string;
  className: string;
};

export function PlayerCard({ y, pokemonName, className }: Props): JSX.Element {
  const { isLoading, pokemon } = useFetchPokemon(pokemonName);
  if (isLoading || !pokemon)
    return (
      <div className={className} style={{ top: `${y}px` }}>
        <BallSpinner size={70} color="#6c5b7b" />
      </div>
    );
  return (
    <div className={className} style={{ top: `${y}px` }}>
      <img
        className="player-card-image"
        src={pokemon.sprites.other.dream_world.front_default}
      ></img>
    </div>
  );
}
