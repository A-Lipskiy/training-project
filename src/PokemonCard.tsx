import { useState, useEffect } from 'react';

type PokeResponse = {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
};

export default function PokemonCard({ id }: { id: number }): JSX.Element {
  const [data, setData] = useState<PokeResponse>({
    name: '',
    height: 0,
    weight: 0,
    base_experience: 0,
  });
  async function fetchPokemon(id: number) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const rJSON: unknown = await response.json();
      const guard = (rJSON: unknown): rJSON is PokeResponse =>
        typeof rJSON === 'object' &&
        rJSON !== null &&
        'name' in rJSON &&
        'height' in rJSON &&
        'weight' in rJSON &&
        'base_experience' in rJSON;
      if (guard(rJSON)) {
        setData({
          name: rJSON.name,
          height: rJSON.height,
          weight: rJSON.weight,
          base_experience: rJSON.base_experience,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchPokemon(id).catch((error) => {
      throw error;
    });
  }, []);
  return (
    <div>
      <p>
        <span>Name: {data.name}</span>
        <br></br>
        <span>Height: {data.height}</span>
        <br></br>
        <span>Weight: {data.weight}</span>
        <br></br>
        <span>Base experience: {data.base_experience}</span>
        <br></br>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        ></img>
      </p>
    </div>
  );
}
