import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Ball } from './Ball';
import { PlayerCard } from './PlayerCard';

type TimeoutResult = ReturnType<typeof setTimeout> | null;

type Props = {
  pokemonOne: string;
  pokemonTwo: string;
};

const PLAYER_COORD_INTERVAL = 40;
const BALL_COORD_INTERVAL = 30;
const PLAYER_COORD_STEP = 5;

function calculateCoordMinusStep(oldCoord: number): number {
  return oldCoord > 0 ? oldCoord - PLAYER_COORD_STEP : oldCoord;
}

function calculateCoordPlusStep(oldCoord: number): number {
  return oldCoord < 100 ? oldCoord + PLAYER_COORD_STEP : oldCoord;
}
export function Game({ pokemonOne, pokemonTwo }: Props): JSX.Element {
  const [ballCoords, setBallCoords] = useState([50, 50]);
  const [ballCoordY, ballCoordX] = ballCoords;
  const [ballStep, setBallStep] = useState([1, 2]);
  const [ballStepY, ballStepX] = ballStep;
  const [player1Coord, setPlayer1Coord] = useState(50);
  const [player2Coord, setPlayer2Coord] = useState(50);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    let firstPlayerInt: TimeoutResult = null;
    let secondPlayerInt: TimeoutResult = null;

    const handleKeyUp = (e?: KeyboardEvent) => {
      if (!e || ['w', 'W', 's', 'S'].includes(e.key)) {
        if (firstPlayerInt) clearInterval(firstPlayerInt);
        firstPlayerInt = null;
      }
      if (!e || ['o', 'O', 'l', 'L'].includes(e.key)) {
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
        case 'o':
        case 'O':
          secondPlayerInt =
            secondPlayerInt ||
            setInterval(() => {
              setPlayer2Coord(calculateCoordMinusStep);
            }, PLAYER_COORD_INTERVAL);
          break;
        case 'l':
        case 'L':
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

  useEffect(() => {
    let BallInt: TimeoutResult = null;

    const handleEndBallMovement = () => {
      if (BallInt) clearInterval(BallInt);
      BallInt = null;
    };

    const handleStartBallMovement = () => {
      BallInt =
        BallInt ||
        setInterval(
          () => setBallCoords(([y, x]) => [y + ballStepY, x + ballStepX]),
          BALL_COORD_INTERVAL
        );
    };
    if (isGameStarted) handleStartBallMovement();
    return () => {
      handleEndBallMovement();
    };
  }, [ballStepX, ballStepY, isGameStarted]);

  useEffect(() => {
    if (
      ballCoordX >= 100 ||
      ballCoordX <= 0 ||
      ballCoordY >= 100 ||
      ballCoordY <= 0
    )
      setBallStep(([prevY, prevX]) => [
        ballCoordY >= 100 || ballCoordY <= 0 ? -prevY : prevY,
        ballCoordX >= 100 || ballCoordX <= 0 ? -prevX : prevX,
      ]);
  }, [ballCoordX, ballCoordY]);

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
