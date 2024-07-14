import {Pokemon} from '../../domain/entities/Pokemon';
import {pokeApiClient} from '../../infrastructure/network/ApiClient';
import {IPokemonRepository} from '../models/IPokemonRepository';

export class PokemonRepository implements IPokemonRepository {
  async getAllPokemons(limit: number, offset: number): Promise<Pokemon[]> {
    const response = await pokeApiClient.get('pokemon', {
      params: {offset, limit},
    });
    const data = response?.data;
    return data?.results?.map(({name, url}: any) =>
      Pokemon.setPokemonData({
        image: `https://img.pokemondb.net/artwork/${name}.jpg`,
        name,
        url,
      }),
    );
  }
}
