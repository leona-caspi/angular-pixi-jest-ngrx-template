import { Injectable } from '@angular/core';
import { Application } from 'pixi.js';

@Injectable({
  providedIn: 'root'
})
export class PixiService {

  private readonly pixi = new Application();

  public getCanvas() {
    return this.pixi.view;
  }

  public getRenderer() {
    return this.pixi.renderer;
  }

  public getStage() {
    return this.pixi.stage;
  }

  public getTicker() {
    return this.pixi.ticker;
  }
}
