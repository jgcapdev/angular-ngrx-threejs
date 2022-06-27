// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// configs
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CubeComponent } from "./cube.component";
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';


// ngrx modules
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { pokemonsReducer } from './state/reducers/pokemons.reducer';

// angular three
import { NgtCanvasModule } from '@angular-three/core';
import { NgtMeshModule } from '@angular-three/core/meshes';
import {
  NgtBoxGeometryModule,
  NgtConeGeometryModule,
  NgtPlaneGeometryModule,
  NgtSphereGeometryModule,
} from '@angular-three/core/geometries';
import {
  NgtMeshBasicMaterialModule,
  NgtMeshStandardMaterialModule,
} from '@angular-three/core/materials';
import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
  NgtPointLightModule,
  NgtDirectionalLightModule,
} from '@angular-three/core/lights';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [	
    AppComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterComponent,
    CubeComponent,
    PokemonListComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer, pokemons: pokemonsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NgtCanvasModule,
    NgtMeshModule,
    NgtBoxGeometryModule,
    NgtConeGeometryModule,
    NgtPlaneGeometryModule,
    NgtSphereGeometryModule,
    NgtMeshBasicMaterialModule,
    NgtMeshStandardMaterialModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtPointLightModule,
    NgtDirectionalLightModule,
    NgtSobaOrbitControlsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
