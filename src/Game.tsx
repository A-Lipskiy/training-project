import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
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
  const [player1Coord, setPlayer1Coord] = useState(50);
  const [player2Coord, setPlayer2Coord] = useState(50);

  const changePlayerCoords = useCallback((e: KeyboardEvent) => {
    if (e.key === 'w' || e.key === 'W') {
      setPlayer1Coord((player1Coord) =>
        player1Coord > 0 ? player1Coord - 1 : player1Coord
      );
    } else if (e.key === 's' || e.key === 'S') {
      setPlayer1Coord((player1Coord) =>
        player1Coord < 100 ? player1Coord + 1 : player1Coord
      );
    } else if (e.key === 'ArrowUp') {
      setPlayer2Coord((player2Coord) =>
        player2Coord > 0 ? player2Coord - 1 : player2Coord
      );
    } else if (e.key === 'ArrowDown') {
      setPlayer2Coord((player2Coord) =>
        player2Coord < 100 ? player2Coord + 1 : player2Coord
      );
    }
    setBallCoods({ x: 100, y: 100 });
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', changePlayerCoords);

    return () => {
      document.removeEventListener('keydown', changePlayerCoords);
    };
  }, [changePlayerCoords]);

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
