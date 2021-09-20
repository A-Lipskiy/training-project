import { useFetchPokemon } from './useFetchPokemon';
import { BallSpinner } from 'react-spinners-kit';
import { calculatePixelCoords } from './calculatePixelCoords';

type Props = {
  y: number;
  pokemonName: string;
  playerCardType: 'left' | 'right';
  fieldSize: number;
};

export function PlayerCard({
  y,
  pokemonName,
  playerCardType,
  fieldSize,
}: Props): JSX.Element {
  const { isLoading, pokemon } = useFetchPokemon(pokemonName);
  const pixelCoordY = calculatePixelCoords({
    elemName: 'player',
    fieldSize,
    y,
  });
  if (isLoading || !pokemon)
    return (
      <div
        className={`${playerCardType}-card`}
        style={{ top: `${pixelCoordY.y}` }}
      >
        <BallSpinner size={70} color="#6c5b7b" />
      </div>
    );
  return (
    <div
      className={`${playerCardType}-card`}
      style={{ top: `${pixelCoordY.y}` }}
    >
      <img
        className="player-card-image"
        src={pokemon.sprites.other.dream_world.front_default}
      ></img>
    </div>
  );
}
