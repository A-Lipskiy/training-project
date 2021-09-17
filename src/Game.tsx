import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Ball } from './Ball';
import { PlayerCard } from './PlayerCard';

type Props = {
  names: string[];
};
type Coords = {
  x: number;
  y: number;
};
const initialCoords = { x: 0, y: 0 };

export function Game({ names }: Props): JSX.Element {
  const [fieldDivElem, setFieldDivElem] = useState<HTMLDivElement | null>(null);
  const [wrapperDivElem, setWrapperElem] = useState<HTMLDivElement | null>(
    null
  );
  const [fieldSize, setFieldSize] = useState(0);
  const [wrapperLength, setWrapperLength] = useState(0);
  const [ballCoords, setBallCoods] = useState<Coords>(initialCoords);
  const [player1Coords, setPlayer1Coods] = useState<Coords>(initialCoords);
  const [player2Coords, setPlayer2Coods] = useState<Coords>(initialCoords);

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
    setBallCoods({
      x: fieldSize / 2 - ((fieldSize / 100) * 5) / 2,
      y: fieldSize / 2 - ((fieldSize / 100) * 5) / 2,
    });
    setPlayer1Coods({
      x: 0,
      y: (fieldSize * 0.7) / 2,
    });
    setPlayer2Coods({
      x: wrapperLength * 0.9,
      y: (fieldSize * 0.7) / 2,
    });
  }, [fieldSize, wrapperLength]);
  useEffect(() => {
    document.addEventListener('keydown', changePlayerCoords);

    return () => {
      document.removeEventListener('keydown', changePlayerCoords);
    };
  }, []);

  return (
    <div>
      <Link to="/">
        {''}
        <button className="button-close-game">Close game</button>
      </Link>
      <h1 className="header-text">Pokemons ping-pong</h1>
      {names.length === 2 ? (
        <div ref={setWrapperElem} className="game-wrapper">
          <div ref={setFieldDivElem} className="field">
            <div className="dotted-line"></div>
            <Ball x={ballCoords.x} y={ballCoords.y} />
          </div>
          <PlayerCard
            y={player1Coords.y}
            x={player1Coords.x}
            name={names[0]}
          ></PlayerCard>
          <PlayerCard
            y={player2Coords.y}
            x={player2Coords.x}
            name={names[1]}
          ></PlayerCard>
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
}
