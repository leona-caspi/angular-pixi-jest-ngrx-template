import { Component, ElementRef } from '@angular/core';
import { PixiService } from './pixi.service';
import { Store } from '@ngrx/store';
import { canvasAdded } from './pixi.actions';

@Component({
  selector: 'app-pixi',
  template: '',
})
export class PixiComponent {

  constructor(
    private element: ElementRef,
    private store: Store,
    private pixi: PixiService
  ) { }

  ngAfterViewInit() {
    this.addCanvas();
    this.dispatchCanvasAdded();
  }

  addCanvas() {
    this.element.nativeElement.appendChild(this.pixi.getCanvas());
  }

  dispatchCanvasAdded(){
    this.store.dispatch(canvasAdded())
  }
}
