import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Ball } from './Ball';
import { PlayerCard } from './PlayerCard';

type Props = {
  names: string[];
};

export function Game({ names }: Props): JSX.Element {
  const [fieldDivElem, setFieldDivElem] = useState<HTMLDivElement | null>(null);
  const [fieldSize, setFieldSize] = useState(0);

  useEffect(() => {
    if (fieldDivElem) {
      setFieldSize(fieldDivElem.offsetWidth);
    }
  }, [fieldDivElem]);
  {
    console.log(-fieldSize - 110);
  }
  return (
    <div>
      <Link to="/">
        {''}
        <button className="button-close-game">Close game</button>
      </Link>
      <h1 className="header-text">Pokemons ping-pong</h1>
      {names.length === 2 ? (
        <div ref={setFieldDivElem} className="field">
          <div className="dotted-line"></div>
          <PlayerCard
            y="0"
            x="-110"
            name={names[0]}
            keyCodeUp={1}
            keyCodeDowm={2}
          ></PlayerCard>
          <PlayerCard
            y="0"
            x={`${fieldSize}`}
            name={names[1]}
            keyCodeUp={3}
            keyCodeDowm={4}
          ></PlayerCard>
          <Ball x="50" y="50" />
        </div>
      ) : (
        <h1 className="error-message">Select pokemons first</h1>
      )}
    </div>
  );
}
