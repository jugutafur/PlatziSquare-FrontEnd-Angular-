import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlatziSquareComponent } from './menu-platzi-square.component';

describe('MenuPlatziSquareComponent', () => {
  let component: MenuPlatziSquareComponent;
  let fixture: ComponentFixture<MenuPlatziSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPlatziSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPlatziSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
