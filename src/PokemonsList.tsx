import { PokemonCard } from './PokemonCard';
import { useIntersectionObserver } from './useIntersectionObserver';
import { useState, useRef, useCallback } from 'react';
import { useFetchPokemonsPages } from './useFetchPokemonsPages';
import type { PokeListResponse } from './pokemonTypes.js';

export const truePageSize = 10;

const initialPageCount =
  Math.floor((Math.round(window.innerHeight / 300) + 1) / truePageSize) + 1;

export function PokemonsList(): JSX.Element {
  const [curentLastPage, setCurentLastPage] = useState(initialPageCount);
  const [pagesToUpload, setPagesToUpload] = useState<number[]>([]);
  const [pages, setPages] = useState<PokeListResponse[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const updatePageCount = useCallback(() => {
    setCurentLastPage((page) => page + 1);
  }, []);

  useIntersectionObserver(bottomRef, updatePageCount, 0);

  useFetchPokemonsPages(
    pagesToUpload,
    setPages,
    curentLastPage,
    pages,
    setPagesToUpload
  );

  const pokemons = pages
    .flatMap((pokemon) => pokemon.results)
    .map((pokemon) => <PokemonCard key={pokemon.name} name={pokemon.name} />);

  if (pages.length * truePageSize < pages[0]?.count || pages[0] === undefined) {
    return (
      <div className="pokemon-list-wrapper">
        {pokemons}
        <div ref={bottomRef} className="bottom-ref-element" />
      </div>
    );
  } else {
    return <div className="pokemon-list-wrapper">{pokemons}</div>;
  }
}
