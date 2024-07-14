import {Character} from '../../domain/entities/Character';

export interface ICharacterRepository {
  getAllCharacters(page: number): Promise<Character[]>;
}
