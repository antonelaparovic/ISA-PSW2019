import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDoctorSearchComponent } from './patient-doctor-search.component';

describe('PatientDoctorSearchComponent', () => {
  let component: PatientDoctorSearchComponent;
  let fixture: ComponentFixture<PatientDoctorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDoctorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDoctorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
