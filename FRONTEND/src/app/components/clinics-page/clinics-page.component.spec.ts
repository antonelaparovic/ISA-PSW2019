import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsPageComponent } from './clinics-page.component';

describe('ClinicsPageComponent', () => {
  let component: ClinicsPageComponent;
  let fixture: ComponentFixture<ClinicsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
