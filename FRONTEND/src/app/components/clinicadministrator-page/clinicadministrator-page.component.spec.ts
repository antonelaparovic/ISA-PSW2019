import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicAdministratorPageComponent } from './clinicadministrator-page.component';

describe('ClinicAdministratorPageComponent', () => {
  let component: ClinicAdministratorPageComponent;
  let fixture: ComponentFixture<ClinicAdministratorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicAdministratorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicAdministratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
