import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordPageComponent } from './medical-record-page.component';

describe('MedicalRecordPageComponent', () => {
  let component: MedicalRecordPageComponent;
  let fixture: ComponentFixture<MedicalRecordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalRecordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
