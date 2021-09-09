import { PokemonCard } from './PokemonCard';
import useIntersectionObserver from './useIntersectionObserver';
import { useState, useRef, useEffect } from 'react';

const pageSize = Math.round(window.innerHeight / 300) + 1;

type PokeListResponse = {
  count: number;
  results: Array<{ name: string; url: string }>;
};

export function PokemonsList(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(0);
  const [pokemons, setPokemons] = useState<PokeListResponse>();
  const bottomRef = useRef<HTMLDivElement>(null);
  const intersectionEntry = useIntersectionObserver(bottomRef, 1);

  useEffect(() => {
    if (intersectionEntry) setPageNumber((pageNumber) => ++pageNumber);
  }, [intersectionEntry]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${
            pageNumber * pageSize * 2
          }`
        );
        const rJSON: unknown = await response.json();
        const guard = (rJSON: unknown): rJSON is PokeListResponse =>
          typeof rJSON === 'object' &&
          rJSON !== null &&
          'count' in rJSON &&
          'results' in rJSON;
        if (guard(rJSON)) {
          setPokemons({
            count: rJSON.count,
            results: rJSON.results,
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchPokemons();
  }, [pageNumber]);

  return (
    <div>
      {(() => {
        const children = [];
        for (let i = 0; i <= pageNumber * pageSize; i++) {
          if (pokemons !== undefined && pokemons.results[i]) {
            children.push(
              <PokemonCard key={i} name={pokemons.results[i].name} />
            );
          }
        }
        return children;
      })()}
      <div ref={bottomRef} className="refElement" />
    </div>
  );
}
