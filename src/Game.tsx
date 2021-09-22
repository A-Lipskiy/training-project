import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Ball } from './Ball';
import { PlayerCard } from './PlayerCard';

type TimeoutResult = ReturnType<typeof setTimeout> | null;

type Props = {
  pokemonOne: string;
  pokemonTwo: string;
};
type BallCoords = [number, number];

const PLAYER_COORD_INTERVAL = 40;
const PLAYER_COORD_STEP = 5;

function calculateCoordMinusStep(oldCoord: number): number {
  if (oldCoord > 0) return oldCoord - PLAYER_COORD_STEP;
  return oldCoord;
}

function calculateCoordPlusStep(oldCoord: number): number {
  if (oldCoord < 100) return oldCoord + PLAYER_COORD_STEP;
  return oldCoord;
}
export function Game({ pokemonOne, pokemonTwo }: Props): JSX.Element {
  const [ballCoords] = useState<BallCoords>([50, 50]);
  const [ballCoordY, ballCoordX] = ballCoords;
  const [player1Coord, setPlayer1Coord] = useState(50);
  const [player2Coord, setPlayer2Coord] = useState(50);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    let firstPlayerInt: TimeoutResult = null;
    let secondPlayerInt: TimeoutResult = null;

    const handleKeyUp = (e?: KeyboardEvent) => {
      if (!e || (e && ['w', 'W', 's', 'S'].includes(e.key))) {
        if (firstPlayerInt) clearInterval(firstPlayerInt);
        firstPlayerInt = null;
      }
      if (!e || (e && ['ArrowUp', 'ArrowDown'].includes(e.key))) {
        if (secondPlayerInt) clearInterval(secondPlayerInt);
        secondPlayerInt = null;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'w':
        case 'W':
          firstPlayerInt =
            firstPlayerInt ||
            setInterval(() => {
              setPlayer1Coord(calculateCoordMinusStep);
            }, PLAYER_COORD_INTERVAL);

          break;
        case 's':
        case 'S':
          firstPlayerInt =
            firstPlayerInt ||
            setInterval(() => {
              setPlayer1Coord(calculateCoordPlusStep);
            }, PLAYER_COORD_INTERVAL);
          break;
        case 'ArrowUp':
          secondPlayerInt =
            secondPlayerInt ||
            setInterval(() => {
              setPlayer2Coord(calculateCoordMinusStep);
            }, PLAYER_COORD_INTERVAL);
          break;
        case 'ArrowDown':
          secondPlayerInt =
            secondPlayerInt ||
            setInterval(() => {
              setPlayer2Coord(calculateCoordPlusStep);
            }, PLAYER_COORD_INTERVAL);
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
        handleKeyUp();
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
