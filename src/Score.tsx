import { capitalize } from './Game';
type Props = {
  firstPlayer: string;
  secondPlayer: string;
  firstPlayerScore: number;
  secondPlayerScore: number;
};

export function Score({
  firstPlayer,
  secondPlayer,
  firstPlayerScore,
  secondPlayerScore,
}: Props): JSX.Element {
  return (
    <div className="score">
      <span className="first-player-score">
        {capitalize(firstPlayer)}: {firstPlayerScore}
      </span>
      <span className="second-player-score">
        {capitalize(secondPlayer)}: {secondPlayerScore}
      </span>
    </div>
  );
}
