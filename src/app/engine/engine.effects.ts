import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EngineService } from './engine.service';
import { canvasAdded } from '../pixi/pixi.actions';
import { EMPTY, catchError, from, map, mergeMap } from 'rxjs';
import { engineLoaded } from './engine.actions';

@Injectable({
  providedIn: 'root'
})
export class EngineEffects {

  private onCanvasLoaded$ = createEffect(() => this.actions$.pipe(
    ofType(canvasAdded))
    .pipe(mergeMap(() => from(this.game.init())))
    .pipe(map(() => engineLoaded())));

  constructor(private actions$: Actions, private game: EngineService) { }
}