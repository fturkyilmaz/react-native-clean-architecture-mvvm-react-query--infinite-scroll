import {ICharacterRepository} from '../../application/models/ICharacterRepository';
import {Character} from '../entities/Character';

export class GetCharactersUseCase {
  constructor(private characterRepository: ICharacterRepository) {}

  async execute(page: number): Promise<Character[]> {
    return await this.characterRepository.getAllCharacters(page);
  }
}
