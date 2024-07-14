import {useInfiniteQuery} from 'react-query';
import {GetPokemonsUseCase} from '../../domain/usecases/GetPokemonsUseCase';
import {PokemonRepository} from '../../application/repositories/PokemonRepository';

const pokemonRepository = new PokemonRepository();
const getPokemonsUseCase = new GetPokemonsUseCase(pokemonRepository);

const fetchPokemons = async ({pageParam = 0}) => {
  const limit = 10;
  const offset = pageParam * limit;
  return await getPokemonsUseCase.execute(limit, offset);
};

export default function usePokemonViewModel() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['pokemons'],
    ({pageParam}) => fetchPokemons({pageParam}),
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length;
      },
    },
  );

  return {
    pokemons: data ? data.pages.flat() : [],
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
}
