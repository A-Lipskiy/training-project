import { PokemonsList } from './PokemonsList';
import './App.css';
import { useState } from 'react';

export function App(): JSX.Element {
  const [selectedPokemons, setSelectedPokemons] = useState<string[]>([]);

  return (
    <div className="App">
      <h1 className="header-text">Choose two pokemons</h1>
      <PokemonsList
        selectedPokemons={selectedPokemons}
        onChange={setSelectedPokemons}
      />
    </div>
  );
}
