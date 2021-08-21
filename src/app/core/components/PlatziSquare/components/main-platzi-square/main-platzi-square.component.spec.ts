import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlatziSquareComponent } from './main-platzi-square.component';

describe('MainPlatziSquareComponent', () => {
  let component: MainPlatziSquareComponent;
  let fixture: ComponentFixture<MainPlatziSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPlatziSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlatziSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
