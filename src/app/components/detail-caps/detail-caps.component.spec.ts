import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCapsComponent } from './detail-caps.component';

describe('DetailCapsComponent', () => {
  let component: DetailCapsComponent;
  let fixture: ComponentFixture<DetailCapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
