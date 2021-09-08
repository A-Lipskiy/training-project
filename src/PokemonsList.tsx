import PokemonCard from './PokemonCard';
import useIntersectionObserver from './useIntersectionObserver';
import { useState, useRef, useEffect } from 'react';

const pageSize = 2;

export default function PokemonsList(): JSX.Element {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isBottomVisible: unknown = useIntersectionObserver(ref, {
    threshold: 1,
  });

  useEffect(() => {
    if (isBottomVisible) setCount(count + 1);
  }, [isBottomVisible]);

  return (
    <div>
      {(() => {
        const children = [];
        for (let i = 1; i <= count * pageSize; i++) {
          children.push(<PokemonCard key={i} id={i} />);
        }
        return children;
      })()}
      <div ref={ref} style={{ width: '100%', height: '5px' }}>
        Bottom
      </div>
    </div>
  );
}
