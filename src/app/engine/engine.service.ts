import { Injectable } from '@angular/core';
import { PixiService } from '../pixi/pixi.service';
import { Assets, Sprite } from 'pixi.js';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor(private pixi: PixiService){}

  public async init() {
    /* sample pixi code */
    const texture = await Assets.load('assets/sample.png');
    const rocket = new Sprite(texture);

    const renderer = this.pixi.getRenderer();

    rocket.x = renderer.width / 2;
    rocket.y = renderer.height / 2;

    rocket.anchor.x = 0.5;
    rocket.anchor.y = 0.5;

    this.pixi.getStage().addChild(rocket);

    this.pixi.getTicker().add(() => {
      rocket.rotation += 0.01;
    });
  }
}
