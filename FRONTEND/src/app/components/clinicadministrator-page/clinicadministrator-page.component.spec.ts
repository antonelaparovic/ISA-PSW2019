import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicadministratorPageComponent } from './clinicadministrator-page.component';

describe('ClinicadministratorPageComponent', () => {
  let component: ClinicadministratorPageComponent;
  let fixture: ComponentFixture<ClinicadministratorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicadministratorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicadministratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
