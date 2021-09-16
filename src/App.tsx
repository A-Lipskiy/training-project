import { PokemonsList } from './PokemonsList';
import { Game } from './Game';
import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';

export function App(): JSX.Element {
  const [selectedPokemons, setSelectedPokemons] = useState<string[]>([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="page-wrapper">
                <h1 className="header-text">Choose two pokemons</h1>
                <PokemonsList
                  selectedPokemons={selectedPokemons}
                  onChange={setSelectedPokemons}
                />
                <Link to="/game">
                  <button
                    className={`button-start-game ${
                      selectedPokemons.length === 2 ? 'button-visible' : ''
                    }`}
                  >
                    Start Game
                  </button>
                </Link>
              </div>
            )}
          />
          <Route
            path="/game"
            render={() => (
              <div className="page-wrapper">
                {' '}
                <Game names={selectedPokemons}></Game>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
//
