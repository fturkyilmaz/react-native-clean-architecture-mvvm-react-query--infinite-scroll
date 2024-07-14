import {Character} from '../../domain/entities/Character';
import {rickAndMortyApiClient} from '../../infrastructure/network/ApiClient';
import {RickAndMortyResponse} from '../../infrastructure/network/types';
import {ICharacterRepository} from '../models/ICharacterRepository';
export class CharacterRepository implements ICharacterRepository {
  async getAllCharacters(page: number): Promise<Character[]> {
    const data = await rickAndMortyApiClient.get<RickAndMortyResponse>(
      'character',
      {
        params: {page},
      },
    );

    return data?.data?.results.map((char: any) =>
      Character.setCharacterData(char),
    );
  }
}
