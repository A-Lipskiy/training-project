import { PokemonsList } from './PokemonsList';
import { Link } from 'react-router-dom';

type Props = {
  selectedPokemons: [string, string];
  onChangePokemons: (pokemons: [string, string]) => void;
};
export function MainPage({
  selectedPokemons,
  onChangePokemons,
}: Props): JSX.Element {
  return (
    <div className="page-wrapper">
      <h1 className="header-text">Choose two pokemons</h1>
      <PokemonsList
        selectedPokemons={selectedPokemons}
        onChange={onChangePokemons}
      />
      <Link to={`/game/${selectedPokemons[0]}/${selectedPokemons[1]}`}>
        <button
          className={`button-start-game ${
            selectedPokemons.length === 2 && !selectedPokemons.includes('')
              ? 'button-visible'
              : ''
          }`}
        >
          Start Game
        </button>
      </Link>
    </div>
  );
}
