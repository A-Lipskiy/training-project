import { useFetchPokemon } from './useFetchPokemon';
import { BallSpinner } from 'react-spinners-kit';

type Props = {
  y: number;
  pokemonName: string;
  playerCardType: 'left' | 'right';
};

export function PlayerCard({
  y,
  pokemonName,
  playerCardType,
}: Props): JSX.Element {
  const { isLoading, data: pokemon } = useFetchPokemon(pokemonName);
  if (isLoading || !pokemon)
    return (
      <div className={`${playerCardType}-card`} style={{ top: `${y}%` }}>
        <BallSpinner size={70} color="#6c5b7b" />
      </div>
    );
  return (
    <div className={`${playerCardType}-card`} style={{ top: `${y}%` }}>
      <img
        className="player-card-image"
        src={pokemon.sprites.other.dream_world.front_default}
      ></img>
    </div>
  );
}
