import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryPageComponent } from './medical-history-page.component';

describe('MedicalHistoryPageComponent', () => {
  let component: MedicalHistoryPageComponent;
  let fixture: ComponentFixture<MedicalHistoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalHistoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalHistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
