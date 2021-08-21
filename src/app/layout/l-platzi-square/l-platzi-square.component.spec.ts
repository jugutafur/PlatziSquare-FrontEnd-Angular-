import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LPlatziSquareComponent } from './l-platzi-square.component';

describe('LPlatziSquareComponent', () => {
  let component: LPlatziSquareComponent;
  let fixture: ComponentFixture<LPlatziSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LPlatziSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LPlatziSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
