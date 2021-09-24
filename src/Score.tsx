type Props = {
  firstPlayerScore: number;
  secondPlayerScore: number;
};

export function Score({
  firstPlayerScore,
  secondPlayerScore,
}: Props): JSX.Element {
  return (
    <div className="score">
      <span className="first-player-score">
        First player: {firstPlayerScore}
      </span>
      <span className="second-player-score">
        Second player: {secondPlayerScore}
      </span>
    </div>
  );
}
