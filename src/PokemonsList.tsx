import { PokemonCard } from './PokemonCard';
import { useIntersectionObserver } from './useIntersectionObserver';
import { useRef } from 'react';
import { useFetchPokemonsPages } from './useFetchPokemonsPages';

export const truePageSize = 10;

type Props = {
  selectedPokemons: [string, string];
  onChange: (pokemons: [string, string]) => void;
};

export function PokemonsList({
  selectedPokemons,
  onChange,
}: Props): JSX.Element {
  const bottomRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useFetchPokemonsPages();

  useIntersectionObserver(
    bottomRef,
    () => !isFetchingNextPage && fetchNextPage(),
    0
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
  const pokemons = data?.pages
    .flatMap((pokemon) => pokemon.results)
    .map(({ name }) => (
      <PokemonCard
        key={name}
        name={name}
        isSelected={selectedPokemons.includes(name)}
        onClick={() => handleClick(name)}
      />
    ));

  if (hasNextPage) {
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
