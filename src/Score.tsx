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
        {firstPlayer.charAt(0).toUpperCase() + firstPlayer.slice(1)}:{' '}
        {firstPlayerScore}
      </span>
      <span className="second-player-score">
        {secondPlayer.charAt(0).toUpperCase() + secondPlayer.slice(1)}:{' '}
        {secondPlayerScore}
      </span>
    </div>
  );
}
