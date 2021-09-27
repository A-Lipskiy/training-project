import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Ball } from './Ball';
import { PlayerCard } from './PlayerCard';
import { Score } from './Score';
import { Modal } from './Modal';

type TimeoutResult = ReturnType<typeof setTimeout> | null;

type Props = {
  pokemonOne: string;
  pokemonTwo: string;
};

const initialBallState = {
  ballX: 50,
  ballY: 50,
  ballStepX: getArrayRandomElement([-2, 2]),
  ballStepY: getArrayRandomElement([-1, 1]),
};
const initialCardsState = 50;

const initialScoreState = {
  firstPlayerScore: 0,
  secondPlayerScore: 0,
};

const PLAYER_COORD_INTERVAL = 10;
const BALL_COORD_INTERVAL = 30;
const PLAYER_COORD_STEP = 2;
const HALF_CARD_COORDS = 12;

function calculateCoordMinusStep(oldCoord: number): number {
  return oldCoord - HALF_CARD_COORDS > 0
    ? oldCoord - PLAYER_COORD_STEP
    : oldCoord;
}

function calculateCoordPlusStep(oldCoord: number): number {
  return oldCoord + HALF_CARD_COORDS < 100
    ? oldCoord + PLAYER_COORD_STEP
    : oldCoord;
}
function getArrayRandomElement(arr: number[]): number {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
export function capitalize(strToCapitalize: string): string {
  return strToCapitalize.charAt(0).toUpperCase() + strToCapitalize.slice(1);
}

export function Game({ pokemonOne, pokemonTwo }: Props): JSX.Element {
  const [ballState, setBallState] = useState(initialBallState);
  const [gameScore, setGameScore] = useState(initialScoreState);
  const [player1Coord, setPlayer1Coord] = useState(initialCardsState);
  const [player2Coord, setPlayer2Coord] = useState(initialCardsState);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [winner, setWinner] = useState<string | null>();

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
      if (['w', 'W', 'Ц', 'ц'].includes(e.key)) {
        firstPlayerInt =
          firstPlayerInt ||
          setInterval(() => {
            setPlayer1Coord(calculateCoordMinusStep);
          }, PLAYER_COORD_INTERVAL);
      } else if (['s', 'S', 'Ы', 'ы', 'І', 'і'].includes(e.key)) {
        firstPlayerInt =
          firstPlayerInt ||
          setInterval(() => {
            setPlayer1Coord(calculateCoordPlusStep);
          }, PLAYER_COORD_INTERVAL);
      } else if (['O', 'o', 'Щ', 'щ'].includes(e.key)) {
        secondPlayerInt =
          secondPlayerInt ||
          setInterval(() => {
            setPlayer2Coord(calculateCoordMinusStep);
          }, PLAYER_COORD_INTERVAL);
      } else if (['L', 'l', 'Д', 'д'].includes(e.key)) {
        secondPlayerInt =
          secondPlayerInt ||
          setInterval(() => {
            setPlayer2Coord(calculateCoordPlusStep);
          }, PLAYER_COORD_INTERVAL);
      }
    };

    const handleStartGame = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        setIsGameStarted(true);
        setWinner(null);
      }
    };

    if (!isGameStarted) {
      document.addEventListener('keydown', handleStartGame);
      return () => document.removeEventListener('keydown', handleStartGame);
    }

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
      setBallState(({ ballX, ballY, ballStepX, ballStepY }) => {
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
        };
      });
    }, BALL_COORD_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [isGameStarted]);

  useEffect(() => {
    const { ballX, ballY } = ballState;

    if (ballX === 0) {
      if (
        ballY + HALF_CARD_COORDS <= player1Coord ||
        ballY - HALF_CARD_COORDS >= player1Coord
      ) {
        setGameScore((prevState) => {
          return {
            ...prevState,
            secondPlayerScore: prevState.secondPlayerScore + 1,
          };
        });
        setIsGameStarted(false);
      }
    } else if (ballX === 100) {
      if (
        ballY + HALF_CARD_COORDS <= player2Coord ||
        ballY - HALF_CARD_COORDS >= player2Coord
      ) {
        setGameScore((prevState) => {
          return {
            ...prevState,
            firstPlayerScore: prevState.firstPlayerScore + 1,
          };
        });
        setIsGameStarted(false);
      }
    }
  }, [ballState, player1Coord, player2Coord]);

  useEffect(() => {
    if (gameScore.firstPlayerScore === 5 || gameScore.secondPlayerScore === 5) {
      setBallState(initialBallState);
      setGameScore(initialScoreState);
      setPlayer1Coord(initialCardsState);
      setPlayer2Coord(initialCardsState);
      setWinner(
        gameScore.firstPlayerScore > gameScore.secondPlayerScore
          ? pokemonOne
          : pokemonTwo
      );
      setBallState((prevState) => {
        return {
          ...prevState,
          ballStepX: getArrayRandomElement([-2, 2]),
          ballStepY: getArrayRandomElement([-1, 1]),
        };
      });
    }
  }, [gameScore, pokemonOne, pokemonTwo]);

  if (pokemonOne == '' || pokemonTwo == '') return <Redirect to="/" />;
  return (
    <div className="page-wrapper">
      {winner && <Modal winner={winner} />}
      <Link to="/">
        <button className="button-close-game">Close game</button>
      </Link>
      <h1 className="header-text">Pokemons ping-pong</h1>
      <Score
        firstPlayer={pokemonOne}
        secondPlayer={pokemonTwo}
        firstPlayerScore={gameScore.firstPlayerScore}
        secondPlayerScore={gameScore.secondPlayerScore}
      />
      <div className="ui-field">
        <div className="dotted-line"></div>
        <div className="game-field">
          <Ball x={ballState.ballX} y={ballState.ballY} />
        </div>
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
      <button
        className={`button-start-game ${
          !isGameStarted ? 'button-visible' : ''
        }`}
        onClick={() => {
          setIsGameStarted(true);
          setWinner(null);
        }}
      >
        Start Game
      </button>
    </div>
  );
}
