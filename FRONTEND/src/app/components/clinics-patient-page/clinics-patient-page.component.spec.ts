import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsPatientPageComponent } from './clinics-patient-page.component';

describe('ClinicsPatientPageComponent', () => {
  let component: ClinicsPatientPageComponent;
  let fixture: ComponentFixture<ClinicsPatientPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsPatientPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsPatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
