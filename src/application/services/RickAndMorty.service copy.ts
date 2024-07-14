export const fetchCharacters = async (page: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
  );
  return await response.json();
};
