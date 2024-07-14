import {Pokemon} from '../../domain/entities/Pokemon';

export interface IPokemonRepository {
  getAllPokemons(limit: number, offset: number): Promise<Pokemon[]>;
}
