import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Ball } from './Ball';
import { PlayerCard } from './PlayerCard';

type TimeoutResult = ReturnType<typeof setTimeout> | null;

type Props = {
  pokemonOne: string;
  pokemonTwo: string;
};
export function Game({ pokemonOne, pokemonTwo }: Props): JSX.Element {
  const [ballCoordY] = useState(50);
  const [ballCoordX] = useState(50);
  const [player1Coord, setPlayer1Coord] = useState(50);
  const [player2Coord, setPlayer2Coord] = useState(50);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const interval = 40;
  const step = 5;

  function calculateCoordMinusStep(oldCoord: number): number {
    if (oldCoord > 0) return oldCoord - step;
    return oldCoord;
  }

  function calculateCoordPlusStep(oldCoord: number): number {
    if (oldCoord < 100) return oldCoord + step;
    return oldCoord;
  }
  useEffect(() => {
    let firstPlayerInt: TimeoutResult = null;
    let secondPlayerInt: TimeoutResult = null;

    const handleKeyUp = () => {
      if (firstPlayerInt) clearInterval(firstPlayerInt);
      firstPlayerInt = null;
      if (secondPlayerInt) clearInterval(secondPlayerInt);
      secondPlayerInt = null;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'w':
        case 'W':
          firstPlayerInt =
            firstPlayerInt ||
            setInterval(() => {
              setPlayer1Coord((player1Coord) =>
                calculateCoordMinusStep(player1Coord)
              );
            }, interval);

          break;
        case 's':
        case 'S':
          firstPlayerInt =
            firstPlayerInt ||
            setInterval(() => {
              setPlayer1Coord((player1Coord) =>
                calculateCoordPlusStep(player1Coord)
              );
            }, interval);
          break;
        case 'ArrowUp':
          secondPlayerInt =
            secondPlayerInt ||
            setInterval(() => {
              setPlayer2Coord((player2Coord) =>
                calculateCoordMinusStep(player2Coord)
              );
            }, interval);
          break;
        case 'ArrowDown':
          secondPlayerInt =
            secondPlayerInt ||
            setInterval(() => {
              setPlayer2Coord((player2Coord) =>
                calculateCoordPlusStep(player2Coord)
              );
            }, interval);
          break;
        default:
          break;
      }
    };
    if (isGameStarted) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [isGameStarted]);

  if (pokemonOne == '' || pokemonTwo == '') return <Redirect to="/" />;
  return (
    <div className="page-wrapper">
      <Link to="/">
        <button className="button-close-game">Close game</button>
      </Link>
      <h1 className="header-text">Pokemons ping-pong</h1>
      <div className="ui-field">
        <div className="dotted-line"></div>
        <div className="game-field">
          <Ball x={ballCoordX} y={ballCoordY} />
        </div>
        <div className="cards-wrapper">
          <PlayerCard
            y={player1Coord}
            pokemonName={pokemonOne}
            playerCardType="left"
          />
          <PlayerCard
            y={player2Coord}
            pokemonName={pokemonTwo}
            playerCardType="right"
          />
        </div>
      </div>
      <button
        className={`button-start-game ${
          !isGameStarted ? 'button-visible' : ''
        }`}
        onClick={() => setIsGameStarted(true)}
      >
        Start Game
      </button>
    </div>
  );
}
