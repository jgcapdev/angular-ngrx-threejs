import { createAction, props } from '@ngrx/store';
import { PokemonModel } from 'src/app/core/models/Pokemon.interface';

export const loadPokemons = createAction('[Pokemon List] Load Pokemons');

export const loadedPokemons = createAction(
  '[Pokemon List] Loaded success',
  props<{ pokemons: PokemonModel[] }>()
);

// Entre las <> ponemos el tipado del dato que se supone que estamos recibiendo.
// En nuestro caso, cuando cargue, esperamos recibir un array con todos los pokemons
