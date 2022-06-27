import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  loadedPokemons,
  loadPokemons,
} from 'src/app/state/actions/pokemon.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectListPokemons,
  selectLoading,
} from 'src/app/state/selectors/pokemons.selectors';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  pokemons$: Observable<any> = new Observable();

  constructor(
    private store: Store<AppState>,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);

    this.store.dispatch(loadPokemons());

    this.pokemonService.getPokemons().subscribe((res: any) => {
      this.store.dispatch(loadedPokemons({ pokemons: res.results }));

      this.pokemons$ = this.store.select(selectListPokemons);
    });
  }
}
