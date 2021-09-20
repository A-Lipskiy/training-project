type Props = {
  elemName: string;
  fieldSize: number;
  y: number;
  x?: number;
};
type Coords = {
  x: string;
  y: string;
};
export const calculatePixelCoords = ({ elemName, y, x = 0 }: Props): Coords => {
  if (elemName === 'player') return { y: y.toString() + '%', x: '' };
  else if (elemName === 'ball')
    return {
      x: x.toString() + '%',
      y: y.toString() + '%',
    };
  return { y: '', x: '' };
};
