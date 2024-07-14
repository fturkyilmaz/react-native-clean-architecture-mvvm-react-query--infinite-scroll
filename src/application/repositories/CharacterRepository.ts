import {Character} from '../../domain/entities/Character';
import {rickAndMortyApiClient} from '../../infrastructure/network/ApiClient';
import {ICharacterRepository} from '../models/ICharacterRepository';
export class CharacterRepository implements ICharacterRepository {
  async getAllCharacters(page: number): Promise<Character[]> {
    const data = await rickAndMortyApiClient.get('character', {
      params: {page},
    });

    return data?.data?.results.map(
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
