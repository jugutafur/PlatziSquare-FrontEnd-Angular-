import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LLearnComponent } from './l-learn.component';

describe('LLearnComponent', () => {
  let component: LLearnComponent;
  let fixture: ComponentFixture<LLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
