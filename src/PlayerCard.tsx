import { useFetchPokemon } from './useFetchPokemon';
import { BallSpinner } from 'react-spinners-kit';
import { usePixelCoords } from './usePixelCoords';
type Props = {
  y: number;
  pokemonName: string;
  className: string;
  fieldSize: number;
};

export function PlayerCard({
  y,
  pokemonName,
  className,
  fieldSize,
}: Props): JSX.Element {
  const { isLoading, pokemon } = useFetchPokemon(pokemonName);
  const pixelCoordY = usePixelCoords({ elemName: 'player', fieldSize, y });
  if (isLoading || !pokemon)
    return (
      <div className={className} style={{ top: `${pixelCoordY.y}` }}>
        <BallSpinner size={70} color="#6c5b7b" />
      </div>
    );
  return (
    <div className={className} style={{ top: `${pixelCoordY.y}` }}>
      <img
        className="player-card-image"
        src={pokemon.sprites.other.dream_world.front_default}
      ></img>
    </div>
  );
}
