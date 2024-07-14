import {Character} from '../../domain/entities/Character';
import {ICharacterRepository} from '../models/ICharacterRepository';

export class CharacterRepository implements ICharacterRepository {
  async getAllCharacters(page: number): Promise<Character[]> {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    );
    const data = await response.json();
    return data.results.map(
      (char: any) =>
        new Character(
          char.id,
          char.name,
          char.status,
          char.species,
          char.gender,
          char.image,
        ),
    );
  }
}
