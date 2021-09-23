import { Game } from './Game';
import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { MainPage } from './MainPage';

export function App(): JSX.Element {
  const [selectedPokemons, setSelectedPokemons] = useState<[string, string]>([
    '',
    '',
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/game/:pokemonOne/:pokemonTwo"
            render={({ match }) => <Game {...match.params} />}
          />
          <Route
            path="/"
            render={() => (
              <MainPage
                selectedPokemons={selectedPokemons}
                onChangePokemons={setSelectedPokemons}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
