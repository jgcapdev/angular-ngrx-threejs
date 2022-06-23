import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// COUNTER
import { CounterComponent } from './counter/counter/counter.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';

// NGRX
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';

// ANGULAR THREE
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

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
