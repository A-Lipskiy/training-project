import { PokemonCard } from './PokemonCard';
import { useIntersectionObserver } from './useIntersectionObserver';
import { useState, useRef, useCallback } from 'react';
import { useFetchPokemonsPages } from './useFetchPokemonsPages';
import type { PokeListResponse } from './pokemonTypes.js';

export const truePageSize = 10;

const initialPageCount =
  Math.floor((Math.round(window.innerHeight / 300) + 1) / truePageSize) + 1;

type Props = {
  selectedPokemons: [string, string];
  onChange: (pokemons: [string, string]) => void;
};

export function PokemonsList({
  selectedPokemons,
  onChange,
}: Props): JSX.Element {
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

  function handleClick(name: string): void {
    const indexInSelectedPokemons = selectedPokemons.indexOf(name);
    const newSelectedPokemons: [string, string] = [...selectedPokemons];
    if (indexInSelectedPokemons > -1) {
      newSelectedPokemons.splice(indexInSelectedPokemons, 1);
    } else {
      newSelectedPokemons.push(name);
      if (newSelectedPokemons.length > 2) {
        newSelectedPokemons.shift();
      }
    }
    onChange(newSelectedPokemons);
  }
  const pokemons = pages
    .flatMap((pokemon) => pokemon.results)
    .map(({ name }) => (
      <PokemonCard
        key={name}
        name={name}
        isSelected={selectedPokemons.includes(name)}
        onClick={() => handleClick(name)}
      />
    ));

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
