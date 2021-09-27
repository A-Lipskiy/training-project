type Props = { winner: string };
export function Modal({ winner }: Props): JSX.Element {
  return (
    <div className="modal">
      <div className="modal_content">
        <h1 className="modal-text">Game over</h1>
        <h2 className="modal-text">
          {winner.charAt(0).toUpperCase() + winner.slice(1)} win
        </h2>
      </div>
    </div>
  );
}
