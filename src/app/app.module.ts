import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { PixiComponent } from './pixi/pixi.component';
import { EngineEffects } from './engine/engine.effects';

@NgModule({
  declarations: [
    AppComponent,
    PixiComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([EngineEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
