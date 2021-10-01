import { capitalize } from './Game';
type Props = { winner: string };
export function Modal({ winner }: Props): JSX.Element {
  if (winner === '')
    return (
      <div className="modal">
        <div className="modal_content">
          <h3 className="modal-headers">
            Press "W" "S" buttons to move the left pokemon
          </h3>
          <h3 className="modal-headers">
            And "O" "L" buttons to move the right pokemon
          </h3>
          <h3 className="modal-headers">
            Or move your hands to control both pokemons :-)
          </h3>
        </div>
      </div>
    );
  else
    return (
      <div className="modal">
        <div className="modal_content">
          <h1 className="modal-headers">Game over</h1>
          <h2 className="modal-headers">{capitalize(winner)} win</h2>
          <p>Press "W" "S" buttons to move the left pokemon</p>
          <p>And "O" "L" buttons to move the left pokemon</p>
          <p>Or move your hands to move both pokemons :-)</p>
        </div>
      </div>
    );
}
