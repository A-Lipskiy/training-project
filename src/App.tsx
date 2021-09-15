import { PokemonsList } from './PokemonsList';
import { Game } from './Game';
import './App.css';
import { useState } from 'react';

export function App(): JSX.Element {
  const [selectedPokemons, setSelectedPokemons] = useState<string[]>([]);
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <div className="App">
      {isGameOpen ? (
        <Game names={selectedPokemons} setIsGameOpen={setIsGameOpen}></Game>
      ) : (
        <div className="main-page-wrapper">
          <h1 className="header-text">Choose two pokemons</h1>
          <PokemonsList
            selectedPokemons={selectedPokemons}
            onChange={setSelectedPokemons}
          />
          <input
            type="button"
            value="Start Game"
            className={`button-start-game ${
              selectedPokemons.length === 2 ? 'button-visible' : ''
            }`}
            onClick={() => setIsGameOpen(true)}
          ></input>
        </div>
      )}
    </div>
  );
}
