export type PokeListResponse = {
  count: number;
  results: Array<{ name: string; url: string }>;
};

export type PokeResponse = {
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: { other: { dream_world: { front_default: string } } };
};
