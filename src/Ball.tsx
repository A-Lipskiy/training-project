type Props = {
  x: number;
  y: number;
};

export function Ball({ x, y }: Props): JSX.Element {
  return <div className="ball" style={{ top: `${y}px`, left: `${x}px` }}></div>;
}
