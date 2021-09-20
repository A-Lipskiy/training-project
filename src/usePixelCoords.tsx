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
export const usePixelCoords = ({
  elemName,
  fieldSize,
  y,
  x = 0,
}: Props): Coords => {
  if (elemName === 'player')
    return { y: ((y * (fieldSize * 0.7)) / 100).toString() + 'px', x: '' };
  else if (elemName === 'ball')
    return {
      x: ((x * (fieldSize * 0.95)) / 100).toString() + 'px',
      y: ((y * (fieldSize * 0.95)) / 100).toString() + 'px',
    };
  else return { y: '', x: '' };
};
