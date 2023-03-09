import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PixiComponent } from './pixi.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

let fixture: ComponentFixture<PixiComponent>;

beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PixiComponent ],
      providers: [provideMockStore({})]
    }).compileComponents();
    TestBed.inject(MockStore);
    fixture = TestBed.createComponent(PixiComponent);
});

test('pixi component adds canvas after view init', () => {
    fixture.detectChanges();
    const canvas = fixture.nativeElement.querySelector('canvas');
    expect(canvas).toBeInstanceOf(HTMLCanvasElement);
});
