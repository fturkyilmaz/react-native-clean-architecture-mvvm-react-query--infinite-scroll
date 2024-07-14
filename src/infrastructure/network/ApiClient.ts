import axios from 'axios';

// Rick and Morty API Client
const rickAndMortyApiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 10000,
});

rickAndMortyApiClient.interceptors.request.use(
  config => {
    console.log('Rick and Morty API Request:', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

rickAndMortyApiClient.interceptors.response.use(
  response => {
    console.log('Rick and Morty API Response:', response?.data);
    return response;
  },
  error => {
    console.error('Rick and Morty API Response Error:', error);
    return Promise.reject(error);
  },
);

// PokeAPI Client
const pokeApiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 10000,
});

pokeApiClient.interceptors.request.use(
  config => {
    console.log('PokeAPI Request:', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

pokeApiClient.interceptors.response.use(
  response => {
    console.log('PokeAPI Response:', response?.data);
    return response;
  },
  error => {
    console.error('PokeAPI Response Error:', error);
    return Promise.reject(error);
  },
);

export {rickAndMortyApiClient, pokeApiClient};
