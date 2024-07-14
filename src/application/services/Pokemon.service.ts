export const fetchPokemons = async (limit: number, offset: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  return await response.json();
};
