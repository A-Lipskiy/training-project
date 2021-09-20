import { calculatePixelCoords } from './calculatePixelCoords';
type Props = {
  x: number;
  y: number;
  fieldSize: number;
};

export function Ball({ x, y, fieldSize }: Props): JSX.Element {
  const ballPixelCoords = calculatePixelCoords({
    elemName: 'ball',
    fieldSize,
    y,
    x,
  });
  return (
    <div
      className="ball"
      style={{
        top: `${ballPixelCoords.y}`,
        left: `${ballPixelCoords.x}`,
      }}
    ></div>
  );
}
