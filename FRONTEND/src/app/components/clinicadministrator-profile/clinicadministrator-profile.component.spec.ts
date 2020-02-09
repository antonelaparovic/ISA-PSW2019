import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicadministratorProfileComponent } from './clinicadministrator-profile.component';

describe('ClinicadministratorProfileComponent', () => {
  let component: ClinicadministratorProfileComponent;
  let fixture: ComponentFixture<ClinicadministratorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicadministratorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicadministratorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
