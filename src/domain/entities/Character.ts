export interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export class Character {
  constructor(
    public id: number,
    public name: string,
    public status: string,
    public species: string,
    public gender: string,
    public image: string,
  ) {}

  static setCharacterData(obj: CharacterData): Character {
    return new Character(
      obj.id,
      obj.name,
      obj.status,
      obj.species,
      obj.gender,
      obj.image,
    );
  }
}
