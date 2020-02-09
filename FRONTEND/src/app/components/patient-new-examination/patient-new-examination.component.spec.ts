import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNewExaminationComponent } from './patient-new-examination.component';

describe('PatientNewExaminationComponent', () => {
  let component: PatientNewExaminationComponent;
  let fixture: ComponentFixture<PatientNewExaminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientNewExaminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientNewExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
