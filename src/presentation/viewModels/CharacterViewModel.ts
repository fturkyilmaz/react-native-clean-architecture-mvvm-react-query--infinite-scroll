import {useInfiniteQuery} from 'react-query';
import {GetCharactersUseCase} from '../../domain/usecases/GetCharactersUseCase';
import {CharacterRepository} from '../../application/repositories/CharRepository';

const characterRepository = new CharacterRepository();
const getCharactersUseCase = new GetCharactersUseCase(characterRepository);

const fetchCharacters = async ({pageParam = 1}: {pageParam: number}) => {
  console.log('PageParam', pageParam);
  return await getCharactersUseCase.execute(pageParam);
};

export default function useCharacterViewModel() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['characters'],
    ({pageParam}) => fetchCharacters({pageParam}),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    },
  );

  return {
    characters: data ? data.pages.flat() : [],
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
}
