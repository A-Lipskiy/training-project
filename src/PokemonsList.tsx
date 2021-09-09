import { PokemonCard } from './PokemonCard';
import useIntersectionObserver from './useIntersectionObserver';
import { useState, useRef, useEffect } from 'react';

const pageSize = Math.round(window.innerHeight / 300) + 1;

export function PokemonsList(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const intersectionEntry = useIntersectionObserver(bottomRef, 1);

  useEffect(() => {
    if (intersectionEntry) setPageNumber((pageNumber) => ++pageNumber);
  }, [intersectionEntry]);

  return (
    <div>
      {(() => {
        const children = [];
        for (let i = 1; i <= pageNumber * pageSize; i++) {
          children.push(<PokemonCard key={i} id={i} />);
        }
        return children;
      })()}
      <div ref={bottomRef} className="refElement" />
    </div>
  );
}
