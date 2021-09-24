import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Ball } from './Ball';
import { PlayerCard } from './PlayerCard';
import { Score } from './Score';

type TimeoutResult = ReturnType<typeof setTimeout> | null;

type Props = {
  pokemonOne: string;
  pokemonTwo: string;
};
type CheckLoseParams = {
  ballX: number;
  ballY: number;
  ballStepX: number;
  ballStepY: number;
  player1Coord: number;
  player2Coord: number;
  minXBorder: number;
  maxXBorder: number;
};
const initialGameState = {
  ballX: 50,
  ballY: 50,
  ballStepX: 2,
  ballStepY: 1,
  player1Coord: 50,
  player2Coord: 50,
};

const PLAYER_COORD_INTERVAL = 40;
const BALL_COORD_INTERVAL = 30;
const PLAYER_COORD_STEP = 5;
const MAX_BALL_OFFSET = 22;
const MIN_BALL_OFFSET = 11;

function calculateCoordMinusStep(oldCoord: number): number {
  return oldCoord > 0 ? oldCoord - PLAYER_COORD_STEP : oldCoord;
}

function calculateCoordPlusStep(oldCoord: number): number {
  return oldCoord < 100 ? oldCoord + PLAYER_COORD_STEP : oldCoord;
}

export function Game({ pokemonOne, pokemonTwo }: Props): JSX.Element {
  const [gameState, setGameState] = useState(initialGameState);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameScore, setGameScore] = useState({
    firstPlayerScore: 0,
    secondPlayerScore: 0,
  });

  function playerLoseCheck({
    ballX,
    ballY,
    ballStepX,
    ballStepY,
    player1Coord,
    player2Coord,
    minXBorder,
    maxXBorder,
  }: CheckLoseParams): boolean {
    if (ballX + ballStepX === minXBorder) {
      if (
        (ballY + ballStepY >= 50 &&
          (ballY + ballStepY + MAX_BALL_OFFSET <= player1Coord ||
            ballY + ballStepY - MIN_BALL_OFFSET >= player1Coord)) ||
        (ballY + ballStepY <= 50 &&
          (ballY + ballStepY + MIN_BALL_OFFSET <= player1Coord ||
            ballY + ballStepY - MAX_BALL_OFFSET >= player1Coord))
      ) {
        setGameScore((prevState) => {
          console.log(prevState);
          return {
            ...prevState,
            secondPlayerScore: prevState.secondPlayerScore++,
          };
        });
        setIsGameStarted(false);
      }
    } else if (ballX + ballStepX === maxXBorder) {
      if (
        (ballY + ballStepY >= 50 &&
          (ballY + ballStepY + MAX_BALL_OFFSET <= player2Coord ||
            ballY + ballStepY - MIN_BALL_OFFSET >= player2Coord)) ||
        (ballY + ballStepY <= 50 &&
          (ballY + ballStepY + MIN_BALL_OFFSET <= player2Coord ||
            ballY + ballStepY - MAX_BALL_OFFSET >= player2Coord))
      ) {
        setGameScore((prevState) => {
          return {
            ...prevState,
            firstPlayerScore: prevState.firstPlayerScore++,
          };
        });
        setIsGameStarted(false);
      }
    }
    return true;
  }

  useEffect(() => {
    let firstPlayerInt: TimeoutResult = null;
    let secondPlayerInt: TimeoutResult = null;
    const handleKeyUp = (e?: KeyboardEvent) => {
      if (
        !e ||
        ['w', 'W', 's', 'S', 'Ц', 'ц', 'і', 'І', 'Ы', 'ы'].includes(e.key)
      ) {
        if (firstPlayerInt) clearInterval(firstPlayerInt);
        firstPlayerInt = null;
      }
      if (!e || ['o', 'O', 'l', 'L', 'щ', 'Щ', 'д', 'Д'].includes(e.key)) {
        if (secondPlayerInt) clearInterval(secondPlayerInt);
        secondPlayerInt = null;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'w':
        case 'W':
        case 'Ц':
        case 'ц':
          firstPlayerInt =
            firstPlayerInt ||
            setInterval(() => {
              setGameState((prevState) => {
                return {
                  ...prevState,
                  player1Coord: calculateCoordMinusStep(prevState.player1Coord),
                };
              });
            }, PLAYER_COORD_INTERVAL);

          break;
        case 's':
        case 'S':
        case 'ы':
        case 'Ы':
        case 'І':
        case 'і':
          firstPlayerInt =
            firstPlayerInt ||
            setInterval(() => {
              setGameState((prevState) => {
                return {
                  ...prevState,
                  player1Coord: calculateCoordPlusStep(prevState.player1Coord),
                };
              });
            }, PLAYER_COORD_INTERVAL);
          break;
        case 'o':
        case 'O':
        case 'щ':
        case 'Щ':
          secondPlayerInt =
            secondPlayerInt ||
            setInterval(() => {
              setGameState((prevState) => {
                return {
                  ...prevState,
                  player2Coord: calculateCoordMinusStep(prevState.player2Coord),
                };
              });
            }, PLAYER_COORD_INTERVAL);
          break;
        case 'l':
        case 'L':
        case 'Д':
        case 'д':
          secondPlayerInt =
            secondPlayerInt ||
            setInterval(() => {
              setGameState((prevState) => {
                return {
                  ...prevState,
                  player2Coord: calculateCoordPlusStep(prevState.player2Coord),
                };
              });
            }, PLAYER_COORD_INTERVAL);
          break;
        default:
          break;
      }
    };

    if (!isGameStarted)
      document.addEventListener(
        'keydown',
        (e) => e.key === ' ' && setIsGameStarted(true)
      );
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
    if (!isGameStarted) return;

    const interval = setInterval(() => {
      setGameState(
        ({
          ballX,
          ballY,
          ballStepX,
          ballStepY,
          player1Coord,
          player2Coord,
        }) => {
          playerLoseCheck({
            ballX,
            ballY,
            ballStepX,
            ballStepY,
            player1Coord: player1Coord,
            player2Coord: player2Coord,
            minXBorder: 0,
            maxXBorder: 100,
          });

          return {
            ballX: ballX + ballStepX,
            ballY: ballY + ballStepY,
            ballStepX:
              ballX + ballStepX >= 100 || ballX + ballStepX <= 0
                ? -ballStepX
                : ballStepX,
            ballStepY:
              ballY + ballStepY >= 100 || ballY + ballStepY <= 0
                ? -ballStepY
                : ballStepY,
            player1Coord,
            player2Coord,
          };
        }
      );
    }, BALL_COORD_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [isGameStarted]);

  if (pokemonOne == '' || pokemonTwo == '') return <Redirect to="/" />;
  return (
    <div className="page-wrapper">
      <Link to="/">
        <button className="button-close-game">Close game</button>
      </Link>
      <h1 className="header-text">Pokemons ping-pong</h1>
      <Score
        firstPlayerScore={gameScore.firstPlayerScore}
        secondPlayerScore={gameScore.secondPlayerScore}
      />
      <div className="ui-field">
        <div className="dotted-line"></div>
        <div className="game-field">
          <Ball x={gameState.ballX} y={gameState.ballY} />
        </div>
        <div className="cards-wrapper">
          <PlayerCard
            y={gameState.player1Coord}
            pokemonName={pokemonOne}
            playerCardType="left"
          />
          <PlayerCard
            y={gameState.player2Coord}
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
