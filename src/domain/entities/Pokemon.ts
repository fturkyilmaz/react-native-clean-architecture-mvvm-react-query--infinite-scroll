export interface PokemonData {
  name: string;
  url: string;
  image: string;
}

export class Pokemon {
  constructor(public name: string, public url: string, public image: string) {}

  static setPokemonData(obj: PokemonData): Pokemon {
    return new Pokemon(obj.name, obj.url, obj.image);
  }
}

// export interface PokemonData {
//   name: string;
//   url: string;
//   image: string;
// }

// export class Pokemon {
//   private readonly data: PokemonData;

//   constructor(data: PokemonData) {
//     this.data = data;
//   }

//   get name(): string {
//     return this.data.name;
//   }

//   get url(): string {
//     return this.data.url;
//   }

//   get image(): string {
//     return this.data.image;
//   }
// }
