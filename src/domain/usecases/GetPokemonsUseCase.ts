import {IPokemonRepository} from '../../application/models/IPokemonRepository';
import {Pokemon} from '../entities/Pokemon';

export class GetPokemonsUseCase {
  constructor(private pokemonRepository: IPokemonRepository) {}

  async execute(limit: number, offset: number): Promise<Pokemon[]> {
    return await this.pokemonRepository.getAllPokemons(limit, offset);
  }
}
