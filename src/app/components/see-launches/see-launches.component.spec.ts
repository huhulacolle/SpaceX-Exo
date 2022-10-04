import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeLaunchesComponent } from './see-launches.component';

describe('SeeLaunchesComponent', () => {
  let component: SeeLaunchesComponent;
  let fixture: ComponentFixture<SeeLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeLaunchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
