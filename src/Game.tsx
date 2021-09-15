type Props = {
  names: string[];
  setIsGameOpen: (isOpen: boolean) => void;
};

export function Game({ names, setIsGameOpen }: Props): JSX.Element {
  return (
    <div>
      <button
        className="close-button"
        type="button"
        value="Close Game"
        onClick={() => setIsGameOpen(false)}
      ></button>
    </div>
  );
}
