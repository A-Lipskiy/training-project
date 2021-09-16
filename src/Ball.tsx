type Props = {
  x: string;
  y: string;
};

export function Ball({ x, y }: Props): JSX.Element {
  return <div className="ball" style={{ top: `${y}px`, left: `${x}px` }}></div>;
}
