import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Ball } from './Ball';
import { PlayerCard } from './PlayerCard';

type Props = {
  pokemons: [string, string];
};
type Coords = {
  x: number;
  y: number;
};
export function Game({ pokemons }: Props): JSX.Element {
  const [ballCoords, setBallCoods] = useState<Coords>({ x: 50, y: 50 });
  const [player1Coord, setPlayer1Coord] = useState(0);
  const [player2Coord, setPlayer2Coord] = useState(100);

  function changePlayerCoords(e: KeyboardEvent): void {
    console.log(e.key);
    // Change state here
    setBallCoods({ x: 100, y: 100 });
    setPlayer1Coord(50);
    setPlayer2Coord(50);
  }
  useEffect(() => {
    document.addEventListener('keydown', changePlayerCoords);

    return () => {
      document.removeEventListener('keydown', changePlayerCoords);
    };
  }, []);

  if (pokemons.includes('')) return <Redirect to="/" />;
  return (
    <div className="page-wrapper">
      <Link to="/">
        <button className="button-close-game">Close game</button>
      </Link>
      <h1 className="header-text">Pokemons ping-pong</h1>
      <div className="ui-field">
        <div className="dotted-line"></div>
        <div className="game-field">
          <Ball x={ballCoords.x} y={ballCoords.y} />
        </div>
        <div className="cards-wrapper">
          <PlayerCard
            y={player1Coord}
            pokemonName={pokemons[0]}
            playerCardType="left"
          />
          <PlayerCard
            y={player2Coord}
            pokemonName={pokemons[1]}
            playerCardType="right"
          />
        </div>
      </div>
    </div>
  );
}
