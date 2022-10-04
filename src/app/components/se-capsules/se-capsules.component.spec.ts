import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeCapsulesComponent } from './se-capsules.component';

describe('SeCapsulesComponent', () => {
  let component: SeCapsulesComponent;
  let fixture: ComponentFixture<SeCapsulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeCapsulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeCapsulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
