import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicAdministratorProfileComponent } from './clinicadministrator-profile.component';

describe('ClinicAdministratorProfileComponent', () => {
  let component: ClinicAdministratorProfileComponent;
  let fixture: ComponentFixture<ClinicAdministratorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicAdministratorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicAdministratorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
