import { Link, Redirect } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { Ball } from './Ball';
import { PlayerCard } from './PlayerCard';

type TimeoutResult = ReturnType<typeof setTimeout> | null;

type Props = {
  pokemonOne: string;
  pokemonTwo: string;
};
export function Game({ pokemonOne, pokemonTwo }: Props): JSX.Element {
  const [ballCoordY, setBallCoordY] = useState(50);
  const [ballCoordX, setBallCoordX] = useState(50);
  const [ballVelY, setBallVelY] = useState(1);
  const [ballVelX, setBallVelX] = useState(2);
  const [player1Coord, setPlayer1Coord] = useState(50);
  const [player2Coord, setPlayer2Coord] = useState(50);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const generateBallCoordsCallback = useCallback(() => {
    let BallInt: TimeoutResult = null;
    const cleanHandle = () => {
      if (BallInt) clearInterval(BallInt);
      BallInt = null;
    };

    const handleGameStarted = () => {
      BallInt =
        BallInt ||
        setInterval(() => {
          setBallCoordY((y) => y + ballVelY);
          setBallCoordX((x) => x + ballVelX);
        }, 30);
    };
    return { handleGameStarted, cleanHandle };
  }, [ballVelX, ballVelY]);

  const generateHandlePlayCoordsCallbacks = useCallback(() => {
    let firstPlayerInt: TimeoutResult = null;
    let secondPlayerInt: TimeoutResult = null;

    const cleanHandle = () => {
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
                player1Coord > 0 ? player1Coord - 5 : player1Coord
              );
            }, 40);

          break;
        case 's':
        case 'S':
          firstPlayerInt =
            firstPlayerInt ||
            setInterval(() => {
              setPlayer1Coord((player1Coord) =>
                player1Coord < 100 ? player1Coord + 5 : player1Coord
              );
            }, 40);
          break;
        case 'ArrowUp':
          secondPlayerInt =
            secondPlayerInt ||
            setInterval(() => {
              setPlayer2Coord((player2Coord) =>
                player2Coord > 0 ? player2Coord - 5 : player2Coord
              );
            }, 40);
          break;
        case 'ArrowDown':
          secondPlayerInt =
            secondPlayerInt ||
            setInterval(() => {
              setPlayer2Coord((player2Coord) =>
                player2Coord < 100 ? player2Coord + 5 : player2Coord
              );
            }, 40);
          break;
        default:
          break;
      }
    };

    return { handleKeyDown, cleanHandle };
  }, []);

  useEffect(() => {
    if (isGameStarted) {
      const { handleGameStarted, cleanHandle } = generateBallCoordsCallback();
      handleGameStarted();
      return () => {
        cleanHandle();
      };
    }
  }, [generateBallCoordsCallback, isGameStarted]);

  useEffect(() => {
    if (isGameStarted) {
      const { cleanHandle, handleKeyDown } =
        generateHandlePlayCoordsCallbacks();
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', cleanHandle);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', cleanHandle);
      };
    }
  }, [generateHandlePlayCoordsCallbacks, isGameStarted]);

  useEffect(() => {
    if (ballCoordX >= 100) {
      setBallVelX((prevVel) => -prevVel);
    }
    if (ballCoordX <= 0) {
      setBallVelX((prevVel) => -prevVel);
    }
  }, [ballCoordX]);

  useEffect(() => {
    if (ballCoordY >= 100) {
      setBallVelY((prevVel) => -prevVel);
    }
    if (ballCoordY <= 0) {
      setBallVelY((prevVel) => -prevVel);
    }
  }, [ballCoordY]);

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
