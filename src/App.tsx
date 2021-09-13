import { PokemonsList } from './PokemonsList';
import { HeaderText } from './HeaderText';
import './App.css';

export function App(): JSX.Element {
  return (
    <div className="App">
      <HeaderText />
      <PokemonsList />
    </div>
  );
}
