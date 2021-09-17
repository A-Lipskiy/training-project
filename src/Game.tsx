import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Ball } from './Ball';
import { PlayerCard } from './PlayerCard';

type Props = {
  pokemonNames: [string, string];
};
type Coords = {
  x: number;
  y: number;
};
const initialCoords = { x: 100, y: 100 };

export function Game({ pokemonNames }: Props): JSX.Element {
  const [fieldDivElem, setFieldDivElem] = useState<HTMLDivElement | null>(null);
  const [wrapperDivElem, setWrapperElem] = useState<HTMLDivElement | null>(
    null
  );
  const [fieldSize, setFieldSize] = useState(0);
  const [wrapperLength, setWrapperLength] = useState(0);
  const [ballCoords, setBallCoods] = useState<Coords>(initialCoords);
  const [player1Coord, setPlayer1Coord] = useState(50);
  const [player2Coord, setPlayer2Coord] = useState(50);

  function changePlayerCoords(e: KeyboardEvent): void {
    console.log(e.key);
    //Change state here
  }
  useEffect(() => {
    if (fieldDivElem) {
      setFieldSize(fieldDivElem.offsetWidth);
    }
  }, [fieldDivElem]);

  useEffect(() => {
    if (wrapperDivElem) {
      setWrapperLength(wrapperDivElem.offsetWidth);
    }
  }, [wrapperDivElem]);

  useEffect(() => {
    document.addEventListener('keydown', changePlayerCoords);

    return () => {
      document.removeEventListener('keydown', changePlayerCoords);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Link to="/">
        <button className="button-close-game">Close game</button>
      </Link>
      <h1 className="header-text">Pokemons ping-pong</h1>

      {pokemonNames.includes('') && <Redirect to="/" />}

      <div ref={setWrapperElem} className="game-wrapper">
        <div ref={setFieldDivElem} className="field">
          <div className="dotted-line"></div>
          <Ball
            x={(ballCoords.x * (fieldSize * 0.95)) / 100}
            y={(ballCoords.y * (fieldSize * 0.95)) / 100}
          />
        </div>
        <PlayerCard
          y={(player1Coord * (fieldSize * 0.7)) / 100}
          pokemonName={pokemonNames[0]}
          className="player1-card"
        ></PlayerCard>
        <PlayerCard
          y={(player2Coord * (fieldSize * 0.7)) / 100}
          pokemonName={pokemonNames[1]}
          className="player2-card"
        ></PlayerCard>
      </div>
    </div>
  );
}
