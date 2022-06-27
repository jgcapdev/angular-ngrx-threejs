import { PokemonsState } from '../core/models/pokemons.state';

// Aquí definimos las tablas de la base de datos
// Esto son datos que cualquier componente de la APP podrá consumir
export interface AppState {
  pokemons: PokemonsState;
}
