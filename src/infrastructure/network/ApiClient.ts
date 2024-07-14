export const fetchCharacters = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
  );
  return await response.json();
};

export const fetchPokemons = async (limit: number, offset: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  return await response.json();
};
