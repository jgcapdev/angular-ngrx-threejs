import { createSelector } from '@ngrx/store';
import { PokemonsState } from 'src/app/core/models/pokemons.state';
import { AppState } from '../app.state';

// Selector que tiene relacion con la propiedad 'pokemons' del AppState
export const selectPokemonsFeature = (state: AppState) => state.pokemons;

// De esta manera estoy accediendo a la propiedad 'pokemons' de este objeto que he creado en pasos anteriores
/**
 * "pokemons": {
 *    "loading": "false",
 *    "pokemons": []
 * }
 */
export const selectListPokemons = createSelector(
  selectPokemonsFeature,
  (state: PokemonsState) => {
    return state.pokemons;
  }
);

export const selectLoading = createSelector(
  selectPokemonsFeature,
  (state: PokemonsState) => {
    return state.loading;
  }
);
