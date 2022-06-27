import { createReducer, on } from '@ngrx/store';
import { PokemonsState } from 'src/app/core/models/pokemons.state';
import { loadedPokemons, loadPokemons } from '../actions/pokemon.actions';

// (1) Estado inicial (como la inicializacion de las variables)
export const initialState: PokemonsState = { loading: false, pokemons: [] };

// (2) Declarar el reducer (funciones puras)
export const pokemonsReducer = createReducer(
  initialState,
  on(loadPokemons, (state) => {
    // El argumento (state) hace referencia al estado actual de la aplicación antes de que se cambie

    // con los ... (spread) le decimos que clone un nuevo objeto
    // Esto clonará el objeto del estado inicial pero con el loading a true
    return { ...state, loading: true };
  }),
  on(loadedPokemons, (state, { pokemons }) => {
    // Cuando cogemos props los podemos capturar en el segundo argumento
    return { ...state, loading: false, pokemons };
  })
);
