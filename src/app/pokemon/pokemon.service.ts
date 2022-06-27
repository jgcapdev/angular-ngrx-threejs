import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private URI: String = '';

  constructor(private http: HttpClient) {
    this.URI = `https://pokeapi.co/api/v2/`;
  }

  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon`);
  }
}
