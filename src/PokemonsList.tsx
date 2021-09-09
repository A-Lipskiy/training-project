import { PokemonCard } from './PokemonCard';
import useIntersectionObserver from './useIntersectionObserver';
import { useState, useRef, useEffect, useCallback } from 'react';

const truePageSize = 20;

const initialPageCount =
  Math.floor((Math.round(window.innerHeight / 300) + 1) / truePageSize) + 1;
type PokeListResponse = {
  count: number;
  results: Array<{ name: string; url: string }>;
};

export function PokemonsList(): JSX.Element {
  const [curentLastPage, setCurentLastPage] = useState(initialPageCount);
  const [pagesToUpload, setPagesToUpload] = useState<number[]>([]);
  const [pages, setPages] = useState<PokeListResponse[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const updatePageCount = useCallback(() => {
    setCurentLastPage((page) => page + 1);
  }, []);

  useIntersectionObserver(bottomRef, pages.length, updatePageCount, 1);

  console.log({ pagesToUpload, curentLastPage });

  useEffect(() => {
    console.log({ curentLastPage, length: pages.length, initialPageCount });
    const pagesToUpload = new Array<number>(curentLastPage - pages.length)
      .fill(pages.length)
      .map((length, index) => length + index);

    console.log({ dif: curentLastPage - pages.length });
    setPagesToUpload(pagesToUpload);
  }, [curentLastPage, pages]);

  useEffect(() => {
    async function fetchPokemons(pageNumber: number) {
      console.log(pageNumber);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${pageNumber}&limit=${truePageSize}`
        );
        const rJSON: unknown = await response.json();
        const guard = (rJSON: unknown): rJSON is PokeListResponse =>
          typeof rJSON === 'object' &&
          rJSON !== null &&
          'count' in rJSON &&
          'results' in rJSON;
        if (guard(rJSON)) {
          const page = {
            count: rJSON.count,
            results: rJSON.results,
          };
          return page;
        }
      } catch (e) {
        console.log(e);
      }
      throw new Error(`Can't fetch page ${pageNumber}`);
    }

    const fetchPages = async () => {
      try {
        const pokemonsPagesPromise = pagesToUpload.map(async (pageNumber) => {
          const pokemons = await fetchPokemons(pageNumber);

          return {
            pageNumber,
            pokemons,
          };
        });

        const pokemonsPages = await Promise.all(pokemonsPagesPromise);
        if (pagesToUpload.length === 0) return;
        setPages((oldPages) => {
          const result = [...oldPages];

          for (const { pokemons, pageNumber } of pokemonsPages) {
            if (result[pageNumber]) result[pageNumber] = pokemons;
            else result.push(pokemons);
          }
          return result;
        });
      } catch (e) {
        console.log({ e });
      }
    };

    fetchPages();
  }, [pagesToUpload]);

  const pokemons = pages.flat().flatMap((pokemon) => pokemon.results);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}

      <div ref={bottomRef} className="refElement" />
    </div>
  );
}
