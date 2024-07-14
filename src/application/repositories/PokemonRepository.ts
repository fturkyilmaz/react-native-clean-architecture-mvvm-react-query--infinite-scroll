import {Pokemon} from '../../domain/entities/Pokemon';
import {fetchPokemons} from '../../infrastructure/network/ApiClient';
import {IPokemonRepository} from '../models/IPokemonRepository';

export class PokemonRepository implements IPokemonRepository {
  async getAllPokemons(limit: number, offset: number): Promise<Pokemon[]> {
    const data = await fetchPokemons(limit, offset);
    return data.results.map((poke: any) => new Pokemon(poke.name, poke.url));
  }
}
