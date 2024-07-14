export interface PokeApiResponse {
  count: number;
  next: string;
  previous: string;
  results: PokeApiResult[];
}

export interface PokeApiResult {
  name: string;
  url: string;
}

export interface RickAndMortyResponse {
  info: Info;
  results: RickAndMortyResult[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: any;
}

export interface RickAndMortyResult {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}
