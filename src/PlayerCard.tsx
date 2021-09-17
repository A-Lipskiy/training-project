import { useFetchPokemon } from './useFetchPokemon';
import { BallSpinner } from 'react-spinners-kit';
type Props = {
  y: number;
  x: number;
  name: string;
};

export function PlayerCard({ y, x, name }: Props): JSX.Element {
  const { isLoading, pokemon } = useFetchPokemon(name);
  if (isLoading || !pokemon)
    return (
      <div className="player-card" style={{ top: `${y}px`, left: `${x}px` }}>
        <BallSpinner size={70} color="#6c5b7b" />
      </div>
    );
  return (
    <div className="player-card" style={{ top: `${y}px`, left: `${x}px` }}>
      {' '}
      <img
        className="player-card-image"
        src={pokemon.sprites.other.dream_world.front_default}
      ></img>
    </div>
  );
}
