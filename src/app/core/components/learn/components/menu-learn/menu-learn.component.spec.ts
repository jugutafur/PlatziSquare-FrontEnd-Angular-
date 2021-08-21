import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLearnComponent } from './menu-learn.component';

describe('MenuLearnComponent', () => {
  let component: MenuLearnComponent;
  let fixture: ComponentFixture<MenuLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
