type Props = {
  elemName: string;
  fieldSize: number;
  y: number;
  x?: number;
};
export const usePixelCoords = ({
  elemName,
  fieldSize,
  y,
  x = 0,
}: Props): { x: string; y: string } => {
  if (elemName === 'player')
    return { y: ((y * (fieldSize * 0.7)) / 100).toString() + 'px', x: '' };
  else if (elemName === 'ball')
    return {
      x: ((x * (fieldSize * 0.95)) / 100).toString() + 'px',
      y: ((y * (fieldSize * 0.95)) / 100).toString() + 'px',
    };
  else return { y: '', x: '' };
};
