import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsAndDirectivesComponent } from './basics-and-directives.component';

describe('BasicsAndDirectivesComponent', () => {
  let component: BasicsAndDirectivesComponent;
  let fixture: ComponentFixture<BasicsAndDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsAndDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsAndDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
